'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import {
  Award,
  Users,
  Clock,
  Star,
  TrendingUp,
  CheckCircle,
  Scalpel,
  HeartPulse,
} from 'lucide-react';

export function Achievements() {
  const achievements = [
    {
      icon: <Award className="w-8 h-8" />,
      title: 'National Excellence Award',
      description: 'Recognized as top surgical department for innovative procedures',
      year: '2023',
      stats: '98% Success Rate',
      color: 'text-amber-500',
      popupContent: (
        <div>
          <h3 className="font-bold text-2xl mb-4">National Excellence Award 2023</h3>
          <p className="text-gray-700 leading-relaxed text-justify mb-4">
            Our surgery department was honored with the National Excellence Award for 
            pioneering minimally invasive surgical techniques that have reduced recovery 
            times by 40% and improved patient outcomes significantly.
          </p>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-teal-500" />
              <span>First hospital to implement robotic-assisted joint replacement</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-teal-500" />
              <span>Developed new protocol for reducing surgical site infections</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-teal-500" />
              <span>Pioneered day-case major surgeries previously requiring hospitalization</span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: '15,000+ Successful Surgeries',
      description: 'Performed with exceptional outcomes and patient satisfaction',
      year: 'Since 2010',
      stats: '99.2% Patient Satisfaction',
      color: 'text-blue-500',
      popupContent: (
        <div>
          <h3 className="font-bold text-2xl mb-4">15,000+ Successful Surgeries</h3>
          <p className="text-gray-700 leading-relaxed text-justify mb-4">
            Our surgical team has performed over 15,000 procedures with outstanding 
            outcomes across all surgical specialties. This milestone reflects our 
            commitment to excellence, safety, and continuous improvement in surgical care.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-2xl font-bold text-blue-800">5,200+</p>
              <p className="text-sm text-blue-600">Orthopedic Procedures</p>
            </div>
            <div className="bg-teal-50 p-4 rounded-lg">
              <p className="text-2xl font-bold text-teal-800">3,800+</p>
              <p className="text-sm text-teal-600">Laparoscopic Surgeries</p>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg">
              <p className="text-2xl font-bold text-amber-800">2,700+</p>
              <p className="text-sm text-amber-600">Cardiac Procedures</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="text-2xl font-bold text-green-800">3,300+</p>
              <p className="text-sm text-green-600">Other Specialized Surgeries</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Fastest Recovery Times',
      description: 'Innovative techniques reducing hospital stays significantly',
      year: '2022',
      stats: '40% Faster Recovery',
      color: 'text-green-500',
      popupContent: (
        <div>
          <h3 className="font-bold text-2xl mb-4">Enhanced Recovery Programs</h3>
          <p className="text-gray-700 leading-relaxed text-justify mb-4">
            Our department has pioneered Enhanced Recovery After Surgery (ERAS) protocols 
            that have reduced average hospital stays by 40% compared to national averages. 
            Patients experience less pain, fewer complications, and quicker return to normal activities.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold text-lg mb-2">Recovery Time Comparison</h4>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between mb-1">
                  <span>Traditional Approach</span>
                  <span className="font-medium">7.2 days</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-gray-400 h-2.5 rounded-full" style={{width: '100%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span>Our ERAS Protocol</span>
                  <span className="font-medium text-green-600">4.3 days</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-green-500 h-2.5 rounded-full" style={{width: '60%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Research Publications',
      description: 'Contributing to surgical advancements through research',
      year: '85 Papers',
      stats: '12 International Studies',
      color: 'text-purple-500',
      popupContent: (
        <div>
          <h3 className="font-bold text-2xl mb-4">Research & Innovation</h3>
          <p className="text-gray-700 leading-relaxed text-justify mb-4">
            Our surgeons are actively engaged in research that advances the field of surgery. 
            With 85 publications in peer-reviewed journals and participation in 12 international 
            multi-center studies, we contribute to the global knowledge base of surgical best practices.
          </p>
          <div className="mt-6">
            <h4 className="font-semibold text-lg mb-3">Notable Research Areas</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Scalpel className="w-5 h-5 text-purple-500" />
                <span>Minimally invasive surgical techniques</span>
              </li>
              <li className="flex items-center gap-2">
                <HeartPulse className="w-5 h-5 text-purple-500" />
                <span>Surgical outcomes in high-risk patients</span>
              </li>
              <li className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-purple-500" />
                <span>Enhanced recovery protocols</span>
              </li>
              <li className="flex items-center gap-2">
                <Star className="w-5 h-5 text-purple-500" />
                <span>Surgical technology innovations</span>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
  ];

  const [selectedAchievement, setSelectedAchievement] = useState<any>(null);

  // Close modal
  const closeModal = () => setSelectedAchievement(null);

  return (
    <section
      id="achievements"
      className="py-24 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <Image
          src="/111.png"
          alt="Medical pattern background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 via-transparent to-teal-100/20"></div>
      </div>

      <div className="container mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Stats Cards */}
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-1 bg-teal-500"></div>
                <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
                  Surgical Excellence
                </span>
              </div>
              <h2 className="text-5xl font-bold text-blue-950 font-headline leading-tight">
                Our Achievements
              </h2>
              <p className="text-xl text-gray-600 font-medium">
                Celebrating milestones in surgical care and innovation
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
                  <Award className="w-8 h-8 text-teal-600" />
                </div>
                <div className="text-3xl font-bold text-blue-950 mb-2">98%</div>
                <div className="text-sm text-gray-600">Surgical Success Rate</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-blue-950 mb-2">50+</div>
                <div className="text-sm text-gray-600">Expert Surgeons</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
                  <Clock className="w-8 h-8 text-amber-600" />
                </div>
                <div className="text-3xl font-bold text-blue-950 mb-2">25+</div>
                <div className="text-sm text-gray-600">Years of Excellence</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                  <TrendingUp className="w-8 h-8 text-purple-600" />
                </div>
                <div className="text-3xl font-bold text-blue-950 mb-2">15K+</div>
                <div className="text-sm text-gray-600">Successful Surgeries</div>
              </div>
            </div>

            {/* Additional Info Card */}
            <div className="bg-gradient-to-r from-teal-500 to-blue-500 rounded-xl p-6 text-white shadow-lg">
              <h3 className="text-xl font-bold mb-3">24/7 Emergency Surgery</h3>
              <p className="text-sm opacity-90 mb-4">
                Our surgical team is available round the clock for emergency procedures with a response time of under 15 minutes.
              </p>
              <div className="flex items-center gap-2 text-sm font-semibold">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span>Immediate care when you need it most</span>
              </div>
            </div>
          </div>

          {/* Right Side - Achievements List */}
          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-teal-200 flex items-start gap-4 cursor-pointer"
                onClick={() => setSelectedAchievement(achievement)}
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-teal-200 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <div className={achievement.color}>{achievement.icon}</div>
                </div>
                
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-lg font-bold text-blue-950 group-hover:text-teal-600 transition-colors duration-300">
                      {achievement.title}
                    </h3>
                    <span className="text-xs font-semibold bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                      {achievement.year}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed mb-2">
                    {achievement.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-semibold text-teal-600">
                    <TrendingUp className="w-4 h-4" />
                    <span>{achievement.stats}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Popup */}
        {selectedAchievement && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={closeModal}
          >
            <div
              className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-lg relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header with colored accent */}
              <div className={`h-2 w-full ${selectedAchievement.color.replace('text', 'bg')}`}></div>

              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-3xl font-bold z-10 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md"
                aria-label="Close modal"
              >
                &times;
              </button>

              {/* Popup Content */}
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl ${selectedAchievement.color.replace('text', 'bg')} bg-opacity-20`}>
                    <div className={selectedAchievement.color}>
                      {selectedAchievement.icon}
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold text-blue-950">
                    {selectedAchievement.title}
                  </h2>
                </div>
                
                {selectedAchievement.popupContent}
                
                <button
                  onClick={closeModal}
                  className="mt-8 bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}