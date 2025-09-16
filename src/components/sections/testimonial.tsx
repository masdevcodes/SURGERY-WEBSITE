'use client';

import { useState, useEffect } from 'react';
import { Play, ExternalLink, Calendar, Eye, X } from 'lucide-react';

interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  views: string;
  publishedAt: string;
}

interface ChannelStats {
  subscriberCount: string;
  videoCount: string;
  viewCount: string;
}

export function Testimonial() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [channelStats, setChannelStats] = useState<ChannelStats>({
    subscriberCount: '0',
    videoCount: '0',
    viewCount: '0'
  });
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [loading, setLoading] = useState(true);

  // Fetch real YouTube data
  useEffect(() => {
    const fetchYouTubeData = async () => {
      try {
        const response = await fetch('/api/youtube');
        if (!response.ok) {
          throw new Error('Failed to fetch YouTube data');
        }
        
        const data = await response.json();
        setVideos(data.videos);
        setChannelStats(data.channelStats);
      } catch (error) {
        console.error('Error fetching YouTube data:', error);
        // Fallback to mock data if API fails
        setVideos([
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
        ]);
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

  const openVideoModal = (video: Video) => {
    setSelectedVideo(video);
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  if (loading) {
    return (
      <section id="youtube" className="py-24 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 relative overflow-hidden">
        <div className="container mx-auto">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-blue-800 rounded w-64 mx-auto mb-4"></div>
              <div className="h-12 bg-blue-800 rounded w-96 mx-auto mb-8"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="bg-blue-800 rounded-2xl h-80 animate-pulse"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
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
              className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Play className="w-5 h-5" />
              Subscribe to Our Channel
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {videos.map((video, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20 cursor-pointer"
                onClick={() => openVideoModal(video)}
              >
                {/* Video Thumbnail */}
                <div className="relative overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      <Play className="w-6 h-6 text-white ml-1" />
                    </div>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>

                {/* Video Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors duration-300 line-clamp-2">
                    {video.title}
                  </h3>
                  
                  <p className="text-blue-200 text-sm leading-relaxed mb-4 line-clamp-3">
                    {video.description}
                  </p>

                  {/* Video Stats */}
                  <div className="flex items-center justify-between text-xs text-blue-300 mb-4">
                    <div className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      <span>{video.views} views</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{video.publishedAt}</span>
                    </div>
                  </div>

                  {/* Watch Button */}
                  <div className="inline-flex items-center gap-2 text-teal-400 font-semibold text-sm hover:text-teal-300 transition-colors duration-300 group">
                    WATCH VIDEO
                    <Play className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Videos Button */}
          <div className="text-center mt-12">
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
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden relative">
            {/* Close Button */}
            <button
              onClick={closeVideoModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors duration-200"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Video Player */}
            <div className="aspect-video bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo.id}?autoplay=1`}
                title={selectedVideo.title}
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Video Info */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {selectedVideo.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {selectedVideo.description}
              </p>
              <div className="flex items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  <span>{selectedVideo.views} views</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{selectedVideo.publishedAt}</span>
                </div>
                <a
                  href={`https://www.youtube.com/watch?v=${selectedVideo.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-red-600 hover:text-red-700 font-medium"
                >
                  Watch on YouTube
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}