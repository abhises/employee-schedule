"use client";
import { UserButton } from "@clerk/nextjs";
import React from "react";
import { AlignJustify } from "lucide-react";
import { useSideBar } from "../_context/SideBarContext";

const NavBar = () => {
  const { toggleSidebar } = useSideBar();
  return (
    <div className="p-5 shadow-md border-b flex justify-between">
      <div className="">
        <AlignJustify
          className="cursor-pointer md:hidden"
          onClick={toggleSidebar}
        />
      </div>
      <UserButton />
    </div>
  );
};

export default NavBar;
