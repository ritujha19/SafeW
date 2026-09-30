import {
  requestAndShareCurrentLocation,
  sharedLocationState,
  setSharedLocationState,
} from "@/auth";
import { Ionicons } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";
import * as Location from "expo-location";
import * as SMS from "expo-sms";
import { useCallback, useEffect, useState } from "react";
import { Linking, Text, TextInput, View } from "react-native";

import { Button } from "@/components/Button";
import { LottieAnim } from "@/components/Media";
import { Screen } from "@/components/Screen";
import { Body, Heading, Label } from "@/components/Typography";
import { lottie } from "@/constants/media";
import { colors } from "@/constants/theme";
import { useTrustedContacts } from "@/hooks/useTrustedContacts";

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

const defaultLocationMessage = "I need help. Can you come and check on me?";

function createLocationMessage(address: string | null) {
  return address
    ? `${defaultLocationMessage} The address - ${address}`
    : defaultLocationMessage;
}

function formatAddress(address: Location.LocationGeocodedAddress | undefined) {
  if (!address) return null;

  const formattedAddress =
    address.formattedAddress ??
    [
      address.name,
      address.street,
      address.district,
      address.city,
      address.region,
      address.postalCode,
      address.country,
    ]
      .filter(Boolean)
      .join(", ");

  return formattedAddress || null;
}

