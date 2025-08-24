import { HeroSection } from '@/components/sections/hero-section';
import { FacultySection } from '@/components/sections/faculty-section';
import { ServicesSection } from '@/components/sections/services-section';
import { ResearchSection } from '@/components/sections/research-section';
import { TourSection } from '@/components/sections/tour-section';
import { AiSummarizerSection } from '@/components/sections/ai-summarizer-section';
import { AppointmentSection } from '@/components/sections/appointment-section';
import { AppHeader } from '@/components/app-header';
import { AppFooter } from '@/components/app-footer';

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <AppHeader />
      <main className="flex-1">
        <HeroSection />
        <FacultySection />
        <ServicesSection />
        <ResearchSection />
        <TourSection />
        <AiSummarizerSection />
        <AppointmentSection />
      </main>
      <AppFooter />
    </div>
  );
}
