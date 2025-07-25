"use client";
import Dashboard from "@/components/custom/Dashboard/Dashboard";
import Sidebar from "@/components/custom/Sidebar/Sidebar";

import React, { useState } from "react";

const page = () => {
  const [activeView, setActiveView] = useState<"listings" | "posts">(
    "listings"
  );
  return (
    <div className="grid gap-4 p-4 grid-cols-[200px_1fr]">
      <Sidebar />

      <Dashboard onViewChange={setActiveView} />
    </div>
  );
};

export default page;
