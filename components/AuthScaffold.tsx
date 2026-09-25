import type { ReactNode } from "react";
import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { type IconName, Illustration } from "./Media";
import { Body, Display } from "./Typography";

export function AuthScaffold({
  illustrationNode,
  fallback,
  title,
  subtitle,
  children,
  footer,
}: {
  illustrationNode?: ReactNode;
  fallback: IconName;
  title: string;
  subtitle: string;
  children: ReactNode;
  footer: ReactNode;
}) {
  const insets = useSafeAreaInsets();
  return (
    <KeyboardAvoidingView
      className="flex-1 bg-paper"
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView
        contentContainerStyle={{
          padding: 24,
          paddingBottom: insets.bottom + 32,
        }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {illustrationNode ?? <Illustration fallback={fallback} />}
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
