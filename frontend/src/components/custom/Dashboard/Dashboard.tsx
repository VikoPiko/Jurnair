"use client";
import React, { useState } from "react";
import TopNav from "./TopNav";
import {
  cn,
  ListingDetailProps,
  SAMPLE_LISTINGS,
  // SAMPLE_LISTINGS,
  SAMPLE_POSTS,
} from "@/lib/utils";
import { ViewToggle } from "./ViewToggle";
import { ListingsGrid } from "./Listings/ListingsGrid";
import PostsBox from "./Posts/PostsBox";
import { getListings } from "@/lib/actions/serverActions";

type DashboardTest = {
  listings: ListingDetailProps[];
  selectedTab: string;
};

type ListingDetailsType = {
  listings: ListingDetailProps[];
};
const Dashboard = ({ listings, selectedTab }: DashboardTest) => {
  const [activeView, setActiveView] = useState<"listings" | "posts">(
    "listings"
  );

  const [searchQuery, setSearchQuery] = useState("");
  const posts = SAMPLE_POSTS;

  const filteredListings = listings.filter((l) =>
    l.listing.location?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white rounded-lg p-3 shadow-lg">
      <TopNav onSearch={setSearchQuery} onClear={() => setSearchQuery("")} />

      <div>
        {selectedTab === "Home" && (
          <div>
            <div className="flex items-center justify-end mr-4">
              <ViewToggle onViewChange={setActiveView} />
            </div>
            <div className="flex flex-col items-center justify-center text-2xl gap-2 m-3">
              {activeView === "listings" ? (
                <ListingsGrid listings={filteredListings} />
              ) : (
                <PostsBox posts={posts} />
              )}
            </div>
          </div>
        )}
        {selectedTab === "Favorites" && <div>Favorites</div>}
        {selectedTab === "Settings" && <div>Settings</div>}
      </div>
    </div>
  );
};

export default Dashboard;
