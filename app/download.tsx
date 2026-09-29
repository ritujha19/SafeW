import { Ionicons } from "@expo/vector-icons";
import { Link, useLocalSearchParams, type Href } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";
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
    description: "Explore safety guidance and information about women's rights.",
    color: colors.havenDark,
    background: colors.havenSoft,
  },
] as const;

function getEasApkUrl(value: string | undefined): string | null {
  if (!value) return null;

  try {
    const url = new URL(value);
    if (
      url.protocol === "https:" &&
      url.hostname === "expo.dev" &&
      url.pathname.startsWith("/artifacts/eas/") &&
      url.pathname.endsWith(".apk")
    ) {
      return url.toString();
    }
  } catch {
    return null;
  }

  return null;
}

export default function Download() {
  const params = useLocalSearchParams<{ apk?: string | string[] }>();
  const apkParam = Array.isArray(params.apk) ? params.apk[0] : params.apk;
  const apkUrl = getEasApkUrl(apkParam);

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
          <Display size="lg">Feel safer, more supported, and more prepared.</Display>
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

          {apkUrl ? (
            <Link href={apkUrl as Href} asChild>
              <Pressable
                accessibilityRole="link"
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
            </Link>
          ) : (
            <View
              accessibilityRole="alert"
              className="mt-5 rounded-2xl bg-white/10 p-4"
            >
              <Text className="font-bodyMedium text-[14px] leading-5 text-white">
                The APK download link is missing or invalid. Open this page
                using the SafeW download link shared with your EAS build.
              </Text>
            </View>
          )}

          <Body size="sm" tone="soft" className="mt-4 text-center">
            Android APK · Only install apps from sources you trust.
          </Body>
        </View>

        <Text className="mt-6 text-center font-body text-[13px] text-muted">
          SafeW is a support and information tool. It does not replace
          emergency services.
        </Text>
      </View>
    </ScrollView>
  );
}
