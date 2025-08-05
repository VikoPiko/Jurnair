"use client";

import { Button } from "@/components/ui/button";
import { like } from "@/lib/actions/serverActions";
import { cn, ListingDetailProps } from "@/lib/utils";
import { Heart } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const ListCard = ({ listing }: ListingDetailProps) => {
  const [isFavorite, setIsFavorite] = useState(listing.is_favorite);
  const router = useRouter();

  const handleLike = async (listingId: string) => {
    setIsFavorite(!isFavorite);
    like(listingId);
  };

  return (
    <div
      className="group cursor-pointer"
      onClick={() => router.push(`/listing/${listing.id}`)}
    >
      <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-2">
        {listing.images && (
          <>
            <Image
              src={listing.images[0] || "/placeholder.svg"}
              alt={`${listing.title} listing image`}
              fill
              className="object-cover "
            />
            <div className="absolute top-3 right-3 z-10">
              {/* <Heart
                className={cn(
                  "w-5 h-5 text-white hover:text-red-500 transition-colors cursor-pointer drop-shadow-sm",
                  isFavorite && "fill-rose-500 text-rose-500 hover:text-white"
                )}
              /> */}
              <Button
                variant={"ghost"}
                size={"icon"}
                className={cn(
                  "absolute right-0 top-0 z-10 rounded-full backdrop-blur-xs ",
                  isFavorite
                    ? "text-rose-500 hover:text-white"
                    : "text-white hover:text-red-500"
                )}
                onClick={(e) => {
                  handleLike(listing.id);
                  e.stopPropagation();
                }}
              >
                <Heart
                  className={cn(
                    "w-5 h-5 drop-shadow-sm transition-colors",
                    isFavorite && "fill-rose-500"
                  )}
                />
                <span className="sr-only">Add to favorites</span>
              </Button>
            </div>
          </>
        )}
      </div>
      <div className="space-y-1">
        <h2 className="font-semibold text-lg text-stone-950 dark:text-gray-50 truncate">
          {listing.title}
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Aug 29-31 · {listing.location}
        </p>
        <p className="text-sm font-medium text-stone-950 dark:text-gray-100">
          {listing.price_per_night} лв. night · ⭐ {listing.rating}
        </p>
      </div>
    </div>
  );
};
