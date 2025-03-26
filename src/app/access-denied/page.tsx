import { UserButton } from "@clerk/nextjs";
import React from "react";

const page = () => {
  return (
    <div className="flex items-center justify-center h-screen text-red-600 gap-4 m-4 p-4">
      <h1 className="text-3xl">You are not allowed to access here so logout</h1>
      <UserButton />
    </div>
  );
};

export default page;
