'use client';

import Image from 'next/image';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, MouseEvent, useEffect } from 'react';

export function InfoCards() {
  const [modalContent, setModalContent] = useState<string | null>(null);
  const [stomaImageIndex, setStomaImageIndex] = useState(0);
  const [breastImageIndex, setBreastImageIndex] = useState(0);
  const [sliderImageIndex, setSliderImageIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState({
    stomaPopup: false,
    breastPopup: false
  });

  // Sample image arrays - replace with your actual image paths
  const stomaImages = [
    '/images/infocard/stomay.webp',
    '/images/infocard/sto2.webp',
    '/images/infocard/sto3.webp',
    '/images/infocard/stom5.webp',
  ];
  
  const breastImages = [
    '/images/infocard/brep.webp',
    '/images/infocard/bre5.webp',
    '/images/infocard/bre1.webp',
  ];

  const sliderImages = [
    '/images/infocard/opd/opd1.jpg',
    '/images/infocard/opd/opd3.jpg',
    '/images/infocard/opd/opd2.jpg',
    '/images/infocard/opd/opd4.jpg',
  ];

  // Define the desired order of clinics
  const clinicOrder = ['breast','stoma','slider'];

  function openModal(key: string) {
    setModalContent(key);
  }

  function closeModal() {
    setModalContent(null);
  }

  function stopPropagation(e: MouseEvent<HTMLDivElement>) {
    e.stopPropagation();
  }

  // Preload modal images when component mounts
  useEffect(() => {
    const preloadImages = async () => {
      try {
        // Preload modal banner images
        const stomaImg = new Image();
        stomaImg.src = '/images/infocard/popup/stomaypopup.jpg';
        
        const breastImg = new Image();
        breastImg.src = '/images/infocard/popup/breppopup.jpg';

        stomaImg.onload = () => {
          setImagesLoaded(prev => ({ ...prev, stomaPopup: true }));
        };
        
        breastImg.onload = () => {
          setImagesLoaded(prev => ({ ...prev, breastPopup: true }));
        };
      } catch (error) {
        console.log('Image preloading error:', error);
      }
    };

    preloadImages();
  }, []);

  // Set up auto-changing image sliders
  useEffect(() => {
    const stomaInterval = setInterval(() => {
      setStomaImageIndex((prevIndex) => 
        prevIndex === stomaImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    const breastInterval = setInterval(() => {
      setBreastImageIndex((prevIndex) => 
        prevIndex === breastImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3500);

    const sliderInterval = setInterval(() => {
      setSliderImageIndex((prevIndex) => 
        prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3200);

    return () => {
      clearInterval(stomaInterval);
      clearInterval(breastInterval);
      clearInterval(sliderInterval);
    };
  }, [stomaImages.length, breastImages.length, sliderImages.length]);

  // Function to manually change slider image
  const changeSliderImage = (direction: 'next' | 'prev') => {
    if (direction === 'next') {
      setSliderImageIndex((prevIndex) => 
        prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
      );
    } else {
      setSliderImageIndex((prevIndex) => 
        prevIndex === 0 ? sliderImages.length - 1 : prevIndex - 1
      );
    }
  };

  // ✅ Optimized Modal Component
  const Modal = ({
    children,
    onClose,
  }: {
    children: React.ReactNode;
    onClose: () => void;
  }) => (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg w-full max-w-5xl max-h-[90vh] overflow-y-auto p-6 md:p-8 relative"
        onClick={stopPropagation}
      >
        <button
          type="button"
          aria-label="Close modal"
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 font-bold text-2xl z-10 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md"
          onClick={onClose}
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );

  // ✅ Optimized Image Loading Component
  const OptimizedImage = ({ 
    src, 
    alt, 
    className,
    priority = false 
  }: { 
    src: string; 
    alt: string; 
    className: string;
    priority?: boolean;
  }) => (
    <div className={`relative ${className}`}>
      {/* Loading skeleton */}
      {!imagesLoaded.stomaPopup && !imagesLoaded.breastPopup && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg flex items-center justify-center">
          <div className="text-gray-400">Loading...</div>
        </div>
      )}
      
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover rounded-lg"
        priority={priority}
        quality={65} // Reduced for faster loading
        sizes="(max-width: 768px) 100vw, 80vw"
        onLoad={() => console.log(`${alt} loaded successfully`)}
        onError={(e) => {
          console.error(`Error loading image: ${src}`);
          // Fallback to a placeholder or lower quality version
          e.currentTarget.src = '/images/placeholder.jpg';
        }}
      />
    </div>
  );

  function getModalContent(key: string) {
    const modalData = {
      stoma: {
        banner: '/images/infocard/popup/stomaypopup.jpg',
        title: 'Stoma Clinic Details',
        content: `The Stoma Clinic at GMC Patiala functions as a dedicated service within the Department of General Surgery...`
      },
      breast: {
        banner: '/images/infocard/popup/breppopup.jpg',
        title: 'Breast Clinic Details',
        content: `<p>
                The Breast Clinic at GMC Patiala, under the Department of General Surgery, is a dedicated service aimed at providing comprehensive care for patients with breast diseases. It caters to a wide spectrum of conditions including benign breast disorders, infections, fibroadenomas, and breast malignancies. A strong emphasis is placed on early detection of breast cancer through clinical breast examination, mammography, ultrasound, and guided biopsies.
              </p>
              <p>
                The clinic provides a structured diagnostic pathway ensuring accurate evaluation and timely intervention. Patients receive individualized treatment plans, whether surgical, medical, or combined, based on their diagnosis and stage of disease. Counselling sessions are conducted to help patients understand their condition, available treatment options, and expected outcomes. Preventive strategies such as breast self-examination training and awareness programs are also integrated into the clinic's routine.
              </p>
              <p>
                Postoperative follow-up and rehabilitation, including wound care and lymphedema management, are actively supported. The clinic also provides psychological and emotional support, recognizing the significant impact breast diseases can have on self-image and quality of life. By combining advanced diagnostic tools, multidisciplinary treatment, and patient-focused counselling, the Breast Clinic at GMC Patiala strives to deliver holistic care with compassion and excellence.
              </p>`
      }
    };

    const data = modalData[key as keyof typeof modalData];
    if (!data) return null;

    return (
      <div className="flex flex-col justify-center items-center text-center">
        {/* Optimized Banner Image */}
        <div className="w-full mb-6 h-48 md:h-64">
          <OptimizedImage
            src={data.banner}
            alt={`${data.title} Banner`}
            className="w-full h-full"
            priority={modalContent === key}
          />
        </div>

        <h2 className="text-2xl md:text-3xl font-bold mb-6">{data.title}</h2>
        <div className="text-zinc-700 leading-relaxed max-w-4xl text-justify space-y-4">
          {data.content.split('\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    );
  }

  // Clinic card data
  const clinicCards = {
    stoma: {
      title: "Stoma Clinic",
      description: "Our Stoma Clinic offers expert care for patients with colostomies, ileostomies, and urostomies...",
      images: stomaImages,
      imageIndex: stomaImageIndex,
      setImageIndex: setStomaImageIndex
    },
    breast: {
      title: "Breast Clinic",
      description: "Our Breast Clinic provides specialized care for women presenting with breast-related complaints...",
      images: breastImages,
      imageIndex: breastImageIndex,
      setImageIndex: setBreastImageIndex
    },
    slider: {
      title: "",
      description: "",
      images: sliderImages,
      imageIndex: sliderImageIndex,
      setImageIndex: setSliderImageIndex
    }
  };

  // Render a single clinic card
  const renderClinicCard = (key: string) => {
    const clinic = clinicCards[key as keyof typeof clinicCards];
    
    if (key === 'slider') {
      return (
        <div key={key} className="rounded-lg shadow-lg overflow-hidden flex flex-col h-full group hover:shadow-xl transition-all duration-500 ease-in-out">
          <div className="relative overflow-hidden flex-grow">
            <div className="w-full h-full relative">
              <Image
                src={clinic.images[clinic.imageIndex]}
                alt={`Medical facility image ${clinic.imageIndex + 1}`}
                fill
                className="object-cover"
                quality={80}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                loading="eager"
              />
              
              <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{clinic.title}</h3>
                <p className="text-sm mb-4 max-w-md">{clinic.description}</p>
                
                <div className="text-xs opacity-80 mb-2">
                  Image {clinic.imageIndex + 1} of {clinic.images.length}
                </div>
              </div>
              
              <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
                {clinic.images.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === clinic.imageIndex ? 'bg-white scale-125' : 'bg-white/50'
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      clinic.setImageIndex(index);
                    }}
                    aria-label={`View image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }
    
    return (
      <div key={key} className="rounded-lg shadow-lg overflow-hidden flex flex-col h-full group hover:shadow-xl transition-all duration-500 ease-in-out transform hover:-translate-y-1">
        <div className="relative overflow-hidden">
          <div className="w-full h-64 relative overflow-hidden">
            <Image
              src={clinic.images[clinic.imageIndex]}
              alt={`${clinic.title} image`}
              fill
              className="object-cover transition-all duration-700 ease-in-out group-hover:scale-110"
              quality={80}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              loading="eager"
            />
          </div>
          
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
            {clinic.images.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === clinic.imageIndex ? 'bg-white scale-125' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
        
        <div className="p-6 md:p-8 bg-white flex-grow flex flex-col justify-between text-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold font-body text-blue-950 mb-4 group-hover:text-teal-500 transition-colors duration-500">
              {clinic.title}
            </h3>
            <p className="text-zinc-500 leading-relaxed mb-6 max-w-md mx-auto text-sm md:text-base">
              {clinic.description}
            </p>
          </div>
          <button
            onClick={() => openModal(key)}
            className="font-bold text-teal-500 flex items-center gap-2 justify-center hover:text-teal-600 transition-colors duration-300 mx-auto"
          >
            READ MORE <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      <section
        id="info"
        className="pb-24 bg-gradient-to-b from-white via-white/0 to-white relative"
      >
        {/* Background Image */}
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/111.png"  
            alt="Abstract background"
            fill 
            className="object-cover"
            quality={50}
            priority
          /> 
        </div>

        {/* Container */}
        <div className="container mx-auto relative z-10 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
            {clinicOrder.map(key => renderClinicCard(key))}
          </div>
        </div>

        {/* Modal */}
        {modalContent && (
          <Modal onClose={closeModal}>
            {getModalContent(modalContent)}
          </Modal>
        )}
      </section>
    </>
  );
}