"use server";

import { clerkClient } from "@clerk/nextjs/server";

export async function fetchUser() {
  const client = await clerkClient();
  const user = await client.users.getUserList();
  return JSON.parse(JSON.stringify(user)); // Ensure plain object
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
