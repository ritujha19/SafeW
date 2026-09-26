import { Ionicons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import { type ReactNode, useEffect } from "react";
import { Pressable, Text, View } from "react-native";
import Animated, {
  FadeIn,
  FadeOut,
  LinearTransition,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { colors } from "@/constants/theme";
import type { IconName } from "./Media";
import { Body, Heading, Label } from "./Typography";

const accents = {
  dusk: { chip: "bg-dusk-50", icon: colors.dusk[600], open: "border-dusk-200" },
  haven: { chip: "bg-haven-soft", icon: colors.havenDark, open: "border-haven" },
  marigold: {
    chip: "bg-marigold-soft",
    icon: colors.marigoldDark,
    open: "border-marigold",
  },
} as const;
export type Accent = keyof typeof accents;

type ItemProps = {
  title: string;
  subtitle?: string;
  icon: IconName;
  accent?: Accent;
  expanded: boolean;
  onToggle: () => void;
  children: ReactNode;
};

/** A tappable card that expands. The motion only happens because the user tapped. */
export function AccordionItem({
  title,
  subtitle,
  icon,
  accent = "dusk",
  expanded,
  onToggle,
  children,
}: ItemProps) {
  const a = accents[accent];
  const turn = useSharedValue(expanded ? 1 : 0);
  useEffect(() => {
    turn.value = withTiming(expanded ? 1 : 0, { duration: 220 });
  }, [expanded, turn]);
  const chevron = useAnimatedStyle(() => ({
    transform: [{ rotate: `${turn.value * 180}deg` }],
  }));

  return (
    <Animated.View
      layout={LinearTransition.duration(220)}
      className={`mb-3 overflow-hidden rounded-[22px] border bg-white ${
        expanded ? a.open : "border-mist"
      }`}
    >
      <Pressable
        accessibilityRole="button"
        accessibilityState={{ expanded }}
        onPress={() => {
          void Haptics.selectionAsync();
          onToggle();
        }}
        className="flex-row items-center px-4 py-4"
      >
        <View
          className={`mr-3 h-11 w-11 items-center justify-center rounded-2xl ${a.chip}`}
        >
          <Ionicons name={icon} size={22} color={a.icon} />
        </View>
        <View className="flex-1 pr-2">
          <Heading>{title}</Heading>
          {subtitle ? <Label className="mt-0.5">{subtitle}</Label> : null}
        </View>
        <Animated.View style={chevron}>
          <Ionicons name="chevron-down" size={20} color={colors.muted} />
        </Animated.View>
      </Pressable>

      {expanded ? (
        <Animated.View
          entering={FadeIn.duration(220)}
          exiting={FadeOut.duration(120)}
          className="px-4 pb-5"
        >
          {children}
        </Animated.View>
      ) : null}
    </Animated.View>
  );
}

/* ---------------------------------------------------------------- */
/* Content blocks that go inside an AccordionItem                     */
/* ---------------------------------------------------------------- */
const blockTones = {
  plain: { box: "", label: "text-dusk-700", dot: "bg-dusk-400", text: "ink" },
  notice: {
    box: "bg-marigold-soft p-4",
    label: "text-marigold-dark",
    dot: "bg-marigold",
    text: "ink",
  },
  action: {
    box: "bg-haven-soft p-4",
    label: "text-haven-dark",
    dot: "bg-haven",
    text: "ink",
  },
  story: {
    box: "bg-dusk-50 p-4",
    label: "text-dusk-700",
    dot: "bg-dusk-400",
    text: "ink",
  },
  remember: {
    box: "bg-midnight p-4",
    label: "text-marigold",
    dot: "bg-marigold",
    text: "white",
  },
} as const;
export type BlockTone = keyof typeof blockTones;

export function Block({
  label,
  tone = "plain",
  children,
}: {
  label?: string;
  tone?: BlockTone;
  children: ReactNode;
}) {
  const t = blockTones[tone];
  return (
    <View className={`mt-3 rounded-2xl ${t.box}`}>
      {label ? (
        <Text className={`mb-1.5 font-bodyBold text-[14px] ${t.label}`}>{label}</Text>
      ) : null}
      {typeof children === "string" ? (
        <Body size="sm" tone={t.text}>
          {children}
        </Body>
      ) : (
        children
      )}
    </View>
  );
}

export function Bullets({
  items,
  tone = "plain",
}: {
  items: string[];
  tone?: BlockTone;
}) {
  const t = blockTones[tone];
  return (
    <View>
      {items.map((item, i) => (
        <View key={i} className="mb-1.5 flex-row">
          <View className={`mr-2.5 mt-[9px] h-1.5 w-1.5 rounded-full ${t.dot}`} />
          <Body size="sm" tone={t.text} className="flex-1">
            {item.trim()}
          </Body>
        </View>
      ))}
    </View>
  );
}
