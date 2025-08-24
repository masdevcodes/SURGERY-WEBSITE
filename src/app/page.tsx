import Image from 'next/image';
import { Phone, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-zinc-900 text-white font-sans">
      <div className="relative w-full h-screen">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://placehold.co/1425x939"
            alt="Clinic background"
            fill
            className="object-cover"
            data-ai-hint="clinic interior"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-l from-white via-white/5 to-black/0" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center h-full">
          <div className="max-w-4xl">
            <div className="w-72 h-16 relative mb-8">
              <Image
                src="https://placehold.co/280x65"
                alt="Cliniq Logo"
                width={280}
                height={65}
                data-ai-hint="logo"
              />
            </div>
            <h1 className="text-6xl md:text-8xl font-bold font-headline leading-tight">
              Our expertise
            </h1>
            <h1 className="text-6xl md:text-8xl font-bold font-headline leading-tight">
              at your service
            </h1>
          </div>

          <div className="absolute bottom-16 left-4 right-4 lg:left-8 lg:right-8 xl:left-28 xl:right-28">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 max-w-7xl mx-auto">
              {/* Service Providers */}
              <div className="group bg-white/20 p-6 rounded-t-lg md:rounded-tr-none md:rounded-l-lg shadow-lg border-t border-white/30 backdrop-blur-sm relative overflow-hidden">
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-2xl font-bold font-body leading-loose">Our Service</h3>
                    <h3 className="text-2xl font-bold font-body leading-loose">Providers</h3>
                    <div className="w-36 h-0.5 bg-white mt-2" />
                  </div>
                  <div className="w-10 h-10 absolute right-4 top-4 bg-white/10 rounded-full flex items-center justify-center">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>

              {/* Book an Appointment */}
              <div className="group bg-white/20 p-6 shadow-lg border-t border-l md:border-l-0 border-white/30 backdrop-blur-sm relative overflow-hidden">
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-2xl font-bold font-body leading-loose">Book an</h3>
                    <h3 className="text-2xl font-bold font-body leading-loose">Appointment</h3>
                    <div className="w-40 h-0.5 bg-white mt-2" />
                  </div>
                  <div className="w-10 h-10 absolute right-4 top-4 bg-white/10 rounded-full flex items-center justify-center">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>

              {/* Have an Emergency? */}
              <div className="group bg-white/20 p-6 rounded-b-lg md:rounded-bl-none md:rounded-r-lg shadow-lg border-t border-l border-white/30 backdrop-blur-sm relative overflow-hidden">
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-2xl font-bold font-body leading-loose">Have an Emergency?</h3>
                    <div className="w-60 h-0.5 bg-white mt-2 mb-4" />
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 flex items-center justify-center">
                        <Phone className="h-8 w-8 text-white"/>
                    </div>
                    <div>
                        <p className="text-xs font-bold font-body tracking-wider">EMERGENCY LINE</p>
                        <p className="text-xl font-bold font-body">1-800-900</p>
                    </div>
                  </div>
                   <div className="w-10 h-10 absolute right-4 top-4 bg-white/10 rounded-full flex items-center justify-center">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
