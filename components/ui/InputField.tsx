import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { InputFieldProps } from "@/types/type";

const InputField = ({
  label,
  error,
  icon,
  iconPosition = "left",
  secureTextEntry,
  containerClassName = "",
  inputClassName = "",
  ...props
}: InputFieldProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <View className={`mb-4 ${containerClassName}`}>
      {label && (
        <Text className="text-island-text font-semibold mb-2 text-base">
          {label}
        </Text>
      )}

      <View
        className={`
          flex-row items-center
          bg-white
          rounded-2xl
          border-2
          px-4 py-3
          ${isFocused ? "border-ocean-500" : "border-island-border"}
          ${error ? "border-island-error" : ""}
        `}
      >
        {icon && iconPosition === "left" && (
          <Image
            source={icon}
            className="w-5 h-5 mr-3"
            style={{ tintColor: isFocused ? "#00A0E3" : "#64748B" }}
          />
        )}

        <TextInput
          className={`
            flex-1
            text-island-text
            text-base
            ${inputClassName}
          `}
          placeholderTextColor="#94A3B8"
          secureTextEntry={secureTextEntry && !isPasswordVisible}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />

        {secureTextEntry && (
          <TouchableOpacity
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
            className="ml-3"
          >
            <Text className="text-ocean-500 font-medium">
              {isPasswordVisible ? "Hide" : "Show"}
            </Text>
          </TouchableOpacity>
        )}

        {icon && iconPosition === "right" && (
          <Image
            source={icon}
            className="w-5 h-5 ml-3"
            style={{ tintColor: isFocused ? "#00A0E3" : "#64748B" }}
          />
        )}
      </View>

      {error && (
        <Text className="text-island-error text-sm mt-1 ml-1">{error}</Text>
      )}
    </View>
  );
};

export default InputField;