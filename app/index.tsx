import { StyleSheet, Text, View , Pressable} from "react-native";
import { useRouter } from "expo-router";

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
  buttonText:{
    fontSize: 16,
    color: "#333",
  }
});

export default function Index() {
  const router = useRouter();
  return (
   
    <View style={styles.container}>
      <Text style={styles.title}>SAFE-W</Text>
      <Text style={styles.subtitle}>Your safety matters.</Text>
       < Pressable style={({ pressed }) => [styles.Button, pressed && styles.pressedButton]} onPress={() => router.navigate('/createAcc')}>
       <Text style={styles.buttonText}>Login/Signup</Text>
     </Pressable>
    <Pressable style={({ pressed }) => [styles.Button, pressed && styles.pressedButton]}onPress={() => router.navigate('/emergency')}>
      <Text style={styles.buttonText}>💀 I'm in danger</Text>
      </Pressable>
      <Pressable style={({ pressed }) => [styles.Button, pressed && styles.pressedButton]} onPress={() => {console.log("ai Button pressed")}}>
        <Text style={styles.buttonText}>🤖 Safety Assistant</Text>
      </Pressable>
      <Pressable style={({ pressed }) => [styles.Button, pressed && styles.pressedButton]} onPress={() => {console.log("women's rights Button pressed")}}>
        <Text style={styles.buttonText}>⚖️ Women's Rights</Text>
      </Pressable>
      <Pressable style={({ pressed }) => [styles.Button, pressed && styles.pressedButton]} onPress={() => {console.log("learn & prepare Button pressed")}}>
        <Text style={styles.buttonText}>📚 Learn & Prepare </Text>
      </Pressable>
    </View>
  );
}
