import Image from 'next/image';
import { ArrowRight, Check } from 'lucide-react';

export function InfoCards() {
  return (
    <section id="info" className="py-24 bg-gradient-to-b from-white via-white/0 to-white">
      <div className="container mx-auto">
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
            <div className="mt-8 pt-8 border-t border-white/50">
              <h4 className="text-base font-medium mb-2">Time's not Flexible?</h4>
              <p className="text-sm font-light">We provide high quality, integrated healthcare services, based on a patient–centered</p>
              <button className="mt-6 w-full border border-white rounded-md py-3 font-bold text-sm">SUGGEST CHECKUP TIME</button>
            </div>
          </div>

          {/* Covid-19 Response Card */}
          <div className="rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/img.inspect-element-1758003645349.jpeg"
              alt="Doctors consulting with patient in hospital"
              width={385}
              height={321}
              className="w-full"
              data-ai-hint="doctors patient consultation"
            />
            <div className="p-8 bg-white">
              <div className="w-20 h-20 bg-teal-500 rounded-md flex items-center justify-center -mt-20 mb-6">
                <svg width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M43.9999 22.5119C43.9999 34.3912 34.3911 44.0001 22.5118 44.0001C10.6325 44.0001 1 34.3912 1 22.5119C1 10.6326 10.6325 1.0238 22.5118 1.0238C34.3911 1.0238 43.9999 10.6326 43.9999 22.5119Z" fill="white" /></svg>
              </div>
              <h3 className="text-3xl font-bold font-body text-blue-950 mb-4">
                Our Covid-19 Response
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
            <Image
              src="https://placehold.co/385x321"
              alt="Hospital hallway"
              width={385}
              height={321}
              className="w-full"
              data-ai-hint="hospital hallway"
            />
            <div className="p-8 bg-white">
              <div className="w-20 h-20 bg-teal-500 rounded-md flex items-center justify-center -mt-20 mb-6">
                <svg width="44" height="41" viewBox="0 0 44 41" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.0001 2.86011C27.9601 2.86011 34.2001 7.10011 39.0001 14.3001C39.4801 15.0201 39.1201 16.0201 38.2801 16.3801C37.5601 16.7401 36.5601 16.3801 36.2001 15.6601C31.8801 8.94011 26.1601 5.14011 22.0001 5.14011C17.8401 5.14011 12.1201 8.94011 7.80011 15.6601C7.44011 16.3801 6.44011 16.7401 5.72011 16.3801C4.88011 16.0201 4.52011 15.0201 5.00011 14.3001C9.80011 7.10011 16.0401 2.86011 22.0001 2.86011ZM22.0001 11.2601C25.4001 11.2601 28.0001 13.8601 28.0001 17.2601C28.0001 20.6601 25.4001 23.2601 22.0001 23.2601C18.6001 23.2601 16.0001 20.6601 16.0001 17.2601C16.0001 13.8601 18.6001 11.2601 22.0001 11.2601ZM22.0001 25.6601C28.4001 25.6601 35.2801 28.0601 39.0001 34.3001C39.4801 35.0201 39.1201 36.0201 38.2801 36.3801C37.5601 36.7401 36.5601 36.3801 36.2001 35.6601C32.8401 30.1001 27.5201 27.9401 22.0001 27.9401C16.4801 27.9401 11.1601 30.1001 7.80011 35.6601C7.44011 36.3801 6.44011 36.7401 5.72011 36.3801C4.88011 36.0201 4.52011 35.0201 5.00011 34.3001C8.72011 28.0601 15.6001 25.6601 22.0001 25.6601Z" fill="white" /></svg>
              </div>
              <h3 className="text-3xl font-bold font-body text-blue-950 mb-4">
                Visitors & Patiens Information
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
    </section>
  );
}
