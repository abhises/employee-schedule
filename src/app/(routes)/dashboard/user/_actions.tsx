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

    if (!email) {
      throw new Error("Email is required");
    }
    const user = await client.users.createUser({
      emailAddress: [email],
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      password: formData.get("password") as string,
    });
    return Response.json({ message: "User created", user });
  } catch (error) {
    console.log(error);
    return Response.json({ error: "Error creating user" });
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
