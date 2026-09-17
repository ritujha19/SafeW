import { useRouter } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

type ActionCardProps = {
  title: string;
  description: string;
  icon: string;
  className: string;
  onPress: () => void;
};

function ActionCard({
  title,
  description,
  icon,
  className,
  onPress,
}: ActionCardProps) {
  return (
    <Pressable
      className={`rounded-2xl bg-white p-5 shadow-sm ${className}`}
      onPress={onPress}
      style={({ pressed }) => ({ opacity: pressed ? 0.78 : 1 })}
    >
      <View className="mb-4 h-12 w-12 items-center justify-center rounded-2xl bg-slate-100">
        <Text className="text-2xl">{icon}</Text>
      </View>
      <Text className="text-lg font-bold text-slate-900">{title}</Text>
      <Text className="mt-1 text-sm leading-5 text-slate-500">
        {description}
      </Text>
    </Pressable>
  );
}

function Index() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      className="flex-1 bg-slate-50"
      contentContainerStyle={{
        paddingTop: insets.top + 24,
        paddingBottom: insets.bottom + 32,
        paddingHorizontal: 20,
      }}
    >
      <View className="mb-8">
        <Text className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900">
          Your safety matters.
        </Text>
        <Text className="mt-3 text-base leading-6 text-slate-500">
          Get support, learn practical safety skills, and stay connected to the
          people you trust.
        </Text>
      </View>

      <Pressable
        className="mb-5 rounded-2xl bg-red-600 p-5 shadow-sm"
        onPress={() => router.navigate("/emergency")}
        style={({ pressed }) => ({ opacity: pressed ? 0.82 : 1 })}
      >
        <View className="flex-row items-center justify-between">
          <View className="flex-1 pr-4">
            <Text className="text-sm font-bold uppercase tracking-widest text-red-100">
              Need help now?
            </Text>
            <Text className="mt-2 text-2xl font-extrabold text-white">
              I&apos;m in danger
            </Text>
            <Text className="mt-1 text-sm leading-5 text-red-100">
              Open emergency support and contact options.
            </Text>
          </View>
          <Text className="text-4xl">!</Text>
        </View>
      </Pressable>

      <Text className="mb-3 text-sm font-bold uppercase tracking-widest text-slate-500">
        Your tools
      </Text>
      <View className="gap-4">
        <ActionCard
          title="Safety Assistant"
          description="Get guidance when you feel unsure about a situation."
          icon="?"
          className="border-l-4 border-indigo-600"
          onPress={() => console.log("ai Button pressed")}
        />
        <ActionCard
          title="Learn & Prepare"
          description="Practice real-life safety situations and build confidence."
          icon="+"
          className="border-l-4 border-emerald-600"
          onPress={() => router.navigate("./learn")}
        />
        <ActionCard
          title="Women's Rights"
          description="Learn about your rights and the support available to you."
          icon="+"
          className="border-l-4 border-amber-500"
          onPress={() => router.navigate("./womenRights")}
        />
      </View>
    </ScrollView>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <Index />
    </SafeAreaProvider>
  );
}
