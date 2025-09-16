import Image from 'next/image';
import { ArrowRight, Check } from 'lucide-react';

export function InfoCards() {
  return (
    <section id="info" className="py-24 bg-gradient-to-b from-white via-white/0 to-white relative">
      <div className="absolute inset-0 opacity-30">
        <Image
          src="/111.png"
          alt="Abstract background"
          fill
          className="object-cover"
        />
      </div>
      <div className="container mx-auto">
        <div className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* OPD Timings */}
          <div className="bg-teal-500 rounded-lg p-8 text-white">
            <h3 className="text-3xl font-bold font-body mb-8">
              OPD Timings
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-white/50 py-4">
                <div>
                  <p className="font-semibold">Mon - Wed</p>
                  <p>8AM - 7PM</p>
                </div>
                <button className="bg-white text-teal-500 rounded-md px-6 py-2 font-bold text-sm flex items-center gap-2">
                  <Check className="w-4 h-4" /> Book
                </button>
              </div>
              <div className="flex justify-between items-center border-b border-white/50 py-4">
                <div>
                  <p className="font-semibold">Thursday</p>
                  <p>8AM - 7PM</p>
                </div>
                <button className="bg-white text-teal-500 rounded-md px-6 py-2 font-bold text-sm flex items-center gap-2">
                  <Check className="w-4 h-4" /> Book
                </button>
              </div>
              <div className="flex justify-between items-center border-b border-white/50 py-4">
                <div>
                  <p className="font-semibold">Friday</p>
                  <p>8AM - 7PM</p>
                </div>
                <button className="bg-white text-teal-500 rounded-md px-6 py-2 font-bold text-sm flex items-center gap-2">
                  <Check className="w-4 h-4" /> Book
                </button>
              </div>
              <div className="flex justify-between items-center pt-4">
                <p className="font-semibold">Sat - Sunday</p>
                <p>Closed</p>
              </div>
            </div>
          </div>

          {/* Covid-19 Response Card */}
          <div className="rounded-lg shadow-lg overflow-hidden">
            <div className="relative overflow-hidden">
            <Image
              src="/stoma.png"
              alt="Stoma care and medical equipment"
              width={385}
              height={321}
              className="w-full transition-transform duration-700 hover:scale-110"
              data-ai-hint="stoma medical care"
            />
            </div>
            <div className="p-8 bg-white">
              <h3 className="text-3xl font-bold font-body text-blue-950 mb-4">
                Stoma Clinic
              </h3>
              <p className="text-zinc-500 leading-relaxed mb-6">
                For everyday care or life-changing care, you can count on us to keep you and your loved ones safe and healthy.
              </p>
              <a href="#" className="font-bold text-teal-500 flex items-center gap-2">
                READ MORE <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Vistors & Patients Card */}
          <div className="rounded-lg shadow-lg overflow-hidden">
            <div className="relative overflow-hidden">
            <Image
              src="/br.png"
              alt="Doctors consulting with patient in hospital room"
              width={385}
              height={321}
              className="w-full transition-transform duration-700 hover:scale-110"
              data-ai-hint="doctors patient consultation hospital room"
            />
            </div>
            <div className="p-8 bg-white">
              <h3 className="text-3xl font-bold font-body text-blue-950 mb-4">
               Breast Clinic
              </h3>
              <p className="text-zinc-500 leading-relaxed mb-6">
                No-commitment packages will give you peace of mind and an extra set of hands without the commitment.
              </p>
              <a href="#" className="font-bold text-teal-500 flex items-center gap-2">
                READ MORE <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
        </div>
      </div>
    </section>
  );
}
