import React from "react";
import { TouchableOpacity, Text, ActivityIndicator, View } from "react-native";
import { ButtonProps } from "@/types/type";

const Button = ({
  title,
  onPress,
  variant = "primary",
  size = "md",
  isLoading = false,
  IconLeft,
  IconRight,
  className = "",
  disabled,
  ...props
}: ButtonProps) => {
  // Variant styles
  const variantStyles = {
    primary: "bg-ocean-500 active:bg-ocean-600 shadow-island",
    secondary: "bg-coral-500 active:bg-coral-600 shadow-coral",
    outline: "bg-transparent border-2 border-ocean-500 active:bg-ocean-50",
    ghost: "bg-transparent active:bg-ocean-50",
  };

  // Size styles
  const sizeStyles = {
    sm: "py-2 px-4",
    md: "py-3 px-6",
    lg: "py-4 px-8",
  };

  // Text variant styles
  const textVariantStyles = {
    primary: "text-white",
    secondary: "text-white",
    outline: "text-ocean-500",
    ghost: "text-ocean-500",
  };

  // Text size styles
  const textSizeStyles = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  };

  const isDisabled = disabled || isLoading;

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={isDisabled}
      className={`
        rounded-full
        flex-row items-center justify-center
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${isDisabled ? "opacity-50" : ""}
        ${className}
      `}
      {...props}
    >
      {isLoading ? (
        <ActivityIndicator
          color={variant === "primary" || variant === "secondary" ? "#fff" : "#00A0E3"}
        />
      ) : (
        <>
          {IconLeft && (
            <View className="mr-2">
              <IconLeft />
            </View>
          )}
          <Text
            className={`
              font-semibold
              ${textVariantStyles[variant]}
              ${textSizeStyles[size]}
            `}
          >
            {title}
          </Text>
          {IconRight && (
            <View className="ml-2">
              <IconRight />
            </View>
          )}
        </>
      )}
    </TouchableOpacity>
  );
};

export default Button;