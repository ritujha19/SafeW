import { useEffect, useState } from "react";
import { Keyboard, type KeyboardAvoidingViewProps, Platform } from "react-native";

/**
 * On Android 15+, edge-to-edge mode (which this app has on via
 * android.edgeToEdgeEnabled in app.json) stops the OS from resizing the
 * window when the keyboard opens — the old "softwareKeyboardLayoutMode:
 * resize" trick alone no longer does anything. The keyboard is reported as
 * an inset the app has to handle itself.
 *
 * This hook gives KeyboardAvoidingView a `behavior` that:
 * - is "padding" on iOS (always worked, unchanged)
 * - is "height" on Android, but ONLY while the keyboard is actually visible
 *   — leaving it always-on causes a blank gap at the bottom when the
 *   keyboard is hidden, which is the other half of this same Android bug.
 */
export function useKeyboardBehavior(): KeyboardAvoidingViewProps["behavior"] {
  const activeValue: KeyboardAvoidingViewProps["behavior"] =
    Platform.OS === "ios" ? "padding" : "height";

  const [behavior, setBehavior] = useState<KeyboardAvoidingViewProps["behavior"]>(
    Platform.OS === "ios" ? activeValue : undefined,
  );

  useEffect(() => {
    if (Platform.OS === "ios") return; // "padding" works reliably on iOS at all times
    const show = Keyboard.addListener("keyboardDidShow", () => setBehavior(activeValue));
    const hide = Keyboard.addListener("keyboardDidHide", () => setBehavior(undefined));
    return () => {
      show.remove();
      hide.remove();
    };
  }, []);

  return behavior;
}
