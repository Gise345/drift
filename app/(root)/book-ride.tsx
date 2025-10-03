import { router } from "expo-router";
import { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "@/components/ui/Button";
import { useDriverStore, useLocationStore } from "@/store";
import { calculateDistance, formatCurrency, formatTime } from "@/lib/utils";
import { calculateFare } from "@/constants";

const BookRide = () => {
  const { drivers, selectedDriver } = useDriverStore();
  const {
    userLatitude,
    userLongitude,
    destinationLatitude,
    destinationLongitude,
    userAddress,
    destinationAddress,
  } = useLocationStore();

  const [paymentMethod, setPaymentMethod] = useState<"card" | "cash">("card");
  const [isBooking, setIsBooking] = useState(false);

  const driver = drivers.find((d) => d.id === selectedDriver);

  const distance = calculateDistance(
    userLatitude!,
    userLongitude!,
    destinationLatitude!,
    destinationLongitude!
  );

  const estimatedTime = Math.round(distance * 2.5);
  const fare = calculateFare(distance, estimatedTime);
  const platformFee = 2.5;
  const total = fare + platformFee;

  const handleBookRide = async () => {
    setIsBooking(true);

    // Simulate booking process
    setTimeout(() => {
      setIsBooking(false);
      Alert.alert(
        "Ride Booked!",
        `${driver?.first_name} is on the way. Estimated arrival: ${formatTime(5)} minutes.`,
        [
          {
            text: "Track Ride",
            onPress: () => router.push("/(root)/(tabs)/home"),
          },
        ]
      );
    }, 2000);
  };

  if (!driver) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text>No driver selected</Text>
      </View>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-island-background">
      {/* Header */}
      <View className="px-6 pt-4 pb-3 flex-row items-center bg-white">
        <TouchableOpacity
          onPress={() => router.back()}
          className="w-10 h-10 rounded-full bg-island-background items-center justify-center mr-3"
        >
          <Text className="text-ocean-500 text-xl">←</Text>
        </TouchableOpacity>
        <View className="flex-1">
          <Text className="text-2xl font-bold text-island-text">
            Confirm & Pay
          </Text>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Driver Card */}
        <View className="mx-6 mt-6 bg-white rounded-2xl p-5 shadow-soft">
          <Text className="text-sm font-semibold text-island-text-light mb-3">
            Your Driver
          </Text>

          <View className="flex-row items-center">
            <Image
              source={{ uri: driver.profile_image_url }}
              className="w-16 h-16 rounded-full"
            />

            <View className="flex-1 ml-4">
              <Text className="text-xl font-bold text-island-text">
                {driver.first_name} {driver.last_name}
              </Text>
              <Text className="text-sm text-island-text-light mt-1">
                ⭐ {driver.rating.toFixed(1)} • {driver.car_seats} seats
              </Text>
            </View>

            <Image
              source={{ uri: driver.car_image_url }}
              className="w-20 h-16 rounded-xl"
              resizeMode="cover"
            />
          </View>
        </View>

        {/* Trip Details */}
        <View className="mx-6 mt-4 bg-white rounded-2xl p-5 shadow-soft">
          <Text className="text-sm font-semibold text-island-text-light mb-4">
            Trip Details
          </Text>

          <View className="mb-4">
            <View className="flex-row items-start mb-3">
              <View className="w-3 h-3 bg-ocean-500 rounded-full mt-1.5 mr-3" />
              <View className="flex-1">
                <Text className="text-xs text-island-text-light mb-1">
                  Pickup
                </Text>
                <Text className="text-sm text-island-text font-medium">
                  {userAddress}
                </Text>
              </View>
            </View>

            <View className="h-8 w-px bg-island-border ml-1.5 mb-2" />

            <View className="flex-row items-start">
              <View className="w-3 h-3 bg-coral-500 rounded-full mt-1.5 mr-3" />
              <View className="flex-1">
                <Text className="text-xs text-island-text-light mb-1">
                  Destination
                </Text>
                <Text className="text-sm text-island-text font-medium">
                  {destinationAddress}
                </Text>
              </View>
            </View>
          </View>

          <View className="border-t border-island-border pt-4">
            <View className="flex-row justify-between mb-2">
              <Text className="text-sm text-island-text-light">Distance</Text>
              <Text className="text-sm text-island-text font-medium">
                {distance.toFixed(1)} km
              </Text>
            </View>
            <View className="flex-row justify-between">
              <Text className="text-sm text-island-text-light">
                Est. Time
              </Text>
              <Text className="text-sm text-island-text font-medium">
                {formatTime(estimatedTime)}
              </Text>
            </View>
          </View>
        </View>

        {/* Payment Method */}
        <View className="mx-6 mt-4 bg-white rounded-2xl p-5 shadow-soft">
          <Text className="text-sm font-semibold text-island-text-light mb-4">
            Payment Method
          </Text>

          <TouchableOpacity
            onPress={() => setPaymentMethod("card")}
            className={`
              flex-row items-center p-4 rounded-xl mb-3
              ${paymentMethod === "card" ? "bg-ocean-50 border-2 border-ocean-500" : "bg-island-background"}
            `}
          >
            <View className="w-10 h-10 bg-white rounded-full items-center justify-center mr-3 shadow-sm">
              <Text className="text-xl">💳</Text>
            </View>
            <View className="flex-1">
              <Text className="text-base font-semibold text-island-text">
                Credit/Debit Card
              </Text>
              <Text className="text-xs text-island-text-light mt-0.5">
                Visa ending in 4242
              </Text>
            </View>
            <View
              className={`
                w-6 h-6 rounded-full border-2
                ${paymentMethod === "card" ? "bg-ocean-500 border-ocean-500" : "border-island-border"}
              `}
            >
              {paymentMethod === "card" && (
                <View className="flex-1 items-center justify-center">
                  <View className="w-2.5 h-2.5 bg-white rounded-full" />
                </View>
              )}
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setPaymentMethod("cash")}
            className={`
              flex-row items-center p-4 rounded-xl
              ${paymentMethod === "cash" ? "bg-ocean-50 border-2 border-ocean-500" : "bg-island-background"}
            `}
          >
            <View className="w-10 h-10 bg-white rounded-full items-center justify-center mr-3 shadow-sm">
              <Text className="text-xl">💵</Text>
            </View>
            <View className="flex-1">
              <Text className="text-base font-semibold text-island-text">
                Cash
              </Text>
              <Text className="text-xs text-island-text-light mt-0.5">
                Pay driver directly
              </Text>
            </View>
            <View
              className={`
                w-6 h-6 rounded-full border-2
                ${paymentMethod === "cash" ? "bg-ocean-500 border-ocean-500" : "border-island-border"}
              `}
            >
              {paymentMethod === "cash" && (
                <View className="flex-1 items-center justify-center">
                  <View className="w-2.5 h-2.5 bg-white rounded-full" />
                </View>
              )}
            </View>
          </TouchableOpacity>
        </View>

        {/* Fare Breakdown */}
        <View className="mx-6 mt-4 mb-6 bg-white rounded-2xl p-5 shadow-soft">
          <Text className="text-sm font-semibold text-island-text-light mb-4">
            Fare Breakdown
          </Text>

          <View className="space-y-3">
            <View className="flex-row justify-between mb-2">
              <Text className="text-sm text-island-text-light">Base Fare</Text>
              <Text className="text-sm text-island-text">
                {formatCurrency(5.0)}
              </Text>
            </View>

            <View className="flex-row justify-between mb-2">
              <Text className="text-sm text-island-text-light">
                Distance ({distance.toFixed(1)} km)
              </Text>
              <Text className="text-sm text-island-text">
                {formatCurrency(fare - 5.0)}
              </Text>
            </View>

            <View className="flex-row justify-between mb-2">
              <Text className="text-sm text-island-text-light">
                Platform Fee
              </Text>
              <Text className="text-sm text-island-text">
                {formatCurrency(platformFee)}
              </Text>
            </View>

            <View className="border-t border-island-border pt-3">
              <View className="flex-row justify-between">
                <Text className="text-base font-bold text-island-text">
                  Total
                </Text>
                <Text className="text-xl font-bold text-ocean-500">
                  {formatCurrency(total)}
                </Text>
              </View>
            </View>

            <View className="bg-palm-50 rounded-xl p-3 mt-2">
              <Text className="text-xs text-palm-700 text-center">
                ✓ Official regulated Cayman taxi rates apply
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Book Button */}
      <View className="px-6 py-4 bg-white border-t border-island-border">
        <Button
          title={`Confirm Booking - ${formatCurrency(total)}`}
          onPress={handleBookRide}
          isLoading={isBooking}
          variant="primary"
          size="lg"
        />

        <Text className="text-xs text-center text-island-text-light mt-3">
          By booking, you agree to our Terms of Service
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default BookRide;