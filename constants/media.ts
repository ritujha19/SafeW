import type { ImageSourcePropType } from "react-native";
import type { LottieSource } from "@/components/Media";

/* ------------------------------------------------------------------ */
/* LottieFiles: large animations. These four ship with the project    */
/* (generic pulse rings + success check). Swap any file for a          */
/* LottieFiles download with the same name and nothing else changes.   */
/* ------------------------------------------------------------------ */
export const lottie = {
  sosPulse: require("../assets/lottie/sos-pulse.json") as LottieSource,
  emergencyPulse: require("../assets/lottie/emergency-pulse.json") as LottieSource,
  locationPulse: require("../assets/lottie/location-pulse.json") as LottieSource,
  successCheck: require("../assets/lottie/success-check.json") as LottieSource,
};

/* ------------------------------------------------------------------ */
/* Lordicon: small interactive icons.                                  */
/* 1. Download the icon as Lottie JSON into assets/lordicon/           */
/* 2. Uncomment its require() line below                               */
/* Until then a matching vector icon is shown, so nothing looks empty. */
/* ------------------------------------------------------------------ */
type LordiconName =
  | "profile"
  | "assistant"
  | "learn"
  | "rights"
  | "contacts"
  | "location";

export const lordicon: Record<LordiconName, LottieSource | undefined> = {
  profile: undefined, // require("../assets/lordicon/profile.json"),
  assistant: undefined, // require("../assets/lordicon/assistant.json"),
  learn: undefined, // require("../assets/lordicon/learn.json"),
  rights: undefined, // require("../assets/lordicon/rights.json"),
  contacts: undefined, // require("../assets/lordicon/contacts.json"),
  location: undefined, // require("../assets/lordicon/location.json"),
};

/* ------------------------------------------------------------------ */
/* Storyset: decorative illustrations (download as PNG).               */
/* Same idea: drop the PNG into assets/illustrations/ and uncomment.   */
/* ------------------------------------------------------------------ */
type IllustrationName = "login" | "signup" | "learn" | "rights" | "contacts";

export const illustrations: Record<IllustrationName, ImageSourcePropType | undefined> = {
  login: undefined, // require("../assets/illustrations/login.png"),
  signup: undefined, // require("../assets/illustrations/signup.png"),
  learn: undefined, // require("../assets/illustrations/learn.png"),
  rights: undefined, // require("../assets/illustrations/rights.png"),
  contacts: undefined, // require("../assets/illustrations/contacts.png"),
};
