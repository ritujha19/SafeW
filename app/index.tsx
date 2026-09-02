import { StyleSheet, Text, View, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4d8ab",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
  },
  Button: {
    backgroundColor: "#e0e0e0",
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    alignItems: "center",
  },
  pressedButton: {
    backgroundColor: "white",
  },
  buttonText: {
    fontSize: 16,
    color: "#333",
  },
});

function Index() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.container, { paddingTop: insets.top, paddingBottom: insets.bottom }]}>
      <Text style={styles.subtitle}>Your safety matters.</Text>

      <Pressable
        style={({ pressed }) => [
          styles.Button,
          pressed && styles.pressedButton,
        ]}
        onPress={() => router.navigate("/emergency")}
      >
        <Text style={styles.buttonText}>💀 I&apos;m in danger</Text>
      </Pressable>
      <Pressable
        style={({ pressed }) => [
          styles.Button,
          pressed && styles.pressedButton,
        ]}
        onPress={() => {
          console.log("ai Button pressed");
        }}
      >
        <Text style={styles.buttonText}>🤖 Safety Assistant</Text>
      </Pressable>
      <Pressable
        style={({ pressed }) => [
          styles.Button,
          pressed && styles.pressedButton,
        ]}
        onPress={() => {
          console.log("women's rights Button pressed");
        }}
      >
        <Text style={styles.buttonText}>⚖️ Women&apos;s Rights</Text>
      </Pressable>
      <Pressable
        style={({ pressed }) => [
          styles.Button,
          pressed && styles.pressedButton,
        ]}
        onPress={() => router.navigate("./learn")}
      >
        <Text style={styles.buttonText}>📚 Learn & Prepare </Text>
      </Pressable>
    </View>
  );
}

export default function App() {
  return(
    <SafeAreaProvider>
      <Index />
    </SafeAreaProvider>
  );
}
