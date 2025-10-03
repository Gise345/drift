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

export default function SignUpScreen() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSignUp = async () => {
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
          <View className="pt-12 pb-6 px-8">
            <TouchableOpacity
              onPress={() => router.back()}
              className="mb-6"
            >
              <Text className="text-ocean-500 font-semibold text-base">
                ← Back
              </Text>
            </TouchableOpacity>

            <View className="items-center mb-6">
              <Text style={{ fontSize: 60 }}>🌴</Text>
            </View>
            <Text className="text-4xl font-bold text-center text-island-text mb-2">
              Join the drift
            </Text>
            <Text className="text-lg text-center text-island-text-light">
              Create your account to get started
            </Text>
          </View>

          <View className="flex-1 bg-white rounded-t-3xl px-8 pt-8 shadow-soft">
            <InputField
              label="Full Name"
              placeholder="John Doe"
              value={form.name}
              onChangeText={(name) => setForm({ ...form, name })}
            />

            <InputField
              label="Email"
              placeholder="your@email.com"
              value={form.email}
              onChangeText={(email) => setForm({ ...form, email })}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <InputField
              label="Phone (Optional)"
              placeholder="345-XXX-XXXX"
              value={form.phone}
              onChangeText={(phone) => setForm({ ...form, phone })}
              keyboardType="phone-pad"
            />

            <InputField
              label="Password"
              placeholder="Create a strong password"
              value={form.password}
              onChangeText={(password) => setForm({ ...form, password })}
              secureTextEntry
            />

            <Button
              title="Create Account"
              onPress={handleSignUp}
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
              title="Sign up with Google"
              onPress={() => {}}
              variant="outline"
              size="lg"
            />

            <View className="flex-row justify-center mt-6 mb-4">
              <Text className="text-island-text-light">
                Already have an account?{" "}
              </Text>
              <TouchableOpacity onPress={() => router.back()}>
                <Text className="text-ocean-500 font-semibold">Sign In</Text>
              </TouchableOpacity>
            </View>

            <Text className="text-center text-xs text-island-text-light px-4 pb-8">
              By signing up, you agree to our Terms of Service and Privacy Policy
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}