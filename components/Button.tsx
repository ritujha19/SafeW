import { Ionicons } from "@expo/vector-icons";
import { ActivityIndicator, Text } from "react-native";
import { colors } from "@/constants/theme";
import type { IconName } from "./Media";
import { PressableScale } from "./PressableScale";

const variants = {
  primary: { box: "bg-dusk-600", text: "text-white", icon: "#FFFFFF" },
  soft: { box: "bg-dusk-50", text: "text-dusk-700", icon: colors.dusk[700] },
  danger: { box: "bg-beacon", text: "text-white", icon: "#FFFFFF" },
  dark: { box: "bg-midnight", text: "text-white", icon: "#FFFFFF" },
  light: { box: "bg-white", text: "text-midnight", icon: colors.midnight },
  outline: {
    box: "border border-mist bg-white",
    text: "text-midnight",
    icon: colors.midnight,
  },
} as const;

type Props = {
  label: string;
  onPress?: () => void;
  variant?: keyof typeof variants;
  icon?: IconName;
  disabled?: boolean;
  /** Shows a spinner in place of the icon and disables the button. */
  loading?: boolean;
  className?: string;
  haptic?: "light" | "medium" | "heavy" | false;
};

export function Button({
  label,
  onPress,
  variant = "primary",
  icon,
  disabled = false,
  loading = false,
  className = "",
  haptic = "light",
}: Props) {
  const v = variants[variant];
  const isDisabled = disabled || loading;
  return (
    <PressableScale
      onPress={onPress}
      disabled={isDisabled}
      haptic={haptic}
      accessibilityRole="button"
      accessibilityLabel={label}
      accessibilityState={{ disabled: isDisabled, busy: loading }}
      className={`h-14 flex-row items-center justify-center rounded-2xl px-5 ${v.box} ${
        isDisabled ? "opacity-40" : ""
      } ${className}`}
    >
      {loading ? (
        <ActivityIndicator color={v.icon} style={{ marginRight: 8 }} />
      ) : icon ? (
        <Ionicons name={icon} size={20} color={v.icon} style={{ marginRight: 8 }} />
      ) : null}
      <Text className={`font-bodyBold text-[16px] ${v.text}`}>{label}</Text>
    </PressableScale>
  );
}
