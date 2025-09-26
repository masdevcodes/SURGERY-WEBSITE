'use client';

import Image from 'next/image';
import { ArrowRight, ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';
import { useState, MouseEvent, useEffect, useCallback } from 'react';

// OptimizedImage Component (Original - No Changes)
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
  loading?: 'lazy' | 'eager';
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  onLoad?: () => void;
  onError?: () => void;
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
  loading = 'lazy',
  placeholder = 'blur',
  blurDataURL = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaUMkO0L2Q//9k=",
  onLoad,
  onError,
  isPreloaded = false,
}) => {
  const [isLoading, setIsLoading] = useState(!isPreloaded);
  const [hasError, setHasError] = useState(false);
  const [imageOpacity, setImageOpacity] = useState(isPreloaded ? 1 : 0);

  const handleLoad = useCallback(() => {
    setIsLoading(false);
    setImageOpacity(1);
    onLoad?.();
  }, [onLoad]);

  const handleError = useCallback(() => {
    setIsLoading(false);
    setHasError(true);
    setImageOpacity(1);
    onError?.();
  }, [onError]);

  useEffect(() => {
    if (isPreloaded) {
      setIsLoading(false);
      setImageOpacity(1);
    }
  }, [isPreloaded]);

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg">
          <Loader2 className="w-8 h-8 animate-spin text-teal-500" />
        </div>
      )}
      {hasError ? (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 rounded-lg">
          <p className="text-sm text-gray-500">Image not available</p>
        </div>
      ) : (
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
          loading={priority ? 'eager' : (isPreloaded ? 'eager' : loading)}
          placeholder={placeholder}
          blurDataURL={blurDataURL}
          onLoad={handleLoad}
          onError={handleError}
        />
      )}
    </div>
  );
};

