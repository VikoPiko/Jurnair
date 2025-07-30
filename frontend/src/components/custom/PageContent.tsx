"use client";

import { useState } from "react";
import Sidebar from "./Sidebar/Sidebar";
import Dashboard from "./Dashboard/Dashboard";

const PageContent = ({ listings }: { listings: any[] }) => {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <div className="mx-2">
      <Sidebar selectedTab={selectedTab} onTabChange={setSelectedTab} />
      <div className="ml-[205px] p-4">
        <Dashboard listings={listings} selectedTab={selectedTab} />
      </div>
    </div>
  );
};

export default PageContent;
