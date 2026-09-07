import { sharedLocationState, trustedContacts } from "@/auth";
import { useFocusEffect } from "@react-navigation/native";
import * as Location from "expo-location";
import { useCallback, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

export default function LocationScreen() {
  const [location, setLocation] = useState(sharedLocationState);
  const [permission, setPermission] =
    useState<Location.LocationPermissionResponse | null>(null);

  useFocusEffect(
    useCallback(() => {
      setLocation(sharedLocationState);
      Location.getForegroundPermissionsAsync().then(setPermission);
    }, []),
  );

  const permissionGranted = permission?.status === "granted";

  const handleShare = () => {
    if (
      !permissionGranted ||
      location.latitude === null ||
      location.longitude === null
    ) {
      alert(
        "Location permission is required before sharing. Please allow it from your profile first.",
      );
      return;
    }

    const contacts = trustedContacts.length
      ? trustedContacts
          .map((contact) => contact.name || "Trusted contact")
          .join(", ")
      : "No trusted contacts saved yet";

    console.log(
      "Sharing current location with trusted contacts:",
      contacts,
      location,
    );
    alert(
      `This is a test share. Current location would be sent to: ${contacts}`,
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Shared location</Text>

      <Text style={styles.status}>
        {permissionGranted
          ? "Location access: granted"
          : "Location access: not granted"}
      </Text>

      {location.latitude !== null && location.longitude !== null ? (
        <View style={styles.card}>
          <Text style={styles.label}>Latitude: {location.latitude}</Text>
          <Text style={styles.label}>Longitude: {location.longitude}</Text>
          <Text style={styles.label}>
            Accuracy: {location.accuracy ?? "N/A"}
          </Text>
          <Text style={styles.label}>
            Timestamp: {location.timestamp ?? "N/A"}
          </Text>
          <Text style={styles.label}>
            Address: {location.address ?? "Address unavailable"}
          </Text>
        </View>
      ) : (
        <Text style={styles.message}>
          No location shared yet. Please allow access from your profile first.
        </Text>
      )}

      <Pressable
        style={({ pressed }) => [styles.button, pressed && styles.pressed]}
        onPress={handleShare}
      >
        <Text style={styles.buttonText}>Share with trusted contacts</Text>
      </Pressable>

      <Text style={styles.footer}>
        Saved contacts:{" "}
        {trustedContacts.length > 0
          ? trustedContacts
              .map((contact) => contact.name || contact.mobNumber)
              .join(", ")
          : "None"}
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingVertical: 24,
    backgroundColor: "#F7F9FC",
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 12,
    color: "#172033",
  },
  status: {
    fontSize: 15,
    fontWeight: "600",
    color: "#667085",
    marginBottom: 16,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#E4E7EC",
  },
  label: {
    fontSize: 15,
    marginBottom: 8,
    color: "#172033",
  },
  message: {
    color: "#667085",
    marginBottom: 20,
    lineHeight: 22,
  },
  button: {
    backgroundColor: "#3157D5",
    borderRadius: 14,
    height: 52,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  pressed: {
    opacity: 0.8,
  },
  footer: {
    marginTop: 18,
    color: "#98A2B3",
    textAlign: "center",
  },
});
