import { NextRequest, NextResponse } from 'next/server';

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
const YOUTUBE_CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID;

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
    console.warn('YouTube API key not found - using fallback data');
    return NextResponse.json(getFallbackData());
  }

  if (YOUTUBE_API_KEY === 'AIzaSyDummy_Replace_With_Your_Actual_API_Key' || YOUTUBE_API_KEY.includes('Dummy') || YOUTUBE_API_KEY.includes('Replace') || YOUTUBE_API_KEY.includes('your_youtube_api_key_here')) {
    console.warn('YouTube API key is still set to placeholder - using fallback data');
    return NextResponse.json(getFallbackData());
  }

  if (!YOUTUBE_CHANNEL_ID) {
    console.warn('YouTube Channel ID not found - using fallback data');
    return NextResponse.json(getFallbackData());
  }

  if (YOUTUBE_CHANNEL_ID === 'UCDummy_Replace_With_Your_Actual_Channel_ID' || YOUTUBE_CHANNEL_ID.includes('Dummy') || YOUTUBE_CHANNEL_ID.includes('Replace') || YOUTUBE_CHANNEL_ID.includes('your_youtube_channel_id_here')) {
    console.warn('YouTube Channel ID is still set to placeholder - using fallback data');
    return NextResponse.json(getFallbackData());
  }

  // Test API key first with a simple request
  try {
    const testResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=test&type=channel&maxResults=1&key=${YOUTUBE_API_KEY}`
    );
    
    if (!testResponse.ok) {
      const errorText = await testResponse.text();
      console.error('API Key Test Failed:', testResponse.status, errorText);
      return NextResponse.json(
        { error: `API key test failed: ${testResponse.status} - ${errorText}` },
        { status: 500 }
      );
    }
    
    console.log('✅ YouTube API key is working');
  } catch (error) {
    console.error('API Key Test Error:', error);
    return NextResponse.json(
      { error: `API key test error: ${error instanceof Error ? error.message : 'Unknown error'}` },
      { status: 500 }
    );
  }

  try {
    // Fetch channel statistics using the direct channel ID
    const channelResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${YOUTUBE_CHANNEL_ID}&key=${YOUTUBE_API_KEY}`
    );

    if (!channelResponse.ok) {
      throw new Error(`Failed to fetch channel data: ${channelResponse.status} ${channelResponse.statusText}`);
    }

    const channelData = await channelResponse.json();
    
    if (!channelData.items || channelData.items.length === 0) {
      throw new Error('Channel not found. Please verify your YouTube Channel ID is correct.');
    }

    // Fetch latest videos from the channel
    const videosResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${YOUTUBE_CHANNEL_ID}&maxResults=4&order=date&type=video&key=${YOUTUBE_API_KEY}`
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
    console.warn('YouTube API failed - using fallback data');
    return NextResponse.json(getFallbackData());
  }
}

function getFallbackData(): YouTubeApiResponse {
  return {
    videos: [
      {
        id: "dQw4w9WgXcQ",
        title: "Advanced Laparoscopic Surgery Techniques",
        description: "Learn about the latest minimally invasive surgical procedures and their benefits for patient recovery.",
        thumbnail: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        duration: "12:45",
        views: "15.2K",
        publishedAt: "2 weeks ago"
      },
      {
        id: "dQw4w9WgXcQ2",
        title: "Post-Operative Care Guidelines",
        description: "Essential information for patients and families about recovery and post-surgical care protocols.",
        thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        duration: "8:30",
        views: "22.8K",
        publishedAt: "1 month ago"
      },
      {
        id: "dQw4w9WgXcQ3",
        title: "Understanding Surgical Procedures",
        description: "A comprehensive guide to common surgical procedures performed at our department.",
        thumbnail: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        duration: "15:20",
        views: "31.5K",
        publishedAt: "3 weeks ago"
      },
      {
        id: "dQw4w9WgXcQ4",
        title: "Patient Success Stories",
        description: "Hear from our patients about their surgical journey and recovery experiences.",
        thumbnail: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        duration: "10:15",
        views: "18.7K",
        publishedAt: "1 week ago"
      }
    ],
    channelStats: {
      subscriberCount: '12.5K',
      videoCount: '50+',
      viewCount: '250K'
    }
  };
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