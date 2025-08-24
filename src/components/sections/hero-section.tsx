import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section id="home" className="relative h-[80vh] min-h-[500px] w-full">
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="Surgical team performing a procedure"
        data-ai-hint="hospital building"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20" />
      <div className="relative container mx-auto flex h-full items-center justify-start px-4">
        <div className="max-w-2xl text-white">
          <h1 className="font-headline text-4xl font-bold leading-tight md:text-6xl">
            Excellence in Surgical Care and Innovation
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200">
            Welcome to the Department of Surgery at Government Medical College, Patiala. We are dedicated to providing compassionate care, pioneering research, and training the next generation of surgeons.
          </p>
          <div className="mt-8 flex gap-4">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg">
              <a href="#appointments">Book Appointment</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white bg-transparent hover:bg-white hover:text-black">
              <a href="#services">Our Services</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
