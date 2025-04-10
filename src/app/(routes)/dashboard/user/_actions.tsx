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

    // Validation
    if (
      !email?.trim() ||
      !firstName?.trim() ||
      !lastName?.trim() ||
      !password?.trim()
    ) {
      return {
        success: false,
        error: "All fields are required",
        status: 400,
      };
    }

    if (!email.includes("@")) {
      return {
        success: false,
        error: "Invalid email format",
        status: 400,
      };
    }
    if (password.length < 8) {
      return {
        success: false,
        error: "Password must be at least 8 characters long",
        status: 400,
      };
    }

    // Create user
    const user = await client.users.createUser({
      emailAddress: [email.trim()],
      firstName,
      lastName,
      password,
    });

    return {
      success: true,
      message: "User created successfully",
      user: {
        id: user.id,
        email: user.emailAddresses?.[0]?.emailAddress ?? email,
        firstName: user.firstName,
        lastName: user.lastName,
      },
    };
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        error: "Failed to create user",
        details: error.message,
        status: 422,
      };
    }

    return {
      error: "Unknown error occurred",
      status: 500,
    };
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
