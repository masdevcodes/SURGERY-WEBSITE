'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import {
  ArrowRight,
  Heart,
  Eye,
  Bone,
  Brain,
  Activity,
  PersonStanding,
  PlusCircle,
  X,
  ChevronDown
} from 'lucide-react';

// Service Card Component
function ServiceCard({ service, onSelect }: { service: any; onSelect: (service: any) => void }) {
  return (
    <div
      className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-teal-200 flex items-start gap-4 cursor-pointer"
      onClick={() => onSelect(service)}
    >
      {/* Icon */}
      <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-teal-200 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
        <div className={service.color}>{service.icon}</div>
      </div>
      
      {/* Content */}
      <div className="flex-1 min-w-0">
        <h3 className="text-lg font-bold text-blue-950 mb-2 group-hover:text-teal-600 transition-colors duration-300 line-clamp-2">
          {service.title}
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed mb-3">
          {service.description}
        </p>
        {/* Read More Link */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onSelect(service);
          }}
          className="inline-flex items-center gap-2 text-teal-500 font-semibold text-sm hover:text-teal-600 transition-all duration-300 group"
        >
          <span className="relative">
            READ MORE
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500 group-hover:w-full transition-all duration-300"></span>
          </span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 group-hover:scale-110 transition-transform duration-300" />
        </button>
      </div>
    </div>
  );
}

