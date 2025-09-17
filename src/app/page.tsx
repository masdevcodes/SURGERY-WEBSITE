import dynamic from 'next/dynamic';
import { Header } from '@/components/sections/header';
import { Hero } from '@/components/sections/hero';
import { InfoCards } from '@/components/sections/info-cards';
import { About } from '@/components/sections/about';
import { MedicalSpecialties } from '@/components/sections/medical-specialties';
import { Providers } from '@/components/sections/providers';
import { Services } from '@/components/sections/services';
import { History } from '@/components/sections/history';
import { Testimonial } from '@/components/sections/testimonial';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/sections/footer';

const Events = dynamic(() => import('@/components/sections/events').then(mod => ({ default: mod.Events })), {
  ssr: false
});

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
        <History />
        <Events />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