export function InfoCards() {
  const [modalContent, setModalContent] = useState<string | null>(null);
  const [stomaImageIndex, setStomaImageIndex] = useState(0);
  const [breastImageIndex, setBreastImageIndex] = useState(0);
  const [sliderImageIndex, setSliderImageIndex] = useState(0);
  const [imagesPreloaded, setImagesPreloaded] = useState(false);

  // Original data arrays
  const stomaImages = [
    '/images/infocard/stomay.webp',
    '/images/infocard/sto2.webp',
    '/images/infocard/sto3.webp',
    '/images/infocard/stom5.webp',
  ];
  const breastImages = [
    '/images/infocard/brep.webp',
    '/images/infocard/bre5.webp',
    '/images/infocard/bre1.webp',
  ];
  const sliderImages = [
    '/images/infocard/opd/opd1.jpg',
    '/images/infocard/opd/opd2.jpg',
    '/images/infocard/opd/opd3.jpg',
    '/images/infocard/opd/opd4.jpg',
  ];

  // ✅ MODIFICATION: Function to automatically collect all images for preloading
  const getAllImagePaths = useCallback(() => {
    const allPaths = [
      ...stomaImages,
      ...breastImages,
      ...sliderImages,
      '/images/infocard/sto2.webp',   // Modal banner for Stoma
      '/images/infocard/bre1.webp',    // Modal banner for Breast
      '/111.png',                      // Background image
    ];
    // Use Set to ensure every image is preloaded only once
    return [...new Set(allPaths)];
  }, [stomaImages, breastImages, sliderImages]);

  // The list of images to preload is now generated dynamically
  const allImages = getAllImagePaths();


  // Define the desired order of clinics (Original - No Changes)
  const clinicOrder = ['breast','stoma','slider'];

  function openModal(key: string) {
    setModalContent(key);
  }
  function closeModal() {
    setModalContent(null);
  }
  function stopPropagation(e: MouseEvent<HTMLDivElement>) {
    e.stopPropagation();
  }

  // All useEffect hooks remain the same as the original
  useEffect(() => {
    const timer = setTimeout(() => {
      setImagesPreloaded(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const stomaInterval = setInterval(() => {
      setStomaImageIndex((prevIndex) => (prevIndex + 1) % stomaImages.length);
    }, 3000);
    const breastInterval = setInterval(() => {
      setBreastImageIndex((prevIndex) => (prevIndex + 1) % breastImages.length);
    }, 3500);
    const sliderInterval = setInterval(() => {
      setSliderImageIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
    }, 3200);
    return () => {
      clearInterval(stomaInterval);
      clearInterval(breastInterval);
      clearInterval(sliderInterval);
    };
  }, [stomaImages.length, breastImages.length, sliderImages.length]);

// All rendering logic, components, and data structures below are from the original code.

const Modal = ({ children, onClose }: { children: React.ReactNode; onClose: () => void; }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={onClose}>
        <div className="bg-white rounded-lg w-full max-w-5xl max-h-[90vh] overflow-y-auto p-8 relative" onClick={stopPropagation}>
            <button type="button" aria-label="Close modal" className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 font-bold text-2xl" onClick={onClose}>×</button>
            {children}
        </div>
    </div>
);

function getModalContent(key: string) {
  switch (key) {
    case 'stoma':
      return (
        <div className="flex flex-col justify-center items-center text-center">
          <div className="w-full mb-6">
            <OptimizedImage
              src="/images/infocard/sto2.webp"
              alt="Stoma Clinic Banner"
              width={1200}
              height={400}
              className="rounded-lg object-cover w-full h-64"
              priority={true}
              isPreloaded={imagesPreloaded}
            />
          </div>
          <h2 className="text-3xl font-bold mb-6">Stoma Clinic Details</h2>
          <p className="text-zinc-700 leading-relaxed max-w-4xl text-justify">The Stoma Clinic at GMC Patiala functions as a dedicated service...</p>
        </div>
      );
    case 'breast':
      return (
        <div className="flex flex-col justify-center items-center text-center">
          <div className="w-full mb-6">
            <OptimizedImage
              src="/images/infocard/bre1.webp"
              alt="Breast Clinic Banner"
              width={1200}
              height={400}
              className="rounded-lg object-cover w-full h-64"
              priority={true}
              isPreloaded={imagesPreloaded}
            />
          </div>
          <h2 className="text-3xl font-bold mb-6">Breast Clinic Details</h2>
          <p className="text-zinc-700 leading-relaxed max-w-4xl text-justify">The Breast Clinic at GMC Patiala, under the Department of General Surgery, is a dedicated service...</p>
        </div>
      );
    default:
      return null;
  }
}
  
  const clinicCards = {
    stoma: {
      title: "Stoma Clinic",
      description: "Our Stoma Clinic offers expert care for patients with colostomies, ileostomies, and urostomies...",
      images: stomaImages,
      imageIndex: stomaImageIndex,
      setImageIndex: setStomaImageIndex
    },
    breast: {
      title: "Breast Clinic",
      description: "Our Breast Clinic provides specialized care for women presenting with breast-related complaints...",
      images: breastImages,
      imageIndex: breastImageIndex,
      setImageIndex: setBreastImageIndex
    },
    slider: {
      title: "",
      description: "",
      images: sliderImages,
      imageIndex: sliderImageIndex,
      setImageIndex: setSliderImageIndex
    }
  };

  const renderClinicCard = (key: string) => {
    const clinic = clinicCards[key as keyof typeof clinicCards];
    
    if (key === 'slider') {
      return (
        <div key={key} className="rounded-lg shadow-lg overflow-hidden flex flex-col h-full group hover:shadow-xl transition-all duration-500 ease-in-out">
          <div className="relative overflow-hidden flex-grow">
            <div className="w-full h-full relative">
              <Image src={clinic.images[clinic.imageIndex]} alt={`Medical facility image ${clinic.imageIndex + 1}`} fill className="object-cover" quality={90} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" loading="lazy" />
              <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{clinic.title}</h3>
                <p className="text-sm mb-4 max-w-md">{clinic.description}</p>
              </div>
              <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
                {clinic.images.map((_, index) => (
                  <button key={index} className={`w-3 h-3 rounded-full transition-all duration-300 ${index === clinic.imageIndex ? 'bg-white scale-125' : 'bg-white/50'}`} onClick={(e) => { e.stopPropagation(); clinic.setImageIndex(index); }} aria-label={`View image ${index + 1}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }
    
    return (
      <div key={key} className="rounded-lg shadow-lg overflow-hidden flex flex-col h-full group hover:shadow-xl transition-all duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
        <div className="relative overflow-hidden">
          <div className="w-full h-64 relative overflow-hidden">
            <Image src={clinic.images[clinic.imageIndex]} alt={`${clinic.title} image`} fill className="object-cover transition-all duration-700 ease-in-out group-hover:scale-110" quality={85} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" loading="lazy" />
          </div>
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
            {clinic.images.map((_, index) => (<div key={index} className={`w-3 h-3 rounded-full transition-all duration-300 ${index === clinic.imageIndex ? 'bg-white scale-125' : 'bg-white/50'}`} />))}
          </div>
        </div>
        <div className="p-8 bg-white flex-grow flex flex-col justify-between text-center">
          <div>
            <h3 className="text-3xl font-bold font-body text-blue-950 mb-4 group-hover:text-teal-500 transition-colors duration-500">{clinic.title}</h3>
            <p className="text-zinc-500 leading-relaxed mb-6 max-w-md mx-auto">{clinic.description}</p>
          </div>
          <a href="#" onClick={(e) => { e.preventDefault(); openModal(key); }} className="font-bold text-teal-500 flex items-center gap-2 justify-center hover:text-teal-600 transition-colors duration-300">
            READ MORE <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* ✅ CRITICAL: This section now uses the dynamically generated 'allImages' list */}
      <div className="hidden" style={{ position: 'absolute', left: '-9999px', top: '-9999px' }}>
        {allImages.map((src, index) => (
          <Image
            key={`infocards-preload-${index}`}
            src={src}
            alt="Preload InfoCards Image"
            width={300}
            height={300}
            priority={true}
            quality={75}
            unoptimized={false}
          />
        ))}
      </div>
      
      <section id="info" className="pb-24 bg-gradient-to-b from-white via-white/0 to-white relative">
        <div className="absolute inset-0 opacity-30">
          <Image src="/111.png" alt="Abstract background" fill className="object-cover" />
        </div>
        <div className="container mx-auto relative z-10">
          {/* This mapping preserves the original card order */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {clinicOrder.map(key => renderClinicCard(key))}
          </div>
        </div>
        {modalContent && (
          <Modal onClose={closeModal}>
            {getModalContent(modalContent)}
          </Modal>
        )}
      </section>
    </>
  );
}