import { MapComponent } from "@/components/custom/Map/map";
import React from "react";

const page = () => {
  return (
    <div className="w-[50vw] flex items-center justify-center translate-x-1/2 translate-y-1/2">
      <div className="w-full h-[50vh] rounded-lg border p-3 shadow-xl">
        {/* Give the map wrapper a fixed height */}
        {/* <div className="w-full h-full"> */}
        <MapComponent coordinates={{ lat: 43.850819, lng: 25.9993 }} />
        {/* </div> */}
      </div>
    </div>
  );
};

export default page;
