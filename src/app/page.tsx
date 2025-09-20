import { Header } from '@/components/sections/header';
import { Hero } from '@/components/sections/hero';
import { Intro } from '@/components/sections/intro';

import { About } from '@/components/sections/about';
import { MedicalSpecialties } from '@/components/sections/medical-specialties';
import { Providers } from '@/components/sections/providers';
import { Services } from '@/components/sections/services';
import { SuperSpeciality } from '@/components/sections/super-speciality';
import { Trauma } from '@/components/sections/trauma';
import { Achievements } from '@/components/sections/achievement';
import { Testimonial } from '@/components/sections/testimonial';
import { InfoCards } from '@/components/sections/info-cards';
import { History } from '@/components/sections/history';
import { Events } from '@/components/sections/events';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/sections/footer';

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Intro />
        <About />
        <MedicalSpecialties />
        <Providers /> 
        <Services />
        <InfoCards />
        <SuperSpeciality />   
        <Trauma/>
        <History />
        <Achievements />
        <Events />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
