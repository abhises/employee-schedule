"use client";
import React from "react";
import { useSideBar } from "./_context/SideBarContext";

const DashboardPage = () => {
  const { user } = useSideBar();
  return (
    <div>
      <div className="m-4">
        <h2 className="text-4xl ">Dashboard</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 m-4 h-40">
        <div className="bg-red-400 rounded-xl h-40">
          <div className="p-4">
            <span className="text-white text-2xl">Total User</span>
          </div>
          <div className="flex justify-center items-center ">
            <h1 className="text-white text-6xl">{user.length - 1}</h1>
          </div>
        </div>
        <div className="bg-red-400 rounded-xl h-40">hello</div>
        <div className="bg-red-400 rounded-xl h-40">hello</div>
        <div className="bg-red-400 rounded-xl h-40">hello</div>
      </div>
    </div>
  );
};

export default DashboardPage;
