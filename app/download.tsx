import { Ionicons } from "@expo/vector-icons";
import { Linking, Pressable, ScrollView, Text, View } from "react-native";
import { Body, Display, Heading } from "@/components/Typography";
import { colors } from "@/constants/theme";

const features = [
  {
    icon: "alert-circle-outline",
    title: "Emergency support",
    description: "Find practical options to reach help when you need it.",
    color: colors.beaconDark,
    background: colors.beaconSoft,
  },
  {
    icon: "chatbubble-ellipses-outline",
    title: "A supportive assistant",
    description: "Talk through a situation and explore possible next steps.",
    color: colors.dusk[700],
    background: colors.dusk[50],
  },
  {
    icon: "book-outline",
    title: "Learn and know your rights",
    description:
      "Explore safety guidance and information about women's rights.",
    color: colors.havenDark,
    background: colors.havenSoft,
  },
] as const;

export default function Download() {
  const APK_URL =
    "https://github.com/ritujha19/SafeW/releases/download/v1.0.0/application-708f14ea-df43-40a6-92c1-e0b36446186a.apk";

  return (
    <ScrollView
      className="flex-1 bg-paper"
      contentContainerStyle={{
        flexGrow: 1,
        alignItems: "center",
        paddingHorizontal: 22,
        paddingVertical: 32,
      }}
      showsVerticalScrollIndicator={false}
    >
      <View className="w-full max-w-[560px]">
        <View className="mb-8 flex-row items-center">
          <View className="mr-3 h-11 w-11 items-center justify-center rounded-2xl bg-dusk-700">
            <Ionicons name="shield-checkmark" size={24} color="white" />
          </View>
          <Text className="font-display text-[21px] text-midnight">SAFE-W</Text>
        </View>

        <View className="mb-7 rounded-[30px] bg-white p-6">
          <View className="mb-5 h-14 w-14 items-center justify-center rounded-2xl bg-haven-soft">
            <Ionicons name="sparkles" size={28} color={colors.havenDark} />
          </View>
          <Display size="lg">
            Feel safer, more supported, and more prepared.
          </Display>
          <Body className="mt-3">
            SafeW brings practical safety tools and trusted information together
            in one place, so you can explore your options at your own pace.
          </Body>

          <View className="mt-6 gap-3">
            {features.map((feature) => (
              <View
                key={feature.title}
                className="flex-row items-center rounded-2xl border border-mist p-4"
              >
                <View
                  className="mr-3 h-11 w-11 items-center justify-center rounded-xl"
                  style={{ backgroundColor: feature.background }}
                >
                  <Ionicons
                    name={feature.icon}
                    size={23}
                    color={feature.color}
                  />
                </View>
                <View className="flex-1">
                  <Heading size="sm">{feature.title}</Heading>
                  <Body size="sm" className="mt-0.5">
                    {feature.description}
                  </Body>
                </View>
              </View>
            ))}
          </View>
        </View>

        <View className="rounded-[28px] bg-midnight p-6">
          <Heading size="lg" tone="white">
            Get the SafeW app
          </Heading>
          <Body tone="soft" className="mt-2">
            Install the Android app to keep these tools close at hand.
          </Body>

          <Pressable
            accessibilityRole="link"
            onPress={() => Linking.openURL(APK_URL)}
            className="mt-5 min-h-14 flex-row items-center justify-center rounded-2xl bg-marigold px-5"
          >
            <Ionicons
              name="download-outline"
              size={21}
              color={colors.midnight}
            />
            <Text className="ml-2 font-bodyBold text-[16px] text-midnight">
              Download APK
            </Text>
          </Pressable>

          <Body size="sm" tone="soft" className="mt-4 text-center">
            Android APK · Only install apps from sources you trust.
          </Body>
        </View>

        <Text className="mt-6 text-center font-body text-[13px] text-muted">
          SafeW is a support and information tool. It does not replace emergency
          services.
        </Text>
      </View>
    </ScrollView>
  );
}
