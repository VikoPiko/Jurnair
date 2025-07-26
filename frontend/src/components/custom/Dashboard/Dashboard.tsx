"use client";
import React, { useState } from "react";
import TopNav from "./TopNav";
import { cn, SAMPLE_LISTINGS, SAMPLE_POSTS } from "@/lib/utils";
import { ViewToggle } from "./ViewToggle";
import { ListingsGrid } from "./Listings/ListingsGrid";
import PostsBox from "./Posts/PostsBox";

interface ViewToggleProps {
  onViewChange: (view: "listings" | "posts") => void;
}

const Dashboard = ({ onViewChange }: ViewToggleProps) => {
  const [activeView, setActiveView] = useState<"listings" | "posts">(
    "listings"
  );
  const [searchQuery, setSearchQuery] = useState("");

  const listings = SAMPLE_LISTINGS;
  const posts = SAMPLE_POSTS;

  const filteredListings = listings.filter((l) =>
    l.location?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white rounded-lg p-3 shadow">
      <TopNav onSearch={setSearchQuery} onClear={() => setSearchQuery("")} />
      <div className="flex items-center justify-end mr-4">
        <ViewToggle onViewChange={setActiveView} />
      </div>

      <div className="flex flex-col items-center justify-center text-2xl gap-2 m-3">
        {/* <h1>{activeView}</h1> */}
        {/* <ListingsGrid activeView={activeView} /> */}
        {activeView === "listings" ? (
          <ListingsGrid listings={filteredListings} />
        ) : (
          <PostsBox posts={posts} />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
