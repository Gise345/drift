import { router } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import GoogleTextInput from "@/components/GoogleTextInput";
import Map from "@/components/Map";
import Button from "@/components/ui/Button";
import { useLocationStore } from "@/store";

const FindRide = () => {
  const {
    userAddress,
    destinationAddress,
    setDestinationLocation,
    setUserLocation,
  } = useLocationStore();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1">
        {/* Header */}
        <View className="px-6 pt-4 pb-3">
          <Text className="text-2xl font-bold text-island-text">
            Where to?
          </Text>
          <Text className="text-island-text-light mt-1">
            Choose your destination
          </Text>
        </View>

        {/* Search Inputs */}
        <View className="px-6 mb-4">
          {/* Pickup Location */}
          <View className="mb-3">
            <Text className="text-sm font-semibold text-island-text mb-2">
              Pickup Location
            </Text>
            <GoogleTextInput
              icon={require("@/assets/icons/point.png")}
              initialLocation={userAddress || ""}
              containerStyle="bg-island-background"
              textInputBackgroundColor="#F8FBFD"
              handlePress={(location) => setUserLocation(location)}
            />
          </View>

          {/* Destination */}
          <View>
            <Text className="text-sm font-semibold text-island-text mb-2">
              Destination
            </Text>
            <GoogleTextInput
              icon={require("@/assets/icons/pin.png")}
              initialLocation={destinationAddress || ""}
              containerStyle="bg-island-background"
              textInputBackgroundColor="#F8FBFD"
              handlePress={(location) => setDestinationLocation(location)}
            />
          </View>
        </View>

        {/* Map */}
        <View className="flex-1 mx-4 mb-4 rounded-3xl overflow-hidden shadow-island">
          <Map />
        </View>

        {/* Continue Button */}
        {destinationAddress && (
          <View className="px-6 pb-6">
            <Button
              title="Find Available Taxis"
              onPress={() => router.push("/(root)/confirm-ride")}
              variant="primary"
              size="lg"
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default FindRide;