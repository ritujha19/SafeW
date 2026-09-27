import { trustedContacts } from "@/auth";
import { Button } from "@/components/Button";
import { LottieAnim } from "@/components/Media";
import { PressableScale } from "@/components/PressableScale";
import { Body, Display } from "@/components/Typography";
import { lottie } from "@/constants/media";
import { colors, shadow } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import {
  type AudioPlayer,
  createAudioPlayer,
  setAudioModeAsync,
} from "expo-audio";
import { File, Paths } from "expo-file-system";
import * as Haptics from "expo-haptics";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect, useRef, useState } from "react";
import {
  Linking,
  Platform,
  Pressable,
  ScrollView,
  Text,
  Vibration,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type SirenMode = "patrol" | "wail" | "yelp";

const SIREN_MODES: {
  id: SirenMode;
  label: string;
  subtitle: string;
}[] = [
  {
    id: "patrol",
    label: "Patrol (Distant)",
    subtitle: "Feels like a police van patrolling nearby streets",
  },
  {
    id: "wail",
    label: "Close Cruiser",
    subtitle: "Loud nearby police cruiser wail",
  },
  {
    id: "yelp",
    label: "Rapid Yelp",
    subtitle: "Fast high-urgency crowd alert",
  },
];

const helplines = [
  {
    number: "181",
    name: "National Women Helpline",
    note: "Non-emergency support for women facing violence or distress",
  },
  { number: "1091", name: "Women in Distress Helpline" },
  { number: "139", name: "Indian Railway Security Helpline" },
];

/**
 * Computes the instantaneous frequency and distance envelope of an authentic
 * police siren at time `t` (in seconds).
 * - "patrol": Realistic distant police PCR patrol vehicle with slow exponential
 *   wind-up (480 Hz -> 1120 Hz), long coast-down, periodic intersection yelp burst,
 *   Doppler shift, and approaching/receding distance swell.
 * - "wail": Loud close-range police wail (560 Hz -> 1360 Hz).
 * - "yelp": Fast tactical yelp sweep (620 Hz -> 1520 Hz).
 */
function computeSirenProfile(
  t: number,
  mode: SirenMode,
): { freq: number; distanceGain: number; filterCutoff: number } {
  if (mode === "patrol") {
    // 14-second patrol loop: 2 slow distant wails + 1 brief intersection yelp + 1 approaching wail
    const loopT = t % 14.0;

    // Slow approaching/patrolling distance swell (0.38 distant -> 0.92 approaching -> 0.45 turning block)
    const swellWave = 0.5 - 0.5 * Math.cos((2 * Math.PI * loopT) / 14.0);
    const distanceGain = 0.34 + 0.58 * Math.pow(swellWave, 1.25);

    // Subtle Doppler pitch shift as patrol vehicle approaches and passes
    const dopplerFactor = 1.0 + 0.022 * Math.sin((2 * Math.PI * loopT) / 14.0);

    // Low-pass filter opens up as patrol vehicle gets closer, muffles highs when far away
    const filterCutoff = 880 + 1150 * swellWave;

    let baseFreq = 600;
    // Between 9.2s and 10.6s, patrol car taps a short intersection yelp before coasting down
    if (loopT >= 9.2 && loopT < 10.6) {
      const yelpCycle = ((loopT - 9.2) % 0.35) / 0.35;
      const tri = yelpCycle < 0.5 ? yelpCycle * 2 : 2 - yelpCycle * 2;
      baseFreq = 580 + tri * 640;
    } else {
      // Authentic 4.6-second mechanical/electronic police wail (1.65s rise, 0.35s crest, 2.6s slow coast-down)
      const wailPos = (loopT % 4.6) / 4.6;
      let env = 0;
      if (wailPos < 0.36) {
        // Smooth exponential wind-up
        const u = wailPos / 0.36;
        env = Math.pow(u, 1.35);
      } else if (wailPos < 0.44) {
        // Slight plateau at peak horn resonance
        const u = (wailPos - 0.36) / 0.08;
        env = 1.0 - 0.03 * u;
      } else {
        // Long, realistic coast-down
        const u = (wailPos - 0.44) / 0.56;
        env = 0.97 * Math.pow(1 - u, 1.65);
      }
      baseFreq = 490 + env * 630;
    }

    return {
      freq: baseFreq * dopplerFactor,
      distanceGain,
      filterCutoff,
    };
  }

  if (mode === "wail") {
    const wailPos = (t % 3.8) / 3.8;
    const env =
      wailPos < 0.38
        ? Math.pow(wailPos / 0.38, 1.25)
        : Math.pow(1 - (wailPos - 0.38) / 0.62, 1.5);
    return {
      freq: 540 + env * 780,
      distanceGain: 0.9,
      filterCutoff: 2400,
    };
  }

  // "yelp"
  const cycle = (t % 0.32) / 0.32;
  const tri = cycle < 0.5 ? cycle * 2 : 2 - cycle * 2;
  return {
    freq: 620 + tri * 880,
    distanceGain: 0.92,
    filterCutoff: 2600,
  };
}

/**
 * Generates a 16-bit mono PCM WAV byte buffer with built-in street echo and distance
 * low-pass smoothing so the siren sounds like a real outdoor police patrol on any device.
 */
function createPoliceSirenWavBytes(mode: SirenMode): Uint8Array {
  const sampleRate = 22050;
  const durationSeconds = mode === "patrol" ? 14.0 : mode === "wail" ? 3.8 : 1.6;
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
  view.setUint16(20, 1, true); // PCM
  view.setUint16(22, 1, true); // Mono
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * 2, true);
  view.setUint16(32, 2, true);
  view.setUint16(34, 16, true);
  writeStr(36, "data");
  view.setUint32(40, dataSize, true);

  // Delay buffer (185ms) to simulate outdoor street/building reflection echo
  const delaySamples = Math.floor(sampleRate * 0.185);
  const delayLine = new Float32Array(delaySamples);
  let delayIdx = 0;
  let phase = 0;
  let lpState = 0;

  for (let i = 0; i < numSamples; i++) {
    const t = i / sampleRate;
    const { freq, distanceGain, filterCutoff } = computeSirenProfile(t, mode);

    phase += (2 * Math.PI * freq) / sampleRate;
    if (phase > 2 * Math.PI) phase -= 2 * Math.PI;

    // Warm horn waveform (fundamental + odd/even horn harmonics, avoiding harsh buzz)
    const hornWave =
      0.72 * Math.sin(phase) +
      0.2 * Math.sin(phase * 2) +
      0.08 * Math.sin(phase * 3);

    // One-pole low-pass filter to simulate distance & air absorption
    const rc = 1.0 / (2 * Math.PI * filterCutoff);
    const dt = 1.0 / sampleRate;
    const alpha = dt / (rc + dt);
    lpState = lpState + alpha * (hornWave - lpState);

    const dry = lpState * distanceGain;
    const delayed = delayLine[delayIdx];
    const echoMix = mode === "patrol" ? 0.36 : 0.18;
    const outSample = dry + delayed * echoMix;

    delayLine[delayIdx] = dry + delayed * (mode === "patrol" ? 0.28 : 0.12);
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
    base64 += i + 1 < bytes.length ? chars[((b2 & 15) << 2) | (b3 >> 6)] : "=";
    base64 += i + 2 < bytes.length ? chars[b3 & 63] : "=";
  }

  return `data:audio/wav;base64,${base64}`;
}

