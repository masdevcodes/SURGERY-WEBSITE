import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Global Image Preloader Function
export function getAllWebsiteImages(): string[] {
  const allImages: string[] = [];

  // Header images
  allImages.push('/GMClogo.webp');

  // Hero images
  allImages.push('/hero1.avif');

  // Background images
  allImages.push('/111.png');
  allImages.push('/111 copy copy.png');
  allImages.push('/gmcll.webp');
  allImages.push('/gmc1.webp');
  allImages.push('/gmc3.webp');
  allImages.push('/gmcll.jpg');

  // About section images
  allImages.push('/images/about/kun.webp');

  // Services section images
  allImages.push('/images/super/ser1.webp');
  allImages.push('/images/super/thyroid.webp');
  allImages.push('/images/super/adrene.webp');
  allImages.push('/images/super/lah.webp');
  allImages.push('/images/super/veins.webp');
  allImages.push('/images/super/service11.webp');
  allImages.push('/images/super/service12.webp');
  allImages.push('/images/super/service13.webp');
  allImages.push('/images/placeholder.jpg');

  // Info cards images
  allImages.push('/images/infocard/stomay.webp');
  allImages.push('/images/infocard/sto2.webp');
  allImages.push('/images/infocard/sto3.webp');
  allImages.push('/images/infocard/stom5.webp');
  allImages.push('/images/infocard/brep.webp');
  allImages.push('/images/infocard/bre5.webp');
  allImages.push('/images/infocard/bre1.webp');
  allImages.push('/images/infocard/opd/opd1.jpg');
  allImages.push('/images/infocard/opd/opd2.jpg');
  allImages.push('/images/infocard/opd/opd3.jpg');
  allImages.push('/images/infocard/opd/opd4.jpg');

  // Medical specialties images
  allImages.push('/hod.webp');
  allImages.push('/images/unit1/ashwini.png');
  allImages.push('/images/unit1/jaswinder.png');
  allImages.push('/images/unit1/dineshkumar.png');
  allImages.push('/images/unit1/parth.png');
  allImages.push('/images/unit1/thalib.png');
  allImages.push('/images/unit1/dinesh.png');
  allImages.push('/images/unit1/navneeth.png');
  allImages.push('/images/unit1/vineeth.png');
  allImages.push('/images/unit1/aseem.png');
  allImages.push('/images/unit1/soumya.png');
  allImages.push('/images/unit1/naveen.webp');
  allImages.push('/images/unit1/yog.png');
  allImages.push('/images/unit1/pri.png');
  allImages.push('/images/unit1/sur.png');

  // Super speciality images
  allImages.push('/images/pediatric-surgery.jpg');
  allImages.push('/images/ctvs.png');
  allImages.push('/images/urology.png');
  allImages.push('/images/plastic-surgery.png');
  allImages.push('/images/surgical-oncology.jpg');
  allImages.push('/images/ss/ravi_kumar.webp');
  allImages.push('/images/ss/teg_rabab.webp');
  allImages.push('/images/ss/harish_kumar.webp');
  allImages.push('/images/ss/ravi_kumar.jpg');
  allImages.push('/images/ss/teg_rabab.jpg');
  allImages.push('/images/ss/harish_kumar.jpg');

  // Providers images
  allImages.push('/images/ho.png');
  allImages.push('/images/h.srekhi.jpg');
  allImages.push('/images/provider3.jpg');
  allImages.push('/images/sanjeev_gupta.jpg');
  allImages.push('/images/provider5.jpg');
  allImages.push('/images/doctors/vikas_goyal.jpg');
  allImages.push('/images/dinesh.png');
  allImages.push('/images/navneeth.png');
  allImages.push('/images/vineeth.png');
  allImages.push('/images/aseem.png');
  allImages.push('/images/soumya.png');
  allImages.push('/images/naveen.png');
  allImages.push('/images/yog.png');
  allImages.push('/images/pri.png');
  allImages.push('/images/sur.png');

  // Trauma images
  allImages.push('/images/trauma/trauma1.webp');
  allImages.push('/images/trauma/emerup2.webp');
  allImages.push('/images/trauma/z.webp');

  // Events images
  allImages.push('/images/event/spark/sp4.jpg');
  allImages.push('/images/event/spark/sp1.jpg');
  allImages.push('/images/event/spark/sp.jpg');
  allImages.push('/images/event/spark/sp2.jpg');
  allImages.push('/images/event/spark/sp3.jpg');

  // Remove duplicates and return
  return [...new Set(allImages)];
}

// Preload images function
export function preloadImages(imagePaths: string[]): void {
  if (typeof window === 'undefined') return; // Skip on server-side

  imagePaths.forEach(imagePath => {
    const img = new Image();
    img.src = imagePath;
    // Optional: Add error handling
    img.onerror = () => {
      console.warn(`Failed to preload image: ${imagePath}`);
    };
  });
}

// Global preloader function that can be called from anywhere
export function preloadAllWebsiteImages(): void {
  const allImages = getAllWebsiteImages();
  preloadImages(allImages);
}
