'use client';

import { useState, useEffect } from 'react';
import { Play, ExternalLink } from 'lucide-react';

interface ChannelStats {
  subscriberCount: string;
  videoCount: string;
  viewCount: string;
}

export function Testimonial() {
  const [channelStats, setChannelStats] = useState<ChannelStats>({
    subscriberCount: '0',
    videoCount: '0',
    viewCount: '0'
  });
  const [loading, setLoading] = useState(true);

  // Fetch real YouTube data
  useEffect(() => {
    const fetchYouTubeData = async () => {
      try {
        const response = await fetch('/api/youtube');
        
        const data = await response.json();
        
        if (response.ok && data.channelStats) {
          setChannelStats(data.channelStats);
        } else {
          // Use fallback data if API response is not successful
          throw new Error('API response not successful');
        }
      } catch (error) {
        console.warn('Using fallback YouTube data due to API configuration');
        
        // Fallback to mock data if API fails
        setChannelStats({
          subscriberCount: '12.5K',
          videoCount: '50+',
          viewCount: '250K'
        });
      } finally {
        setLoading(false);
      }
    };

    fetchYouTubeData();
  }, []);

  if (loading) {
    return (
      <section id="youtube" className="py-24 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 relative overflow-hidden">
        <div className="container mx-auto">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-blue-800 rounded w-64 mx-auto mb-4"></div>
              <div className="h-12 bg-blue-800 rounded w-96 mx-auto mb-8"></div>
              <div className="flex items-center justify-center gap-8 mb-8">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="text-center">
                    <div className="h-8 bg-blue-800 rounded w-16 mx-auto mb-2"></div>
                    <div className="h-4 bg-blue-800 rounded w-20 mx-auto"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="youtube" className="py-24 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-1 bg-teal-500"></div>
            <span className="text-teal-400 font-semibold text-sm uppercase tracking-wider">
              Educational Content
            </span>
            <div className="w-16 h-1 bg-teal-500"></div>
          </div>
          
          <h2 className="text-5xl font-bold text-white font-headline leading-tight mb-6">
            Our YouTube Channel
            <br />
            "SCALPELS AND SUTURES"
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto mb-8">
            Stay informed with our educational videos covering surgical procedures, patient care and medical insights from our expert team.
          </p>
          
          {/* Channel Stats */}
          <div className="flex items-center justify-center gap-8 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-400">{channelStats.videoCount}</div>
              <div className="text-blue-200 text-sm">Videos</div>
            </div>
            <div className="w-px h-12 bg-blue-700"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-400">{channelStats.subscriberCount}</div>
              <div className="text-blue-200 text-sm">Subscribers</div>
            </div>
            <div className="w-px h-12 bg-blue-700"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-400">{channelStats.viewCount}</div>
              <div className="text-blue-200 text-sm">Total Views</div>
            </div>
          </div>

          {/* Subscribe Button */}
          <a 
            href="https://www.youtube.com/@Scalpelsnsuture" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl mb-12"
          >
            <Play className="w-5 h-5" />
            Subscribe to Our Channel
            <ExternalLink className="w-4 h-4" />
          </a>

          {/* View All Videos Button */}
          <div className="text-center">
            <a
              href="https://www.youtube.com/@Scalpelsnsuture/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border-2 border-teal-500 text-teal-400 hover:bg-teal-500 hover:text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View All Videos
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}