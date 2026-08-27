import { Pressable, TextInput, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function CreateAccountPage() {
  const handleCreateAccount = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match! confirm your password first");
    } else {
      alert(`user ${username} created account successfully`);
    }
  };

  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>
        Create Account
      </Text>
      <Text>UserName:</Text>
      <TextInput
        placeholder="JohnDoe or add special characters "
        value={username}
        onChangeText={setUsername}
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 10,
          width: "80%",
          borderRadius: 10,
          paddingHorizontal: 10,
        }}
      />
      <Text>Email:</Text>
      <TextInput
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          borderRadius: 10,
          marginBottom: 10,
          width: "80%",
          paddingHorizontal: 10,
        }}
      />
      <Text>Password:</Text>
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          borderRadius: 10,
          marginBottom: 10,
          width: "80%",
          paddingHorizontal: 10,
        }}
      />
      <Text>Confirm Password:</Text>
      <TextInput
        placeholder="Confirm Password"
        secureTextEntry={true}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          borderRadius: 10,
          marginBottom: 10,
          width: "80%",
          paddingHorizontal: 10,
        }}
      />
      <Pressable
        onPress={handleCreateAccount}
        style={{
          backgroundColor: "blue",
          paddingVertical: 10,
          paddingHorizontal: 20,
          borderRadius: 5,
        }}
      >
        <Text style={{ color: "white" }}>Create Account</Text>
      </Pressable>
      <Text>
        If you have account then click here to{" "}
        <Link href={"/login"} style={{ color: "green" }}>
          login{" "}
        </Link>
      </Text>
    </View>
  );
}
