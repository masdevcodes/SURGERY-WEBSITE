'use client';
import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import { Heart, Brain, Shield, Scissors, Baby, Activity, ArrowRight, ArrowLeft, X } from 'lucide-react';

interface Doctor {
  name: string;
  designation: string;
  image?: string;
}

interface Speciality {
  id: number;
  name: string;
  icon: React.ReactNode;
  description: string;
  detailedDescription: string;
  color: string;
  image: string;
  services: string[];
  doctors: Doctor[];
}

export function SuperSpeciality() {
  const [selectedSpeciality, setSelectedSpeciality] = useState<Speciality | null>(null);
  const [currentDoctorIndex, setCurrentDoctorIndex] = useState<Record<number, number>>({});

  const specialities: Speciality[] = [
    {
      id: 1,
      name: 'Pediatric Surgery',
      icon: <Baby className="w-8 h-8" />,
      description: 'Specialized surgical care for infants, children, and adolescents with congenital and acquired conditions.',
      detailedDescription: 'The Department of Pediatric Surgery at Government Medical College & Rajindra Hospital, Patiala provides specialized surgical care for infants, children, and adolescents. Our experienced team of surgeons and faculty manage a wide range of conditions including congenital anomalies, neonatal surgical emergencies, pediatric trauma, and tumors. The department runs regular OPD and emergency services, along with specialized clinics for newborn care, epilepsy, asthma, cerebral palsy, nephrotic syndrome, and more. With modern facilities and a compassionate approach, the unit is dedicated to ensuring the best outcomes for young patients while also serving as a center for medical education and training.',
      color: 'text-pink-600',
      image: '/images/pediatric-surgery.jpg',
      services: [
        'Congenital anomaly corrections',
        'Pediatric trauma surgery',
        'Minimally invasive procedures',
        'Neonatal surgery',
        'Pediatric oncology surgery'
      ],
      doctors: [
        { name: 'Dr. Ravi Kumar Garg', designation: 'Associate Professors & Head', image: '/images/ss/ravi_kumar.webp' },
        { name: 'Dr. Teg Rabab', designation: 'Assistant Professors', image: '/images/ss/teg_rabab.webp' }
      ]
    },
    {
      id: 2,
      name: 'Neuro Surgery',
      icon: <Brain className="w-8 h-8" />,
      description: 'Advanced neurosurgical procedures for brain, spine, and peripheral nervous system disorders.',
      detailedDescription: 'The Department of Neurosurgery at Government Medical College & Rajindra Hospital, Patiala is dedicated to delivering advanced surgical care for disorders of the brain, spinal cord, peripheral nerves, and skull. Our experts handle a wide spectrum of neurosurgical conditions — including head and spinal trauma, congenital anomalies, brain tumors, hydrocephalus, spinal disorders, neurovascular conditions, and critical neurological emergencies. Equipped with modern operation theatres and diagnostic imaging support, the department combines precise surgical skills with compassionate, patient-centered care.',
      color: 'text-purple-600',
      image: '',
      services: [
        'Brain tumor surgery',
        'Spinal surgery',
        'Trauma neurosurgery',
        'Vascular neurosurgery',
        'Stereotactic procedures'
      ],
      doctors: [
        { name: 'Dr. Harish Kumar', designation: 'Associate Professors', image: '/images/ss/harish_kumar.webp' },
      ]
    },
    {
      id: 3,
      name: 'Surgical Oncology',
      icon: <Shield className="w-8 h-8" />,
      description: 'Comprehensive cancer surgery with multidisciplinary approach for optimal patient outcomes.',
      detailedDescription: 'The Department of Surgical Oncology at GMC & Rajindra Hospital, Patiala is committed to providing comprehensive surgical care in the diagnosis, treatment, and management of cancer. Our skilled surgical oncologists perform complex operations for a wide variety of tumors, including breast, gastrointestinal, head & neck, skin, soft tissue, and other malignancies. With access to modern operating theatres, multidisciplinary collaboration and a patient-centric approach, the department aims to deliver the best possible outcomes while ensuring compassionate care.',
      color: 'text-green-600',
      image: '/images/surgical-oncology.jpg',
      services: [
        'Complex tumor resections',
        'Oncoplastic surgery',
        'Minimally invasive cancer surgery',
        'Reconstructive oncology',
        'Palliative surgery'
      ],
      doctors: [
        { name: 'Dr. Anubha Garg', designation: 'Assistant Professor', image: '' },
      ]
    },
    {
      id: 4,
      name: 'CVTS',
      icon: <Heart className="w-8 h-8" />,
      description: 'Cardiothoracic and Vascular Surgery for heart, lung, and vascular system conditions.',
      detailedDescription: 'Cardiothoracic and Vascular Surgery for heart, lung, and vascular system conditions.',
      detailedDescription: 'The CVTS (Cardio-Vascular & Thoracic Surgery) Department at Government Medical College & Rajindra Hospital, Patiala delivers high-end surgical care for diseases of the heart, blood vessels, lungs, and chest structures. Our team of cardiovascular & thoracic surgeons is experienced in treating congenital and acquired cardiac conditions, performing open-heart surgeries, valve replacements and repairs, coronary artery bypass grafting (CABG), thoracic tumor resections, lung surgeries, and interventions for trauma and other chest emergencies.',
      color: 'text-red-600',
      image: '/images/ctvs.png',
      services: [
        'Cardiac surgery',
        'Thoracic surgery',
        'Vascular surgery',
        'Minimally invasive cardiac procedures',
        'Emergency cardiac interventions'
      ], 
      doctors: [
        { name: 'Dr. Anumeet Bagga', designation: 'Assistant Professor', image: '' }
      ]
    },
    {
      id: 5,
      name: 'Urology',
      icon: <Activity className="w-8 h-8" />,
      description: 'Advanced urological procedures for kidney, bladder, prostate, and reproductive system disorders.',
      detailedDescription: 'The Urology Department at GMC & Rajindra Hospital, Patiala offers expert surgical and medical care for disorders of the urinary tract and male reproductive system. Under the leadership of accomplished faculty, the department handles a wide range of conditions — kidney stones, enlarged prostate, urinary incontinence, urinary tract infections, urethral strictures, male infertility, and urinary cancers. Drawing on advanced diagnostics and therapies, including minimally invasive and endoscopic surgery, the department emphasizes personalised, compassionate treatment plans.',
      color: 'text-blue-600',
      image: '/images/urology.png',
      services: [
        'Kidney stone treatment',
        'Prostate surgery',
        'Bladder procedures',
        'Minimally invasive urology',
        'Reconstructive urology'
      ],
      doctors: [
        { name: 'Dr. Harbhupinder Sandhu', designation: 'Assistant Professor', image: '' }
      ]
    },
    {
      id: 6,
      name: 'Plastic Surgery', 
      icon: <Scissors className="w-8 h-8" />,
      description: 'Reconstructive and aesthetic surgery for trauma, congenital defects, and cosmetic enhancement.',
      detailedDescription: 'The Plastic Surgery Department at GMC & Rajindra Hospital, Patiala offers both aesthetic and reconstructive surgical care using up-to-date techniques and compassionate, patient-centred service. The team handles a broad spectrum of procedures—cosmetic surgery like rhinoplasty, breast procedures, liposuction, body contouring; reconstructive surgery including hand surgery, burn care, microsurgery, treatment of congenital deformities, trauma reconstruction, and post-cancer reconstructive work.',
      color: 'text-orange-600',
      image: '/images/plastic-surgery.png',
      services: [
        'Reconstructive surgery',
        'Burn surgery',
        'Hand surgery',
        'Microsurgery',
        'Aesthetic procedures'
      ],
      doctors: [
        { name: 'Dr. Ojaswi', designation: 'Assistant Professor', image: '' }
      ]
    }
  ];

  // ✅ **MODIFICATION:** Function to automatically collect all image paths from your data
  const getAllImagePaths = useCallback(() => {
    const paths = new Set<string>();

    specialities.forEach(speciality => {
      // Add the main speciality image if it exists
      if (speciality.image) {
        paths.add(speciality.image);
      }
      // Add all doctor images
      speciality.doctors.forEach(doctor => {
        if (doctor.image) {
          paths.add(doctor.image);
        }
      });
    });

    // Add other critical images
    paths.add('/111.png');
    paths.add('/placeholder-doctor.svg');

    return Array.from(paths);
  }, [specialities]);

  const allImagesToPreload = getAllImagePaths();

  useEffect(() => {
    const intervalIds: NodeJS.Timeout[] = [];
    specialities.forEach(speciality => {
      if (speciality.doctors.length > 1) {
        const intervalId = setInterval(() => {
          setCurrentDoctorIndex(prev => ({
            ...prev,
            [speciality.id]: ((prev[speciality.id] || 0) + 1) % speciality.doctors.length
          }));
        }, 3000);
        intervalIds.push(intervalId);
      }
    });
    return () => {
      intervalIds.forEach(id => clearInterval(id));
    };
  }, [specialities]);

  const closeModal = () => setSelectedSpeciality(null);

  const OptimizedImage = ({
    src,
    alt,
    width,
    height,
    className,
    priority = false
  }: {
    src: string;
    alt: string;
    width: number;
    height: number;
    className?: string;
    priority?: boolean;
  }) => {
    const fallbackSrc = '/placeholder-doctor.svg';
    const [imgSrc, setImgSrc] = useState(src || fallbackSrc);
    const [isLoading, setIsLoading] = useState(true);

    return (
      <div className={`relative ${className}`}>
        {isLoading && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-teal-200 border-t-teal-500 rounded-full animate-spin"></div>
          </div>
        )}
        <Image
          src={imgSrc}
          alt={alt}
          width={width}
          height={height}
          className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'} ${className}`}
          priority={priority}
          loading={priority ? "eager" : "lazy"}
          quality={75}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaUMk6objM5efLnsf1t6gDmSua4BJE4r//Z"
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setImgSrc(fallbackSrc);
            setIsLoading(false);
          }}
        />
      </div>
    );
  };

  return (
    <>
      {/* ✅ This section now uses the dynamic 'allImagesToPreload' list */}
      <div style={{ display: 'none' }}>
        {allImagesToPreload.map((src, index) => (
          <Image key={index} src={src} alt="Preload" width={1} height={1} priority />
        ))}
      </div>

      <section id="super-speciality" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-cover bg-center" style={{ backgroundImage: 'url(/111.png)' }}></div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-16 h-1 bg-teal-500"></div>
              <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Advanced Medical Care</span>
              <div className="w-16 h-1 bg-teal-500"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-950 leading-tight mb-4">Super Speciality Wings</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
              Specialized surgical departments offering advanced care across multiple medical disciplines at GMC Patiala
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialities.map((speciality) => (
              <div
                key={speciality.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-teal-200 overflow-hidden"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-950 mb-4 group-hover:text-teal-600 transition-colors duration-300 text-center uppercase">
                    {speciality.name}
                  </h3>
                  {speciality.doctors.length > 1 ? (
                    <div className="relative mb-6">
                      <div className="overflow-hidden">
                        <div
                          className="flex transition-transform duration-500 ease-in-out"
                          style={{ transform: `translateX(-${(currentDoctorIndex[speciality.id] || 0) * 100}%)` }}
                        >
                          {speciality.doctors.map((doctor, doctorIndex) => (
                            <div key={doctorIndex} className="min-w-full flex flex-col items-center">
                              <div className="w-full h-72 md:h-96 rounded-xl overflow-hidden shadow-lg mb-4 flex items-center justify-center">
                                <OptimizedImage
                                  src={doctor.image || speciality.image || '/placeholder-doctor.svg'}
                                  alt={doctor.name}
                                  width={320}
                                  height={320}
                                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                  priority={speciality.id === 1 && doctorIndex === 0}
                                />
                              </div>
                              <div className="text-center">
                                <p className="font-semibold text-blue-900 text-lg">{doctor.name}</p>
                                <p className="text-sm text-gray-600">{doctor.designation}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentDoctorIndex(prev => ({
                            ...prev,
                            [speciality.id]: ((prev[speciality.id] || 0) - 1 + speciality.doctors.length) % speciality.doctors.length
                          }));
                        }}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-teal-50 transition-colors border border-gray-100"
                      >
                        <ArrowLeft className="w-5 h-5 text-teal-600" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentDoctorIndex(prev => ({
                            ...prev,
                            [speciality.id]: ((prev[speciality.id] || 0) + 1) % speciality.doctors.length
                          }));
                        }}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-teal-50 transition-colors border border-gray-100"
                      >
                        <ArrowRight className="w-5 h-5 text-teal-600" />
                      </button>
                      <div className="flex justify-center gap-2 mt-4">
                        {speciality.doctors.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={(e) => {
                              e.stopPropagation();
                              setCurrentDoctorIndex(prev => ({ ...prev, [speciality.id]: idx }));
                            }}
                            className={`w-2 h-2 rounded-full transition-all ${idx === (currentDoctorIndex[speciality.id] || 0) ? 'w-6 bg-teal-500' : 'bg-gray-300'}`}
                            aria-label={`View doctor ${idx + 1}`}
                          />
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center mb-6">
                      <div className="w-full h-72 md:h-96 rounded-xl overflow-hidden shadow-lg mb-4 flex items-center justify-center">
                        <OptimizedImage
                          src={speciality.doctors[0].image || speciality.image || '/placeholder-doctor.svg'}
                          alt={speciality.doctors[0].name}
                          width={320}
                          height={320}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                          priority={speciality.id === 1}
                        />
                      </div>
                      <div className="text-center">
                        <p className="font-semibold text-blue-900 text-lg">{speciality.doctors[0].name}</p>
                        <p className="text-sm text-gray-600">{speciality.doctors[0].designation}</p>
                      </div>
                    </div>
                  )}
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

          <div className="mt-16 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div className="group transform transition-all duration-300 hover:scale-110">
                    <div className="text-3xl font-bold text-teal-600 mb-2 group-hover:text-blue-600 transition-colors duration-300">6</div>
                    <div className="text-gray-600 text-sm group-hover:text-gray-800 transition-colors duration-300 font-medium">Super Specialities</div>
                </div>
                <div className="group transform transition-all duration-300 hover:scale-110">
                    <div className="text-3xl font-bold text-teal-600 mb-2 group-hover:text-green-600 transition-colors duration-300">27+</div>
                    <div className="text-gray-600 text-sm group-hover:text-gray-800 transition-colors duration-300 font-medium">Specialist Doctors</div>
                </div>
                <div className="group transform transition-all duration-300 hover:scale-110">
                    <div className="text-3xl font-bold text-teal-600 mb-2 group-hover:text-purple-600 transition-colors duration-300">1000+</div>
                    <div className="text-gray-600 text-sm group-hover:text-gray-800 transition-colors duration-300 font-medium">Complex Surgeries/Year</div>
                </div>
                <div className="group transform transition-all duration-300 hover:scale-110">
                    <div className="text-3xl font-bold text-teal-600 mb-2 group-hover:text-orange-600 transition-colors duration-300">24/7</div>
                    <div className="text-gray-600 text-sm group-hover:text-gray-800 transition-colors duration-300 font-medium">Emergency Care</div>
                </div>
            </div>
          </div>
        </div>

        {selectedSpeciality && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={closeModal}>
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
              >
                <X className="w-6 h-6 text-gray-800" />
              </button>
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md border-2 ${selectedSpeciality.color.replace('text-', 'border-')}`}>
                    <div className={selectedSpeciality.color}>{selectedSpeciality.icon}</div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-blue-950">{selectedSpeciality.name}</h3>
                </div>
              </div>
              <div className="p-6 border-b border-gray-100">
                <h4 className="text-xl font-bold text-blue-950 mb-6">Our Specialist Doctors</h4>
                <div className={`grid gap-8 ${selectedSpeciality.doctors.length === 1 ? 'grid-cols-1 justify-items-center' : 'grid-cols-1 md:grid-cols-2'}`}>
                  {selectedSpeciality.doctors.map((doctor, index) => (
                    <div key={index} className={`flex flex-col items-center text-center ${selectedSpeciality.doctors.length === 1 ? 'max-w-sm' : ''}`}>
                      <div className="relative w-48 h-48 flex-shrink-0 overflow-hidden rounded-2xl shadow-lg mb-4 group">
                        <OptimizedImage
                          src={doctor.image || selectedSpeciality.image || '/placeholder-doctor.svg'}
                          alt={doctor.name}
                          width={192}
                          height={192}
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                          priority={true}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-bold text-blue-900 text-lg mb-1">{doctor.name}</div>
                        <div className="text-sm text-gray-700 leading-tight">{doctor.designation}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-6">
                <div className="bg-blue-50 rounded-xl p-4 border border-blue-100 mb-6">
                  <p className="text-sm text-gray-700 italic">{selectedSpeciality.description}</p>
                </div>
                <div className="mb-6">
                  <h4 className="text-xl font-bold text-blue-950 mb-4">About {selectedSpeciality.name}</h4>
                  <p className="text-gray-700 leading-relaxed text-justify">{selectedSpeciality.detailedDescription}</p>
                </div>
                <div>
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
          </div>
        )}
      </section>
    </>
  );
}