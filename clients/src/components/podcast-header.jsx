import React from "react";
import { Bell } from "lucide-react";
import SignOutButton from "@/features/auth/sign-out-btn";
import Breadcrumbs from "./breadcumbs";
import MobileSidebarToggle from "./mobileview-sidebar";

const Header = ({setIsSideOpen,isSideOpen}) => {
  return (
    <div className="flex justify-between items-center mb-4 gap-2">
      {/* Mobile view navbar */}
      <MobileSidebarToggle isSideOpen={isSideOpen} setIsSideOpen={setIsSideOpen} />
      {/* Breadcrumb */}
      {<Breadcrumbs/>}

      {/* Icons */}
        <div className="hidden lg:flex items-center gap-6">
        <div className="border-2 px-3 py-3 rounded-full border-gray-300 shadow">
          <Bell className="w-6 h-6 cursor-pointer " />
        </div>
        <SignOutButton />
      </div>
    </div>
  );
};

export default Header;
