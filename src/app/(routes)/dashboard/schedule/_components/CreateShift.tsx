// app/page.tsx or any component
"use client";

import { useState } from "react";

export default function CreateShiftForm() {
  const [shift, setShift] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/shift", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ shift }),
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={shift}
        onChange={(e) => setShift(e.target.value)}
        placeholder="Enter shift"
      />
      <button
        type="submit"
        className="bg-red-500 text-white p-2 rounded-4xl cursor-pointer hover:bg-red-400">
        Create Shift
      </button>
    </form>
  );
}
