import { FirebaseError } from "firebase/app";

// Firebase Auth error codes -> what to actually tell the person.
// https://firebase.google.com/docs/reference/js/auth#autherrorcodes
const messages: Record<string, string> = {
  "auth/invalid-email": "That email address doesn't look right. Double-check it and try again.",
  "auth/user-disabled": "This account has been disabled. Contact support if that seems wrong.",
  "auth/user-not-found": "We couldn't find an account with that email.",
  "auth/wrong-password": "That password doesn't match. Try again or reset it.",
  // Newer Firebase versions return this single code instead of the two above,
  // to avoid revealing whether the email exists.
  "auth/invalid-credential": "Email or password is incorrect.",
  "auth/email-already-in-use": "An account with this email already exists. Try logging in instead.",
  "auth/weak-password": "Choose a password with at least 6 characters.",
  "auth/too-many-requests": "Too many attempts. Please wait a moment and try again.",
  "auth/network-request-failed": "Network issue. Check your connection and try again.",
};

/** Turns a caught Firebase (or generic) error into one sentence for the UI. */
export function authErrorMessage(error: unknown): string {
  if (error instanceof FirebaseError) {
    return messages[error.code] ?? "Something went wrong. Please try again.";
  }
  if (error instanceof Error) return error.message;
  return "Something went wrong. Please try again.";
}
