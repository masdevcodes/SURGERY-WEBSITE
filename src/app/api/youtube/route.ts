import { NextRequest, NextResponse } from 'next/server';

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
const YOUTUBE_CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID;

interface YouTubeChannelStats {
  subscriberCount: string;
  videoCount: string;
  viewCount: string;
}

interface YouTubeApiResponse {
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
    // Fetch only channel statistics
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

    // Format the channel statistics
    const channelStats: YouTubeChannelStats = {
      subscriberCount: formatCount(channelData.items[0]?.statistics?.subscriberCount || '0'),
      videoCount: formatCount(channelData.items[0]?.statistics?.videoCount || '0'),
      viewCount: formatCount(channelData.items[0]?.statistics?.viewCount || '0'),
    };

    const response: YouTubeApiResponse = {
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