export default function LocationScreen() {
  const [location, setLocation] = useState(sharedLocationState);
  const {
    contacts: trustedContacts,
    loading: trustedContactsLoading,
    error: trustedContactsError,
  } = useTrustedContacts();

  const [permission, setPermission] =
    useState<Location.LocationPermissionResponse | null>(null);

  const [message, setMessage] = useState(() =>
    createLocationMessage(sharedLocationState.address),
  );

  const [gettingLocation, setGettingLocation] = useState(true);
  const [requestingPermission, setRequestingPermission] = useState(false);
  const [permissionError, setPermissionError] = useState<string | null>(null);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    setMessage((currentMessage) => {
      if (
        currentMessage === defaultLocationMessage ||
        currentMessage.startsWith(`${defaultLocationMessage} - Address:`)
      ) {
        return createLocationMessage(location.address);
      }
      return currentMessage;
    });
  }, [location.address]);

  useFocusEffect(
    useCallback(() => {
      let active = true;

      const getCurrentLocation = async () => {
        try {
          setGettingLocation(true);

          const permissionResult =
            await Location.getForegroundPermissionsAsync();

          if (!active) return;

          setPermission(permissionResult);

          if (permissionResult.status !== "granted") {
            setGettingLocation(false);
            return;
          }

          // Get ONE fresh location when this screen opens.
          const currentLocation = await Location.getCurrentPositionAsync({
            accuracy: Location.Accuracy.Balanced,
          });

          if (!active) return;

          let address: string | null = null;

          try {
            const addressResults = await Location.reverseGeocodeAsync(
              currentLocation.coords,
            );
            address = formatAddress(addressResults[0]);
          } catch (error) {
            console.error("Location address lookup error:", error);
          }

          if (!active) return;

          const newLocation = {
            latitude: currentLocation.coords.latitude,
            longitude: currentLocation.coords.longitude,
            accuracy: currentLocation.coords.accuracy,
            timestamp: currentLocation.timestamp,
            address,
          };

          setLocation(newLocation);

          // Save the exact fresh coordinates so the rest of the app
          // can use the same location if needed.
          setSharedLocationState(currentLocation, address);
        } catch (error) {
          console.error("Location error:", error);

          if (active) {
            alert("Unable to get your current location. Please try again.");
          }
        } finally {
          if (active) {
            setGettingLocation(false);
          }
        }
      };

      getCurrentLocation();

      return () => {
        active = false;
      };
    }, []),
  );

  const permissionGranted = permission?.status === "granted";

  const hasLocation = location.latitude !== null && location.longitude !== null;

  const handleRequestPermission = async () => {
    try {
      setRequestingPermission(true);
      setPermissionError(null);
      const permissionResult =
        await Location.requestForegroundPermissionsAsync();
      setPermission(permissionResult);

      if (permissionResult.status !== "granted") return;

      const result = await requestAndShareCurrentLocation();
      if (!result.success || !result.location) {
        throw new Error(
          result.success
            ? "Location permission succeeded without a location."
            : result.message,
        );
      }

      setLocation({
        latitude: result.location.coords.latitude,
        longitude: result.location.coords.longitude,
        accuracy: result.location.coords.accuracy,
        timestamp: result.location.timestamp,
        address: result.address ?? null,
      });
    } catch (error) {
      console.error("Location permission error:", error);
      setPermissionError(
        "Unable to request location permission. Please try again.",
      );
    } finally {
      setRequestingPermission(false);
    }
  };

  const handleOpenLocationSettings = async () => {
    try {
      await Linking.openSettings();
    } catch (error) {
      console.error("Unable to open location settings:", error);
      setPermissionError(
        "Unable to open settings. Please enable location access in your device settings.",
      );
    }
  };

  const handleShare = async () => {
    if (!permissionGranted) {
      return;
    }

    if (!hasLocation) {
      alert(
        "Your current location is not available yet. Please wait a moment and try again.",
      );
      return;
    }

    if (trustedContactsLoading) {
      alert(
        "Trusted contacts are still loading. Please try again in a moment.",
      );
      return;
    }

    if (trustedContactsError) {
      alert("Unable to load trusted contacts. Please try again.");
      return;
    }

    if (trustedContacts.length === 0) {
      alert(
        "Please add at least one trusted contact before sharing your location.",
      );
      return;
    }

    if (!message.trim()) {
      alert("Please enter a message before sending.");
      return;
    }

    const phoneNumbers = trustedContacts
      .map((contact) => contact.mobNumber.trim())
      .filter((number) => number.length > 0);

    if (phoneNumbers.length === 0) {
      alert("Your trusted contacts do not have valid phone numbers.");
      return;
    }

    try {
      setSending(true);

      // Use the SAME fresh location obtained when this screen opened.
      const latitude = location.latitude;
      const longitude = location.longitude;

      if (latitude === null || longitude === null) {
        alert("Current location is unavailable.");
        return;
      }

      const mapsLink = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;

      const finalMessage = `${message.trim()}\n\n📍 Google Maps location:\n${mapsLink}`;

      // Open the native SMS composer with the location already prepared.
      await SMS.sendSMSAsync(phoneNumbers, finalMessage);
    } catch (error) {
      console.error("SMS sharing error:", error);

      alert("Unable to open the SMS app. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <Screen>
      {/* Status hero */}
      <View className="mb-5 items-center overflow-hidden rounded-[32px] bg-midnight px-5 py-6">
        <View className="h-[190px] w-[190px] items-center justify-center">
          {permissionGranted ? (
            <View style={{ position: "absolute" }}>
              <LottieAnim
                source={lottie.locationPulse}
                size={190}
                reducedProgress={0.4}
              />
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
            {gettingLocation
              ? "Getting your current location..."
              : permissionGranted
                ? "Location access: granted"
                : "Location access: not granted"}
          </Text>
        </View>
      </View>

      {/* Coordinates */}
      {hasLocation ? (
        <View className="mb-5 rounded-[24px] border border-mist bg-white px-5 py-2">
          <Heading className="pb-1 pt-3">Current location</Heading>

          <Row
            label="Address"
            value={location.address ?? "Address unavailable"}
          />

          <Row label="Latitude" value={String(location.latitude)} />

          <Row label="Longitude" value={String(location.longitude)} />

          <Row label="Accuracy" value={String(location.accuracy ?? "N/A")} />

          <Row label="Timestamp" value={formatTimestamp(location.timestamp)} />
        </View>
      ) : (
        <View className="mb-5 rounded-[24px] bg-dusk-50 p-5">
          <Heading>
            {gettingLocation
              ? "Getting your location..."
              : "No location available"}
          </Heading>

          <Body size="sm" className="mt-1">
            {gettingLocation
              ? "Please wait while we get your current location."
              : "Please allow location access and try again."}
          </Body>
        </View>
      )}

      {!gettingLocation && !permissionGranted ? (
        <View className="mb-5 rounded-[24px] bg-marigold-soft p-5">
          <Heading>Location permission needed</Heading>
          <Body size="sm" className="mt-1">
            Allow location access to get your current address and share it.
          </Body>
          {permissionError ? (
            <Body size="sm" tone="beacon" className="mt-2">
              {permissionError}
            </Body>
          ) : null}
          <Button
            icon={
              permission?.canAskAgain === false
                ? "settings-outline"
                : "navigate-outline"
            }
            label={
              permission?.canAskAgain === false
                ? "Open App Settings"
                : "Allow Location Access"
            }
            loading={requestingPermission}
            className="mt-4"
            onPress={
              permission?.canAskAgain === false
                ? handleOpenLocationSettings
                : handleRequestPermission
            }
          />
        </View>
      ) : null}

      {/* Contacts */}
      <Label tone="ink" className="mb-2">
        Trusted contacts
      </Label>

      <View className="mb-6 flex-row flex-wrap gap-2">
        {trustedContactsLoading ? (
          <Body size="sm">Loading trusted contacts...</Body>
        ) : trustedContactsError ? (
          <Body size="sm">Unable to load trusted contacts.</Body>
        ) : trustedContacts.length > 0 ? (
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

      {/* Message */}
      <Label tone="ink" className="mb-2">
        Message
      </Label>

      <TextInput
        value={message}
        onChangeText={setMessage}
        multiline
        numberOfLines={4}
        textAlignVertical="top"
        placeholder="Write a message..."
        className="mb-2 min-h-[110px] rounded-[20px] border border-mist bg-white px-4 py-3 text-[15px] leading-[21px] text-midnight"
      />

      <Body size="sm" className="mb-6">
        Your current location will be added automatically to the SMS.
      </Body>

      {/* Send */}
      <Button
        leadingVisual={
          <LottieAnim source={lottie.mailOpenDocument} size={24} />
        }
        leadingVisualSize={24}
        label={
          gettingLocation
            ? "Getting location..."
            : sending
              ? "Opening SMS..."
              : "Send Location"
        }
        haptic="medium"
        onPress={handleShare}
        disabled={gettingLocation || sending || !hasLocation}
        className="mb-2"
      />
    </Screen>
  );
}
