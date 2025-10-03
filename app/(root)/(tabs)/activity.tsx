import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ActivityScreen() {
  return (
    <SafeAreaView className="flex-1 bg-island-background">
      <View className="px-6 pt-4">
        <Text className="text-3xl font-bold text-island-text">Activity</Text>
        <Text className="text-island-text-light mt-1">
          Track your spending and trips
        </Text>
      </View>

      <View className="flex-1 items-center justify-center px-6">
        <Text style={{ fontSize: 60 }}>📊</Text>
        <Text className="text-xl font-bold text-island-text mt-4 mb-2">
          Coming Soon
        </Text>
        <Text className="text-island-text-light text-center">
          Activity tracking and analytics will be available soon
        </Text>
      </View>
    </SafeAreaView>
  );
}