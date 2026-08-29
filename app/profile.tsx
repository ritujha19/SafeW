import { Text, View, Pressable, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import React from "react";
import { setLoggedIn } from "@/auth";

const styles = StyleSheet.create({
  button: {
    backgroundColor: "lightpink",
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
});

export default function Profile() {
  const router = useRouter();
  return (
    <View>
      <Text>Your Account</Text>
      <Pressable
        style={styles.button}
        onPress={() => router.navigate("/trustedContact")}
      >
        <Text>Add trusted contact </Text>
      </Pressable>
      <Pressable
        onPress={() => {
          router.navigate("/location");
        }}
      >
        <Text>Share Location</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => {
          setLoggedIn(false);
          router.navigate("/login");
          alert("Logged out successfully");
          router.replace("/");
        }}
      >
        <Text>Logout</Text>
      </Pressable>
    </View>
  );
}
