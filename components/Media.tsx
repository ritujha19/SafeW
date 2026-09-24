import { Ionicons } from "@expo/vector-icons";
import LottieView from "lottie-react-native";
import {
  type ComponentProps,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";
import { Image, type ImageSourcePropType, View } from "react-native";
import { useReducedMotion } from "react-native-reanimated";
import { colors } from "@/constants/theme";

export type LottieSource = ComponentProps<typeof LottieView>["source"];
export type IconName = ComponentProps<typeof Ionicons>["name"];

/* ------------------------------------------------------------------ */
/* LottieFiles: large / screen-level animations                        */
/* ------------------------------------------------------------------ */
type LottieAnimProps = {
  source: LottieSource;
  size?: number;
  width?: number;
  height?: number;
  loop?: boolean;
  autoPlay?: boolean;
  speed?: number;
  /** Frame (0-1) shown instead of animating when "Reduce Motion" is on. */
  reducedProgress?: number;
};

export function LottieAnim({
  source,
  size = 200,
  width,
  height,
  loop = true,
  autoPlay = true,
  speed = 1,
  reducedProgress = 1,
}: LottieAnimProps) {
  const reduceMotion = useReducedMotion();
  return (
    <LottieView
      source={source}
      autoPlay={autoPlay && !reduceMotion}
      loop={loop && !reduceMotion}
      speed={speed}
      {...(reduceMotion ? { progress: reducedProgress } : {})}
      // Android needs an explicit width AND height on Lottie views.
      style={{ width: width ?? size, height: height ?? size }}
    />
  );
}

/* ------------------------------------------------------------------ */
/* Lordicon: small interactive icons (exported as Lottie JSON)         */
/* Falls back to a vector icon until you add the JSON file.            */
/* ------------------------------------------------------------------ */
export type LordIconHandle = { play: () => void };

type LordIconProps = {
  source?: LottieSource;
  fallback: IconName;
  size?: number;
  color?: string;
  autoPlay?: boolean;
  loop?: boolean;
};

export const LordIcon = forwardRef<LordIconHandle, LordIconProps>(
  function LordIcon(
    {
      source,
      fallback,
      size = 32,
      color = colors.dusk[700],
      autoPlay = false,
      loop = false,
    },
    ref,
  ) {
    const lottie = useRef<LottieView>(null);
    useImperativeHandle(
      ref,
      () => ({
        play: () => {
          lottie.current?.reset();
          lottie.current?.play();
        },
      }),
      [],
    );

    if (!source) {
      return (
        <View
          style={{
            width: size,
            height: size,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Ionicons name={fallback} size={Math.round(size * 0.85)} color={color} />
        </View>
      );
    }
    return (
      <LottieView
        ref={lottie}
        source={source}
        autoPlay={autoPlay}
        loop={loop}
        style={{ width: size, height: size }}
      />
    );
  },
);

/* ------------------------------------------------------------------ */
/* Storyset: decorative illustrations (PNG)                            */
/* Shows a designed placeholder until you add the PNG file.            */
/* ------------------------------------------------------------------ */
const tints = {
  dusk: { blob: "bg-dusk-100", dot: "bg-marigold", icon: colors.dusk[600] },
  haven: { blob: "bg-haven-soft", dot: "bg-marigold", icon: colors.havenDark },
  marigold: { blob: "bg-marigold-soft", dot: "bg-dusk-300", icon: colors.marigoldDark },
} as const;

export function Illustration({
  source,
  fallback,
  height = 180,
  tint = "dusk",
}: {
  source?: ImageSourcePropType;
  fallback: IconName;
  height?: number;
  tint?: keyof typeof tints;
}) {
  if (source) {
    return (
      <Image
        source={source}
        resizeMode="contain"
        style={{ width: "100%", height }}
        accessibilityIgnoresInvertColors
      />
    );
  }
  const t = tints[tint];
  const d = height * 0.82;
  return (
    <View
      accessibilityElementsHidden
      importantForAccessibility="no-hide-descendants"
      style={{ height, alignItems: "center", justifyContent: "center" }}
    >
      <View
        className={t.blob}
        style={{ position: "absolute", width: d, height: d, borderRadius: d }}
      />
      <View
        className={t.dot}
        style={{
          position: "absolute",
          width: d * 0.16,
          height: d * 0.16,
          borderRadius: d,
          top: height * 0.1,
          right: "24%",
        }}
      />
      <Ionicons name={fallback} size={d * 0.42} color={t.icon} />
    </View>
  );
}
