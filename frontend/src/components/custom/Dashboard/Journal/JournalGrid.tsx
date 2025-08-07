"use client";
import { format } from "date-fns";
import { Lock, LockOpen, MapPin, Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { JournalType, useJournal } from "./JournalContext";

const JournalGrid = () => {
  const { entries } = useJournal();
  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {entries.map((entry, idx) => (
          <JournalCard key={idx} entry={entry} />
        ))}
        <CreateEntryCard />
      </div>
    </div>
  );
};

const JournalCard = ({ entry }: { entry: JournalType }) => {
  const MAX_LENGTH = 90;
  const safeDescription = entry.description ?? "";
  const isLong = safeDescription.length > MAX_LENGTH;
  const previewText = isLong
    ? safeDescription.slice(0, MAX_LENGTH) + "..."
    : safeDescription;

  const router = useRouter();

  const date = format(new Date(entry.date), "MMMM do, yyyy");

  return (
    <div
      className="border hover:shadow-lg rounded-lg p-4 col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-2 transition-all duration-200 cursor-pointer bg-white dark:bg-[#484848]/50 h-[250px] flex flex-col"
      onClick={() => router.push(`/journal/${entry.id}`)}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="inline-flex items-center gap-x-1">
          {entry.visibility === "PRIVATE" ? (
            <Lock className="w-3 h-3 text-gray-400 dark:text-gray-200" />
          ) : (
            <LockOpen className="w-3 h-3 text-gray-400 dark:text-gray-200" />
          )}
          <p className="text-gray-400 text-sm dark:text-gray-200 capitalize">
            {entry.visibility.toLocaleLowerCase()}
          </p>
        </div>
        <div className="rounded-xl px-2 py-1 font-semibold text-xs border shadow-sm bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
          {entry.photos.length} {entry.photos.length === 1 ? "photo" : "photos"}
        </div>
      </div>

      <h1 className="font-bold text-xl text-stone-950 dark:text-white mb-2 line-clamp-2">
        {entry.title}
      </h1>

      <div className="inline-flex items-center gap-x-1 text-gray-400 dark:text-gray-300 mb-3">
        <MapPin className="w-3 h-3 flex-shrink-0" />
        <h1 className="text-sm truncate">{entry.location}</h1>
      </div>

      {entry.description && (
        <p className="text-sm text-gray-600 dark:text-gray-200 mb-4 leading-relaxed flex-1 overflow-hidden">
          {previewText}
        </p>
      )}

      <div className="flex items-center justify-between mt-auto">
        <p className="text-sm text-gray-500 dark:text-gray-400">{date}</p>
        <span className="px-2 py-1 rounded-lg font-semibold text-xs bg-gray-200 dark:bg-gray-600 dark:text-gray-200">
          {entry.theme}
        </span>
      </div>
    </div>
  );
};

const CreateEntryCard = () => {
  const router = useRouter();
  return (
    <div
      className="col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-2"
      onClick={() => router.push(`/journal/new`)}
    >
      <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 h-[250px] hover:border-gray-400 dark:hover:border-gray-500 transition-colors duration-200 cursor-pointer bg-gray-50/50 dark:bg-[#363636]/50 hover:bg-gray-100/50 dark:hover:bg-[#484848]/50">
        <div className="rounded-lg bg-gray-200 dark:bg-[#121212] p-3 mb-3">
          <Plus className="w-6 h-6 text-gray-600 dark:text-gray-300" />
        </div>
        <h1 className="text-lg font-semibold text-stone-950 dark:text-white mb-1 text-center">
          Create New Entry
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-300 text-center">
          Document your latest adventure
        </p>
      </div>
    </div>
  );
};

export default JournalGrid;
