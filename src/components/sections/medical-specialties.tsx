"use client";

import { useState, useEffect } from "react";
import Image from "next/image"; // Renamed to use default import

// Data for Unit 1 Team - updated to use WebP format for better performance
const unit1Data = {
  incharge: {
    name: "Dr. Ashwani Kumar",
    title: "Prof & Head of Surgery Department",
    img: "/images/unit1/ashwini.webp",
  },
  associateProfessors: [
    { name: "Dr. Jaswinder Singh", img: "/images/unit1/jaswinder.webp" },
    { name: "Dr. Dinesh Kumar Passi", img: "/images/unit1/dinesh_kumar.webp" },
  ],
  seniorResidents: [
    { name: "Dr. Parth Dhamija", img: "/images/unit1/parth.webp" },
    { name: "Dr. Talib Khan", img: "/images/unit1/thalib.webp" },
  ],
  juniorResidents: [
    { name: "Dr. Dinesh", img: "/images/unit1/dinesh.webp" },
    { name: "Dr. Navneeth Shankar", img: "/images/unit1/navneeth.webp" },
    { name: "Dr. Vineeth Sunaria", img: "/images/unit1/vineeth.webp" },
    { name: "Dr. Aseem Anand", img: "/images/unit1/aseem.webp" },
    { name: "Dr. Soumya A", img: "/images/unit1/soumya.webp" },
    { name: "Dr. Naveen Mangla", img: "/images/unit1/naveen.webp" },
    { name: "Dr. Yogyatha", img: "/images/unit1/yog.webp" },
    { name: "Dr. Priyanka", img: "/images/unit1/pri.webp" },
    { name: "Dr. Sooraj", img: "/images/unit1/sur.webp" },
  ],
};

