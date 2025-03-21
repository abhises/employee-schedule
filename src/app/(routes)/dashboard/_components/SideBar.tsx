"use client";
import Image from "next/image";
import React from "react";
import { menuItems } from "./menu";

const SideBar = () => {
  return (
    <div className="h-screen p-5">
      <div className="flex items-center justify-center">
        <Image
          src={"/clock.png"}
          height={100}
          width={100}
          className="rounded-full"
          alt="logo"
        />
      </div>
      <div className="mt-20 gap-3">
        {menuItems.map((menu, index) => (
          <h1
            className="flex items-center gap-2 text-white font-medium
             p-3 cursor-pointer rounded-md hover:text-amber-200 hover:bg-red-800"
            key={index}>
            <menu.icon /> {/* ✅ Render icon properly */}
            {menu.name}
          </h1>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
