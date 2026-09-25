import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, Text, TextInput, View, type TextInputProps } from "react-native";
import { colors } from "@/constants/theme";
import type { IconName } from "./Media";
import { Label } from "./Typography";

type Props = TextInputProps & {
  label: string;
  icon: IconName;
  /** Password field with a show/hide toggle. */
  secure?: boolean;
  /** Fixed text before the input, e.g. "+91". */
  prefix?: string;
};

export function TextField({ label, icon, secure = false, prefix, ...input }: Props) {
  const [focused, setFocused] = useState(false);
  const [hidden, setHidden] = useState(secure);

  return (
    <View className="mb-4">
      <Label tone="ink" className="mb-2">
        {label}
      </Label>
      <View
        className={`h-14 flex-row items-center rounded-2xl border-[1.5px] bg-white px-4 ${
          focused ? "border-dusk-500" : "border-mist"
        }`}
      >
        <Ionicons
          name={icon}
          size={20}
          color={focused ? colors.dusk[600] : colors.muted}
        />
        {prefix ? (
          <Text className="ml-3 font-bodyMedium text-[16px] text-muted">{prefix}</Text>
        ) : null}
        <TextInput
          {...input}
          accessibilityLabel={label}
          secureTextEntry={hidden}
          placeholderTextColor="#9A9EBC"
          onFocus={(e) => {
            setFocused(true);
            input.onFocus?.(e);
          }}
          onBlur={(e) => {
            setFocused(false);
            input.onBlur?.(e);
          }}
          className="ml-3 h-full flex-1 font-body text-[16px] text-midnight"
        />
        {secure ? (
          <Pressable
            hitSlop={12}
            onPress={() => setHidden((h) => !h)}
            accessibilityRole="button"
            accessibilityLabel={hidden ? "Show password" : "Hide password"}
          >
            <Ionicons
              name={hidden ? "eye-outline" : "eye-off-outline"}
              size={20}
              color={colors.muted}
            />
          </Pressable>
        ) : null}
      </View>
    </View>
  );
}
