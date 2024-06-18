import { connectMongoDB } from "@/lib/mongodb";
import Tracker from "@/models/Trackers";

export async function GET(request) {
  await connectMongoDB();

  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("userId");

  const trackers = await Tracker.find({ userId });

  return NextResponse.json({ trackers }, { status: 200 });
}
