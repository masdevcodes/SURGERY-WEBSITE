'use client';

import Image from 'next/image';
import { useState } from 'react';
import { 
  Heart, 
  Brain, 
  Shield, 
  Scissors, 
  Baby, 
  Activity,
  ArrowRight,
  X
} from 'lucide-react';

interface Speciality {
  id: number;
  name: string;
  icon: React.ReactNode;
  description: string;
  detailedDescription: string;
  color: string;
  image: string;
  services: string[];
}

export function SuperSpeciality() {
  const [selectedSpeciality, setSelectedSpeciality] = useState<Speciality | null>(null);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const handleImageError = (id: number) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  const specialities: Speciality[] = [
    // ... (specialities array remains the same)
  ];

  const closeModal = () => setSelectedSpeciality(null);

  return (
    <section id="super-speciality" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
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
              Advanced Medical Care
            </span>
            <div className="w-16 h-1 bg-teal-500"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-blue-950 font-headline leading-tight mb-4">
            Super Speciality Wings
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
            Specialized surgical departments offering advanced care across multiple medical disciplines at GMC Patiala
          </p>
        </div>

        {/* Specialities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialities.map((speciality) => (
            <div
              key={speciality.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-teal-200 overflow-hidden"
            >
              {/* Image - Increased height from h-48 to h-60 */}
              <div className="relative h-60 overflow-hidden">
                {imageErrors[speciality.id] ? (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <div className={speciality.color}>{speciality.icon}</div>
                  </div>
                ) : (
                  <Image
                    src={speciality.image}
                    alt={speciality.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    quality={85}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy"
                    onError={() => handleImageError(speciality.id)}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                
                {/* Icon Overlay */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 rounded-xl flex items-center justify-center shadow-lg">
                  <div className={speciality.color}>{speciality.icon}</div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-950 mb-3 group-hover:text-teal-600 transition-colors duration-300">
                  {speciality.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {speciality.description}
                </p>
                
                {/* Learn More Button */}
                <button
                  onClick={() => setSelectedSpeciality(speciality)}
                  className="inline-flex items-center gap-2 text-teal-500 font-semibold text-sm hover:gap-3 transition-all duration-300 group"
                >
                  LEARN MORE
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section with Zoom Effect */}
        <div className="mt-16 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="transform transition-all duration-500 hover:scale-110 cursor-pointer">
              <div className="text-3xl font-bold text-teal-600 mb-2">6</div>
              <div className="text-gray-600 text-sm">Super Specialities</div>
            </div>
            <div className="transform transition-all duration-500 hover:scale-110 cursor-pointer">
              <div className="text-3xl font-bold text-teal-600 mb-2">27+</div>
              <div className="text-gray-600 text-sm">Specialist Doctors</div>
            </div>
            <div className="transform transition-all duration-500 hover:scale-110 cursor-pointer">
              <div className="text-3xl font-bold text-teal-600 mb-2">1000+</div>
              <div className="text-gray-600 text-sm">Complex Surgeries/Year</div>
            </div>
            <div className="transform transition-all duration-500 hover:scale-110 cursor-pointer">
              <div className="text-3xl font-bold text-teal-600 mb-2">24/7</div>
              <div className="text-gray-600 text-sm">Emergency Care</div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Speciality Details */}
      {selectedSpeciality && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6 text-gray-800" />
            </button>
            
            {/* Modal Header Image - Increased height from h-64 to h-80 */}
            <div className="relative h-80 overflow-hidden rounded-t-2xl">
              {imageErrors[selectedSpeciality.id] ? (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <div className={selectedSpeciality.color}>{selectedSpeciality.icon}</div>
                </div>
              ) : (
                <Image
                  src={selectedSpeciality.image}
                  alt={selectedSpeciality.name}
                  fill
                  className="object-cover"
                  onError={() => handleImageError(selectedSpeciality.id)}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                    {selectedSpeciality.icon}
                  </div>
                  <h3 className="text-3xl font-bold">{selectedSpeciality.name}</h3>
                </div>
              </div>
            </div>
            
            {/* Modal Content */}
            <div className="p-8">
              <p className="text-gray-700 leading-relaxed mb-6 text-justify">
                {selectedSpeciality.detailedDescription}
              </p>
              
              <h4 className="text-xl font-bold text-blue-950 mb-4">Our Services Include:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {selectedSpeciality.services.map((service, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}