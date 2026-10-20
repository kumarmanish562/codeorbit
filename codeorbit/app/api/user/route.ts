
import { db } from "@/config/db";
import { usersTable } from "@/config/schema";
import { currentUser } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    // Get the currently authenticated Clerk user
    const user = await currentUser();

    if (!user) {
      return NextResponse.json(
        { error: "Unauthorized. Please sign in." },
        { status: 401 }
      );
    }

    const email = user.primaryEmailAddress?.emailAddress;

    if (!email) {
      return NextResponse.json(
        { error: "Your account does not have a primary email address." },
        { status: 400 }
      );
    }

    // Check whether the user already exists
    const existingUsers = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.email, email))
      .limit(1);

    if (existingUsers.length > 0) {
      return NextResponse.json(
        {
          message: "User already exists",
          user: existingUsers[0],
        },
        { status: 200 }
      );
    }

    // Create a new database user
    const newUserData = {
      name: user.fullName || "Anonymous",
      email,
      points: 0,
      subscription: "free",
    };

    const [newUser] = await db
      .insert(usersTable)
      .values(newUserData)
      .returning();

    return NextResponse.json(
      {
        message: "User created successfully",
        user: newUser,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Create user API error:", error);

    return NextResponse.json(
      { error: "Internal server error while creating user." },
      { status: 500 }
    );
  }
}