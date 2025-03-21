"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Header = () => {
  const router = useRouter();
  return (
    <div className="px-8 mt-2 flex flex-col gap-4 mb-2 md:flex-row items-center justify-between ">
      <Image
        className="rounded-full"
        src={"/clock.png"}
        height={100}
        width={100}
        alt="logo"
      />
      <Button
        onClick={() => router.push("/sign-in")}
        size="lg"
        className="p-6 text-2xl cursor-pointer bg-rose-500 hover:bg-rose-400 rounded-xl">
        Get Started
      </Button>
    </div>
  );
};

export default Header;
