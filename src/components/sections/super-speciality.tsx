'use client';
import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import { Heart, Brain, Shield, Scissors, Baby, Activity, ArrowRight, ArrowLeft, X } from 'lucide-react';

// ... your interfaces remain the same

export function SuperSpeciality() {
  const [selectedSpeciality, setSelectedSpeciality] = useState<Speciality | null>(null);
  const [currentDoctorIndex, setCurrentDoctorIndex] = useState<Record<number, number>>({});
  const [preloadedImages, setPreloadedImages] = useState<Set<string>>(new Set());

  // ... your specialities array remains the same

  // ✅ CORRECT: Actually preload images when component mounts
  useEffect(() => {
    const preloadImages = async () => {
      const imagesToPreload = new Set<string>();
      
      // Collect all images that might appear in modals
      specialities.forEach(speciality => {
        // Preload speciality images
        if (speciality.image) imagesToPreload.add(speciality.image);
        
        // Preload doctor images
        speciality.doctors.forEach(doctor => {
          if (doctor.image) imagesToPreload.add(doctor.image);
        });
      });

      console.log(`🖼️ Preloading ${imagesToPreload.size} images for faster modals...`);

      // Actually preload images using Image objects
      const preloadPromises = Array.from(imagesToPreload).map(src => {
        return new Promise((resolve, reject) => {
          if (!src) {
            resolve(null);
            return;
          }
          
          const img = new Image();
          img.src = src;
          img.onload = () => {
            console.log(`✅ Preloaded: ${src}`);
            resolve(src);
          };
          img.onerror = () => {
            console.warn(`❌ Failed to preload: ${src}`);
            resolve(null);
          };
        });
      });

      await Promise.all(preloadPromises);
      setPreloadedImages(imagesToPreload);
    };

    preloadImages();
  }, []);

  // ✅ CORRECT: Simple optimized image component
  const OptimizedImage = ({
    src,
    alt,
    className = '',
    isModal = false
  }: {
    src: string;
    alt: string;
    className?: string;
    isModal?: boolean;
  }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    
    const finalSrc = src || '/placeholder-doctor.svg';

    return (
      <div className={`relative overflow-hidden ${className}`}>
        {isLoading && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg flex items-center justify-center">
            <div className="w-6 h-6 border-3 border-teal-200 border-t-teal-500 rounded-full animate-spin"></div>
          </div>
        )}
        
        <Image
          src={finalSrc}
          alt={alt}
          width={320}
          height={320}
          className={`transition-all duration-300 ${
            isLoading ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          } object-cover hover:scale-110`}
          priority={isModal && preloadedImages.has(src)} // High priority for preloaded images
          loading={isModal ? "eager" : "lazy"}
          quality={80}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setHasError(true);
            setIsLoading(false);
          }}
        />
      </div>
    );
  };

  // ... rest of your component with proper modal usage:

  return (
    <section id="super-speciality" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* ... your existing JSX */}

      {/* Modal with preloaded images */}
      {selectedSpeciality && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* ... modal content */}
            
            {/* ✅ Images will load instantly if preloaded */}
            <OptimizedImage
              src={doctor.image || selectedSpeciality.image}
              alt={doctor.name}
              className="w-48 h-48 rounded-2xl shadow-lg"
              isModal={true}
            />
          </div>
        </div>
      )}
    </section>
  );
}