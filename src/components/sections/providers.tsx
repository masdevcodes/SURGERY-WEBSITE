'use client';

import Image from 'next/image';
import { useState } from 'react';

interface Provider {
  id: number;
  name: string;
  unit: string;
  department: string;
  email: string;
  description: string;
  color: string;
  image: string;
  details: {
    incharge: string;
    inchargeTitle?: string; // Added optional field for custom title
    associateProfessors: string[];
    assistantProfessors: string[];
    seniorResidents: string[];
    juniorResidents: { name: string; year: number }[];
  };
}

export function Providers() {
  const [selectedProvider, setSelectedProvider] = useState<Provider | null>(null);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  const colorMap: Record<string, { text: string; bg: string; from: string; to: string }> = {
    blue: { text: 'text-blue-600', bg: 'bg-blue-500', from: 'from-blue-400', to: 'to-blue-600' },
    purple: { text: 'text-purple-600', bg: 'bg-purple-500', from: 'from-purple-400', to: 'to-purple-600' },
    green: { text: 'text-green-600', bg: 'bg-green-500', from: 'from-green-400', to: 'to-green-600' },
    orange: { text: 'text-orange-600', bg: 'bg-orange-500', from: 'from-orange-400', to: 'to-orange-600' },
    pink: { text: 'text-pink-600', bg: 'bg-pink-500', from: 'from-pink-400', to: 'to-pink-600' },
    indigo: { text: 'text-indigo-600', bg: 'bg-indigo-500', from: 'from-indigo-400', to: 'to-indigo-600' },
  };

  const getImagePath = (name: string) => {
    const cleanName = name.replace('Dr. ', '').toLowerCase();
    
    // Map specific names to image paths
    if (cleanName.includes('dinesh')) return '/images/dinesh.png';
    if (cleanName.includes('navneeth') || cleanName.includes('shankar')) return '/images/navneeth.png';
    if (cleanName.includes('vineeth') || cleanName.includes('sunaria')) return '/images/vineeth.png';
    if (cleanName.includes('aseem') || cleanName.includes('anand')) return '/images/aseem.png';
    if (cleanName.includes('soumya')) return '/images/soumya.png';
    if (cleanName.includes('naveen') || cleanName.includes('mangla')) return '/images/naveen.png';
    if (cleanName.includes('yogyatha') || cleanName.includes('yog')) return '/images/yog.png';
    if (cleanName.includes('priyanka') || cleanName.includes('pri')) return '/images/pri.png';
    if (cleanName.includes('sooraj') || cleanName.includes('sur')) return '/images/sur.png';
    
    // Use full name for image path to avoid conflicts
    const fullName = cleanName.replace(/\s+/g, '_');
    return `/images/doctors/${fullName}.jpg`;
  };

  const providers: Provider[] = [
    {
      id: 1,
      name: 'Dr. Prem Singla',
      unit: 'UNIT 2',
      department: 'Unit 2, Floor 2',
      email: 'j.bowman@gmcpatiala.edu',
      description: 'Expert in respiratory medicine and critical care with extensive experience in treating lung diseases and sleep disorders.',
      color: 'blue',
      image: '/images/ho.png',
      details: {
        incharge: 'Dr. Prem Singla',
        inchargeTitle: 'Prof & Unit Incharge', // Added  custom title
        associateProfessors: ['Dr. A', 'Dr. B'],
        assistantProfessors: ['Dr. P', 'Dr. M'],
        seniorResidents: ['Dr. S', 'Dr.', 'Dr. C'],
        juniorResidents: [
          { name: 'Dr. A', year: 1 },
          { name: 'Dr. N', year: 1 },
          { name: 'Dr. S', year: 2 },
          { name: 'Dr. N', year: 2 },
          { name: 'Dr. D', year: 3 },
          { name: 'Dr. V', year: 3 },
          { name: 'Dr. Y', year: 3 },
          { name: 'Dr. P', year: 3 },
          { name: 'Dr. S', year: 3 },
        ],
      },
    },
    {
      id: 2,
      name: 'Dr. H.S Rekhi',
      unit: 'UNIT 3',
      department: 'Urology Department, Floor 4',
      email: 'a.hwang@gmcpatiala.edu',
      description: 'Leading urologist specializing in minimally invasive procedures and robotic surgery for uological conditions.',
      color: 'purple',
      image: '/images/rekhi.jpg',
      details: {
        incharge: 'Dr. H.S Rekhi',
        inchargeTitle: 'Associate Prof & Incharge', // Added custom title
        associateProfessors: [ ],
        assistantProfessors: ['Dr. Sudesh Parthaph Singh', 'Dr. Malkiat Singh'],
        seniorResidents: ['Dr. Simran Deep Singh', 'Dr. Baljeet Kaur'],
        juniorResidents: [
          { name: 'Dr. Rajat Talresa', year: 3 },
          { name: 'Dr. Samrat Singh Sra', year: 3 },
          { name: 'Dr. Mohit Pareekh', year: 3 },
          { name: 'Dr. Akhil Remesh', year: 2 },
          { name: 'Dr. Geetanjli Chopra', year: 2 },
          { name: 'Dr. Shubham Chhabra', year: 2 },
          { name: 'Dr. Bachittar Singh', year: 1 },
          { name: 'Dr. Rishu Garg', year: 1 },
          { name: 'Dr. Pardeep Bansal', year: 1 },
        ],
      },
    },
    // ... other providers (add inchargeTitle where needed)
  ];

  // ... rest of the component code remains the same until the modal section

  return (
    <section id="providers" className="py-24 bg-gradient-to-br from-gray-50 to-white relative">
      {/* ... existing code ... */}

      {selectedProvider && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedProvider(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-4xl w-full p-8 relative overflow-y-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 font-bold text-xl"
              onClick={() => setSelectedProvider(null)}
            >
              ×
            </button>

            <h2
              className="text-3xl font-bold mb-6 text-center"
              style={{ color: selectedProvider.color }}
            >
              {selectedProvider.unit}
            </h2>

            <div className="mb-8 flex flex-col items-center">
              <div className="relative w-36 h-36 rounded-full overflow-hidden mb-4 border-2 border-gray-300 group">
                <Image
                  src={getImagePath(selectedProvider.details.incharge)}
                  alt={selectedProvider.details.incharge}
                  width={128}
                  height={128}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <p className="text-gray-700  text-teal-600 font-bold text-lg">
                <strong>
                  {selectedProvider.details.inchargeTitle || 'Prof & Unit Incharge'}: {/* Use custom title or default */}
                </strong> 
                {selectedProvider.details.incharge}
              </p>
            </div>

            {/* ... rest of the modal content ... */}
          </div>
        </div>
      )}

      {/* ... rest of the component ... */}
    </section>
  );
}