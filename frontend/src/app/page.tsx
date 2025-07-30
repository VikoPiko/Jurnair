// "use client";
import Dashboard from "@/components/custom/Dashboard/Dashboard";
import PageContent from "@/components/custom/PageContent";
import Sidebar from "@/components/custom/Sidebar/Sidebar";
import { getListings } from "@/lib/actions/serverActions";

import React, { useState } from "react";

const page = async () => {
  const rawListings = await getListings();
  const listings = rawListings.map((l: any) => ({ listing: l }));

  return (
    // <div className="grid gap-4 p-4 grid-cols-[200px_1fr]">
    //   <Sidebar />

    //   {/* <Dashboard onViewChange={setActiveView} /> */}
    //   <Dashboard listings={listings} />
    // </div>
    <PageContent listings={listings} />
  );
};

export default page;
