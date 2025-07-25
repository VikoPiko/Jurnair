"use client";
import React, { useState } from "react";
import { ListingType, PostsType } from "../Listings/ListingCard";
import { PostCard } from "./PostsCard";

interface PostsProps {
  posts: PostsType[];
}

const PostsBox = ({ posts }: PostsProps) => {
  return (
    <div className="flex flex-1 flex-col max-w-[40vw] gap-10">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostsBox;
