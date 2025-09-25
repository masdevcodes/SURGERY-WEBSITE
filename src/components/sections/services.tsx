'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import {
  ArrowRight,
  Heart,
  Stethoscope,
  Eye,
  Bone,
  Brain,
  Activity,
  Scissors,
  PersonStanding,
  PlusCircle,
  X,
  ChevronDown
} from 'lucide-react';

// 🔹 Optimized Image Component
function OptimizedImage({
  src,
  alt,
  fill = false,
  className = '',
  quality = 75,
  sizes,
  priority = false,
  loading = 'lazy'
}: {
  src: string;
  alt: string;
  fill?: boolean;
  className?: string;
  quality?: number;
  sizes?: string;
  priority?: boolean;
  loading?: 'lazy' | 'eager';
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full h-full">
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          {/* Spinner */}
          <div className="w-6 h-6 border-2 border-teal-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        fill={fill}
        quality={quality}
        sizes={sizes}
        priority={priority}
        loading={priority ? 'eager' : loading}
        className={`${className} transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}

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

export function Services() {
  const services = [
    {
      icon: <PersonStanding className="w-8 h-8" />,
      title: 'Laparoscopic Cholecystectomy With CBD Exploration In A Patient With  Situs Inversus Totalis',
      description: '',
      color: 'text-teal-500',
      banner: '/images/super/ser1.webp',
      popupContent: (
        <div>
          <h3 className="font-bold text-2xl mb-4">Laparoscopic Cholecystectomy With CBD Exploration...</h3>
          <p className="text-gray-700 leading-relaxed text-justify">Historic Surgical Milestone...</p>
        </div>
      ),
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: 'Endoscopic Thyroid Surgery via Axilla',
      description: '',
      color: 'text-teal-500',
      banner: '/images/super/thyroid.webp',
      popupContent: <div>...</div>,
    },
    {
      icon: <Bone className="w-8 h-8" />,
      title: 'Laparoscopic Adrenelectomy',
      description: '',
      color: 'text-teal-500',
      banner: '/images/super/adrene.webp',
      popupContent: <div>...</div>,
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Laparoscopic Hysterectomy',
      description: '',
      color: 'text-teal-500',
      banner: '/images/super/lah.webp',
      popupContent: <div>...</div>,
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: 'Radio Frequency Ablation In Varicose Veins',
      description: '',
      color: 'text-teal-500',
      banner: '/images/super/veins.webp',
      popupContent: <div>...</div>,
    },
  ];

  const [selectedService, setSelectedService] = useState<any>(null);
  const [showAllModal, setShowAllModal] = useState(false);
  const rightSideRef = useRef<HTMLDivElement>(null);
  const [rightSideHeight, setRightSideHeight] = useState(0);

  // Carousel Images
  const carouselImages = ['/images/super/service11.webp', '/images/super/service12.webp', '/images/super/service13.webp'];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // 🔹 Preload all images (services + carousel)
  useEffect(() => {
    const allImages = [...carouselImages, ...services.map((s) => s.banner)];
    allImages.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, []);

  // Sync height with right side
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

  // Auto change carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Close modals
  const closeModal = () => setSelectedService(null);
  const closeShowAllModal = () => setShowAllModal(false);

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <OptimizedImage
          src="/111.png"
          alt="Surgical team in operating room"
          fill
          className="object-cover"
          quality={60}
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-transparent to-teal-950/20"></div>
      </div>

      <div className="container mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left - Carousel */}
          <div className="relative">
            <div
              className="relative rounded-2xl overflow-hidden shadow-2xl group"
              style={{ height: `${rightSideHeight}px` }}
            >
              <OptimizedImage
                src={carouselImages[currentImageIndex]}
                alt={`Doctor consulting with patient ${currentImageIndex + 1}`}
                fill
                className="object-cover object-center group-hover:scale-105"
                quality={75}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>

          {/* Right - Services */}
          <div ref={rightSideRef} className="space-y-8">
            <h2 className="text-5xl font-bold text-blue-950">Our Milestones In Surgery...</h2>
            <div className="space-y-4 max-h-[650px] overflow-y-auto pr-2">
              {services.map((service, index) => (
                <ServiceCard key={index} service={service} onSelect={setSelectedService} />
              ))}
            </div>
          </div>
        </div>

        {/* Modal Popup */}
        {selectedService && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100] p-4" onClick={closeModal}>
            <div
              className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-lg relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full h-64 relative">
                <OptimizedImage
                  src={selectedService.banner}
                  alt={selectedService.title}
                  fill
                  className="object-cover rounded-t-lg"
                  quality={70}
                  sizes="90vw"
                  priority
                />
              </div>
              <button onClick={closeModal} className="absolute top-4 right-4 text-white text-3xl font-bold z-10">
                &times;
              </button>
              <div className="p-8">{selectedService.popupContent}</div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
