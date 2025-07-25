"use client";
import React, { useState } from "react";
import TopNav from "./TopNav";
import { cn, SAMPLE_LISTINGS, SAMPLE_POSTS } from "@/lib/utils";
import { Home, MessageSquare } from "lucide-react";
import { ViewToggle } from "./ViewToggle";
import { ListingsGrid } from "./Listings/ListingsGrid";
import { PostCard } from "./Posts/PostsCard";
import PostsBox from "./Posts/PostsBox";
// import { ListingsGrid } from "./custom-listing";

interface ViewToggleProps {
  onViewChange: (view: "listings" | "posts") => void;
}

const Dashboard = ({ onViewChange }: ViewToggleProps) => {
  const [activeView, setActiveView] = useState<"listings" | "posts">(
    "listings"
  );
  const listings = SAMPLE_LISTINGS;
  const posts = SAMPLE_POSTS;
  return (
    <div className=" bg-white rounded-lg p-3 shadow">
      <TopNav />
      <div className="flex items-center justify-end mr-4">
        <ViewToggle onViewChange={setActiveView} />
      </div>

      <div className="flex flex-col items-center justify-center text-2xl gap-2 m-3">
        {/* <h1>{activeView}</h1> */}
        {/* <ListingsGrid activeView={activeView} /> */}
        {activeView === "listings" ? (
          <ListingsGrid listings={listings} />
        ) : (
          <PostsBox posts={posts} />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
