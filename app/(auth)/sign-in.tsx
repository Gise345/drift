import { router } from "expo-router";
import { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "@/components/ui/Button";
import InputField from "@/components/ui/InputField";

export default function SignInScreen() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = async () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.replace("/(root)/(tabs)/home");
    }, 1500);
  };

  return (
    <SafeAreaView className="flex-1 bg-island-background">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View className="pt-12 pb-8 px-8">
            <View className="items-center mb-6">
              <Text style={{ fontSize: 60 }}>🚕</Text>
            </View>
            <Text className="text-4xl font-bold text-center text-island-text mb-2">
              Welcome back
            </Text>
            <Text className="text-lg text-center text-island-text-light">
              Ready to drift through Cayman?
            </Text>
          </View>

          <View className="flex-1 bg-white rounded-t-3xl px-8 pt-8 shadow-soft">
            <InputField
              label="Email"
              placeholder="your@email.com"
              value={form.email}
              onChangeText={(email) => setForm({ ...form, email })}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <InputField
              label="Password"
              placeholder="Enter your password"
              value={form.password}
              onChangeText={(password) => setForm({ ...form, password })}
              secureTextEntry
            />

            <TouchableOpacity className="self-end mb-6">
              <Text className="text-ocean-500 font-medium">
                Forgot password?
              </Text>
            </TouchableOpacity>

            <Button
              title="Sign In"
              onPress={handleSignIn}
              isLoading={isLoading}
              variant="primary"
              size="lg"
            />

            <View className="flex-row items-center my-6">
              <View className="flex-1 h-px bg-island-border" />
              <Text className="mx-4 text-island-text-light">or</Text>
              <View className="flex-1 h-px bg-island-border" />
            </View>

            <Button
              title="Continue with Google"
              onPress={() => {}}
              variant="outline"
              size="lg"
            />

            <View className="flex-row justify-center mt-6 mb-8">
              <Text className="text-island-text-light">
                Don't have an account?{" "}
              </Text>
              <TouchableOpacity onPress={() => router.push("/(auth)/sign-up")}>
                <Text className="text-ocean-500 font-semibold">Sign Up</Text>
              </TouchableOpacity>
            </View>

            <View className="pb-8">
              <Text className="text-center text-xs text-island-text-light">
                Licensed taxi service for the Cayman Islands
              </Text>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}