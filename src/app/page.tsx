import { Header } from '@/components/sections/header';
import { Hero } from '@/components/sections/hero';
import { InfoCards } from '@/components/sections/info-cards';
import { About } from '@/components/sections/about';
import { GuidedByPatients } from '@/components/sections/guided-by-patients';
import { MedicalSpecialties } from '@/components/sections/medical-specialties';
import { Providers } from '@/components/sections/providers';
import { Services } from '@/components/sections/services';
import { Testimonial } from '@/components/sections/testimonial';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/sections/footer';

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <InfoCards />
        <About />
        <MedicalSpecialties />
        <Providers />
        <Services />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
