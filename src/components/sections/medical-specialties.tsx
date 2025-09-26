"use client";

import React, { useState } from "react";

// Data for Unit 1 Team - Note: 'img' properties have been removed.
// The component will now generate image paths dynamically.
const unit1Data = {
  incharge: {
    name: "Dr. Ashwani Kumar",
    title: "Prof & Head of Surgery Department",
  },
  associateProfessors: [
    { name: "Dr. Jaswinder Singh" },
    { name: "Dr. Dinesh Kumar Passi" },
  ],
  seniorResidents: [
    { name: "Dr. Parth Dhamija" },
    { name: "Dr. Talib Khan" },
  ],
  juniorResidents: [
    { name: "Dr. Dinesh" },
    { name: "Dr. Navneeth Shankar" },
    { name: "Dr. Vineeth Sunaria" },
    { name: "Dr. Aseem Anand" },
    { name: "Dr. Soumya A" },
    { name: "Dr. Naveen Mangla" },
    { name: "Dr. Yogyatha" },
    { name: "Dr. Priyanka" },
    { name: "Dr. Sooraj" },
  ],
};

// Renamed to App and changed to a default export to fix the rendering error.
export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Helper function to dynamically generate image paths based on a doctor's name.
  // This centralizes the logic for locating image files.
  const getImagePath = (name: string) => {
    const cleanName = name.replace('Dr. ', '').toLowerCase();
   
    // Specific mappings for names to ensure correct image paths
    if (cleanName.includes('ashwani')) return '/images/unit1/ashwini.png';
    if (cleanName.includes('jaswinder')) return '/images/unit1/jaswinder.png';
    if (cleanName.includes('dinesh kumar')) return '/images/unit1/dineshkumar.png';
    if (cleanName.includes('dinesh')) return '/images/unit1/dinesh.png';
    if (cleanName.includes('parth')) return '/images/unit1/parth.png';
    if (cleanName.includes('talib')) return '/images/unit1/thalib.png';
    if (cleanName.includes('navneeth')) return '/images/unit1/navneeth.png';
    if (cleanName.includes('vineeth')) return '/images/unit1/vineeth.png';
    if (cleanName.includes('aseem')) return '/images/unit1/aseem.png';
    if (cleanName.includes('soumya')) return '/images/unit1/soumya.png';
    if (cleanName.includes('naveen')) return '/images/unit1/naveen.webp';
    if (cleanName.includes('yogyatha')) return '/images/unit1/yog.png';
    if (cleanName.includes('priyanka')) return '/images/unit1/pri.png';
    if (cleanName.includes('sooraj')) return '/images/unit1/sur.png';

    // Fallback for any names not explicitly mapped
    const fullName = cleanName.replace(/\s+/g, '_');
    return `/images/unit1/${fullName}.webp`;
  };

  // Function to collect all doctor names from the data structure for preloading.
  const getAllDoctorNames = () => {
    const names = [];
    names.push(unit1Data.incharge.name);
    unit1Data.associateProfessors.forEach((p) => names.push(p.name));
    unit1Data.seniorResidents.forEach((r) => names.push(r.name));
    unit1Data.juniorResidents.forEach((jr) => names.push(jr.name));
    return [...new Set(names)]; // Use Set to avoid duplicates
  };

  const allDoctorNamesForPreload = getAllDoctorNames();

  return (
    <section id="head-of-surgery" className="py-24 bg-white relative overflow-hidden">
      {/* HIDDEN PRELOAD IMAGES */}
      <div className="hidden">
        {allDoctorNamesForPreload.map((name, index) => (
          <img
            key={`preload-${index}`}
            src={getImagePath(name)} // Dynamically get path
            alt="Preload"
            width="200"
            height="200"
          />
        ))}
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0">
        <img
          src="/hod.webp"
          alt="Abstract geometric background"
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      <div className="container mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-1 bg-teal-500"></div>
                <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
                  Head of Department
                </span>
              </div>
              <h2 className="text-5xl font-bold text-blue-950 font-headline leading-tight">
                Message from our
                <span className="text-teal-600"> Head of Surgery</span>
              </h2>
            </div>
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-teal-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
              </svg>
            </div>
            <blockquote className="text-lg leading-relaxed text-justify text-gray-700 italic">
              "As the Head of the Department of Surgery, I am proud of the commitment and dedication shown by our team in providing the highest standard of surgical care..."
            </blockquote>
            <div className="pt-6 border-t border-gray-200 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">AK</span>
                </div>
                <div>
                  <h4 className="font-bold text-blue-950 text-lg">Dr. Ashwani Kumar</h4>
                  <p className="text-teal-600 font-medium">Prof & Head of Surgery Department</p>
                  <p className="text-teal-600 font-medium">Unit 1 Incharge</p>
                  <p className="text-gray-600 text-sm">GMC Patiala</p>
                </div>
            
            </div>
              <button onClick={() => setIsModalOpen(true)} className="px-6 py-2 bg-teal-600 text-white font-semibold rounded-full shadow-md hover:bg-teal-700 transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95">
                View Unit 1 Details
              </button>
            </div>
          </div>
          {/* Right Side */}
          <div className="relative">
            <div className="relative w-full h-[750px] rounded-2xl overflow-hidden shadow-2xl group">
              <img src="/hod.webp" alt="Head of Surgery - Dr. Ashwani Kumar" className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
      {/* Popup Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setIsModalOpen(false)}>
          <div className="bg-white rounded-2xl shadow-xl max-w-6xl w-full max-h-[95vh] overflow-y-auto relative" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 z-10 bg-white rounded-full p-1 shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-bold text-blue-950 mb-6 text-center">Unit 1 Team Details</h3>
              <div className="space-y-10">
                {/* Incharge */}
                <div className="text-center">
                  <h4 className="text-xl font-semibold text-teal-600 mb-6">Unit Incharge</h4>
                  <div className="flex justify-center">
                    <div className="flex flex-col items-center">
                      <div className="w-40 h-40 rounded-xl overflow-hidden shadow-md mb-4 group">
                        <img src={getImagePath(unit1Data.incharge.name)} alt={unit1Data.incharge.name} width="160" height="160" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"/>
                      </div>
                      <p className="font-bold text-blue-950 text-lg">{unit1Data.incharge.name}</p>
                      <p className="text-gray-600">{unit1Data.incharge.title}</p>
                    </div>
                  </div>
                </div>
                {/* Associate Professors */}
                <div>
                  <h4 className="text-xl font-semibold text-teal-600 mb-6 text-center">Associate Professors</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 justify-items-center">
                    {unit1Data.associateProfessors.map((prof) => (
                      <div key={prof.name} className="flex flex-col items-center">
                        <div className="w-36 h-36 rounded-xl overflow-hidden shadow-md mb-4 group">
                          <img src={getImagePath(prof.name)} alt={prof.name} width="144" height="144" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"/>
                        </div>
                        <p className="font-bold text-blue-950 text-center">{prof.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Senior Residents */}
                <div>
                  <h4 className="text-xl font-semibold text-teal-600 mb-6 text-center">Senior Residents</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 justify-items-center">
                    {unit1Data.seniorResidents.map((sr) => (
                      <div key={sr.name} className="flex flex-col items-center">
                        <div className="w-32 h-32 rounded-xl overflow-hidden shadow-md mb-4 group">
                          <img src={getImagePath(sr.name)} alt={sr.name} width="128" height="128" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"/>
                        </div>
                        <p className="font-medium text-blue-950 text-center">{sr.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Junior Residents */}
                <div>
                  <h4 className="text-xl font-semibold text-teal-600 mb-6 text-center">Junior Residents</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 justify-items-center">
                    {unit1Data.juniorResidents.map((jr) => (
                      <div key={jr.name} className="flex flex-col items-center">
                        <div className="w-28 h-28 rounded-xl overflow-hidden shadow-md mb-3 group">
                          <img src={getImagePath(jr.name)} alt={jr.name} width="112" height="112" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"/>
                        </div>
                        <p className="font-medium text-blue-950 text-sm text-center">{jr.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

