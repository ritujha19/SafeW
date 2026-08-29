import {
  View,
  Text,
  Pressable,
  TextInput,
} from "react-native";
import React from "react";
import { Link, useRouter } from "expo-router";
import { setLoggedIn } from "../auth";

export default function LoginPage() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter();

  const handleLogin = () => {
    setLoggedIn(true);
    alert(`email: ${email} logged in successfully`);
    router.navigate("/profile");
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center",  }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>
        Login
      </Text>
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
      <Pressable
        onPress={handleLogin}
        style={{
          backgroundColor: "blue",
          paddingVertical: 10,
          paddingHorizontal: 20,
          borderRadius: 10,
        }}
      >
        <Text style={{ color: "white" }}>Login</Text>
      </Pressable>
      <Text>
        If first time here then click here to{" "}
        <Link href={"/createAcc"} style={{ color: "green" }}>
          Create Account
        </Link>
      </Text>
    </View>
  );
}
