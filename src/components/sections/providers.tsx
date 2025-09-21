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
    associateProfessors: string[];
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
    
    // Use full name for image path to avoid conflicts
    const fullName = cleanName.replace(/\s+/g, '_');
    return `/images/doctors/${fullName}.jpg`;
  };

  // ... rest of the code remains the same
}