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
    // Remove "Dr. " prefix and split the name
    const cleanName = name.replace('Dr. ', '');
    const nameParts = cleanName.toLowerCase().split(' ');
    
    // For Junior Residents, we have specific image paths
    if (nameParts.includes('dinesh')) return '/images/dinesh.png';
    if (nameParts.includes('navneeth') || nameParts.includes('shankar')) return '/images/navneeth.png';
    if (nameParts.includes('vineeth') || nameParts.includes('sunaria')) return '/images/vineeth.png';
    if (nameParts.includes('aseem') || nameParts.includes('anand')) return '/images/aseem.png';
    if (nameParts.includes('soumya')) return '/images/soumya.png';
    if (nameParts.includes('naveen') || nameParts.includes('mangla')) return '/images/naveen.png';
    if (nameParts.includes('yogyatha') || nameParts.includes('yog')) return '/images/yog.png';
    if (nameParts.includes('priyanka') || nameParts.includes('pri')) return '/images/pri.png';
    if (nameParts.includes('sooraj') || nameParts.includes('sur')) return '/images/sur.png';
    
    // Default fallback for other doctors
    const lastName = nameParts[nameParts.length - 1];
    return `/images/doctors/${lastName}.jpg`;
  };

  // Main Provider Images /public/images/
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
        assistantProfessors: ['Dr. Parth Dhamija', 'Dr. M'],
        seniorResidents: ['Dr. Soumya A', 'Dr. Aseem Anand', 'Dr. C'],
        juniorResidents: ['Dr. Aseem Anand', 'Dr. Naveen Mangla', 'Dr. Soumya A', 'Dr. Navneeth Shankar', 'Dr. Dinesh', 'Dr. Vineeth Sunaria', 'Dr. Yogyatha', 'Dr. Priyanka', 'Dr. Sooraj'],
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
      image: '/images/rekhi.jpg',
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
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 justify-items-center mt-4">
      {names.map((name, idx) => (
        <div key={idx} className="flex flex-col items-center">
          {showImages && (
            <div 
              className="w-28 h-28 rounded-xl overflow-hidden shadow-md mb-3 group cursor-pointer"
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
          <p className="