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
  X,
  Trash2,
  Undo
} from 'lucide-react';

export function Services() {
  // Initial services data
  const initialServices = [
    {
      id: 1,
      icon: <Heart className="w-8 h-8" />,
      title: 'Cardiology',
      description:
        'Nam at varius ut dignissim lorem, in condimentum leo. Vestibulum eget.',
      color: 'text-teal-500',
      banner:
        'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      popupContent: (
        <div>
          <h3 className="font-bold text-2xl mb-4">Cardiology Services</h3>
          <p className="text-gray-700 leading-relaxed text-justify">
            Detailed description and information about Cardiology services go
            here. Explain procedures, specialists, diagnostic tools, and
            patient-focused care models for cardiac health.
          </p>
        </div>
      ),
    },
    {
      id: 2,
      icon: <Stethoscope className="w-8 h-8" />,
      title: 'Gastroenterology',
      description:
        'Suspendisse magna nisl, varius ut risus in, porta aliquet nunc.',
      color: 'text-teal-500',
      banner:
        'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      popupContent: (
        <div>
          <h3 className="font-bold text-2xl mb-4">Gastroenterology Services</h3>
          <p className="text-gray-700 leading-relaxed text-justify">
            Details on Gastroenterology including advanced diagnostic endoscopy,
            treatment protocols for GI disorders, liver care, and nutritional
            counselling.
          </p>
        </div>
      ),
    },
    {
      id: 3,
      icon: <Eye className="w-8 h-8" />,
      title: 'Ophthalmology',
      description: 'Sed vel odio sapien. Vivamus feugiat faucibus enim dapibus.',
      color: 'text-teal-500',
      banner:
        'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      popupContent: (
        <div>
          <h3 className="font-bold text-2xl mb-4">Ophthalmology Services</h3>
          <p className="text-gray-700 leading-relaxed text-justify">
            Information about comprehensive eye care, cataract surgeries,
            retinal services, LASIK, and vision rehabilitation facilities.
          </p>
        </div>
      ),
    },
    {
      id: 4,
      icon: <Bone className="w-8 h-8" />,
      title: 'Rheumatology',
      description:
        'Fusce ac nulla diam. Nulla facilisi. Donec accumsan est nec laoreet.',
      color: 'text-teal-500',
      banner:
        'https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      popupContent: (
        <div>
          <h3 className="font-bold text-2xl mb-4">Rheumatology Services</h3>
          <p className="text-gray-700 leading-relaxed text-justify">
            Details about autoimmune disease care, arthritis management,
            biologics, physical therapy, and multidisciplinary rehabilitation
            approaches.
          </p>
        </div>
      ),
    },
    {
      id: 5,
      icon: <Brain className="w-8 h-8" />,
      title: 'Neurology',
      description:
        'Etiam augue leo, ultrices. Suspendisse magna nisl, varius ut aliquet nunc.',
      color: 'text-teal-500',
      banner:
        'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      popupContent: (
        <div>
          <h3 className="font-bold text-2xl mb-4">Neurology Services</h3>
          <p className="text-gray-700 leading-relaxed text-justify">
            Descriptions of neurological disorder treatments, stroke care,
            epilepsy monitoring, neuro-rehabilitation, and expert consultation
            availability.
          </p>
        </div>
      ),
    },
    {
      id: 6,
      icon: <Activity className="w-8 h-8" />,
      title: 'Urology',
      description:
        'Etiam metus, tempor quis, sollicitudin sit amet magna cursus vehicula.',
      color: 'text-teal-500',
      banner:
        'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      popupContent: (
        <div>
          <h3 className="font-bold text-2xl mb-4">Urology Services</h3>
          <p className="text-gray-700 leading-relaxed text-justify">
            Information on kidney stone treatment, prostate care, minimally
            invasive surgeries, dialysis services, and comprehensive men's
            health.
          </p>
        </div>
      ),
    },
  ];

  const [services, setServices] = useState(initialServices);
  const [deletedServices, setDeletedServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const rightSideRef = useRef(null);
  const [rightSideHeight, setRightSideHeight] = useState(0);

  // Left-side carousel images
  const carouselImages = [
    '/service11.png',
    '/service12.png',
    '/service13.png',
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Update right side height on resize and after initial render
  useEffect(() => {
    const updateHeight = () => {
      if (rightSideRef.current) {
        setRightSideHeight(rightSideRef.current.offsetHeight);
      }
    };

    // Initial height calculation
    updateHeight();

    // Add resize listener
    window.addEventListener('resize', updateHeight);

    // Cleanup
    return () => window.removeEventListener('resize', updateHeight);
  }, [services]); // Update when services change

  // Auto-change carousel images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Close modal
  const closeModal = () => setSelectedService(null);

  // Delete a service
  const deleteService = (id) => {
    const serviceToDelete = services.find(service => service.id === id);
    setServices(services.filter(service => service.id !== id));
    setDeletedServices([...deletedServices, serviceToDelete]);
  };

  // Restore all deleted services
  const restoreAllServices = () => {
    setServices([...services, ...deletedServices]);
    setDeletedServices([]);
  };

  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/22222.jpg"
          alt="Surgical team in operating room"
          fill
          className="object-cover"
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
              <Image
                src={carouselImages[currentImageIndex]}
                alt={`Doctor consulting with patient ${currentImageIndex + 1}`}
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                quality={85}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                loading="lazy"
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
                  <p className="text-2xl font-bold text-blue-950">{services.length}+</p>
                  <p className="text-sm text-gray-600">Services Available</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Services Grid */}
          <div ref={rightSideRef} className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-1 bg-teal-500"></div>
                <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
                  Medical Excellence
                </span>
              </div>
              <div className="flex justify-between items-center">
                <h2 className="text-5xl font-bold text-blue-950 font-headline leading-tight">
                  Our Services
                </h2>
                {deletedServices.length > 0 && (
                  <button
                    onClick={restoreAllServices}
                    className="flex items-center gap-2 text-teal-600 hover:text-teal-800 font-medium text-sm transition-colors"
                  >
                    <Undo size={16} />
                    Restore All
                  </button>
                )}
              </div>
              <p className="text-xl text-gray-600 font-medium">
                Delivering world class medical care
              </p>
            </div>
            
            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-teal-200 relative"
                >
                  {/* Delete Button */}
                  <button
                    onClick={() => deleteService(service.id)}
                    className="absolute top-3 right-3 p-1.5 text-gray-400 hover:text-red-500 rounded-full hover:bg-red-50 transition-all duration-300 opacity-0 group-hover:opacity-100"
                    aria-label={`Delete ${service.title}`}
                  >
                    <Trash2 size={16} />
                  </button>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-teal-200 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className={service.color}>{service.icon}</div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-lg font-bold text-blue-950 mb-3 group-hover:text-teal-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  
                  {/* Read More Link */}
                  <button
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center gap-2 text-teal-500 font-semibold text-sm hover:gap-3 transition-all duration-300 group"
                  >
                    READ MORE
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              ))}
            </div>
            
            {/* Empty State */}
            {services.length === 0 && (
              <div className="text-center py-12 bg-white rounded-xl shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trash2 className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-700 mb-2">No services available</h3>
                <p className="text-gray-500 mb-6">All services have been deleted</p>
                <button
                  onClick={restoreAllServices}
                  className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                >
                  <Undo size={16} />
                  Restore All Services
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Modal Popup */}
        {selectedService && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={closeModal}
          >
            <div
              className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-lg relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Banner */}
              <div className="w-full h-64 relative">
                <Image
                  src={selectedService.banner}
                  alt={`${selectedService.title} Banner`}
                  fill
                  className="object-cover rounded-t-lg"
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
      </div>
    </section>
  );
}