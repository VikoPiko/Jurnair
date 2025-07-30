"use client";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { like } from "@/lib/actions/serverActions";
import { cn, ListingDetailProps, ListingType } from "@/lib/utils";
import { Heart } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const ListingCard = ({ listing }: ListingDetailProps) => {
  const [expanded, setExpanded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(listing.is_favorite);
  const MAX_LENGTH = 90;
  const safeDescription = listing.description ?? "";
  const isLong = safeDescription.length > MAX_LENGTH;
  const previewText = isLong
    ? safeDescription.slice(0, MAX_LENGTH) + "..."
    : safeDescription;

  const router = useRouter();

  const handleLike = async (listingId: string) => {
    setIsFavorite(!isFavorite);
    like(listingId);
  };

  return (
    <div
      className="group relative flex flex-col overflow-hidden rounded-3xl border bg-background transition-all shadow-md hover:shadow-lg hover:cursor-pointer"
      onClick={() => router.push(`/listing/${listing.id}`)}
    >
      <div className="relative aspect-square overflow-hidden">
        <Carousel className="w-full">
          <CarouselContent>
            {listing.images && listing.images.length > 0 ? (
              listing.images.map((img, idx) => (
                <CarouselItem key={idx}>
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      //   src={img || "/boston1.jpg"}
                      src={"/boston1.jpg"}
                      alt={`${listing.title} - image ${idx + 1}`}
                      fill
                      className="object-cover transition-transform"
                    />
                  </div>
                </CarouselItem>
              ))
            ) : (
              <CarouselItem>
                <div className="relative aspect-square overflow-hidden bg-muted">
                  <Image
                    src={"/boston1.jpg?height-500&width=500"}
                    alt="placeholder"
                    fill
                    className="object-cover"
                  />
                </div>
              </CarouselItem>
            )}
          </CarouselContent>
          <CarouselPrevious className="left-2 opacity-0 transition-opacity group-hover:opacity-100" />
          <CarouselNext className="right-2 opacity-0 transition-opacity group-hover:opacity-100" />
        </Carousel>
        <Button
          variant={"ghost"}
          size={"icon"}
          className={cn(
            "absolute right-2 top-2 z-10 rounded-full bg-background/80 backdrop-blur-sm transition-all hover:bg-background",
            isFavorite ? "text-rose-500" : "text-muted-foreground"
          )}
          onClick={(e) => {
            handleLike(listing.id);
            e.stopPropagation();
          }}
        >
          <Heart className={cn("h-5 w-5", isFavorite && "fill-rose-500")} />
          <span className="sr-only">Add to favorites</span>
        </Button>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <div className="mb-2 flex items-start justify-between">
          <h3 className="font-medium line-clamp-1">{listing.title}</h3>
          <div className="flex items-center gap-1 text-sm">
            <span>★</span>
            <span>{listing.rating}</span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">{listing.location}</p>
        <p className="text-sm text-muted-foreground">{listing.property}</p>

        {listing.description && (
          <div className="mt-2 text-sm text-muted-foreground">
            <p>{expanded || !isLong ? safeDescription : previewText}</p>
            {isLong && (
              <button
                onClick={() => setExpanded((prev) => !prev)}
                className="mt-1 text-xs font-medium text-primary hover:underline"
              >
                {expanded ? "View less" : "View more"}
              </button>
            )}
          </div>
        )}
        <div className="mt-auto p-2 -mb-2">
          <p className="font-medium flex items-center gap-x-1">
            <span className="text-lg">${listing.price_per_night}</span>
            <span className="text-sm text-muted-foreground"> night</span>
          </p>
          <p>Is fav: {listing.is_favorite}</p>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
