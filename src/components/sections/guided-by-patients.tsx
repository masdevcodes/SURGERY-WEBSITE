import Image from 'next/image';
import { Check } from 'lucide-react';

export function GuidedByPatients() {
  return (
    <section id="guided-by-patients" className="relative h-[833px]">
      <Image
        src="https://placehold.co/1425x818"
        alt="Patient and doctor"
        fill
        className="object-cover"
        data-ai-hint="patient doctor"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
      <div className="relative container mx-auto h-full flex items-center">
        <div className="w-1/2"></div>
        <div className="w-1/2 space-y-6 text-blue-950">
          <h2 className="text-6xl font-bold font-body leading-tight">Guided by the needs of our patients</h2>
          <p className="text-xl font-semibold">Delivering world class medical care</p>
          <p className="leading-relaxed">Our Hospital provide the highest quality care to improve the health of our entire community through innovation, collaboration, service excellence, diversity and a commitment to patient safety</p>
          <div className="space-y-2">
            <p className="flex items-center gap-3"><Check className="w-4 h-4 text-teal-500 bg-white rounded-full p-0.5" /> Diagnostic services</p>
            <p className="flex items-center gap-3"><Check className="w-4 h-4 text-teal-500 bg-white rounded-full p-0.5" /> Surgery services</p>
            <p className="flex items-center gap-3"><Check className="w-4 h-4 text-teal-500 bg-white rounded-full p-0.5" /> Therapy services</p>
          </div>
          <button className="border border-black text-black rounded-md px-8 py-4 font-bold text-sm">About Medical Center</button>
        </div>
      </div>
    </section>
  );
}
