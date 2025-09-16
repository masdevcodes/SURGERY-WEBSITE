// /app/api/youtube/route.ts
import { NextResponse } from 'next/server';

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY!; // Put in .env.local
const CHANNEL_ID = "UCWISGPepD4vZGRMf4A-tUJA"; // Replace with your channel's ID

export async function GET() {
  try {
    // Fetch channel stats
    const statsRes = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${CHANNEL_ID}&key=${YOUTUBE_API_KEY}`
    );
    const statsData = await statsRes.json();

    // Fetch latest 4 uploads
    const uploadsRes = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=4`
    );
    const uploadsData = await uploadsRes.json();

    const channelStats = {
      subscriberCount: statsData.items[0].statistics.subscriberCount,
      videoCount: statsData.items[0].statistics.videoCount,
      viewCount: statsData.items[0].statistics.viewCount,
    };

    const latestVideos = uploadsData.items.map((video: any) => ({
      id: video.id.videoId,
      title: video.snippet.title,
      thumbnail: video.snippet.thumbnails.medium.url,
    }));

    return NextResponse.json({ channelStats, latestVideos });
  } catch (error) {
    console.error("YouTube API error", error);
    return NextResponse.json({ error: "Failed to fetch YouTube data" }, { status: 500 });
  }
}
