import {View, Text, StyleSheet, Pressable} from "react-native";
import { useRouter } from "expo-router";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  
  content: {
    fontSize: 16,
    textAlign: "center",
  },
  buttons:{
    alignItems: "center",
    backgroundColor: "#67a2e1",
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "center",
    margin: 14,
    padding: 10,
    minHeight: 50,
  }
});

export default function Learn() {
    const router = useRouter();
    return(

        <View style={styles.container}>
            <Text style={styles.content}>
                Welcome to the Learn & Prepare section! Here, you can find valuable information and resources to help you stay safe and prepared for emergencies. Explore the topics below to enhance your knowledge and readiness about crimes against women to ensure your safety.
            </Text>
            <Pressable style={styles.buttons} onPress={() => {
                router.navigate("/learn/whatCounts");
            }}>
                <Text style={styles.content}>Know what counts </Text>
            </Pressable>
            <Pressable style={styles.buttons} onPress={() => {
                router.navigate("/learn/warningSigns");
            }}>
                <Text style={styles.content}>know the warning signs </Text>
            </Pressable>
        </View>
    )
}
