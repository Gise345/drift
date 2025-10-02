import { create } from "zustand";
import { DriverStore, LocationStore, MarkerData, Location } from "@/types/type";

// Location Store - manages user and destination locations
export const useLocationStore = create<LocationStore>((set) => ({
  userLatitude: null,
  userLongitude: null,
  userAddress: null,
  destinationLatitude: null,
  destinationLongitude: null,
  destinationAddress: null,

  setUserLocation: (location: Location) => {
    set({
      userLatitude: location.latitude,
      userLongitude: location.longitude,
      userAddress: location.address,
    });

    // Clear selected driver when location changes
    const { selectedDriver, clearSelectedDriver } = useDriverStore.getState();
    if (selectedDriver) clearSelectedDriver();
  },

  setDestinationLocation: (location: Location) => {
    set({
      destinationLatitude: location.latitude,
      destinationLongitude: location.longitude,
      destinationAddress: location.address,
    });

    // Clear selected driver when destination changes
    const { selectedDriver, clearSelectedDriver } = useDriverStore.getState();
    if (selectedDriver) clearSelectedDriver();
  },

  clearDestination: () => {
    set({
      destinationLatitude: null,
      destinationLongitude: null,
      destinationAddress: null,
    });
  },
}));

// Driver Store - manages available drivers and selection
export const useDriverStore = create<DriverStore>((set) => ({
  drivers: [] as MarkerData[],
  selectedDriver: null,

  setSelectedDriver: (driverId: number) =>
    set({ selectedDriver: driverId }),

  setDrivers: (drivers: MarkerData[]) =>
    set({ drivers }),

  clearSelectedDriver: () =>
    set({ selectedDriver: null }),
}));