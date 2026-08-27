import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack>
  <Stack.Screen
    name="index"
    options={{
      title: "SAFE-W",
      
    }}
  />
  <Stack.Screen name="createAcc" options={{title: "Create Account "}} />
  <Stack.Screen name="emergency" options={{ title: "Emergency" }} />
  <Stack.Screen name="location" options={{ title: "Location" }} />
  <Stack.Screen name="login" options={{ title: "Login" }} />
  <Stack.Screen name="trustedContact" options={{ title: "Trusted Contacts" }} />
</Stack>;
}
