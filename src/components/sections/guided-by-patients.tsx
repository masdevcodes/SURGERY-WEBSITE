import Image from 'next/image';
import { Check } from 'lucide-react';

export function GuidedByPatients() {
  return (
    <section id="guided-by-patients" className="bg-white">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 items-center">
          <div className="relative h-[833px] hidden md:block">
            <Image
              src="/33.png"
              alt="Patient and doctor"
              fill
              className="object-cover"
              data-ai-hint="patient doctor"
            />
          </div>
          <div className="space-y-6 text-blue-950 p-8 md:p-16">
            <h2 className="text-6xl font-bold font-body leading-tight">Guided by the needs of our patients</h2>
            <p className="text-xl font-semibold">Delivering world class medical care</p>
            <p className="leading-relaxed">Our Hospital provide the highest quality care to improve the health of our entire community through innovation, collaboration, service excellence, diversity and a commitment to patient safety</p>
            <div className="space-y-2">
              <p className="flex items-center gap-3"><Check className="w-4 h-4 text-teal-500 bg-teal-100 rounded-full p-0.5" /> Diagnostic services</p>
              <p className="flex items-center gap-3"><Check className="w-4 h-4 text-teal-500 bg-teal-100 rounded-full p-0.5" /> Surgery services</p>
              <p className="flex items-center gap-3"><Check className="w-4 h-4 text-teal-500 bg-teal-100 rounded-full p-0.5" /> Therapy services</p>
            </div>
            <button className="border border-black text-black rounded-md px-8 py-4 font-bold text-sm">About Medical Center</button>
          </div>
        </div>
      </div>
    </section>
  );
}
