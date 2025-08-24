import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const facilities = [
  {
    title: 'State-of-the-Art Operating Theaters',
    image: 'https://placehold.co/600x400.png',
    hint: 'operating room',
  },
  {
    title: 'Advanced Laparoscopy Suite',
    image: 'https://placehold.co/600x400.png',
    hint: 'medical equipment',
  },
  {
    title: 'Post-Operative Care Unit',
    image: 'https://placehold.co/600x400.png',
    hint: 'hospital ward',
  },
  {
    title: 'Surgical Intensive Care Unit (SICU)',
    image: 'https://placehold.co/600x400.png',
    hint: 'intensive care',
  },
  {
    title: 'Modernized General Wards',
    image: 'https://placehold.co/600x400.png',
    hint: 'hospital interior',
  },
];

export function TourSection() {
  return (
    <section id="tour" className="bg-background">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">Virtual Tour of Our Facilities</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Explore our modern infrastructure and advanced equipment designed for patient safety and comfort.
          </p>
        </div>
        <Carousel className="w-full max-w-4xl mx-auto" opts={{ loop: true }}>
          <CarouselContent>
            {facilities.map((facility, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="overflow-hidden">
                    <CardContent className="relative flex aspect-video items-center justify-center p-0">
                      <Image
                        src={facility.image}
                        alt={facility.title}
                        data-ai-hint={facility.hint}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40" />
                      <h3 className="relative text-2xl font-bold text-white text-center font-headline p-4">
                        {facility.title}
                      </h3>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
