// import { PostsType } from "@/components/custom/Dashboard/Listings/ListingCard";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type Host = {
  userId: string;
  properties?: string[];
};

export type Listing = {
  title: string;
  propertyId: number;
  description: string;
  location: string;
  longtitue?: number;
  latitude?: number;
  host: Host;
  images?: string[];
  pricePerNight: number;
};

export interface ListingType {
  id: string;
  title: string;
  property: string;
  authorId: string;
  images: string[];
  pricePerNight: number;
  description?: string;
  rating?: number;
  location?: string;
  likes?: number;
}

export interface PostsType {
  id: string;
  title: string;
  property: string;
  authorId: string;
  images: string[];
  totalPrice: number;
  description?: string;
  rating?: number;
  location?: string;
  likes: number;
}

export interface ListingDetailProps {
  listing: {
    id: string;
    title: string;
    property: string;
    authorId: string;
    authorAvatar: string;
    images: string[];
    pricePerNight: number;
    description: string;
    location: string;
    rating: number;
    reviewCount: number;
    bedrooms: number;
    bathrooms: number;
    guests: number;
    amenities: string[];
    coordinates: { lat: number; lng: number };
    checkIn: string;
    checkOut: string;
    houseRules: string[];
  };
}

export const SAMPLE_LISTINGS: ListingDetailProps["listing"][] = [
  {
    id: "1",
    title: "Modern Beachfront Villa",
    property: "Entire villa",
    authorId: "John D.",
    authorAvatar: "/avatars/john.png",
    images: [
      "/placeholder.svg?height=400&width=400&text=Beach+Villa+1",
      "/placeholder.svg?height=400&width=400&text=Beach+Villa+2",
      "/placeholder.svg?height=400&width=400&text=Beach+Villa+3",
    ],
    pricePerNight: 250,
    description:
      "Stunning beachfront villa with panoramic ocean views. Enjoy the private pool and direct beach access.",
    location: "Malibu, California",
    rating: 4.95,
    reviewCount: 132,
    bedrooms: 4,
    bathrooms: 3,
    guests: 8,
    amenities: ["Pool", "Wi-Fi", "Kitchen", "Washer", "Beach Access"],
    coordinates: { lat: 34.0259, lng: -118.7798 },
    checkIn: "3:00 PM",
    checkOut: "11:00 AM",
    houseRules: ["No smoking", "No pets", "No parties"],
  },
  {
    id: "2",
    title: "Cozy Mountain Cabin",
    property: "Entire cabin",
    authorId: "Sarah M.",
    authorAvatar: "/avatars/sarah.png",
    images: [
      "/placeholder.svg?height=400&width=400&text=Mountain+Cabin+1",
      "/placeholder.svg?height=400&width=400&text=Mountain+Cabin+2",
      "/placeholder.svg?height=400&width=400&text=Mountain+Cabin+3",
    ],
    pricePerNight: 120,
    description:
      "Charming cabin nestled in the mountains. Perfect for a peaceful getaway with stunning forest views.",
    location: "Aspen, Colorado",
    rating: 4.87,
    reviewCount: 89,
    bedrooms: 2,
    bathrooms: 1,
    guests: 4,
    amenities: ["Fireplace", "Wi-Fi", "Kitchen", "Hiking Trails"],
    coordinates: { lat: 39.1911, lng: -106.8175 },
    checkIn: "2:00 PM",
    checkOut: "10:00 AM",
    houseRules: ["No smoking", "Quiet hours after 9 PM"],
  },
  {
    id: "3",
    title: "Downtown Luxury Loft",
    property: "Entire loft",
    authorId: "Michael B.",
    authorAvatar: "/avatars/michael.png",
    images: [
      "/placeholder.svg?height=400&width=400&text=Luxury+Loft+1",
      "/placeholder.svg?height=400&width=400&text=Luxury+Loft+2",
      "/placeholder.svg?height=400&width=400&text=Luxury+Loft+3",
    ],
    pricePerNight: 180,
    description:
      "Stylish loft in the heart of downtown. Walking distance to restaurants, shops, and attractions.",
    location: "New York City, NY",
    rating: 4.92,
    reviewCount: 154,
    bedrooms: 1,
    bathrooms: 1,
    guests: 2,
    amenities: ["Wi-Fi", "Air Conditioning", "Elevator", "Workspace"],
    coordinates: { lat: 40.7128, lng: -74.006 },
    checkIn: "4:00 PM",
    checkOut: "11:00 AM",
    houseRules: ["No smoking", "No pets"],
  },
  {
    id: "4",
    title: "Seaside Cottage",
    property: "Entire cottage",
    authorId: "Emma L.",
    authorAvatar: "/avatars/emma.png",
    images: [
      "/placeholder.svg?height=400&width=400&text=Seaside+Cottage+1",
      "/placeholder.svg?height=400&width=400&text=Seaside+Cottage+2",
      "/placeholder.svg?height=400&width=400&text=Seaside+Cottage+3",
    ],
    pricePerNight: 140,
    description:
      "Charming cottage just steps from the sea. Enjoy beautiful sunsets from the private garden.",
    location: "Cape Cod, Massachusetts",
    rating: 4.89,
    reviewCount: 110,
    bedrooms: 3,
    bathrooms: 2,
    guests: 6,
    amenities: ["Garden", "Wi-Fi", "Kitchen", "Free Parking"],
    coordinates: { lat: 41.6688, lng: -70.2962 },
    checkIn: "3:00 PM",
    checkOut: "10:00 AM",
    houseRules: ["No smoking", "No parties"],
  },
  {
    id: "5",
    title: "Desert Oasis Villa",
    property: "Entire villa",
    authorId: "David R.",
    authorAvatar: "/avatars/david.png",
    images: [
      "/placeholder.svg?height=400&width=400&text=Desert+Villa+1",
      "/placeholder.svg?height=400&width=400&text=Desert+Villa+2",
      "/placeholder.svg?height=400&width=400&text=Desert+Villa+3",
    ],
    pricePerNight: 320,
    description:
      "Luxurious villa with private pool in the desert. Stunning views and modern amenities.",
    location: "Palm Springs, California",
    rating: 4.96,
    reviewCount: 97,
    bedrooms: 5,
    bathrooms: 4,
    guests: 10,
    amenities: ["Pool", "Hot Tub", "Wi-Fi", "Mountain Views"],
    coordinates: { lat: 33.8303, lng: -116.5453 },
    checkIn: "3:00 PM",
    checkOut: "11:00 AM",
    houseRules: ["No smoking", "No parties", "No pets"],
  },
  {
    id: "6",
    title: "Lakefront Cabin",
    property: "Entire cabin",
    authorId: "Jessica T.",
    authorAvatar: "/avatars/jessica.png",
    images: [
      "/placeholder.svg?height=400&width=400&text=Lake+Cabin+1",
      "/placeholder.svg?height=400&width=400&text=Lake+Cabin+2",
      "/placeholder.svg?height=400&width=400&text=Lake+Cabin+3",
    ],
    pricePerNight: 160,
    description:
      "Peaceful cabin on the lake with private dock. Perfect for fishing and water activities.",
    location: "Lake Tahoe, Nevada",
    rating: 4.91,
    reviewCount: 72,
    bedrooms: 3,
    bathrooms: 2,
    guests: 5,
    amenities: ["Dock", "Canoe", "Fireplace", "Wi-Fi"],
    coordinates: { lat: 39.0968, lng: -120.0324 },
    checkIn: "2:00 PM",
    checkOut: "10:00 AM",
    houseRules: ["No smoking", "Quiet hours after 10 PM"],
  },
  {
    id: "7",
    title: "Historic Townhouse",
    property: "Entire townhouse",
    authorId: "Robert K.",
    authorAvatar: "/avatars/robert.png",
    images: [
      "/placeholder.svg?height=400&width=400&text=Townhouse+1",
      "/placeholder.svg?height=400&width=400&text=Townhouse+2",
      "/placeholder.svg?height=400&width=400&text=Townhouse+3",
    ],
    pricePerNight: 200,
    description:
      "Beautifully restored historic townhouse in the heart of the city. Elegant furnishings and modern comforts.",
    location: "Boston, Massachusetts",
    rating: 4.88,
    reviewCount: 115,
    bedrooms: 3,
    bathrooms: 2,
    guests: 5,
    amenities: ["Wi-Fi", "Historic Charm", "Kitchen", "Free Parking"],
    coordinates: { lat: 42.3601, lng: -71.0589 },
    checkIn: "4:00 PM",
    checkOut: "11:00 AM",
    houseRules: ["No smoking"],
  },
  {
    id: "2005",
    title: "Cool Aptment",
    property: "Entire APARTMENT",
    authorId: "Viko Piko.",
    authorAvatar: "/avatars/viko.png",
    images: [
      "/placeholder.svg?height=400&width=400&text=Townhouse+1",
      "/placeholder.svg?height=400&width=400&text=Townhouse+2",
      "/placeholder.svg?height=400&width=400&text=Townhouse+3",
      "/placeholder.svg?height=400&width=400&text=Townhouse+3",
      "/placeholder.svg?height=400&width=400&text=Townhouse+3",
    ],
    pricePerNight: 200,
    description: "Very gotino apartamentche. Very chill. Nice view i taka.",
    location: "Ruse, Bulgaria",
    rating: 5.0,
    reviewCount: 3,
    bedrooms: 1,
    bathrooms: 1,
    guests: 2,
    amenities: ["Wi-Fi", "City View", "Air Conditioning"],
    coordinates: { lat: 43.8356, lng: 25.9657 },
    checkIn: "3:00 PM",
    checkOut: "11:00 AM",
    houseRules: ["No loud music", "No smoking"],
  },
  {
    id: "8",
    title: "Tropical Bungalow",
    property: "Entire bungalow",
    authorId: "Lisa M.",
    authorAvatar: "/avatars/lisa.png",
    images: [
      "/placeholder.svg?height=400&width=400&text=Tropical+Bungalow+1",
      "/placeholder.svg?height=400&width=400&text=Tropical+Bungalow+2",
      "/placeholder.svg?height=400&width=400&text=Tropical+Bungalow+3",
    ],
    pricePerNight: 180,
    description:
      "Tropical paradise bungalow surrounded by lush gardens. Short walk to pristine beaches.",
    location: "Kauai, Hawaii",
    rating: 4.93,
    reviewCount: 86,
    bedrooms: 2,
    bathrooms: 1,
    guests: 4,
    amenities: ["Beach Access", "Garden", "Wi-Fi", "Hammock"],
    coordinates: { lat: 22.0964, lng: -159.5261 },
    checkIn: "3:00 PM",
    checkOut: "11:00 AM",
    houseRules: ["No smoking", "Respect wildlife"],
  },
  {
    id: "9",
    title: "City Center Apartment",
    property: "Entire apartment",
    authorId: "Alex P.",
    authorAvatar: "/avatars/alex.png",
    images: [
      "/placeholder.svg?height=400&width=400&text=City+Apartment+1",
      "/placeholder.svg?height=400&width=400&text=City+Apartment+2",
      "/placeholder.svg?height=400&width=400&text=City+Apartment+3",
    ],
    pricePerNight: 95,
    description:
      "Modern apartment in the city center. Great location with easy access to public transportation.",
    location: "Chicago, Illinois",
    rating: 4.76,
    reviewCount: 70,
    bedrooms: 1,
    bathrooms: 1,
    guests: 2,
    amenities: ["Wi-Fi", "Elevator", "Kitchen"],
    coordinates: { lat: 41.8781, lng: -87.6298 },
    checkIn: "2:00 PM",
    checkOut: "10:00 AM",
    houseRules: ["No smoking", "No parties"],
  },
  {
    id: "10",
    title: "Wine Country Estate",
    property: "Entire estate",
    authorId: "Maria S.",
    authorAvatar: "/avatars/maria.png",
    images: [
      "/placeholder.svg?height=400&width=400&text=Wine+Estate+1",
      "/placeholder.svg?height=400&width=400&text=Wine+Estate+2",
      "/placeholder.svg?height=400&width=400&text=Wine+Estate+3",
    ],
    pricePerNight: 450,
    description:
      "Elegant estate in the heart of wine country. Private vineyard and tasting room included.",
    location: "Napa Valley, California",
    rating: 4.98,
    reviewCount: 103,
    bedrooms: 6,
    bathrooms: 5,
    guests: 12,
    amenities: ["Vineyard", "Tasting Room", "Wi-Fi", "Pool"],
    coordinates: { lat: 38.5025, lng: -122.2654 },
    checkIn: "3:00 PM",
    checkOut: "11:00 AM",
    houseRules: ["No smoking", "No children under 12", "No pets"],
  },
];

