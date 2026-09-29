import { Ionicons } from "@expo/vector-icons";
import {
  type AudioPlayer,
  createAudioPlayer,
  setAudioModeAsync,
} from "expo-audio";
import { File, Paths } from "expo-file-system";
import * as Haptics from "expo-haptics";
import { useRouter } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
  Alert,
  Image,
  Linking,
  Platform,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import { colors, shadow } from "@/constants/theme";
// @ts-ignore
import saayaDockedGirlImg from "../assets/images/saaya-docked-girl.jpg";
// @ts-ignore
import saayaPeekingImg from "../assets/images/saaya-peeking-character.jpg";

export type CompanionPanelState = "docked" | "peeking";

export interface FloatingCompanionState {
  isEnabled: boolean;
  hasOverlayPermission: boolean;
  panelState: CompanionPanelState;
}

const STORAGE_KEY = "safew_floating_companion_v1";

const defaultState: FloatingCompanionState = {
  isEnabled: true,
  hasOverlayPermission: true,
  panelState: "docked",
};

function loadInitialState(): FloatingCompanionState {
  try {
    if (typeof window !== "undefined" && window.localStorage) {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Partial<FloatingCompanionState>;
        return {
          ...defaultState,
          isEnabled:
            typeof parsed.isEnabled === "boolean"
              ? parsed.isEnabled
              : defaultState.isEnabled,
          hasOverlayPermission:
            typeof parsed.hasOverlayPermission === "boolean"
              ? parsed.hasOverlayPermission
              : defaultState.hasOverlayPermission,
          panelState: "docked",
        };
      }
    }
  } catch {
    // ignore storage errors on native
  }
  return defaultState;
}

let globalCompanionState: FloatingCompanionState = loadInitialState();
const listeners = new Set<(state: FloatingCompanionState) => void>();

export function updateFloatingCompanionState(
  patch:
    | Partial<FloatingCompanionState>
    | ((prev: FloatingCompanionState) => Partial<FloatingCompanionState>),
) {
  const nextPatch =
    typeof patch === "function" ? patch(globalCompanionState) : patch;
  globalCompanionState = { ...globalCompanionState, ...nextPatch };

  try {
    if (typeof window !== "undefined" && window.localStorage) {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          isEnabled: globalCompanionState.isEnabled,
          hasOverlayPermission: globalCompanionState.hasOverlayPermission,
        }),
      );
    }
  } catch {
    // ignore storage errors on native
  }

  listeners.forEach((fn) => fn(globalCompanionState));
}

export function useFloatingCompanion() {
  const [state, setState] =
    useState<FloatingCompanionState>(globalCompanionState);

  useEffect(() => {
    listeners.add(setState);
    return () => {
      listeners.delete(setState);
    };
  }, []);

  return {
    state,
    updateState: updateFloatingCompanionState,
  };
}

/**
 * Opens the phone's native Android "Display over other apps" permission screen
 * (Settings -> Apps -> Special app access -> Display over other apps)
 * and toggles/enables the SAFE-W side companion.
 */
export async function openPhoneOverlayPermissionSettings() {
  void Haptics.selectionAsync();

  if (Platform.OS === "android") {
    const linkingAny = Linking as unknown as {
      sendIntent?: (action: string) => Promise<void>;
      openSettings?: () => Promise<void>;
      openURL: (url: string) => Promise<void>;
    };
    try {
      if (typeof linkingAny.sendIntent === "function") {
        await linkingAny.sendIntent(
          "android.settings.action.MANAGE_OVERLAY_PERMISSION",
        );
      } else if (typeof linkingAny.openSettings === "function") {
        await linkingAny.openSettings();
      }
    } catch {
      try {
        if (typeof linkingAny.openSettings === "function") {
          await linkingAny.openSettings();
        }
      } catch {
        // ignore if unable to open settings
      }
    }
  }

  const nextState = !(
    globalCompanionState.hasOverlayPermission && globalCompanionState.isEnabled
  );
  updateFloatingCompanionState({
    hasOverlayPermission: nextState,
    isEnabled: nextState,
    panelState: "docked",
  });

  Alert.alert(
    nextState ? "Display Over Other Apps Enabled" : "Side Companion Turned Off",
    nextState
      ? "SAFE-W Side Companion is active on the right edge of your screen."
      : "SAFE-W Side Companion has been hidden.",
  );
}

/**
 * Generates a distant police patrol WAV loop so the user can trigger
 * the patrol siren directly from the floating side companion on any screen.
 */
