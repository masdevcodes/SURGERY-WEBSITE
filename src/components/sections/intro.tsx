import Image from 'next/image';
import { Users, Award, Clock, Heart, Stethoscope, Activity } from 'lucide-react';

export function Intro() {
  return (
   <section id="intro" className="mt-[-93.9px] py-24 bg-gradient-to-br from-blue-50 via-white to-teal-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
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
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-950 text-lg">7 Specialized Units</h4>
                    <p className="text-gray-600 text-sm">Comprehensive surgical care</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
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

              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
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

              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
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
          <div className="bg-teal-500 rounded-lg p-8 text-white shadow-xl flex flex-col h-full">
            <h3 className="text-3xl font-bold font-body mb-6">
              OPD Days{' '}
              <span className="text-base font-normal opacity-80">
                (8am - 2.30pm)
              </span>
            </h3>
            <div className="max-h-56 overflow-y-auto mb-10 border border-white/30 rounded-lg bg-white/10 p-4 backdrop-blur-sm shadow-inner">
              {[
                'Unit 1 - Mon-Thu, Room No:8',
                'Unit 2 - Tue-Fri, Room No:8',
                'Unit 3 - Wed-Sat, Room No:8',
                'Unit 4 - Mon-Thu, Room No:7',
                'Unit 5 - Tue-Fri, Room No:7',
                'Unit 6 - Wed-Sat, Room No:7',
                'Unit 7 - Mon-Thu, Room No:3',
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-3 mb-3 last:mb-0 rounded-md bg-white/20 hover:bg-white/30 transition-colors"
                >
                  <p className="font-semibold">{item}</p>
                </div>
              ))}
            </div>
            <h3 className="text-3xl font-bold font-body mb-6">OT Days</h3>
            <div className="max-h-56 overflow-y-auto border border-white/30 rounded-lg bg-white/10 p-4 backdrop-blur-sm shadow-inner">
              {[
                'Unit 1 - Tue - Fri',
                'Unit 2 - Wed - Sat',
                'Unit 3 - Mon - Thu',
                'Unit 4 - Tue - Fri',
                'Unit 5 - Wed - Sat',
                'Unit 6 - Mon - Thu',
                'Unit 7 - Wed - Sat',
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-3 mb-3 last:mb-0 rounded-md bg-white/20 hover:bg-white/30 transition-colors"
                >
                  <p className="font-semibold">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section - Mission Statement */}
        <div className="mt-20 text-center">
          <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
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