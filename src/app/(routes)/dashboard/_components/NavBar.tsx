import { UserButton } from "@clerk/nextjs";
import React from "react";

const NavBar = () => {
  return (
    <div className="p-5 shadow-md border-b flex justify-end">
      <UserButton />
    </div>
  );
};

export default NavBar;
