import { Link, useRouter } from "expo-router";
import React from "react";
import { signUp } from "@/auth";
import { AuthScaffold } from "@/components/AuthScaffold";
import { SignupIllustration } from "@/components/AuthIllustrations";
import { Button } from "@/components/Button";
import { Callout } from "@/components/Screen";
import { TextField } from "@/components/TextField";
import { Body } from "@/components/Typography";
import { colors } from "@/constants/theme";
import { authErrorMessage } from "@/lib/authErrorMessage";

export default function CreateAccountPage() {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [submitting, setSubmitting] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const router = useRouter();

  const handleCreateAccount = async () => {
    if (submitting) return;
    setError(null);

    if (!username.trim() || !email.trim() || !password) {
      setError("Fill in your username, email and password to continue.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match. Confirm your password and try again.");
      return;
    }

    setSubmitting(true);
    try {
      // createUserWithEmailAndPassword also signs the person in, so we treat
      // a successful sign-up as a successful login and go straight to Profile.
      await signUp(email.trim(), password, username.trim());
      router.navigate("/profile/profile");
    } catch (err) {
      setError(authErrorMessage(err));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AuthScaffold
      illustrationNode={<SignupIllustration />}
      fallback="person-add-outline"
      title="Create your account"
      subtitle="Set up SAFE-W so help is closer when you need it."
      footer={
        <>
          <Body>Already have an account? </Body>
          <Link
            href="/profile/login"
            style={{ fontFamily: "Figtree_700Bold", fontSize: 16, color: colors.dusk[600] }}
          >
            Log in
          </Link>
        </>
      }
    >
      {error ? (
        <Callout tone="danger" icon="alert-circle-outline" title="Couldn't create account">
          {error}
        </Callout>
      ) : null}

      <TextField
        label="Username"
        icon="person-outline"
        placeholder="Choose a username"
        autoCapitalize="none"
        editable={!submitting}
        value={username}
        onChangeText={setUsername}
      />
      <TextField
        label="Email"
        icon="mail-outline"
        placeholder="you@example.com"
        keyboardType="email-address"
        autoCapitalize="none"
        autoComplete="email"
        editable={!submitting}
        value={email}
        onChangeText={setEmail}
      />
      <TextField
        label="Password"
        icon="lock-closed-outline"
        placeholder="Create a password"
        secure
        autoCapitalize="none"
        editable={!submitting}
        value={password}
        onChangeText={setPassword}
      />
      <TextField
        label="Confirm password"
        icon="shield-checkmark-outline"
        placeholder="Type it again"
        secure
        autoCapitalize="none"
        editable={!submitting}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        onSubmitEditing={handleCreateAccount}
      />
      <Button
        label={submitting ? "Creating account…" : "Create account"}
        loading={submitting}
        onPress={handleCreateAccount}
        className="mt-2"
      />
    </AuthScaffold>
  );
}
