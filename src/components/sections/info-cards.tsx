'use client';

import Image from 'next/image';
import { ArrowRight, ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';
import { useState, MouseEvent, useEffect, useCallback } from 'react';

// OptimizedImage Component (No changes needed here, it's already well-built)
interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  priority?: boolean;
  quality?: number;
  sizes?: string;
  isPreloaded?: boolean;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  fill,
  className = '',
  priority = false,
  quality = 85,
  sizes,
  isPreloaded = false,
}) => {
  const [isLoading, setIsLoading] = useState(!isPreloaded);
  const [imageOpacity, setImageOpacity] = useState(isPreloaded ? 1 : 0);

  const handleLoad = useCallback(() => {
    setIsLoading(false);
    setImageOpacity(1);
  }, []);

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg">
          <Loader2 className="w-8 h-8 animate-spin text-teal-500" />
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        fill={fill}
        className={`transition-opacity duration-500 ease-in-out ${className}`}
        style={{ opacity: imageOpacity }}
        priority={priority}
        quality={quality}
        sizes={sizes}
        loading={priority || isPreloaded ? 'eager' : 'lazy'}
        placeholder="blur"
        blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
        onLoad={handleLoad}
      />
    </div>
  );
};

// ✅ SINGLE SOURCE OF TRUTH: All data is now in one place.
const clinicData = {
  stoma: {
    title: "Stoma Clinic",
    description: "Our Stoma Clinic offers expert care for patients with colostomies, ileostomies, and urostomies...",
    modalText: "The Stoma Clinic at GMC Patiala functions as a dedicated service within the Department of General Surgery...",
    cardImages: [
      '/images/infocard/stomay.webp',
      '/images/infocard/sto2.webp',
      '/images/infocard/sto3.webp',
      '/images/infocard/stom5.webp',
    ],
    bannerImage: '/images/infocard/sto2.webp', // Banner for the modal
  },
  breast: {
    title: "Breast Clinic",
    description: "Our Breast Clinic provides specialized care for women presenting with breast-related complaints...",
    modalText: "The Breast Clinic at GMC Patiala, under the Department of General Surgery, is a dedicated service...",
    cardImages: [
      '/images/infocard/brep.webp',
      '/images/infocard/bre5.webp',
      '/images/infocard/bre1.webp',
    ],
    bannerImage: '/images/infocard/bre1.webp', // Banner for the modal
  },
  slider: {
    title: "Our Facilities",
    description: "Explore our modern facilities and patient care areas.",
    cardImages: [
      '/images/infocard/opd/opd1.jpg',
      '/images/infocard/opd/opd2.jpg',
      '/images/infocard/opd/opd3.jpg',
      '/images/infocard/opd/opd4.jpg',
    ],
  },
};

