import { router } from "expo-router";
import { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Location from "expo-location";
import { useLocationStore } from "@/store";

export default function HomeScreen() {
  const { setUserLocation, userAddress } = useLocationStore();
  const [hasPermission, setHasPermission] = useState(false);
  const [greeting, setGreeting] = useState("Good morning");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good morning");
    else if (hour < 18) setGreeting("Good afternoon");
    else setGreeting("Good evening");
  }, []);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setHasPermission(false);
        return;
      }

      setHasPermission(true);
      let location = await Location.getCurrentPositionAsync({});
      const address = await Location.reverseGeocodeAsync({
        latitude: location.coords?.latitude!,
        longitude: location.coords?.longitude!,
      });

      setUserLocation({
        latitude: location.coords?.latitude,
        longitude: location.coords?.longitude,
        address: `${address[0].name}, ${address[0].region}`,
      });
    })();
  }, []);

  const quickActions = [
    { id: 1, title: "Airport", icon: "✈️", color: "ocean" },
    { id: 2, title: "Beach", icon: "🏖️", color: "coral" },
    { id: 3, title: "Hotel", icon: "🏨", color: "palm" },
    { id: 4, title: "Restaurant", icon: "🍴", color: "sand" },
  ];

  return (
    <SafeAreaView className="flex-1 bg-island-background">
      <View className="px-6 pt-4 pb-2">
        <Text className="text-3xl font-bold text-island-text">
          {greeting}
        </Text>
        <Text className="text-island-text-light mt-1">
          Where would you like to drift?
        </Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <TouchableOpacity
          onPress={() => router.push("/(root)/find-ride")}
          className="mx-6 mt-6 bg-white rounded-2xl p-4 shadow-island flex-row items-center"
          activeOpacity={0.7}
        >
          <View className="w-10 h-10 bg-ocean-100 rounded-full items-center justify-center mr-3">
            <Text style={{ fontSize: 20 }}>🔍</Text>
          </View>
          <View className="flex-1">
            <Text className="text-island-text font-semibold">
              Where to?
            </Text>
            <Text className="text-island-text-light text-sm">
              {userAddress || "Set your destination"}
            </Text>
          </View>
          <Text style={{ fontSize: 24 }}>→</Text>
        </TouchableOpacity>

        <View className="px-6 mt-8">
          <Text className="text-lg font-bold text-island-text mb-4">
            Quick destinations
          </Text>
          <View className="flex-row flex-wrap justify-between">
            {quickActions.map((action) => (
              <TouchableOpacity
                key={action.id}
                className="w-[48%] bg-white rounded-2xl p-4 mb-4 shadow-soft"
                activeOpacity={0.7}
              >
                <View
                  className={`w-12 h-12 bg-${action.color}-100 rounded-full items-center justify-center mb-2`}
                >
                  <Text style={{ fontSize: 24 }}>{action.icon}</Text>
                </View>
                <Text className="text-island-text font-semibold">
                  {action.title}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View className="mx-6 mt-6 bg-gradient-to-br from-ocean-400 to-ocean-600 rounded-2xl p-6 shadow-island">
          <View className="flex-row items-center mb-3">
            <Text style={{ fontSize: 24 }}>📍</Text>
            <Text className="text-white font-bold text-lg ml-2">
              Your location
            </Text>
          </View>
          <Text className="text-white/90 mb-4">
            {userAddress || "Getting your location..."}
          </Text>
          <TouchableOpacity
            className="bg-white rounded-xl py-3 items-center"
            onPress={() => router.push("/(root)/find-ride")}
          >
            <Text className="text-ocean-500 font-semibold">
              Book a ride now
            </Text>
          </TouchableOpacity>
        </View>

        <View className="mx-6 mt-6 bg-white rounded-2xl p-6 shadow-soft">
          <View className="flex-row items-center mb-3">
            <Text style={{ fontSize: 24 }}>✨</Text>
            <Text className="text-island-text font-bold text-lg ml-2">
              Why Drift?
            </Text>
          </View>
          <View className="space-y-3">
            <View className="flex-row items-start">
              <Text className="text-palm-500 mr-2">✓</Text>
              <Text className="flex-1 text-island-text-light">
                All drivers are licensed taxi permit holders
              </Text>
            </View>
            <View className="flex-row items-start">
              <Text className="text-palm-500 mr-2">✓</Text>
              <Text className="flex-1 text-island-text-light">
                Official regulated Cayman taxi fares
              </Text>
            </View>
            <View className="flex-row items-start">
              <Text className="text-palm-500 mr-2">✓</Text>
              <Text className="flex-1 text-island-text-light">
                Real-time tracking and safety features
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}