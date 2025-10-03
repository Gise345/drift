import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

export default function ProfileScreen() {
  const menuItems = [
    { icon: "👤", title: "Edit Profile", route: "" },
    { icon: "💳", title: "Payment Methods", route: "" },
    { icon: "🔔", title: "Notifications", route: "" },
    { icon: "🛡️", title: "Safety", route: "" },
    { icon: "❓", title: "Help & Support", route: "" },
    { icon: "📖", title: "About", route: "" },
  ];

  return (
    <SafeAreaView className="flex-1 bg-island-background">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="px-6 pt-4 pb-6">
          <Text className="text-3xl font-bold text-island-text">Profile</Text>
        </View>

        <View className="mx-6 bg-gradient-to-br from-ocean-400 to-ocean-600 rounded-2xl p-6 mb-6 shadow-island">
          <View className="items-center">
            <View className="w-20 h-20 bg-white rounded-full items-center justify-center mb-3">
              <Text style={{ fontSize: 40 }}>👤</Text>
            </View>
            <Text className="text-white font-bold text-xl">Guest User</Text>
            <Text className="text-white/80 text-sm mt-1">guest@drift.ky</Text>
          </View>
        </View>

        <View className="mx-6 mb-6">
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              className="bg-white rounded-2xl p-4 mb-3 shadow-soft flex-row items-center justify-between"
              activeOpacity={0.7}
            >
              <View className="flex-row items-center">
                <View className="w-10 h-10 bg-ocean-100 rounded-full items-center justify-center mr-3">
                  <Text style={{ fontSize: 20 }}>{item.icon}</Text>
                </View>
                <Text className="text-island-text font-semibold">
                  {item.title}
                </Text>
              </View>
              <Text className="text-island-text-light">→</Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity
          className="mx-6 bg-coral-500 rounded-2xl p-4 items-center mb-8"
          onPress={() => router.replace("/(auth)/sign-in")}
        >
          <Text className="text-white font-bold">Sign Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}