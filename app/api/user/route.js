import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function GET() {
  await connectMongoDB();
  const users = await User.find();

  return NextResponse.json({ users }, { status: 200 });
}
