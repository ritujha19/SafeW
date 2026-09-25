import { Link, useRouter } from "expo-router";
import React from "react";
import { Image } from "react-native";
import { login, setLoggedIn } from "@/auth";
import { AuthScaffold } from "@/components/AuthScaffold";
import { Button } from "@/components/Button";
import { Callout } from "@/components/Screen";
import { TextField } from "@/components/TextField";
import { Body } from "@/components/Typography";
import { illustrations } from "@/constants/media";
import { colors } from "@/constants/theme";
import { authErrorMessage } from "@/lib/authErrorMessage";

export default function LoginPage() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [submitting, setSubmitting] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const router = useRouter();

  const handleLogin = async () => {
    if (submitting) return;
    setError(null);

    if (!email.trim() || !password) {
      setError("Enter your email and password to continue.");
      return;
    }

    setSubmitting(true);
    try {
      await login(email.trim(), password);
      setLoggedIn(true);
      router.navigate("/profile/profile");
    } catch (err) {
      setError(authErrorMessage(err));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AuthScaffold
      illustrationNode={
        illustrations.login ? <Image source={illustrations.login} /> : null
      }
      fallback="lock-closed-outline"
      title="Welcome back"
      subtitle="Log in to reach your trusted contacts and safety settings."
      footer={
        <>
          <Body>New to SAFE-W? </Body>
          <Link
            href="/profile/createAcc"
            style={{ fontFamily: "Figtree_700Bold", fontSize: 16, color: colors.dusk[600] }}
          >
            Create an account
          </Link>
        </>
      }
    >
      {error ? (
        <Callout tone="danger" icon="alert-circle-outline" title="Couldn't log in">
          {error}
        </Callout>
      ) : null}

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
        placeholder="Your password"
        secure
        autoCapitalize="none"
        autoComplete="password"
        editable={!submitting}
        value={password}
        onChangeText={setPassword}
        onSubmitEditing={handleLogin}
      />
      <Button
        label={submitting ? "Logging in…" : "Log in"}
        loading={submitting}
        onPress={handleLogin}
        className="mt-2"
      />
    </AuthScaffold>
  );
}
