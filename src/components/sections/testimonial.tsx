'use client';

import { useState, useEffect } from 'react';
import { Play, ExternalLink, X } from 'lucide-react';

interface ChannelStats {
  subscriberCount: string;
  videoCount: string;
  viewCount: string;
}

interface Video {
  id: string;
  title: string;
  thumbnail: string;
}

export function Testimonial() {
  const [channelStats, setChannelStats] = useState<ChannelStats | null>(null);
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  useEffect(() => {
    const fetchYouTubeData = async () => {
      try {
        const res = await fetch('/api/youtube');
        const data = await res.json();

        if (res.ok && data.channelStats) {
          setChannelStats(data.channelStats);
          setVideos(data.latestVideos || []);
        } else {
          throw new Error("API error");
        }
      } catch (error) {
        console.error("Fallback YouTube data", error);
        setChannelStats({
          subscriberCount: "12.5K",
          videoCount: "50+",
          viewCount: "250K",
        });
        setVideos([
          { id: "abc1", title: "Surgical Procedures Overview", thumbnail: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
          { id: "abc2", title: "Patient Care Excellence", thumbnail: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
          { id: "abc3", title: "Advanced Medical Technology", thumbnail: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
          { id: "abc4", title: "Department Tour", thumbnail: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchYouTubeData();
  }, []);

  if (loading) {
    return (
      <section className="py-24 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950">
        <div className="container mx-auto text-center text-blue-200 animate-pulse">
          Loading channel stats...
        </div>
      </section>
    );
  }

  return (
    <section
      id="youtube"
      className="py-24 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 relative overflow-hidden"
    >
      <div className="container mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Our YouTube Channel
            <br /> " SCALPELS AND SUTURES "
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto mb-8">
            Educational videos covering surgical procedures, patient care, and medical insights.
          </p>

          {/* Channel Stats */}
          {channelStats && (
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
          )}

          {/* Subscribe Button */}
          <div className="flex items-center justify-center gap-4">
            <img src="ytlogo.png" alt="YouTube Channel Logo" className="w-10 h-10 rounded-full" />
            <a
              href="https://www.youtube.com/@Scalpelsnsuture"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Play className="w-5 h-5" />
              Subscribe to Our Channel
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Latest Videos */}
        {videos.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {videos.map((video) => (
              <div
                key={video.id}
                onClick={() => setSelectedVideo(video.id)}
                className="cursor-pointer bg-blue-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform"
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 text-white text-sm font-medium">{video.title}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Video Popup Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative bg-black rounded-xl max-w-4xl w-full aspect-video">
            <button
              className="absolute -top-10 right-0 text-white hover:text-red-500"
              onClick={() => setSelectedVideo(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <iframe
              className="w-full h-full rounded-xl"
              src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}