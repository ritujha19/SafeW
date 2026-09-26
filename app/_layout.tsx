import { BricolageGrotesque_600SemiBold } from "@expo-google-fonts/bricolage-grotesque/600SemiBold";
import { BricolageGrotesque_700Bold } from "@expo-google-fonts/bricolage-grotesque/700Bold";
import { Figtree_400Regular } from "@expo-google-fonts/figtree/400Regular";
import { Figtree_500Medium } from "@expo-google-fonts/figtree/500Medium";
import { Figtree_700Bold } from "@expo-google-fonts/figtree/700Bold";
import { useFonts } from "expo-font";
import { Stack, useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import { BrandMark, HeaderProfileButton } from "@/components/Header";
import { colors } from "@/constants/theme";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import "../global.css";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const router = useRouter();

    const [fontsLoaded] = useFonts({
    BricolageGrotesque_600SemiBold,
    BricolageGrotesque_700Bold,
    Figtree_400Regular,
    Figtree_500Medium,
    Figtree_700Bold,
  });

  const [user, setUser] = useState(auth.currentUser);
const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded]);

useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    setAuthLoading(false);
  });

  return unsubscribe;
}, []);

 if (!fontsLoaded || authLoading) return null;
const handleProfilePress = () => {
  router.navigate(user ? "/profile/profile" : "/profile/login");
};

  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: colors.paper },
        headerShadowVisible: false,
        headerTintColor: colors.midnight,
        headerTitleStyle: {
          fontFamily: "BricolageGrotesque_700Bold",
          fontSize: 18,
          color: colors.midnight,
        },
        contentStyle: { backgroundColor: colors.paper },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "SAFE-W",
          headerTitle: () => <BrandMark />,
          headerRight: () => <HeaderProfileButton onPress={handleProfilePress} />,
        }}
      />
      <Stack.Screen name="createAcc" options={{ title: "Create Account" }} />
      <Stack.Screen name="updateProfile" options={{ title: "Update Profile" }} />
      <Stack.Screen
        name="emergency"
        options={{
          title: "Emergency",
          // Dark screen: the header matches the top of its gradient.
          headerStyle: { backgroundColor: colors.midnight },
          headerTintColor: "#FFFFFF",
          headerTitleStyle: {
            fontFamily: "BricolageGrotesque_700Bold",
            fontSize: 18,
            color: "#FFFFFF",
          },
        }}
      />
      <Stack.Screen name="profile/location" options={{ title: "Location" }} />
      <Stack.Screen name="profile/login" options={{ title: "Login" }} />
      <Stack.Screen name="profile/profile" options={{ title: "Your Account" }} />
      <Stack.Screen name="profile/trustedContact" options={{ title: "Trusted Contacts" }} />
      <Stack.Screen name="profile/updateProfile" options={{title: "Update Profile"}} />
      <Stack.Screen name= "profile/createAcc" options={{title: "Create Account"}}/> 

      <Stack.Screen name="learn/index" options={{ title: "Learn & Prepare" }} />
      <Stack.Screen name="learn/whatCounts" options={{ title: "Know What Counts" }} />
      <Stack.Screen name="learn/warningSigns" options={{ title: "Know the Warning Signs" }} />
      <Stack.Screen name="learn/safetyEssentials" options={{ title: "Safety Essentials" }} />
      <Stack.Screen name="learn/prepareYourself" options={{ title: "Prepare Yourself" }} />

      <Stack.Screen name="womenRights/index" options={{ title: "Women's Rights" }} />
      <Stack.Screen name="womenRights/constitutionRights" options={{ title: "Constitutional Rights" }} />
      <Stack.Screen name="womenRights/protectionFromViolence" options={{ title: "Protection from Violence" }} />
      <Stack.Screen name="womenRights/workplaceRights" options={{ title: "Workplace Rights" }} />
      <Stack.Screen name="womenRights/familyMarriageRights" options={{ title: "Family & Marriage Rights" }} />
      <Stack.Screen name="womenRights/digitalRights" options={{ title: "Digital Rights" }} />
      <Stack.Screen name="womenRights/rightsSeekingHelp" options={{ title: "Rights When Seeking Help" }} />
      <Stack.Screen name="womenRights/rightsOfChildren" options={{ title: "Rights of Children" }} />
      <Stack.Screen name="womenRights/freeLegalAids" options={{ title: "Free Legal Aids" }} />

      <Stack.Screen name="womenRights/viewMore/legalAgeOfMarriage" options={{ title: "Legal Age of Marriage" }} />
      <Stack.Screen name="womenRights/viewMore/marriageRegistration" options={{ title: "Marriage Registration" }} />
      <Stack.Screen name="womenRights/viewMore/rightsWithinMarriage" options={{ title: "Rights Within Marriage" }} />
      <Stack.Screen name="womenRights/viewMore/divorceRights" options={{ title: "Divorce Rights" }} />
      <Stack.Screen name="womenRights/viewMore/maintenance" options={{ title: "Maintenance" }} />
      <Stack.Screen name="womenRights/viewMore/propertyInheritance" options={{ title: "Property & Inheritance" }} />
      <Stack.Screen name="womenRights/viewMore/coparcenaryRights" options={{ title: "Equal Coparcenary Rights for Daughters" }} />
      <Stack.Screen name="womenRights/viewMore/dowryProhibition" options={{ title: "Dowry Prohibition" }} />
      <Stack.Screen name="womenRights/viewMore/rightsInSharedHousehold" options={{ title: "Rights in a Shared Household" }} />
      <Stack.Screen name="womenRights/viewMore/rightsAfterDivorce" options={{ title: "Rights After Divorce" }} />
    </Stack>
  );
}
