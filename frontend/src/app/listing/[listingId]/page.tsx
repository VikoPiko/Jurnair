import ListingCard from "@/components/custom/Dashboard/Listings/ListingCard";
import ListingPage from "@/components/custom/Dashboard/Listings/ListingDetail/ListingPage";
import { ListingsGrid } from "@/components/custom/Dashboard/Listings/ListingsGrid";
import { SAMPLE_LISTINGS } from "@/lib/utils";
import React from "react";

const page = async ({ params }: { params: Promise<{ listingId: string }> }) => {
  const listingId = (await params).listingId;
  const listings = SAMPLE_LISTINGS;

  const filteredListing = listings.filter(
    (listing) => listing.id === listingId
  );

  return (
    <div>
      <ListingPage listing={filteredListing[0]} />
    </div>
  );
};

export default page;