function createQuickPatrolSirenWavBytes(): Uint8Array {
  const sampleRate = 22050;
  const durationSeconds = 9.2;
  const numSamples = Math.floor(sampleRate * durationSeconds);
  const dataSize = numSamples * 2;
  const buffer = new ArrayBuffer(44 + dataSize);
  const view = new DataView(buffer);

  const writeStr = (offset: number, str: string) => {
    for (let i = 0; i < str.length; i++) {
      view.setUint8(offset + i, str.charCodeAt(i));
    }
  };

  writeStr(0, "RIFF");
  view.setUint32(4, 36 + dataSize, true);
  writeStr(8, "WAVE");
  writeStr(12, "fmt ");
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, 1, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * 2, true);
  view.setUint16(32, 2, true);
  view.setUint16(34, 16, true);
  writeStr(36, "data");
  view.setUint32(40, dataSize, true);

  const delaySamples = Math.floor(sampleRate * 0.18);
  const delayLine = new Float32Array(delaySamples);
  let delayIdx = 0;
  let phase = 0;
  let lpState = 0;

  for (let i = 0; i < numSamples; i++) {
    const t = i / sampleRate;
    const swellWave = 0.5 - 0.5 * Math.cos((2 * Math.PI * t) / durationSeconds);
    const distanceGain = 0.36 + 0.56 * Math.pow(swellWave, 1.2);
    const filterCutoff = 900 + 1100 * swellWave;

    const wailPos = (t % 4.6) / 4.6;
    const env =
      wailPos < 0.38
        ? Math.pow(wailPos / 0.38, 1.35)
        : Math.pow(1 - (wailPos - 0.38) / 0.62, 1.6);
    const freq = 490 + env * 630;

    phase += (2 * Math.PI * freq) / sampleRate;
    if (phase > 2 * Math.PI) phase -= 2 * Math.PI;

    const hornWave =
      0.72 * Math.sin(phase) +
      0.2 * Math.sin(phase * 2) +
      0.08 * Math.sin(phase * 3);

    const rc = 1.0 / (2 * Math.PI * filterCutoff);
    const dt = 1.0 / sampleRate;
    const alpha = dt / (rc + dt);
    lpState = lpState + alpha * (hornWave - lpState);

    const dry = lpState * distanceGain;
    const delayed = delayLine[delayIdx];
    const outSample = dry + delayed * 0.34;
    delayLine[delayIdx] = dry + delayed * 0.25;
    delayIdx = (delayIdx + 1) % delaySamples;

    const clamped = Math.max(-1, Math.min(1, outSample * 0.9));
    view.setInt16(44 + i * 2, clamped * 32767, true);
  }

  return new Uint8Array(buffer);
}

function wavBytesToDataUri(bytes: Uint8Array): string {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  let base64 = "";
  for (let i = 0; i < bytes.length; i += 3) {
    const b1 = bytes[i];
    const b2 = i + 1 < bytes.length ? bytes[i + 1] : 0;
    const b3 = i + 2 < bytes.length ? bytes[i + 2] : 0;
    base64 += chars[b1 >> 2];
    base64 += chars[((b1 & 3) << 4) | (b2 >> 4)];
    base64 +=
      i + 1 < bytes.length ? chars[((b2 & 15) << 2) | (b3 >> 6)] : "=";
    base64 += i + 2 < bytes.length ? chars[b3 & 63] : "=";
  }

  return `data:audio/wav;base64,${base64}`;
}

