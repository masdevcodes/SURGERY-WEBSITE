import Image from "next/image";
import { Phone, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="h-[939px] relative bg-zinc-900 text-white"
      style={{
        transform: "translateY(-10%)", // always scrolled 10%
      }}
    >
      {/* Background image */}
      <div className="w-full h-full absolute overflow-hidden">
        <Image
          className="w-full h-full object-cover"
          src="/hero1.avif"
          alt="Surgeons in an operating room"
          fill
          priority
          quality={85}
          sizes="100vw"
          data-ai-hint="surgeons operating room"
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-l from-white via-white/5 to-black/0" />

      {/* Heading */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center h-full">
        <div className="max-w-4xl mt-32">
          <h1 className="text-8xl font-bold font-headline leading-tight">
            Our expertise
          </h1>
          <h1 className="text-8xl font-bold font-headline leading-tight">
            at your service
          </h1>
          <h1 className="text-1.5xl font-bold font-headline leading-tight">
            DEPARTMENT OF GENERAL & MINIMAL ACCESS SURGERY, GMC PATIALA
          </h1>
        </div>
      </div>

      {/* Bottom three boxes */}
      <div className="absolute bottom-16 left-4 right-4 lg:left-8 lg:right-8 xl:left-28 xl:right-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 max-w-7xl mx-auto">

          {/* Box 1 - Precision */}
          <div
            className="group cursor-pointer bg-teal-500 from-blue-500/30 to-purple-500/30 p-6 
                       rounded-t-lg md:rounded-tr-none md:rounded-l-lg shadow-lg 
                       border-t border-white/30 relative overflow-hidden z-10 
                       transition-all duration-300 ease-in-out
                       hover:scale-105 hover:shadow-2xl hover:border-white 
                       hover:from-blue-500/50 hover:to-purple-500/50
                       active:scale-95 active:shadow-inner"
          >
            <h3 className="text-2xl font-bold font-body leading-loose">PRECISION</h3>
            <div className="w-36 h-0.5 bg-white mt-2" />
          </div>

          {/* Box 2 - Compassion */}
          <div
            className="group cursor-pointer bg-teal-500 from-blue-500/30 to-purple-500/30 p-6 
                       shadow-lg border-t border-l md:border-l-0 border-white/30 
                       relative overflow-hidden z-10 
                       transition-all duration-300 ease-in-out
                       hover:scale-105 hover:shadow-2xl hover:border-white 
                       hover:from-blue-500/50 hover:to-purple-500/50
                       active:scale-95 active:shadow-inner"
          >
            <h3 className="text-2xl font-bold font-body leading-loose">COMPASSION</h3>
            <div className="w-40 h-0.5 bg-white mt-2" />
          </div>

          {/* Box 3 - Excellence */}
          <div
            className="group cursor-pointer bg-teal-500 from-blue-500/30 to-purple-500/30 p-6 
                       rounded-b-lg md:rounded-bl-none md:rounded-r-lg shadow-lg 
                       border-t border-l border-white/30 relative overflow-hidden z-10 
                       transition-all duration-300 ease-in-out
                       hover:scale-105 hover:shadow-2xl hover:border-white 
                       hover:from-blue-500/50 hover:to-purple-500/50
                       active:scale-95 active:shadow-inner"
          >
            <h3 className="text-2xl font-bold font-body leading-loose">EXCELLENCE</h3>
            <div className="w-40 h-0.5 bg-white mt-2 mb-4" />
          </div>
        </div>
      </div>
    </section>
  );
}
