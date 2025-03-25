"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { menuItems } from "./menu";
import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useSideBar } from "../_context/SideBarContext";

const SideBar = () => {
  const pathName = usePathname();
  useEffect(() => {}, [pathName]);
  const { setIsOpen } = useSideBar();
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
          <Link href={menu.path} key={index}>
            {" "}
            <h1
              className={`flex items-center gap-2 text-white font-medium
         p-3 cursor-pointer rounded-md hover:text-amber-200 hover:bg-red-800 ${
           pathName === menu.path && "text-amber-200 bg-red-800 m-2"
         }`}
              key={index}
              onClick={() => setIsOpen(false)}>
              <menu.icon /> {/* ✅ Render icon properly */}
              {menu.name}
            </h1>
          </Link>
        ))}
      </div>
      <div
        className="fixed bottom-15 flex p-5 
      gap-2 text-white
       items-center">
        <UserButton />
        Profile
      </div>
    </div>
  );
};

export default SideBar;
