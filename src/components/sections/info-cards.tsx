'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { useState, MouseEvent, useEffect } from 'react';

export function InfoCards() {
  const [modalContent, setModalContent] = useState<string | null>(null);
  const [stomaImageIndex, setStomaImageIndex] = useState(0);
  const [breastImageIndex, setBreastImageIndex] = useState(0);
  const [traumaImageIndex, setTraumaImageIndex] = useState(0);

  // Sample image arrays - replace with your actual image paths
  const stomaImages = [
    '/stomay.png',
    '/sto2.jpg',
    '/sto3.jpeg',
    '/stom5.png',
  ];
  
  const breastImages = [
    '/brep.png',
    '/bre5.png',
    '/bre1.jpeg',
  ];

  const traumaImages = [
    '/emer.png',
    
  ];

  function openModal(key: string) {
    setModalContent(key);
  }

  function closeModal() {
    setModalContent(null);
  }

  function stopPropagation(e: MouseEvent<HTMLDivElement>) {
    e.stopPropagation();
  }

  // Set up auto-changing image sliders
  useEffect(() => {
    const stomaInterval = setInterval(() => {
      setStomaImageIndex((prevIndex) => 
        prevIndex === stomaImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    const breastInterval = setInterval(() => {
      setBreastImageIndex((prevIndex) => 
        prevIndex === breastImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3500); // Slightly offset timing for visual interest

    const traumaInterval = setInterval(() => {
      setTraumaImageIndex((prevIndex) => 
        prevIndex === traumaImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3200); // Different timing for trauma images

    return () => {
      clearInterval(stomaInterval);
      clearInterval(breastInterval);
      clearInterval(traumaInterval);
    };
  }, [stomaImages.length, breastImages.length, traumaImages.length]);

  // ✅ Reusable modal
  const Modal = ({
    children,
    onClose,
  }: {
    children: React.ReactNode;
    onClose: () => void;
  }) => (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg w-full max-w-5xl max-h-[90vh] overflow-y-auto p-8 relative"
        onClick={stopPropagation}
      >
        <button
          type="button"
          aria-label="Close modal"
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 font-bold text-2xl"
          onClick={onClose}
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );

  function getModalContent(key: string) {
    switch (key) {
      case 'stoma':
        return (
          <div className="flex flex-col justify-center items-center text-center">
            {/* Banner Image for Stoma Clinic */}
            <div className="w-full mb-6">
              <Image
                src="/sto2.jpg"
                alt="Stoma Clinic Banner"
                width={1200}
                height={400}
                className="rounded-lg object-cover w-full h-64"
              />
            </div>

            <h2 className="text-3xl font-bold mb-6">Stoma Clinic Details</h2>
            <p className="text-zinc-700 leading-relaxed max-w-4xl text-justify">
              The Stoma Clinic at GMC Patiala functions as a dedicated service
              within the Department of General Surgery, designed to address the
              unique needs of patients living with stomas. It serves as a
              one-stop facility where patients receive holistic care—covering
              surgical follow-up, stoma site evaluation, and personalized advice
              for daily management. Special attention is given to ensuring that
              each patient is fitted with the most suitable appliance, thereby
              minimizing discomfort and improving confidence in social and
              personal life. The clinic also plays a vital role in identifying
              and treating common stoma-related complications such as
              infections, skin excoriations, or mechanical problems. Beyond the
              physical aspects, the clinic recognizes the psychological and
              social challenges faced by patients and provides supportive
              counselling to ease their transition into a new lifestyle.
              Nutrition counselling, lifestyle modification strategies, and
              reintegration into normal routines are also emphasized to ensure
              overall well-being. Regular review visits help maintain long-term
              stoma health while allowing patients to seek solutions to any
              difficulties they encounter. The clinic further acts as a teaching
              platform for medical students and residents, highlighting the
              principles of stoma care and patient rehabilitation. Through this
              multidisciplinary and compassionate approach, the Stoma Clinic at
              GMC Patiala ensures that every patient is cared for with dignity,
              empathy, and expertise.
            </p>
          </div>
        );

      case 'breast':
        return (
          <div className="flex flex-col justify-center items-center text-center">
            {/* Banner Image for Breast Clinic */}
            <div className="w-full mb-6">
              <Image
                src="/bre1.jpeg"
                alt="Breast Clinic Banner"
                width={1200}
                height={400}
                className="rounded-lg object-cover w-full h-64"
              />
            </div>

            <h2 className="text-3xl font-bold mb-6">Breast Clinic Details</h2>
            <p className="text-zinc-700 leading-relaxed max-w-4xl text-justify">
              The Breast Clinic at GMC Patiala, under the Department of General
              Surgery, is a dedicated service aimed at providing comprehensive
              care for patients with breast diseases. It caters to a wide
              spectrum of conditions including benign breast disorders,
              infections, fibroadenomas, and breast malignancies. A strong
              emphasis is placed on early detection of breast cancer through
              clinical breast examination, mammography, ultrasound, and guided
              biopsies. The clinic provides a structured diagnostic pathway
              ensuring accurate evaluation and timely intervention. Patients
              receive individualized treatment plans, whether surgical, medical,
              or combined, based on their diagnosis and stage of disease.
              Counselling sessions are conducted to help patients understand
              their condition, available treatment options, and expected
              outcomes. Preventive strategies such as breast self-examination
              training and awareness programs are also integrated into the
              clinic's routine. Postoperative follow-up and rehabilitation,
              including wound care and lymphedema management, are actively
              supported. The clinic also provides psychological and emotional
              support, recognizing the significant impact breast diseases can
              have on self-image and quality of life. By combining advanced
              diagnostic tools, multidisciplinary treatment, and patient-focused
              counselling, the Breast Clinic at GMC Patiala strives to deliver
              holistic care with compassion and excellence.
            </p>
          </div>
        );

      case 'trauma':
        return (
          <div className="flex flex-col justify-center items-center text-center">
            {/* Banner Image for Trauma Clinic */}
            <div className="w-full mb-6">
              <Image
                src="/trauma1.jpg"
                alt="Trauma Clinic Banner"
                width={1200}
                height={400}
                className="rounded-lg object-cover w-full h-64"
              />
            </div>

            <h2 className="text-3xl font-bold mb-6">Trauma & Emergency Surgery Clinic Details</h2>
            <p className="text-zinc-700 leading-relaxed max-w-4xl text-justify">
              The Trauma & Emergency Surgery Clinic at GMC Patiala provides
              round-the-clock comprehensive care for patients with acute surgical
              conditions and traumatic injuries. Our dedicated team of trauma
              surgeons, emergency physicians, and support staff are trained to
              handle a wide spectrum of emergencies including road traffic accidents,
              falls, penetrating injuries, and acute abdominal conditions. The clinic
              follows advanced trauma life support protocols to ensure rapid assessment,
              resuscitation, and definitive management of critically injured patients.
              We are equipped with state-of-the-art facilities for diagnostic imaging,
              emergency operations, and postoperative critical care. Our multidisciplinary
              approach involves close collaboration with orthopedics, neurosurgery,
              radiology, and anesthesia departments to provide integrated care for
              polytrauma patients. Beyond immediate surgical intervention, the clinic
              focuses on rehabilitation and long-term recovery, helping patients regain
              function and return to their normal lives. We also emphasize prevention
              through community awareness programs about road safety and injury prevention.
              The Trauma & Emergency Surgery Clinic is committed to delivering timely,
              expert care when every second counts, saving lives and reducing disability
              through evidence-based practices and compassionate service.
            </p>
          </div>
        );

      default:
        return null;
    }
  }

  return (
    <section
      id="info"
      className="pb-24 bg-gradient-to-b from-white via-white/0 to-white relative"
    >
      {/* Background Image */}
      <div className="absolute inset-0 opacity-30">
        <Image
          src="/111.png"
          alt="Abstract background"
          fill
          className="object-cover"
        />
      </div>

      {/* Container */}
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Breast Clinic Card - Now First */}
          <div className="rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
            <div className="relative overflow-hidden group">
              {/* Image Container with Fixed Aspect Ratio */}
              <div className="w-full h-64 relative">
                <Image
                  src={breastImages[breastImageIndex]}
                  alt="Doctors consulting with patient in hospital room"
                  fill
                  className="object-cover transition-all duration-1000 ease-in-out"
                  quality={85}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                />
              </div>
              
              {/* Image Indicators */}
              <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
                {breastImages.map((_, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === breastImageIndex ? 'bg-white scale-125' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            <div className="p-8 bg-white flex-grow flex flex-col justify-between text-center">
              <div>
                <h3 className="text-3xl font-bold font-body text-blue-950 mb-4">
                  Breast Clinic
                </h3>
                <p className="text-zinc-500 leading-relaxed mb-6 max-w-md mx-auto">
                  Our Breast Clinic provides specialized care for women
                  presenting with breast-related complaints such as lumps, pain,
                  discharge, or infections. The clinic offers early detection
                  services for breast cancer, including clinical breast
                  examination, imaging guidance, and biopsy facilities. Along
                  with diagnosis and treatment, it emphasizes patient
                  counselling, awareness, and follow-up care to ensure
                  comprehensive management of breast health.
                </p>
              </div>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  openModal('breast');
                }}
                className="font-bold text-teal-500 flex items-center gap-2 justify-center"
              >
                READ MORE <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Trauma & Emergency Surgery Clinic Card - Now Second */}
          <div className="rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
            <div className="relative overflow-hidden group">
              {/* Image Container with Fixed Aspect Ratio */}
              <div className="w-full h-64 relative">
                <Image
                  src={traumaImages[traumaImageIndex]}
                  alt="Trauma and emergency surgery care"
                  fill
                  className="object-cover transition-all duration-1000 ease-in-out"
                  quality={85}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                />
              </div>
              
              {/* Image Indicators */}
              <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
                {traumaImages.map((_, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === traumaImageIndex ? 'bg-white scale-125' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            <div className="p-8 bg-white flex-grow flex flex-col justify-between text-center">
              <div>
                <h3 className="text-3xl font-bold font-body text-blue-950 mb-4">
                  Trauma & Emergency Surgery
                </h3>
                <p className="text-zinc-500 leading-relaxed mb-6 max-w-md mx-auto">
                  Our Trauma & Emergency Surgery Clinic provides 24/7 comprehensive care
                  for patients with acute surgical conditions and traumatic injuries.
                  Our expert team is trained in advanced trauma life support and manages
                  everything from road traffic accidents to acute abdominal emergencies.
                  We emphasize rapid assessment, resuscitation, and definitive surgical
                  management to save lives and reduce disability.
                </p>
              </div>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  openModal('trauma');
                }}
                className="font-bold text-teal-500 flex items-center gap-2 justify-center"
              >
                READ MORE <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Stoma Clinic Card - Now Third */}
          <div className="rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
            <div className="relative overflow-hidden group">
              {/* Image Container with Fixed Aspect Ratio */}
              <div className="w-full h-64 relative">
                <Image
                  src={stomaImages[stomaImageIndex]}
                  alt="Stoma care and medical equipment"
                  fill
                  className="object-cover transition-all duration-1000 ease-in-out"
                  quality={85}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                />
              </div>
              
              {/* Image Indicators */}
              <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
                {stomaImages.map((_, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === stomaImageIndex ? 'bg-white scale-125' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            <div className="p-8 bg-white flex-grow flex flex-col justify-between text-center">
              <div>
                <h3 className="text-3xl font-bold font-body text-blue-950 mb-4">
                  Stoma Clinic
                </h3>
                <p className="text-zinc-500 leading-relaxed mb-6 max-w-md mx-auto">
                  Our Stoma Clinic offers expert care for patients with
                  colostomies, ileostomies, and urostomies. Our services include
                  assessment, fitting of appropriate appliances, and prompt
                  management of stoma-related complications. We emphasize
                  patient education, lifestyle counselling, and emotional
                  support to empower individuals in managing their stoma with
                  confidence. Our goal is to restore dignity, comfort, and the
                  highest quality of life for all patients under our care.
                </p>
              </div>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  openModal('stoma');
                }}
                className="font-bold text-teal-500 flex items-center gap-2 justify-center"
              >
                READ MORE <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalContent && (
        <Modal onClose={closeModal}>{getModalContent(modalContent)}</Modal>
      )}
    </section>
  );
}