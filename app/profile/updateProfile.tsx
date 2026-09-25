import { useRouter } from "expo-router";
import {
  updateEmail,
  updateProfile as updateFirebaseProfile,
  updatePassword,
  reload,
} from "firebase/auth";
import React, { useState } from "react";
import { Alert, Text, TextInput, View } from "react-native";

import { Button } from "@/components/Button";
import { Screen } from "@/components/Screen";
import { Body, Heading } from "@/components/Typography";
import { auth } from "@/firebase";

export default function UpdateProfile() {
  const router = useRouter();
  const currentUser = auth.currentUser;

  const [name, setName] = useState(currentUser?.displayName ?? "");
  const [email, setEmail] = useState(currentUser?.email ?? "");
  const [password, setPassword] = useState("");
  const [showPasswordField, setShowPasswordField] = useState(false);
  const [saving, setSaving] = useState(false);

  async function handleUpdateProfile() {
    if (!currentUser) {
      Alert.alert("Error", "No user is currently logged in.");
      return;
    }

    if (name.trim().length === 0) {
      Alert.alert("Name required", "Please enter your name.");
      return;
    }

    if (showPasswordField && !password.trim()) {
      Alert.alert("Password required", "Please enter a new password.");
      return;
    }

    if (showPasswordField && password.trim().length < 6) {
      Alert.alert(
        "Password too short",
        "Use at least 6 characters for the new password.",
      );
      return;
    }

    try {
      setSaving(true);

      await updateFirebaseProfile(currentUser, {
        displayName: name.trim(),
        
      });

      if (email.trim() !== (currentUser.email ?? "")) {
        await updateEmail(currentUser, email.trim());
      }

      if (showPasswordField && password.trim()) {
        await updatePassword(currentUser, password.trim());
      }
      await reload(currentUser);
      
      Alert.alert(
        "Profile updated",
        "Your profile has been updated successfully.",
      );
      router.back();
    } catch (error) {
      console.error(error);
      const message =
        error instanceof Error &&
        error.message.includes("requires-recent-login")
          ? "Please log in again and try updating your password."
          : "Unable to update your profile.";
      Alert.alert("Error", message);
    } finally {
      setSaving(false);
    }
  }

  return (
    <Screen>
      <Heading size="lg">Update Profile</Heading>

      <Body className="mt-2">
        Update your name and contact details, or change your password when
        needed.
      </Body>

      <View className="mt-6">
        <Text className="mb-2 font-bodyBold text-dusk-900">Name</Text>
        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="Enter your name"
          autoCapitalize="words"
          className="rounded-2xl border border-mist bg-white px-4 py-3 text-base"
        />
      </View>

      <View className="mt-6">
        <Text className="mb-2 font-bodyBold text-dusk-900">Email</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
          autoCapitalize="none"
          keyboardType="email-address"
          className="rounded-2xl border border-mist bg-white px-4 py-3 text-base"
        />
      </View>
      <Button
        variant="soft"
        label={showPasswordField ? "Hide password change" : "Forgot Password"}
        className="mt-6"
        onPress={() => setShowPasswordField((value) => !value)}
        disabled={saving}
      />

      {showPasswordField ? (
        <View className="mt-6">
          <Text className="mb-2 font-bodyBold text-dusk-900">New password</Text>
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Enter your new password"
            secureTextEntry
            className="rounded-2xl border border-mist bg-white px-4 py-3 text-base"
          />
        </View>
      ) : null}

      <Button
        label={saving ? "Saving..." : "Update Profile"}
        className="mt-6"
        onPress={handleUpdateProfile}
        disabled={saving}
      />

      <Button
        variant="outline"
        label="Cancel"
        className="mt-3"
        onPress={() => router.back()}
        disabled={saving}
      />
    </Screen>
  );
}
