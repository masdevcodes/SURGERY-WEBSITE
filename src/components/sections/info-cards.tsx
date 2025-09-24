'use client';

import Image from 'next/image';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, MouseEvent, useEffect, useRef } from 'react';

interface ClinicCard {
  title: string;
  description: string;
  images: string[];
  imageIndex: number;
  setImageIndex: React.Dispatch<React.SetStateAction<number>>;
}

export function InfoCards() {
  const [modalContent, setModalContent] = useState<string | null>(null);
  const [stomaImageIndex, setStomaImageIndex] = useState(0);
  const [breastImageIndex, setBreastImageIndex] = useState(0);
  const [sliderImageIndex, setSliderImageIndex] = useState(0);
  const [isImageLoading, setIsImageLoading] = useState(true);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Sample image arrays
  const stomaImages = [
    '/stomay.png',
    '/sto2.jpg',
    '/sto3.jpeg',
    '/stom5.png',
  ];
  
  const breastImages = [
    '/brep.png',
    '/bre5.png',
    '/bre1.jpeg',
  ];

  const sliderImages = [
    '/brep.png',
    '/sto2.jpg',
    '/brep.png',
  ];

  // Define the desired order of clinics
  const clinicOrder = ['breast', 'stoma', 'slider'];

  // Preload modal images on component mount
  useEffect(() => {
    const preloadImages = ['/sto2.jpg', '/bre1.jpeg'];
    
    preloadImages.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => console.log(`Preloaded: ${src}`);
      img.onerror = () => console.warn(`Failed to preload: ${src}`);
    });

    // Set up intersection observer for lazy loading
    if (typeof window !== 'undefined') {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Additional preloading when cards become visible
              preloadImages.forEach((src) => {
                const img = new Image();
                img.src = src;
              });
            }
          });
        },
        { threshold: 0.1 }
      );

      // Observe clinic cards after a short delay to ensure DOM is ready
      setTimeout(() => {
        const cards = document.querySelectorAll('[data-clinic-card]');
        cards.forEach((card) => {
          if (observerRef.current) {
            observerRef.current.observe(card);
          }
        });
      }, 100);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const openModal = (key: string) => {
    setModalContent(key);
    setIsImageLoading(true);
  };

  const closeModal = () => {
    setModalContent(null);
    setIsImageLoading(false);
  };

  const stopPropagation = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  // Set up auto-changing image sliders
  useEffect(() => {
    const intervals: NodeJS.Timeout[] = [];

    if (stomaImages.length > 1) {
      const stomaInterval = setInterval(() => {
        setStomaImageIndex((prevIndex) => 
          prevIndex === stomaImages.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);
      intervals.push(stomaInterval);
    }

    if (breastImages.length > 1) {
      const breastInterval = setInterval(() => {
        setBreastImageIndex((prevIndex) => 
          prevIndex === breastImages.length - 1 ? 0 : prevIndex + 1
        );
      }, 3500);
      intervals.push(breastInterval);
    }

    if (sliderImages.length > 1) {
      const sliderInterval = setInterval(() => {
        setSliderImageIndex((prevIndex) => 
          prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
        );
      }, 3200);
      intervals.push(sliderInterval);
    }

    return () => {
      intervals.forEach(interval => clearInterval(interval));
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

  // Modal Component
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
        className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto p-6 relative"
        onClick={stopPropagation}
      >
        <button
          type="button"
          aria-label="Close modal"
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 font-bold text-2xl z-10 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md"
          onClick={onClose}
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );

  // Modal Image Component
  const ModalImage = ({ src, alt }: { src: string; alt: string }) => {
    const [imageLoading, setImageLoading] = useState(true);

    return (
      <div className="w-full mb-6 relative min-h-[200px] md:min-h-[256px]">
        {imageLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg z-10">
            <div className="animate-pulse bg-gray-300 w-full h-full rounded-lg"></div>
          </div>
        )}
        <Image
          src={src}
          alt={alt}
          width={800}
          height={300}
          className={`rounded-lg object-cover w-full h-48 md:h-64 transition-opacity duration-300 ${
            imageLoading ? 'opacity-0' : 'opacity-100'
          }`}
          quality={75}
          priority={false}
          onLoad={() => setImageLoading(false)}
          onError={() => setImageLoading(false)}
        />
      </div>
    );
  };

  const getModalContent = (key: string) => {
    switch (key) {
      case 'stoma':
        return (
          <div className="flex flex-col justify-center items-center text-center">
            <ModalImage 
              src="/sto2.jpg" 
              alt="Stoma Clinic Banner" 
            />
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
            <ModalImage 
              src="/bre1.jpeg" 
              alt="Breast Clinic Banner" 
            />
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
        return (
          <div className="text-center p-8">
            <h2 className="text-3xl font-bold mb-6">Clinic Information</h2>
            <p className="text-zinc-700">Content not available.</p>
          </div>
        );
    }
  };

  // Card Image Component
  const CardImage = ({ 
    src, 
    alt, 
    className = "",
  }: { 
    src: string; 
    alt: string; 
    className?: string;
  }) => {
    const [imageLoading, setImageLoading] = useState(true);

    return (
      <div className={`relative overflow-hidden ${className}`}>
        {imageLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
            <div className="animate-pulse bg-gray-300 w-full h-full"></div>
          </div>
        )}
        <Image
          src={src}
          alt={alt}
          fill
          className={`object-cover transition-all duration-700 ease-in-out group-hover:scale-110 ${
            imageLoading ? 'opacity-0' : 'opacity-100'
          }`}
          quality={75}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
          onLoad={() => setImageLoading(false)}
          onError={() => setImageLoading(false)}
        />
      </div>
    );
  };

  // Clinic card data
  const clinicCards: Record<string, ClinicCard> = {
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
      title: "Medical Facilities",
      description: "State-of-the-art medical facilities and equipment for comprehensive patient care.",
      images: sliderImages,
      imageIndex: sliderImageIndex,
      setImageIndex: setSliderImageIndex
    }
  };

  // Render a single clinic card
  const renderClinicCard = (key: string) => {
    const clinic = clinicCards[key];
    
    if (!clinic) return null;

    if (key === 'slider') {
      return (
        <div 
          key={key} 
          data-clinic-card
          className="rounded-lg shadow-lg overflow-hidden flex flex-col h-full group hover:shadow-xl transition-all duration-500 ease-in-out"
        >
          <div className="relative overflow-hidden flex-grow min-h-[300px]">
            <div className="w-full h-full relative">
              <CardImage
                src={clinic.images[clinic.imageIndex] || '/default-image.jpg'}
                alt={`Medical facility image ${clinic.imageIndex + 1}`}
                className="w-full h-full"
              />
              
              <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{clinic.title}</h3>
                <p className="text-sm mb-4 max-w-md">{clinic.description}</p>
                
                <div className="text-xs opacity-80 mb-2">
                  Image {clinic.imageIndex + 1} of {clinic.images.length}
                </div>
              </div>
              
              {clinic.images.length > 1 && (
                <>
                  <button 
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full transition-all shadow-md z-20"
                    onClick={(e) => {
                      e.stopPropagation();
                      changeSliderImage('prev');
                    }}
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button 
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full transition-all shadow-md z-20"
                    onClick={(e) => {
                      e.stopPropagation();
                      changeSliderImage('next');
                    }}
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  
                  <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 z-20">
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
                </>
              )}
            </div>
          </div>
        </div>
      );
    }
    
    return (
      <div 
        key={key} 
        data-clinic-card
        className="rounded-lg shadow-lg overflow-hidden flex flex-col h-full group hover:shadow-xl transition-all duration-500 ease-in-out transform hover:-translate-y-1"
      >
        <div className="relative overflow-hidden">
          <div className="w-full h-64 relative">
            <CardImage
              src={clinic.images[clinic.imageIndex] || '/default-image.jpg'}
              alt={`${clinic.title} image`}
              className="w-full h-64"
            />
          </div>
          
          {clinic.images.length > 1 && (
            <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 z-10">
              {clinic.images.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === clinic.imageIndex ? 'bg-white scale-125' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
        
        <div className="p-6 bg-white flex-grow flex flex-col justify-between text-center">
          <div>
            <h3 className="text-2xl font-bold text-blue-950 mb-3 group-hover:text-teal-500 transition-colors duration-500">
              {clinic.title}
            </h3>
            <p className="text-zinc-500 leading-relaxed mb-4 mx-auto text-sm">
              {clinic.description}
            </p>
          </div>
          <button
            onClick={() => openModal(key)}
            className="font-bold text-teal-500 flex items-center gap-2 justify-center hover:text-teal-600 transition-colors duration-300 text-sm"
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
      className="py-16 bg-gradient-to-b from-white via-white/0 to-white relative"
    >
      {/* Background Image */}
      <div className="absolute inset-0 opacity-30">
        <Image
          src="/111.png"
          alt="Abstract background"
          fill
          className="object-cover"
          quality={50}
          priority={false}
        />
      </div>

      {/* Container */}
      <div className="container mx-auto relative z-10 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {clinicOrder.map(key => renderClinicCard(key))}
        </div>
      </div>

      {/* Modal */}
      {modalContent && (
        <Modal onClose={closeModal}>{getModalContent(modalContent)}</Modal>
      )}
    </section>
  );
}