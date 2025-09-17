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
    assistantProfessors: string[];
    seniorResidents: string[];
    juniorResidents: string[];
  };
}

export function Providers() {
  const [selectedProvider, setSelectedProvider] = useState<Provider | null>(null);

  const providers: Provider[] = [
    {
      id: 1,
      name: 'Dr. Prem Singla',
      unit: 'UNIT 2',
      department: 'Unit 2, Floor 2',
      email: 'j.bowman@gmcpatiala.edu',
      description:
        'Expert in respiratory medicine and critical care with extensive experience in treating lung diseases and sleep disorders.',
      color: 'blue',
      image: '/images/ashwini.png',
      details: {
        incharge: 'Dr. Prem Singla',
        assistantProfessors: ['Dr. Parth Dhamija', 'Dr. Muhammed Ameen'],
        seniorResidents: ['Dr. Soumya A', 'Dr. Aseem Anand', 'Dr. C'],
        juniorResidents: [
          'Dr. Aseem Anand',
          'Dr. Naveen Mangla',
          'Dr. Soumya A',
          'Dr. Navneeth',
          'Dr. Dinesh',
          'Dr. Vineeth Sunaria',
        ],
      },
    },
    // ... Add other providers similarly
  ];

  const renderList = (names: string[]) => (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-2 mt-1">
      {names.map((name, idx) => (
        <p key={idx} className="text-gray-700 break-words">
          {name}
        </p>
      ))}
    </div>
  );

  // Mapping provider.color to Tailwind-safe classes
  const colorMap: Record<string, string> = {
    blue: 'blue-600',
    purple: 'purple-600',
    green: 'green-600',
    orange: 'orange-600',
    pink: 'pink-600',
    indigo: 'indigo-600',
  };

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
            const tailwindColor = colorMap[provider.color] || 'blue-600';

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
                      className={`w-16 h-16 bg-gradient-to-br from-${tailwindColor} to-${tailwindColor} rounded-xl flex items-center justify-center shadow-lg`}
                    >
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14 2C19.5 2 24 6.5 24 12C24 17.5 19.5 22 14 22C8.5 22 4 17.5 4 12C4 6.5 8.5 2 14 2Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className={`text-${tailwindColor} font-bold text-sm uppercase tracking-wider`}>
                        {provider.unit}
                      </p>
                      <h3 className="text-2xl font-bold text-blue-950 font-headline">{provider.name}</h3>
                      <h2 className="text-gray-600">{provider.email}</h2>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedProvider(provider)}
                    className={`mt-4 w-full py-2 px-4 bg-${tailwindColor} text-white rounded-xl hover:bg-opacity-90 transition-colors duration-300`}
                  >
                    View More Details of {provider.unit}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {selectedProvider && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedProvider(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-lg w-full p-8 relative overflow-y-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 font-bold"
              onClick={() => setSelectedProvider(null)}
            >
              X
            </button>

            <h2 className={`text-3xl font-bold mb-6 text-center text-${colorMap[selectedProvider.color]}`}>
              {selectedProvider.unit}
            </h2>

            <p className="text-gray-700 font-bold mb-4">
              <strong>Unit Incharge:</strong> {selectedProvider.details.incharge}
            </p>

            <div className="mb-4">
              <strong>Assistant Professors:</strong>
              {renderList(selectedProvider.details.assistantProfessors)}
            </div>

            <div className="mb-4">
              <strong>Senior Residents:</strong>
              {renderList(selectedProvider.details.seniorResidents)}
            </div>

            <div className="mb-4">
              <strong>Junior Residents:</strong>
              {renderList(selectedProvider.details.juniorResidents)}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
