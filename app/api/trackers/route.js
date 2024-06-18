import { connectMongoDB } from "@/lib/mongodb";
import Tracker from "@/models/Trackers";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { userId, amount, eventCome, devise, desc } = await req.json();
  await connectMongoDB();
  await Tracker.create({ userId, amount, eventCome, devise, desc });

  return NextResponse.json({ message: "Data registered" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();

  const trackers = await Tracker.find();

  return NextResponse.json({ trackers }, { status: 200 });
}

export async function DELETE(req) {
  const id = req.nextUrl.searchParams.get("id");
  console.log(id);

  await connectMongoDB();

  const event = await Tracker.findByIdAndDelete(id);

  if (event) {
    return NextResponse.json({ message: "Data is deleted" }, { status: 201 });
  } else {
    return NextResponse.json({ message: "Something went wrong :(" });
  }
}
