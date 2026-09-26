import { trustedContacts } from "@/auth";
import { Button } from "@/components/Button";
import { LottieAnim } from "@/components/Media";
import { PressableScale } from "@/components/PressableScale";
import { Body, Display } from "@/components/Typography";
import { lottie } from "@/constants/media";
import { colors, shadow } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Linking, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const helplines = [
  {
    number: "181",
    name: "National Women Helpline",
    note: "Non-emergency support for women facing violence or distress",
  },
  { number: "1091", name: "Women in Distress Helpline" },
  { number: "139", name: "Indian Railway Security Helpline" },
];

const call = (number: string) => {
  Linking.openURL(`tel:${number}`).catch(() =>
    alert(`Couldn't open the phone app. Please dial ${number}.`),
  );
};

export default function Emergency() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <LinearGradient
      colors={[colors.midnight, colors.dusk[800], "#5A1A3A"]}
      style={{ flex: 1 }}
    >
      <StatusBar style="light" />
      <ScrollView
        contentContainerStyle={{
          padding: 24,
          paddingBottom: insets.bottom + 32,
        }}
        showsVerticalScrollIndicator={false}
      >
        <Display size="xl" tone="white">
          Are you in immediate danger?
        </Display>
        <Body tone="soft" className="mt-3">
          If you can, call 112 now. You can also share your location with the
          people you trust.
        </Body>
        =
        <View className="items-center py-4">
          <View className="h-[300px] w-[300px] items-center justify-center">
            <View style={{ position: "absolute" }}>
              <LottieAnim
                source={lottie.emergencyPulse}
                size={300}
                reducedProgress={0.35}
              />
            </View>
            <PressableScale
              haptic="heavy"
              accessibilityRole="button"
              accessibilityLabel="Call 112, Emergency Response Support System"
              onPress={() => call("112")}
              className="h-[132px] w-[132px] items-center justify-center rounded-full bg-white"
              style={shadow.sos}
            >
              <Ionicons name="call" size={30} color={colors.beaconDark} />
              <Text className="font-display text-[28px] leading-[30px] text-beacon-dark">
                112
              </Text>
            </PressableScale>
          </View>
          <Body tone="soft" size="sm" className="text-center">
            Emergency Response Support System (ERSS)
          </Body>
        </View>
        {/* Other helplines */}
        <View className="mt-4 gap-3">
          {helplines.map((line) => (
            <PressableScale
              key={line.number}
              accessibilityRole="button"
              accessibilityLabel={`Call ${line.number}, ${line.name}`}
              onPress={() => call(line.number)}
              className="flex-row items-center rounded-[22px] border border-white/15 bg-white/10 p-4"
            >
              <Text className="w-[68px] font-display text-[26px] text-white">
                {line.number}
              </Text>
              <View className="flex-1 pr-3">
                <Text className="font-bodyBold text-[15px] leading-5 text-white">
                  {line.name}
                </Text>
                {line.note ? (
                  <Text className="mt-0.5 font-body text-[13px] leading-[18px] text-white/70">
                    {line.note}
                  </Text>
                ) : null}
              </View>
              <Ionicons name="call-outline" size={20} color="#FFFFFF" />
            </PressableScale>
          ))}
        </View>
        <View className="mt-8">
          <Button
            variant="light"
            icon="location"
            label="Share your location"
            onPress={() => router.navigate("/profile/location")}
          />
          <Body tone="soft" size="sm" className="mt-3 text-center">
            {trustedContacts.length > 0
              ? `${trustedContacts.length} trusted contact${trustedContacts.length === 1 ? "" : "s"} saved`
              : "No trusted contacts saved yet"}
          </Body>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}
