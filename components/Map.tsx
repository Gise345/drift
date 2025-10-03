import { useEffect, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import MapView, { Marker, PROVIDER_DEFAULT } from "react-native-maps";
import { useDriverStore, useLocationStore } from "@/store";
import { calculateDistance } from "@/lib/utils";
import { MarkerData } from "@/types/type";
import { drivers } from "@/constants";

const Map = () => {
  const {
    userLongitude,
    userLatitude,
    destinationLatitude,
    destinationLongitude,
  } = useLocationStore();
  const { selectedDriver, setDrivers } = useDriverStore();
  const [markers, setMarkers] = useState<MarkerData[]>([]);

  useEffect(() => {
    if (!userLatitude || !userLongitude) return;

    // Generate random positions for drivers near user
    const newMarkers = drivers.map((driver, index) => {
      const offset = 0.01 * (index + 1);
      const lat = userLatitude + offset * (Math.random() > 0.5 ? 1 : -1);
      const lng = userLongitude + offset * (Math.random() > 0.5 ? 1 : -1);

      return {
        ...driver,
        latitude: lat,
        longitude: lng,
        title: `${driver.first_name} ${driver.last_name}`,
      };
    });

    setMarkers(newMarkers);
    setDrivers(newMarkers);
  }, [userLatitude, userLongitude]);

  if (!userLatitude || !userLongitude) {
    return (
      <View className="flex-1 justify-center items-center bg-island-background">
        <ActivityIndicator size="large" color="#00A0E3" />
        <Text className="mt-4 text-island-text">Loading map...</Text>
      </View>
    );
  }

  const region = {
    latitude: userLatitude,
    longitude: userLongitude,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  };

  return (
    <MapView
      provider={PROVIDER_DEFAULT}
      className="w-full h-full rounded-3xl"
      tintColor="ocean"
      mapType="mutedStandard"
      showsPointsOfInterest={true}
      showsUserLocation={true}
      userInterfaceStyle="light"
      initialRegion={region}
    >
      {/* Available Drivers */}
      {markers.map((marker) => (
        <Marker
          key={marker.id}
          coordinate={{
            latitude: marker.latitude,
            longitude: marker.longitude,
          }}
          title={marker.title}
          image={require("@/assets/icons/taxi.png")}
        >
          <View className="items-center">
            <View
              className={`
                w-12 h-12 rounded-full items-center justify-center
                ${selectedDriver === marker.id ? "bg-coral-500" : "bg-ocean-500"}
                border-3 border-white shadow-lg
              `}
            >
              <Text className="text-2xl">🚕</Text>
            </View>
          </View>
        </Marker>
      ))}

      {/* Destination Marker */}
      {destinationLatitude && destinationLongitude && (
        <Marker
          coordinate={{
            latitude: destinationLatitude,
            longitude: destinationLongitude,
          }}
          title="Destination"
          pinColor="#FF8166"
        >
          <View className="items-center">
            <View className="w-10 h-10 rounded-full bg-coral-500 items-center justify-center border-2 border-white shadow-lg">
              <Text className="text-xl">📍</Text>
            </View>
          </View>
        </Marker>
      )}
    </MapView>
  );
};

export default Map;