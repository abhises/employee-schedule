"use client";
import React, { useState } from "react";
import { createUser } from "../_actions";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const CreateUser = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const create = async () => {
    // Reset errors
    setErrors("");

    // Frontend validation
    if (
      !firstName.trim() ||
      !lastName.trim() ||
      !email.trim() ||
      !password.trim()
    ) {
      setErrors("All fields are required.");
      return;
    }

    if (!email.includes("@")) {
      setErrors("Invalid email format.");
      return;
    }

    if (password.length < 8) {
      setErrors("Password must be at least 8 characters long.");
      return;
    }

    // Proceed if all validations pass
    setIsLoading(true);
    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("email", email);
    formData.append("password", password);

    try {
      const response = await createUser(formData);

      if (response?.user) {
        setIsLoading(false);
        router.push("/dashboard/user");
        toast.success("The user has been created", {
          position: "top-right",
          autoClose: 3000,
        });
      } else {
        setIsLoading(false);
        setErrors(response?.error || "Failed to create user.");
      }
    } catch (error) {
      setIsLoading(false);
      setErrors("An unexpected error occurred.");
      console.log("errors", error);
    }
  };

  return (
    <div className="mt-4">
      <div className="flex items-center justify-center gap-3">
        <h2 className="text-2xl">Create User</h2>
      </div>
      {errors && (
        <div className="text-red-500 text-sm mt-2 text-center">{errors}</div>
      )}
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
            {isLoading ? (
              <>
                <div className="flex items-center justify-center">
                  <svg
                    aria-hidden="true"
                    className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span className="sr-only">Loading...</span>
                </div>
              </>
            ) : (
              "Submit"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
