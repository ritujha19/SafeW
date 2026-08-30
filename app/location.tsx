import { useCallback, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import * as Location from "expo-location";
import { sharedLocationState, trustedContacts } from "@/auth";

export default function LocationScreen() {
  const [location, setLocation] = useState(sharedLocationState);
  const [permission, setPermission] = useState<Location.LocationPermissionResponse | null>(null);

  useFocusEffect(
    useCallback(() => {
      setLocation(sharedLocationState);
      Location.getForegroundPermissionsAsync().then(setPermission);
    }, []),
  );

  const permissionGranted = permission?.status === "granted";

  const handleShare = () => {
    if (!permissionGranted || location.latitude === null || location.longitude === null) {
      alert("Location permission is required before sharing. Please allow it from your profile first.");
      return;
    }

    const contacts = trustedContacts.length
      ? trustedContacts
          .map((contact) => contact.name || "Trusted contact")
          .join(", ")
      : "No trusted contacts saved yet";

    console.log("Sharing current location with trusted contacts:", contacts, location);
    alert(`This is a test share. Current location would be sent to: ${contacts}`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Shared location</Text>

      <Text style={styles.status}>
        {permissionGranted ? "Location access: granted" : "Location access: not granted"}
      </Text>

      {location.latitude !== null && location.longitude !== null ? (
        <View style={styles.card}>
          <Text style={styles.label}>Latitude: {location.latitude}</Text>
          <Text style={styles.label}>Longitude: {location.longitude}</Text>
          <Text style={styles.label}>Accuracy: {location.accuracy ?? "N/A"}</Text>
          <Text style={styles.label}>Timestamp: {location.timestamp ?? "N/A"}</Text>
          <Text style={styles.label}>Address: {location.address ?? "Address unavailable"}</Text>
        </View>
      ) : (
        <Text style={styles.message}>
          No location shared yet. Please allow access from your profile first.
        </Text>
      )}

      <Pressable style={styles.button} onPress={handleShare}>
        <Text style={styles.buttonText}>Share with trusted contacts</Text>
      </Pressable>

      <Text style={styles.footer}>
        Saved contacts: {trustedContacts.length > 0 ? trustedContacts.map((contact) => contact.name || contact.mobNumber).join(", ") : "None"}
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 24,
    backgroundColor: "#F4F7FB",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 12,
    color: "#132238",
  },
  status: {
    fontSize: 14,
    fontWeight: "600",
    color: "#5B6878",
    marginBottom: 16,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#DCE5F0",
  },
  label: {
    fontSize: 15,
    marginBottom: 8,
    color: "#132238",
  },
  message: {
    color: "#5B6878",
    marginBottom: 20,
    lineHeight: 22,
  },
  button: {
    backgroundColor: "#2B6CB0",
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 8,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
  footer: {
    marginTop: 18,
    color: "#5B6878",
    textAlign: "center",
  },
});

