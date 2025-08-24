import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export function Services() {
  return (
    <section id="services" className="py-24 bg-white relative">
      <Image src="https://placehold.co/1425x1302" alt="Medical equipment" fill className="object-cover" data-ai-hint="medical equipment" />
      <div className="absolute inset-0 bg-white/80" />
      <div className="container mx-auto relative">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-6xl font-bold text-blue-950 font-body">Our Services</h2>
            <p className="text-xl font-semibold text-blue-950">Delivering world class medical care</p>
          </div>
          <button className="border border-teal-500 bg-white text-blue-950 font-bold text-sm px-6 py-4 rounded-md flex items-center gap-2">
            Full List of Services
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Service Card 1 */}
          <div className="space-y-3">
            <div className="w-16 h-20 bg-teal-500 rounded-full flex items-center justify-center">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M39.6398 20.28C39.6398 9.324 30.6758 0.360001 19.7198 0.360001C8.76384 0.360001 -0.199849 9.324 -0.199849 20.28C-0.199849 31.236 8.76384 40.2 19.7198 40.2C30.6758 40.2 39.6398 31.236 39.6398 20.28Z" fill="white" /></svg>
            </div>
            <h4 className="text-blue-950 font-bold font-body text-base">COVID-19 Services</h4>
            <p className="text-blue-950 text-sm">Integer vel nisl varius, finibus orci et, congue sapien fusce.</p>
            <a href="#" className="font-bold text-teal-500 flex items-center gap-2">READ MORE <ArrowRight className="w-4 h-4" /></a>
          </div>
          {/* Service Card 2 */}
          <div className="space-y-3">
            <div className="w-16 h-20 bg-teal-500 rounded-full flex items-center justify-center">
              <svg width="34" height="40" viewBox="0 0 34 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M33.1799 20C33.1799 9.259 25.9399 0 17.1799 0C8.41992 0 1.17993 9.259 1.17993 20C1.17993 30.741 8.41992 40 17.1799 40C25.9399 40 33.1799 30.741 33.1799 20Z" fill="white" /></svg>
            </div>
            <h4 className="text-blue-950 font-bold font-body text-base">Cardiology</h4>
            <p className="text-blue-950 text-sm">Nam at varius ut dignissim lorem, in condimentum leo. Vestibulum eget.</p>
            <a href="#" className="font-bold text-teal-500 flex items-center gap-2">READ MORE <ArrowRight className="w-4 h-4" /></a>
          </div>
          {/* Service Card 3 */}
          <div className="space-y-3">
            <div className="w-16 h-20 bg-teal-500 rounded-full flex items-center justify-center">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M-0.280273 20.28C-0.280273 9.32403 8.68372 0.360031 19.6397 0.360031C30.5957 0.360031 39.5597 9.32403 39.5597 20.28C39.5597 31.236 30.5957 40.2 19.6397 40.2C8.68372 40.2 -0.280273 31.236 -0.280273 20.28Z" fill="white" /></svg>
            </div>
            <h4 className="text-blue-950 font-bold font-body text-base">Pulmology</h4>
            <p className="text-blue-950 text-sm">Donec risus elit, facilisis at vel vulputate sit amet, hac finibus nec purus.</p>
            <a href="#" className="font-bold text-teal-500 flex items-center gap-2">READ MORE <ArrowRight className="w-4 h-4" /></a>
          </div>
          {/* Service Card 4 */}
          <div className="space-y-3">
            <div className="w-16 h-20 bg-teal-500 rounded-full flex items-center justify-center">
              <svg width="18" height="40" viewBox="0 0 18 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.1599 20C17.1599 30.741 9.91992 40 1.15991 40C-7.59998 40 -14.84 30.741 -14.84 20C-14.84 9.259 -7.59998 0 1.15991 0C9.91992 0 17.1599 9.259 17.1599 20Z" fill="white" /></svg>
            </div>
            <h4 className="text-blue-950 font-bold font-body text-base">Rheumatology</h4>
            <p className="text-blue-950 text-sm">Fusce ac nulla diam. Nulla facilisi. Donec accumsan est nec laoreet.</p>
            <a href="#" className="font-bold text-teal-500 flex items-center gap-2">READ MORE <ArrowRight className="w-4 h-4" /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
