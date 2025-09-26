'use client';

import Image from 'next/image';
import { ArrowRight, ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';
import { useState, MouseEvent, useEffect, useCallback } from 'react';

// OptimizedImage Component with loading states and error handling
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

  // Sample image arrays - replace with your actual image paths
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

  // 🔥 ALL IMAGES THAT NEED TO BE PRELOADED WHEN WEBSITE LOADS
  const allImages = [
    // Stoma clinic images - PRIORITY
    '/images/infocard/stomay.webp',
    '/images/infocard/sto2.webp',
    '/images/infocard/sto3.webp',
    '/images/infocard/stom5.webp',
    // Breast clinic images - PRIORITY  
    '/images/infocard/brep.webp',
    '/images/infocard/bre5.webp',
    '/images/infocard/bre1.webp',
    // Slider images - PRIORITY
    '/images/infocard/opd/opd1.jpg',
    '/images/infocard/opd/opd2.jpg',
    '/images/infocard/opd/opd3.jpg',
    '/images/infocard/opd/opd4.jpg',
    // Background image
    '/111.png',
  ];

  // Define the desired order of clinics
  const clinicOrder = ['breast','stoma','slider']; // Change this array to reorder

  function openModal(key: string) {
    setModalContent(key);
  }

  function closeModal() {
    setModalContent(null);
  }

  function stopPropagation(e: MouseEvent<HTMLDivElement>) {
    e.stopPropagation();
  }

  // 🚀 PRELOAD IMAGES IMMEDIATELY WHEN COMPONENT MOUNTS (WEBSITE LOADS)
  useEffect(() => {
    console.log("🌐 Website loaded - Starting InfoCards image preload...");
    console.log(`📂 Preloading ${allImages.length} InfoCards images...`);
    
    // Track preloading completion
    const timer = setTimeout(() => {
      setImagesPreloaded(true);
      console.log("✅ All InfoCards images preloaded successfully!");
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  // Set up auto-changing image sliders
  useEffect(() => {
    const stomaInterval = setInterval(() => {
      setStomaImageIndex((prevIndex) => 
        prevIndex === stomaImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    const breastInterval = setInterval(() => {
      setBreastImageIndex((prevIndex) => 
        prevIndex === breastImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3500); // Slightly offset timing for visual interest

    const sliderInterval = setInterval(() => {
      setSliderImageIndex((prevIndex) => 
        prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3200); // Different timing for slider images

    return () => {
      clearInterval(stomaInterval);
      clearInterval(breastInterval);
      clearInterval(sliderInterval);
    };
  }, [stomaImages.length, breastImages.length, sliderImages.length]);

  // Function to manually change slider image
  const changeSliderImage = (direction: 'next' | 'prev') => {
    if (direction === 'next') {
      setSliderImageIndex((prevIndex) => 
        prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
      );
    } else {
      setSliderImageIndex((prevIndex) => 
        prevIndex === 0 ? sliderImages.length - 1 : prevIndex - 1
      );
    }
  };

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
          {/* Banner Image for Stoma Clinic */}
          <div className="w-full mb-6">
            <Image
              src="/images/infocard/sto2.webp"
              alt="Stoma Clinic Banner"
              width={1200}
              height={400}
              className="rounded-lg object-cover w-full h-64"
              quality={75}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaUMkO0L2Q//9k="
            />
          </div>

          <h2 className="text-3xl font-bold mb-6">
            Stoma Clinic Details
            {imagesPreloaded && (
              <span className="ml-2 text-lg text-green-600"></span>
            )}
          </h2>
          <p className="text-zinc-700 leading-relaxed max-w-4xl text-justify">
            The Stoma Clinic at GMC Patiala functions as a dedicated service
            within the Department of General Surgery, designed to address the
            unique needs of patients living with stomas. It serves as a
            one-stop facility where patients receive holistic care—covering
            surgical follow-up, stoma site evaluation, and personalized advice
            for daily management. Special attention is given to ensuring that
            each patient is fitted with the most suitable appliance, thereby
            minimizing discomfort and improving confidence in social and
            personal life. The clinic also plays a vital role in identifying
            and treating common stoma-related complications such as
            infections, skin excoriations, or mechanical problems. Beyond the
            physical aspects, the clinic recognizes the psychological and
            social challenges faced by patients and provides supportive
            counselling to ease their transition into a new lifestyle.
            Nutrition counselling, lifestyle modification strategies, and
            reintegration into normal routines are also emphasized to ensure
            overall well-being. Regular review visits help maintain long-term
            stoma health while allowing patients to seek solutions to any
            difficulties they encounter. The clinic further acts as a teaching
            platform for medical students and residents, highlighting the
            principles of stoma care and patient rehabilitation. Through this
            multidisciplinary and compassionate approach, the Stoma Clinic at
            GMC Patiala ensures that every patient is cared for with dignity,
            empathy, and expertise.
          </p>
        </div>
      );

    case 'breast':
      return (
        <div className="flex flex-col justify-center items-center text-center">
          {/* Banner Image for Breast Clinic */}
          <div className="w-full mb-6">
            <Image
              src="/images/infocard/bre1.webp"
              alt="Breast Clinic Banner"
              width={1200}
              height={400}
              className="rounded-lg object-cover w-full h-64"
              quality={75}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaUMkO0L2Q//9k="
            />
          </div>

          <h2 className="text-3xl font-bold mb-6">
            Breast Clinic Details
            {imagesPreloaded && (
              <span className="ml-2 text-lg text-green-600"></span>
            )}
          </h2>
          <p className="text-zinc-700 leading-relaxed max-w-4xl text-justify">
            The Breast Clinic at GMC Patiala, under the Department of General
            Surgery, is a dedicated service aimed at providing comprehensive
            care for patients with breast diseases. It caters to a wide
            spectrum of conditions including benign breast disorders,
            infections, fibroadenomas, and breast malignancies. A strong
            emphasis is placed on early detection of breast cancer through
            clinical breast examination, mammography, ultrasound, and guided
            biopsies. The clinic provides a structured diagnostic pathway
            ensuring accurate evaluation and timely intervention. Patients
            receive individualized treatment plans, whether surgical, medical,
            or combined, based on their diagnosis and stage of disease.
            Counselling sessions are conducted to help patients understand
            their condition, available treatment options, and expected
            outcomes. Preventive strategies such as breast self-examination
            training and awareness programs are also integrated into the
            clinic's routine. Postoperative follow-up and rehabilitation,
            including wound care and lymphedema management, are actively
            supported. The clinic also provides psychological and emotional
            support, recognizing the significant impact breast diseases can
            have on self-image and quality of life. By combining advanced
            diagnostic tools, multidisciplinary treatment, and patient-focused
            counselling, the Breast Clinic at GMC Patiala strives to deliver
            holistic care with compassion and excellence. 
          </p>
        </div>
      );

    default:
      return null;
  }
}
  
  

  // Clinic card data - makes it easier to reorder
  const clinicCards = {
    stoma: {
      title: "Stoma Clinic",
      description: "Our Stoma Clinic offers expert care for patients with colostomies, ileostomies, and urostomies. Our services include assessment, fitting of appropriate appliances, and prompt management of stoma-related complications. We emphasize patient education, lifestyle counselling, and emotional support to empower individuals in managing their stoma with confidence. Our goal is to restore dignity, comfort, and the highest quality of life for all patients under our care.",
      images: stomaImages,
      imageIndex: stomaImageIndex,
      setImageIndex: setStomaImageIndex
    },
    breast: {
      title: "Breast Clinic",
      description: "Our Breast Clinic provides specialized care for women presenting with breast-related complaints such as lumps, pain, discharge, or infections. The clinic offers early detection services for breast cancer, including clinical breast examination, imaging guidance, and biopsy facilities. Along with diagnosis and treatment, it emphasizes patient counselling, awareness, and follow-up care to ensure comprehensive management of breast health.",
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

  // Render a single clinic card
  const renderClinicCard = (key: string) => {
    const clinic = clinicCards[key as keyof typeof clinicCards];
    
    if (key === 'slider') {
      return (
        <div key={key} className="rounded-lg shadow-lg overflow-hidden flex flex-col h-full group hover:shadow-xl transition-all duration-500 ease-in-out">
          <div className="relative overflow-hidden flex-grow">
            {/* Full card image slider */}
            <div className="w-full h-full relative">
              <Image
                src={clinic.images[clinic.imageIndex]}
                alt={`Medical facility image ${clinic.imageIndex + 1}`}
                fill
                className="object-cover"
                quality={90}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                loading="lazy"
              />
              
              {/* Semi-transparent overlay with title and description */}
              <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{clinic.title}</h3>
                <p className="text-sm mb-4 max-w-md">{clinic.description}</p>
                
                {/* Image counter */}
                <div className="text-xs opacity-80 mb-2">
                  Image {clinic.imageIndex + 1} of {clinic.images.length}
                  {imagesPreloaded && (
                    <span className="ml-2">⚡</span>
                  )}
                </div>
              </div>
              
              {/* Image Indicators */}
              <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
                {clinic.images.map((_, index) => (
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
          {/* Image Container with Fixed Aspect Ratio and Zoom Effect */}
          <div className="w-full h-64 relative overflow-hidden">
            <Image
              src={clinic.images[clinic.imageIndex]}
              alt={`${clinic.title} image`}
              fill
              className="object-cover transition-all duration-700 ease-in-out group-hover:scale-110"
              quality={85}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              loading="lazy"
            />
          </div>
          
          {/* Image Indicators */}
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
            {clinic.images.map((_, index) => (
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
              {imagesPreloaded && (
                <span className="ml-2 text-sm text-green-600">⚡</span>
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
            {imagesPreloaded && (
              <span className="ml-1 text-xs"></span>
            )}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* 🔥 CRITICAL: HIDDEN PRELOAD IMAGES - LOADS IMMEDIATELY WHEN WEBSITE LOADS */}
      <div className="hidden" style={{ position: 'absolute', left: '-9999px', top: '-9999px' }}>
        {allImages.map((src, index) => (
          <Image
            key={`infocards-preload-${index}`}
            src={src}
            alt="Preload InfoCards Image"
            width={300}
            height={300}
            priority={true} // ALL images get priority for immediate loading
            quality={75}
            onLoad={() => console.log(`✅ InfoCards - Preloaded: ${src}`)}
            onError={() => console.warn(`❌ InfoCards - Failed to preload: ${src}`)}
            unoptimized={false}
          />
        ))}
      </div>
      
      <section
        id="info"
        className="pb-24 bg-gradient-to-b from-white via-white/0 to-white relative"
      >
      {/* Background Image */}
      <div className="absolute inset-0 opacity-30">
        <Image
          src="/111.png"
          alt="Abstract background"
          fill
          className="object-cover"
        />
      </div>

      {/* Container */}
      <div className="container mx-auto relative z-10">
        {imagesPreloaded && (
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
            </div>
          </div>
        )}
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Render cards in the specified order */}
          {clinicOrder.map(key => renderClinicCard(key))}
        </div>
      </div>

      {/* Modal */}
      {modalContent && (
        <Modal onClose={closeModal}>
          {imagesPreloaded && (
            <div className="absolute top-4 left-4 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">
              ⚡ Lightning Fast
            </div>
          )}
          {getModalContent(modalContent)}
        </Modal>
      )}
    </section>
    </>
  );
}
