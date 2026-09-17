import { Stack, useRouter } from "expo-router";
import { Pressable, Text } from "react-native";
import { isLoggedIn } from "../auth";
import "../global.css";

export default function RootLayout() {
  const router = useRouter();

  const handleProfilePress = () => {
    router.navigate(isLoggedIn ? "/profile" : "/login");
  };

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "SAFE-W",
          headerRight: () => (
            <Pressable onPress={handleProfilePress}>
              <Text style={{ fontSize: 24, padding: 10 }}>👤</Text>
            </Pressable>
          ),
        }}
      />
      <Stack.Screen name="createAcc" options={{ title: "Create Account " }} />
      <Stack.Screen name="emergency" options={{ title: "Emergency" }} />
      <Stack.Screen name="location" options={{ title: "Location" }} />
      <Stack.Screen name="login" options={{ title: "Login" }} />
      <Stack.Screen
        name="trustedContact"
        options={{ title: "Trusted Contacts" }}
      />
      <Stack.Screen name="learn/index" options={{ title: "Learn & Prepare" }} />
      <Stack.Screen
        name="learn/whatCounts"
        options={{ title: "Know What Counts" }}
      />
      <Stack.Screen
        name="learn/warningSigns"
        options={{ title: "Know the Warning Signs" }}
      />
      <Stack.Screen
        name="learn/safetyEssentials"
        options={{ title: "Safety Essentials" }}
      />
      <Stack.Screen
        name="learn/prepareYourself"
        options={{ title: "Prepare Yourself" }}
      />
      <Stack.Screen
        name="womenRights/index"
        options={{ title: "Women's Rights" }}
      />
    </Stack>
  );
}
