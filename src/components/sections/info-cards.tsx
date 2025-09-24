'use client';

import Image from 'next/image';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, MouseEvent, useEffect } from 'react';

// Define the Modal component outside of InfoCards to avoid re-creation
const Modal = ({
  children,
  onClose,
}: {
  children: React.ReactNode;
  onClose: () => void;
}) => {
  function stopPropagation(e: MouseEvent<HTMLDivElement>) {
    e.stopPropagation();
  }

  return (
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
};

// Optimized Image Component
const OptimizedImage = ({ 
  src, 
  fallback, 
  alt, 
  fill = false, 
  className = "", 
  sizes = "",
  imageKey 
}: {
  src: string;
  fallback: string;
  alt: string;
  fill?: boolean;
  className?: string;
  sizes?: string;
  imageKey: string;
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`relative ${isLoading ? 'animate-pulse bg-gray-200' : ''}`}>
      <Image
        src={imgSrc}
        alt={alt}
        fill={fill}
        className={`${className} transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        sizes={sizes}
        quality={80}
        priority={imageKey.includes('first')}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          if (imgSrc.includes('.webp')) {
            setImgSrc(fallback);
          }
        }}
      />
    </div>
  );
};

export function InfoCards() {
  const [modalContent, setModalContent] = useState<string | null>(null);
  const [stomaImageIndex, setStomaImageIndex] = useState(0);
  const [breastImageIndex, setBreastImageIndex] = useState(0);
  const [sliderImageIndex, setSliderImageIndex] = useState(0);

  // Sample image arrays
  const stomaImages = [
    { src: '/stomay.png', fallback: '/stomay.png' },
    { src: '/sto2.jpg', fallback: '/sto2.jpg' },
    { src: '/sto3.jpeg', fallback: '/sto3.jpeg' },
    { src: '/stom5.png', fallback: '/stom5.png' },
  ];
  
  const breastImages = [
    { src: '/brep.png', fallback: '/brep.png' },
    { src: '/bre5.png', fallback: '/bre5.png' },
    { src: '/bre1.jpeg', fallback: '/bre1.jpeg' },
  ];

  const sliderImages = [
    { src: '/brep.png', fallback: '/brep.png' },
    { src: '/sto2.jpg', fallback: '/sto2.jpg' },
    { src: '/brep.png', fallback: '/brep.png' },
  ];

  // Define the desired order of clinics
  const clinicOrder = ['breast', 'stoma', 'slider'];

  function openModal(key: string) {
    setModalContent(key);
  }

  function closeModal() {
    setModalContent(null);
  }

  // Set up auto-changing image sliders
  useEffect(() => {
    const stomaInterval = setInterval(() => {
      setStomaImageIndex((prevIndex) => 
        prevIndex === stomaImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    const breastInterval = setInterval(() => {
      setBreastImageIndex((prevIndex) => 
        prevIndex === breastImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3500);

    const sliderInterval = setInterval(() => {
      setSliderImageIndex((prevIndex) => 
        prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3200);

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

  function getModalContent(key: string) {
    switch (key) {
      case 'stoma':
        return (
          <div className="flex flex-col justify-center items-center text-center">
            <div className="w-full mb-6">
              <OptimizedImage
                src="/sto2.jpg"
                fallback="/sto2.jpg"
                alt="Stoma Clinic Banner"
                className="rounded-lg object-cover w-full h-64"
                imageKey="stoma-modal-banner"
                sizes="(max-width: 768px) 100vw, 1200px"
              />
            </div>

            <h2 className="text-3xl font-bold mb-6">Stoma Clinic Details</h2>
            <p className="text-zinc-700 leading-relaxed max-w-4xl text-justify">
              The Stoma Clinic at GMC Patiala functions as a dedicated service
              within the Department of General Surgery, designed to address the
              unique needs of patients living with stomas. It serves as a
              one-stop facility where patients receive holistic care—covering
              surgical follow-up, stoma site evaluation, and personalized advice
              for daily management.
            </p>
          </div>
        );

      case 'breast':
        return (
          <div className="flex flex-col justify-center items-center text-center">
            <div className="w-full mb-6">
              <OptimizedImage
                src="/bre1.jpeg"
                fallback="/bre1.jpeg"
                alt="Breast Clinic Banner"
                className="rounded-lg object-cover w-full h-64"
                imageKey="breast-modal-banner"
                sizes="(max-width: 768px) 100vw, 1200px"
              />
            </div>

            <h2 className="text-3xl font-bold mb-6">Breast Clinic Details</h2>
            <p className="text-zinc-700 leading-relaxed max-w-4xl text-justify">
              The Breast Clinic at GMC Patiala, under the Department of General
              Surgery, is a dedicated service aimed at providing comprehensive
              care for patients with breast diseases. It caters to a wide
              spectrum of conditions including benign breast disorders,
              infections, fibroadenomas, and breast malignancies.
            </p>
          </div>
        );

      default:
        return null;
    }
  }

  // Clinic card data
  const clinicCards = {
    stoma: {
      title: "Stoma Clinic",
      description: "Our Stoma Clinic offers expert care for patients with colostomies, ileostomies, and urostomies. Our services include assessment, fitting of appropriate appliances, and prompt management of stoma-related complications.",
      images: stomaImages,
      imageIndex: stomaImageIndex,
      setImageIndex: setStomaImageIndex
    },
    breast: {
      title: "Breast Clinic",
      description: "Our Breast Clinic provides specialized care for women presenting with breast-related complaints such as lumps, pain, discharge, or infections.",
      images: breastImages,
      imageIndex: breastImageIndex,
      setImageIndex: setBreastImageIndex
    },
    slider: {
      title: "Medical Services",
      description: "Comprehensive healthcare services for all your needs.",
      images: sliderImages,
      imageIndex: sliderImageIndex,
      setImageIndex: setSliderImageIndex
    }
  };

  // Render a single clinic card
  const renderClinicCard = (key: string, index: number) => {
    const clinic = clinicCards[key as keyof typeof clinicCards];
    
    if (key === 'slider') {
      return (
        <div key={key} className="rounded-lg shadow-lg overflow-hidden flex flex-col h-full group hover:shadow-xl transition-all duration-500 ease-in-out">
          <div className="relative overflow-hidden flex-grow">
            <div className="w-full h-full relative min-h-[400px]">
              <OptimizedImage
                src={clinic.images[clinic.imageIndex].src}
                fallback={clinic.images[clinic.imageIndex].fallback}
                alt={`Medical facility image ${clinic.imageIndex + 1}`}
                fill
                className="object-cover"
                imageKey={`slider-${clinic.imageIndex}`}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              
              <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{clinic.title}</h3>
                <p className="text-sm mb-4 max-w-md">{clinic.description}</p>
                
                <div className="text-xs opacity-80 mb-2">
                  Image {clinic.imageIndex + 1} of {clinic.images.length}
                </div>
              </div>
              
              <button 
                className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full transition-all shadow-md"
                onClick={(e) => {
                  e.stopPropagation();
                  changeSliderImage('prev');
                }}
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full transition-all shadow-md"
                onClick={(e) => {
                  e.stopPropagation();
                  changeSliderImage('next');
                }}
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              
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
      <div key={key} className="rounded-lg shadow-lg overflow-hidden flex flex-col h-full group hover:shadow-xl transition-all duration-500 ease-in-out transform hover:-translate-y-1">
        <div className="relative overflow-hidden">
          <div className="w-full h-64 relative overflow-hidden">
            <OptimizedImage
              src={clinic.images[clinic.imageIndex].src}
              fallback={clinic.images[clinic.imageIndex].fallback}
              alt={`${clinic.title} image`}
              fill
              className="object-cover transition-all duration-700 ease-in-out group-hover:scale-110"
              imageKey={`${key}-${clinic.imageIndex}-${index}`}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          
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
            </h3>
            <p className="text-zinc-500 leading-relaxed mb-6 max-w-md mx-auto">
              {clinic.description}
            </p>
          </div>
          <button
            onClick={() => openModal(key)}
            className="font-bold text-teal-500 flex items-center gap-2 justify-center hover:text-teal-600 transition-colors duration-300"
          >
            READ MORE <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  };

  return (
    <section
      id="info"
      className="pb-24 bg-gradient-to-b from-white via-white/0 to-white relative"
    >
      <div className="absolute inset-0 opacity-30">
        <OptimizedImage
          src="/111.png"
          fallback="/111.png"
          alt="Abstract background"
          fill
          className="object-cover"
          imageKey="background"
          sizes="100vw"
        />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {clinicOrder.map((key, index) => renderClinicCard(key, index))}
        </div>
      </div>

      {modalContent && (
        <Modal onClose={closeModal}>{getModalContent(modalContent)}</Modal>
      )}
    </section>
  );
}