import { PressableScale } from "@/components/PressableScale";
import { Body, Heading, Label } from "@/components/Typography";
import {
  type SafewPageResource,
  extractAndRecommendPages,
} from "@/constants/safewPages";
import { colors, shadow } from "@/constants/theme";
import { useKeyboardVisible } from "@/hooks/useKeyboardVisible";
import { Ionicons } from "@expo/vector-icons";
import * as Clipboard from "expo-clipboard";
import * as Haptics from "expo-haptics";
import { useRouter } from "expo-router";
import { deleteDoc, doc, getDoc, setDoc } from "firebase/firestore";
import {
  onAuthStateChanged,
  type User,
} from "firebase/auth";
import {
  type ComponentProps,
  type ComponentRef,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  ActivityIndicator,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { KeyboardAvoidingView } from "react-native-keyboard-controller";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { auth } from "../firebase";
import { db } from "../firestore";

type Route = Parameters<ReturnType<typeof useRouter>["navigate"]>[0];

export interface ChatMessage {
  id: string;
  role: "user" | "model";
  text: string;
  timestamp: string;
  recommendedPages?: SafewPageResource[];
  isError?: boolean;
  isEdited?: boolean;
}

export interface ChatSession {
  id: string;
  title: string;
  updatedAt: string;
  messages: ChatMessage[];
}

const WELCOME_MESSAGE =
  "Hi, I’m **Saaya** — your safety companion 🤝\n\nI’m here to help you stay informed, find safer options, understand your rights, and feel more prepared when something doesn’t feel right.\n\n**What can I help you with today?**";

const STARTER_PROMPTS = [
  "What type of rights do I have in marriage?",
  "I feel like someone is following me—how do I get to safety without confronting them?",
  "What are my rights if police refuse to file my complaint?",
  "Someone is threatening me online—what are my Digital Rights?",
];

function formatTime(date: Date): string {
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

function formatSessionDate(date: Date): string {
  return date.toLocaleDateString([], {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function getInitialMessages(): ChatMessage[] {
  return [
    {
      id: "saaya_welcome",
      role: "model",
      text: WELCOME_MESSAGE,
      timestamp: formatTime(new Date()),
    },
  ];
}

function createNewSession(): ChatSession {
  return {
    id: `chat_${Date.now()}`,
    title: "New conversation",
    updatedAt: formatSessionDate(new Date()),
    messages: getInitialMessages(),
  };
}

function deriveSessionTitle(messages: ChatMessage[]): string {
  const firstUserMsg = messages.find((m) => m.role === "user");
  if (!firstUserMsg) return "New conversation";
  const text = firstUserMsg.text.trim();
  return text.length > 48 ? `${text.slice(0, 48)}...` : text;
}

const API_BASE_URL =
  process.env.EXPO_PUBLIC_API_URL ?? "http://localhost:5000";

async function generateSaayaResponse(
  userMessage: string,
  history: { role: "user" | "model"; text: string }[],
  fastReplyMode = true,
): Promise<{ reply: string; recommendedPages: SafewPageResource[] }> {
  const response = await fetch(`${API_BASE_URL}/api/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message: userMessage,
      history,
      fastReplyMode,
    }),
  });

  if (!response.ok) {
    throw new Error(`Saaya server error: ${response.status}`);
  }

  const data = await response.json();

  if (!data.reply || typeof data.reply !== "string") {
    throw new Error("Saaya returned an empty response.");
  }

  const { cleanReply, recommendedPages } = extractAndRecommendPages(
    data.reply,
    userMessage,
  );

  return {
    reply: cleanReply,
    recommendedPages,
  };
}

function renderFormattedText(text: string, isUser: boolean, isError?: boolean) {
  const textColorClass = isUser
    ? "text-white"
    : isError
      ? "text-beacon-dark"
      : "text-midnight";

  const lines = text.split("\n");

  return (
    <View className="gap-1.5">
      {lines.map((rawLine, lineIdx) => {
        const trimmed = rawLine.trim();
        if (!trimmed) {
          return <View key={lineIdx} className="h-1" />;
        }

        const isHeading = /^#{1,3}\s+/.test(trimmed);
        const cleanedLine = isHeading
          ? trimmed.replace(/^#{1,3}\s+/, "")
          : rawLine;

        const segments = cleanedLine.split(/(\*\*[^*]+\*\*)/g);

        return (
          <Text
            key={lineIdx}
            className={`${
              isHeading
                ? "font-bodyBold text-[15px] mt-1"
                : "font-body text-[15px]"
            } leading-[22px] ${textColorClass}`}
          >
            {segments.map((seg, segIdx) => {
              if (
                seg.startsWith("**") &&
                seg.endsWith("**") &&
                seg.length > 4
              ) {
                return (
                  <Text key={segIdx} className="font-bodyBold">
                    {seg.slice(2, -2)}
                  </Text>
                );
              }
              return seg;
            })}
          </Text>
        );
      })}
    </View>
  );
}

export default function SafetyAssistantScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const keyboardVisible = useKeyboardVisible();
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [authReady, setAuthReady] = useState(false);
  const [sessions, setSessions] = useState<ChatSession[]>([]);
  const [activeSessionId, setActiveSessionId] = useState<string>("");
  const [hasHydrated, setHasHydrated] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFastReplyMode, setIsFastReplyMode] = useState(true);
  const [inputText, setInputText] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [copiedMessageId, setCopiedMessageId] = useState<string | null>(null);
  const [editingMessageId, setEditingMessageId] = useState<string | null>(null);
  const [editingText, setEditingText] = useState("");
  const scrollViewRef = useRef<ComponentRef<typeof ScrollView> | null>(null);

  const activeSession =
    sessions.find((s) => s.id === activeSessionId) ??
    sessions[0] ??
    createNewSession();
  const messages = activeSession.messages;

  // Saaya is tied to the existing SAFE-W Firebase account.
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setAuthReady(true);

      if (!user) {
        setSessions([]);
        setActiveSessionId("");
        setHasHydrated(true);
        return;
      }

      setSessions([]);
      setActiveSessionId("");
      setHasHydrated(false);

      const loadCloudHistory = async () => {
        try {
          const docRef = doc(
            db,
            "users",
            user.uid,
            "private",
            "saayaChats",
          );
          const snap = await getDoc(docRef);

          if (snap.exists()) {
            const cloudSessions = snap.data().sessions as
              | ChatSession[]
              | undefined;

            if (Array.isArray(cloudSessions) && cloudSessions.length > 0) {
              setSessions(cloudSessions);
              setActiveSessionId(cloudSessions[0].id);
            } else {
              const fresh = createNewSession();
              setSessions([fresh]);
              setActiveSessionId(fresh.id);
            }
          } else {
            const fresh = createNewSession();
            setSessions([fresh]);
            setActiveSessionId(fresh.id);
          }
        } catch {
          const fresh = createNewSession();
          setSessions([fresh]);
          setActiveSessionId(fresh.id);
        } finally {
          setHasHydrated(true);
        }
      };

      void loadCloudHistory();
    });

    return unsubscribe;
  }, []);

  // Save only conversations that contain at least one user message.
  // This keeps blank/new chats out of Firestore.
  useEffect(() => {
    if (!hasHydrated || !currentUser) return;

    const savedSessions = sessions.filter((session) =>
      session.messages.some((message) => message.role === "user"),
    );

    const docRef = doc(
      db,
      "users",
      currentUser.uid,
      "private",
      "saayaChats",
    );

    if (savedSessions.length === 0) {
      void deleteDoc(docRef).catch(() => {});
      return;
    }

    void setDoc(docRef, {
      sessions: savedSessions.slice(0, 25),
    }).catch(() => {});
  }, [sessions, currentUser, hasHydrated]);

  useEffect(() => {
    const timer = setTimeout(() => {
      scrollViewRef.current?.scrollToEnd({ animated: true });
    }, 80);
    return () => clearTimeout(timer);
  }, [messages.length, isSending, activeSessionId]);

  // Keep the latest message in view when the keyboard opens (the list shrinks
  // from the bottom). Skipped while editing an older message so its box stays put.
  useEffect(() => {
    if (!keyboardVisible || editingMessageId) return;
    const timer = setTimeout(() => {
      scrollViewRef.current?.scrollToEnd({ animated: true });
    }, 150);
    return () => clearTimeout(timer);
  }, [keyboardVisible, editingMessageId]);

  const updateActiveSessionMessages = (
    updater: (prev: ChatMessage[]) => ChatMessage[],
  ) => {
    setSessions((prevSessions) =>
      prevSessions.map((session) => {
        if (session.id !== activeSession.id) return session;
        const nextMessages = updater(session.messages);
        return {
          ...session,
          title: deriveSessionTitle(nextMessages),
          updatedAt: formatSessionDate(new Date()),
          messages: nextMessages,
        };
      }),
    );
  };

  const handleSendMessage = async (overrideText?: string) => {
    const trimmed = (overrideText ?? inputText).trim();
    if (!trimmed || isSending) return;

    const userMsg: ChatMessage = {
      id: `user_${Date.now()}`,
      role: "user",
      text: trimmed,
      timestamp: formatTime(new Date()),
    };

    const historyForApi = messages
      .filter((m) => !m.isError)
      .map((m) => ({
        role: m.role,
        text: m.text,
      }));

    if (!overrideText) {
      setInputText("");
    }

    updateActiveSessionMessages((prev) => [...prev, userMsg]);
    setIsSending(true);

    try {
      const result = await generateSaayaResponse(
        trimmed,
        historyForApi,
        isFastReplyMode,
      );

      const modelMsg: ChatMessage = {
        id: `model_${Date.now()}`,
        role: "model",
        text: result.reply,
        timestamp: formatTime(new Date()),
        recommendedPages: result.recommendedPages,
      };

      updateActiveSessionMessages((prev) => [...prev, modelMsg]);
    } catch {
      const errorMsg: ChatMessage = {
        id: `error_${Date.now()}`,
        role: "model",
        text: "I’m having trouble connecting to Saaya right now. Please try sending your message again.",
        timestamp: formatTime(new Date()),
        isError: true,
      };
      updateActiveSessionMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsSending(false);
    }
  };

  const handleCopyMessage = async (msg: ChatMessage) => {
    const cleanText = msg.text.replace(/\*\*([^*]+)\*\*/g, "$1").trim();
    try {
      await Clipboard.setStringAsync(cleanText);
    } catch {
      // ignore clipboard error
    }
    void Haptics.selectionAsync();
    setCopiedMessageId(msg.id);
    setTimeout(() => {
      setCopiedMessageId((prev) => (prev === msg.id ? null : prev));
    }, 2000);
  };

  const handleStartEditMessage = (msg: ChatMessage) => {
    if (msg.role !== "user" || isSending) return;
    void Haptics.selectionAsync();
    setEditingMessageId(msg.id);
    setEditingText(msg.text);
  };

  const handleCancelEditMessage = () => {
    setEditingMessageId(null);
    setEditingText("");
  };

  const handleSaveEditedMessage = async (messageId: string) => {
    const trimmed = editingText.trim();
    if (!trimmed || isSending) return;

    const targetIndex = messages.findIndex((m) => m.id === messageId);
    if (targetIndex === -1) {
      handleCancelEditMessage();
      return;
    }

    const priorMessages = messages.slice(0, targetIndex);
    const updatedUserMsg: ChatMessage = {
      ...messages[targetIndex],
      text: trimmed,
      timestamp: formatTime(new Date()),
      isEdited: true,
    };

    const historyForApi = priorMessages
      .filter((m) => !m.isError)
      .map((m) => ({
        role: m.role,
        text: m.text,
      }));

    setEditingMessageId(null);
    setEditingText("");
    updateActiveSessionMessages(() => [...priorMessages, updatedUserMsg]);
    setIsSending(true);

    try {
      const result = await generateSaayaResponse(
        trimmed,
        historyForApi,
        isFastReplyMode,
      );

      const modelMsg: ChatMessage = {
        id: `model_${Date.now()}`,
        role: "model",
        text: result.reply,
        timestamp: formatTime(new Date()),
        recommendedPages: result.recommendedPages,
      };

      updateActiveSessionMessages((prev) => [...prev, modelMsg]);
    } catch {
      const errorMsg: ChatMessage = {
        id: `error_${Date.now()}`,
        role: "model",
        text: "I’m having trouble connecting to Saaya right now. Please try sending your message again.",
        timestamp: formatTime(new Date()),
        isError: true,
      };
      updateActiveSessionMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsSending(false);
    }
  };

  const handleStartNewChat = () => {
    const hasUserTurns = activeSession.messages.some((m) => m.role === "user");
    if (!hasUserTurns) {
      updateActiveSessionMessages(() => getInitialMessages());
      setIsMenuOpen(false);
      return;
    }

    const fresh = createNewSession();
    setSessions((prev) => [fresh, ...prev]);
    setActiveSessionId(fresh.id);
    setIsMenuOpen(false);
  };

  const handleSelectSession = (sessionId: string) => {
    setActiveSessionId(sessionId);
    setIsMenuOpen(false);
  };

  const handleDeleteSession = async (sessionId: string) => {
    const remaining = sessions.filter((session) => session.id !== sessionId);

    if (remaining.length === 0) {
      const fresh = createNewSession();
      setSessions([fresh]);
      setActiveSessionId(fresh.id);
    } else {
      setSessions(remaining);
      if (activeSessionId === sessionId) {
        setActiveSessionId(remaining[0].id);
      }
    }

    if (!currentUser) return;

    const docRef = doc(
      db,
      "users",
      currentUser.uid,
      "private",
      "saayaChats",
    );

    const savedRemaining = remaining.filter((session) =>
      session.messages.some((message) => message.role === "user"),
    );

    try {
      if (savedRemaining.length === 0) {
        await deleteDoc(docRef);
      } else {
        await setDoc(docRef, {
          sessions: savedRemaining.slice(0, 25),
        });
      }
    } catch {
      // Local UI state is already updated; cloud sync can retry on the next change.
    }
  };

  const savedHistorySessions = sessions.filter((s) =>
    s.messages.some((m) => m.role === "user"),
  );

  if (!authReady) {
    return (
      <SafeAreaView
        edges={["top"]}
        style={{ flex: 1, backgroundColor: "#FFFFFF" }}
      >
        <View className="flex-1 items-center justify-center bg-paper px-6">
          <ActivityIndicator color={colors.dusk[600]} />
          <Text className="mt-3 font-body text-[14px] text-muted">
            Loading Saaya...
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  if (!currentUser) {
    return (
      <SafeAreaView
        edges={["top"]}
        style={{ flex: 1, backgroundColor: "#FFFFFF" }}
      >
        <View className="flex-1 items-center justify-center bg-paper px-6">
          <View className="h-16 w-16 items-center justify-center rounded-3xl bg-dusk-50">
            <Ionicons
              name="shield-checkmark"
              size={34}
              color={colors.dusk[600]}
            />
          </View>

          <Text className="mt-5 text-center font-display text-[24px] text-midnight">
            Saaya
          </Text>
          <Text className="mt-1 text-center font-bodyMedium text-[14px] text-dusk-600">
            SAFE-W Agent &amp; Ally
          </Text>
          <Text className="mt-4 max-w-[330px] text-center font-body text-[14px] leading-[21px] text-muted">
            Log in to SAFE-W to use Saaya and keep your conversations private
            and saved to your account.
          </Text>

          <PressableScale
            onPress={() => router.push("/profile/login")}
            className="mt-7 w-full max-w-[330px] items-center rounded-2xl bg-dusk-600 px-5 py-3.5"
            accessibilityRole="button"
            accessibilityLabel="Log in to SAFE-W"
          >
            <Text className="font-bodyBold text-[15px] text-white">
              Log In
            </Text>
          </PressableScale>

          <PressableScale
            onPress={() => router.push("/profile/createAcc")}
            className="mt-2.5 w-full max-w-[330px] items-center rounded-2xl border border-mist bg-white px-5 py-3.5"
            accessibilityRole="button"
            accessibilityLabel="Create a SAFE-W account"
          >
            <Text className="font-bodyBold text-[15px] text-midnight">
              Create Account
            </Text>
          </PressableScale>
        </View>
      </SafeAreaView>
    );
  }

  return (
    // Top safe-area only. SafeAreaView is position-aware, so this adds no
    // extra gap if the screen is shown under a native header.
    <SafeAreaView
      edges={["top"]}
      style={{ flex: 1, backgroundColor: "#FFFFFF" }}
    >
      {/* KeyboardAvoidingView from react-native-keyboard-controller (not React
          Native's built-in one): with edge-to-edge on, the built-in one doesn't
          get real keyboard insets on Android. Third-party component, so plain
          `style` instead of className. Requires <KeyboardProvider> in _layout. */}
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={0}
        style={{ flex: 1, backgroundColor: colors.paper }}
      >
        {/* Uncrowded Header — Full Width for Heading + Fast Mode Toggle + Side Menu Button */}
        <View className="border-b border-mist bg-white px-4 py-3.5">
          <View className="flex-row items-center justify-between">
            <View className="flex-1 flex-row items-center pr-2">
              <Pressable
                onPress={() =>
                  router.canGoBack() ? router.back() : router.navigate("/")
                }
                accessibilityRole="button"
                accessibilityLabel="Go back"
                className="mr-3 h-10 w-10 items-center justify-center rounded-xl bg-paper"
              >
                <Ionicons name="arrow-back" size={20} color={colors.midnight} />
              </Pressable>

              <View className="mr-3 h-10 w-10 items-center justify-center rounded-2xl bg-dusk-50">
                <Ionicons
                  name="shield-checkmark"
                  size={22}
                  color={colors.dusk[600]}
                />
              </View>

              <View className="flex-1">
                <Text className="font-display text-[19px] leading-[23px] text-midnight">
                  Saaya
                </Text>
                <Text className="mt-0.5 font-bodyMedium text-[13px] leading-[17px] text-dusk-600">
                  SAFE-W Agent &amp; Ally
                </Text>
              </View>
            </View>

            <View className="flex-row items-center gap-2">
              {/* Fast Reply Mode Toggle Button */}
              <Pressable
                onPress={() => setIsFastReplyMode((prev) => !prev)}
                accessibilityRole="button"
                accessibilityLabel={
                  isFastReplyMode
                    ? "Fast Reply Mode is On. Tap to switch to Detailed Mode"
                    : "Detailed Mode is On. Tap to switch to Fast Reply Mode"
                }
                className={`h-10 flex-row items-center rounded-xl border px-3 ${
                  isFastReplyMode
                    ? "border-dusk-500 bg-dusk-50"
                    : "border-mist bg-paper"
                }`}
              >
                <Ionicons
                  name="flash-outline"
                  size={15}
                  color={isFastReplyMode ? colors.dusk[600] : colors.muted}
                />
                <Text
                  className={`ml-1 font-bodyBold text-[12px] ${
                    isFastReplyMode ? "text-dusk-600" : "text-muted"
                  }`}
                >
                  {isFastReplyMode ? "Fast" : "Detailed"}
                </Text>
              </Pressable>

              {/* Side Menu Trigger Button */}
              <Pressable
                onPress={() => setIsMenuOpen(true)}
                accessibilityRole="button"
                accessibilityLabel="Open chat menu for New Chat and History"
                className="h-10 w-10 items-center justify-center rounded-xl border border-mist bg-paper"
              >
                <Ionicons
                  name="menu-outline"
                  size={22}
                  color={colors.midnight}
                />
              </Pressable>
            </View>
          </View>

          <Text className="mt-2.5 font-body text-[12.5px] leading-[18px] text-muted">
            Calm, factual guidance · Safety first ·{" "}
            {isFastReplyMode ? "Fast Reply On" : "Detailed Reply Mode"}
          </Text>
        </View>

        {/* Side Menu Drawer (New Chat, Chat History & Quick Emergency Access) */}
        {isMenuOpen ? (
          <View className="absolute inset-0 z-50 flex-row">
            {/* Backdrop */}
            <Pressable
              onPress={() => setIsMenuOpen(false)}
              accessibilityRole="button"
              accessibilityLabel="Close side menu"
              style={{ backgroundColor: "rgba(19, 17, 28, 0.45)" }}
              className="flex-1"
            />

            {/* Slide-over Side Menu Bar */}
            <View
              style={shadow.lift}
              className="h-full w-[80%] max-w-[320px] flex-col justify-between border-l border-mist bg-white px-4 py-4"
            >
              <View className="flex-1">
                {/* Drawer Header */}
                <View className="flex-row items-center justify-between border-b border-mist pb-3.5">
                  <View>
                    <Text className="font-display text-[17px] text-midnight">
                      Saaya Menu
                    </Text>
                    <Text className="font-body text-[12px] text-muted">
                      Chats &amp; conversations
                    </Text>
                  </View>
                  <Pressable
                    onPress={() => setIsMenuOpen(false)}
                    accessibilityRole="button"
                    accessibilityLabel="Close menu"
                    className="h-9 w-9 items-center justify-center rounded-xl bg-paper"
                  >
                    <Ionicons name="close" size={20} color={colors.midnight} />
                  </Pressable>
                </View>

                {/* New Chat Action */}
                <PressableScale
                  onPress={handleStartNewChat}
                  accessibilityRole="button"
                  accessibilityLabel="Start a new chat with Saaya"
                  className="mt-4 flex-row items-center justify-center rounded-2xl bg-dusk-600 px-4 py-3"
                >
                  <Ionicons
                    name="add-circle-outline"
                    size={19}
                    color="#FFFFFF"
                  />
                  <Text className="ml-2 font-bodyBold text-[14px] text-white">
                    New Chat
                  </Text>
                </PressableScale>

                {/* Saved Chat History Section */}
                <View className="mt-5 flex-1">
                  <View className="mb-2 flex-row items-center justify-between">
                    <Text className="font-bodyBold text-[12px] uppercase tracking-wider text-muted">
                      Chat History ({savedHistorySessions.length})
                    </Text>
                  </View>

                  {savedHistorySessions.length === 0 ? (
                    <View className="mt-2 rounded-2xl border border-mist bg-paper p-3.5">
                      <Text className="font-body text-[13px] leading-[19px] text-muted">
                        No saved chats yet. Once you message Saaya, your
                        conversations will appear here automatically.
                      </Text>
                    </View>
                  ) : (
                    <ScrollView
                      className="flex-1"
                      showsVerticalScrollIndicator={false}
                    >
                      <View className="gap-2 pb-4">
                        {savedHistorySessions.map((session) => {
                          const isCurrent = session.id === activeSession.id;
                          return (
                            <View
                              key={session.id}
                              className={`flex-row items-center justify-between rounded-2xl border px-3 py-2.5 ${
                                isCurrent
                                  ? "border-dusk-500 bg-dusk-50"
                                  : "border-mist bg-paper"
                              }`}
                            >
                              <Pressable
                                onPress={() => handleSelectSession(session.id)}
                                className="flex-1 pr-2"
                              >
                                <View className="flex-row items-center">
                                  <Ionicons
                                    name="chatbubble-ellipses-outline"
                                    size={14}
                                    color={
                                      isCurrent
                                        ? colors.dusk[600]
                                        : colors.muted
                                    }
                                  />
                                  <Text
                                    numberOfLines={1}
                                    className="ml-1.5 flex-1 font-bodyBold text-[13px] text-midnight"
                                  >
                                    {session.title}
                                  </Text>
                                </View>
                                <Text className="mt-1 font-body text-[11px] text-muted">
                                  {session.updatedAt}
                                </Text>
                              </Pressable>

                              <Pressable
                                onPress={() => handleDeleteSession(session.id)}
                                accessibilityRole="button"
                                accessibilityLabel={`Delete chat ${session.title}`}
                                className="h-8 w-8 items-center justify-center rounded-lg"
                              >
                                <Ionicons
                                  name="trash-outline"
                                  size={16}
                                  color={colors.muted}
                                />
                              </Pressable>
                            </View>
                          );
                        })}
                      </View>
                    </ScrollView>
                  )}
                </View>
              </View>

              {/* Drawer Footer: Quick Emergency SOS */}
              <View className="border-t border-mist pt-3">
                <PressableScale
                  onPress={() => {
                    setIsMenuOpen(false);
                    router.navigate("/emergency");
                  }}
                  accessibilityRole="button"
                  accessibilityLabel="Open Emergency SOS 112"
                  className="flex-row items-center justify-center rounded-2xl bg-beacon px-4 py-3"
                >
                  <Ionicons name="alert-circle" size={18} color="#FFFFFF" />
                  <Text className="ml-2 font-bodyBold text-[13px] text-white">
                    Emergency SOS · 112
                  </Text>
                </PressableScale>
              </View>
            </View>
          </View>
        ) : null}

        {/* Scrollable Conversation Thread */}
        <ScrollView
          ref={scrollViewRef}
          className="flex-1 px-4"
          contentContainerStyle={{ paddingTop: 16, paddingBottom: 24 }}
          keyboardShouldPersistTaps="handled"
          keyboardDismissMode={
            Platform.OS === "ios" ? "interactive" : "on-drag"
          }
        >
          <View className="gap-4">
            {messages.map((msg) => {
              const isUser = msg.role === "user";
              const isEditingThis = isUser && editingMessageId === msg.id;
              const isCopiedThis = copiedMessageId === msg.id;

              return (
                <View
                  key={msg.id}
                  className={`flex-col ${isUser ? "items-end" : "items-start"}`}
                >
                  {isEditingThis ? (
                    <View
                      style={shadow.lift}
                      className="w-full max-w-[92%] rounded-[22px] border border-dusk-500 bg-white p-3.5"
                    >
                      <Text className="mb-1.5 font-bodyBold text-[12px] text-dusk-600">
                        Edit your message
                      </Text>
                      <TextInput
                        value={editingText}
                        onChangeText={setEditingText}
                        multiline
                        numberOfLines={3}
                        placeholder="Edit your message..."
                        accessibilityLabel="Edit your message"
                        className="min-h-[64px] rounded-xl border border-mist bg-paper px-3 py-2.5 font-body text-[15px] text-midnight"
                      />
                      <View className="mt-3 flex-row items-center justify-end gap-2">
                        <Pressable
                          onPress={handleCancelEditMessage}
                          accessibilityRole="button"
                          accessibilityLabel="Cancel editing message"
                          className="rounded-xl border border-mist bg-paper px-3.5 py-2"
                        >
                          <Text className="font-bodyMedium text-[13px] text-midnight">
                            Cancel
                          </Text>
                        </Pressable>
                        <Pressable
                          onPress={() => void handleSaveEditedMessage(msg.id)}
                          disabled={!editingText.trim() || isSending}
                          accessibilityRole="button"
                          accessibilityLabel="Save edited message and resend to Saaya"
                          className={`flex-row items-center rounded-xl px-3.5 py-2 ${
                            editingText.trim() && !isSending
                              ? "bg-dusk-600"
                              : "bg-mist"
                          }`}
                        >
                          <Ionicons
                            name="paper-plane-outline"
                            size={14}
                            color={
                              editingText.trim() && !isSending
                                ? "#FFFFFF"
                                : colors.muted
                            }
                          />
                          <Text
                            className={`ml-1.5 font-bodyBold text-[13px] ${
                              editingText.trim() && !isSending
                                ? "text-white"
                                : "text-muted"
                            }`}
                          >
                            Save &amp; Send
                          </Text>
                        </Pressable>
                      </View>
                    </View>
                  ) : (
                    <View
                      style={isUser ? undefined : shadow.lift}
                      className={`max-w-[90%] rounded-[22px] px-4 py-3.5 ${
                        isUser
                          ? "bg-dusk-600 rounded-br-md"
                          : msg.isError
                            ? "border border-beacon bg-beacon-soft rounded-bl-md"
                            : "border border-mist bg-white rounded-bl-md"
                      }`}
                    >
                      {renderFormattedText(msg.text, isUser, msg.isError)}
                    </View>
                  )}

                  {/* Recommended SAFE-W Pages (shown only when user asks about a related topic) */}
                  {!isUser &&
                  msg.recommendedPages &&
                  msg.recommendedPages.length > 0 ? (
                    <View className="mt-2.5 w-full max-w-[90%] gap-2">
                      <Text className="px-1 font-bodyMedium text-[12px] text-muted">
                        Recommended pages in SAFE-W:
                      </Text>
                      {msg.recommendedPages.map((page) => {
                        const isRights = page.section === "Women's Rights";
                        const iconBg = isRights
                          ? "bg-marigold-soft"
                          : "bg-haven-soft";
                        const iconColor = isRights
                          ? colors.marigoldDark
                          : colors.havenDark;

                        return (
                          <PressableScale
                            key={`${msg.id}_${page.route}`}
                            onPress={() => router.navigate(page.route as Route)}
                            accessibilityRole="button"
                            accessibilityLabel={`Open ${page.title} in ${page.section}`}
                            className="flex-row items-center rounded-2xl border border-mist bg-white p-3"
                          >
                            <View
                              className={`mr-3 h-10 w-10 items-center justify-center rounded-xl ${iconBg}`}
                            >
                              <Ionicons
                                name={
                                  page.icon as ComponentProps<
                                    typeof Ionicons
                                  >["name"]
                                }
                                size={20}
                                color={iconColor}
                              />
                            </View>
                            <View className="flex-1 pr-2">
                              <View className="flex-row items-center">
                                <Text className="font-bodyMedium text-[11px] text-dusk-600">
                                  {page.section}
                                </Text>
                                <Text className="mx-1 text-[11px] text-muted">
                                  ·
                                </Text>
                                <Text className="font-body text-[11px] text-muted">
                                  Tap to view details
                                </Text>
                              </View>
                              <Text className="font-bodyBold text-[14px] text-midnight">
                                {page.title}
                              </Text>
                              <Text className="mt-0.5 font-body text-[12px] leading-[17px] text-muted">
                                {page.summary}
                              </Text>
                            </View>
                            <Ionicons
                              name="chevron-forward"
                              size={18}
                              color={colors.muted}
                            />
                          </PressableScale>
                        );
                      })}
                    </View>
                  ) : null}

                  {/* Message Footer: Sender + Timestamp + Copy (both) + Edit (user only) */}
                  {!isEditingThis ? (
                    <View className="mt-1.5 flex-row items-center gap-2 px-1">
                      <View className="flex-row items-center">
                        <Text className="font-body text-[11px] text-muted">
                          {isUser ? "You" : "Saaya"}
                        </Text>
                        <Text className="mx-1 font-body text-[11px] text-muted">
                          ·
                        </Text>
                        <Text className="font-body text-[11px] text-muted">
                          {msg.timestamp}
                        </Text>
                        {isUser && msg.isEdited ? (
                          <Text className="ml-1 font-body text-[11px] text-muted">
                            · edited
                          </Text>
                        ) : null}
                      </View>

                      <Text className="font-body text-[11px] text-muted">
                        ·
                      </Text>

                      {/* Copy Button (Available for BOTH User and Saaya messages) */}
                      <Pressable
                        onPress={() => void handleCopyMessage(msg)}
                        accessibilityRole="button"
                        accessibilityLabel={
                          isCopiedThis ? "Copied message" : "Copy message text"
                        }
                        className="flex-row items-center py-0.5"
                      >
                        <Ionicons
                          name={isCopiedThis ? "checkmark" : "copy-outline"}
                          size={13}
                          color={isCopiedThis ? colors.havenDark : colors.muted}
                        />
                        <Text
                          className={`ml-1 font-bodyMedium text-[11.5px] ${
                            isCopiedThis ? "text-haven-dark" : "text-muted"
                          }`}
                        >
                          {isCopiedThis ? "Copied" : "Copy"}
                        </Text>
                      </Pressable>

                      {/* Edit Button (Available ONLY for User messages) */}
                      {isUser ? (
                        <>
                          <Text className="font-body text-[11px] text-muted">
                            ·
                          </Text>
                          <Pressable
                            onPress={() => handleStartEditMessage(msg)}
                            disabled={isSending}
                            accessibilityRole="button"
                            accessibilityLabel="Edit your message"
                            className="flex-row items-center py-0.5"
                          >
                            <Ionicons
                              name="create-outline"
                              size={13}
                              color={colors.muted}
                            />
                            <Text className="ml-1 font-bodyMedium text-[11.5px] text-muted">
                              Edit
                            </Text>
                          </Pressable>
                        </>
                      ) : null}
                    </View>
                  ) : null}
                </View>
              );
            })}

            {isSending ? (
              <View className="items-start">
                <View className="flex-row items-center gap-2.5 rounded-[22px] rounded-bl-md border border-mist bg-white px-4 py-3">
                  <ActivityIndicator color={colors.dusk[600]} />
                  <Text className="font-body text-[14px] text-muted">
                    Saaya is replying...
                  </Text>
                </View>
              </View>
            ) : null}

            {/* Starter Prompts when conversation only has the welcome message */}
            {messages.length <= 1 && !isSending ? (
              <View className="mt-1">
                <Label tone="muted" className="mb-2">
                  Ask Saaya anything
                </Label>
                <View className="gap-2">
                  {STARTER_PROMPTS.map((prompt) => (
                    <PressableScale
                      key={prompt}
                      onPress={() => void handleSendMessage(prompt)}
                      accessibilityRole="button"
                      accessibilityLabel={prompt}
                      className="flex-row items-center justify-between rounded-2xl border border-mist bg-white px-4 py-3"
                    >
                      <Body size="sm" tone="ink" className="flex-1 pr-2">
                        {prompt}
                      </Body>
                      <Ionicons
                        name="arrow-forward"
                        size={16}
                        color={colors.dusk[600]}
                      />
                    </PressableScale>
                  ))}
                </View>
              </View>
            ) : null}
          </View>
        </ScrollView>

        {/* Message Input Composer.
            Bottom safe-area padding only while the keyboard is closed (clears the
            Android gesture bar); while typing, the keyboard already covers it. */}
        <View
          className="border-t border-mist bg-white px-4 pt-3"
          style={{ paddingBottom: keyboardVisible ? 12 : 12 + insets.bottom }}
        >
          <View className="flex-row items-center gap-2.5">
            <View className="flex-1 rounded-2xl border border-mist bg-paper px-3.5 py-2.5">
              <TextInput
                value={inputText}
                onChangeText={setInputText}
                placeholder="Ask Saaya anything..."
                editable={!isSending}
                onSubmitEditing={() => void handleSendMessage()}
                accessibilityLabel="Message Saaya"
                className="w-full font-body text-[15px] text-midnight"
              />
            </View>
            <PressableScale
              onPress={() => void handleSendMessage()}
              disabled={!inputText.trim() || isSending}
              accessibilityRole="button"
              accessibilityLabel="Send message"
              className={`h-12 w-12 items-center justify-center rounded-2xl ${
                inputText.trim() && !isSending ? "bg-dusk-600" : "bg-mist"
              }`}
            >
              <Ionicons
                name="paper-plane-outline"
                size={20}
                color={
                  inputText.trim() && !isSending ? "#FFFFFF" : colors.muted
                }
              />
            </PressableScale>
          </View>
          <Heading size="sm" className="sr-only">
            Composer
          </Heading>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}