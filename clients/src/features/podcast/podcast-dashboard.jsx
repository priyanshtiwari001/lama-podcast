import Sidebar from "@/components/side-bar";
import Header from "@/components/podcast-header";
import { useState } from "react";
import { Outlet, useLocation } from "react-router";

const PodcastDashboard = () => {
  const [isSideOpen, setIsSideOpen] = useState(false);
  return (
    <div className="flex flex-col lg:flex-row bg-gray-50 min-h-screen text-gray-800">
       <div>
         <Sidebar isSideOpen={isSideOpen}  setIsSideOpen={setIsSideOpen} />
       </div>


      <div className="flex-1 p-4 sm:p-6 lg:p-7 max-w-6xl lg:ml-72">
        <Header isSideOpen={isSideOpen} setIsSideOpen={setIsSideOpen} />
             <Outlet/>
      </div>
    </div>
  );
};

export default PodcastDashboard;
