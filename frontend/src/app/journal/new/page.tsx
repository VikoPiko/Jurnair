"use client";
import { useJournal } from "@/components/custom/Dashboard/Journal/JournalContext";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const { addEntry } = useJournal();
  const router = useRouter();
  //testing
  const handleSubmit = () => {
    const newEntry = {
      entryId: "rf98h23",
      title: "Testing New Entries",
      location: "Test Location",
      entryContent:
        "was amazing and pleasant. would definitely visit again, super fun and exciting especially seeing the mountains this close up in person. Definitely would recommend catching the sunrise!!",
      date: new Date().toISOString(),
      theme: "Travel",
      photos: [],
      visibility: "public",
    };
    addEntry(newEntry);
    router.push("/?tab=My+Journal");
  };
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link
            href="/?tab=My+Journal"
            className="flex items-center gap-2 text-sm font-medium hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Journal
          </Link>
        </div>
      </header>

      <main></main>
    </div>
  );
};

export default page;
