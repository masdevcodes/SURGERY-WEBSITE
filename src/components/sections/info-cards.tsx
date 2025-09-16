'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { useState, MouseEvent } from 'react';

export function InfoCards() {
  const [modalContent, setModalContent] = useState<string | null>(null);

  function openModal(key: string) {
    setModalContent(key);
  }

  function closeModal() {
    setModalContent(null);
  }

  function stopPropagation(e: MouseEvent<HTMLDivElement>) {
    e.stopPropagation();
  }

  const Modal = ({ children, onClose }: { children: React.ReactNode; onClose: () => void }) => (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg max-w-lg w-full p-6 relative"
        onClick={stopPropagation}
      >
        <button
          type="button"
          aria-label="Close modal"
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 font-bold"
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
          <div className="flex flex-col justify-center items-center text-center px-4">
            <h2 className="text-2xl font-bold mb-4">Stoma Clinic Details</h2>
            <p className="text-zinc-700 leading-relaxed mb-6 max-w-md">
              The Stoma Clinic at GMC Patiala functions as a dedicated service within the Department of General Surgery, designed to address the unique needs of patients living with stomas. It serves as a one-stop facility where patients receive holistic care—covering surgical follow-up, stoma site evaluation, and personalized advice for daily management. Special attention is given to ensuring that each patient is fitted with the most suitable appliance, thereby minimizing discomfort and improving confidence in social and personal life. The clinic also plays a vital role in identifying and treating common stoma-related complications such as infections, skin excoriations, or mechanical problems. Beyond the physical aspects, the clinic recognizes the psychological and social challenges faced by patients and provides supportive counselling to ease their transition into a new lifestyle. Nutrition counselling, lifestyle modification strategies, and reintegration into normal routines are also emphasized to ensure overall well-being. Regular review visits help maintain long-term stoma health while allowing patients to seek solutions to any difficulties they encounter. The clinic further acts as a teaching platform for medical students and residents, highlighting the principles of stoma care and patient rehabilitation. Through this multidisciplinary and compassionate approach, the Stoma Clinic at GMC Patiala ensures that every patient is cared for with dignity, empathy, and expertise.
            </p>
          </div>
        );
      case 'breast':
        return (
          <div className="flex flex-col justify-center items-center text-center px-4">
            <h2 className="text-2xl font-bold mb-4">Breast Clinic Details</h2>
            <p className="text-zinc-700 leading-relaxed mb-6 max-w-md">
             The Breast Clinic at GMC Patiala, under the Department of General Surgery, is a dedicated service aimed at providing comprehensive care for patients with breast diseases. It caters to a wide spectrum of conditions including benign breast disorders, infections, fibroadenomas, and breast malignancies. A strong emphasis is placed on early detection of breast cancer through clinical breast examination, mammography, ultrasound, and guided biopsies. The clinic provides a structured diagnostic pathway ensuring accurate evaluation and timely intervention. Patients receive individualized treatment plans, whether surgical, medical, or combined, based on their diagnosis and stage of disease. Counselling sessions are conducted to help patients understand their condition, available treatment options, and expected outcomes. Preventive strategies such as breast self-examination training and awareness programs are also integrated into the clinic’s routine. Postoperative follow-up and rehabilitation, including wound care and lymphedema management, are actively supported. The clinic also provides psychological and emotional support, recognizing the significant impact breast diseases can have on self-image and quality of life. By combining advanced diagnostic tools, multidisciplinary treatment, and patient-focused counselling, the Breast Clinic at GMC Patiala strives to deliver holistic care with compassion and excellence.
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
      className="py-24 bg-gradient-to-b from-white via-white/0 to-white relative"
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
      <div className="container mx-auto">
        {/* Content */}
        <div className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            <div className="bg-teal-500 rounded-lg p-8 text-white shadow-xl flex flex-col h-full">
              <h3 className="text-3xl font-bold font-body mb-6">
                OPD Timings{' '}
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
                    className="p-3 mb-3 last:mb-0 rounded-md bg-white/20 hover:bg-white/30 cursor-default transition-colors"
                  >
                    <p className="font-semibold">{item}</p>
                  </div>
                ))}
              </div>
              <h3 className="text-3xl font-bold font-body mb-6">OT Timing</h3>
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
                    className="p-3 mb-3 last:mb-0 rounded-md bg-white/20 hover:bg-white/30 cursor-default transition-colors"
                  >
                    <p className="font-semibold">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
              <div className="relative overflow-hidden">
                <Image
                  src="/stoma.png"
                  alt="Stoma care and medical equipment"
                  width={385}
                  height={321}
                  className="w-full transition-transform duration-700 hover:scale-110"
                  data-ai-hint="stoma medical care"
                />
              </div>
              <div className="p-8 bg-white flex-grow flex flex-col justify-between text-center">
                <div>
                  <h3 className="text-3xl font-bold font-body text-blue-950 mb-4">
                    Stoma Clinic
                  </h3>
                  <p className="text-zinc-500 leading-relaxed mb-6 max-w-md mx-auto">
                    Our Stoma Clinic offers expert care for patients with colostomies, ileostomies, and urostomies. Our services include assessment, fitting of appropriate appliances, and prompt management of stoma-related complications. We emphasize patient education, lifestyle counselling, and emotional support to empower individuals in managing their stoma with confidence.
                  </p>
                </div>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    openModal('stoma');
                  }}
                  className="font-bold text-teal-500 flex items-center gap-2 justify-center cursor-pointer"
                >
                  READ MORE <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
              <div className="relative overflow-hidden">
                <Image
                  src="/br.png"
                  alt="Doctors consulting with patient in hospital room"
                  width={385}
                  height={321}
                  className="w-full transition-transform duration-700 hover:scale-110"
                  data-ai-hint="doctors patient consultation hospital room"
                />
              </div>
              <div className="p-8 bg-white flex-grow flex flex-col justify-between text-center">
                <div>
                  <h3 className="text-3xl font-bold font-body text-blue-950 mb-4">
                    Breast Clinic
                  </h3>
                  <p className="text-zinc-500 leading-relaxed mb-6 max-w-md mx-auto">
                    Our Breast Clinic  provides specialized care for women presenting with breast-related complaints such as lumps, pain, discharge, or infections. The clinic offers early detection services for breast cancer, including clinical breast examination, imaging guidance, and biopsy facilities. Along with diagnosis and treatment, it emphasizes patient counselling, awareness, and follow-up care to ensure comprehensive management of breast health.
                  </p>
                </div>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    openModal('breast');
                  }}
                  className="font-bold text-teal-500 flex items-center gap-2 justify-center cursor-pointer"
                >
                  READ MORE <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {modalContent && (
        <Modal onClose={closeModal}>
          {getModalContent(modalContent)}
        </Modal>
      )}
    </section>
  );
}
