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
    inchargeTitle?: string;
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
        inchargeTitle: 'Prof & Unit Incharge',
        associateProfessors: ['Dr. Anjna Garg'],
        assistantProfessors: ['Dr. Paramjit Singh Kahlon'],
        seniorResidents: ['Dr. Varun Gupta', 'Dr. Megha Choudhary'],
        juniorResidents: [
          { name: 'Dr. Ninara Wadhwa', year: 3 },
          { name: 'Dr. Bhawdeep Singla', year: 3 },
          { name: 'Dr. Anshika Garg', year: 3 },
          { name: 'Dr. Arushi Singla', year: 2 },
          { name: 'Dr. Rajeev SR', year: 2 },
          { name: 'Dr. Astha Sinha', year: 2 },
          { name: 'Dr. Deepak Singh Thakur', year: 1 },
          { name: 'Dr. Dheeraj Garg', year: 1 },
          { name: 'Dr. Rohit', year: 1 },
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
        inchargeTitle: 'Prof & Incharge',
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
    {
      id: 3,
      name: 'Dr. D.J.S Wallia',
      unit: 'UNIT 4',
      department: 'Surgery Department, Floor 1',
      email: 's.johnson@gmcpatiala.edu',
      description: 'Experienced general surgeon with expertise in laparoscopic procedures and emergency surgery.',
      color: 'green',
      image: '/images/provider3.jpg',
      details: {
        incharge: 'Dr. D.J.S Wallia',
        associateProfessors: ['Dr. X', 'Dr. Y'],
        assistantProfessors: ['Dr. M', 'Dr. N'],
        seniorResidents: ['Dr. O', 'Dr. P', 'Dr. Q'],
        juniorResidents: [
          { name: 'Dr. R', year: 1 },
          { name: 'Dr. S', year: 1 },
          { name: 'Dr. T', year: 2 },
          { name: 'Dr. U', year: 2 },
          { name: 'Dr. V', year: 3 },
        ],
      },
    },
    {
      id: 4,
      name: 'Dr. Sanjeev Gupta',
      unit: 'UNIT 5',
      department: 'Orthopedics Department, Floor 2',
      email: '',
      description: 'Orthopedic surgeon specializing in joint replacement and sports medicine with advanced training.',
      color: 'orange',
      image: '/images/sanjeev.jpg',
      details: {
        incharge: 'Dr. Sanjeev Gupta',
        inchargeTitle: 'Prof & Unit Incharge',
        associateProfessors: [],
        assistantProfessors: ['Dr. Gunjeet Singh Sandhu'],
        seniorResidents: [],
        juniorResidents: [
          { name: 'Dr. Karanveer Kohli', year: 3 },
          { name: 'Dr. Rajat Choudhary', year: 3 },
          { name: 'Dr. Akshay Kumar Samyal', year: 2 },
          { name: 'Dr. Ritane Mangoch', year: 2 },
          { name: 'Dr. Dipit Monocha', year: 1 },
          { name: 'Dr. Jaswinder Singh', year: 1 },
        ],
      },
    },
    {
      id: 5,
      name: 'Dr. R.S Mohi',
      unit: 'UNIT 6',
      department: 'Gynecology Department, Floor 3',
      email: 'e.rodriguez@gmcpatiala.edu',
      description: 'Gynecologist with expertise in women\'s health, reproductive medicine, and minimally invasive procedures.',
      color: 'pink',
      image: '/images/provider5.jpg',
      details: {
        incharge: 'Dr. R.S Mohi',
        inchargeTitle: 'Associate Prof & Incharge',
        associateProfessors: ['Dr. W', 'Dr. X'],
        assistantProfessors: ['Dr. Y', 'Dr. Z'],
        seniorResidents: ['Dr. AA', 'Dr. BB'],
        juniorResidents: [
          { name: 'Dr. CC', year: 3 },
          { name: 'Dr. DD', year: 3 },
          { name: 'Dr. EE', year: 2 },
          { name: 'Dr. FF', year: 2 },
          { name: 'Dr. GG', year: 1 },
          { name: 'Dr. HH', year: 1 },
        ],
      },
    },
    {
      id: 6,
      name: 'Dr. Vikas Goyal',
      unit: 'UNIT 7',
      department: 'Neurosurgery Department, Floor 4',
      email: '',
      description: 'Neurosurgeon specializing in brain and spine surgery with expertise in complex neurological procedures.',
      color: 'indigo',
      image: '/images/doctors/vikas_goyal.jpg',
      details: {
        incharge: 'Dr. Vikas Goyal',
        inchargeTitle: 'Associate Prof & Unit Incharge',
        associateProfessors: [],
        assistantProfessors: ['Dr. Karamjot Singh Sandhu'],
        seniorResidents: ['Dr. Manjeet Rait'],
        juniorResidents: [
          { name: 'Dr. Turimela Vamshi', year: 3 },
          { name: 'Dr. Ramandeep Singh', year: 3 },
          { name: 'Dr. Shelly Saini', year: 2 },
          { name: 'Dr. Shashank KP', year: 2 },
          { name: 'Dr. Ayush Goyal', year: 1 },
          { name: 'Dr. Hitakshi Garg', year: 1 },
        ],
      },
    },
  ];

  const renderListWithImages = (names: string[], showImages: boolean, centerIfFew = false) => {
    if (names.length === 0) return null;
    
    // Determine grid columns based on number of items
    let gridClass = 'grid grid-cols-1 gap-6 md:gap-8 mt-4';
    if (names.length === 2) {
      gridClass = 'grid grid-cols-2 gap-6 md:gap-8 mt-4';
    } else if (names.length >= 3) {
      gridClass = 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mt-4';
    }
    
    return (
      <div className={`${gridClass} ${centerIfFew ? 'justify-center' : ''}`}>
        {names.map((name, idx) => (
          <div key={idx} className="flex flex-col items-center">
            {showImages && (
              <div className="w-28 h-28 rounded-full overflow-hidden shadow-md mb-3 group">
                <Image
                  src={getImagePath(name)}
                  alt={name}
                  width={112}
                  height={112}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            )}
            <p className="font-medium text-blue-950 text-sm text-center">{name}</p>
          </div>
        ))}
      </div>
    );
  };

  const renderJuniorResidentsByYear = (residents: { name: string; year: number }[]) => {
    if (residents.length === 0) return null;
    
    // Group residents by year
    const groupedByYear: Record<number, string[]> = {};
    residents.forEach(resident => {
      if (!groupedByYear[resident.year]) {
        groupedByYear[resident.year] = [];
      }
      groupedByYear[resident.year].push(resident.name);
    });
    
    // Sort years in descending order (JR3, JR2, JR1)
    const sortedYears = Object.keys(groupedByYear)
      .map(Number)
      .sort((a, b) => b - a);
    
    return (
      <div className="mb-4">
        <strong className="text-lg block text-teal-600 text-center mb-4">Junior Residents:</strong>
        {sortedYears.map(year => (
          <div key={year} className="mb-6">
            {renderListWithImages(groupedByYear[year], true, true)}
          </div>
        ))}
      </div>
    );
  };

  return (
    <section id="providers" className="py-24 bg-gradient-to-br from-gray-50 to-white relative">
      <div className="absolute inset-0 opacity-50">
        <Image
          src="/111 copy copy.png"
          alt="Geometric background pattern"
          fill
          className="object-cover"
        />
      </div>

      <div className="container mx-auto relative z-10">
        <h2 className="text-6xl font-bold text-blue-950 font-headline mb-4">Our Providers</h2>
        <p className="text-xl text-gray-600 mb-12">Meet our experienced Medical Professionals</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {providers.map((provider) => {
            const colorInfo = colorMap[provider.color] || colorMap.blue;
            
            return (
              <div
                key={provider.id}
                className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                {/* Changed height from h-80 to h-96 for taller image */}
                <div className="relative overflow-hidden h-96">
                  <Image
                    src={provider.image}
                    alt={provider.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    quality={85}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${colorInfo.from} ${colorInfo.to} rounded-xl flex items-center justify-center shadow-lg`}
                    >
                      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 2C19.5 2 24 6.5 24 12C24 17.5 19.5 22 14 22C8.5 22 4 17.5 4 12C4 6.5 8.5 2 14 2Z" fill="white" />
                      </svg>
                    </div>
                    <div>
                      <p className={`${colorInfo.text} font-bold text-sm uppercase tracking-wider`}>{provider.unit}</p>
                      <h3 className="text-2xl font-bold text-blue-950 font-headline">{provider.name}</h3>
                      <h2 className="text-red-600">{provider.email}</h2>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <button
                      onClick={() => setSelectedProvider(provider)}
                      className="px-6 py-2 bg-teal-600 text-white font-semibold rounded-full shadow-md hover:bg-teal-700 transition"
                    >
                      View More Detail of {provider.unit}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

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
                <strong>{selectedProvider.details.inchargeTitle || 'Prof & Unit Incharge'}: </strong> 
                {selectedProvider.details.incharge}
              </p>
            </div>

            {selectedProvider.details.associateProfessors.length > 0 && (
              <div className="mb-8">
                <strong className="text-lg block text-teal-600 text-center">Associate Professors:</strong>
                {renderListWithImages(selectedProvider.details.associateProfessors, true, true)}
              </div>
            )}

            {selectedProvider.details.assistantProfessors.length > 0 && (
              <div className="mb-8">
                <strong className="text-lg block text-teal-600 text-center">Assistant Professors:</strong>
                {renderListWithImages(selectedProvider.details.assistantProfessors, true, true)}
              </div>
            )}

            {selectedProvider.details.seniorResidents.length > 0 && (
              <div className="mb-8">
                <strong className="text-lg block text-teal-600 text-center">Senior Residents:</strong>
                {renderListWithImages(selectedProvider.details.seniorResidents, true, true)}
              </div>
            )}

            {selectedProvider.details.juniorResidents.length > 0 && (
              renderJuniorResidentsByYear(selectedProvider.details.juniorResidents)
            )}
          </div>
        </div>
      )}

      {zoomedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={() => setZoomedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              className="absolute -top-12 right-0 text-white text-3xl font-bold"
              onClick={() => setZoomedImage(null)}
            >
              ×**
            </button>
            <Image
              src={zoomedImage}
              alt="Zoomed doctor image"
              width={400}
              height={400}
              className="rounded-lg object-contain max-h-[80vh]"
            />
          </div>
        </div>
      )}
    </section>
  );
}