// Optimized Image Component with fallback
const OptimizedImage = ({ 
  src, 
  alt, 
  fill = false, 
  sizes = "100vw",
  quality = 75,
  priority = false,
  className = "",
  ...props 
}: any) => {
  const [imageSrc, setImageSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);

  const handleError = () => {
    // Fallback image or placeholder
    setImageSrc('/images/placeholder-medical.jpg');
  };

  return (
    <div className={`relative ${isLoading ? 'bg-gray-200 animate-pulse' : ''}`}>
      <Image
        src={imageSrc}
        alt={alt}
        fill={fill}
        sizes={sizes}
        quality={quality}
        priority={priority}
        className={`${className} transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        onLoad={() => setIsLoading(false)}
        onError={handleError}
        loading={priority ? "eager" : "lazy"}
        {...props}
      />
    </div>
  );
};

export function Services() {
  const services = [
    {
      icon: <PersonStanding className="w-8 h-8" />,
      title: 'Laparoscopic Cholecystectomy With CBD Exploration In A Patient With Situs Inversus Totalis',
      description: '',
      color: 'text-teal-500',
      banner: '/images/super/ser1.jpg',
      popupContent: (
        <div>
          <h3 className="font-bold text-2xl mb-4">Laparoscopic Cholecystectomy With CBD Exploration In A Patient With Situs Inversus Totalis</h3>
          <p className="text-gray-700 leading-relaxed text-justify">
            Historic Surgical Milestone at GMC Patiala...
          </p>
        </div>
      ),
    },
    // ... other services (keep your existing service objects)
  ];

  const [selectedService, setSelectedService] = useState<any>(null);
  const [showAllModal, setShowAllModal] = useState(false);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const rightSideRef = useRef<HTMLDivElement>(null);
  const [rightSideHeight, setRightSideHeight] = useState(0);

  // Preload critical images
  const criticalImages = [
    '/service11.png',
    '/service12.png', 
    '/service13.png',
    ...services.map(service => service.banner).filter(banner => banner)
  ];

  // Left-side carousel images
  const carouselImages = [
    '/service11.png',
    '/service12.png',
    '/service13.png',
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Preload images efficiently
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = criticalImages.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = () => {
            setLoadedImages(prev => new Set(prev.add(src)));
            resolve(src);
          };
          img.onerror = reject;
        });
      });

      try {
        await Promise.all(imagePromises);
      } catch (error) {
        console.warn('Some images failed to preload:', error);
      }
    };

    preloadImages();
  }, []);

  // Update right side height
  useEffect(() => {
    const updateHeight = () => {
      if (rightSideRef.current) {
        setRightSideHeight(rightSideRef.current.offsetHeight);
      }
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  // Auto-change carousel images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const closeModal = () => setSelectedService(null);
  const closeShowAllModal = () => setShowAllModal(false);

  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
    >
      {/* Optimized Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <OptimizedImage
          src="/111.png"
          alt="Surgical team in operating room"
          fill
          className="object-cover"
          quality={40}
          sizes="100vw"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-transparent to-teal-950/20"></div>
      </div>

      <div className="container mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Doctor Patient Carousel */}
          <div className="relative">
            <div 
              className="relative rounded-2xl overflow-hidden shadow-2xl group"
              style={{ height: `${rightSideHeight}px` }}
            >
              <OptimizedImage
                src={carouselImages[currentImageIndex]}
                alt={`Doctor consulting with patient ${currentImageIndex + 1}`}
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                quality={70}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                priority={true}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-teal-500/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
            
            {/* Stats Card */}
            <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-blue-950">500+</p>
                  <p className="text-sm text-gray-600">Patients Treated Daily</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Services List */}
          <div ref={rightSideRef} className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-1 bg-teal-500"></div>
                <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
                  Medical Excellence
                </span>
              </div>
              <h2 className="text-5xl font-bold text-blue-950 font-headline leading-tight">
                Our Milestones In Surgery...
              </h2>
              <p className="text-xl text-gray-600 font-medium">
                Delivering world class medical care
              </p>
            </div>
            
            {/* Services List */}
            <div className="relative">
              <div className="space-y-4 max-h-[650px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-teal-200 scrollbar-track-gray-100 scroll-smooth">
                {services.map((service, index) => (
                  <ServiceCard 
                    key={index} 
                    service={service} 
                    onSelect={setSelectedService} 
                  />
                ))}
              </div>
              
              <div className="absolute -bottom-10 left-0 right-0 flex justify-center">
                <div className="animate-bounce text-teal-500">
                  <ChevronDown className="w-6 h-6" />
                </div>
              </div>
            </div>
            
            {/* Show All Button */}
            <div className="flex justify-center pt-6">
              <button
                onClick={() => setShowAllModal(true)}
                className="group relative flex items-center gap-3 bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded-full transition-all duration-500 transform hover:scale-105 hover:shadow-lg"
              >
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-500 to-teal-600 blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-500"></span>
                <span className="relative z-10 flex items-center gap-3">
                  <PlusCircle className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                  Show All Milestones
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Modal Popup */}
        {selectedService && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100] p-4"
            onClick={closeModal}
          >
            <div
              className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-lg relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Banner */}
              <div className="w-full h-64 relative">
                <OptimizedImage
                  src={selectedService.banner}
                  alt={`${selectedService.title} Banner`}
                  fill
                  className="object-cover rounded-t-lg"
                  quality={80}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
                  priority={true}
                />
                <div className="absolute inset-0 bg-black/20 rounded-t-lg"></div>
              </div>

              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white hover:text-gray-200 text-3xl font-bold z-10"
                aria-label="Close modal"
              >
                &times;
              </button>

              {/* Popup Content */}
              <div className="p-8">{selectedService.popupContent}</div>
            </div>
          </div>
        )}

        {/* Show All Modal */}
        {showAllModal && (
          <div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[50] p-4 overflow-auto"
            onClick={closeShowAllModal}
          >
            <div
              className="bg-white rounded-xl w-full max-w-6xl max-h-[90vh] overflow-y-auto shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-sm p-6 border-b border-gray-100 flex justify-between items-center">
                <h2 className="text-3xl font-bold text-blue-950">All Surgical Milestones</h2>
                <button
                  onClick={closeShowAllModal}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5 text-gray-700" />
                </button>
              </div>

              {/* Services Grid */}
              <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-teal-200 cursor-pointer group"
                    onClick={() => setSelectedService(service)}
                  >
                    {/* Banner Image */}
                    <div className="h-48 relative overflow-hidden">
                      <OptimizedImage
                        src={service.banner}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        quality={65}
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-5">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-teal-100 to-teal-200 rounded-xl flex items-center justify-center flex-shrink-0">
                          <div className={service.color}>{service.icon}</div>
                        </div>
                        <h3 className="text-base font-bold text-blue-950 line-clamp-2">
                          {service.title}
                        </h3>
                      </div>
                      
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedService(service);
                        }}
                        className="mt-3 inline-flex items-center gap-2 text-teal-500 font-semibold text-sm hover:gap-3 transition-all duration-300 group"
                      >
                        View Details
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}