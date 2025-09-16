'use client';

import Image from 'next/image';
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
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
  
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(false);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi: any) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  const events = [
    {
      id: 1,
      title: "Annual Surgery Conference 2024",
      date: "March 15, 2024",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Medical Workshop on Laparoscopic Surgery",
      date: "February 28, 2024",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Health Awareness Camp",
      date: "January 20, 2024",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      title: "Surgical Skills Training Program",
      date: "December 10, 2023",
      image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      title: "International Surgery Symposium",
      date: "November 25, 2023",
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 6,
      title: "Student Research Presentation",
      date: "October 15, 2023",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 7,
      title: "Emergency Surgery Workshop",
      date: "September 12, 2023",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 8,
      title: "Medical Equipment Training",
      date: "August 18, 2023",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    }
  ];

  return (
    <section id="events" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
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
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-1 bg-teal-500"></div>
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
              Department Activities
            </span>
            <div className="w-16 h-1 bg-teal-500"></div>
          </div>
          
          <h2 className="text-5xl font-bold text-blue-950 font-headline leading-tight mb-6">
            Recent Events & Activities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing our commitment to medical education, research, and community service through various events and programs.
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={scrollPrev}
            disabled={prevBtnDisabled}
          >
            <ChevronLeft className="w-6 h-6 text-blue-950" />
          </button>
          
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={scrollNext}
            disabled={nextBtnDisabled}
          >
            <ChevronRight className="w-6 h-6 text-blue-950" />
          </button>

          {/* Embla Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {events.map((event) => (
                <div
                  key={event.id}
                  className="flex-none w-80 group cursor-pointer"
                >
                  <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                    {/* Fixed Size Image */}
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    
                    {/* Date Badge */}
                    <div className="absolute top-4 left-4 bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {event.date}
                    </div>
                    
                    {/* Transparent Footer with Event Title */}
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

        {/* View All Events Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-3 bg-blue-950 hover:bg-blue-900 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            <Calendar className="w-5 h-5" />
            View All Events
          </button>
        </div>
      </div>
    </section>
  );
}