"use server";

export type JournalEntry = {
  title: string;
  location: string;
  description?: string;
  date: string;
  theme: string;
  photos: string[];
  visibility: "PRIVATE" | "PUBLIC";
};

export const createEntry = async (entry: JournalEntry, token: string) => {
  const res = await fetch("http://localhost:3001/journal/new-entry", {
    method: "POST",
    body: JSON.stringify(entry),
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
    },
  });

  if (!res.ok) {
    console.error("Failed to create Entry. Status:", res.status);
    return null;
  }

  try {
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Error parsing response JSON:", err);
    return null;
  }
};
