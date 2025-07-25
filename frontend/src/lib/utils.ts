import { PostsType } from "@/components/custom/Dashboard/Listings/ListingCard";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type Host = {
  userId: string;
  properties?: string[];
};

export type PostType = {
  title?: string;
  content?: string;
  authorId: string;
  property: string;
  images?: string[];
  rating?: number;
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

interface ListingType {
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

export const SAMPLE_LISTINGS: ListingType[] = [
  {
    id: "1",
    title: "Modern Beachfront Villa",
    property: "Entire villa",
    authorId: "John D.",
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
  },
  {
    id: "2",
    title: "Cozy Mountain Cabin",
    property: "Entire cabin",
    authorId: "Sarah M.",
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
  },
  {
    id: "3",
    title: "Downtown Luxury Loft",
    property: "Entire loft",
    authorId: "Michael B.",
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
  },
  {
    id: "4",
    title: "Seaside Cottage",
    property: "Entire cottage",
    authorId: "Emma L.",
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
  },
  {
    id: "5",
    title: "Desert Oasis Villa",
    property: "Entire villa",
    authorId: "David R.",
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
  },
  {
    id: "6",
    title: "Lakefront Cabin",
    property: "Entire cabin",
    authorId: "Jessica T.",
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
  },
  {
    id: "7",
    title: "Historic Townhouse",
    property: "Entire townhouse",
    authorId: "Robert K.",
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
  },
  {
    id: "8",
    title: "Tropical Bungalow",
    property: "Entire bungalow",
    authorId: "Lisa M.",
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
  },
  {
    id: "9",
    title: "City Center Apartment",
    property: "Entire apartment",
    authorId: "Alex P.",
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
  },
  {
    id: "10",
    title: "Wine Country Estate",
    property: "Entire estate",
    authorId: "Maria S.",
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
