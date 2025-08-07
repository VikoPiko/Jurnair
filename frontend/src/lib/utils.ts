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
