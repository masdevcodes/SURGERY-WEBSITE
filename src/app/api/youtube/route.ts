import { NextRequest, NextResponse } from 'next/server';

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
const CHANNEL_ID = '@Scalpelsnsuture'; // Scalpels n Suture channel handle

interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  views: string;
  publishedAt: string;
}

interface YouTubeChannelStats {
  subscriberCount: string;
  videoCount: string;
  viewCount: string;
}

interface YouTubeApiResponse {
  videos: YouTubeVideo[];
  channelStats: YouTubeChannelStats;
}

export async function GET(request: NextRequest) {
  if (!YOUTUBE_API_KEY) {
    return NextResponse.json(
      { error: 'YouTube API key not configured' },
      { status: 500 }
    );
  }

  try {
    // Fetch channel statistics
    const channelResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${CHANNEL_ID}&key=${YOUTUBE_API_KEY}`
    );

    if (!channelResponse.ok) {
      throw new Error(`Failed to fetch channel data: ${channelResponse.status} ${channelResponse.statusText}`);
    }

    const channelData = await channelResponse.json();
    
    // Check if channel data exists
    if (!channelData.items || channelData.items.length === 0) {
      throw new Error('Channel not found or no data returned');
    }
    
    // Fetch latest videos from the channel
    const videosResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=4&order=date&type=video&key=${YOUTUBE_API_KEY}`
    );

    if (!videosResponse.ok) {
      throw new Error(`Failed to fetch videos data: ${videosResponse.status} ${videosResponse.statusText}`);
    }

    const videosData = await videosResponse.json();
    
    // Check if videos data exists
    if (!videosData.items || videosData.items.length === 0) {
      console.warn('No videos found for channel');
      // Return channel stats with empty videos array
      const channelStats: YouTubeChannelStats = {
        subscriberCount: formatCount(channelData.items[0]?.statistics?.subscriberCount || '0'),
        videoCount: formatCount(channelData.items[0]?.statistics?.videoCount || '0'),
        viewCount: formatCount(channelData.items[0]?.statistics?.viewCount || '0'),
      };

      const response: YouTubeApiResponse = {
        videos: [],
        channelStats,
      };

      return NextResponse.json(response);
    }

    // Get video details including duration and view count
    const videoIds = videosData.items.map((item: any) => item.id.videoId).join(',');
    const videoDetailsResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=contentDetails,statistics&id=${videoIds}&key=${YOUTUBE_API_KEY}`
    );

    if (!videoDetailsResponse.ok) {
      console.warn('Failed to fetch video details, using basic video info');
    }

    const videoDetailsData = await videoDetailsResponse.json();

    // Format the data
    const channelStats: YouTubeChannelStats = {
      subscriberCount: formatCount(channelData.items[0]?.statistics?.subscriberCount || '0'),
      videoCount: formatCount(channelData.items[0]?.statistics?.videoCount || '0'),
      viewCount: formatCount(channelData.items[0]?.statistics?.viewCount || '0'),
    };

    const videos: YouTubeVideo[] = videosData.items.map((item: any, index: number) => {
      const details = videoDetailsData.items?.[index];
      return {
        id: item.id.videoId,
        title: item.snippet.title,
        description: item.snippet.description,
        thumbnail: item.snippet.thumbnails.high.url,
        duration: formatDuration(details?.contentDetails?.duration || 'PT0S'),
        views: formatCount(details?.statistics?.viewCount || '0'),
        publishedAt: formatDate(item.snippet.publishedAt),
      };
    });

    const response: YouTubeApiResponse = {
      videos,
      channelStats,
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error('YouTube API Error:', error);
    return NextResponse.json(
      { error: `Failed to fetch YouTube data: ${error instanceof Error ? error.message : 'Unknown error'}` },
      { status: 500 }
    );
  }
}

function formatCount(count: string): string {
  const num = parseInt(count);
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
}

function formatDuration(duration: string): string {
  const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
  if (!match) return '0:00';

  const hours = (match[1] || '').replace('H', '');
  const minutes = (match[2] || '').replace('M', '');
  const seconds = (match[3] || '').replace('S', '');

  if (hours) {
    return `${hours}:${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}`;
  }
  return `${minutes || '0'}:${seconds.padStart(2, '0')}`;
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - date.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 1) return '1 day ago';
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} week${Math.floor(diffDays / 7) > 1 ? 's' : ''} ago`;
  if (diffDays < 365) return `${Math.floor(diffDays / 30)} month${Math.floor(diffDays / 30) > 1 ? 's' : ''} ago`;
  return `${Math.floor(diffDays / 365)} year${Math.floor(diffDays / 365) > 1 ? 's' : ''} ago`;
}