import { Text, View, Pressable, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { requestAndShareCurrentLocation, trustedContacts } from "@/auth";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "lightpink",
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
});

export default function Emergency() {
  const show = () => {
    alert(
      "112: Emergency Response Support System (ERSS), 181: National Women Helpline(non-emergency support for women facing violence or distress),139: Indian Railway Security Helpline,1091: Women in Distress Helpline",
    );
  };

  const router = useRouter();

  const handleShareLocation = async () => {
    const result = await requestAndShareCurrentLocation();

    if (!result.success) {
      alert("Location permission is needed before sharing your location.");
      return;
    }

    const contacts = trustedContacts.length
      ? trustedContacts.map((contact) => contact.name || "Trusted contact").join(", ")
      : "No trusted contacts saved yet";

    console.log("Sharing location with:", contacts, result.location);
    router.navigate("/location");
  };

  return (
    <View style={styles.container}>
      <Text>Are you in Immediate Danger?</Text>

      <Pressable style={styles.button} onPress={show}>
        <Text>Emergency Helpline number</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={handleShareLocation}>
        <Text>Share Location</Text>
      </Pressable>
    </View>
  );
}
