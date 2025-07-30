import ListingCard from "@/components/custom/Dashboard/Listings/ListingCard";
import ListingPage from "@/components/custom/Dashboard/Listings/ListingDetail/ListingPage";
import { ListingsGrid } from "@/components/custom/Dashboard/Listings/ListingsGrid";
import { getListings } from "@/lib/actions/serverActions";
import React from "react";

const page = async ({ params }: { params: Promise<{ listingId: string }> }) => {
  const listingId = (await params).listingId;
  const listings = await getListings();

  const filteredListing = listings.filter(
    (listing: any) => listing.id === listingId
  );

  return (
    <div>
      <ListingPage listing={filteredListing[0]} />
    </div>
  );
};

export default page;
