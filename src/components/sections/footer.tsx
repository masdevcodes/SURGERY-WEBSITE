import Image from 'next/image';
import { Phone, Mail, MapPin, Check } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-zinc-900 text-white pt-24 pb-12">
      <div className="container mx-auto">
        {/* CTA Banner */}
        <div className="bg-white/10 rounded-lg p-12 flex justify-between items-center mb-24">
          <h3 className="text-4xl">
            <span className="font-light">COVID-19</span> <span className="text-teal-500 font-normal">Antigen Test</span>
          </h3>
          <button className="border border-teal-500 text-white font-bold text-sm px-6 py-4 rounded-md flex items-center gap-2">
            <Check className="w-5 h-5 text-teal-500" />
            Book Covid-19 Antigen Test
          </button>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="w-32 h-14 mb-6">
              <Image src="https://placehold.co/130x60" alt="logo" width={130} height={60} data-ai-hint="logo" />
            </div>
            <p className="text-xs leading-tight">We bring the years, global experience, and stamina to guide our clients through new and often disruptive realities.</p>
          </div>
          <div>
            <h4 className="font-medium text-base mb-4">Services</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-teal-500">Business Planning</a></li>
              <li><a href="#" className="hover:text-teal-500">Feasibility Study</a></li>
              <li><a href="#" className="hover:text-teal-500">Startup Funding</a></li>
              <li><a href="#" className="hover:text-teal-500">Business Plan Review</a></li>
              <li><a href="#" className="hover:text-teal-500">Investor Presentation</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-base mb-4">Pricing & Fees</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-teal-500">Compare Insurance Plans</a></li>
              <li><a href="#" className="hover:text-teal-500">Standard Plan – $499</a></li>
              <li><a href="#" className="hover:text-teal-500">Plus Plan – $799</a></li>
              <li><a href="#" className="hover:text-teal-500">Premium Plan – $999</a></li>
              <li><a href="#" className="hover:text-teal-500">Pro Plan – $1399</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-base mb-4">Connect</h4>
            <div className="flex gap-2 mb-4">
              <a href="#" className="w-10 h-10 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-zinc-900"></a>
              <a href="#" className="w-10 h-10 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-zinc-900"></a>
              <a href="#" className="w-10 h-10 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-zinc-900"></a>
              <a href="#" className="w-10 h-10 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-zinc-900"></a>
            </div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2"><Phone className="w-3.5 h-3.5" /> 1-800-1-900</li>
              <li className="flex items-center gap-2"><Mail className="w-3.5 h-3.5" /> info@cliniq.com</li>
              <li className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5" /> 60 East 65th Street, New York</li>
            </ul>
          </div>
        </div>

        {/* Copyright & Bottom Links */}
        <div className="border-t border-neutral-300 pt-8 flex justify-between items-center">
          <p className="text-xs">©2024 CLINIQ. All rights reserved</p>
          <div className="flex gap-4 text-xs">
            <a href="#" className="border-b border-transparent hover:border-white">Privacy Policy</a>
            <a href="#" className="border-b border-transparent hover:border-white">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
