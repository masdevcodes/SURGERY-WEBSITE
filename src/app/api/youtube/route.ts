import { NextRequest, NextResponse } from 'next/server';

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
const CHANNEL_HANDLE = 'Scalpelsnsuture'; // Channel handle without @

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
    console.error('❌ YouTube API key not configured in environment variables');
    console.error('Please set YOUTUBE_API_KEY in your .env file');
    return NextResponse.json({
      videos: [],
      channelStats: {
        subscriberCount: '12.5K',
        videoCount: '50+',
        viewCount: '250K'
      }
    });
  }

  console.log('🔑 Testing YouTube API key...');
  console.log('🎯 Looking for channel: @Scalpelsnsuture');
  
  try {
    const testResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=test&type=channel&maxResults=1&key=${YOUTUBE_API_KEY}`
    );
    
    console.log('📡 API Test Response Status:', testResponse.status);
    
    if (!testResponse.ok) {
      const errorText = await testResponse.text();
      console.error('❌ API Key Test Failed:', testResponse.status);
      console.error('Error details:', errorText);
      
      // Try to parse error for more specific info
      try {
        const errorData = JSON.parse(errorText);
        if (errorData.error) {
          console.error('API Error Message:', errorData.error.message);
          console.error('API Error Code:', errorData.error.code);
        }
      } catch (e) {
        console.error('Raw error response:', errorText);
      }
      
      return NextResponse.json({
        videos: [],
        channelStats: {
          subscriberCount: '12.5K',
          videoCount: '50+',
          viewCount: '250K'
        }
      });
    }
    
    const testData = await testResponse.json();
    console.log('✅ YouTube API key is working!');
    
  } catch (error) {
    console.error('❌ API Key Test Network Error:', error);
    return NextResponse.json({
      videos: [],
      channelStats: {
        subscriberCount: '12.5K',
        videoCount: '50+',
        viewCount: '250K'
      }
    });
  }

  console.log('🔍 Step 1: Searching for channel by handle...');
  
  try {
    // First, try to get channel ID using the handle
    let channelId = '';
    
    // Try to find channel by handle/username
    const handleResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=id,statistics&forHandle=@${CHANNEL_HANDLE}&key=${YOUTUBE_API_KEY}`
    );
    
    console.log('📡 Handle search response status:', handleResponse.status);
    let channelData;
    
    if (handleResponse.ok) {
      channelData = await handleResponse.json();
      console.log('📊 Handle search results:', channelData.items?.length || 0, 'channels found');
      if (channelData.items && channelData.items.length > 0) {
        channelId = channelData.items[0].id;
        console.log('✅ Found channel by handle! ID:', channelId);
      }
    }
    
    // If handle search failed, try username search
    if (!channelId) {
      console.log('🔍 Step 2: Trying username search...');
      const usernameResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/channels?part=id,statistics&forUsername=${CHANNEL_HANDLE}&key=${YOUTUBE_API_KEY}`
      );
      
      console.log('📡 Username search response status:', usernameResponse.status);
      if (usernameResponse.ok) {
        channelData = await usernameResponse.json();
        console.log('📊 Username search results:', channelData.items?.length || 0, 'channels found');
        if (channelData.items && channelData.items.length > 0) {
          channelId = channelData.items[0].id;
          console.log('✅ Found channel by username! ID:', channelId);
        }
      }
    }
    
    // If still no channel found, try search
    if (!channelId) {
      console.log('🔍 Step 3: Trying general search...');
      const searchResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q="Scalpels+and+Sutures"&type=channel&maxResults=5&key=${YOUTUBE_API_KEY}`
      );
      
      console.log('📡 General search response status:', searchResponse.status);
      if (searchResponse.ok) {
        const searchData = await searchResponse.json();
        console.log('📊 General search results:', searchData.items?.length || 0, 'channels found');
        
        // Log all found channels for debugging
        if (searchData.items && searchData.items.length > 0) {
          console.log('🎯 Found channels:');
          searchData.items.forEach((item: any, index: number) => {
            console.log(`  ${index + 1}. ${item.snippet.title} (${item.snippet.channelId})`);
          });
        }
        
        if (searchData.items && searchData.items.length > 0) {
          channelId = searchData.items[0].snippet.channelId;
          console.log('✅ Using first search result! ID:', channelId);
          
          // Now fetch channel statistics
          const channelResponse = await fetch(
            `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${YOUTUBE_API_KEY}`
          );
          
          if (channelResponse.ok) {
            channelData = await channelResponse.json();
            console.log('📊 Channel stats fetched successfully');
          }
        }
      }
    }

    if (!channelId || !channelData || !channelData.items || channelData.items.length === 0) {
      console.warn('❌ Channel not found after all search attempts');
      console.log('💡 Returning fallback data');
      return NextResponse.json({
        videos: [],
        channelStats: {
          subscriberCount: '12.5K',
          videoCount: '50+',
          viewCount: '250K'
        }
      });
    }

    console.log('🎬 Fetching latest videos for channel:', channelId);
    
    // First try to get the uploads playlist ID
    const channelDetailsResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${channelId}&key=${YOUTUBE_API_KEY}`
    );
    
    let videosResponse;
    
    if (channelDetailsResponse.ok) {
      const channelDetails = await channelDetailsResponse.json();
      const uploadsPlaylistId = channelDetails.items?.[0]?.contentDetails?.relatedPlaylists?.uploads;
      
      if (uploadsPlaylistId) {
        console.log('📋 Using uploads playlist:', uploadsPlaylistId);
        // Fetch videos from uploads playlist (more reliable)
        videosResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=4&key=${YOUTUBE_API_KEY}`
        );
      } else {
        console.log('🔍 Falling back to search method');
        // Fallback to search method
        videosResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=4&order=date&type=video&key=${YOUTUBE_API_KEY}`
        );
      }
    } else {
      console.log('🔍 Using direct search method');
      // Fallback to search method
      videosResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=4&order=date&type=video&key=${YOUTUBE_API_KEY}`
      );
    }

    console.log('📡 Videos fetch response status:', videosResponse.status);
    if (!videosResponse.ok) {
      const errorText = await videosResponse.text();
      console.error('❌ Videos fetch error:', errorText);
      console.warn('⚠️ Failed to fetch videos, returning channel stats only');
      const channelStats: YouTubeChannelStats = {
        subscriberCount: formatCount(channelData.items[0]?.statistics?.subscriberCount || '0'),
        videoCount: formatCount(channelData.items[0]?.statistics?.videoCount || '0'),
        viewCount: formatCount(channelData.items[0]?.statistics?.viewCount || '0'),
      };
      return NextResponse.json({ videos: [], channelStats });
    }

    const videosData = await videosResponse.json();
    console.log('📊 Videos found:', videosData.items?.length || 0);
    console.log('📋 Raw videos data:', JSON.stringify(videosData, null, 2));
    
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
    console.log('🔍 Fetching detailed video information...');
    // Handle both search results and playlist items
    const videoIds = videosData.items.map((item: any) => {
      // For playlist items, video ID is in snippet.resourceId.videoId
      // For search results, video ID is in id.videoId
      return item.snippet?.resourceId?.videoId || item.id?.videoId;
    }).filter(Boolean).join(',');
    
    console.log('🎯 Video IDs to fetch details for:', videoIds);
    
    if (!videoIds) {
      console.warn('❌ No valid video IDs found');
      const channelStats: YouTubeChannelStats = {
        subscriberCount: formatCount(channelData.items[0]?.statistics?.subscriberCount || '0'),
        videoCount: formatCount(channelData.items[0]?.statistics?.videoCount || '0'),
        viewCount: formatCount(channelData.items[0]?.statistics?.viewCount || '0'),
      };
      return NextResponse.json({ videos: [], channelStats });
    }
    
    const videoDetailsResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=contentDetails,statistics&id=${videoIds}&key=${YOUTUBE_API_KEY}`
    );

    if (!videoDetailsResponse.ok) {
      const errorText = await videoDetailsResponse.text();
      console.error('❌ Video details fetch error:', errorText);
      console.warn('Failed to fetch video details, using basic video info');
    } else {
      console.log('✅ Video details fetched successfully');
    }

    let videoDetailsData = { items: [] };
    if (videoDetailsResponse.ok) {
      videoDetailsData = await videoDetailsResponse.json();
      console.log('📊 Video details count:', videoDetailsData.items?.length || 0);
    }

    // Format the data
    const channelStats: YouTubeChannelStats = {
      subscriberCount: formatCount(channelData.items[0]?.statistics?.subscriberCount || '0'),
      videoCount: formatCount(channelData.items[0]?.statistics?.videoCount || '0'),
      viewCount: formatCount(channelData.items[0]?.statistics?.viewCount || '0'),
    };

    const videos: YouTubeVideo[] = videosData.items.map((item: any, index: number) => {
      const details = videoDetailsData.items?.[index];
      const videoId = item.snippet?.resourceId?.videoId || item.id?.videoId;
      
      console.log(`📹 Processing video ${index + 1}:`, {
        title: item.snippet?.title,
        videoId: videoId,
        hasDetails: !!details
      });
      
      return {
        id: videoId,
        title: item.snippet.title,
        description: item.snippet.description || 'No description available',
        thumbnail: item.snippet.thumbnails?.high?.url || item.snippet.thumbnails?.medium?.url || item.snippet.thumbnails?.default?.url || '',
        duration: formatDuration(details?.contentDetails?.duration || 'PT0S'),
        views: formatCount(details?.statistics?.viewCount || '0'),
        publishedAt: formatDate(item.snippet.publishedAt),
      };
    }).filter(video => video.id); // Filter out any videos without valid IDs

    const response: YouTubeApiResponse = {
      videos,
      channelStats,
    };

    console.log('🎉 Successfully returning YouTube data with', videos.length, 'videos');
    console.log('📋 Final response:', JSON.stringify(response, null, 2));
    return NextResponse.json(response);
  } catch (error) {
    console.error('YouTube API Error:', error);
    console.log('YouTube API error, returning fallback data');
    return NextResponse.json({
      videos: [],
      channelStats: {
        subscriberCount: '12.5K',
        videoCount: '50+',
        viewCount: '250K'
      }
    });
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