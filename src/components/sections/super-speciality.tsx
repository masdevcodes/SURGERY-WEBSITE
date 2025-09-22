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
  modalImage?: string;
  services: string[];
  doctors: Doctor[];
}

export function SuperSpeciality() {
  const [selectedSpeciality, setSelectedSpeciality] = useState<Speciality | null>(null);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const handleImageError = (id: number) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  const specialities: Speciality[] = [
    {
      id: 1,
      name: 'Pediatric Surgery',
      icon: <Baby className="w-8 h-8" />,
      description: 'Specialized surgical care for infants, children, and adolescents with congenital and acquired conditions.',
      detailedDescription: 'The Department of Pediatric Surgery at Government Medical College & Rajindra Hospital, Patiala provides specialized surgical care for infants, children, and adolescents. Our experienced team of surgeons and faculty manage a wide range of conditions including congenital anomalies, neonatal surgical emergencies, pediatric trauma, and tumors. The department runs regular OPD and emergency services, along with specialized clinics for newborn care, epilepsy, asthma, cerebral palsy, nephrotic syndrome, and more. With modern facilities and a compassionate approach, the unit is dedicated to ensuring the best outcomes for young patients while also serving as a center for medical education and training.',
      color: 'text-pink-600',
      image: '/images/pediatric-surgery.jpg',
      modalImage: '/images/pediatric-surgery.jpg',
      services: [
        'Congenital anomaly corrections',
        'Pediatric trauma surgery',
        'Minimally invasive procedures',
        'Neonatal surgery',
        'Pediatric oncology surgery'
      ],
      doctors: [
        { 
          name: 'Dr. Priya Sharma', 
          designation: 'Senior Consultant Pediatric Surgeon',
          image: '/images/doctors/dr-priya-sharma.jpg'
        },
        { 
          name: 'Dr. Rohit Patel', 
          designation: 'Consultant Pediatric Surgeon',
          image: '/images/doctors/dr-rohit-patel.jpg'
        }
      ]
    },
    {
      id: 2,
      name: 'Neuro Surgery',
      icon: <Brain className="w-8 h-8" />,
      description: 'Advanced neurosurgical procedures for brain, spine, and peripheral nervous system disorders.',
      detailedDescription: 'The Department of Neurosurgery at Government Medical College & Rajindra Hospital, Patiala is dedicated to delivering advanced surgical care for disorders of the brain, spinal cord, peripheral nerves, and skull. Our experts handle a wide spectrum of neurosurgical conditions — including head and spinal trauma, congenital anomalies, brain tumors, hydrocephalus, spinal disorders, neurovascular conditions, and critical neurological emergencies. Equipped with modern operation theatres and diagnostic imaging support, the department combines precise surgical skills with compassionate, patient-centered care. We strive not only for excellent surgical outcomes but also for teaching, research, and community health, serving southern Punjab and beyond with accessible neurosurgical services.',
      color: 'text-purple-600',
      image: '/images/neuro-surgery.jpg',
      modalImage: '/images/neuro-surgery.jpg',
      services: [
        'Brain tumor surgery',
        'Spinal surgery',
        'Trauma neurosurgery',
        'Vascular neurosurgery',
        'Stereotactic procedures'
      ],
      doctors: [
        { 
          name: 'Dr. Sanjeev Gupta', 
          designation: 'Head of Neurosurgery Department',
          image: '/images/doctors/dr-sanjeev-gupta.jpg'
        },
        { 
          name: 'Dr. Neha Kaur', 
          designation: 'Consultant Neurosurgeon',
          image: '/images/doctors/dr-neha-kaur.jpg'
        }
      ]
    },
    {
      id: 3,
      name: 'Surgical Oncology',
      icon: <Shield className="w-8 h-8" />,
      description: 'Comprehensive cancer surgery with multidisciplinary approach for optimal patient outcomes.',
      detailedDescription: 'The Department of Surgical Oncology at GMC & Rajindra Hospital, Patiala is committed to providing comprehensive surgical care in the diagnosis, treatment, and management of cancer. Our skilled surgical oncologists perform complex operations for a wide variety of tumors, including breast, gastrointestinal, head & neck, skin, soft tissue, and other malignancies. With access to modern operating theatres, multidisciplinary collaboration (with medical oncology, radiation oncology, radiology, pathology), and a patient-centric approach, the department aims to deliver the best possible outcomes while ensuring compassionate care. We also serve as a center for cancer surgery training and research, helping advance oncological surgical practices in the region.',
      color: 'text-green-600',
      image: '/images/surgical-oncology.jpg',
      modalImage: '/images/surgical-oncology.jpg',
      services: [
        'Complex tumor resections',
        'Oncoplastic surgery',
        'Minimally invasive cancer surgery',
        'Reconstructive oncology',
        'Palliative surgery'
      ],
      doctors: [
        { 
          name: 'Dr. Harbhupinder Singh', 
          designation: 'Chief Surgical Oncologist',
          image: '/images/doctors/dr-harbhupinder-singh.jpg'
        },
        { 
          name: 'Dr. Aseem Kumar', 
          designation: 'Surgical Oncologist',
          image: '/images/doctors/dr-aseem-kumar.jpg'
        }
      ]
    },
    {
      id: 4,
      name: 'CVTS',
      icon: <Heart className="w-8 h-8" />,
      description: 'Cardiothoracic and Vascular Surgery for heart, lung, and vascular system conditions.',
      detailedDescription: 'The CVTS (Cardio-Vascular & Thoracic Surgery) Department at Government Medical College & Rajindra Hospital, Patiala delivers high-end surgical care for diseases of the heart, blood vessels, lungs, and chest structures. Our team of cardiovascular & thoracic surgeons is experienced in treating congenital and acquired cardiac conditions, performing open-heart surgeries, valve replacements and repairs, coronary artery bypass grafting (CABG), thoracic tumor resections, lung surgeries, and interventions for trauma and other chest emergencies. Equipped with modern operating theatres, advanced imaging, post-operative intensive care, and multidisciplinary collaboration (including cardiology, anesthesiology, critical care), the department strives for the highest standards of safety, precision, and compassionate patient care. We are committed not only to excellent surgical outcomes but also to training the next generation of surgeons and bringing accessible cardiac & thoracic care to the region.',
      color: 'text-red-600',
      image: '/images/ctvs.png',
      modalImage: '/images/ctvs.png',
      services: [
        'Cardiac surgery',
        'Thoracic surgery',
        'Vascular surgery',
        'Minimally invasive cardiac procedures',
        'Emergency cardiac interventions'
      ],
      doctors: [
        { 
          name: 'Dr. Vikas Goyal', 
          designation: 'Head of CVTS Department',
          image: '/images/doctors/dr-vikas-goyal.jpg'
        },
        { 
          name: 'Dr. Dinesh Kumar', 
          designation: 'Senior Consultant, CVTS',
          image: '/images/doctors/dr-dinesh-kumar.jpg'
        }
      ]
    },
    {
      id: 5,
      name: 'Urology',
      icon: <Activity className="w-8 h-8" />,
      description: 'Advanced urological procedures for kidney, bladder, prostate, and reproductive system disorders.',
      detailedDescription: 'The Urology Department at GMC & Rajindra Hospital, Patiala offers expert surgical and medical care for disorders of the urinary tract and male reproductive system. Under the leadership of accomplished faculty such as Dr. Harjinder Singh (Professor & Principal) and Dr. Harbhupinder Singh (Professor), the department handles a wide range of conditions — kidney stones, enlarged prostate, urinary incontinence, urinary tract infections, urethral strictures, male infertility, and urinary cancers. Drawing on advanced diagnostics and therapies, including minimally invasive and endoscopic surgery, the department emphasizes personalised, compassionate treatment plans. We strive for high standards in patient-care, research, and medical teaching, serving the health needs of Patiala and the surrounding region.',
      color: 'text-blue-600',
      image: '/images/urology.png',
      modalImage: '/images/urology.png',
      services: [
        'Kidney stone treatment',
        'Prostate surgery',
        'Bladder procedures',
        'Minimally invasive urology',
        'Reconstructive urology'
      ],
      doctors: [
        { 
          name: 'Dr. Harjinder Singh', 
          designation: 'Professor & Principal',
          image: '/images/doctors/dr-harjinder-singh.jpg'
        },
        { 
          name: 'Dr. Harbhupinder Singh', 
          designation: 'Professor, Urology',
          image: '/images/doctors/dr-harbhupinder-singh-urology.jpg'
        }
      ]
    },
    {
      id: 6,
      name: 'Plastic Surgery',
      icon: <Scissors className="w-8 h-8" />,
      description: 'Reconstructive and aesthetic surgery for trauma, congenital defects, and cosmetic enhancement.',
      detailedDescription: 'The Plastic Surgery Department at GMC & Rajindra Hospital, Patiala offers both aesthetic and reconstructive surgical care using up-to-date techniques and compassionate, patient-centred service. The team handles a broad spectrum of procedures—cosmetic surgery like rhinoplasty, breast procedures, liposuction, body contouring; reconstructive surgery including hand surgery, burn care, microsurgery, treatment of congenital deformities, trauma reconstruction, and post-cancer reconstructive work. Equipped with modern operating theatres and supported by diagnostic imaging and anaesthesia services, the department strives to deliver high standards of safety, functional restoration, and improved appearance. Whether restoring health and function after injury, surgery or congenital condition, or helping patients with cosmetic concerns, we are committed to excellence in surgical technique, research, and teaching.',
      color: 'text-orange-600',
      image: '/images/plastic-surgery.png',
      modalImage: '/images/plastic-surgery.png',
      services: [
        'Reconstructive surgery',
        'Burn surgery',
        'Hand surgery',
        'Microsurgery',
        'Aesthetic procedures'
      ],
      doctors: [
        { 
          name: 'Dr. Jaswinder Singh', 
          designation: 'Consultant Plastic Surgeon',
          image: '/images/doctors/dr-jaswinder-singh.jpg'
        },
        { 
          name: 'Dr. Navneeth Kaur', 
          designation: 'Plastic Surgeon',
          image: '/images/doctors/dr-navneeth-kaur.jpg'
        }
      ]
    }
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
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
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
                  VIEW MORE DETAILS
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-teal-600 mb-2">6</div>
              <div className="text-gray-600 text-sm">Super Specialities</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-600 mb-2">27+</div>
              <div className="text-gray-600 text-sm">Specialist Doctors</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-600 mb-2">1000+</div>
              <div className="text-gray-600 text-sm">Complex Surgeries/Year</div>
            </div>
            <div>
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
            
            {/* Modal Header with Speciality Name */}
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md border-2 ${selectedSpeciality.color.replace('text-', 'border-')}`}>
                  <div className={selectedSpeciality.color}>{selectedSpeciality.icon}</div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-blue-950">{selectedSpeciality.name}</h3>
              </div>
            </div>

            {/* Doctors Section with Images */}
            <div className="p-6 border-b border-gray-100">
              <h4 className="text-xl font-bold text-blue-950 mb-4">Our Specialist Doctors</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {selectedSpeciality.doctors.map((doctor, index) => (
                  <div key={index} className="flex items-start gap-4 bg-blue-50 rounded-xl p-4 border border-blue-100">
                    {/* Doctor Image Container - Square with Zoom Effect */}
                    <div className="relative w-20 h-20 flex-shrink-0 overflow-hidden rounded-lg shadow-md group">
                      {doctor.image ? (
                        <Image
                          src={doctor.image}
                          alt={doctor.name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                          onError={(e) => {
                            // Fallback to speciality image if doctor image fails
                            const target = e.target as HTMLImageElement;
                            target.src = selectedSpeciality.image;
                          }}
                        />
                      ) : (
                        // Fallback to speciality image if no doctor image
                        <Image
                          src={selectedSpeciality.image}
                          alt={doctor.name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      )}
                    </div>
                    
                    {/* Doctor Details */}
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-blue-900 text-lg mb-1">{doctor.name}</div>
                      <div className="text-sm text-gray-700">{doctor.designation}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6">
              {/* Brief Description */}
              <div className="bg-blue-50 rounded-xl p-4 border border-blue-100 mb-6">
                <p className="text-sm text-gray-700 italic">
                  {selectedSpeciality.description}
                </p>
              </div>

              {/* Detailed Description */}
              <div className="mb-6">
                <h4 className="text-xl font-bold text-blue-950 mb-4">About {selectedSpeciality.name}</h4>
                <p className="text-gray-700 leading-relaxed text-justify">
                  {selectedSpeciality.detailedDescription}
                </p>
              </div>
              
              {/* Services Section */}
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
  );
}