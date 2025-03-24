import { UserButton } from "@clerk/nextjs";
import React from "react";

const page = () => {
  return (
    <div className="flex items-center justify-center h-screen text-red-600">
      <h1>
        You are not allowed to access here so logout <UserButton />
      </h1>
    </div>
  );
};

export default page;
