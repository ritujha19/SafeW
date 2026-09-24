import * as Haptics from "expo-haptics";
import type { ReactNode } from "react";
import {
  Pressable,
  type PressableProps,
  type StyleProp,
  type ViewStyle,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

const impact = {
  light: Haptics.ImpactFeedbackStyle.Light,
  medium: Haptics.ImpactFeedbackStyle.Medium,
  heavy: Haptics.ImpactFeedbackStyle.Heavy,
} as const;

type Props = Omit<PressableProps, "style" | "children"> & {
  children: ReactNode;
  /** NativeWind classes for the pressable itself. */
  className?: string;
  /** Plain style for the pressable (shadows, radius, etc.). */
  style?: StyleProp<ViewStyle>;
  /** Style for the animated wrapper (e.g. `{ flex: 1 }` inside a row). */
  wrapperStyle?: StyleProp<ViewStyle>;
  pressedScale?: number;
  haptic?: keyof typeof impact | false;
};

export function PressableScale({
  children,
  className,
  style,
  wrapperStyle,
  pressedScale = 0.97,
  haptic = "light",
  onPressIn,
  onPressOut,
  onPress,
  ...rest
}: Props) {
  const scale = useSharedValue(1);
  const animated = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <Animated.View style={[animated, wrapperStyle]}>
      <Pressable
        {...rest}
        className={className}
        style={style}
        onPressIn={(e) => {
          scale.value = withSpring(pressedScale, { damping: 18, stiffness: 320 });
          onPressIn?.(e);
        }}
        onPressOut={(e) => {
          scale.value = withSpring(1, { damping: 14, stiffness: 260 });
          onPressOut?.(e);
        }}
        onPress={(e) => {
          if (haptic) void Haptics.impactAsync(impact[haptic]);
          onPress?.(e);
        }}
      >
        {children}
      </Pressable>
    </Animated.View>
  );
}
