import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Text, View } from "react-native";
import { type IconName, Illustration } from "@/components/Media";
import { PressableScale } from "@/components/PressableScale";
import { Screen } from "@/components/Screen";
import { Body, Display, Heading } from "@/components/Typography";
import { illustrations } from "@/constants/media";
import { colors } from "@/constants/theme";

const steps = [
  { word: "Notice", line: "Notice something concerning." },
  { word: "Move", line: "Move toward safety." },
  { word: "Tell", line: "Tell someone you trust." },
];

const topics: {
  title: string;
  description: string;
  icon: IconName;
  route: "/learn/whatCounts" | "/learn/warningSigns" | "/learn/safetyEssentials" | "/learn/prepareYourself";
}[] = [
  {
    title: "Know what counts",
    description: "What harassment, abuse and violence look like, and what to do.",
    icon: "alert-circle-outline",
    route: "/learn/whatCounts",
  },
  {
    title: "Know the warning signs",
    description: "Spot concerning patterns early, before they escalate.",
    icon: "eye-outline",
    route: "/learn/warningSigns",
  },
  {
    title: "Safety essentials",
    description: "Trust your instincts, keep your boundaries, stay supported.",
    icon: "shield-checkmark-outline",
    route: "/learn/safetyEssentials",
  },
  {
    title: "Prepare yourself",
    description: "Practice 15 real-life situations and check your instincts.",
    icon: "play-circle-outline",
    route: "/learn/prepareYourself",
  },
];

export default function Learn() {
  const router = useRouter();

  return (
    <Screen>
      <Illustration source={illustrations.learn} fallback="school-outline" tint="haven" height={150} />

      <Body tone="ink" className="mt-2">
        Knowing what to look for can help you recognize risks earlier, make informed
        decisions, and feel more prepared to protect yourself.
      </Body>
      <Heading size="md" className="mb-5 mt-3">
        Learn these principles now, so you can remember them when you need them.
      </Heading>

      {/* The principle to remember: a real sequence, so it is numbered. */}
      <View className="mb-7 rounded-[28px] bg-midnight p-6">
        <Display size="md" tone="white" className="mb-5">
          Notice → Move → Tell
        </Display>
        {steps.map((step, i) => (
          <View key={step.word} className={`flex-row items-center ${i > 0 ? "mt-4" : ""}`}>
            <View className="mr-4 h-9 w-9 items-center justify-center rounded-full bg-marigold">
              <Text className="font-display text-[17px] text-midnight">{i + 1}</Text>
            </View>
            <View className="flex-1">
              <Text className="font-bodyBold text-[17px] text-white">{step.word}</Text>
              <Text className="font-body text-[14px] leading-5 text-white/75">{step.line}</Text>
            </View>
          </View>
        ))}
      </View>

      <View className="gap-3">
        {topics.map((topic) => (
          <PressableScale
            key={topic.route}
            accessibilityRole="button"
            accessibilityLabel={topic.title}
            onPress={() => router.navigate(topic.route)}
            className="flex-row items-center rounded-[24px] border border-mist bg-white p-4"
          >
            <View className="mr-4 h-12 w-12 items-center justify-center rounded-2xl bg-haven-soft">
              <Ionicons name={topic.icon} size={24} color={colors.havenDark} />
            </View>
            <View className="flex-1 pr-2">
              <Heading>{topic.title}</Heading>
              <Body size="sm" className="mt-0.5">
                {topic.description}
              </Body>
            </View>
            <Ionicons name="chevron-forward" size={20} color={colors.muted} />
          </PressableScale>
        ))}
      </View>
    </Screen>
  );
}
