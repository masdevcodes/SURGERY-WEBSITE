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

// Define a fallback image path that we know exists
const FALLBACK_IMAGE = '/images/super/service11.webp';

// Enhanced Image Component with better optimization
function OptimizedImage({ 
  src, 
  alt, 
  fill = false, 
  className = "", 
  quality = 80, // Slightly higher quality for better visual experience
  sizes = "",
  priority = false,
  onLoad
}: { 
  src: string; 
  alt: string; 
  fill?: boolean; 
  className?: string; 
  quality?: number; 
  sizes?: string;
  priority?: boolean;
  onLoad?: () => void;
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  return (
    <div className={`relative ${fill ? 'w-full h-full' : ''} overflow-hidden`}>
      {!isLoaded && !hasError && (
        <div className={`absolute inset-0 flex items-center justify-center bg-gray-100 ${className}`}>
          <div className="w-8 h-8 border-4 border-teal-200 border-t-teal-500 rounded-full animate-spin"></div>
        </div>
      )}
      <Image
        src={hasError ? FALLBACK_IMAGE : src}
        alt={alt}
        fill={fill}
        className={`${className} transition-all duration-300 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        quality={quality}
        sizes={sizes}
        priority={priority}
        loading={priority ? "eager" : "lazy"}
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  );
}

// Optimized QuickLoadImage component with better loading strategy
function QuickLoadImage({ src, alt, quality = 70 }: { 
  src: string; 
  alt: string;
  quality?: number;
}) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative w-full h-64 overflow-hidden rounded-lg">
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="w-10 h-10 border-4 border-teal-200 border-t-teal-500 rounded-full animate-spin"></div>
        </div>
      )}
      <Image
        src={hasError ? FALLBACK_IMAGE : src}
        alt={alt}
        fill
        className="object-cover transition-all duration-500 ease-out"
        quality={quality}
        loading="eager"
        onLoad={() => setIsLoaded(true)}
        onError={() => {
          setHasError(true);
          setIsLoaded(true);
        }}
      />
    </div>
  );
}

function ServiceCard({ service, index, onSelect, imagesPreloaded }: { 
  service: any; 
  index: number;
  onSelect: (service: any) => void;
  imagesPreloaded: boolean;
}) {
  return (
    <div
      className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-teal-200 flex items-start gap-4 cursor-pointer"
      onClick={() => onSelect(service)}
    >
      <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-teal-200 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
        <div className={service.color}>{service.icon}</div>
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="text-lg font-bold text-blue-950 mb-2 group-hover:text-teal-600 transition-colors duration-300 line-clamp-2">
          {service.title}
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed mb-3">
          {service.description}
        </p>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onSelect(service);
          }}
          className="inline-flex items-center gap-2 text-teal-500 font-semibold text-sm hover:text-teal-600 transition-all duration-300 group"
        >
          <span className="relative">
            READ MORE
            {imagesPreloaded && (
              <span className="ml-1 text-xs"></span>
            )}
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
      title: 'Laparoscopic Cholecystectomy With CBD Exploration In A Patient With Situs Inversus Totalis',
      description: '',
      color: 'text-teal-500',
      banner: '/images/super/ser1.jpg',
      popupContent: (
        <div>
          <h3 className="font-bold text-2xl mb-4">Laparoscopic Cholecystectomy With CBD Exploration In A Patient With Situs Inversus Totalis</h3>
          <p className="text-gray-700 leading-relaxed text-justify">
            Historic Surgical Milestone at GMC Patiala

            The Department of General Surgery at Government Medical College and Rajindra Hospital, Patiala, has achieved a remarkable feat by successfully performing Laparoscopic Cholecystectomy with Common Bile Duct (CBD) Exploration in a patient diagnosed with Situs Inversus Totalis a rare congenital condition where all internal organs are arranged in a mirror-image position.

            This landmark surgery, conducted for the first time in Punjab, posed significant challenges due to the reversed anatomy, requiring precise preoperative planning, modified port placement, and advanced laparoscopic expertise. Despite the complexity, the procedure was carried out smoothly, with excellent patient recovery.

            Speaking about this achievement, Prof. Dr. Ashwani Kumar, Head of the Department of General Surgery and lead surgeon for the case, said:
            "Performing this rare and technically demanding surgery for the first time in Punjab is a matter of immense pride for our department and institution. The mirror-image anatomy of situs inversus presented unique challenges, but with meticulous planning and teamwork, we were able to achieve an excellent outcome. This success reflects our commitment to innovation and excellence in surgical care."

            This milestone marks a proud moment for GMC Patiala, establishing it as a pioneer in advanced minimally invasive surgery and setting new standards of excellence in the state.
          </p>
        </div>
      ),
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: 'Endoscopic Thyroid Surgery via Axilla',
      description: '',
      color: 'text-teal-500',
      banner: '/images/super/thyroid.jpg',
      popupContent: (
        <div>
          <h3 className="font-bold text-2xl mb-4">Endoscopic Thyroid Surgery via Axilla</h3>
          <p className="text-gray-700 leading-relaxed text-justify">
            The Department of General Surgery at Government Medical College and Rajindra Hospital, Patiala, recently conducted a Continuing Medical Education (CME) session showcasing Endoscopic Thyroid Surgery via the Axilla — a minimally invasive procedure that allows thyroid removal through an incision in the armpit, leaving the neck scar-free.

            The live demonstration highlighted the advanced endoscopic techniques, precise dissection, and cosmetic advantages of this approach. Participants observed the meticulous steps of the surgery, emphasizing patient safety, reduced postoperative discomfort, and excellent aesthetic outcomes.

            Speaking during the CME, Prof. Dr. Ashwani Kumar, Head of the Department of General Surgery, said:
            "This session provided a unique opportunity for surgeons and trainees to witness cutting-edge minimally invasive thyroid surgery. Techniques like the axillary approach represent the future of patient-friendly surgical care, combining safety with superior cosmetic results."

            The event reinforced GMC Patiala's commitment to surgical innovation, education, and excellence in patient care, offering hands-on learning to medical professionals across the region.
          </p>
        </div>
      ),
    },
    {
      icon: <Bone className="w-8 h-8" />,
      title: 'Laparoscopic Adrenelectomy',
      description: '',
      color: 'text-teal-500',
      banner: '/images/super/adrene.jpg',
      popupContent: (
        <div>
          <h3 className="font-bold text-2xl mb-4">Laparoscopic Adrenelectomy</h3>
          <p className="text-gray-700 leading-relaxed text-justify">
            The Department of Surgery at Government Medical College and Rajindra Hospital, Patiala, under the leadership of Dr. Ashwani Kumar, Head of Department, successfully performed a Laparoscopic Adrenalectomy in the elective OT, with collaborative support from the Department of Medicine.

            This minimally invasive procedure involved the precise removal of the adrenal gland, providing significant benefits such as reduced postoperative pain, shorter hospital stay, faster recovery, and minimal scarring. The surgery showcased meticulous preoperative planning, advanced laparoscopic expertise, and a strong focus on patient safety.

            Dr. Ashwani Kumar commented:
            "Laparoscopic adrenalectomy is a significant step forward in endocrine surgery, allowing safe and effective management of adrenal tumors with minimal discomfort to the patient. Our team, in close coordination with the Medicine department, is proud to perform this procedure successfully, reinforcing our commitment to excellence in surgical care."

            This achievement highlights the Department of Surgery's expertise in advanced minimally invasive procedures and strengthens GMC Patiala's position as a leading center for surgical innovation.
          </p>
        </div>
      ),
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Laparoscopic Hysterectomy',
      description: '',
      color: 'text-teal-500',
      banner: '/images/super/lah.jpg',
      popupContent: (
        <div>
          <h3 className="font-bold text-2xl mb-4">Laparoscopic Hysterectomy</h3>
          <p className="text-gray-700 leading-relaxed text-justify">
            The Department of Surgery at Government Medical College and Rajindra Hospital, Patiala, led by Dr. Ashwani Kumar, Head of Department, successfully carried out a Laparoscopic Hysterectomy.

            This minimally invasive procedure, performed using advanced laparoscopic techniques, enables the safe removal of the uterus with smaller incisions, reduced postoperative pain, faster recovery, and minimal scarring. The surgery highlighted meticulous planning, precision, and a strong emphasis on patient safety.

            Dr. Ashwani Kumar said:
            "Laparoscopic hysterectomy is a significant step forward in gynecological surgery. It allows for effective management of uterine conditions while ensuring patient comfort and quicker recovery. Our team takes pride in performing this procedure successfully, reflecting our commitment to excellence in surgical care."

            This milestone showcases the Department of Surgery's expertise in minimally invasive procedures and reinforces GMC Patiala's position as a center of surgical innovation and patient-centered care.
          </p>
        </div>
      ),
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: 'Radio Frequency Ablation In Varicose Veins',
      description: '',
      color: 'text-teal-500',
      banner: '/images/super/veins.jpg',
      popupContent: (
        <div>
          <h3 className="font-bold text-2xl mb-4">Radio Frequency Ablation In Varicose Veins</h3>
          <p className="text-gray-700 leading-relaxed text-justify">
            The Department of Surgery at Government Medical College and Rajindra Hospital, Patiala, under the leadership of Dr. Ashwani Kumar, Head of Department and Unit In-Charge, successfully performed Radio Frequency Ablation (RFA) for Varicose Veins.

            This minimally invasive procedure involves using radiofrequency energy to close diseased veins, providing an effective alternative to conventional vein surgery. The technique offers benefits such as minimal pain, faster recovery, reduced hospital stay, and excellent cosmetic results. The surgery demonstrated meticulous planning, precise execution, and a strong focus on patient safety.

            Dr. Ashwani Kumar stated:
            "Radio Frequency Ablation is a significant advancement in the management of varicose veins. It allows patients to recover quickly while minimizing discomfort and scarring. Our team is proud to offer this state-of-the-art procedure at GMC Patiala, reflecting our commitment to modern, patient-centered surgical care."

            This achievement highlights the Department of Surgery's expertise in advanced minimally invasive procedures and reinforces GMC Patiala's position as a center of excellence in innovative surgical treatments.
          </p>
        </div>
      ),
    },
  ];

  const [selectedService, setSelectedService] = useState<any>(null);
  const [showAllModal, setShowAllModal] = useState(false);
  const [imagesPreloaded, setImagesPreloaded] = useState(false);
  const rightSideRef = useRef<HTMLDivElement>(null);
  const [rightSideHeight, setRightSideHeight] = useState(0);

  // Left-side carousel images
  const carouselImages = ['/images/super/service11.webp', '/images/super/service12.webp', '/images/super/service13.webp'];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // 🔥 ALL IMAGES THAT NEED TO BE PRELOADED WHEN WEBSITE LOADS
  const allImages = [
    // Service banner images (for modals) - PRIORITY
    '/images/super/ser1.jpg',
    '/images/super/thyroid.jpg', 
    '/images/super/adrene.jpg',
    '/images/super/lah.jpg',
    '/images/super/veins.jpg',
    // Carousel images - PRIORITY
    '/images/super/service11.webp', 
    '/images/super/service12.webp', 
    '/images/super/service13.webp',
    // Background images
    '/111.webp',
    '/images/placeholder.jpg'
  ];

  // 🚀 IMPROVED PRELOADING STRATEGY
  useEffect(() => {
    console.log("🌐 Website loaded - Starting Services image preload...");
    console.log(`📂 Preloading ${allImages.length} images with optimized strategy...`);

    // Use requestAnimationFrame for better performance
    const imagesLoaded = new Set<string>();
    const totalImages = allImages.length;
    let preloadIndex = 0;

    // Modern preloading with prioritization and performance optimization
    const preloadNextImage = () => {
      if (preloadIndex >= totalImages) {
        setImagesPreloaded(true);
        console.log("✅ All Services images preloaded successfully!");
        return;
      }

      const src = allImages[preloadIndex];
      const img = new window.Image();
      img.src = src;
      img.loading = 'eager';
      img.decoding = 'async';
      
      img.onload = () => {
        imagesLoaded.add(src);
        console.log(`✅ Services - Preloaded: ${src}`);
        preloadIndex++;
        // Continue preloading in the next frame to avoid blocking
        requestAnimationFrame(preloadNextImage);
      };
      
      img.onerror = () => {
        console.warn(`❌ Services - Failed to preload: ${src}`);
        // Count failures as "loaded" to prevent blocking
        imagesLoaded.add(src);
        preloadIndex++;
        requestAnimationFrame(preloadNextImage);
      };

      preloadIndex++;
      // Stagger slightly to prevent overwhelming network
      setTimeout(() => requestAnimationFrame(preloadNextImage), 50);
    };

    // Start preloading immediately
    requestAnimationFrame(preloadNextImage);

    return () => {};
  }, []);

  // Update right side height
  useEffect(() => {
    const updateHeight = () => {
      if (rightSideRef.current) {
        setRightSideHeight(rightSideRef.current.offsetHeight);
      }
    };

    const timer = setTimeout(updateHeight, 100);
    window.addEventListener('resize', updateHeight);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateHeight);
    };
  }, []);

  // Auto-change carousel images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const closeModal = () => setSelectedService(null);
  const closeShowAllModal = () => setShowAllModal(false);

  // NEW: Function to handle service selection from "Show All" modal
  const handleServiceSelectFromAllModal = (service: any) => {
    setSelectedService(service);
    // Don't close the showAllModal - keep it open in the background
  };

  return (
    <>
      {/* 🔥 IMPROVED CRITICAL: PRELOADER - OPTIMIZED FOR PERFORMANCE */}
      {/* Removed redundant hidden image preloader that was duplicating the useEffect preloading */}
      {/* Using only the useEffect with requestAnimationFrame for better performance */}

      <section id="services" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <OptimizedImage
            src="/111.webp"
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
                  quality={85} // image right side
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-teal-500/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
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
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-1 bg-teal-500"></div>
                  <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
                    Medical Excellence
                  </span>
                </div>
                <h2 className="text-5xl font-bold text-blue-950 font-headline leading-tight">
                  Our Milestones In Surgery...
                  {imagesPreloaded && (
                    <span className="ml-2 text-xl"></span>
                  )}
                </h2>
                <p className="text-xl text-gray-600 font-medium">
                  Delivering world class medical care
                  {imagesPreloaded && (
                    <span className="ml-2 text-sm text-green-600 font-semibold"></span>
                  )}
                </p>
              </div>

              <div className="relative">
                <div className="space-y-4 max-h-[650px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-teal-200 scrollbar-track-gray-100 scroll-smooth">
                  {services.map((service, index) => (
                    <ServiceCard 
                      key={index} 
                      service={service} 
                      index={index}
                      onSelect={setSelectedService} 
                      imagesPreloaded={imagesPreloaded}
                    />
                  ))}
                </div>
                <div className="absolute -bottom-10 left-0 right-0 flex justify-center">
                  <div className="animate-bounce text-teal-500">
                    <ChevronDown className="w-6 h-6" />
                  </div>
                </div>
              </div>

              <div className="flex justify-center pt-6">
                <button
                  onClick={() => setShowAllModal(true)}
                  className="group relative flex items-center gap-3 bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded-full transition-all duration-500 transform hover:scale-105 hover:shadow-lg"
                >
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-500 to-teal-600 blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-500"></span>
                  <span className="relative z-10 flex items-center gap-3">
                    <PlusCircle className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                    Show All Milestones
                    {imagesPreloaded && (
                      <span className="ml-1 text-sm"></span>
                    )}
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Individual Service Modal */}
          {selectedService && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100] p-4"
              onClick={closeModal}
            >
              <div
                className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-lg relative"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="w-full h-64 relative">
                  <div className="w-full h-full">
                  {!imagesPreloaded && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
                      <div className="w-12 h-12 border-4 border-teal-200 border-t-teal-500 rounded-full animate-spin"></div>
                    </div>
                  )}
                  <QuickLoadImage
                    src={selectedService.banner}
                    alt={`${selectedService.title} Banner`}
                    quality={65} // Balanced quality for good visuals and fast loading
                  />
                </div>
                  <div className="absolute inset-0 bg-black/20 rounded-t-lg"></div>
                  {imagesPreloaded && (
                    <div className="absolute top-4 left-4 bg-white/90 rounded-full px-4 py-2 text-sm text-green-600 font-bold">
                      {/* Empty but ready for content */}
                    </div>
                  )}
                </div>
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-white hover:text-gray-200 text-3xl font-bold z-10"
                  aria-label="Close modal"
                >
                  &times;
                </button>
                <div className="p-8">{selectedService.popupContent}</div>
              </div>
            </div>
          )}

          {/* Show All Modal - Now stays open when individual service is selected */}
          {showAllModal && (
            <div
              className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[90] p-4 overflow-auto"
              onClick={closeShowAllModal}
            >
              <div
                className="bg-white rounded-xl w-full max-w-6xl max-h-[90vh] overflow-y-auto shadow-2xl relative"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-sm p-6 border-b border-gray-100 flex justify-between items-center">
                  <h3 className="text-2xl font-bold text-blue-950">
                    All Milestones
                    {imagesPreloaded && (
                      <span className="ml-2 text-lg text-green-600"></span>
                    )}
                  </h3>
                  <button
                    onClick={closeShowAllModal}
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-teal-200 cursor-pointer flex flex-col"
                      onClick={() => handleServiceSelectFromAllModal(service)}
                    >
                      <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
                        <div className="w-full h-full">
                          {!imagesPreloaded && (
                            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10 rounded-lg">
                              <div className="w-8 h-8 border-4 border-teal-200 border-t-teal-500 rounded-full animate-spin"></div>
                            </div>
                          )}
                          <OptimizedImage
                            src={service.banner}
                            alt={`${service.title} Banner`}
                            fill
                            className="object-cover rounded-lg"
                            quality={60} // Better quality while maintaining good performance
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            priority={true} // Prioritize images in the "Show All" modal
                          />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-blue-950 mb-3 line-clamp-2 group-hover:text-teal-600 transition-colors">
                          {service.title}
                        </h3>
                        <button className="inline-flex items-center gap-2 text-teal-500 font-semibold text-sm hover:text-teal-600 transition-all duration-300">
                          <span className="relative">
                            READ MORE
                            {imagesPreloaded && (
                              <span className="ml-1 text-xs"></span>
                            )}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500 group-hover:w-full transition-all duration-300"></span>
                          </span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 group-hover:scale-110 transition-transform duration-300" />
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
    </>
  );
}