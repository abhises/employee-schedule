"use client";

import React from "react";
import MyCalendar from "./Calendar";
import { useRouter } from "next/navigation";
import { useSideBar } from "../_context/SideBarContext";

const SchedulePage = () => {
  const router = useRouter();
  const { isOpen } = useSideBar();
  return (
    <div className={`${isOpen ? "hidden md:block" : ""} `}>
      <div className="m-4 flex justify-between">
        <h2 className="text-4xl ">Schedule</h2>
        <button
          className="bg-blue-800  hover:bg-blue-500 px-5 max-h-[40] rounded-3xl text-white cursor-pointer"
          onClick={() => router.push("/dashboard/schedule/create")}>
          Create Shifts
        </button>
      </div>
      <MyCalendar />
    </div>
  );
};

export default SchedulePage;
