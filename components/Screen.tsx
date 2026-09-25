import { Ionicons } from "@expo/vector-icons";
import type { ReactNode } from "react";
import { ScrollView, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { colors } from "@/constants/theme";
import type { IconName } from "./Media";
import { Body, Heading } from "./Typography";

/** Standard scrolling page: paper background, 20px gutters, safe-area bottom. */
export function Screen({ children }: { children: ReactNode }) {
  const insets = useSafeAreaInsets();
  return (
    <ScrollView
      className="flex-1 bg-paper"
      contentContainerStyle={{ padding: 20, paddingBottom: insets.bottom + 32 }}
      showsVerticalScrollIndicator={false}
    >
      {children}
    </ScrollView>
  );
}

const callouts = {
  marigold: { box: "bg-marigold-soft", icon: colors.marigoldDark },
  dusk: { box: "bg-dusk-50", icon: colors.dusk[600] },
  haven: { box: "bg-haven-soft", icon: colors.havenDark },
  danger: { box: "bg-beacon-soft", icon: colors.beaconDark },
} as const;

export function Callout({
  icon = "information-circle-outline",
  tone = "marigold",
  title,
  children,
}: {
  icon?: IconName;
  tone?: keyof typeof callouts;
  title?: string;
  children: ReactNode;
}) {
  const c = callouts[tone];
  return (
    <View className={`mb-5 flex-row rounded-[22px] p-4 ${c.box}`}>
      <Ionicons name={icon} size={22} color={c.icon} style={{ marginRight: 12, marginTop: 1 }} />
      <View className="flex-1">
        {title ? <Heading size="sm" className="mb-1">{title}</Heading> : null}
        {typeof children === "string" ? (
          <Body size="sm" tone="ink">
            {children}
          </Body>
        ) : (
          children
        )}
      </View>
    </View>
  );
}
