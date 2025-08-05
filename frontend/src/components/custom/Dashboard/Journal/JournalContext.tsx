"use client";
import { createContext, useContext, useState } from "react";

export type JournalType = {
  entryId: string;
  title: string;
  location: string;
  entryContent: string;
  date: string;
  theme: string;
  photos: string[];
  visibility: string;
};

type JournalContextType = {
  entries: JournalType[];
  addEntry: (entry: JournalType) => void;
};

const JournalContext = createContext<JournalContextType | undefined>(undefined);

const initialEntries: JournalType[] = [
  {
    entryId: "1a2b3c4d",
    title: "Sunset at Cappadocia",
    location: "Göreme, Turkey",
    entryContent:
      "Today was magical. We woke up at dawn to catch the hot air balloons rise over the rocky landscape. The view was unlike anything I’ve ever seen — surreal, peaceful, and vibrant. I felt like I was floating even from the ground.",
    date: "2025-08-01",
    theme: "Travel",
    photos: [
      "https://example.com/photos/cappadocia1.jpg",
      "https://example.com/photos/cappadocia2.jpg",
      "https://example.com/photos/cappadocia2.jpg",
      "https://example.com/photos/cappadocia2.jpg",
      "https://example.com/photos/cappadocia2.jpg",
      "https://example.com/photos/cappadocia2.jpg",
      "https://example.com/photos/cappadocia2.jpg",
      "https://example.com/photos/cappadocia2.jpg",
    ],
    visibility: "public",
  },
  {
    entryId: "5e6f7g8h",
    title: "A Quiet Day at Home",
    location: "Sofia, Bulgaria",
    entryContent:
      "Spent the day indoors reflecting and journaling. Brewed some coffee, lit a candle, and read a few chapters of a new book. Sometimes the most ordinary days bring the most clarity.",
    date: "2025-07-28",
    theme: "Personal",
    photos: [],
    visibility: "private",
  },
  // {
  //   entryId: "9i0j1k2l",
  //   title: "Beachside Thoughts",
  //   location: "Varna, Bulgaria",
  //   entryContent:
  //     "Walked along the shoreline as the waves crashed gently beside me. The air smelled like salt and freedom. It made me think about how far I’ve come this year, and how much more I want to explore.",
  //   date: "2025-06-15",
  //   theme: "Reflection",
  //   photos: ["https://example.com/photos/varna_beach.jpg"],
  //   visibility: "friends",
  // },
];

export const JournalProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [entries, setEntries] = useState<JournalType[]>(initialEntries);

  const addEntry = (entry: JournalType) => {
    setEntries((prev) => [entry, ...prev]);
  };

  return (
    <JournalContext.Provider value={{ entries, addEntry }}>
      {children}
    </JournalContext.Provider>
  );
};

export const useJournal = () => {
  const context = useContext(JournalContext);
  if (!context) throw new Error("Must be used within a Journal Provider");
  return context;
};
