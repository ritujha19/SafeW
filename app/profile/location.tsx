import { sharedLocationState, trustedContacts } from "@/auth";
import { Ionicons } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";
import * as Location from "expo-location";
import { useCallback, useState } from "react";
import { Text, View } from "react-native";
import { Button } from "@/components/Button";
import { LottieAnim } from "@/components/Media";
import { Screen } from "@/components/Screen";
import { Body, Heading, Label } from "@/components/Typography";
import { lottie } from "@/constants/media";
import { colors } from "@/constants/theme";

function Row({ label, value }: { label: string; value: string }) {
  return (
    <View className="flex-row items-start justify-between border-b border-mist py-3">
      <Body size="sm">{label}</Body>
      <Text className="ml-4 flex-1 text-right font-bodyMedium text-[15px] leading-[21px] text-midnight">
        {value}
      </Text>
    </View>
  );
}

const formatTimestamp = (value: unknown) =>
  typeof value === "number"
    ? new Date(value).toLocaleString()
    : value
      ? String(value)
      : "N/A";

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
  const hasLocation = location.latitude !== null && location.longitude !== null;

  const handleShare = () => {
    if (!permissionGranted || location.latitude === null || location.longitude === null) {
      alert(
        "Location permission is required before sharing. Please allow it from your profile first.",
      );
      return;
    }

    const contacts = trustedContacts.length
      ? trustedContacts.map((contact) => contact.name || "Trusted contact").join(", ")
      : "No trusted contacts saved yet";

    console.log("Sharing current location with trusted contacts:", contacts, location);
    alert(`This is a test share. Current location would be sent to: ${contacts}`);
  };

  return (
    <Screen>
      {/* Status hero */}
      <View className="mb-5 items-center overflow-hidden rounded-[32px] bg-midnight px-5 py-6">
        <View className="h-[190px] w-[190px] items-center justify-center">
          {permissionGranted ? (
            <View style={{ position: "absolute" }}>
              <LottieAnim source={lottie.locationPulse} size={190} reducedProgress={0.4} />
            </View>
          ) : null}
          <View className="h-[64px] w-[64px] items-center justify-center rounded-full bg-marigold">
            <Ionicons name="location" size={30} color={colors.midnight} />
          </View>
        </View>
        <View
          className={`mt-1 flex-row items-center rounded-full px-3 py-1.5 ${
            permissionGranted ? "bg-haven-soft" : "bg-marigold-soft"
          }`}
        >
          <Ionicons
            name={permissionGranted ? "checkmark-circle" : "alert-circle"}
            size={16}
            color={permissionGranted ? colors.havenDark : colors.marigoldDark}
          />
          <Text
            className={`ml-1.5 font-bodyBold text-[13px] ${
              permissionGranted ? "text-haven-dark" : "text-marigold-dark"
            }`}
          >
            {permissionGranted ? "Location access: granted" : "Location access: not granted"}
          </Text>
        </View>
      </View>

      {/* Coordinates */}
      {hasLocation ? (
        <View className="mb-5 rounded-[24px] border border-mist bg-white px-5 py-2">
          <Heading className="pb-1 pt-3">Shared location</Heading>
          <Row label="Latitude" value={String(location.latitude)} />
          <Row label="Longitude" value={String(location.longitude)} />
          <Row label="Accuracy" value={String(location.accuracy ?? "N/A")} />
          <Row label="Timestamp" value={formatTimestamp(location.timestamp)} />
          <Row label="Address" value={location.address ?? "Address unavailable"} />
        </View>
      ) : (
        <View className="mb-5 rounded-[24px] bg-dusk-50 p-5">
          <Heading>No location shared yet</Heading>
          <Body size="sm" className="mt-1">
            Please allow access from your profile first.
          </Body>
        </View>
      )}

      {/* Contacts */}
      <Label tone="ink" className="mb-2">
        Saved contacts
      </Label>
      <View className="mb-6 flex-row flex-wrap gap-2">
        {trustedContacts.length > 0 ? (
          trustedContacts.map((contact, i) => (
            <View key={i} className="rounded-full bg-dusk-50 px-3.5 py-2">
              <Text className="font-bodyMedium text-[14px] text-dusk-700">
                {contact.name || contact.mobNumber}
              </Text>
            </View>
          ))
        ) : (
          <Body size="sm">None</Body>
        )}
      </View>

      <Button
        icon="paper-plane-outline"
        label="Share with trusted contacts"
        haptic="medium"
        onPress={handleShare}
      />
    </Screen>
  );
}