export function FloatingSaayaOverlay() {
  const router = useRouter();
  const { state, updateState } = useFloatingCompanion();
  const [quickPrompt, setQuickPrompt] = useState("");
  const [isQuickSirenActive, setIsQuickSirenActive] = useState(false);
  const [isStartingQuickSiren, setIsStartingQuickSiren] = useState(false);
  const isStartingSirenRef = useRef(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const nativePlayerRef = useRef<AudioPlayer | null>(null);

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      if (nativePlayerRef.current) {
        try {
          nativePlayerRef.current.pause();
          nativePlayerRef.current.remove();
        } catch (error) {
          console.warn("Unable to clean up the floating patrol siren:", error);
        }
        nativePlayerRef.current = null;
      }
    };
  }, []);

  const stopQuickSiren = () => {
    if (audioRef.current) {
      try {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      } catch (error) {
        console.warn("Unable to stop the floating web patrol siren:", error);
      }
      audioRef.current = null;
    }
    if (nativePlayerRef.current) {
      try {
        nativePlayerRef.current.pause();
        nativePlayerRef.current.remove();
      } catch (error) {
        console.warn("Unable to stop the floating native patrol siren:", error);
      }
      nativePlayerRef.current = null;
    }
    setIsQuickSirenActive(false);
    Alert.alert("Siren Stopped", "Patrol siren turned off.");
  };

  const toggleQuickSiren = async () => {
    void Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
    if (isQuickSirenActive) {
      stopQuickSiren();
      return;
    }

    if (isStartingSirenRef.current) return;
    isStartingSirenRef.current = true;
    setIsStartingQuickSiren(true);

    try {
      if (Platform.OS !== "web") {
        await setAudioModeAsync({ playsInSilentMode: true });
        const bytes = createQuickPatrolSirenWavBytes();
        const sirenFile = new File(Paths.cache, "safew_quick_patrol_siren.wav");
        sirenFile.write(bytes);

        const player = createAudioPlayer({ uri: sirenFile.uri });
        player.loop = true;
        player.volume = 1;
        nativePlayerRef.current = player;
        player.play();
        setIsQuickSirenActive(true);
        Alert.alert("Patrol Siren Active", "Playing distant police patrol siren.");
        return;
      }

      if (typeof Audio !== "undefined") {
        const wavUri = wavBytesToDataUri(createQuickPatrolSirenWavBytes());
        const audio = new Audio(wavUri);
        audio.loop = true;
        audio.volume = 1.0;
        audioRef.current = audio;
        await audio.play();
        setIsQuickSirenActive(true);
        Alert.alert(
          "Patrol Siren Active",
          "Playing distant police patrol siren.",
        );
      } else {
        throw new Error("Audio playback is unavailable on this platform.");
      }
    } catch (error) {
      console.error("Unable to start the floating patrol siren:", error);
      if (nativePlayerRef.current) {
        try {
          nativePlayerRef.current.remove();
        } catch (cleanupError) {
          console.warn("Unable to remove the failed patrol siren player:", cleanupError);
        }
        nativePlayerRef.current = null;
      }
      if (audioRef.current) {
        try {
          audioRef.current.pause();
        } catch (cleanupError) {
          console.warn("Unable to stop the failed patrol siren:", cleanupError);
        }
        audioRef.current = null;
      }
      Alert.alert(
        "Siren unavailable",
        "The siren could not start. Please try again or open Emergency Support.",
      );
    } finally {
      isStartingSirenRef.current = false;
      setIsStartingQuickSiren(false);
    }
  };

  const handleQuickAskSubmit = () => {
    const trimmed = quickPrompt.trim();
    if (!trimmed) return;
    updateState({ panelState: "docked" });
    setQuickPrompt("");
    router.navigate({
      pathname: "/assistant",
      params: {
        quickPrompt: trimmed,
        quickPromptId: `${Date.now()}-${Math.random()}`,
      },
    });
  };

  if (!state.isEnabled || !state.hasOverlayPermission) {
    return null;
  }

  return (
    <>
      {/* 1. COMPACT DOCKED PEEKING GIRL ON RIGHT EDGE (Identifies SAFE-W distinctly on screen edge) */}
      {state.panelState === "docked" ? (
        <View
          style={[
            shadow.lift,
            {
              position: "absolute",
              right: 0,
              top: "44%",
              zIndex: 40,
            },
          ]}
        >
          <Pressable
            onPress={() => {
              void Haptics.selectionAsync();
              updateState({ panelState: "peeking" });
            }}
            accessibilityRole="button"
            accessibilityLabel="Open SAFE-W Saaya Side Companion"
            className="relative h-[64px] w-[48px] items-end justify-center overflow-hidden rounded-l-[20px] border border-r-0 border-dusk-500/35 bg-white"
          >
            <Image
              source={saayaDockedGirlImg}
              resizeMode="cover"
              style={{ width: 48, height: 64 }}
            />
            {/* Subtle status dot so user knows companion/siren is active */}
            <View
              className={`absolute left-1.5 top-1.5 h-2.5 w-2.5 rounded-full border border-white ${
                isQuickSirenActive ? "bg-beacon" : "bg-haven"
              }`}
            />
          </Pressable>
        </View>
      ) : null}

      {/* 2. EXPANDED PEEKING 3D SAAYA CHARACTER & QUICK SAFETY BUBBLE */}
      {state.panelState === "peeking" ? (
        <View
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            zIndex: 50,
            backgroundColor: "rgba(20, 22, 59, 0.38)",
          }}
          className="items-end justify-center"
        >
          {/* Tap outside backdrop to return to docked state on the edge */}
          <Pressable
            onPress={() => updateState({ panelState: "docked" })}
            accessibilityRole="button"
            accessibilityLabel="Close side companion"
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
            }}
          />

          <View className="w-full max-w-[420px] flex-row items-center justify-end pl-3">
            {/* Floating Companion Action Bubble */}
            <View
              style={[shadow.lift, { marginRight: -16, zIndex: 20 }]}
              className="flex-1 rounded-[26px] border border-mist bg-white p-4"
            >
              <View className="flex-row items-center justify-between border-b border-mist pb-2.5">
                <View className="flex-row items-center">
                  <View className="mr-2 h-2.5 w-2.5 rounded-full bg-haven" />
                  <Text className="font-display text-[16px] text-midnight">
                    Saaya · SAFE-W
                  </Text>
                </View>

                {/* Close button symbol (✕) to return to docked edge */}
                <Pressable
                  onPress={() => updateState({ panelState: "docked" })}
                  accessibilityRole="button"
                  accessibilityLabel="Close and return to docked edge"
                  className="h-8 w-8 items-center justify-center rounded-full bg-paper"
                >
                  <Ionicons name="close" size={18} color={colors.midnight} />
                </Pressable>
              </View>

              <Text className="mt-2.5 font-body text-[13px] leading-[19px] text-midnight">
                Hi! I&apos;m right here on the side of your screen whenever you
                feel unsure, uneasy, or need quick safety help.
              </Text>

              {/* Quick Ask Input (Directs straight to Saaya Chat) */}
              <View className="mt-3 flex-row items-center rounded-2xl border border-mist bg-paper px-3 py-1.5">
                <TextInput
                  value={quickPrompt}
                  onChangeText={setQuickPrompt}
                  placeholder="Ask Saaya anything..."
                  onSubmitEditing={handleQuickAskSubmit}
                  className="mr-2 flex-1 font-body text-[13px] text-midnight"
                />
                <Pressable
                  onPress={handleQuickAskSubmit}
                  accessibilityRole="button"
                  accessibilityLabel="Send question to Saaya chat"
                  className="h-8 w-8 items-center justify-center rounded-xl bg-dusk-600"
                >
                  <Ionicons name="arrow-forward" size={15} color="#FFFFFF" />
                </Pressable>
              </View>

              {/* 1-Tap Quick Emergency Actions */}
              <View className="mt-3 gap-2">
                <Pressable
                  onPress={toggleQuickSiren}
                  disabled={isStartingQuickSiren}
                  accessibilityRole="button"
                  accessibilityLabel="Toggle distant police patrol siren"
                  className={`flex-row items-center justify-between rounded-2xl px-3.5 py-2.5 ${
                    isQuickSirenActive ? "bg-beacon" : "bg-marigold-soft"
                  }`}
                >
                  <View className="flex-row items-center">
                    <Ionicons
                      name={isQuickSirenActive ? "stop-circle" : "volume-high"}
                      size={17}
                      color={
                        isQuickSirenActive ? "#FFFFFF" : colors.marigoldDark
                      }
                    />
                    <Text
                      className={`ml-2 font-bodyBold text-[13px] ${
                        isQuickSirenActive
                          ? "text-white"
                          : "text-marigold-dark"
                      }`}
                    >
                      {isStartingQuickSiren
                        ? "Starting Police Siren…"
                        : isQuickSirenActive
                          ? "Stop Distant Patrol Siren"
                          : "Play Distant Police Patrol Siren"}
                    </Text>
                  </View>
                  <Text
                    className={`font-bodyBold text-[11px] ${
                      isQuickSirenActive ? "text-white" : "text-marigold-dark"
                    }`}
                  >
                    {isStartingQuickSiren
                      ? "..."
                      : isQuickSirenActive
                        ? "ON"
                        : "1-Tap"}
                  </Text>
                </Pressable>

                <Pressable
                  onPress={() => {
                    updateState({ panelState: "docked" });
                    router.navigate("/emergency");
                  }}
                  accessibilityRole="button"
                  accessibilityLabel="Open Emergency SOS 112"
                  className="flex-row items-center justify-center rounded-2xl bg-beacon px-3 py-2.5"
                >
                  <Ionicons name="alert-circle" size={16} color="#FFFFFF" />
                  <Text className="ml-1.5 font-bodyBold text-[13px] text-white">
                    Emergency SOS · 112
                  </Text>
                </Pressable>
              </View>
            </View>

            {/* 3D Saaya Character Peeking In From the Right Edge of the Phone */}
            <View
              style={shadow.lift}
              className="h-[240px] w-[150px] items-end justify-center overflow-hidden rounded-l-[28px] bg-white"
            >
              <Image
                source={saayaPeekingImg}
                resizeMode="cover"
                style={{ width: 150, height: 240 }}
              />
            </View>
          </View>
        </View>
      ) : null}
    </>
  );
}
