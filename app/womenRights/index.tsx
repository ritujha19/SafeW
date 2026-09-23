import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, ScrollView } from "react-native";

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f8fb" },
  contentContainer: { padding: 20, paddingBottom: 40 },
  card: {
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
  cardList: {
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

export default function womenRights() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <Text style={styles.content}>
        Understanding your legal rights can help you know what protections and
        remedies are available to you.
      </Text>
      <Text style={styles.important}>Explore your rights</Text>
      <Pressable
        style={styles.buttons}
        onPress={() => router.navigate("/womenRights/constitutionRights")}
      >
        <Text style={styles.content}>Constitutional Rights</Text>
      </Pressable>
      <Pressable
        style={styles.buttons}
        onPress={() => router.navigate("/womenRights/protectionFromViolence")}
      >
        <Text style={styles.content}>Protection from Violence</Text>
      </Pressable>
      <Pressable
        style={styles.buttons}
        onPress={() => router.navigate("/womenRights/workplaceRights")}
      >
        <Text style={styles.content}>Workplace Rights</Text>
      </Pressable>
      <Pressable
        style={styles.buttons}
        onPress={() => console.log("Family & Marriage Rights Button pressed")}
      >
        <Text style={styles.content}>Family & Marriage Rights</Text>
      </Pressable>
      <Pressable
        style={styles.buttons}
        onPress={() => console.log("Digital Rights Button pressed")}
      >
        <Text style={styles.content}>Digital Rights</Text>
      </Pressable>
      <Pressable
        style={styles.buttons}
        onPress={() => console.log("Rights When Seeking Help Button pressed")}
      >
        <Text style={styles.content}>Rights When Seeking Help</Text>
      </Pressable>
      <Pressable
        style={styles.buttons}
        onPress={() => console.log("Rights of Children Button pressed")}
      >
        <Text style={styles.content}>Rights of Children</Text>
      </Pressable>
      <Pressable
        style={styles.buttons}
        onPress={() => console.log("Free Legal Aids Button pressed")}
      >
        <Text style={styles.content}>Free Legal Aids</Text>
      </Pressable>
    </ScrollView>
  );
}
