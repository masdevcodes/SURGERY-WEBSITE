'use client';

import Image from 'next/image';
import { Users, Award, Clock, Heart, Calendar, Scissors } from 'lucide-react';

export function Intro() {
  return (
    <section id="intro" className="mt-[-93.9px] py-24 bg-gradient-to-br from-blue-50 via-white to-teal-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <Image
          src="/111.png"
          alt="Abstract background pattern"
          fill
          className="object-cover"
        />
      </div>

      <div className="container mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-1 bg-teal-500"></div>
                <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
                  Department Overview
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-blue-950 font-headline leading-tight">
                Leading Surgical Excellence at
                <span className="text-teal-600"> GMC Patiala</span>
              </h2>
              
              <p className="text-xl text-gray-600 font-medium leading-relaxed">
                Pioneering advanced surgical care with compassion, innovation, and unwavering commitment to patient well-being.
              </p>
            </div>

            {/* Description */}
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed text-justify">
                The Department of Surgery at Government Medical College, Patiala stands as a beacon of surgical excellence in North India. With over seven decades of distinguished service since 1954, our department has evolved into a comprehensive surgical center offering state-of-the-art medical care across multiple specialties.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed text-justify">
                Today, we operate seven specialized units, each led by experienced surgeons and supported by dedicated teams of residents and healthcare professionals. Our commitment extends beyond treatment to include medical education, research, and community service, making us a cornerstone of healthcare in the region.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-950 text-lg">6 Specialized Units</h4>
                    <p className="text-gray-600 text-sm">Comprehensive surgical care</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-950 text-lg">70+ Years Legacy</h4>
                    <p className="text-gray-600 text-sm">Trusted healthcare since 1954</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-950 text-lg">24/7 Emergency</h4>
                    <p className="text-gray-600 text-sm">Round-the-clock surgical care</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-950 text-lg">Patient-Centered</h4>
                    <p className="text-gray-600 text-sm">Compassionate healthcare approach</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - OPD + OT Info Card */}
          <div className="relative flex flex-col items-center">
  <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl p-6 text-white shadow-xl w-full max-w-md">
    {/* Header with icon */}
    <div className="flex items-center justify-center mb-4">
      <div className="bg-white/20 p-3 rounded-full mr-3">
        <Calendar className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-2xl font-bold text-center">
        OPD Schedule
        <span className="block text-sm font-normal opacity-90 mt-1">
          (8:00 AM - 2:30 PM)
        </span>
      </h3>
    </div>
    
    <div className="mb-6 bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/20">
      <h4 className="font-semibold text-lg mb-3 flex items-center">
        <Users className="w-5 h-5 mr-2" /> OPD Days
      </h4>
      <div className="space-y-2 max-h-40 overflow-y-auto pr-2">
        {[
          {unit: 'Unit 1', days: 'Mon-Thu', room: 'Room 8'},
          {unit: 'Unit 2', days: 'Tue-Fri', room: 'Room 8'},
          {unit: 'Unit 3', days: 'Wed-Sat', room: 'Room 8'},
          {unit: 'Unit 4', days: 'Mon-Thu', room: 'Room 7'},
          {unit: 'Unit 5', days: 'Tue-Fri', room: 'Room 7'},
          {unit: 'Unit 6', days: 'Wed-Sat', room: 'Room 7'},
          {unit: 'Unit 7', days: 'Mon-Thu', room: 'Room 3'},
        ].map((item, index) => (
          <div
            key={index}
            className="p-2 rounded-lg bg-white/15 hover:bg-white/20 transition-colors flex justify-between items-center"
          >
            <span className="font-medium">{item.unit}</span>
            <div className="text-right text-sm">
              <div>{item.days}</div>
              <div className="text-teal-100">{item.room}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
    
    <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/20">
      <h4 className="font-semibold text-lg mb-3 flex items-center">
        <Scissors className="w-5 h-5 mr-2" /> OT Days
      </h4>
      <div className="space-y-2 max-h-40 overflow-y-auto pr-2">
        {[
          {unit: 'Unit 1', days: 'Tue - Fri'},
          {unit: 'Unit 2', days: 'Wed - Sat'},
          {unit: 'Unit 3', days: 'Mon - Thu'},
          {unit: 'Unit 4', days: 'Tue - Fri'},
          {unit: 'Unit 5', days: 'Wed - Sat'},
          {unit: 'Unit 6', days: 'Mon - Thu'},
          {unit: 'Unit 7', days: 'Wed - Sat'},
        ].map((item, index) => (
          <div
            key={index}
            className="p-2 rounded-lg bg-white/15 hover:bg-white/20 transition-colors flex justify-between items-center"
          >
            <span className="font-medium">{item.unit}</span>
            <span className="text-sm">{item.days}</span>
          </div>
        ))}
      </div>
    </div>
  </div>

            {/* Stats Card */}
            <div className="mt-8 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg w-full max-w-md border border-teal-100 transition-all duration-300 hover:scale-105 cursor-pointer">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="p-2">
                  <div className="text-2xl font-bold text-teal-600 mb-1">500+</div>
                  <div className="text-xs text-gray-600 font-medium">Daily Patients</div>
                </div>
                <div className="p-2">
                  <div className="text-2xl font-bold text-blue-600 mb-1">50+</div>
                  <div className="text-xs text-gray-600 font-medium">Expert Surgeons</div>
                </div>
                <div className="p-2">
                  <div className="text-2xl font-bold text-purple-600 mb-1">1000+</div>
                  <div className="text-xs text-gray-600 font-medium">Surgeries/Month</div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-teal-500/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
          </div>
        </div>

        {/* Bottom Section - Mission Statement */}
        <div className="mt-20 text-center">
          <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 transition-all duration-300 hover:scale-[1.02] cursor-pointer">
            <h3 className="text-2xl font-bold text-blue-950 mb-4">Our Mission</h3>
            <p className="text-lg text-gray-700 leading-relaxed italic">
              "To provide exceptional surgical care through innovation, education, and compassionate service, 
              while advancing the field of surgery through research and training the next generation of medical professionals."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}