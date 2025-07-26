import { ListingType } from "@/lib/utils";
import ListingCard from "./ListingCard";

interface ListingsGridProps {
  listings: ListingType[];
}

export function ListingsGrid({ listings }: ListingsGridProps) {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-10">
      {listings.map((listing) => (
        <ListingCard key={listing.id} {...listing} />
      ))}
    </div>
  );
}
