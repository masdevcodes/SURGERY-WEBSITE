'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Users, Eye, Globe, TrendingUp, Calendar, Clock } from 'lucide-react';

export function Visitors() {
  const [visitorStats, setVisitorStats] = useState({
    totalVisitors: 0,
    todayVisitors: 0,
    onlineNow: 0,
    pageViews: 0,
    uniqueVisitors: 0,
    avgSessionTime: '0:00'
  });

  const [isLoading, setIsLoading] = useState(true);

  // Simulate fetching visitor data (replace with actual API call)
  useEffect(() => {
    const fetchVisitorData = async () => {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock data - replace with actual API call
      setVisitorStats({
        totalVisitors: 125847,
        todayVisitors: 1247,
        onlineNow: 23,
        pageViews: 342156,
        uniqueVisitors: 89234,
        avgSessionTime: '3:42'
      });
      setIsLoading(false);
    };

    fetchVisitorData();
  }, []);

  // Animated counter effect
  const [displayStats, setDisplayStats] = useState({
    totalVisitors: 0,
    todayVisitors: 0,
    onlineNow: 0,
    pageViews: 0,
    uniqueVisitors: 0
  });

  useEffect(() => {
    if (!isLoading) {
      const animateCounters = () => {
        const duration = 2000; // 2 seconds
        const steps = 60;
        const stepDuration = duration / steps;

        let currentStep = 0;
        const interval = setInterval(() => {
          currentStep++;
          const progress = currentStep / steps;
          
          setDisplayStats({
            totalVisitors: Math.floor(visitorStats.totalVisitors * progress),
            todayVisitors: Math.floor(visitorStats.todayVisitors * progress),
            onlineNow: Math.floor(visitorStats.onlineNow * progress),
            pageViews: Math.floor(visitorStats.pageViews * progress),
            uniqueVisitors: Math.floor(visitorStats.uniqueVisitors * progress)
          });

          if (currentStep >= steps) {
            clearInterval(interval);
            setDisplayStats({
              totalVisitors: visitorStats.totalVisitors,
              todayVisitors: visitorStats.todayVisitors,
              onlineNow: visitorStats.onlineNow,
              pageViews: visitorStats.pageViews,
              uniqueVisitors: visitorStats.uniqueVisitors
            });
          }
        }, stepDuration);
      };

      animateCounters();
    }
  }, [isLoading, visitorStats]);

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toLocaleString();
  };

  const statsCards = [
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Total Visitors',
      value: displayStats.totalVisitors,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      borderColor: 'border-blue-200'
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: 'Today\'s Visitors',
      value: displayStats.todayVisitors,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      borderColor: 'border-green-200'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Online Now',
      value: displayStats.onlineNow,
      color: 'text-red-600',
      bgColor: 'bg-red-100',
      borderColor: 'border-red-200',
      pulse: true
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: 'Page Views',
      value: displayStats.pageViews,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
      borderColor: 'border-purple-200'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Unique Visitors',
      value: displayStats.uniqueVisitors,
      color: 'text-teal-600',
      bgColor: 'bg-teal-100',
      borderColor: 'border-teal-200'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Avg. Session Time',
      value: visitorStats.avgSessionTime,
      color: 'text-amber-600',
      bgColor: 'bg-amber-100',
      borderColor: 'border-amber-200',
      isTime: true
    }
  ];

  return (
    <section id="visitors" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/111.png"
          alt="Abstract background pattern"
          fill
          className="object-cover"
        />
      </div>

      <div className="container mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-16 h-1 bg-teal-500"></div>
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
              Website Analytics
            </span>
            <div className="w-16 h-1 bg-teal-500"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-blue-950 font-headline leading-tight mb-4">
            Our Website Visitors
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Real-time statistics showing the reach and impact of our surgical department's online presence
          </p>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="text-center py-12">
            <div className="inline-flex items-center gap-3 text-teal-600">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-600"></div>
              <span className="text-lg font-medium">Loading visitor statistics...</span>
            </div>
          </div>
        )}

        {/* Stats Grid */}
        {!isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {statsCards.map((stat, index) => (
              <div
                key={index}
                className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border ${stat.borderColor} hover:border-opacity-50 relative overflow-hidden`}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 ${stat.bgColor} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Pulse Effect for Online Now */}
                {stat.pulse && (
                  <div className="absolute top-4 right-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  </div>
                )}
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 ${stat.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className={stat.color}>{stat.icon}</div>
                  </div>
                  
                  {/* Stats */}
                  <div className="text-center">
                    <div className={`text-4xl font-bold ${stat.color} mb-2 group-hover:scale-105 transition-transform duration-300`}>
                      {stat.isTime ? stat.value : formatNumber(typeof stat.value === 'number' ? stat.value : 0)}
                    </div>
                    <div className="text-gray-600 font-medium text-lg">
                      {stat.title}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Additional Info */}
        {!isLoading && (
          <div className="mt-16 text-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-blue-950 mb-4">
                Connecting with Our Community
              </h3>
              <p className="text-gray-700 leading-relaxed text-justify">
                Our website serves as a vital bridge between the Surgery Department at GMC Patiala and the 
                community we serve. These visitor statistics reflect the trust and interest of patients, 
                medical professionals, students, and families who seek information about our surgical services, 
                expertise, and commitment to healthcare excellence. Every visitor represents someone seeking 
                quality medical care or information, and we're honored to be their trusted resource.
              </p>
              
              <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Updated in real-time</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Privacy protected</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Analytics compliant</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}