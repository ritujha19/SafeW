import { useEffect, useState } from "react";
import { Keyboard, Platform } from "react-native";

/**
 * True while the keyboard is on screen. Used to add the bottom safe-area
 * padding (Android gesture bar) only when the keyboard is closed — while it's
 * open, the keyboard already covers that area, so extra padding would leave a
 * gap above the keyboard.
 */
export function useKeyboardVisible(): boolean {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const showEvent = Platform.OS === "ios" ? "keyboardWillShow" : "keyboardDidShow";
    const hideEvent = Platform.OS === "ios" ? "keyboardWillHide" : "keyboardDidHide";
    const show = Keyboard.addListener(showEvent, () => setVisible(true));
    const hide = Keyboard.addListener(hideEvent, () => setVisible(false));
    return () => {
      show.remove();
      hide.remove();
    };
  }, []);

  return visible;
}
