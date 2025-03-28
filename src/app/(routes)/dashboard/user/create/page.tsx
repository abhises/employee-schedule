"use client";
import React, { useState } from "react";
import { createUser } from "../_actions";
import { useRouter } from "next/navigation";

const CreateUser = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const create = async () => {
    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("email", email);
    formData.append("password", password);
    try {
      const response = await createUser(formData);
      console.log("response", response);

      router.push("/dashboard/user");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="mt-4">
      <div className="flex items-center justify-center gap-3">
        <h2 className="text-2xl">Create User</h2>
      </div>
      <div className="flex items-center justify-center">
        <div
          className="border-gray-400 shadow-lg
       flex-col p-7 mb-10 gap-10">
          <div className="mt-4">
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
              className="p-2 rounded-2xl border-2 "
            />
          </div>

          <div className="mt-4">
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
              className="p-2 rounded-2xl border-2"
            />
          </div>

          <div className="mt-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="p-2 rounded-2xl border-2"
            />
          </div>

          <div className="mt-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="p-2 rounded-2xl border-2"
            />
          </div>

          <button
            className="bg-blue-800 rounded-2xl
             w-full mt-4 p-1 text-white
              cursor-pointer
               hover:bg-blue-400"
            onClick={create}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
