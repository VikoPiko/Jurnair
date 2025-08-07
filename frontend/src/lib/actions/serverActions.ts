"use server";

export const getListings = async () => {
  // const listings = SAMPLE_LISTINGS;
  const res = await fetch("http://localhost:3000/api/listings");
  if (!res.ok) throw new Error("Failed to fetch");

  const listings = await res.json();
  return listings;
};

export const getEntries = async () => {
  // const listings = SAMPLE_LISTINGS;
  const res = await fetch("http://localhost:3001/journal/all");
  if (!res.ok) throw new Error("Failed to fetch entries");

  const entries = await res.json();
  return entries;
};

export const getEntry = async (id: string) => {
  try {
    const res = await fetch(`http://localhost:3001/journal/entry/${id}`);
    if (!res.ok) {
      throw new Error("Failed to fetch Entry");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(`Error:`, error);
  }
};

export const like = async (listingId: string) => {
  const res = await fetch("http://localhost:3000/api/listings/like", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ listingId }),
  });

  if (!res.ok) throw new Error("Failed to toggle like from SA");

  const updatedListing = await res.json();
  return updatedListing;
};

export const getGoHello = async () => {
  const res = await fetch("http://localhost:8080/hello");
  if (!res.ok) throw new Error("Failed to get GO request");

  const response = await res.json();
  return response.message;
};
