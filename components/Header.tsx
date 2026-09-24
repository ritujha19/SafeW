import { Ionicons } from "@expo/vector-icons";
import { useRef } from "react";
import { Pressable, Text, View } from "react-native";
import { lordicon } from "@/constants/media";
import { colors } from "@/constants/theme";
import { LordIcon, type LordIconHandle } from "./Media";

export function BrandMark() {
  return (
    <View className="flex-row items-center">
      <View className="mr-2 h-8 w-8 items-center justify-center rounded-[10px] bg-dusk-600">
        <Ionicons name="shield-checkmark" size={18} color="#FFFFFF" />
      </View>
      <Text className="font-display text-[21px] text-midnight">SAFE-W</Text>
    </View>
  );
}

export function HeaderProfileButton({ onPress }: { onPress: () => void }) {
  const icon = useRef<LordIconHandle>(null);
  return (
    <Pressable
      onPress={onPress}
      onPressIn={() => icon.current?.play()}
      hitSlop={8}
      accessibilityRole="button"
      accessibilityLabel="Your profile"
      className="mr-1 h-10 w-10 items-center justify-center rounded-full bg-dusk-50"
    >
      <LordIcon
        ref={icon}
        source={lordicon.profile}
        fallback="person-outline"
        size={24}
        color={colors.dusk[700]}
      />
    </Pressable>
  );
}
