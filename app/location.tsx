import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import * as Location from 'expo-location';

export default function App() {
  const [status, requestPermission] = Location.useForegroundPermissions();
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [address, setAddress] = useState<Location.LocationGeocodedAddress[] | null>(null);

  async function handleRequestPermission() {
    const result = await requestPermission();
    if (result.status === 'granted') {
      const loc = await Location.getCurrentPositionAsync({});
      setLocation(loc);
      const address = await Location.reverseGeocodeAsync(loc.coords);
      setAddress(address);
      console.log('Location:', loc, 'Address:', address);
    } else{
      console.log('Permission denied');
    }
  }
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Pressable onPress={handleRequestPermission}>
        <Text>Ask for Location Permission</Text>
      </Pressable>
      {location && <Text>latitude: {location.coords.latitude}, longitude: {location.coords.longitude}, accuracy: {location.coords.accuracy}, timestamp: {location.timestamp}</Text>}
      {address && <Text>Address: {address[0]?.formattedAddress}</Text>}
      {status?.status === 'denied' && (
        <Text style={{ color: 'red' }}>Location permission denied. To use this feature we need your permission.TO give you better services of this app.</Text>
      )}
    </View>
  );
}
