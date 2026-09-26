import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, View } from "react-native";
import { type IconName, Illustration } from "@/components/Media";
import { PressableScale } from "@/components/PressableScale";
import { Screen } from "@/components/Screen";
import { Body, Heading } from "@/components/Typography";
import { illustrations } from "@/constants/media";
import { colors } from "@/constants/theme";

type Route = Parameters<ReturnType<typeof useRouter>["navigate"]>[0];

const rights: { title: string; icon: IconName; route: string }[] = [
  { title: "Constitutional Rights", icon: "document-text-outline", route: "/womenRights/constitutionRights" },
  { title: "Protection from Violence", icon: "shield-checkmark-outline", route: "/womenRights/protectionFromViolence" },
  { title: "Workplace Rights", icon: "briefcase-outline", route: "/womenRights/workplaceRights" },
  { title: "Family & Marriage Rights", icon: "home-outline", route: "/womenRights/familyMarriageRights" },
  { title: "Digital Rights", icon: "phone-portrait-outline", route: "/womenRights/digitalRights" },
  // Matches the name registered in app/_layout.tsx (the old button pointed at
  // "rightsSeekingHelp", which didn't match any registered screen).
  { title: "Rights When Seeking Help", icon: "help-buoy-outline", route: "/womenRights/rightsWhenSeekingHelp" },
  { title: "Rights of Children", icon: "happy-outline", route: "/womenRights/rightsOfChildren" },
];

export default function WomenRights() {
  const router = useRouter();
  const go = (route: string) => router.navigate(route as Route);

  return (
    <Screen>
      <Illustration source={illustrations.rights} fallback="scale-outline" tint="marigold" height={150} />

      <Body tone="ink" className="mb-5 mt-2">
        Understanding your legal rights can help you know what protections and remedies
        are available to you.
      </Body>

      {/* The one action-oriented entry gets more weight */}
      <PressableScale
        accessibilityRole="button"
        accessibilityLabel="Free legal aid"
        onPress={() => go("/womenRights/freeLegalAids")}
        className="mb-6 flex-row items-center rounded-[26px] bg-marigold-soft p-5"
      >
        <View className="mr-4 h-14 w-14 items-center justify-center rounded-2xl bg-marigold">
          <Ionicons name="scale" size={28} color={colors.midnight} />
        </View>
        <View className="flex-1 pr-2">
          <Heading size="lg">Free legal aid</Heading>
          <Body size="sm" tone="ink" className="mt-0.5">
            Get free legal help if you can&apos;t afford a lawyer.
          </Body>
        </View>
        <Ionicons name="chevron-forward" size={22} color={colors.marigoldDark} />
      </PressableScale>

      <Heading size="lg" className="mb-3">
        Explore your rights
      </Heading>
      <View className="overflow-hidden rounded-[26px] border border-mist bg-white">
        {rights.map((item, i) => (
          <Pressable
            key={item.route}
            accessibilityRole="button"
            accessibilityLabel={item.title}
            onPress={() => go(item.route)}
            className={`flex-row items-center px-4 py-4 active:bg-dusk-50 ${
              i > 0 ? "border-t border-mist" : ""
            }`}
          >
            <View className="mr-4 h-10 w-10 items-center justify-center rounded-xl bg-dusk-50">
              <Ionicons name={item.icon} size={20} color={colors.dusk[600]} />
            </View>
            <Heading size="sm" className="flex-1 pr-2">
              {item.title}
            </Heading>
            <Ionicons name="chevron-forward" size={18} color={colors.muted} />
          </Pressable>
        ))}
      </View>
    </Screen>
  );
}
