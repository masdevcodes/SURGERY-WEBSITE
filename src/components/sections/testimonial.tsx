import Image from 'next/image';

export function Testimonial() {
  return (
    <section id="testimonial" className="relative h-[615px] bg-blue-950">
      <Image src="https://placehold.co/512x1302" alt="Abstract background" fill className="object-cover opacity-10" data-ai-hint="abstract texture" />
      <div className="container mx-auto h-full flex items-center justify-center text-white text-center">
        <div>
          <div className="w-11 h-8 bg-white mx-auto mb-8"></div>
          <blockquote className="text-3xl font-serif leading-relaxed max-w-4xl mx-auto">
            All of the personnel I came in contact with, went above and beyond to help me with my medical problems. I am now enjoying a more active lifestyle and no longer feel the discomfort in chest.
          </blockquote>
          <footer className="mt-8">
            <p className="text-base font-semibold">Rory Bowers, 67</p>
            <p className="text-sm font-medium">— Bypass surgery</p>
          </footer>
        </div>
      </div>
    </section>
  );
}