export const SAMPLE_POSTS: PostsType[] = [
  {
    id: "p1",
    title: "Amazing Weekend in Malibu",
    property: "Travel Story",
    authorId: "Jennifer K.",
    images: ["/vert2.jpg", "/vert1.jpg", "/vert3.jpg"],
    totalPrice: 0,
    description:
      "Had the most incredible weekend staying at this beachfront villa in Malibu. The views were breathtaking and the host was amazing!",
    location: "Malibu, California",
    rating: 5.0,
    likes: 18,
  },
  {
    id: "p2",
    title: "Mountain Retreat Experience",
    property: "Travel Story",
    authorId: "Thomas H.",
    images: ["/vert3.jpg", "/vert2.jpg", "/vert1.jpg"],
    totalPrice: 0,
    description:
      "Our stay at this mountain cabin was unforgettable. Waking up to the sound of birds and the mountain views was pure magic.",
    location: "Aspen, Colorado",
    rating: 4.9,
    likes: 3,
  },
  {
    id: "p3",
    title: "NYC Adventure",
    property: "Travel Story",
    authorId: "Sophie L.",
    images: ["/vert1.jpg", "/vert2.jpg", "/vert3.jpg"],
    totalPrice: 0,
    description:
      "Three days in the Big Apple! This loft was perfectly located and we could walk everywhere. Highly recommend!",
    location: "New York City, NY",
    rating: 4.8,
    likes: 27,
  },
];