export default function Emergency() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const [isSirenActive, setIsSirenActive] = useState(false);
  const [sirenMode, setSirenMode] = useState<SirenMode>("patrol");
  const [isStrobeEnabled, setIsStrobeEnabled] = useState(true);
  const [isFullScreenBeacon, setIsFullScreenBeacon] = useState(false);
  const [strobePhase, setStrobePhase] = useState<"red" | "blue">("red");

  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscPrimaryRef = useRef<OscillatorNode | null>(null);
  const oscSecondaryRef = useRef<OscillatorNode | null>(null);
  const sweepIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const htmlAudioRef = useRef<HTMLAudioElement | null>(null);
  const nativePlayerRef = useRef<AudioPlayer | null>(null);
  const sirenModeRef = useRef<SirenMode>(sirenMode);

  useEffect(() => {
    sirenModeRef.current = sirenMode;
  }, [sirenMode]);

  const stopSiren = () => {
    if (sweepIntervalRef.current) {
      clearInterval(sweepIntervalRef.current);
      sweepIntervalRef.current = null;
    }

    try {
      oscPrimaryRef.current?.stop();
      oscPrimaryRef.current?.disconnect();
    } catch {
      // ignore if already stopped
    }
    oscPrimaryRef.current = null;

    try {
      oscSecondaryRef.current?.stop();
      oscSecondaryRef.current?.disconnect();
    } catch {
      // ignore if already stopped
    }
    oscSecondaryRef.current = null;

    try {
      void audioCtxRef.current?.close();
    } catch {
      // ignore
    }
    audioCtxRef.current = null;

    if (htmlAudioRef.current) {
      try {
        htmlAudioRef.current.pause();
        htmlAudioRef.current.currentTime = 0;
      } catch {
        // ignore
      }
      htmlAudioRef.current = null;
    }

    if (nativePlayerRef.current) {
      try {
        nativePlayerRef.current.pause();
        nativePlayerRef.current.remove();
      } catch {
        // ignore
      }
      nativePlayerRef.current = null;
    }

    Vibration.cancel();
    setIsSirenActive(false);
    setIsFullScreenBeacon(false);
  };

  const startSiren = async (modeToPlay: SirenMode = sirenMode) => {
    stopSiren();
    setIsSirenActive(true);
    void Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
    Vibration.vibrate([0, 450, 150, 450, 150, 600], true);

    // 1. Physical mobile phone (Android / iOS) via Expo SDK 54 expo-audio + expo-file-system
    if (Platform.OS !== "web") {
      try {
        await setAudioModeAsync({
          playsInSilentMode: true,
        });

        const wavBytes = createPoliceSirenWavBytes(modeToPlay);
        const sirenFile = new File(
          Paths.cache,
          `safew_police_siren_${modeToPlay}.wav`,
        );
        sirenFile.write(wavBytes);

        const player = createAudioPlayer({ uri: sirenFile.uri });
        player.loop = true;
        player.volume = 1.0;
        player.play();
        nativePlayerRef.current = player;
        return;
      } catch (err) {
        console.warn("Native siren audio error:", err);
      }
    }

    let startedWebAudio = false;

    // 2. Web Audio API real-time police patrol synthesizer with distance low-pass & street echo
    if (typeof window !== "undefined") {
      const AudioContextClass =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext?: typeof AudioContext })
          .webkitAudioContext;

      if (AudioContextClass) {
        try {
          const ctx = new AudioContextClass();
          if (ctx.state === "suspended") {
            await ctx.resume();
          }

          // Low-pass filter removes harsh close-up buzz so it feels distant & outdoors
          const distanceFilter = ctx.createBiquadFilter();
          distanceFilter.type = "lowpass";
          distanceFilter.frequency.setValueAtTime(1350, ctx.currentTime);
          distanceFilter.Q.setValueAtTime(1.4, ctx.currentTime);

          // Horn body resonance bandpass boost around 850 Hz
          const hornBodyFilter = ctx.createBiquadFilter();
          hornBodyFilter.type = "peaking";
          hornBodyFilter.frequency.setValueAtTime(850, ctx.currentTime);
          hornBodyFilter.Q.setValueAtTime(1.1, ctx.currentTime);
          hornBodyFilter.gain.setValueAtTime(4.5, ctx.currentTime);

          const distanceGainNode = ctx.createGain();
          distanceGainNode.gain.setValueAtTime(0.45, ctx.currentTime);

          // Outdoor urban street echo (two-tap delay network)
          const echoDelay = ctx.createDelay(1.0);
          echoDelay.delayTime.setValueAtTime(0.19, ctx.currentTime);

          const echoFeedback = ctx.createGain();
          echoFeedback.gain.setValueAtTime(0.34, ctx.currentTime);

          const echoDamping = ctx.createBiquadFilter();
          echoDamping.type = "lowpass";
          echoDamping.frequency.setValueAtTime(1200, ctx.currentTime);

          const echoWetGain = ctx.createGain();
          echoWetGain.gain.setValueAtTime(0.42, ctx.currentTime);

          const masterGain = ctx.createGain();
          masterGain.gain.setValueAtTime(0.9, ctx.currentTime);

          // Signal chain: Oscillators -> Horn Body -> Distance Filter -> Distance Gain -> Master
          // Plus parallel street echo loop: Distance Gain -> Delay -> Damping -> Feedback -> Master
          const osc1 = ctx.createOscillator();
          const osc2 = ctx.createOscillator();
          const osc2Gain = ctx.createGain();

          osc1.type = "triangle";
          osc2.type = "sawtooth";
          osc2Gain.gain.setValueAtTime(0.28, ctx.currentTime);

          osc1.connect(hornBodyFilter);
          osc2.connect(osc2Gain);
          osc2Gain.connect(hornBodyFilter);

          hornBodyFilter.connect(distanceFilter);
          distanceFilter.connect(distanceGainNode);

          // Dry path to output
          distanceGainNode.connect(masterGain);

          // Wet street echo path
          distanceGainNode.connect(echoDelay);
          echoDelay.connect(echoDamping);
          echoDamping.connect(echoFeedback);
          echoFeedback.connect(echoDelay);
          echoDamping.connect(echoWetGain);
          echoWetGain.connect(masterGain);

          masterGain.connect(ctx.destination);

          const startTime = Date.now();
          const updateSiren = () => {
            if (!audioCtxRef.current) return;
            const elapsed = (Date.now() - startTime) / 1000;
            const currentMode = sirenModeRef.current;
            const { freq, distanceGain, filterCutoff } = computeSirenProfile(
              elapsed,
              currentMode,
            );

            const now = ctx.currentTime;
            osc1.frequency.setTargetAtTime(freq, now, 0.025);
            osc2.frequency.setTargetAtTime(freq * 1.004, now, 0.025);
            distanceFilter.frequency.setTargetAtTime(filterCutoff, now, 0.04);
            distanceGainNode.gain.setTargetAtTime(distanceGain, now, 0.04);
            echoWetGain.gain.setTargetAtTime(
              currentMode === "patrol" ? 0.45 : 0.22,
              now,
              0.05,
            );
          };

          updateSiren();
          osc1.start();
          osc2.start();

          audioCtxRef.current = ctx;
          oscPrimaryRef.current = osc1;
          oscSecondaryRef.current = osc2;
          sweepIntervalRef.current = setInterval(updateSiren, 30);
          startedWebAudio = true;
        } catch {
          startedWebAudio = false;
        }
      }
    }

    // 3. Fallback to HTML5 Audio on web if AudioContext is unavailable
    if (!startedWebAudio && typeof Audio !== "undefined") {
      try {
        const wavUri = wavBytesToDataUri(createPoliceSirenWavBytes(modeToPlay));
        const audio = new Audio(wavUri);
        audio.loop = true;
        audio.volume = 1.0;
        void audio.play();
        htmlAudioRef.current = audio;
      } catch {
        // ignore
      }
    }
  };

  const handleToggleSiren = () => {
    if (isSirenActive) {
      stopSiren();
    } else {
      void startSiren(sirenMode);
    }
  };

  const handleSelectMode = (nextMode: SirenMode) => {
    setSirenMode(nextMode);
    sirenModeRef.current = nextMode;
    void Haptics.selectionAsync();
    if (isSirenActive && !audioCtxRef.current) {
      // Restart WAV fallback if mode changed while playing
      void startSiren(nextMode);
    }
  };

  // Red / Blue police strobe flash timer + periodic haptic pulse when active
  useEffect(() => {
    if (!isSirenActive) return;

    const interval = setInterval(() => {
      setStrobePhase((prev) => (prev === "red" ? "blue" : "red"));
      void Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
    }, 260);

    return () => clearInterval(interval);
  }, [isSirenActive]);

  // Ensure siren stops cleanly when leaving the Emergency screen
  useEffect(() => {
    return () => {
      stopSiren();
    };
  }, []);

  const call = (number: string) => {
    if (isSirenActive) {
      stopSiren();
    }
    Linking.openURL(`tel:${number}`).catch(() =>
      alert(`Couldn't open the phone app. Please dial ${number}.`),
    );
  };

  const activeStrobeColor =
    strobePhase === "red" ? colors.beacon : "#2563EB";

  return (
    <LinearGradient
      colors={
        isSirenActive && isStrobeEnabled
          ? strobePhase === "red"
            ? ["#450A14", colors.midnight, "#7F1D1D"]
            : ["#0F172A", colors.midnight, "#1E3A8A"]
          : [colors.midnight, colors.dusk[800], "#5A1A3A"]
      }
      style={{ flex: 1 }}
    >
      <StatusBar style="light" />

      {/* Full-Screen Police Strobe Deterrent Overlay */}
      {isSirenActive && isFullScreenBeacon ? (
        <View
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            zIndex: 50,
            backgroundColor:
              strobePhase === "red" ? "#E42A40" : "#1D4ED8",
          }}
          className="flex-1 justify-between px-6 py-10"
        >
          <View className="items-center">
            <View className="rounded-2xl bg-black/35 px-4 py-2">
              <Text className="font-bodyBold text-[13px] tracking-wider text-white">
                POLICE SIREN &amp; BEACON ACTIVE
              </Text>
            </View>
            <Text className="mt-4 text-center font-display text-[32px] leading-[38px] text-white">
              {strobePhase === "red" ? "EMERGENCY ALERT" : "ATTRACTING HELP"}
            </Text>
            <Text className="mt-2 text-center font-body text-[15px] leading-[22px] text-white/90">
              Hold your phone up toward people nearby or street cameras.
            </Text>
          </View>

          <View className="gap-3">
            <PressableScale
              haptic="heavy"
              accessibilityRole="button"
              accessibilityLabel="Stop Police Siren"
              onPress={stopSiren}
              className="flex-row items-center justify-center rounded-[24px] bg-white py-5"
              style={shadow.lift}
            >
              <Ionicons
                name="stop-circle-outline"
                size={24}
                color={colors.beaconDark}
              />
              <Text className="ml-2.5 font-display text-[20px] text-beacon-dark">
                Stop Police Siren
              </Text>
            </PressableScale>

            <View className="flex-row gap-3">
              <PressableScale
                haptic="medium"
                accessibilityRole="button"
                accessibilityLabel="Exit full screen strobe"
                onPress={() => setIsFullScreenBeacon(false)}
                className="flex-1 flex-row items-center justify-center rounded-2xl border border-white/40 bg-black/30 py-3.5"
              >
                <Text className="font-bodyBold text-[14px] text-white">
                  Minimize Light
                </Text>
              </PressableScale>

              <PressableScale
                haptic="heavy"
                accessibilityRole="button"
                accessibilityLabel="Call 112 Emergency now"
                onPress={() => call("112")}
                className="flex-1 flex-row items-center justify-center rounded-2xl bg-black/45 py-3.5"
              >
                <Ionicons name="call" size={18} color="#FFFFFF" />
                <Text className="ml-2 font-bodyBold text-[14px] text-white">
                  Call 112 Now
                </Text>
              </PressableScale>
            </View>
          </View>
        </View>
      ) : null}

      <ScrollView
        contentContainerStyle={{
          padding: 24,
          paddingBottom: insets.bottom + 32,
        }}
        showsVerticalScrollIndicator={false}
      >
        <Display size="xl" tone="white">
          Are you in immediate danger?
        </Display>
        <Body tone="soft" className="mt-3">
          If you can, call 112 now, trigger the loud police siren to deter
          attackers, or share your location with people you trust.
        </Body>

        {/* Primary 112 SOS Button */}
        <View className="items-center py-4">
          <View className="h-[270px] w-[270px] items-center justify-center">
            <View style={{ position: "absolute" }}>
              <LottieAnim
                source={lottie.emergencyPulse}
                size={270}
                reducedProgress={0.35}
              />
            </View>
            <PressableScale
              haptic="heavy"
              accessibilityRole="button"
              accessibilityLabel="Call 112, Emergency Response Support System"
              onPress={() => call("112")}
              className="h-[132px] w-[132px] items-center justify-center rounded-full bg-white"
              style={shadow.sos}
            >
              <Ionicons name="call" size={30} color={colors.beaconDark} />
              <Text className="font-display text-[28px] leading-[30px] text-beacon-dark">
                112
              </Text>
            </PressableScale>
          </View>
          <Body tone="soft" size="sm" className="text-center">
            Emergency Response Support System (ERSS)
          </Body>
        </View>

        {/* Police Siren Deterrent Card */}
        <View
          style={
            isSirenActive
              ? {
                  borderColor: activeStrobeColor,
                  borderWidth: 2,
                }
              : undefined
          }
          className={`mt-2 overflow-hidden rounded-[24px] border ${
            isSirenActive
              ? "bg-white/15"
              : "border-white/20 bg-white/10"
          }`}
        >
          {/* Red & Blue Police Lightbar Strip when active */}
          {isSirenActive && isStrobeEnabled ? (
            <View className="h-2.5 w-full flex-row">
              <View
                style={{
                  flex: 1,
                  backgroundColor:
                    strobePhase === "red" ? "#FF2E4C" : "#1E293B",
                }}
              />
              <View
                style={{
                  flex: 1,
                  backgroundColor:
                    strobePhase === "blue" ? "#3B82F6" : "#1E293B",
                }}
              />
              <View
                style={{
                  flex: 1,
                  backgroundColor:
                    strobePhase === "red" ? "#FF2E4C" : "#1E293B",
                }}
              />
              <View
                style={{
                  flex: 1,
                  backgroundColor:
                    strobePhase === "blue" ? "#3B82F6" : "#1E293B",
                }}
              />
            </View>
          ) : null}

          <View className="p-4">
            <View className="flex-row items-start justify-between">
              <View className="flex-1 pr-3">
                <View className="flex-row items-center">
                  <Ionicons
                    name={isSirenActive ? "volume-high" : "flash-outline"}
                    size={20}
                    color={isSirenActive ? "#FFB020" : "#FFFFFF"}
                  />
                  <Text className="ml-2 font-display text-[19px] leading-[24px] text-white">
                    Police Siren Deterrent
                  </Text>
                </View>
                <Text className="mt-1 font-body text-[13px] leading-[19px] text-white/80">
                  {isSirenActive
                    ? sirenMode === "patrol"
                      ? "Simulating an approaching police patrol vehicle echoing from nearby streets."
                      : "Blaring high-decibel police siren to startle attackers and alert bystanders."
                    : "Plays a realistic distant police patrol siren echoing from nearby streets so attackers think police are on patrol around the corner."}
                </Text>
              </View>
            </View>

            {/* Primary Activate / Stop Siren CTA */}
            <PressableScale
              haptic="heavy"
              accessibilityRole="button"
              accessibilityLabel={
                isSirenActive
                  ? "Stop Police Siren"
                  : "Activate Loud Police Siren"
              }
              onPress={handleToggleSiren}
              className={`mt-4 flex-row items-center justify-center rounded-2xl px-4 py-4 ${
                isSirenActive ? "bg-white" : "bg-beacon"
              }`}
              style={isSirenActive ? shadow.lift : shadow.sos}
            >
              <Ionicons
                name={
                  isSirenActive ? "stop-circle-outline" : "volume-high-outline"
                }
                size={22}
                color={isSirenActive ? colors.beaconDark : "#FFFFFF"}
              />
              <Text
                className={`ml-2.5 font-display text-[17px] ${
                  isSirenActive ? "text-beacon-dark" : "text-white"
                }`}
              >
                {isSirenActive
                  ? "Stop Police Siren"
                  : "Activate Police Siren"}
              </Text>
            </PressableScale>

            {/* Siren Pattern Selector (Wail / Yelp / Hi-Lo) */}
            <View className="mt-3.5">
              <Text className="mb-2 font-body text-[12px] text-white/75">
                Siren tone pattern · {SIREN_MODES.find((m) => m.id === sirenMode)?.subtitle}
              </Text>
              <View className="flex-row gap-2">
                {SIREN_MODES.map((mode) => {
                  const selected = sirenMode === mode.id;
                  return (
                    <Pressable
                      key={mode.id}
                      accessibilityRole="button"
                      accessibilityLabel={`${mode.label} siren mode, ${mode.subtitle}`}
                      onPress={() => handleSelectMode(mode.id)}
                      className={`flex-1 items-center justify-center rounded-xl border py-2.5 ${
                        selected
                          ? "border-white bg-white/25"
                          : "border-white/15 bg-white/5"
                      }`}
                    >
                      <Text
                        className={`font-bodyBold text-[13px] ${
                          selected ? "text-white" : "text-white/70"
                        }`}
                      >
                        {mode.label}
                      </Text>
                    </Pressable>
                  );
                })}
              </View>
            </View>

            {/* Strobe Light Controls */}
            <View className="mt-3 flex-row items-center justify-between border-t border-white/15 pt-3">
              <Pressable
                accessibilityRole="button"
                accessibilityLabel={
                  isStrobeEnabled
                    ? "Disable red and blue police strobe light"
                    : "Enable red and blue police strobe light"
                }
                onPress={() => setIsStrobeEnabled((prev) => !prev)}
                className="flex-row items-center py-1"
              >
                <Ionicons
                  name={
                    isStrobeEnabled
                      ? "checkmark-circle"
                      : "close-circle-outline"
                  }
                  size={18}
                  color={isStrobeEnabled ? colors.marigold : "#FFFFFF"}
                />
                <Text className="ml-2 font-body text-[13px] text-white/85">
                  Red/Blue Strobe Flash: {isStrobeEnabled ? "On" : "Off"}
                </Text>
              </Pressable>

              {isSirenActive ? (
                <Pressable
                  accessibilityRole="button"
                  accessibilityLabel="Open full screen police strobe light"
                  onPress={() => setIsFullScreenBeacon(true)}
                  className="rounded-xl border border-white/30 bg-white/15 px-3 py-1.5"
                >
                  <Text className="font-bodyBold text-[12px] text-white">
                    Full-Screen Flash
                  </Text>
                </Pressable>
              ) : null}
            </View>
          </View>
        </View>

        {/* Other helplines */}
        <View className="mt-5 gap-3">
          {helplines.map((line) => (
            <PressableScale
              key={line.number}
              accessibilityRole="button"
              accessibilityLabel={`Call ${line.number}, ${line.name}`}
              onPress={() => call(line.number)}
              className="flex-row items-center rounded-[22px] border border-white/15 bg-white/10 p-4"
            >
              <Text className="w-[68px] font-display text-[26px] text-white">
                {line.number}
              </Text>
              <View className="flex-1 pr-3">
                <Text className="font-bodyBold text-[15px] leading-5 text-white">
                  {line.name}
                </Text>
                {line.note ? (
                  <Text className="mt-0.5 font-body text-[13px] leading-[18px] text-white/70">
                    {line.note}
                  </Text>
                ) : null}
              </View>
              <Ionicons name="call-outline" size={20} color="#FFFFFF" />
            </PressableScale>
          ))}
        </View>
        <View className="mt-8">
          <Button
            variant="light"
            icon="location"
            label="Share your location"
            onPress={() => router.navigate("/profile/location")}
          />
          <Body tone="soft" size="sm" className="mt-3 text-center">
            {trustedContacts.length > 0
              ? `${trustedContacts.length} trusted contact${trustedContacts.length === 1 ? "" : "s"} saved`
              : "No trusted contacts saved yet"}
          </Body>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}