export function InfoCards() {
  const [modalContentKey, setModalContentKey] = useState<string | null>(null);
  const [imageIndexes, setImageIndexes] = useState({ stoma: 0, breast: 0, slider: 0 });
  const [imagesPreloaded, setImagesPreloaded] = useState(false);

  // ✅ FUNCTION TO COLLECT ALL IMAGES AUTOMATICALLY
  const getAllImagePaths = useCallback(() => {
    const paths = new Set<string>();
    Object.values(clinicData).forEach(clinic => {
      clinic.cardImages.forEach(img => paths.add(img));
      if (clinic.bannerImage) {
        paths.add(clinic.bannerImage);
      }
    });
    paths.add('/111.png'); // Add background image
    return Array.from(paths);
  }, []);

  const allImagesToPreload = getAllImagePaths();

  // Preload images on component mount
  useEffect(() => {
    const timer = setTimeout(() => setImagesPreloaded(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  // Set up auto-changing image sliders for cards
  useEffect(() => {
    const intervals = Object.keys(imageIndexes).map((key, index) => {
      return setInterval(() => {
        setImageIndexes(prev => ({
          ...prev,
          [key]: (prev[key as keyof typeof prev] + 1) % clinicData[key as keyof typeof clinicData].cardImages.length,
        }));
      }, 3000 + index * 200); // Stagger intervals
    });
    return () => intervals.forEach(clearInterval);
  }, [imageIndexes]);

  const openModal = (key: string) => setModalContentKey(key);
  const closeModal = () => setModalContentKey(null);
  const stopPropagation = (e: MouseEvent) => e.stopPropagation();

  return (
    <>
      {/* 🔥 DYNAMIC PRELOADING SECTION */}
      <div className="hidden">
        {allImagesToPreload.map((src, index) => (
          <Image
            key={`infocards-preload-${index}`}
            src={src}
            alt="Preload InfoCards Image"
            width={300}
            height={300}
            priority // Give all images priority for immediate loading
          />
        ))}
      </div>

      <section id="info" className="pb-24 bg-gradient-to-b from-white via-white/0 to-white relative">
        <div className="absolute inset-0 opacity-30">
          <Image src="/111.png" alt="Abstract background" fill className="object-cover" />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {Object.entries(clinicData).map(([key, clinic]) => {
              const imageIndex = imageIndexes[key as keyof typeof imageIndexes];
              if (key === 'slider') {
                 // Slider-specific card layout
                return (
                  <div key={key} className="rounded-lg shadow-lg overflow-hidden flex flex-col h-full group">
                    <div className="relative overflow-hidden flex-grow h-full">
                       <OptimizedImage
                        src={clinic.cardImages[imageIndex]}
                        alt={`${clinic.title} image`}
                        fill
                        className="object-cover"
                        isPreloaded={imagesPreloaded}
                      />
                      <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-6 text-white">
                        <h3 className="text-2xl font-bold mb-2">{clinic.title}</h3>
                        <p className="text-sm mb-4 max-w-md">{clinic.description}</p>
                      </div>
                    </div>
                  </div>
                )
              }
              // Standard card layout
              return (
                <div key={key} className="rounded-lg shadow-lg overflow-hidden flex flex-col h-full group hover:shadow-xl transition-all duration-500 ease-in-out transform hover:-translate-y-1">
                  <div className="w-full h-64 relative overflow-hidden">
                    <OptimizedImage
                      src={clinic.cardImages[imageIndex]}
                      alt={`${clinic.title} image`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      isPreloaded={imagesPreloaded}
                    />
                  </div>
                  <div className="p-8 bg-white flex-grow flex flex-col justify-between text-center">
                    <div>
                      <h3 className="text-3xl font-bold font-body text-blue-950 mb-4 group-hover:text-teal-500 transition-colors duration-500">
                        {clinic.title}
                      </h3>
                      <p className="text-zinc-500 leading-relaxed mb-6 max-w-md mx-auto line-clamp-4">
                        {clinic.description}
                      </p>
                    </div>
                    <a href="#" onClick={(e) => { e.preventDefault(); openModal(key); }} className="font-bold text-teal-500 flex items-center gap-2 justify-center hover:text-teal-600">
                      READ MORE <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Modal rendering */}
        {modalContentKey && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4" onClick={closeModal}>
            <div className="bg-white rounded-lg w-full max-w-5xl max-h-[90vh] overflow-y-auto p-8 relative" onClick={stopPropagation}>
              <button type="button" aria-label="Close modal" className="absolute top-3 right-3 text-gray-600 hover:text-gray-900" onClick={closeModal}>
                <span className="text-3xl font-bold">&times;</span>
              </button>
              <div className="flex flex-col justify-center items-center text-center">
                <div className="w-full mb-6 h-64 relative">
                  <OptimizedImage
                    src={clinicData[modalContentKey as keyof typeof clinicData].bannerImage!}
                    alt={`${clinicData[modalContentKey as keyof typeof clinicData].title} Banner`}
                    fill
                    className="rounded-lg object-cover"
                    priority // The modal image is critical once opened
                    isPreloaded={imagesPreloaded}
                  />
                </div>
                <h2 className="text-3xl font-bold mb-6">{clinicData[modalContentKey as keyof typeof clinicData].title} Details</h2>
                <p className="text-zinc-700 leading-relaxed max-w-4xl text-justify">
                  {clinicData[modalContentKey as keyof typeof clinicData].modalText}
                </p>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}