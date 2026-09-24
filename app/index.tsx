import {
  type IconName,
  LordIcon,
  type LordIconHandle,
  LottieAnim,
  type LottieSource,
} from "@/components/Media";
import { PressableScale } from "@/components/PressableScale";
import { Body, Display, Heading } from "@/components/Typography";
import { lordicon, lottie } from "@/constants/media";
import { colors, shadow } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useRef } from "react";
import { ScrollView, Text, View } from "react-native";
import Animated, { FadeInDown, ZoomIn } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

/* ---------------------------- small pieces ---------------------------- */

const toolAccents = {
  dusk: { chip: "bg-dusk-50", icon: colors.dusk[600] },
  haven: { chip: "bg-haven-soft", icon: colors.havenDark },
  marigold: { chip: "bg-marigold-soft", icon: colors.marigoldDark },
} as const;

function ToolCard({
  title,
  description,
  icon,
  source,
  accent,
  onPress,
}: {
  title: string;
  description: string;
  icon: IconName;
  source?: LottieSource;
  accent: keyof typeof toolAccents;
  onPress: () => void;
}) {
  const iconRef = useRef<LordIconHandle>(null);
  const a = toolAccents[accent];
  return (
    <PressableScale
      className="flex-row items-center rounded-[26px] border border-mist bg-white p-4"
      accessibilityRole="button"
      accessibilityLabel={title}
      onPressIn={() => iconRef.current?.play()}
      onPress={onPress}
    >
      <View
        className={`mr-4 h-14 w-14 items-center justify-center rounded-2xl ${a.chip}`}
      >
        <LordIcon
          ref={iconRef}
          source={source}
          fallback={icon}
          size={34}
          color={a.icon}
        />
      </View>
      <View className="flex-1 pr-2">
        <Heading>{title}</Heading>
        <Body size="sm" className="mt-0.5">
          {description}
        </Body>
      </View>
      <Ionicons name="chevron-forward" size={20} color={colors.muted} />
    </PressableScale>
  );
}

/* -------------------------------- screen ------------------------------- */

export default function Home() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      className="flex-1 bg-paper"
      contentContainerStyle={{
        paddingHorizontal: 16,
        paddingTop: 20,
        paddingBottom: insets.bottom + 28,
      }}
      showsVerticalScrollIndicator={false}
    >
      {/* One orchestrated entrance: headline, then the SOS card, then the rest. */}
      <Animated.View entering={FadeInDown.duration(450)} className="mb-5 mt-1">
        <Display size="xl">Your safety matters.</Display>
        <Body className="mt-3 mb-5">
          Get support, learn practical safety skills, and stay connected to the
          people you trust.
        </Body>
      </Animated.View>

     <Animated.View entering={ZoomIn.delay(140).springify().damping(16)}>
  <PressableScale
    haptic="heavy"
    pressedScale={0.985}
    accessibilityRole="button"
    accessibilityLabel="I'm in danger. Open emergency support."
    onPress={() => router.navigate("/emergency")}
    wrapperStyle={[
      shadow.lift,
      { borderRadius: 28 },
    ]}
    style={{ borderRadius: 28, overflow: "hidden" }}
  >
    <LinearGradient
      colors={[colors.beacon, colors.beaconDark]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{
        paddingHorizontal: 20,
        paddingVertical: 20,
        minHeight: 150,
        justifyContent: "center",
      }}
    >
      <View className="flex-row items-center justify-between">
        {/* Left Content */}
        <View className="flex-1 pr-3">
          <Text className="font-bodyMedium text-[13px] text-white/85">
            Need help right now?
          </Text>
          <Text className="mt-1 font-display text-[26px] leading-[30px] text-white">
            I&apos;m in danger
          </Text>
          <Text className="mt-2 font-body text-[13px] leading-5 text-white/90">
            Open emergency support and contact options.
          </Text>
        </View>

        {/* Right SOS Icon Container */}
        <View className="relative h-[110px] w-[110px] items-center justify-center">
          {/* Subtle Outer Glow / Ring */}
          <View className="absolute inset-0 rounded-full border-2 border-white/25" />

          {/* Lottie Animation Centered */}
          <View className="absolute items-center justify-center">
            <LottieAnim
              source={lottie.sosPulse}
              size={120}
              reducedProgress={0.4}
            />
          </View>

          {/* Core White SOS Badge */}
          <View className="h-[64px] w-[64px] items-center justify-center rounded-full bg-white shadow-md">
            <Text className="font-display text-[20px] font-bold text-beacon-dark">
              SOS
            </Text>
          </View>
        </View>
      </View>
    </LinearGradient>
  </PressableScale>
</Animated.View>

      <Animated.View
        entering={FadeInDown.delay(360).duration(420)}
        className="mt-6"
      >
        <Heading size="lg" className="mb-3 mt-10">
          Your tools
        </Heading>
        <View className="gap-3">
          <ToolCard
            title="Safety Assistant"
            description="Get guidance when you feel unsure about a situation."
            icon="chatbubble-ellipses-outline"
            source={lordicon.assistant}
            accent="dusk"
            onPress={() => console.log("ai Button pressed")}
          />
          <ToolCard
            title="Learn & Prepare"
            description="Practice real-life safety situations and build confidence."
            icon="school-outline"
            source={lordicon.learn}
            accent="haven"
            onPress={() => router.navigate("/learn")}
          />
          <ToolCard
            title="Women's Rights"
            description="Learn about your rights and the support available to you."
            icon="scale-outline"
            source={lordicon.rights}
            accent="marigold"
            onPress={() => router.navigate("/womenRights")}
          />
        </View>
      </Animated.View>
    </ScrollView>
  );
}
