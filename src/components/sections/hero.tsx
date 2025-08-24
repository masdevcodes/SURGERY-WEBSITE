import Image from 'next/image';
import { Phone, ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="h-[939px] relative bg-zinc-900 text-white">
      <div className="w-[1425px] h-[939.40px] left-0 top-0 absolute overflow-hidden">
        <Image
          className="w-[1425px] h-[939.40px] left-0 top-0 absolute"
          src="https://placehold.co/1425x939"
          alt="Clinic background"
          width={1425}
          height={939}
          data-ai-hint="clinic interior"
        />
      </div>
      <div className="w-[1425px] h-[939.40px] left-0 top-0 absolute bg-gradient-to-l from-white via-white/5 to-black/0" />
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center h-full">
        <div className="max-w-4xl mt-32">
          <div className="w-72 h-16 relative mb-8">
            <Image
              src="https://placehold.co/280x65"
              alt="Cliniq Logo"
              width={280}
              height={65}
              data-ai-hint="logo"
            />
          </div>
          <h1 className="text-8xl font-bold font-headline leading-tight">
            Our expertise
          </h1>
          <h1 className="text-8xl font-bold font-headline leading-tight">
            at your service
          </h1>
        </div>
        <div className="absolute right-20 top-1/4">
          <Image
            src="https://placehold.co/400x500"
            alt="Doctor"
            width={400}
            height={500}
            className="rounded-lg"
            data-ai-hint="doctor portrait"
          />
        </div>

        <div className="absolute bottom-16 left-4 right-4 lg:left-8 lg:right-8 xl:left-28 xl:right-28">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 max-w-7xl mx-auto">
            <a href="#providers" className="group bg-white/20 p-6 rounded-t-lg md:rounded-tr-none md:rounded-l-lg shadow-lg border-t border-white/30 backdrop-blur-sm relative overflow-hidden">
              <h3 className="text-2xl font-bold font-body leading-loose">
                Our Service
              </h3>
              <h3 className="text-2xl font-bold font-body leading-loose">
                Providers
              </h3>
              <div className="w-36 h-0.5 bg-white mt-2" />
              <div className="w-10 h-10 absolute right-4 top-4 bg-white/10 rounded-full flex items-center justify-center">
                <ArrowRight className="w-5 h-5 text-white" />
              </div>
            </a>

            <a href="#appointment" className="group bg-white/20 p-6 shadow-lg border-t border-l md:border-l-0 border-white/30 backdrop-blur-sm relative overflow-hidden">
              <h3 className="text-2xl font-bold font-body leading-loose">
                Book an
              </h3>
              <h3 className="text-2xl font-bold font-body leading-loose">
                Appointment
              </h3>
              <div className="w-40 h-0.5 bg-white mt-2" />
              <div className="w-10 h-10 absolute right-4 top-4 bg-white/10 rounded-full flex items-center justify-center">
                <ArrowRight className="w-5 h-5 text-white" />
              </div>
            </a>

            <a href="#contact" className="group bg-white/20 p-6 rounded-b-lg md:rounded-bl-none md:rounded-r-lg shadow-lg border-t border-l border-white/30 backdrop-blur-sm relative overflow-hidden">
              <h3 className="text-2xl font-bold font-body leading-loose">
                Have an Emergency?
              </h3>
              <div className="w-60 h-0.5 bg-white mt-2 mb-4" />
              <div className="flex items-center gap-4">
                <Phone className="h-8 w-8 text-white" />
                <div>
                  <p className="text-xs font-bold font-body tracking-wider">
                    EMERGENCY LINE
                  </p>
                  <p className="text-xl font-bold font-body">1-800-900</p>
                </div>
              </div>
              <div className="w-10 h-10 absolute right-4 top-4 bg-white/10 rounded-full flex items-center justify-center">
                <ArrowRight className="w-5 h-5 text-white" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
