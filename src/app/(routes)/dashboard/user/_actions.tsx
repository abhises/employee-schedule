"use server";

import { clerkClient } from "@clerk/nextjs/server";

export async function fetchUser() {
  const client = await clerkClient();
  const user = await client.users.getUserList();
  return JSON.parse(JSON.stringify(user)); // Ensure plain object
}

export async function createUser(formData: FormData) {
  try {
    const client = await clerkClient();
    const email = formData.get("email") as string | null;
    const firstName = formData.get("firstName") as string | null;
    const lastName = formData.get("lastName") as string | null;
    const password = formData.get("password") as string | null;
    // console.log("email", email);
    // Validation
    if (!email || !firstName || !lastName || !password) {
      return Response.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Create user
    const user = await client.users.createUser({
      emailAddress: [email.trim()], // Ensure email is an array
      firstName,
      lastName,
      password,
    });

    return Response.json({ message: "User created successfully", user });
  } catch (error) {
    console.error("Clerk Error:", error);
    return error;
  }
}

export async function deleteUser(userId: string) {
  try {
    const client = await clerkClient();
    if (!userId) throw new Error("User ID is required");
    await client.users.deleteUser(userId);
  } catch (error) {
    console.log(error);
  }
}
