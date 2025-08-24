import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export function Providers() {
  return (
    <section id="providers" className="py-24 bg-white">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-6xl font-bold text-blue-950 font-body">Our Providers</h2>
          <button className="border border-teal-500 text-blue-950 font-bold text-sm px-6 py-4 rounded-md flex items-center gap-2">
            <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.74121 1.74133H12.2586V10.2587H1.74121V1.74133Z" stroke="#01CAB8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M10.5173 13.9999H3.48287" stroke="#01CAB8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            All Providers
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Provider Card 1 */}
          <div className="rounded-lg shadow-lg overflow-hidden group">
            <div className="relative overflow-hidden">
              <Image src="https://placehold.co/385x319" alt="Dr. Barbara Hodgin" width={385} height={319} className="w-full transition-transform duration-300 group-hover:scale-105" data-ai-hint="doctor portrait female" />
            </div>
            <div className="p-8 bg-white relative">
              <div className="w-20 h-20 bg-teal-500 rounded-md flex items-center justify-center -mt-20 mb-6 z-10 relative">
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.1602 43.6802V24.5202H0.320151L24.8402 0.32019L22.6802 20.3202H43.6802L19.1602 43.6802Z" fill="white" /></svg>
              </div>
              <p className="text-teal-500 font-bold text-base">CARDIOLOGY</p>
              <h3 className="text-3xl text-blue-950 font-body mb-3"><span className="font-normal">Barbara</span> <span className="font-bold">Hodgin</span></h3>
              <hr className="border-neutral-300 my-4" />
              <p className="text-zinc-500 text-sm leading-relaxed mb-6">Aenean aliquam tincidunt nibh, at sollicitudin orci. Integer sed lacus ex. Suspendisse eu tortor eget felis pellentesque rhoncus quis ut diam.</p>
              <div className="flex justify-between items-center">
                <div className="flex gap-2">
                  <a href="#" className="w-8 h-8 border border-teal-500 rounded-full flex items-center justify-center text-teal-500 hover:bg-teal-500 hover:text-white"></a>
                  <a href="#" className="w-8 h-8 border border-teal-500 rounded-full flex items-center justify-center text-teal-500 hover:bg-teal-500 hover:text-white"></a>
                </div>
                <a href="#" className="font-bold text-teal-500 flex items-center gap-2">READ MORE <ArrowRight className="w-4 h-4" /></a>
              </div>
            </div>
          </div>
          {/* Provider Card 2 */}
          <div className="rounded-lg shadow-lg overflow-hidden group">
            <div className="relative overflow-hidden">
              <Image src="https://placehold.co/385x319" alt="Dr. Jeanette Bowman" width={385} height={319} className="w-full transition-transform duration-300 group-hover:scale-105" data-ai-hint="doctor portrait female" />
            </div>
            <div className="p-8 bg-white relative">
              <div className="w-20 h-20 bg-teal-500 rounded-md flex items-center justify-center -mt-20 mb-6 z-10 relative">
                <svg width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M43.8242 22.5C43.8242 10.6207 34.2154 1 22.3361 1C10.4568 1 0.847901 10.6207 0.847901 22.5C0.847901 34.3793 10.4568 44 22.3361 44C34.2154 44 43.8242 34.3793 43.8242 22.5Z" fill="white" /></svg>
              </div>
              <p className="text-teal-500 font-bold text-base">PULMOLOGY</p>
              <h3 className="text-3xl text-blue-950 font-body mb-3"><span className="font-normal">Jeanette</span> <span className="font-bold">Bowman</span></h3>
              <hr className="border-neutral-300 my-4" />
              <p className="text-zinc-500 text-sm leading-relaxed mb-6">Proin non nibh id massa accumsan bibendum in id magna. Suspendisse potenti. Mauris lobortis scelerisque , eget scelerisque nulla fringilla ac.</p>
              <div className="flex justify-between items-center">
                <div className="flex gap-2">
                  <a href="#" className="w-8 h-8 border border-teal-500 rounded-full flex items-center justify-center text-teal-500 hover:bg-teal-500 hover:text-white"></a>
                  <a href="#" className="w-8 h-8 border border-teal-500 rounded-full flex items-center justify-center text-teal-500 hover:bg-teal-500 hover:text-white"></a>
                </div>
                <a href="#" className="font-bold text-teal-500 flex items-center gap-2">READ MORE <ArrowRight className="w-4 h-4" /></a>
              </div>
            </div>
          </div>
          {/* Provider Card 3 */}
          <div className="rounded-lg shadow-lg overflow-hidden group">
            <div className="relative overflow-hidden">
              <Image src="https://placehold.co/385x319" alt="Dr. Adam Hwang" width={385} height={319} className="w-full transition-transform duration-300 group-hover:scale-105" data-ai-hint="doctor portrait male" />
            </div>
            <div className="p-8 bg-white relative">
              <div className="w-20 h-20 bg-teal-500 rounded-md flex items-center justify-center -mt-20 mb-6 z-10 relative">
                <svg width="44" height="41" viewBox="0 0 44 41" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.0001 2.86011C27.9601 2.86011 34.2001 7.10011 39.0001 14.3001C39.4801 15.0201 39.1201 16.0201 38.2801 16.3801C37.5601 16.7401 36.5601 16.3801 36.2001 15.6601C31.8801 8.94011 26.1601 5.14011 22.0001 5.14011C17.8401 5.14011 12.1201 8.94011 7.80011 15.6601C7.44011 16.3801 6.44011 16.7401 5.72011 16.3801C4.88011 16.0201 4.52011 15.0201 5.00011 14.3001C9.80011 7.10011 16.0401 2.86011 22.0001 2.86011ZM22.0001 11.2601C25.4001 11.2601 28.0001 13.8601 28.0001 17.2601C28.0001 20.6601 25.4001 23.2601 22.0001 23.2601C18.6001 23.2601 16.0001 20.6601 16.0001 17.2601C16.0001 13.8601 18.6001 11.2601 22.0001 11.2601ZM22.0001 25.6601C28.4001 25.6601 35.2801 28.0601 39.0001 34.3001C39.4801 35.0201 39.1201 36.0201 38.2801 36.3801C37.5601 36.7401 36.5601 36.3801 36.2001 35.6601C32.8401 30.1001 27.5201 27.9401 22.0001 27.9401C16.4801 27.9401 11.1601 30.1001 7.80011 35.6601C7.44011 16.3801 6.44011 16.7401 5.72011 16.3801C4.88011 16.0201 4.52011 15.0201 5.00011 14.3001C8.72011 28.0601 15.6001 25.6601 22.0001 25.6601Z" fill="white" /></svg>
              </div>
              <p className="text-teal-500 font-bold text-base">UROLOGY</p>
              <h3 className="text-3xl text-blue-950 font-body mb-3"><span className="font-normal">Adam</span> <span className="font-bold">Hwang</span></h3>
              <hr className="border-neutral-300 my-4" />
              <p className="text-zinc-500 text-sm leading-relaxed mb-6">Integer vel nisl varius, finibus orci et, congue sapien. Fusce congue nunc quis elit eget porta. Magna nisi, varius ut risus in, porta aliquet.</p>
              <div className="flex justify-between items-center">
                <div className="flex gap-2">
                  <a href="#" className="w-8 h-8 border border-teal-500 rounded-full flex items-center justify-center text-teal-500 hover:bg-teal-500 hover:text-white"></a>
                  <a href="#" className="w-8 h-8 border border-teal-500 rounded-full flex items-center justify-center text-teal-500 hover:bg-teal-500 hover:text-white"></a>
                </div>
                <a href="#" className="font-bold text-teal-500 flex items-center gap-2">READ MORE <ArrowRight className="w-4 h-4" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
