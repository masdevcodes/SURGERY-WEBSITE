import { Header } from '@/components/sections/header';
import { Hero } from '@/components/sections/hero';
import { InfoCards } from '@/components/sections/info-cards';
import { About } from '@/components/sections/about';
import { MedicalSpecialties } from '@/components/sections/medical-specialties';
import { Providers } from '@/components/sections/providers';
import { History } from '@/components/sections/history';
import { Services } from '@/components/sections/services';
import { SuperSpeciality } from '@/components/sections/super-speciality';

import { Testimonial } from '@/components/sections/testimonial';
import { Events } from '@/components/sections/events';
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
         <History />
        <Services />
        <SuperSpeciality />
       
        <Events />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
