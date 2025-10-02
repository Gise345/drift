declare module "@/types/type" {
  import { TextInputProps, TouchableOpacityProps } from "react-native";

  // Driver & Vehicle Types
  export interface Driver {
    id: number;
    first_name: string;
    last_name: string;
    profile_image_url: string;
    car_image_url: string;
    car_seats: number;
    rating: number;
    permit_number?: string;
    phone?: string;
  }

  export interface MarkerData extends Driver {
    latitude: number;
    longitude: number;
    title: string;
    time?: number;
    price?: string;
  }

  // Ride Types
  export interface Ride {
    ride_id: string;
    origin_address: string;
    destination_address: string;
    origin_latitude: number;
    origin_longitude: number;
    destination_latitude: number;
    destination_longitude: number;
    ride_time: number;
    fare_price: number;
    payment_status: "pending" | "paid" | "failed";
    driver_id: number;
    user_id: string;
    created_at: string;
    driver: {
      first_name: string;
      last_name: string;
      car_seats: number;
      rating: number;
    };
  }

  // Location Types
  export interface Location {
    latitude: number;
    longitude: number;
    address: string;
  }

  export interface LocationStore {
    userLatitude: number | null;
    userLongitude: number | null;
    userAddress: string | null;
    destinationLatitude: number | null;
    destinationLongitude: number | null;
    destinationAddress: string | null;
    setUserLocation: (location: Location) => void;
    setDestinationLocation: (location: Location) => void;
    clearDestination: () => void;
  }

  // Driver Store
  export interface DriverStore {
    drivers: MarkerData[];
    selectedDriver: number | null;
    setSelectedDriver: (driverId: number) => void;
    setDrivers: (drivers: MarkerData[]) => void;
    clearSelectedDriver: () => void;
  }

  // Component Props
  export interface ButtonProps extends TouchableOpacityProps {
    title: string;
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    isLoading?: boolean;
    IconLeft?: React.ComponentType<any>;
    IconRight?: React.ComponentType<any>;
    className?: string;
  }

  export interface InputFieldProps extends TextInputProps {
    label?: string;
    error?: string;
    icon?: any;
    iconPosition?: "left" | "right";
    containerClassName?: string;
    inputClassName?: string;
  }

  export interface GoogleInputProps {
    icon?: any;
    initialLocation?: string;
    containerStyle?: string;
    textInputBackgroundColor?: string;
    handlePress: (location: Location) => void;
  }

  export interface DriverCardProps {
    item: MarkerData;
    selected: number | null;
    onSelect: () => void;
  }

  export interface PaymentProps {
    fullName: string;
    email: string;
    amount: string;
    driverId: number;
    rideTime: number;
  }
}