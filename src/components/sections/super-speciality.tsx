'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';

interface Doctor {
  name: string;
  designation: string;
  image?: string;
}

interface Speciality {
  id: number;
  name: string;
  description: string;
  detailedDescription: string;
  services: string[];
  color: string;
  icon: JSX.Element;
  image?: string;
  doctors: Doctor[];
}

interface Props {
  specialities: Speciality[];
}

export default function SuperSpeciality({ specialities }: Props) {
  const [selectedSpeciality, setSelectedSpeciality] = useState<Speciality | null>(null);
  const [currentDoctorIndex, setCurrentDoctorIndex] = useState<Record<number, number>>({});

  const closeModal = () => setSelectedSpeciality(null);

  const handleImageError = (doctorIndex: number) => {
    console.error(`Error loading image for doctor index: ${doctorIndex}`);
  };

  return (
    <section className="py-16 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-950 mb-12">
          Our Super Specialities
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {specialities.map((speciality, idx) => (
            <div
              key={speciality.id}
              className="group bg-white rounded-2xl shadow-xl overflow-hidden relative border border-gray-100"
            >
              <div className="flex flex-col p-6 h-full">
                {/* Doctors Carousel */}
                {speciality.doctors.length > 1 ? (
                  <div className="relative">
                    <div className="overflow-hidden rounded-xl">
                      <div
                        className="flex transition-transform duration-500"
                        style={{
                          transform: `translateX(-${
                            (currentDoctorIndex[speciality.id] || 0) * 100
                          }%)`,
                        }}
                      >
                        {speciality.doctors.map((doctor, doctorIndex) => (
                          <div
                            key={doctorIndex}
                            className="min-w-full flex flex-col items-center"
                          >
                            <div className="w-full h-72 md:h-96 rounded-xl overflow-hidden shadow-lg mb-4 flex items-center justify-center">
                              <Image
                                src={
                                  doctor.image ||
                                  speciality.image ||
                                  '/placeholder-doctor.svg'
                                }
                                alt={doctor.name}
                                width={320}
                                height={320}
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                onError={() => handleImageError(doctorIndex)}
                                {...(idx < 2
                                  ? { priority: true }
                                  : { loading: 'lazy' })}
                              />
                            </div>
                            <div className="text-center">
                              <p className="font-semibold text-blue-900 text-lg">
                                {doctor.name}
                              </p>
                              <p className="text-sm text-gray-600">
                                {doctor.designation}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Nav Buttons */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentDoctorIndex((prev) => ({
                          ...prev,
                          [speciality.id]:
                            ((prev[speciality.id] || 0) - 1 + speciality.doctors.length) %
                            speciality.doctors.length,
                        }));
                      }}
                      className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-teal-50 transition-colors border border-gray-100"
                    >
                      <ArrowLeft className="w-5 h-5 text-teal-600" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentDoctorIndex((prev) => ({
                          ...prev,
                          [speciality.id]:
                            ((prev[speciality.id] || 0) + 1) % speciality.doctors.length,
                        }));
                      }}
                      className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-teal-50 transition-colors border border-gray-100"
                    >
                      <ArrowRight className="w-5 h-5 text-teal-600" />
                    </button>

                    {/* Slider Indicators */}
                    <div className="flex justify-center gap-2 mt-4">
                      {speciality.doctors.map((_, dotIndex) => (
                        <button
                          key={dotIndex}
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentDoctorIndex((prev) => ({
                              ...prev,
                              [speciality.id]: dotIndex,
                            }));
                          }}
                          className={`w-2 h-2 rounded-full transition-all ${
                            dotIndex === (currentDoctorIndex[speciality.id] || 0)
                              ? 'w-6 bg-teal-500'
                              : 'bg-gray-300'
                          }`}
                          aria-label={`View doctor ${dotIndex + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center mb-6">
                    <div className="w-full h-72 md:h-96 rounded-xl overflow-hidden shadow-lg mb-4 flex items-center justify-center">
                      <Image
                        src={
                          speciality.doctors[0].image ||
                          speciality.image ||
                          '/placeholder-doctor.svg'
                        }
                        alt={speciality.doctors[0].name}
                        width={320}
                        height={320}
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        onError={() => handleImageError(0)}
                        {...(idx < 2 ? { priority: true } : { loading: 'lazy' })}
                      />
                    </div>
                    <div className="text-center">
                      <p className="font-semibold text-blue-900 text-lg">
                        {speciality.doctors[0].name}
                      </p>
                      <p className="text-sm text-gray-600">
                        {speciality.doctors[0].designation}
                      </p>
                    </div>
                  </div>
                )}

                {/* Description */}
                <div className="flex flex-col flex-grow">
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {speciality.description}
                  </p>
                  <div className="flex-grow"></div>
                </div>

                <button
                  onClick={() => setSelectedSpeciality(speciality)}
                  className="inline-flex items-center gap-2 text-teal-500 font-semibold text-sm hover:gap-3 transition-all duration-300 group"
                >
                  VIEW MORE DETAILS
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group transform transition-all duration-300 hover:scale-110">
              <div className="text-3xl font-bold text-teal-600 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                6
              </div>
              <div className="text-gray-600 text-sm group-hover:text-gray-800 transition-colors duration-300 font-medium">
                Super Specialities
              </div>
            </div>

            <div className="group transform transition-all duration-300 hover:scale-110">
              <div className="text-3xl font-bold text-teal-600 mb-2 group-hover:text-green-600 transition-colors duration-300">
                27+
              </div>
              <div className="text-gray-600 text-sm group-hover:text-gray-800 transition-colors duration-300 font-medium">
                Specialist Doctors
              </div>
            </div>

            <div className="group transform transition-all duration-300 hover:scale-110">
              <div className="text-3xl font-bold text-teal-600 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                1000+
              </div>
              <div className="text-gray-600 text-sm group-hover:text-gray-800 transition-colors duration-300 font-medium">
                Complex Surgeries/Year
              </div>
            </div>

            <div className="group transform transition-all duration-300 hover:scale-110">
              <div className="text-3xl font-bold text-teal-600 mb-2 group-hover:text-orange-600 transition-colors duration-300">
                24/7
              </div>
              <div className="text-gray-600 text-sm group-hover:text-gray-800 transition-colors duration-300 font-medium">
                Emergency Care
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedSpeciality && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
            >
              <X className="w-6 h-6 text-gray-800" />
            </button>

            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div
                  className={`w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md border-2 ${selectedSpeciality.color.replace(
                    'text-',
                    'border-'
                  )}`}
                >
                  <div className={selectedSpeciality.color}>
                    {selectedSpeciality.icon}
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-blue-950">
                  {selectedSpeciality.name}
                </h3>
              </div>
            </div>

            {/* Modal Doctors */}
            <div className="p-6 border-b border-gray-100">
              <h4 className="text-xl font-bold text-blue-950 mb-6">
                Our Specialist Doctors
              </h4>
              <div
                className={`grid gap-8 ${
                  selectedSpeciality.doctors.length === 1
                    ? 'grid-cols-1 justify-items-center'
                    : 'grid-cols-1 md:grid-cols-2'
                }`}
              >
                {selectedSpeciality.doctors.map((doctor, index) => (
                  <div
                    key={index}
                    className={`flex flex-col items-center text-center ${
                      selectedSpeciality.doctors.length === 1 ? 'max-w-sm' : ''
                    }`}
                  >
                    <div className="relative w-48 h-48 flex-shrink-0 overflow-hidden rounded-2xl shadow-lg mb-4 group">
                      <Image
                        src={
                          doctor.image ||
                          selectedSpeciality.image ||
                          '/placeholder-doctor.svg'
                        }
                        alt={doctor.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 24vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        {...(index < 2
                          ? { priority: true }
                          : { loading: 'lazy' })}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-blue-900 text-lg mb-1">
                        {doctor.name}
                      </div>
                      <div className="text-sm text-gray-700 leading-tight">
                        {doctor.designation}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6">
              <div className="bg-blue-50 rounded-xl p-4 border border-blue-100 mb-6">
                <p className="text-sm text-gray-700 italic">
                  {selectedSpeciality.description}
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-xl font-bold text-blue-950 mb-4">
                  About {selectedSpeciality.name}
                </h4>
                <p className="text-gray-700 leading-relaxed text-justify">
                  {selectedSpeciality.detailedDescription}
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-blue-950 mb-4">
                  Our Services Include:
                </h4>
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
        </div>
      )}
    </section>
  );
}
