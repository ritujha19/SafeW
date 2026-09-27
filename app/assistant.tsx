import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { doc, getDoc, setDoc } from "firebase/firestore";
import {
  useEffect,
  useRef,
  useState,
  type ComponentProps,
} from "react";
import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { PressableScale } from "@/components/PressableScale";
import { Body, Heading, Label } from "@/components/Typography";
import {
  type SafewPageResource,
  buildLocalSaayaFallback,
} from "@/constants/safewPages";
import { colors, shadow } from "@/constants/theme";
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
}

export interface ChatSession {
  id: string;
  title: string;
  updatedAt: string;
  messages: ChatMessage[];
}

const SESSIONS_STORAGE_KEY = "safew_saaya_chat_sessions_v1";

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

function loadStoredSessions(): ChatSession[] {
  try {
    if (typeof window !== "undefined") {
      const raw = window.localStorage.getItem(SESSIONS_STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as ChatSession[];
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    }
  } catch {
    // ignore storage errors
  }
  return [createNewSession()];
}

function deriveSessionTitle(messages: ChatMessage[]): string {
  const firstUserMsg = messages.find((m) => m.role === "user");
  if (!firstUserMsg) return "New conversation";
  const text = firstUserMsg.text.trim();
  return text.length > 48 ? `${text.slice(0, 48)}...` : text;
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
  const [sessions, setSessions] = useState<ChatSession[]>(loadStoredSessions);
  const [activeSessionId, setActiveSessionId] = useState<string>(
    () => loadStoredSessions()[0]?.id ?? "",
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [inputText, setInputText] = useState("");
  const [isSending, setIsSending] = useState(false);
  const bottomAnchorRef = useRef<HTMLDivElement | null>(null);

  const activeSession =
    sessions.find((s) => s.id === activeSessionId) ??
    sessions[0] ??
    createNewSession();
  const messages = activeSession.messages;

  // Load saved chat history from Firestore if user is signed in
  useEffect(() => {
    const currentUser = auth.currentUser;
    if (!currentUser) return;

    const loadCloudHistory = async () => {
      try {
        const docRef = doc(
          db,
          "users",
          currentUser.uid,
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
          }
        }
      } catch {
        // Fallback to localStorage silently
      }
    };

    void loadCloudHistory();
  }, []);

  // Persist sessions to localStorage and Firestore (when signed in)
  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        window.localStorage.setItem(
          SESSIONS_STORAGE_KEY,
          JSON.stringify(sessions),
        );
      }
    } catch {
      // ignore storage errors
    }

    const currentUser = auth.currentUser;
    if (currentUser) {
      const docRef = doc(db, "users", currentUser.uid, "private", "saayaChats");
      void setDoc(docRef, { sessions: sessions.slice(0, 25) }).catch(() => {
        // ignore cloud sync error if offline
      });
    }
  }, [sessions]);

  useEffect(() => {
    bottomAnchorRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [messages.length, isSending, activeSessionId]);

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
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: trimmed,
          history: historyForApi,
        }),
      });

      const data = (await response.json()) as {
        reply?: string;
        recommendedPages?: SafewPageResource[];
        error?: string;
      };

      if (!response.ok || data.error) {
        throw new Error(data.error || "Unable to reach Saaya right now.");
      }

      const modelMsg: ChatMessage = {
        id: `model_${Date.now()}`,
        role: "model",
        text:
          data.reply ||
          "I'm here with you. Could you share a little more about what's happening so I can help you stay safe?",
        timestamp: formatTime(new Date()),
        recommendedPages: data.recommendedPages,
      };

      updateActiveSessionMessages((prev) => [...prev, modelMsg]);
    } catch {
      const fallback = buildLocalSaayaFallback(trimmed);
      const fallbackMsg: ChatMessage = {
        id: `model_${Date.now()}`,
        role: "model",
        text: fallback.reply,
        timestamp: formatTime(new Date()),
        recommendedPages: fallback.recommendedPages,
      };
      updateActiveSessionMessages((prev) => [...prev, fallbackMsg]);
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

  const handleDeleteSession = (sessionId: string) => {
    setSessions((prev) => {
      const remaining = prev.filter((s) => s.id !== sessionId);
      if (remaining.length === 0) {
        const fresh = createNewSession();
        setActiveSessionId(fresh.id);
        return [fresh];
      }
      if (activeSessionId === sessionId) {
        setActiveSessionId(remaining[0].id);
      }
      return remaining;
    });
  };

  const savedHistorySessions = sessions.filter((s) =>
    s.messages.some((m) => m.role === "user"),
  );

  return (
    <View className="relative flex-1 bg-paper">
      {/* Uncrowded Header — Full Width for Heading + Side Menu Button */}
      <View className="border-b border-mist bg-white px-4 py-3.5">
        <View className="flex-row items-center justify-between">
          <View className="flex-1 flex-row items-center pr-3">
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

          {/* Side Menu Trigger Button */}
          <Pressable
            onPress={() => setIsMenuOpen(true)}
            accessibilityRole="button"
            accessibilityLabel="Open chat menu for New Chat and History"
            className="h-10 w-10 items-center justify-center rounded-xl border border-mist bg-paper"
          >
            <Ionicons name="menu-outline" size={22} color={colors.midnight} />
          </Pressable>
        </View>

        <Text className="mt-2.5 font-body text-[12.5px] leading-[18px] text-muted">
          Calm, factual guidance · Safety first · Rights &amp; preparation
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
            className="h-full w-[80%] max-w-[320px] border-l border-mist bg-white px-4 py-4 flex-col justify-between"
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
                <Ionicons name="add-circle-outline" size={19} color="#FFFFFF" />
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
                      No saved chats yet. Once you message Saaya, your conversations will appear here automatically.
                    </Text>
                  </View>
                ) : (
                  <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
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
        className="flex-1 px-4"
        contentContainerStyle={{ paddingTop: 16, paddingBottom: 24 }}
      >
        <View className="gap-4">
          {messages.map((msg) => {
            const isUser = msg.role === "user";
            return (
              <View
                key={msg.id}
                className={`flex-col ${isUser ? "items-end" : "items-start"}`}
              >
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

                <View className="mt-1 flex-row items-center px-1">
                  <Text className="font-body text-[11px] text-muted">
                    {isUser ? "You" : "Saaya"}
                  </Text>
                  <Text className="mx-1 font-body text-[11px] text-muted">
                    ·
                  </Text>
                  <Text className="font-body text-[11px] text-muted">
                    {msg.timestamp}
                  </Text>
                </View>
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

          <div ref={bottomAnchorRef} />
        </View>
      </ScrollView>

      {/* Message Input Composer */}
      <View className="border-t border-mist bg-white px-4 py-3">
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
              color={inputText.trim() && !isSending ? "#FFFFFF" : colors.muted}
            />
          </PressableScale>
        </View>
        <Heading size="sm" className="sr-only">
          Composer
        </Heading>
      </View>
    </View>
  );
}
