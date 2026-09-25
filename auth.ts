import * as Location from "expo-location";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

import { auth } from "./firebase";

// `displayName` is optional so existing callers (if any) still work.
// createAcc.tsx passes the username the person typed, so their name shows
// up on the Firebase user record instead of being silently dropped.
export const signUp = async (
  email: string,
  password: string,
  displayName?: string,
) => {
  const credential = await createUserWithEmailAndPassword(auth, email, password);
  if (displayName) {
    await updateProfile(credential.user, { displayName });
  }
  return credential;
};

export const login = async (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const logout = async () => {
  return signOut(auth);
};

export let isLoggedIn = false;

export const setLoggedIn = (value: boolean) => {
  isLoggedIn = value;
};

export type TrustedContact = {
  name: string;
  mobNumber: string;
};

export let trustedContacts: TrustedContact[] = [];

export const setTrustedContacts = (contacts: TrustedContact[]) => {
  trustedContacts = contacts.filter(
    ({ name, mobNumber }) =>
      name.trim().length > 0 || mobNumber.trim().length > 0,
  );
};

export type SharedLocationState = {
  latitude: number | null;
  longitude: number | null;
  accuracy: number | null;
  timestamp: number | null;
  address: string | null;
};

export let sharedLocationState: SharedLocationState = {
  latitude: null,
  longitude: null,
  accuracy: null,
  timestamp: null,
  address: null,
};

export const setSharedLocationState = (
  location: Location.LocationObject | null,
  address: string | null = null,
) => {
  sharedLocationState = {
    latitude: location?.coords.latitude ?? null,
    longitude: location?.coords.longitude ?? null,
    accuracy: location?.coords.accuracy ?? null,
    timestamp: location?.timestamp ?? null,
    address: address ?? sharedLocationState.address,
  };
};

export const requestAndShareCurrentLocation = async () => {
  const existingPermission = await Location.getForegroundPermissionsAsync();

  if (existingPermission.status === "granted") {
    const currentLocation = await Location.getCurrentPositionAsync({});
    const addressData = await Location.reverseGeocodeAsync(currentLocation.coords);
    const formattedAddress =
      addressData[0]?.formattedAddress ?? "Address unavailable";

    setSharedLocationState(currentLocation, formattedAddress);

    return {
      success: true,
      status: existingPermission.status,
      canAskAgain: existingPermission.canAskAgain,
      message: "Location shared successfully.",
      location: currentLocation,
      address: formattedAddress,
    };
  }

  const permissionRequest = await Location.requestForegroundPermissionsAsync();

  if (permissionRequest.status !== "granted") {
    return {
      success: false,
      status: permissionRequest.status,
      canAskAgain: permissionRequest.canAskAgain,
      message: "Location permission denied.",
    };
  }

  const currentLocation = await Location.getCurrentPositionAsync({});
  const addressData = await Location.reverseGeocodeAsync(currentLocation.coords);
  const formattedAddress =
    addressData[0]?.formattedAddress ?? "Address unavailable";

  setSharedLocationState(currentLocation, formattedAddress);

  return {
    success: true,
    status: permissionRequest.status,
    canAskAgain: permissionRequest.canAskAgain,
    message: "Location shared successfully.",
    location: currentLocation,
    address: formattedAddress,
  };
};
