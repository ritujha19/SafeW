import { View, Text, StyleSheet, Pressable } from "react-native";
import { useRouter } from "expo-router";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  card:{
    borderWidth: 1,
    borderColor: "#67a2e1",
    borderRadius: 10,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0f4e92",
  },
  cardList:{
    marginTop: 14,
    color: "#3f87d4",
  },
  content: {
    fontSize: 16,
    textAlign: "center",
  },
  buttons: {
    alignItems: "center",
    backgroundColor: "#67a2e1",
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "center",
    margin: 14,
    padding: 10,
    minHeight: 50,
  },
  important: {
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
    paddingBottom: 10,
  },
});

export default function Learn() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.content}>
        Knowing what to look for can help you recognize risks earlier, make
        informed decisions, and feel more prepared to protect yourself.
      </Text>
      <Text style={styles.important}>
        Learn these principles now, so you can remember them when you need them.
      </Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>NOTICE → MOVE → TELL</Text>
        <Text style={styles.cardList}>Notice something concerning. </Text>
        <Text style={styles.cardList}>Move toward safety. </Text>
        <Text style={styles.cardList}>Tell someone you trust.</Text>
      </View>

      <Pressable
        style={styles.buttons}
        onPress={() => {
          router.navigate("/learn/whatCounts");
        }}
      >
        <Text style={styles.content}>Know what counts </Text>
      </Pressable>
      <Pressable
        style={styles.buttons}
        onPress={() => {
          router.navigate("/learn/warningSigns");
        }}
      >
        <Text style={styles.content}>know the warning signs </Text>
      </Pressable>
      <Pressable
        style={styles.buttons}
        onPress={() => {
          router.navigate("/learn/safetyEssentials");
        }}
      >
        <Text style={styles.content}>Safety Essentials</Text>
      </Pressable>
    </View>
  );
}
