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
    associateProfessors: string[]; // Added this field
    assistantProfessors: string[];
    seniorResidents: string[];
    juniorResidents: string[];
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
    
    // Default fallback
    const nameParts = cleanName.split(' ');
    const lastName = nameParts[nameParts.length - 1];
    return `/images/doctors/${lastName}.jpg`;
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
      image: '/images/asem.png',
      details: {
        incharge: 'Dr. Prem Singla',
        associateProfessors: ['Dr. A', 'Dr. B'], // Added associate professors
        assistantProfessors: ['Dr. P', 'Dr. M'],
        seniorResidents: ['Dr. S', 'Dr.', 'Dr. C'],
        juniorResidents: ['Dr. A', 'Dr. N', 'Dr. S', 'Dr. N', 'Dr. D', 'Dr. V', 'Dr. Y', 'Dr. P', 'Dr. S'],
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
        associateProfessors: [], // No associate professors
        assistantProfessors: ['Dr. G', 'Dr. H', 'Dr. I'],
        seniorResidents: ['Dr. J', 'Dr. K'],
        juniorResidents: ['Dr. L', 'Dr. M', 'Dr. N'],
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
        associateProfessors: ['Dr. X', 'Dr. Y'], // Added associate professors
        assistantProfessors: ['Dr. M', 'Dr. N'],
        seniorResidents: ['Dr. O', 'Dr. P', 'Dr. Q'],
        juniorResidents: ['Dr. R', 'Dr. S', 'Dr. T', 'Dr. U', 'Dr. V'],
      },
    },
    {
      id: 4,
      name: 'Dr. Sanjeev Gupta',
      unit: 'UNIT 5',
      department: 'Orthopedics Department, Floor 2',
      email: 'm.chen@gmcpatiala.edu',
      description: 'Orthopedic surgeon specializing in joint replacement and sports medicine with advanced training.',
      color: 'orange',
      image: '/images/provider4.jpg',
      details: {
        incharge: 'Dr. Sanjeev Gupta',
        associateProfessors: [], // No associate professors
        assistantProfessors: ['Dr. S', 'Dr. T'],
        seniorResidents: ['Dr. U', 'Dr. V'],
        juniorResidents: ['Dr. W', 'Dr. X', 'Dr. Y', 'Dr. Z'],
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
        associateProfessors: ['Dr. W', 'Dr. X'], // Added associate professors
        assistantProfessors: ['Dr. Y', 'Dr. Z'],
        seniorResidents: ['Dr. AA', 'Dr. BB'],
        juniorResidents: ['Dr. CC', 'Dr. DD', 'Dr. EE', 'Dr. FF', 'Dr. GG', 'Dr. HH'],
      },
    },
    {
      id: 6,
      name: 'Dr. Vikas Goyal',
      unit: 'UNIT 7',
      department: 'Neurosurgery Department, Floor 4',
      email: 'd.kumar@gmcpatiala.edu',
      description: 'Neurosurgeon specializing in brain and spine surgery with expertise in complex neurological procedures.',
      color: 'indigo',
      image: '/images/provider6.jpg',
      details: {
        incharge: 'Dr. Vikas Goyal',
        associateProfessors: [], // No associate professors
        assistantProfessors: ['Dr. EE', 'Dr. FF'],
        seniorResidents: ['Dr. GG', 'Dr. HH'],
        juniorResidents: ['Dr. II', 'Dr. JJ', 'Dr. KK', 'Dr. LL', 'Dr. MM', 'Dr. NN'],
      },
    },
  ];

  const renderListWithImages = (names: string[], showImages: boolean, centerIfFew = false) => {
    if (names.length === 0) return null; // Don't render if no names
    
    const shouldCenter = centerIfFew && names.length <= 3;
    const gridCols = shouldCenter ? `grid-cols-${Math.min(names.length, 3)}` : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3';
    
    return (
      <div className={`grid ${gridCols} gap-6 md:gap-8 ${shouldCenter ? 'justify-center' : ''} mt-4`}>
        {names.map((name, idx) => (
          <div key={idx} className="flex flex-col items-center">
            {showImages && (
              <div 
                className="w-28 h-28 rounded-full overflow-hidden shadow-md mb-3 group cursor-pointer"
                onClick={() => setZoomedImage(getImagePath(name))}
              >
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
                <div className="relative overflow-hidden h-80">
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
              <div 
                className="relative w-32 h-32 rounded-full overflow-hidden mb-4 border-2 border-gray-300 group cursor-pointer"
                onClick={() => setZoomedImage(getImagePath(selectedProvider.details.incharge))}
              >
                <Image
                  src={getImagePath(selectedProvider.details.incharge)}
                  alt={selectedProvider.details.incharge}
                  fill
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <p className="text-gray-700 font-bold text-lg">
                <strong>Unit Incharge:</strong> {selectedProvider.details.incharge}
              </p>
            </div>

            {/* Conditionally render Associate Professors section */}
            {selectedProvider.details.associateProfessors.length > 0 && (
              <div className="mb-8">
                <strong className="text-lg block text-center">Associate Professors:</strong>
                {renderListWithImages(selectedProvider.details.associateProfessors, true, true)}
              </div>
            )}

            {/* Conditionally render Assistant Professors section */}
            {selectedProvider.details.assistantProfessors.length > 0 && (
              <div className="mb-8">
                <strong className="text-lg block text-center">Assistant Professors:</strong>
                {renderListWithImages(selectedProvider.details.assistantProfessors, true, true)}
              </div>
            )}

            {/* Conditionally render Senior Residents section */}
            {selectedProvider.details.seniorResidents.length > 0 && (
              <div className="mb-8">
                <strong className="text-lg block text-center">Senior Residents:</strong>
                {renderListWithImages(selectedProvider.details.seniorResidents, true, true)}
              </div>
            )}

            {/* Conditionally render Junior Residents section */}
            {selectedProvider.details.juniorResidents.length > 0 && (
              <div className="mb-4">
                <strong className="text-lg block text-center">Junior Residents:</strong>
                {renderListWithImages(selectedProvider.details.juniorResidents, true)}
              </div>
            )}
          </div>
        </div>
      )}

      {zoomedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-[60] p-4"
          onClick={() => setZoomedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              className="absolute -top-12 right-0 text-white hover:text-gray-300 text-3xl font-bold"
              onClick={() => setZoomedImage(null)}
            >
              ×
            </button>
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <Image
                src={zoomedImage}
                alt="Zoomed profile"
                fill
                className="object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}