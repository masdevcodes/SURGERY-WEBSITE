'use client';

import React, { useCallback, useEffect, useState, useRef } from 'react';
import { Calendar, ChevronLeft, ChevronRight, MapPin, X } from 'lucide-react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';

// Define interfaces
interface EventData {
  id: number;
  title: string;
  description?: string;
  date: string;
  location?: string;
  images: string[];
}

interface OptimizedImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  className?: string;
  quality?: number;
  sizes?: string;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
  onLoad?: () => void;
}

// Define a fallback image path that we know exists
const FALLBACK_IMAGE = '/images/super/service11.webp';

// Optimized Image Component with preloading and error handling
const OptimizedEventImage: React.FC<OptimizedImageProps> = ({ 
  src, 
  alt, 
  fill = false, 
  className = "", 
  quality = 60, // Better quality while still optimized
  sizes = "",
  loading = "lazy",
  priority = false,
  onLoad
}) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    console.warn(`❌ Failed to load image: ${src}`);
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
        loading={priority ? undefined : loading}
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  );
}

export const Events: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'start',
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 2 },
      '(min-width: 1024px)': { slidesToScroll: 3 }
    }
  });
  
  const [modalEmblaRef, modalEmblaApi] = useEmblaCarousel({ 
    loop: true,
  });
  
  const [prevBtnDisabled, setPrevBtnDisabled] = useState<boolean>(false);
  const [nextBtnDisabled, setNextBtnDisabled] = useState<boolean>(false);
  const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalPrevBtnDisabled, setModalPrevBtnDisabled] = useState<boolean>(true);
  const [modalNextBtnDisabled, setModalNextBtnDisabled] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const [imagesPreloaded, setImagesPreloaded] = useState<boolean>(false);

  const scrollPrev = useCallback((): void => {
    if (emblaApi) {
      emblaApi.scrollPrev();
      // Reset auto-scroll timer on manual navigation
      resetAutoScroll();
    }
  }, [emblaApi]);

  const scrollNext = useCallback((): void => {
    if (emblaApi) {
      emblaApi.scrollNext();
      // Reset auto-scroll timer on manual navigation
      resetAutoScroll();
    }
  }, [emblaApi]);

  const modalScrollPrev = useCallback((): void => {
    if (modalEmblaApi) {
      modalEmblaApi.scrollPrev();
    }
  }, [modalEmblaApi]);

  const modalScrollNext = useCallback((): void => {
    if (modalEmblaApi) {
      modalEmblaApi.scrollNext();
    }
  }, [modalEmblaApi]);

  const onSelect = useCallback((emblaApi: any) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  const onModalSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setModalPrevBtnDisabled(!emblaApi.canScrollPrev());
    setModalNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  // Helper to format date
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    return date.toLocaleDateString('en-US', options);
  };

  // Handle event click
  const handleEventClick = (event: EventData): void => {
    setSelectedEvent(event);
    setIsModalOpen(true);
    setSelectedIndex(0);
    // Pause auto-scroll when modal is open
    pauseAutoScroll();
  };

  const closeModal = (): void => {
    setIsModalOpen(false);
    setSelectedEvent(null);
    setSelectedIndex(0);
    // Resume auto-scroll when modal is closed
    resumeAutoScroll();
  };

  // Auto-scroll functionality
  const startAutoScroll = useCallback((): void => {
    if (!emblaApi) return;
    
    autoScrollIntervalRef.current = setInterval(() => {
      if (emblaApi && !emblaApi.canScrollNext()) {
        emblaApi.scrollTo(0); // Go back to the first slide if at the end
      } else if (emblaApi) {
        emblaApi.scrollNext();
      }
    }, 4000); // Scroll every 4 seconds
  }, [emblaApi]);

  const pauseAutoScroll = (): void => {
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current);
      autoScrollIntervalRef.current = null;
    }
  };

  const resumeAutoScroll = (): void => {
    if (!autoScrollIntervalRef.current) {
      startAutoScroll();
    }
  };

  const resetAutoScroll = (): void => {
    pauseAutoScroll();
    resumeAutoScroll();
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent): void => {
      if (e.key === 'Escape') closeModal();
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen, closeModal]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
    
    // Start auto-scroll
    startAutoScroll();
    
    // Cleanup on unmount
    return () => {
      pauseAutoScroll();
    };
  }, [emblaApi, onSelect, startAutoScroll]);

  useEffect(() => {
    if (!modalEmblaApi) return;
    onModalSelect(modalEmblaApi);
    modalEmblaApi.on('reInit', onModalSelect);
    modalEmblaApi.on('select', onModalSelect);
    
    // Reset to first image when modal opens
    if (selectedEvent) {
      modalEmblaApi.scrollTo(0);
    }
  }, [modalEmblaApi, onModalSelect, selectedEvent]);

  // Function to parse date strings into Date objects for sorting
  const parseDate = (dateString: string): Date => {
    // Handle different date formats
    if (dateString.includes('/')) {
      const [month, day, year] = dateString.split(' ')[1]?.split(',')[0]?.split('/') || [0, 0, 0];
      return new Date(`${year}-${month}-${day}`);
    }
    return new Date(dateString);
  };

  // Updated events with multiple images - sorted by date (newest first)
  const events: EventData[] = [
    {
      id: 2,
      title: "SPARK 2025-Workshop on Robotic Laparoscopic Surgery",
      date: "February 28, 2024",
      images: [
        "/images/event/spark/sp4.webp",
        "/images/event/spark/sp1.webp",
        "/images/event/spark/sp.webp",
        "/images/event/spark/sp2.webp",
        "/images/event/spark/sp3.webp",
      ],
    },
    {
      id: 3,
      title: "SELSI 2020 ",
      date: "February 01, 2020",
      images: [
        "/images/event/selsi/selci1.webp",
        "/images/event/selsi/selci2.webp",
        "/images/event/selsi/selci3.webp",
        "/images/event/selsi/selci4.webp",
        "/images/event/selsi/selci5.webp",
        "/images/event/selsi/selci6.webp",
        "/images/event/selsi/selci7.webp",
      ],
    },
    {
      id: 4,
      title: "Surgical Skills Training Program",
      date: "December 10, 2023",
      images: [
        "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
    },
    {
      id: 5,
      title: "International Surgery Symposium",
      date: "November 25, 2023",
      images: [
        "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
    },
    {
      id: 6,
      title: "Student Research Presentation",
      date: "October 15, 2023",
      images: [
        "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
    },
    {
      id: 7,
      title: "Emergency Surgery Workshop",
      date: "September 12, 2023",
      images: [
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
    },
    {
      id: 8,
      title: "Medical Equipment Training",
      date: "August 18, 2023",
      images: [
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
    }
  ].sort((a, b) => {
    // Convert date strings to Date objects for proper comparison
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    // Sort in descending order (newest first)
    return dateB.getTime() - dateA.getTime();
  });
  
  // 🚀 HIGH-PERFORMANCE IMAGE PRELOADING STRATEGY
  useEffect(() => {
    console.log("🌐 Website loaded - Starting Events image preload...");
    
    // Collect all images that need to be preloaded
    const allImages: string[] = [];
    
    // Add main carousel images (first image of each event)
    events.forEach((event: EventData) => {
      if (event.images && event.images.length > 0) {
        allImages.push(event.images[0]);
      }
    });
    
    console.log(`📂 Preloading ${allImages.length} critical event images...`);

    // Use parallel preloading for better performance
    const totalImages = allImages.length;
    let loadedImages = 0;

    // Preload visible images immediately (first 3-4 cards visible in viewport)
    const VISIBLE_IMAGES_COUNT = Math.min(4, totalImages);
    const visibleImages = allImages.slice(0, VISIBLE_IMAGES_COUNT);
    const remainingImages = allImages.slice(VISIBLE_IMAGES_COUNT);

    // Function to preload a batch of images
    const preloadBatch = (imagesToLoad: string[]) => {
      imagesToLoad.forEach((src) => {
        if (!src) return;

        const img = new window.Image();
        img.src = src;
        img.loading = 'eager';
        img.decoding = 'async';
        img.crossOrigin = 'anonymous'; // Allow cross-origin preloading
        
        img.onload = () => {
          console.log(`✅ Events - Preloaded: ${src}`);
          loadedImages++;
          checkAllLoaded();
        };
        
        img.onerror = () => {
          console.warn(`❌ Events - Failed to preload: ${src}`);
          loadedImages++;
          checkAllLoaded();
        };
      });
    };

    // Check if all images are loaded
    const checkAllLoaded = () => {
      if (loadedImages >= totalImages) {
        setImagesPreloaded(true);
        console.log("✅ All critical Events images preloaded successfully!");
      }
    };

    // Start preloading visible images immediately
    if (visibleImages.length > 0) {
      preloadBatch(visibleImages);
    }

    // Preload remaining images after a small delay to not block initial render
    if (remainingImages.length > 0) {
      setTimeout(() => preloadBatch(remainingImages), 300);
    }

    return () => {};
  }, [events]);

  // Preload modal images when an event is selected
  useEffect(() => {
    if (!selectedEvent || !selectedEvent.images) return;
    
    console.log(`📸 Preloading modal images for: ${selectedEvent.title}`);
    
    // Start preloading all images for the selected event
    selectedEvent.images.forEach((src: string, index: number) => {
      // Skip the first image since it's already loaded in the carousel
      if (index === 0) return;
      
      const img = new window.Image();
      img.src = src;
      img.loading = 'eager';
      img.decoding = 'async';
      
      img.onload = () => {
        console.log(`✅ Modal - Preloaded image ${index + 1}/${selectedEvent.images.length}`);
      };
      
      img.onerror = () => {
        console.warn(`❌ Modal - Failed to preload image ${index + 1}`);
      };
    });
  }, [selectedEvent]);

  return (
    <>
      <section id="events" className="py-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Pattern - Optimized */}
          <div className="absolute inset-0 opacity-20">
            <OptimizedEventImage
              src="/111.png"
              alt="Abstract background pattern"
              fill
              className="object-cover"
              quality={50} // Lower quality for background pattern
              priority={true}
            />
          </div>
        
        <div className="container mx-auto relative">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-16 h-1 bg-teal-500"></div>
              <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
                Department Activities
              </span>
              <div className="w-16 h-1 bg-teal-500"></div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-blue-950 font-headline leading-tight mb-4">
              Recent Events & Activities
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Showcasing our commitment to medical education, research, and community service through various events and programs.
            </p>
          </div>

          {/* Slider Container */}
          <div className="relative px-12">
            {/* Navigation Buttons - Larger and more prominent */}
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-4 transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={scrollPrev}
              disabled={prevBtnDisabled}
              aria-label="Previous events"
            >
              <ChevronLeft className="w-8 h-8 text-blue-950" />
            </button>
            
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-4 transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={scrollNext}
              disabled={nextBtnDisabled}
              aria-label="Next events"
            >
              <ChevronRight className="w-8 h-8 text-blue-950" />
            </button>

            {/* Embla Carousel */}
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {events.map((event, index) => (
                  <div
                    key={event.id}
                    className="flex-none w-96 group cursor-pointer pl-6" // Increased card width
                    onClick={() => handleEventClick(event)}
                  >
                    <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                      <OptimizedEventImage
                        src={event.images[0]}
                        alt={event.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        quality={60} // Slightly higher quality for better visual experience
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        loading={index < 4 ? "eager" : "lazy"} // Load first 4 cards immediately
                        priority={index < 2} // High priority for first 2 cards in viewport
                      />
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                      
                      <div className="absolute top-4 left-4 bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {event.date}
                      </div>
                      
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                        <h3 className="text-white font-bold text-xl leading-tight mb-2">
                          {event.title}
                        </h3>
                        <div className="flex items-center text-white/80 text-sm">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>{event.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="flex justify-center space-x-2">
              {events.map((_, index: number) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${(
                    emblaApi && index === emblaApi.selectedScrollSnap() 
                      ? 'bg-teal-500' 
                      : 'bg-gray-300'
                  )}`}
                  onClick={() => emblaApi?.scrollTo(index)}
                  aria-label={`Go to event ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modal for Event Images with Full Image Slider */}
      {isModalOpen && selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div 
            className="absolute inset-0" 
            onClick={closeModal}
          ></div>
          
          <div className="relative z-50 bg-white rounded-xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-50 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6 text-gray-800" />
            </button>
            
            {selectedEvent && (
                <div className="p-6 bg-white border-b">
                  <h3 className="text-2xl font-bold text-blue-950 mb-2">
                    {selectedEvent.title}
                  </h3>
                  <div className="flex items-center text-gray-600 mb-2">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span>{formatDate(selectedEvent.date)}</span>
                  </div>
                  {selectedEvent.description && (
                    <p className="text-gray-700 mb-2">{selectedEvent.description}</p>
                  )}
                  {selectedEvent.location && (
                    <p className="text-gray-600">
                      <strong>Location:</strong> {selectedEvent.location}
                    </p>
                  )}
                </div>
              )}
            
            {/* Modal Image Slider with Full Images */}
            <div className="relative h-[60vh] bg-black">
              <div className="overflow-hidden h-full" ref={modalEmblaRef}>
                <div className="flex h-full">
                  {selectedEvent && selectedEvent.images.map((img: string, index: number) => (
                      <div key={index} className="flex-[0_0_100%] min-w-0 relative">
                        <OptimizedEventImage
                          src={img}
                          quality={60} // Better quality for modal images
                          alt={`${selectedEvent.title} - Image ${index + 1}`}
                          fill
                          className="object-contain"
                          loading="eager"
                        />
                      </div>
                    ))}
                </div>
              </div>
              
              {/* Modal Navigation Buttons */}
              {selectedEvent && selectedEvent.images && selectedEvent.images.length > 1 && (
                <>
                  <button
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={modalScrollPrev}
                    disabled={modalPrevBtnDisabled}
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  
                  <button
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={modalScrollNext}
                    disabled={modalNextBtnDisabled}
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
              
              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                {selectedIndex + 1} / {selectedEvent.images.length}
              </div>
            </div>
            
            <div className="p-4 bg-gray-100 text-center text-sm text-gray-500">
              Use arrow keys or swipe to navigate through the photos
            </div>
          </div>
        </div>
      )}
    </>
  );
}