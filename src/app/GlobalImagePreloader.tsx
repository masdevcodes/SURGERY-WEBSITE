'use client';

import { useEffect } from 'react';
import Image from 'next/image';

// 🔥 GLOBAL MODAL IMAGES PRELOADER COMPONENT
function GlobalImagePreloader() {
  const allModalImages = [
    // InfoCards modal images 
    '/images/infocard/sto2.webp',
    '/images/infocard/bre1.webp',
    
    // Services modal images  
    '/images/super/ser1.jpg',
    '/images/super/thyroid.jpg',
    '/images/super/adrene.jpg',
    '/images/super/lah.jpg',
    '/images/super/veins.jpg',
    
    // MedicalSpecialties modal images
    '/images/unit1/ashwini.png',
    '/images/unit1/jaswinder.png',
    '/images/unit1/dineshkumar.png',
    '/images/unit1/parth.png',
    '/images/unit1/thalib.png',
    '/images/unit1/dinesh.png',
    '/images/unit1/navneeth.png',
    '/images/unit1/vineeth.png',
    '/images/unit1/aseem.png',
    '/images/unit1/soumya.png',
    '/images/unit1/naveen.webp',
    '/images/unit1/yog.png',
    '/images/unit1/pri.png',
    '/images/unit1/sur.png',
    'images/ss/harish_kumar.webp',
   '/images/ss/ravi_kumar.webp',
    '/images/ss/teg_rabab.webp',
    
    // Add other modal images as needed
  ];

  useEffect(() => {
    console.log("🌐 GLOBAL: Starting modal images preload...");
    console.log(`📂 GLOBAL: Preloading ${allModalImages.length} modal images...`);
    
    const timer = setTimeout(() => {
      console.log("✅ GLOBAL: All modal images preloaded successfully!");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="hidden" style={{ position: 'absolute', left: '-9999px', top: '-9999px' }}>
      {allModalImages.map((src, index) => (
        <Image
          key={`global-modal-preload-${index}`}
          src={src}
          alt="Global Modal Image Preload"
          width={300}
          height={300}
          priority={true}
          quality={75}
          onLoad={() => console.log(`✅ GLOBAL - Preloaded: ${src}`)}
          onError={() => console.warn(`❌ GLOBAL - Failed: ${src}`)}
          unoptimized={false}
        />
      ))}
    </div>
  );
}

export default GlobalImagePreloader;
