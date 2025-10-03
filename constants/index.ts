// Mock driver data for testing
export const drivers = [
  {
    id: 1,
    first_name: "Marcus",
    last_name: "Johnson",
    profile_image_url: "https://randomuser.me/api/portraits/men/1.jpg",
    car_image_url: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400",
    car_seats: 4,
    rating: 4.9,
    permit_number: "CI-TX-2024-001",
  },
  {
    id: 2,
    first_name: "Sofia",
    last_name: "Martinez",
    profile_image_url: "https://randomuser.me/api/portraits/women/2.jpg",
    car_image_url: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400",
    car_seats: 4,
    rating: 4.8,
    permit_number: "CI-TX-2024-002",
  },
  {
    id: 3,
    first_name: "David",
    last_name: "Brown",
    profile_image_url: "https://randomuser.me/api/portraits/men/3.jpg",
    car_image_url: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400",
    car_seats: 4,
    rating: 4.7,
    permit_number: "CI-TX-2024-003",
  },
  {
    id: 4,
    first_name: "Emma",
    last_name: "Williams",
    profile_image_url: "https://randomuser.me/api/portraits/women/4.jpg",
    car_image_url: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=400",
    car_seats: 6,
    rating: 5.0,
    permit_number: "CI-TX-2024-004",
  },
];

// Cayman Islands coordinates
export const CAYMAN_ISLANDS = {
  GRAND_CAYMAN: {
    latitude: 19.3133,
    longitude: -81.2546,
    latitudeDelta: 0.15,
    longitudeDelta: 0.15,
  },
  GEORGE_TOWN: {
    latitude: 19.2866,
    longitude: -81.3744,
  },
  SEVEN_MILE_BEACH: {
    latitude: 19.3362,
    longitude: -81.3835,
  },
  AIRPORT: {
    latitude: 19.2928,
    longitude: -81.3578,
  },
};

// Regulated taxi fares (Cayman Islands - example rates)
export const FARE_RATES = {
  BASE_FARE: 5.0, // CI$
  PER_MILE: 3.0, // CI$
  PER_MINUTE: 0.5, // CI$
  MINIMUM_FARE: 10.0, // CI$
  AIRPORT_SURCHARGE: 5.0, // CI$
};

// Calculate fare based on distance and time
export function calculateFare(distanceKm: number, timeMinutes: number): number {
  const distanceMiles = distanceKm * 0.621371; // Convert km to miles
  const fare =
    FARE_RATES.BASE_FARE +
    distanceMiles * FARE_RATES.PER_MILE +
    timeMinutes * FARE_RATES.PER_MINUTE;

  return Math.max(fare, FARE_RATES.MINIMUM_FARE);
}

// Popular destinations in Cayman
export const POPULAR_PLACES = [
  {
    name: "Owen Roberts Airport",
    address: "Owen Roberts Dr, George Town",
    latitude: 19.2928,
    longitude: -81.3578,
  },
  {
    name: "Seven Mile Beach",
    address: "West Bay Rd, Grand Cayman",
    latitude: 19.3362,
    longitude: -81.3835,
  },
  {
    name: "Camana Bay",
    address: "Market St, Grand Cayman",
    latitude: 19.3249,
    longitude: -81.3892,
  },
  {
    name: "George Town Cruise Port",
    address: "Harbour Dr, George Town",
    latitude: 19.2914,
    longitude: -81.3809,
  },
];