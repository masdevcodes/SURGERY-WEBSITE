'use client';

import Image from 'next/image';
import { Calendar, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

export function Events() {
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
  
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(false);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPrevBtnDisabled, setModalPrevBtnDisabled] = useState(true);
  const [modalNextBtnDisabled, setModalNextBtnDisabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const modalScrollPrev = useCallback(() => {
    if (modalEmblaApi) modalEmblaApi.scrollPrev();
  }, [modalEmblaApi]);

  const modalScrollNext = useCallback(() => {
    if (modalEmblaApi) modalEmblaApi.scrollNext();
  }, [modalEmblaApi]);

  const onSelect = useCallback((emblaApi) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  const onModalSelect = useCallback((emblaApi) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setModalPrevBtnDisabled(!emblaApi.canScrollPrev());
    setModalNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
    setSelectedIndex(0);
  };

  useEffect(() => {
    const handleEscape = (e) => {
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
  }, [isModalOpen]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

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

  // Updated events with multiple images
  const events = [
    {
      id: 2,
      title: "Workshop on Robotic Laparoscopic Surgery",
      date: "February 28, 2024",
      images: [
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
    },
    {
      id: 3,
      title: "Health Awareness Camp",
      date: "January 20, 2024",
      images: [
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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
  ];

  return (
    <>
      <section id="events" className="py-12 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/111.png"
            alt="Abstract background pattern"
            fill
            className="object-cover"
          />
        </div>
        
        <div className="container mx-auto relative">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-16 h-1 bg-teal-500"></div>
              <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
                Department Activities
              </span>
              <div className="w-16 h-1 bg-teal-500"></div>
            </div>
            
            <h2 className="text-4xl font-bold text-blue-950 font-headline leading-tight mb-4">
              Recent Events & Activities
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Showcasing our commitment to medical education, research, and community service through various events and programs.
            </p>
          </div>

          {/* Slider Container */}
          <div className="relative px-12">
            {/* Navigation Buttons */}
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={scrollPrev}
              disabled={prevBtnDisabled}
            >
              <ChevronLeft className="w-6 h-6 text-blue-950" />
            </button>
            
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={scrollNext}
              disabled={nextBtnDisabled}
            >
              <ChevronRight className="w-6 h-6 text-blue-950" />
            </button>

            {/* Embla Carousel */}
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {events.map((event) => (
                  <div
                    key={event.id}
                    className="flex-none w-80 group cursor-pointer pl-6"
                    onClick={() => handleEventClick(event)}
                  >
                    <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                      <Image
                        src={event.images[0]}
                        alt={event.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        quality={85}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        loading="lazy"
                      />
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                      
                      <div className="absolute top-4 left-4 bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {event.date}
                      </div>
                      
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                        <h3 className="text-white font-bold text-lg leading-tight mb-2">
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

          <div className="text-center mt-8">
            {/* Optional "View All Events" button */}
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
            >
              <X className="w-6 h-6 text-gray-800" />
            </button>
            
            <div className="p-6 bg-white border-b">
              <h3 className="text-2xl font-bold text-blue-950 mb-2">
                {selectedEvent.title}
              </h3>
              <div className="flex items-center text-gray-600">
                <Calendar className="w-5 h-5 mr-2" />
                <span>{selectedEvent.date}</span>
              </div>
            </div>
            
            {/* Modal Image Slider with Full Images */}
            <div className="relative h-[60vh] bg-black">
              <div className="overflow-hidden h-full" ref={modalEmblaRef}>
                <div className="flex h-full">
                  {selectedEvent.images.map((img, index) => (
                    <div key={index} className="flex-[0_0_100%] min-w-0 relative">
                      <Image
                        src={img}
                        alt={`${selectedEvent.title} - Image ${index + 1}`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Modal Navigation Buttons */}
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={modalScrollPrev}
                disabled={modalPrevBtnDisabled}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={modalScrollNext}
                disabled={modalNextBtnDisabled}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              
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