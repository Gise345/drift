import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RidesScreen() {
  return (
    <SafeAreaView className="flex-1 bg-island-background">
      <View className="px-6 pt-4 pb-2">
        <Text className="text-3xl font-bold text-island-text">Your Rides</Text>
        <Text className="text-island-text-light mt-1">
          View your ride history
        </Text>
      </View>

      <ScrollView className="flex-1 px-6 mt-6">
        <View className="bg-white rounded-2xl p-8 items-center shadow-soft">
          <Text style={{ fontSize: 60 }}>🚕</Text>
          <Text className="text-xl font-bold text-island-text mt-4 mb-2">
            No rides yet
          </Text>
          <Text className="text-island-text-light text-center">
            Your ride history will appear here once you book your first ride
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}