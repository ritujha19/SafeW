import type { ImageSourcePropType } from "react-native";
import type { ReactNode } from "react";
import { ScrollView, View } from "react-native";
import { KeyboardAvoidingView } from "react-native-keyboard-controller";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { colors } from "@/constants/theme";
import { type IconName, Illustration } from "./Media";
import { Body, Display } from "./Typography";

export function AuthScaffold({
  illustrationNode,
  illustration,
  fallback,
  title,
  subtitle,
  children,
  footer,
}: {
  /** A custom illustration component, e.g. <LoginIllustration />. Takes priority over `illustration`. */
  illustrationNode?: ReactNode;
  illustration?: ImageSourcePropType;
  fallback: IconName;
  title: string;
  subtitle: string;
  children: ReactNode;
  footer: ReactNode;
}) {
  const insets = useSafeAreaInsets();
  return (
    // KeyboardAvoidingView from react-native-keyboard-controller (not React Native's
    // built-in one): with edge-to-edge on, the built-in one doesn't receive real
    // keyboard insets on Android. Third-party component, so plain `style`, not className.
    <KeyboardAvoidingView
      behavior="padding"
      style={{ flex: 1, backgroundColor: colors.paper }}
    >
      <ScrollView
        contentContainerStyle={{
          padding: 24,
          paddingBottom: insets.bottom + 32,
        }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {illustrationNode ?? (
          <Illustration
            source={illustration}
            fallback={fallback}
            height={168}
          />
        )}
        <Display size="lg" className="mt-3">
          {title}
        </Display>
        <Body className="mb-6 mt-2">{subtitle}</Body>
        {children}
        <View className="mt-6 flex-row flex-wrap items-center justify-center">
          {footer}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
