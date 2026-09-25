import { useRouter } from "expo-router";
import { sendPasswordResetEmail, updateProfile } from "firebase/auth";
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
  const [saving, setSaving] = useState(false);
  const [resettingPassword, setResettingPassword] = useState(false);

  async function handleUpdateProfile() {
    if (!currentUser) {
      Alert.alert("Error", "No user is currently logged in.");
      return;
    }

    if (name.trim().length === 0) {
      Alert.alert("Name required", "Please enter your name.");
      return;
    }

    try {
      setSaving(true);

      await updateProfile(currentUser, {
        displayName: name.trim(),
      });

      Alert.alert(
        "Profile updated",
        "Your profile has been updated successfully.",
      );

      router.back();
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Unable to update your profile.");
    } finally {
      setSaving(false);
    }
  }

  async function handleResetPassword() {
    const email = currentUser?.email;

    if (!email) {
      Alert.alert(
        "Email unavailable",
        "No email address is associated with this account.",
      );
      return;
    }

    try {
      setResettingPassword(true);

      await sendPasswordResetEmail(auth, email);

      Alert.alert(
        "Reset email sent",
        `A password reset link has been sent to ${email}. Check your inbox and follow the instructions to create a new password.`,
      );
    } catch (error) {
      console.error(error);

      Alert.alert(
        "Unable to send email",
        "We couldn't send the password reset email. Please try again.",
      );
    } finally {
      setResettingPassword(false);
    }
  }

  return (
    <Screen>
      <Heading size="lg">Update Profile</Heading>

      <Body className="mt-2">
        Update your name or reset your password using your email.
      </Body>

      {/* Name */}
      <View className="mt-6">
        <Text className="mb-2 font-bodyBold text-dusk-900">
          Name
        </Text>

        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="Enter your name"
          autoCapitalize="words"
          className="rounded-2xl border border-mist bg-white px-4 py-3 text-base"
        />
      </View>

      {/* Email */}
      <View className="mt-6">
        <Text className="mb-2 font-bodyBold text-dusk-900">
          Email
        </Text>

        <TextInput
          value={currentUser?.email ?? ""}
          editable={false}
          className="rounded-2xl border border-mist bg-gray-100 px-4 py-3 text-base"
        />
      </View>

      {/* Reset Password */}
      <View className="mt-6">
        <Text className="mb-2 font-bodyBold text-dusk-900">
          Password
        </Text>

       <Button
  variant="soft"
  label={
    resettingPassword
      ? "Sending..."
      : "Reset Password"
  }
  onPress={handleResetPassword}
  disabled={resettingPassword || saving}
/>

<Text className="mt-2 text-sm text-gray-500">
  A password reset link will be sent to your email. If you don&asop;t see it in
  your inbox, please check your Spam or Junk folder.
</Text>
      </View>

      {/* Save */}
      <Button
        label={saving ? "Saving..." : "Update Profile"}
        className="mt-6"
        onPress={handleUpdateProfile}
        disabled={saving || resettingPassword}
      />

      {/* Cancel */}
      <Button
        variant="outline"
        label="Cancel"
        className="mt-3"
        onPress={() => router.back()}
        disabled={saving || resettingPassword}
      />
    </Screen>
  );
}