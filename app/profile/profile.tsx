import { Ionicons } from "@expo/vector-icons";
import * as Location from "expo-location";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import type { ReactNode } from "react";
import { Text, View } from "react-native";
import {
  requestAndShareCurrentLocation,
  setLoggedIn,
  sharedLocationState,
  trustedContacts,
} from "@/auth";
import { auth } from "@/firebase";
import { Button } from "@/components/Button";
import type { IconName } from "@/components/Media";
import { PressableScale } from "@/components/PressableScale";
import { Screen } from "@/components/Screen";
import { Body, Display, Heading, Label } from "@/components/Typography";
import { colors } from "@/constants/theme";

function SetupRow({
  icon,
  title,
  detail,
  right,
  onPress,
}: {
  icon: IconName;
  title: string;
  detail: string;
  right?: ReactNode;
  onPress?: () => void;
}) {
  return (
    <PressableScale
      disabled={!onPress}
      haptic={onPress ? "light" : false}
      pressedScale={onPress ? 0.98 : 1}
      onPress={onPress}
      className="flex-row items-center rounded-[24px] border border-mist bg-white p-4"
    >
      <View className="mr-3 h-12 w-12 items-center justify-center rounded-2xl bg-dusk-50">
        <Ionicons name={icon} size={22} color={colors.dusk[600]} />
      </View>
      <View className="flex-1 pr-2">
        <Heading>{title}</Heading>
        <Body size="sm" className="mt-0.5">
          {detail}
        </Body>
      </View>
      {right}
    </PressableScale>
  );
}

export default function Profile() {
  const router = useRouter();
  const user = auth.currentUser;
  const name = user?.displayName ?? "there";
  const [status] = Location.useForegroundPermissions();
  const permissionGranted = status?.status === "granted";

  async function handleRequestPermission() {
    const result = await requestAndShareCurrentLocation();

    if (result.success) {
      alert(
        `Location permission granted. ${result.address ?? "Current location saved."}`,
      );
      return;
    }

    if (result.canAskAgain === false) {
      alert(
        "Location permission denied. To use this feature, please enable location permission in your phone settings.",
      );
    }
  }

  return (
    <Screen>
      <LinearGradient
        colors={[colors.dusk[700], colors.dusk[900]]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{ borderRadius: 32, padding: 22, marginBottom: 24 }}
      >
        <View className="h-16 w-16 items-center justify-center rounded-full bg-white/15">
          <Ionicons name="person" size={30} color="#FFFFFF" />
        </View>
        <Display size="lg" tone="white" className="mt-4">
          Hello! {name} 👋
        </Display>
        <Body tone="soft" className="mt-1">
          Keep your safety setup ready before you need it.
        </Body>
        <Button label={"Update Profile"} variant="soft" className="mt-4" onPress={() => router.navigate("/profile/updateProfile")}/>
      </LinearGradient>

      <Heading size="lg" className="mb-3">
        Safety setup
      </Heading>

      <View className="gap-3">
        <SetupRow
          icon="people-outline"
          title="Trusted contacts"
          detail={
            trustedContacts.length > 0
              ? `${trustedContacts.length} saved`
              : "Add someone you trust"
          }
          right={
            <Ionicons name="chevron-forward" size={20} color={colors.muted} />
          }
          onPress={() => router.navigate("/profile/trustedContact")}
        />

        <SetupRow
          icon="location-outline"
          title="Location access"
          detail={
            permissionGranted
              ? "Location access: granted"
              : "Location access: not granted yet"
          }
          right={
            <View
              className={`rounded-full px-3 py-1.5 ${
                permissionGranted ? "bg-haven-soft" : "bg-marigold-soft"
              }`}
            >
              <Text
                className={`font-bodyBold text-[12px] ${
                  permissionGranted ? "text-haven-dark" : "text-marigold-dark"
                }`}
              >
                {permissionGranted ? "On" : "Off"}
              </Text>
            </View>
          }
        />
      </View>

      <Button
        variant={permissionGranted ? "soft" : "primary"}
        icon="navigate-outline"
        label={
          permissionGranted
            ? "Location already granted"
            : "Ask for Location Permission"
        }
        className="mt-4"
        onPress={handleRequestPermission}
      />

      {sharedLocationState.latitude !== null && (
        <Body size="sm" className="mt-4">
          Last shared location: {sharedLocationState.latitude},{" "}
          {sharedLocationState.longitude}
        </Body>
      )}

      <Button
        variant="outline"
        icon="log-out-outline"
        label="Logout"
        className="mt-8"
        onPress={() => {
          setLoggedIn(false);
          alert("Logged out successfully");
          router.replace("/");
        }}
      />

      <Label className="mt-8 text-center">
        Illustrations by Storyset. Animations by LottieFiles and Lordicon.
      </Label>
    </Screen>
  );
}
