import { View, Text, Image, TouchableOpacity } from "react-native";
import { DriverCardProps } from "@/types/type";

const DriverCard = ({ item, selected, onSelect }: DriverCardProps) => {
  return (
    <TouchableOpacity
      onPress={onSelect}
      className={`
        flex-row items-center justify-between p-4 rounded-2xl mb-3
        ${selected === item.id ? "bg-ocean-50 border-2 border-ocean-500" : "bg-white border border-island-border"}
      `}
      activeOpacity={0.7}
    >
      {/* Driver Info */}
      <View className="flex-row items-center flex-1">
        {/* Profile Image */}
        <Image
          source={{ uri: item.profile_image_url }}
          className="w-16 h-16 rounded-full"
        />

        {/* Details */}
        <View className="flex-1 ml-4">
          <View className="flex-row items-center mb-1">
            <Text className="text-lg font-bold text-island-text">
              {item.first_name} {item.last_name}
            </Text>
            {item.rating >= 4.8 && (
              <View className="ml-2 bg-palm-100 px-2 py-0.5 rounded-full">
                <Text className="text-xs font-semibold text-palm-600">
                  Top Rated
                </Text>
              </View>
            )}
          </View>

          <View className="flex-row items-center mb-2">
            <Text className="text-sm text-island-text-light mr-3">
              ⭐ {item.rating.toFixed(1)}
            </Text>
            <Text className="text-sm text-island-text-light">
              {item.car_seats} seats
            </Text>
          </View>

          <Text className="text-xs text-island-text-light">
            Permit: {item.permit_number}
          </Text>
        </View>

        {/* Car Image */}
        <View className="items-center ml-2">
          <Image
            source={{ uri: item.car_image_url }}
            className="w-20 h-16 rounded-xl"
            resizeMode="cover"
          />
        </View>
      </View>

      {/* Selection Indicator */}
      <View className="ml-3">
        <View
          className={`
            w-6 h-6 rounded-full border-2 items-center justify-center
            ${selected === item.id ? "bg-ocean-500 border-ocean-500" : "border-island-border"}
          `}
        >
          {selected === item.id && (
            <View className="w-3 h-3 bg-white rounded-full" />
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default DriverCard;