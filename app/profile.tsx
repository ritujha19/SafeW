import { Text, View, Pressable, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import * as Location from "expo-location";
import {
  requestAndShareCurrentLocation,
  setLoggedIn,
  sharedLocationState,
} from "@/auth";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#F4F7FB",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 14,
    color: "#132238",
  },
  button: {
    backgroundColor: "lightpink",
    padding: 12,
    marginVertical: 10,
    borderRadius: 10,
  },
  permissionButton: {
    backgroundColor: "#2B6CB0",
    padding: 12,
    marginVertical: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#132238",
    fontSize: 15,
    fontWeight: "600",
  },
  permissionText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "600",
  },
  status: {
    fontSize: 14,
    marginBottom: 10,
    color: "#5B6878",
  },
  locationText: {
    marginTop: 12,
    color: "#132238",
    fontSize: 14,
  },
});

export default function Profile() {
  const router = useRouter();
  const [status] = Location.useForegroundPermissions();
  const permissionGranted = status?.status === "granted";

  async function handleRequestPermission() {
    const result = await requestAndShareCurrentLocation();

    if (result.success) {
      alert(`Location permission granted. ${result.address ?? "Current location saved."}`);
      return;
    }

    if (result.canAskAgain === false) {
      alert("Location permission denied. To use this feature, please enable location permission in your phone settings.");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Account</Text>

      <Text style={styles.status}>
        {permissionGranted
          ? "Location access: granted"
          : "Location access: not granted yet"}
      </Text>

      <Pressable
        style={styles.button}
        onPress={() => router.navigate("/trustedContact")}
      >
        <Text style={styles.buttonText}>Add trusted contact</Text>
      </Pressable>

      <Pressable style={styles.permissionButton} onPress={handleRequestPermission}>
        <Text style={styles.permissionText}>
          {permissionGranted ? "Location already granted" : "Ask for Location Permission"}
        </Text>
      </Pressable>

      {sharedLocationState.latitude !== null && (
        <Text style={styles.locationText}>
          Last shared location: {sharedLocationState.latitude}, {sharedLocationState.longitude}
        </Text>
      )}

      <Pressable
        style={styles.button}
        onPress={() => {
          setLoggedIn(false);
          alert("Logged out successfully");
          router.replace("/");
        }}
      >
        <Text style={styles.buttonText}>Logout</Text>
      </Pressable>
    </View>
  );
}
