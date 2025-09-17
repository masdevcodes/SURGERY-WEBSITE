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
  image: string; // local path
  details: {
    incharge: string;
    assistantProfessors: string[];
    seniorResidents: string[];
    juniorResidents: string[];
  };
}

export function Providers() {
  const [selectedProvider, setSelectedProvider] = useState<Provider | null>(null);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  // Color mapping for consistent color usage
  const colorMap: Record<string, { text: string; bg: string; from: string; to: string }> = {
    blue: { text: 'text-blue-600', bg: 'bg-blue-500', from: 'from-blue-400', to: 'to-blue-600' },
    purple: { text: 'text-purple-600', bg: 'bg-purple-500', from: 'from-purple-400', to: 'to-purple-600' },
    green: { text: 'text-green-600', bg: 'bg-green-500', from: 'from-green-400', to: 'to-green-600' },
    orange: { text: 'text-orange-600', bg: 'bg-orange-500', from: 'from-orange-400', to: 'to-orange-600' },
    pink: { text: 'text-pink-600', bg: 'bg-pink-500', from: 'from-pink-400', to: 'to-pink-600' },
    indigo: { text: 'text-indigo-600', bg: 'bg-indigo-500', from: 'from-indigo-400', to: 'to-indigo-600' },
  };

  // Function to get image path based on name
  const getImagePath = (name: string) => {
    // This is a simplified example - you might need a more robust mapping
    const nameParts = name.toLowerCase().split(' ');
    const lastName = nameParts[nameParts.length - 1];
    return `/images/doctors/${lastName}.jpg`; // Assuming images are stored with last name
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
      image: '/images/ashwini.png',
      details: {
        incharge: 'Dr. Prem Singla',
        assistantProfessors: ['Dr. Parth Dhamija', 'Dr. Muhammed Ameen'],
        seniorResidents: ['Dr. Soumya A', 'Dr. Aseem Anand', 'Dr. C'],
        juniorResidents: ['Dr. Aseem Anand', 'Dr. Naveen Mangla', 'Dr. Soumya A', 'Dr. Navneeth', 'Dr. Dinesh', 'Dr. Vineeth Sunaria'],
      },
    },
    {
      id: 2,
      name: 'Dr. H.S Rekhi',
      unit: 'UNIT 3',
      department: 'Urology Department, Floor 4',
      email: 'a.hwang@gmcpatiala.edu',
      description: 'Leading urologist specializing in minimally invasive procedures and robotic surgery for urological conditions.',
      color: 'purple',
      image: '/images/provider2.jpg',
      details: {
        incharge: 'Dr. H.S Rekhi',
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
        assistantProfessors: ['Dr. EE', 'Dr. FF'],
        seniorResidents: ['Dr. GG', 'Dr. HH'],
        juniorResidents: ['Dr. II', 'Dr. JJ', 'Dr. KK', 'Dr. LL', 'Dr. MM', 'Dr. NN'],
      },
    },
  ];

  // Helper to render lists with images for certain roles
  const renderListWithImages = (names: string[], showImages: boolean) => (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4 mt-2">
      {names.map((name, idx) => (
        <div key={idx} className="flex flex-col items-center">
          {showImages && (
            <div 
              className="w-24 h-24 rounded-full overflow-hidden mb-2 border-2 border-gray-200 cursor-pointer transition-transform duration-300 hover:scale-110"
              onClick={() => setZoomedImage(getImagePath(name))}
            >
              <Image
                src={getImagePath(name)}
                alt={name}
                width={96}
                height={96}
                className="object-cover w-full h-full"
              />
            </div>
          )}
          <p className="text-gray-700 break-words text-sm text-center">{name}</p>
        </div>
      ))}
    </div>
  );

  // Helper to render junior residents (names only)
  const renderJuniorResidents = (names: string[]) => (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-2 mt-1">
      {names.map((name, idx) => (
        <p key={idx} className="text-gray-700 break-words text-sm">{name}</p>
      ))}
    </div>
  );

  return (
    <section id="providers" className="py-24 bg-gradient-to-br from-gray-50 to-white relative">
      {/* Background Image */}
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

      {/* Provider Details Modal */}
      {selectedProvider && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedProvider(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full p-8 relative overflow-y-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 font-bold text-xl"
              onClick={() => setSelectedProvider(null)}
            >
              ×
            </button>

            {/* Centered Unit Name with Provider Color */}
            <h2
              className="text-3xl font-bold mb-6 text-center"
              style={{ color: selectedProvider.color }}
            >
              {selectedProvider.unit}
            </h2>

            {/* Unit Incharge with Image */}
            <div className="mb-6 flex flex-col items-center">
              <div 
                className="w-24 h-24 rounded-full overflow-hidden mb-3 border-2 border-gray-300 cursor-pointer transition-transform duration-300 hover:scale-110"
                onClick={() => setZoomedImage(getImagePath(selectedProvider.details.incharge))}
              >
                <Image
                  src={getImagePath(selectedProvider.details.incharge)}
                  alt={selectedProvider.details.incharge}
                  width={96}
                  height={96}
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="text-gray-700 font-bold text-lg">
                <strong>Unit Incharge:</strong> {selectedProvider.details.incharge}
              </p>
            </div>

            <div className="mb-6">
              <strong className="text-lg">Associate Professors:</strong>
              {renderListWithImages(selectedProvider.details.assistantProfessors, true)}
            </div>

            <div className="mb-6">
              <strong className="text-lg">Senior Residents:</strong>
              {renderListWithImages(selectedProvider.details.seniorResidents, true)}
            </div>

            <div className="mb-4">
              <strong className="text-lg">Junior Residents:</strong>
              {renderJuniorResidents(selectedProvider.details.juniorResidents)}
            </div>
          </div>
        </div>
      )}

      {/* Zoomed Image Modal */}
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