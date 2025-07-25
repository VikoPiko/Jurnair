import ListingCard, { ListingType } from "./ListingCard";

interface ListingsGridProps {
  listings: ListingType[];
}

export function ListingsGrid({ listings }: ListingsGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {listings.map((listing) => (
        <ListingCard key={listing.id} {...listing} />
      ))}
    </div>
  );
}
