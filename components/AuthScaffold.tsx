import type { ImageSourcePropType } from "react-native";
import type { ReactNode } from "react";
import { KeyboardAvoidingView, ScrollView, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useKeyboardBehavior } from "@/hooks/useKeyboardBehavior";
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
  const keyboardBehavior = useKeyboardBehavior();
  return (
    <KeyboardAvoidingView className="flex-1 bg-paper" behavior={keyboardBehavior}>
      <ScrollView
        contentContainerStyle={{ padding: 24, paddingBottom: insets.bottom + 32 }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {illustrationNode ?? <Illustration source={illustration} fallback={fallback} height={168} />}
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