export function MedicalSpecialties() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Add a preload state to track image loading status
  const [modalImagesPreloaded, setModalImagesPreloaded] = useState(false);
  // Track loading status of individual images for better UX
  const [loadingImages, setLoadingImages] = useState<Record<string, boolean>>({});

  // Optimized preloading with parallel loading and accurate tracking
  useEffect(() => {
    // Get all doctor images from unit1Data
    const allDoctorImages = [
      unit1Data.incharge.img,
      ...unit1Data.associateProfessors.map(d => d.img),
      ...unit1Data.seniorResidents.map(d => d.img),
      ...unit1Data.juniorResidents.map(d => d.img)
    ];
  
    console.log(`Starting preloading of ${allDoctorImages.length} modal images...`);
  
    // Initialize loading state for all images
    const initialLoadingState: Record<string, boolean> = {};
    allDoctorImages.forEach(src => {
      initialLoadingState[src] = true;
    });
    setLoadingImages(initialLoadingState);
  
    let loadedCount = 0;
    const totalImages = allDoctorImages.length;
  
    const preloadImage = (src: string) => {
      const img = new window.Image();
      img.src = src;
      img.loading = 'eager';
      img.decoding = 'async';
  
      img.onload = () => {
        loadedCount++;
        console.log(`✅ Preloaded (${loadedCount}/${totalImages}): ${src}`);
        setLoadingImages(prev => ({ ...prev, [src]: false }));
        if (loadedCount === totalImages) {
          setModalImagesPreloaded(true);
          console.log("✅ All modal images preloaded successfully!");
        }
      };
  
      img.onerror = () => {
        loadedCount++;
        console.warn(`❌ Failed to preload: ${src}`);
        setLoadingImages(prev => ({ ...prev, [src]: false }));
        if (loadedCount === totalImages) {
          setModalImagesPreloaded(true);
          console.log("✅ Preloading completed (with some errors)!");
        }
      };
    };
  
    // Preload all simultaneously within requestAnimationFrame
    requestAnimationFrame(() => {
      allDoctorImages.forEach(preloadImage);
    });
  }, []);

  // Update to renderModalListWithImages (add priority to Image)
  const renderModalListWithImages = (items: { name: string; img: string }[], centerIfFew = false) => {
    if (items.length === 0) return null;
    
    // Determine grid columns based on number of items
    let gridClass = 'grid grid-cols-1 gap-6 md:gap-8 mt-4';
    if (items.length === 2) {
      gridClass = 'grid grid-cols-2 gap-6 md:gap-8 mt-4';
    } else if (items.length >= 3) {
      gridClass = 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mt-4';
    }
    
    return (
      <div className={`${gridClass} ${centerIfFew ? 'justify-center' : ''}`}>
        {items.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <div className="w-28 h-28 rounded-xl overflow-hidden shadow-md mb-3 group relative">
              {/* Show spinner if image is still loading */}
              {loadingImages[item.img] && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                  <div className="w-8 h-8 border-2 border-teal-200 border-t-teal-600 rounded-full animate-spin"></div>
                </div>
              )}
              <Image
                src={item.img}
                alt={item.name}
                width={112}
                height={112}
                quality={60}
                loading="eager"
                priority  // Added: High priority for instant cache pull
                className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 ${loadingImages[item.img] ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'}`}
                onError={(e) => {
                  console.error(`Failed to load image: ${item.img}`, e);
                  const imgElement = e.currentTarget as HTMLImageElement;
                  if (imgElement) {
                    imgElement.src = '/images/doctors/akhil_remesh.webp';
                  }
                }}
              />
            </div>
            <p className="font-medium text-blue-950 text-sm text-center">{item.name}</p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section id="head-of-surgery" className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern - OPTIMIZED */}
            <div className="absolute inset-0">
              <Image
                src="/hod.webp"
                alt="Abstract geometric background"
                fill
                className="object-cover opacity-10"
                quality={40}
                priority={false} // Not priority since it's background
              />
            </div>

      <div className="container mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-1 bg-teal-500"></div>
                <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
                  Head of Department
                </span>
              </div>
              <h2 className="text-5xl font-bold text-blue-950 font-headline leading-tight">
                Message from our
                <span className="text-teal-600"> Head of Surgery</span>
              </h2>
            </div>
            
            {/* Quote Icon */}
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8 text-teal-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
              </svg>
            </div>
            
            {/* Testimony Text */}
            <blockquote className="text-lg leading-relaxed text-justify text-gray-700 italic">
              "As the Head of the Department of Surgery, I am proud of the commitment and dedication shown by our team in providing the highest standard of surgical care. Our department combines advanced clinical expertise with compassion, ensuring that every patient receives personalized treatment tailored to their needs. We place a strong emphasis on continuous learning, innovation, and research to keep pace with the latest developments in the field. It is our mission to not only treat patients but also to guide and support them through every step of their surgical journey. I am confident that with our skilled doctors, modern facilities, and patient-centered approach, we will continue to deliver excellence in surgical care."
            </blockquote>
            
            {/* Doctor Info + Button */}
            <div className="pt-6 border-t border-gray-200 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">AK</span>
                </div>
                <div>
                  <h4 className="font-bold text-blue-950 text-lg">
                    Dr. Ashwani Kumar
                  </h4>
                  <p className="text-teal-600 font-medium">
                    Prof & Head of Surgery Department
                  </p>
                  <p className="text-teal-600 font-medium">Unit 1 Incharge</p>
                  <p className="text-gray-600 text-sm">GMC Patiala</p>
                </div>
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-6 py-2 bg-teal-600 text-white font-semibold rounded-full shadow-md hover:bg-teal-700 transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
              >
                View Unit 1 Details
              </button>
            </div>
          </div>
          
          {/* Right Side - Optimized Hero Image */}
          <div className="relative">
            <div className="relative w-full h-[750px] rounded-2xl overflow-hidden shadow-2xl group">
              <Image
                src="/hod.webp"
                alt="Head of Surgery - Dr. Ashwani Kumar"
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                quality={75} // Good quality for hero image
                priority // Only priority image on the page
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
          
          {/* Hidden div for preloading all doctor images immediately with low quality */}
          <div className="hidden">
            {[unit1Data.incharge.img, ...unit1Data.associateProfessors.map(d => d.img), 
              ...unit1Data.seniorResidents.map(d => d.img), ...unit1Data.juniorResidents.map(d => d.img)].map((src, index) => (
              <Image
                key={index}
                src={src}
                alt="Preloaded doctor image"
                width={10}
                height={10}
                quality={10}
                priority={false}
                className="opacity-0"
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Popup Modal - OPTIMIZED FOR PERFORMANCE */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-xl max-w-6xl w-full max-h-[95vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 z-10 bg-white rounded-full p-1 shadow-md"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Add loading indicator */}
            {!modalImagesPreloaded && (
              <div className="absolute inset-0 bg-white/80 flex items-center justify-center z-20">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 border-4 border-teal-200 border-t-teal-600 rounded-full animate-spin mb-4"></div>
                  <p className="text-teal-600 font-medium">Loading doctor profiles...</p>
                </div>
              </div>
            )}
            
            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-bold text-blue-950 mb-6 text-center">
                Unit 1
              </h3>
              <div className="space-y-10">
                {/* Incharge - Optimized */}
                <div className="text-center">
                  <h4 className="text-xl font-semibold text-teal-600 mb-6">Unit Incharge</h4>
                  <div className="flex justify-center">
                    <div className="flex flex-col items-center">
                      <div className="w-40 h-40 rounded-xl overflow-hidden shadow-md mb-4 group relative">
                        {/* Show spinner if image is still loading */}
                        {loadingImages[unit1Data.incharge.img] && (
                          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                            <div className="w-10 h-10 border-2 border-teal-200 border-t-teal-600 rounded-full animate-spin"></div>
                          </div>
                        )}
                        <Image 
                          src={unit1Data.incharge.img} // Direct path
                          alt={unit1Data.incharge.name} 
                          width={160}  // Matches container size (40 * 4 = 160)
                          height={160} // Matches container size
                          quality={70} // Increased quality for incharge since WebP is more efficient
                          loading="eager" // Eager loading since we're in the modal
                          className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 ${loadingImages[unit1Data.incharge.img] ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'}`}
                          onError={(e) => {
                            console.error(`Failed to load incharge image: ${unit1Data.incharge.img}`, e);
                            // Fallback to an existing doctor image since placeholder doesn't exist
                            const imgElement = e.currentTarget as HTMLImageElement;
                            if (imgElement) {
                              imgElement.src = '/images/doctors/akhil_remesh.webp';
                            }
                          }}
                        />
                      </div>
                      <p className="font-bold text-blue-950 text-lg">{unit1Data.incharge.name}</p>
                      <p className="text-gray-600">{unit1Data.incharge.title}</p>
                    </div>
                  </div>
                </div>
                
                {/* Associate Professors - Optimized */}
                {unit1Data.associateProfessors.length > 0 && (
                  <div>
                    <h4 className="text-xl font-semibold text-teal-600 mb-6 text-center">Associate Professors</h4> 
                    {renderModalListWithImages(unit1Data.associateProfessors, true)}
                  </div>
                )}
                
                {/* Senior Residents - Optimized */}
                {unit1Data.seniorResidents.length > 0 && (
                  <div>
                    <h4 className="text-xl font-semibold text-teal-600 mb-6 text-center">Senior Residents</h4>
                    {renderModalListWithImages(unit1Data.seniorResidents, true)}
                  </div>
                )}
                
                {/* Junior Residents - Optimized */}
                {unit1Data.juniorResidents.length > 0 && (
                  <div>
                    <h4 className="text-xl font-semibold text-teal-600 mb-6 text-center">Junior Residents</h4>
                    {renderModalListWithImages(unit1Data.juniorResidents, true)}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}