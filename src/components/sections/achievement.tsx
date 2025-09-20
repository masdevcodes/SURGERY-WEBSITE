'use client';
import { useState } from 'react';
import Image from 'next/image';
import {
  Award,
  Users,
  Clock,
  Star,
  TrendingUp,
  CheckCircle,
  HeartPulse,
  Scissors,
  Target,
  UserCheck,
  Calendar,
  Activity
} from 'lucide-react';

export function Achievements() {
  const achievements = [
    {
      id: 1,
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
      id: 2,
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
      id: 3,
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
      id: 4,
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
                <Scissors className="w-5 h-5 text-purple-500" />
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

  // Left side stats cards data with popup content
  const statsCards = [
    {
      id: 1,
      icon: <Target className="w-8 h-8 text-teal-600" />,
      title: '98% Success Rate',
      description: 'Highest surgical success rate in the region across all procedures',
      color: 'bg-teal-100',
      borderColor: 'hover:border-teal-200',
      popupContent: (
        <div>
          <h3 className="font-bold text-2xl mb-4">98% Surgical Success Rate</h3>
          <p className="text-gray-700 leading-relaxed text-justify mb-4">
            Our department maintains a 98% success rate across all surgical procedures, 
            significantly higher than the national average of 92%. This exceptional rate 
            reflects our commitment to precision, safety, and continuous quality improvement.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold text-lg mb-3">Success Rate by Specialty</h4>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between mb-1">
                  <span>Orthopedic Surgery</span>
                  <span className="font-medium text-teal-600">99.1%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-teal-500 h-2.5 rounded-full" style={{width: '99.1%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span>Cardiac Surgery</span>
                  <span className="font-medium text-teal-600">97.8%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-teal-500 h-2.5 rounded-full" style={{width: '97.8%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span>General Surgery</span>
                  <span className="font-medium text-teal-600">98.5%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-teal-500 h-2.5 rounded-full" style={{width: '98.5%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      icon: <UserCheck className="w-8 h-8 text-blue-600" />,
      title: '50+ Expert Surgeons',
      description: 'Board-certified specialists with decades of combined experience',
      color: 'bg-blue-100',
      borderColor: 'hover:border-blue-200',
      popupContent: (
        <div>
          <h3 className="font-bold text-2xl mb-4">Our Surgical Team</h3>
          <p className="text-gray-700 leading-relaxed text-justify mb-4">
            Our team comprises over 50 board-certified surgeons across various specialties, 
            each with an average of 15+ years of experience. Many of our surgeons are 
            recognized as leaders in their fields and contribute to surgical education and research.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-2xl font-bold text-blue-800">25+</p>
              <p className="text-sm text-blue-600">Fellowship-Trained Surgeons</p>
            </div>
            <div className="bg-teal-50 p-4 rounded-lg">
              <p className="text-2xl font-bold text-teal-800">15+</p>
              <p className="text-sm text-teal-600">Years Average Experience</p>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg">
              <p className="text-2xl font-bold text-amber-800">12</p>
              <p className="text-sm text-amber-600">Surgical Specialties</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <p className="text-2xl font-bold text-purple-800">8</p>
              <p className="text-sm text-purple-600">Research Directors</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      icon: <Calendar className="w-8 h-8 text-amber-600" />,
      title: '25+ Years Excellence',
      description: 'Decades of providing exceptional surgical care to our community',
      color: 'bg-amber-100',
      borderColor: 'hover:border-amber-200',
      popupContent: (
        <div>
          <h3 className="font-bold text-2xl mb-4">25 Years of Surgical Excellence</h3>
          <p className="text-gray-700 leading-relaxed text-justify mb-4">
            For over a quarter century, our surgical department has been at the forefront 
            of medical innovation and patient care. We've continuously evolved our practices, 
            adopted new technologies, and maintained the highest standards of surgical excellence.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold text-lg mb-3">Milestones Timeline</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-medium">1998 - Department Founded</p>
                  <p className="text-sm text-gray-600">Established with 5 surgeons and 2 operating rooms</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-medium">2005 - First Laparoscopic Program</p>
                  <p className="text-sm text-gray-600">Pioneered minimally invasive surgery in the region</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-medium">2012 - Robotic Surgery Introduced</p>
                  <p className="text-sm text-gray-600">Acquired first da Vinci Surgical System</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-medium">2020 - Telemedicine Integration</p>
                  <p className="text-sm text-gray-600">Implemented virtual consultations and follow-ups</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 4,
      icon: <Activity className="w-8 h-8 text-purple-600" />,
      title: '15,000+ Surgeries',
      description: 'Successful procedures performed with outstanding outcomes',
      color: 'bg-purple-100',
      borderColor: 'hover:border-purple-200',
      popupContent: (
        <div>
          <h3 className="font-bold text-2xl mb-4">15,000 Surgical Procedures</h3>
          <p className="text-gray-700 leading-relaxed text-justify mb-4">
            Our surgical team has reached the significant milestone of performing over 15,000 
            procedures with exceptional outcomes. This volume of experience translates to 
            refined skills, streamlined processes, and optimal patient results.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold text-lg mb-3">Annual Procedure Growth</h4>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between mb-1">
                  <span>2018</span>
                  <span className="font-medium text-purple-600">850 procedures</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-purple-400 h-2.5 rounded-full" style={{width: '40%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span>2020</span>
                  <span className="font-medium text-purple-600">1,100 procedures</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-purple-500 h-2.5 rounded-full" style={{width: '55%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span>2022</span>
                  <span className="font-medium text-purple-600">1,450 procedures</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-purple-600 h-2.5 rounded-full" style={{width: '72%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span>2023</span>
                  <span className="font-medium text-purple-600">1,800 procedures</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-purple-700 h-2.5 rounded-full" style={{width: '90%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const emergencyCard = {
    id: 5,
    icon: <Clock className="w-8 h-8 text-white" />,
    title: '24/7 Emergency Surgery',
    description: 'Our surgical team is available round the clock with a response time of under 15 minutes for emergency procedures.',
    popupContent: (
      <div>
        <h3 className="font-bold text-2xl mb-4">24/7 Emergency Surgical Services</h3>
        <p className="text-gray-700 leading-relaxed text-justify mb-4">
          Our hospital provides round-the-clock emergency surgical services with a dedicated 
          team of trauma surgeons, anesthesiologists, and operating room staff. We maintain 
          a response time of under 15 minutes for critical emergency procedures, ensuring 
          timely intervention when every second counts.
        </p>
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-2xl font-bold text-blue-800">15 min</p>
            <p className="text-sm text-blue-600">Average Response Time</p>
          </div>
          <div className="bg-teal-50 p-4 rounded-lg">
            <p className="text-2xl font-bold text-teal-800">4</p>
            <p className="text-sm text-teal-600">Dedicated Trauma ORs</p>
          </div>
          <div className="bg-amber-50 p-4 rounded-lg">
            <p className="text-2xl font-bold text-amber-800">12</p>
            <p className="text-sm text-amber-600">Trauma Surgeons on Call</p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg">
            <p className="text-2xl font-bold text-red-800">365</p>
            <p className="text-sm text-red-600">Days/Year Availability</p>
          </div>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg mt-6">
          <h4 className="font-semibold text-lg mb-2">Emergency Services Include:</h4>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>Trauma and emergency general surgery</li>
            <li>Emergency orthopedic and neurosurgical procedures</li>
            <li>Acute abdominal emergencies</li>
            <li>Vascular emergencies</li>
            <li>Pediatric emergency surgery</li>
          </ul>
        </div>
      </div>
    ),
  };

  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [modalType, setModalType] = useState<'achievement' | 'stat' | 'emergency'>('achievement');

  // Close modal
  const closeModal = () => setSelectedItem(null);

  // Open modal for specific item with type
  const openModal = (item: any, type: 'achievement' | 'stat' | 'emergency') => {
    setSelectedItem(item);
    setModalType(type);
  };

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
          <div className="space-y-6">
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

            {/* Stats Cards - Same size as achievement cards */}
            <div className="space-y-6">
              {statsCards.map((card) => (
                <div
                  key={card.id}
                  className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-teal-200 flex items-start gap-4 cursor-pointer"
                  onClick={() => openModal(card, 'stat')}
                >
                  <div className={`w-16 h-16 ${card.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    {card.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-blue-950 mb-1">{card.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Emergency Info Card */}
            <div 
              className="group bg-gradient-to-r from-teal-500 to-blue-500 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 text-white flex items-start gap-4 cursor-pointer"
              onClick={() => openModal(emergencyCard, 'emergency')}
            >
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                {emergencyCard.icon}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-bold mb-1">{emergencyCard.title}</h3>
                <p className="text-sm opacity-90 leading-relaxed">
                  {emergencyCard.description}
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Achievements List */}
          <div className="space-y-6">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-teal-200 flex items-start gap-4 cursor-pointer"
                onClick={() => openModal(achievement, 'achievement')}
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
        {selectedItem && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={closeModal}
          >
            <div
              className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-lg relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header with colored accent */}
              <div className={`h-2 w-full ${
                modalType === 'achievement' ? selectedItem.color.replace('text', 'bg') : 
                modalType === 'stat' ? 'bg-teal-500' : 
                'bg-blue-500'
              }`}></div>

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
                  <div className={`p-3 rounded-xl ${
                    modalType === 'achievement' ? selectedItem.color.replace('text', 'bg') + ' bg-opacity-20' : 
                    modalType === 'stat' ? 'bg-teal-100' : 
                    'bg-blue-100'
                  }`}>
                    <div className={
                      modalType === 'achievement' ? selectedItem.color : 
                      modalType === 'stat' ? 'text-teal-600' : 
                      'text-blue-600'
                    }>
                      {selectedItem.icon}
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold text-blue-950">
                    {selectedItem.title}
                  </h2>
                </div>
                
                {selectedItem.popupContent}
                
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