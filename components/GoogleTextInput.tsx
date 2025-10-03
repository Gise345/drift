import { View, Text, Image } from "react-native";
import Constants from "expo-constants";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GoogleInputProps } from "@/types/type";

const googlePlacesApiKey = Constants.expoConfig?.extra?.EXPO_PUBLIC_PLACES_API_KEY || "";

const GoogleTextInput = ({
  icon,
  initialLocation,
  containerStyle,
  textInputBackgroundColor,
  handlePress,
}: GoogleInputProps) => {
  return (
    <View
      className={`flex-row items-center justify-center relative z-50 rounded-2xl ${containerStyle}`}
    >
      <GooglePlacesAutocomplete
        fetchDetails={true}
        placeholder={initialLocation || "Where to?"}
        debounce={200}
        styles={{
          textInputContainer: {
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 20,
            marginHorizontal: 0,
            position: "relative",
            shadowColor: "#00A0E3",
          },
          textInput: {
            backgroundColor: textInputBackgroundColor || "white",
            fontSize: 16,
            fontWeight: "600",
            marginTop: 5,
            width: "100%",
            borderRadius: 16,
            paddingLeft: 50,
            paddingRight: 20,
            height: 56,
            color: "#1E293B",
            shadowColor: "#d4d4d4",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 3,
          },
          listView: {
            backgroundColor: "white",
            position: "relative",
            top: 0,
            width: "100%",
            borderRadius: 16,
            shadowColor: "#d4d4d4",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.15,
            shadowRadius: 8,
            elevation: 5,
            zIndex: 99,
            marginTop: 8,
          },
          row: {
            padding: 16,
            height: 'auto',
            flexDirection: 'row',
          },
          separator: {
            height: 1,
            backgroundColor: '#E2E8F0',
          },
        }}
        onPress={(data, details = null) => {
          handlePress({
            latitude: details?.geometry.location.lat!,
            longitude: details?.geometry.location.lng!,
            address: data.description,
          });
        }}
        query={{
          key: googlePlacesApiKey,
          language: "en",
          components: "country:ky", // Restrict to Cayman Islands
        }}
        renderLeftButton={() => (
          <View className="justify-center items-center w-12 h-full">
            <Image
              source={icon ? icon : require("@/assets/icons/search.png")}
              className="w-6 h-6"
              style={{ tintColor: "#00A0E3" }}
              resizeMode="contain"
            />
          </View>
        )}
        textInputProps={{
          placeholderTextColor: "#94A3B8",
          placeholder: initialLocation || "Where would you like to drift?",
        }}
      />
    </View>
  );
};

export default GoogleTextInput;