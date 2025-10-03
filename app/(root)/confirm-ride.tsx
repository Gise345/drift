import { router } from "expo-router";
import { FlatList, View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DriverCard from "@/components/DriverCard";
import Button from "@/components/ui/Button";
import { useDriverStore } from "@/store";
import { calculateDistance, formatCurrency, formatTime } from "@/lib/utils";
import { useLocationStore } from "@/store";
import { calculateFare } from "@/constants";

const ConfirmRide = () => {
  const { drivers, selectedDriver, setSelectedDriver } = useDriverStore();
  const {
    userLatitude,
    userLongitude,
    destinationLatitude,
    destinationLongitude,
    destinationAddress,
  } = useLocationStore();

  // Calculate estimated distance and time
  const distance = calculateDistance(
    userLatitude!,
    userLongitude!,
    destinationLatitude!,
    destinationLongitude!
  );

  const estimatedTime = Math.round(distance * 2.5); // Rough estimate: 2.5 min per km
  const fare = calculateFare(distance, estimatedTime);

  return (
    <SafeAreaView className="flex-1 bg-island-background">
      {/* Header */}
      <View className="px-6 pt-4 pb-3 flex-row items-center">
        <TouchableOpacity
          onPress={() => router.back()}
          className="w-10 h-10 rounded-full bg-white items-center justify-center mr-3 shadow-soft"
        >
          <Text className="text-ocean-500 text-xl">←</Text>
        </TouchableOpacity>
        <View className="flex-1">
          <Text className="text-2xl font-bold text-island-text">
            Choose Your Ride
          </Text>
          <Text className="text-island-text-light mt-0.5">
            {drivers.length} taxis available nearby
          </Text>
        </View>
      </View>

      {/* Trip Summary Card */}
      <View className="mx-6 mb-4 bg-gradient-to-br from-ocean-400 to-ocean-600 rounded-2xl p-5 shadow-island">
        <View className="flex-row items-center justify-between mb-3">
          <Text className="text-white font-semibold">Estimated Trip</Text>
          <View className="bg-white/20 px-3 py-1 rounded-full">
            <Text className="text-white font-bold">
              {formatCurrency(fare)}
            </Text>
          </View>
        </View>

        <View className="flex-row items-center mb-2">
          <View className="w-3 h-3 bg-white rounded-full mr-2" />
          <Text className="text-white/90 text-sm flex-1" numberOfLines={1}>
            Current location
          </Text>
          <Text className="text-white/80 text-xs">
            {formatTime(estimatedTime)}
          </Text>
        </View>

        <View className="h-8 w-px bg-white/30 ml-1.5 mb-1" />

        <View className="flex-row items-center">
          <View className="w-3 h-3 bg-coral-500 rounded-full mr-2" />
          <Text className="text-white/90 text-sm flex-1" numberOfLines={1}>
            {destinationAddress}
          </Text>
          <Text className="text-white/80 text-xs">
            {distance.toFixed(1)} km
          </Text>
        </View>
      </View>

      {/* Available Drivers */}
      <View className="flex-1 px-6">
        <Text className="text-sm font-semibold text-island-text mb-3">
          Available Licensed Taxis
        </Text>

        <FlatList
          data={drivers}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <DriverCard
              item={item}
              selected={selectedDriver}
              onSelect={() => setSelectedDriver(item.id!)}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>

      {/* Book Button */}
      {selectedDriver && (
        <View className="px-6 py-4 bg-white border-t border-island-border">
          <Button
            title={`Book Ride - ${formatCurrency(fare)}`}
            onPress={() => router.push("/(root)/book-ride")}
            variant="primary"
            size="lg"
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default ConfirmRide;