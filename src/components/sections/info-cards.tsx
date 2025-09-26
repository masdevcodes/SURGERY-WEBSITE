'use client';

import Image from 'next/image';
import { ArrowRight, ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';
import { useState, MouseEvent, useEffect, useCallback } from 'react';

// 🔥 EXACT IMAGE MAPPINGS - ROBUST SOLUTION
const exactImageMappings: Record<string, string> = {
  // Stoma clinic images
  'stoma-banner': '/images/infocard/sto2.webp',
  'stoma-image-1': '/images/infocard/stomay.webp',
  'stoma-image-2': '/images/infocard/sto2.webp',
  'stoma-image-3': '/images/infocard/sto3.webp',
  'stoma-image-4': '/images/infocard/stom5.webp',
  
  // Breast clinic images
  'breast-banner': '/images/infocard/bre1.webp',
  'breast-image-1': '/images/infocard/brep.webp',
  'breast-image-2': '/images/infocard/bre5.webp',
  'breast-image-3': '/images/infocard/bre1.webp',
  
  // Slider images
  'slider-image-1': '/images/infocard/opd/opd1.jpg',
  'slider-image-2': '/images/infocard/opd/opd2.jpg',
  'slider-image-3': '/images/infocard/opd/opd3.jpg',
  'slider-image-4': '/images/infocard/opd/opd4.jpg',
  
  // Background image
  'background': '/111.png',
};

// 🔥 ROBUST IMAGE PATH FUNCTION
const getOptimizedImagePath = (imageKey: string): string => {
  // Exact match first - most reliable
  if (exactImageMappings[imageKey]) {
    return exactImageMappings[imageKey];
  }
  
  // Fallback for any unexpected image keys
  console.warn(`Image key "${imageKey}" not found in mappings, using fallback`);
  return `/images/fallback/${imageKey}.webp`;
};

// 🔥 PRELOAD CONFIGURATION
const preloadConfig = {
  critical: ['stoma-banner', 'breast-banner', 'slider-image-1', 'background'],
  high: ['stoma-image-1', 'stoma-image-2', 'breast-image-1', 'slider-image-2'],
  medium: ['stoma-image-3', 'stoma-image-4', 'breast-image-2', 'breast-image-3', 'slider-image-3', 'slider-image-4']
};

// OptimizedImage Component with robust image handling
interface OptimizedImageProps {
  imageKey: string; // Changed from src to imageKey for robust mapping
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
  imageKey,
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
  blurDataURL = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaUMkO0L2Q//9k=",
  onLoad,
  onError,
  isPreloaded = false,
}) => {
  const [isLoading, setIsLoading] = useState(!isPreloaded);
  const [hasError, setHasError] = useState(false);
  const [imageOpacity, setImageOpacity] = useState(isPreloaded ? 1 : 0);

  // 🔥 Get actual src from robust mapping
  const src = getOptimizedImagePath(imageKey);

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

  // If preloaded, show immediately
  useEffect(() => {
    if (isPreloaded) {
      setIsLoading(false);
      setImageOpacity(1);
    }
  }, [isPreloaded]);

  return (
    <div className={`relative ${className}`}>
      {/* Loading Spinner */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg">
          <Loader2 className="w-8 h-8 animate-spin text-teal-500" />
        </div>
      )}

      {/* Error Fallback */}
      {hasError ? (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 rounded-lg">
          <div className="text-center text-gray-500">
            <div className="w-16 h-16 mx-auto mb-2 bg-gray-300 rounded-lg flex items-center justify-center">
              <span className="text-2xl">📷</span>
            </div>
            <p className="text-sm">Image not available</p>
            <p className="text-xs mt-1">{imageKey}</p>
          </div>
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
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  // 🔥 ROBUST IMAGE ARRAYS USING KEYS
  const stomaImageKeys = ['stoma-image-1', 'stoma-image-2', 'stoma-image-3', 'stoma-image-4'];
  const breastImageKeys = ['breast-image-1', 'breast-image-2', 'breast-image-3'];
  const sliderImageKeys = ['slider-image-1', 'slider-image-2', 'slider-image-3', 'slider-image-4'];

  // 🔥 OPTIMIZED PRELOADING WITH PRIORITY LEVELS
  useEffect(() => {
    console.log("🚀 Starting optimized image preloading...");
    
    const preloadImage = (imageKey: string, priority: number) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = getOptimizedImagePath(imageKey);
        
        img.onload = () => {
          setLoadedImages(prev => new Set([...prev, imageKey]));
          console.log(`✅ Preloaded (P${priority}): ${imageKey}`);
          resolve(true);
        };
        
        img.onerror = () => {
          console.warn(`❌ Failed to preload: ${imageKey}`);
          resolve(false);
        };
      });
    };

    // Preload critical images first
    const preloadCritical = preloadConfig.critical.map(key => 
      preloadImage(key, 1)
    );

    Promise.all(preloadCritical).then(() => {
      console.log("🔥 Critical images loaded, starting high priority...");
      
      // Then high priority
      const preloadHigh = preloadConfig.high.map(key => 
        preloadImage(key, 2)
      );

      Promise.all(preloadHigh).then(() => {
        console.log("🎯 High priority images loaded, starting medium...");
        
        // Finally medium priority
        const preloadMedium = preloadConfig.medium.map(key => 
          preloadImage(key, 3)
        );

        Promise.all(preloadMedium).then(() => {
          setImagesPreloaded(true);
          console.log("✅ All images preloaded successfully!");
        });
      });
    });

  }, []);

  // Check if specific image is preloaded
  const isImagePreloaded = (imageKey: string) => loadedImages.has(imageKey);

  function openModal(key: string) {
    setModalContent(key);
  }

  function closeModal() {
    setModalContent(null);
  }

  function stopPropagation(e: MouseEvent<HTMLDivElement>) {
    e.stopPropagation();
  }

  // Set up auto-changing image sliders
  useEffect(() => {
    const stomaInterval = setInterval(() => {
      setStomaImageIndex((prevIndex) => 
        prevIndex === stomaImageKeys.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    const breastInterval = setInterval(() => {
      setBreastImageIndex((prevIndex) => 
        prevIndex === breastImageKeys.length - 1 ? 0 : prevIndex + 1
      );
    }, 3500);

    const sliderInterval = setInterval(() => {
      setSliderImageIndex((prevIndex) => 
        prevIndex === sliderImageKeys.length - 1 ? 0 : prevIndex + 1
      );
    }, 3200);

    return () => {
      clearInterval(stomaInterval);
      clearInterval(breastInterval);
      clearInterval(sliderInterval);
    };
  }, [stomaImageKeys.length, breastImageKeys.length, sliderImageKeys.length]);

  // ✅ Reusable modal with optimized image loading
  const Modal = ({
    children,
    onClose,
  }: {
    children: React.ReactNode;
    onClose: () => void;
  }) => (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg w-full max-w-5xl max-h-[90vh] overflow-y-auto p-8 relative"
        onClick={stopPropagation}
      >
        <button
          type="button"
          aria-label="Close modal"
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 font-bold text-2xl"
          onClick={onClose}
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );

  function getModalContent(key: string) {
    switch (key) {
      case 'stoma':
        return (
          <div className="flex flex-col justify-center items-center text-center">
            {/* 🔥 ROBUST BANNER IMAGE */}
            <div className="w-full mb-6">
              <OptimizedImage
                imageKey="stoma-banner"
                alt="Stoma Clinic Banner"
                width={1200}
                height={400}
                className="rounded-lg object-cover w-full h-64"
                quality={75}
                priority={true}
                isPreloaded={isImagePreloaded('stoma-banner')}
                placeholder="blur"
              />
            </div>

            <h2 className="text-3xl font-bold mb-6">
              Stoma Clinic Details
              {isImagePreloaded('stoma-banner') && (
                <span className="ml-2 text-sm text-green-600">✓</span>
              )}
            </h2>
            <p className="text-zinc-700 leading-relaxed max-w-4xl text-justify">
              {/* Your stoma clinic text */}
            </p>
          </div>
        );

      case 'breast':
        return (
          <div className="flex flex-col justify-center items-center text-center">
            {/* 🔥 ROBUST BANNER IMAGE */}
            <div className="w-full mb-6">
              <OptimizedImage
                imageKey="breast-banner"
                alt="Breast Clinic Banner"
                width={1200}
                height={400}
                className="rounded-lg object-cover w-full h-64"
                quality={75}
                priority={true}
                isPreloaded={isImagePreloaded('breast-banner')}
                placeholder="blur"
              />
            </div>

            <h2 className="text-3xl font-bold mb-6">
              Breast Clinic Details
              {isImagePreloaded('breast-banner') && (
                <span className="ml-2 text-sm text-green-600">✓</span>
              )}
            </h2>
            <p className="text-zinc-700 leading-relaxed max-w-4xl text-justify">
              {/* Your breast clinic text */}
            </p>
          </div>
        );

      default:
        return null;
    }
  }

  // Clinic card data with robust image keys
  const clinicCards = {
    stoma: {
      title: "Stoma Clinic",
      description: "Our Stoma Clinic offers expert care...",
      imageKeys: stomaImageKeys,
      imageIndex: stomaImageIndex,
      setImageIndex: setStomaImageIndex,
      bannerKey: 'stoma-banner'
    },
    breast: {
      title: "Breast Clinic",
      description: "Our Breast Clinic provides specialized care...",
      imageKeys: breastImageKeys,
      imageIndex: breastImageIndex,
      setImageIndex: setBreastImageIndex,
      bannerKey: 'breast-banner'
    },
    slider: {
      title: "Medical Facilities",
      description: "State-of-the-art healthcare services",
      imageKeys: sliderImageKeys,
      imageIndex: sliderImageIndex,
      setImageIndex: setSliderImageIndex,
      bannerKey: 'slider-image-1'
    }
  };

  // Render image with robust key system
  const renderImage = (imageKey: string, alt: string, className: string = '', fill: boolean = false) => (
    <OptimizedImage
      imageKey={imageKey}
      alt={alt}
      fill={fill}
      className={className}
      quality={85}
      isPreloaded={isImagePreloaded(imageKey)}
      loading={isImagePreloaded(imageKey) ? 'eager' : 'lazy'}
    />
  );

  // Render a single clinic card
  const renderClinicCard = (key: string) => {
    const clinic = clinicCards[key as keyof typeof clinicCards];
    
    if (key === 'slider') {
      return (
        <div key={key} className="rounded-lg shadow-lg overflow-hidden flex flex-col h-full group hover:shadow-xl transition-all duration-500 ease-in-out">
          <div className="relative overflow-hidden flex-grow">
            <div className="w-full h-full relative">
              {renderImage(
                clinic.imageKeys[clinic.imageIndex],
                `Medical facility image ${clinic.imageIndex + 1}`,
                "object-cover",
                true
              )}
              
              <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{clinic.title}</h3>
                <p className="text-sm mb-4 max-w-md">{clinic.description}</p>
              </div>
              
              <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
                {clinic.imageKeys.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === clinic.imageIndex ? 'bg-white scale-125' : 'bg-white/50'
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      clinic.setImageIndex(index);
                    }}
                    aria-label={`View image ${index + 1}`}
                  />
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
            {renderImage(
              clinic.imageKeys[clinic.imageIndex],
              `${clinic.title} image`,
              "object-cover transition-all duration-700 ease-in-out group-hover:scale-110",
              true
            )}
          </div>
          
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
            {clinic.imageKeys.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === clinic.imageIndex ? 'bg-white scale-125' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
        
        <div className="p-8 bg-white flex-grow flex flex-col justify-between text-center">
          <div>
            <h3 className="text-3xl font-bold font-body text-blue-950 mb-4 group-hover:text-teal-500 transition-colors duration-500">
              {clinic.title}
              {isImagePreloaded(clinic.imageKeys[0]) && (
                <span className="ml-2 text-sm text-green-600">✓</span>
              )}
            </h3>
            <p className="text-zinc-500 leading-relaxed mb-6 max-w-md mx-auto">
              {clinic.description}
            </p>
          </div>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              openModal(key);
            }}
            className="font-bold text-teal-500 flex items-center gap-2 justify-center hover:text-teal-600 transition-colors duration-300"
          >
            READ MORE 
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    );
  };

  const clinicOrder = ['breast', 'stoma', 'slider'];

  return (
    <>
      <section
        id="info"
        className="pb-24 bg-gradient-to-b from-white via-white/0 to-white relative"
      >
        {/* 🔥 ROBUST BACKGROUND IMAGE */}
        <div className="absolute inset-0 opacity-30">
          <OptimizedImage
            imageKey="background"
            alt="Abstract background"
            fill
            className="object-cover"
            isPreloaded={isImagePreloaded('background')}
          />
        </div>

        <div className="container mx-auto relative z-10">
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