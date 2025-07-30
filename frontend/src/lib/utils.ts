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
  price_per_night: number;
};

export interface ListingType {
  id: string;
  title: string;
  property: string;
  author_Id: string;
  images: string[];
  price_per_night: number;
  description?: string;
  rating?: number;
  location?: string;
  likes?: number;
}

export interface PostsType {
  id: string;
  title: string;
  property: string;
  author_Id: string;
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
    author_Id: string;
    authorAvatar: string;
    images: string[];
    price_per_night: number;
    description: string;
    location: string;
    rating: number;
    review_count: number;
    bedrooms: number;
    bathrooms: number;
    guests: number;
    amenities: string[];
    // coordinates: { lat: number; lng: number };
    lat: number;
    lng: number;
    check_in: string;
    check_out: string;
    house_rules: string[];
    is_favorite: boolean;
  };
}

export const SAMPLE_LISTINGS: ListingDetailProps["listing"][] = [
  {
    id: "1",
    title: "Modern Beachfront Villa",
    property: "Entire villa",
    author_Id: "John D.",
    authorAvatar: "/avatars/john.png",
    images: [
      "/placeholder.svg?height=400&width=400&text=Beach+Villa+1",
      "/placeholder.svg?height=400&width=400&text=Beach+Villa+2",
      "/placeholder.svg?height=400&width=400&text=Beach+Villa+3",
    ],
    price_per_night: 250,
    description:
      "Stunning beachfront villa with panoramic ocean views. Enjoy the private pool and direct beach access.",
    location: "Malibu, California",
    rating: 4.95,
    review_count: 132,
    bedrooms: 4,
    bathrooms: 3,
    guests: 8,
    amenities: ["Pool", "Wi-Fi", "Kitchen", "Washer", "Beach Access"],
    lat: 34.0259,
    lng: -118.7798,
    check_in: "3:00 PM",
    check_out: "11:00 AM",
    house_rules: ["No smoking", "No pets", "No parties"],
    is_favorite: false,
  },
  {
    id: "2",
    title: "Cozy Mountain Cabin",
    property: "Entire cabin",
    author_Id: "Sarah M.",
    authorAvatar: "/avatars/sarah.png",
    images: [
      "/placeholder.svg?height=400&width=400&text=Mountain+Cabin+1",
      "/placeholder.svg?height=400&width=400&text=Mountain+Cabin+2",
      "/placeholder.svg?height=400&width=400&text=Mountain+Cabin+3",
    ],
    price_per_night: 120,
    description:
      "Charming cabin nestled in the mountains. Perfect for a peaceful getaway with stunning forest views.",
    location: "Aspen, Colorado",
    rating: 4.87,
    review_count: 89,
    bedrooms: 2,
    bathrooms: 1,
    guests: 4,
    amenities: ["Fireplace", "Wi-Fi", "Kitchen", "Hiking Trails"],
    lat: 39.1911,
    lng: -106.8175,
    check_in: "2:00 PM",
    check_out: "10:00 AM",
    house_rules: ["No smoking", "Quiet hours after 9 PM"],
    is_favorite: false,
  },
  {
    id: "3",
    title: "Downtown Luxury Loft",
    property: "Entire loft",
    author_Id: "Michael B.",
    authorAvatar: "/avatars/michael.png",
    images: [
      "/placeholder.svg?height=400&width=400&text=Luxury+Loft+1",
      "/placeholder.svg?height=400&width=400&text=Luxury+Loft+2",
      "/placeholder.svg?height=400&width=400&text=Luxury+Loft+3",
    ],
    price_per_night: 180,
    description:
      "Stylish loft in the heart of downtown. Walking distance to restaurants, shops, and attractions.",
    location: "New York City, NY",
    rating: 4.92,
    review_count: 154,
    bedrooms: 1,
    bathrooms: 1,
    guests: 2,
    amenities: ["Wi-Fi", "Air Conditioning", "Elevator", "Workspace"],
    lat: 39.1911,
    lng: -106.8175,
    check_in: "4:00 PM",
    check_out: "11:00 AM",
    house_rules: ["No smoking", "No pets"],
    is_favorite: true,
  },
  {
    id: "4",
    title: "Seaside Cottage",
    property: "Entire cottage",
    author_Id: "Emma L.",
    authorAvatar: "/avatars/emma.png",
    images: [
      "/placeholder.svg?height=400&width=400&text=Seaside+Cottage+1",
      "/placeholder.svg?height=400&width=400&text=Seaside+Cottage+2",
      "/placeholder.svg?height=400&width=400&text=Seaside+Cottage+3",
    ],
    price_per_night: 140,
    description:
      "Charming cottage just steps from the sea. Enjoy beautiful sunsets from the private garden.",
    location: "Cape Cod, Massachusetts",
    rating: 4.89,
    review_count: 110,
    bedrooms: 3,
    bathrooms: 2,
    guests: 6,
    amenities: ["Garden", "Wi-Fi", "Kitchen", "Free Parking"],
    lat: 28.27,
    lng: -11.22,
    check_in: "3:00 PM",
    check_out: "10:00 AM",
    house_rules: ["No smoking", "No parties"],
    is_favorite: false,
  },
  {
    id: "5",
    title: "Desert Oasis Villa",
    property: "Entire villa",
    author_Id: "David R.",
    authorAvatar: "/avatars/david.png",
    images: [
      "/placeholder.svg?height=400&width=400&text=Desert+Villa+1",
      "/placeholder.svg?height=400&width=400&text=Desert+Villa+2",
      "/placeholder.svg?height=400&width=400&text=Desert+Villa+3",
    ],
    price_per_night: 320,
    description:
      "Luxurious villa with private pool in the desert. Stunning views and modern amenities.",
    location: "Palm Springs, California",
    rating: 4.96,
    review_count: 97,
    bedrooms: 5,
    bathrooms: 4,
    guests: 10,
    amenities: ["Pool", "Hot Tub", "Wi-Fi", "Mountain Views"],
    lat: 33.8303,
    lng: -116.5453,
    check_in: "3:00 PM",
    check_out: "11:00 AM",
    house_rules: ["No smoking", "No parties", "No pets"],
    is_favorite: true,
  },
  {
    id: "6",
    title: "Lakefront Cabin",
    property: "Entire cabin",
    author_Id: "Jessica T.",
    authorAvatar: "/avatars/jessica.png",
    images: [
      "/placeholder.svg?height=400&width=400&text=Lake+Cabin+1",
      "/placeholder.svg?height=400&width=400&text=Lake+Cabin+2",
      "/placeholder.svg?height=400&width=400&text=Lake+Cabin+3",
    ],
    price_per_night: 160,
    description:
      "Peaceful cabin on the lake with private dock. Perfect for fishing and water activities.",
    location: "Lake Tahoe, Nevada",
    rating: 4.91,
    review_count: 72,
    bedrooms: 3,
    bathrooms: 2,
    guests: 5,
    amenities: ["Dock", "Canoe", "Fireplace", "Wi-Fi"],
    lat: 39.0968,
    lng: -120.0324,
    check_in: "2:00 PM",
    check_out: "10:00 AM",
    house_rules: ["No smoking", "Quiet hours after 10 PM"],
    is_favorite: true,
  },
  {
    id: "7",
    title: "Historic Townhouse",
    property: "Entire townhouse",
    author_Id: "Robert K.",
    authorAvatar: "/avatars/robert.png",
    images: [
      "/placeholder.svg?height=400&width=400&text=Townhouse+1",
      "/placeholder.svg?height=400&width=400&text=Townhouse+2",
      "/placeholder.svg?height=400&width=400&text=Townhouse+3",
    ],
    price_per_night: 200,
    description:
      "Beautifully restored historic townhouse in the heart of the city. Elegant furnishings and modern comforts.",
    location: "Boston, Massachusetts",
    rating: 4.88,
    review_count: 115,
    bedrooms: 3,
    bathrooms: 2,
    guests: 5,
    amenities: ["Wi-Fi", "Historic Charm", "Kitchen", "Free Parking"],
    lat: 42.3601,
    lng: -71.0589,
    check_in: "4:00 PM",
    check_out: "11:00 AM",
    house_rules: ["No smoking"],
    is_favorite: true,
  },
  {
    id: "2005",
    title: "Cool Aptment",
    property: "Entire APARTMENT",
    author_Id: "Viko Piko.",
    authorAvatar: "/avatars/viko.png",
    images: [
      "/placeholder.svg?height=400&width=400&text=Townhouse+1",
      "/placeholder.svg?height=400&width=400&text=Townhouse+2",
      "/placeholder.svg?height=400&width=400&text=Townhouse+3",
      "/placeholder.svg?height=400&width=400&text=Townhouse+3",
      "/placeholder.svg?height=400&width=400&text=Townhouse+3",
    ],
    price_per_night: 200,
    description: "Very gotino apartamentche. Very chill. Nice view i taka.",
    location: "Ruse, Bulgaria",
    rating: 5.0,
    review_count: 3,
    bedrooms: 1,
    bathrooms: 1,
    guests: 2,
    amenities: ["Wi-Fi", "City View", "Air Conditioning"],
    lat: 43.8356,
    lng: 25.9657,
    check_in: "3:00 PM",
    check_out: "11:00 AM",
    house_rules: ["No loud music", "No smoking"],
    is_favorite: false,
  },
  {
    id: "8",
    title: "Tropical Bungalow",
    property: "Entire bungalow",
    author_Id: "Lisa M.",
    authorAvatar: "/avatars/lisa.png",
    images: [
      "/placeholder.svg?height=400&width=400&text=Tropical+Bungalow+1",
      "/placeholder.svg?height=400&width=400&text=Tropical+Bungalow+2",
      "/placeholder.svg?height=400&width=400&text=Tropical+Bungalow+3",
    ],
    price_per_night: 180,
    description:
      "Tropical paradise bungalow surrounded by lush gardens. Short walk to pristine beaches.",
    location: "Kauai, Hawaii",
    rating: 4.93,
    review_count: 86,
    bedrooms: 2,
    bathrooms: 1,
    guests: 4,
    amenities: ["Beach Access", "Garden", "Wi-Fi", "Hammock"],
    lat: 22.0964,
    lng: -159.5261,
    check_in: "3:00 PM",
    check_out: "11:00 AM",
    house_rules: ["No smoking", "Respect wildlife"],
    is_favorite: true,
  },
  {
    id: "9",
    title: "City Center Apartment",
    property: "Entire apartment",
    author_Id: "Alex P.",
    authorAvatar: "/avatars/alex.png",
    images: [
      "/placeholder.svg?height=400&width=400&text=City+Apartment+1",
      "/placeholder.svg?height=400&width=400&text=City+Apartment+2",
      "/placeholder.svg?height=400&width=400&text=City+Apartment+3",
    ],
    price_per_night: 95,
    description:
      "Modern apartment in the city center. Great location with easy access to public transportation.",
    location: "Chicago, Illinois",
    rating: 4.76,
    review_count: 70,
    bedrooms: 1,
    bathrooms: 1,
    guests: 2,
    amenities: ["Wi-Fi", "Elevator", "Kitchen"],
    lat: 41.8781,
    lng: -87.6298,
    check_in: "2:00 PM",
    check_out: "10:00 AM",
    house_rules: ["No smoking", "No parties"],
    is_favorite: false,
  },
  {
    id: "10",
    title: "Wine Country Estate",
    property: "Entire estate",
    author_Id: "Maria S.",
    authorAvatar: "/avatars/maria.png",
    images: [
      "/placeholder.svg?height=400&width=400&text=Wine+Estate+1",
      "/placeholder.svg?height=400&width=400&text=Wine+Estate+2",
      "/placeholder.svg?height=400&width=400&text=Wine+Estate+3",
    ],
    price_per_night: 450,
    description:
      "Elegant estate in the heart of wine country. Private vineyard and tasting room included.",
    location: "Napa Valley, California",
    rating: 4.98,
    review_count: 103,
    bedrooms: 6,
    bathrooms: 5,
    guests: 12,
    amenities: ["Vineyard", "Tasting Room", "Wi-Fi", "Pool"],
    lat: 33.33,
    lng: 22.22,
    check_in: "3:00 PM",
    check_out: "11:00 AM",
    house_rules: ["No smoking", "No children under 12", "No pets"],
    is_favorite: true,
  },
];

export const SAMPLE_POSTS: PostsType[] = [
  {
    id: "p1",
    title: "Amazing Weekend in Malibu",
    property: "Travel Story",
    author_Id: "Jennifer K.",
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
    author_Id: "Thomas H.",
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
    author_Id: "Sophie L.",
    images: ["/vert1.jpg", "/vert2.jpg", "/vert3.jpg"],
    totalPrice: 0,
    description:
      "Three days in the Big Apple! This loft was perfectly located and we could walk everywhere. Highly recommend!",
    location: "New York City, NY",
    rating: 4.8,
    likes: 27,
  },
];
