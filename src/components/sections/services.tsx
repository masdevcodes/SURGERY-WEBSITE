'use client';

import Image from 'next/image';
import { ArrowRight, Heart, Stethoscope, Eye, Bone, Brain, LucideKey as Kidney } from 'lucide-react';
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { X } from 'lucide-react';

export function Services() {
  const [selectedService, setSelectedService] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
   
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Cardiology",
      description: "Nam at varius ut dignissim lorem, in condimentum leo. Vestibulum eget.",
      color: "text-teal-500",
      fullDescription: "Our Cardiology department provides comprehensive cardiovascular care with state-of-the-art diagnostic and treatment facilities. We specialize in preventive cardiology, interventional procedures, and cardiac rehabilitation. Our team of experienced cardiologists uses advanced techniques including cardiac catheterization, angioplasty, and minimally invasive cardiac surgery to ensure the best outcomes for our patients."
    },
    
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "Gastroenterology",
      description: "Suspendisse magna nisl, varius ut risus in, porta aliquet nunc.",
      color: "text-teal-500",
      fullDescription: "Our Gastroenterology department offers comprehensive digestive health services including endoscopic procedures, liver disease management, and inflammatory bowel disease treatment. We provide advanced diagnostic capabilities with state-of-the-art endoscopy suites and specialized care for complex gastrointestinal conditions."
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Ophthalmology",
      description: "Sed vel odio sapien. Vivamus feugiat faucibus enim dapibus.",
      color: "text-teal-500",
      fullDescription: "Our Ophthalmology department provides comprehensive eye care services including cataract surgery, retinal treatments, glaucoma management, and refractive surgery. We utilize the latest technology in eye care to ensure optimal vision outcomes for our patients of all ages."
    },
    {
      icon: <Bone className="w-8 h-8" />,
      title: "Rheumatology",
      description: "Fusce ac nulla diam. Nulla facilisi. Donec accumsan est nec laoreet.",
      color: "text-teal-500",
      fullDescription: "Our Rheumatology department specializes in the diagnosis and treatment of autoimmune and inflammatory conditions affecting joints, muscles, and connective tissues. We provide comprehensive care for conditions such as rheumatoid arthritis, lupus, and osteoarthritis with both medical and therapeutic interventions."
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Neurology",
      description: "Etiam augue leo, ultrices. Suspendisse magna nisl, varius ut aliquet nunc.",
      color: "text-teal-500",
      fullDescription: "Our Neurology department offers specialized care for disorders of the nervous system including stroke, epilepsy, multiple sclerosis, and movement disorders. We provide advanced diagnostic services including EEG, EMG, and neuroimaging, along with comprehensive treatment plans tailored to each patient's needs."
    },
    {
      icon: <Kidney className="w-8 h-8" />,
      title: "Urology",
      description: "Etiam metus, tempor quis, sollicitudin sit amet magna cursus vehicula.",
      color: "text-teal-500",
      fullDescription: "Our Urology department provides comprehensive care for conditions affecting the urinary tract and male reproductive system. We offer minimally invasive procedures, robotic surgery, and advanced treatments for kidney stones, prostate conditions, and urological cancers."
    },
  ];

  const openModal = (service: any) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Doctor Patient Image */}
          <div className="relative">
            <div className="relative h-[700px] rounded-2xl overflow-hidden shadow-2xl group">
              <Image
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Doctor consulting with patient"
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
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

          {/* Right Side - Services Grid */}
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-1 bg-teal-500"></div>
                <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
                  Medical Excellence
                </span>
              </div>
              <h2 className="text-5xl font-bold text-blue-950 font-headline leading-tight">
                Our Services
              </h2>
              <p className="text-xl text-gray-600 font-medium">
                Delivering world class medical care
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-teal-200"
                >
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-teal-200 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className={service.color}>
                      {service.icon}
                    </div>
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
                    onClick={() => openModal(service)}
                    className="inline-flex items-center gap-2 text-teal-500 font-semibold text-sm hover:gap-3 transition-all duration-300 group"
                  >
                    READ MORE 
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Modal */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="max-w-2xl bg-white rounded-2xl shadow-2xl border-0 p-0 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-teal-500 to-teal-600 p-8 text-white relative">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
              >
                <X className="w-4 h-4" />
              </button>
              
              {selectedService && (
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                    <div className="text-white">
                      {selectedService.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold font-headline">{selectedService.title}</h3>
                    <p className="text-teal-100 font-medium">Department Overview</p>
                  </div>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-8">
              {selectedService && (
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-bold text-blue-950 mb-3">About Our {selectedService.title} Department</h4>
                    <p className="text-gray-700 leading-relaxed text-base">
                      {selectedService.fullDescription}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-gray-200">
                    <div className="space-y-4">
                      <h5 className="font-bold text-blue-950">Key Services</h5>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                          Diagnostic Services
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                          Treatment Planning
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                          Follow-up Care
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                          Emergency Services
                        </li>
                      </ul>
                    </div>
                    
                    <div className="space-y-4">
                      <h5 className="font-bold text-blue-950">Contact Information</h5>
                      <div className="space-y-2 text-sm text-gray-600">
                        <p>Department: {selectedService.title}</p>
                        <p>Phone: +91-175-2302000</p>
                        <p>Email: {selectedService.title.toLowerCase()}@gmcpatiala.edu</p>
                        <p>Location: GMC Patiala</p>
                      </div>
                    </div>
                  <div className="flex justify-center pt-6">
                    <button className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-teal-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                      Book Appointment
                    </button>
                  </div>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
                  </div>
      </div>
    </section>
  );
}