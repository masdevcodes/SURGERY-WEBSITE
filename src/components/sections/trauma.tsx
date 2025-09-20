'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import {
  Clock,
  Users,
  AlertTriangle,
  Ambulance,
  Activity,
  Shield,
  CheckCircle,
  ArrowRight,
  Phone,
  MapPin,
} from 'lucide-react';

export function Trauma() {
  const services = [
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: 'Level 1 Trauma Center',
      description: '24/7 comprehensive trauma care with immediate surgical response',
      color: 'text-red-500',
      stats: 'Under 15 mins response time',
      popupContent: (
        <div>
          <h3 className="font-bold text-2xl mb-4">Level 1 Trauma Center</h3>
          <p className="text-gray-700 leading-relaxed text-justify mb-4">
            Our Level 1 Trauma Center is verified by the American College of Surgeons and provides 
            the highest level of surgical care for critically injured patients. We have a dedicated 
            trauma team available 24/7, ready within minutes of patient arrival.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="bg-red-50 p-4 rounded-lg">
              <p className="text-2xl font-bold text-red-800">{"<15"}</p>
              <p className="text-sm text-red-600">Minutes Response Time</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-2xl font-bold text-blue-800">24/7</p>
              <p className="text-sm text-blue-600">Availability</p>
            </div>
            <div className="bg-teal-50 p-4 rounded-lg">
              <p className="text-2xl font-bold text-teal-800">95%</p>
              <p className="text-sm text-teal-600">Survival Rate</p>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg">
              <p className="text-2xl font-bold text-amber-800">10+</p>
              <p className="text-sm text-amber-600">Specialists On Call</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      icon: <Ambulance className="w-8 h-8" />,
      title: 'Emergency Transport',
      description: 'Helicopter & ground ambulance coordination for critical patients',
      color: 'text-blue-500',
      stats: '50-mile radius coverage',
      popupContent: (
        <div>
          <h3 className="font-bold text-2xl mb-4">Emergency Transport System</h3>
          <p className="text-gray-700 leading-relaxed text-justify mb-4">
            Our emergency transport system includes two medically equipped helicopters and 
            three advanced life support ambulances capable of reaching patients within a 
            50-mile radius. Our transport teams include specially trained trauma nurses 
            and paramedics who can initiate critical care en route.
          </p>
          <ul className="space-y-3 mt-4">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-teal-500" />
              <span>Average response time: 12 minutes</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-teal-500" />
              <span>In-transit telemedicine capabilities</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-teal-500" />
              <span>Advanced blood transfusion capabilities en route</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-teal-500" />
              <span>Direct communication with trauma team before arrival</span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Rapid Assessment',
      description: 'Advanced imaging and diagnostics within minutes of arrival',
      color: 'text-teal-500',
      stats: 'Under 5 mins to CT scan',
      popupContent: (
        <div>
          <h3 className="font-bold text-2xl mb-4">Rapid Assessment Protocol</h3>
          <p className="text-gray-700 leading-relaxed text-justify mb-4">
            Our trauma bay is equipped with in-room CT scanning technology allowing for 
            immediate diagnostic imaging without patient transfer. Our rapid assessment 
            protocol ensures that critically injured patients are diagnosed and in the 
            operating room within an average of 22 minutes of arrival.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold text-lg mb-3">Assessment Timeline</h4>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span>Door to physician assessment</span>
                <span className="font-medium text-teal-600">{"<2 mins"}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Door to CT scan</span>
                <span className="font-medium text-teal-600">{"<5 mins"}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Door to operating room</span>
                <span className="font-medium text-teal-600">{"<22 mins"}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Door to specialist consultation</span>
                <span className="font-medium text-teal-600">{"<8 mins"}</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: 'Critical Care Surgery',
      description: 'Immediate life-saving surgical interventions for trauma patients',
      color: 'text-purple-500',
      stats: '12 dedicated OR suites',
      popupContent: (
        <div>
          <h3 className="font-bold text-2xl mb-4">Critical Care Surgery</h3>
          <p className="text-gray-700 leading-relaxed text-justify mb-4">
            Our surgical team specializes in damage control surgery and rapid interventions 
            for life-threatening injuries. We maintain 12 dedicated operating rooms specifically 
            for trauma cases, with two always ready for immediate emergency procedures.
          </p>
          <div className="mt-6">
            <h4 className="font-semibold text-lg mb-3">Specialized Surgical Capabilities</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-purple-50 p-3 rounded-lg">
                <h5 className="font-medium text-purple-800">Cardiothoracic Trauma</h5>
                <p className="text-sm text-purple-600">Emergency thoracotomies, heart repairs</p>
              </div>
              <div className="bg-red-50 p-3 rounded-lg">
                <h5 className="font-medium text-red-800">Neurotrauma</h5>
                <p className="text-sm text-red-600">Cranial decompression, spinal stabilization</p>
              </div>
              <div className="bg-blue-50 p-3 rounded-lg">
                <h5 className="font-medium text-blue-800">Vascular Trauma</h5>
                <p className="text-sm text-blue-600">Vessel repair, shunting, reconstruction</p>
              </div>
              <div className="bg-amber-50 p-3 rounded-lg">
                <h5 className="font-medium text-amber-800">Orthopedic Trauma</h5>
                <p className="text-sm text-amber-600">Fracture stabilization, limb salvage</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const stats = [
    { value: '98%', label: 'Trauma Survival Rate' },
    { value: '24/7', label: 'Specialist Availability' },
    { value: '<22min', label: 'Avg. OR Ready Time' },
    { value: '5000+', label: 'Lives Saved Yearly' },
  ];

  const [selectedService, setSelectedService] = useState<any>(null);
  const rightSideRef = useRef<HTMLDivElement>(null);
  const [rightSideHeight, setRightSideHeight] = useState(0);

  // Left-side carousel images
  const carouselImages = [
    '/trauma1.jpg',
    '/trauma2.jpg',
    '/trauma3.jpg',
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
  }, []);

  // Auto-change carousel images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Close modal
  const closeModal = () => setSelectedService(null);

  return (
    <section
      id="trauma"
      className="py-24 bg-gradient-to-br from-red-50 to-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-70">
        <Image
          src="/111.png"
          alt="Medical pattern background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-red-100/20 via-transparent to-blue-100/20"></div>
      </div>

      <div className="container mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Trauma Team Carousel */}
          <div className="relative">
            <div 
              className="relative rounded-2xl overflow-hidden shadow-2xl group"
              style={{ height: `${rightSideHeight}px` }}
            >
              <Image
                src={carouselImages[currentImageIndex]}
                alt={`Trauma team ${currentImageIndex + 1}`}
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                quality={85}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              
              {/* Emergency Contact Overlay */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg max-w-md">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-blue-950">Emergency Hotline</p>
                    <p className="text-2xl font-bold text-red-600">(555) 123-HELP</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Available 24/7 for trauma emergencies. Our team is ready to coordinate 
                  transport and prepare for your arrival.
                </p>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-red-400/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
          </div>

          {/* Right Side - Services List */}
          <div ref={rightSideRef} className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-1 bg-red-500"></div>
                <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">
                  Emergency Care
                </span>
              </div>
              <h2 className="text-5xl font-bold text-blue-950 font-headline leading-tight">
                Trauma & Emergency Surgery
              </h2>
              <p className="text-xl text-gray-600 font-medium">
                Life-saving care when every second counts
              </p>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-xl p-5 shadow-md border border-gray-100">
                  <div className="text-3xl font-bold text-red-600 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
            
            {/* Services List */}
            <div className="space-y-6 max-h-[calc(100%-180px)] overflow-y-auto pr-2">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-red-200 flex items-start gap-4 cursor-pointer"
                  onClick={() => setSelectedService(service)}
                >
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-red-200 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <div className={service.color}>{service.icon}</div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-blue-950 group-hover:text-red-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-2">
                      {service.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm font-semibold text-red-600">
                      <Clock className="w-4 h-4" />
                      <span>{service.stats}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Emergency Notice */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-5 mt-6">
              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-red-800 mb-1">In Case of Emergency</h4>
                  <p className="text-sm text-red-600">
                    For critical trauma cases, please call our emergency hotline first to alert 
                    our trauma team. We can coordinate air or ground transport and will be ready 
                    for immediate intervention upon arrival.
                  </p>
                </div>
              </div>
            </div>
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
              {/* Header with colored accent */}
              <div className={`h-2 w-full ${selectedService.color.replace('text', 'bg')}`}></div>

              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-3xl font-bold z-10 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md"
                aria-label="Close modal"
              >
                &times;
              </button>

              {/* Popup Content */}
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl ${selectedService.color.replace('text', 'bg')} bg-opacity-20`}>
                    <div className={selectedService.color}>
                      {selectedService.icon}
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold text-blue-950">
                    {selectedService.title}
                  </h2>
                </div>
                
                {selectedService.popupContent}
                
                <button
                  onClick={closeModal}
                  className="mt-8 bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}