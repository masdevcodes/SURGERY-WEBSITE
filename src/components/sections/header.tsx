import Image from 'next/image';
import { Search } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 left-0 w-full h-16 z-20 border-b border-white/30 bg-zinc-900/50 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto flex items-center justify-between h-full px-5">
        {/* Logo container resized to fit smaller header */}
        <div className="h-12 w-12 mr-auto flex items-center">
          <Image
            src="/GMClogo.jpg"
            alt="GMC Patiala Logo"
            width={48}
            height={48}
            style={{ objectFit: 'contain' }}
            data-ai-hint="logo"
          />
        </div>
        <nav className="hidden lg:flex items-center space-x-12 h-full text-white ml-auto">
          <a
            href="#home"
            className="h-full flex items-center border-b-[3px] border-white text-base font-semibold uppercase transition-all duration-300"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Home
          </a>
          <a
            href="#about"
            className="h-full flex items-center border-b-[3px] border-transparent hover:border-white text-base font-semibold uppercase transition-all duration-300"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            About
          </a>
          <a
            href="#services"
            className="h-full flex items-center border-b-[3px] border-transparent hover:border-white text-base font-semibold uppercase transition-all duration-300"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Services
          </a>
          <a
            href="#providers"
            className="h-full flex items-center border-b-[3px] border-transparent hover:border-white text-base font-semibold uppercase transition-all duration-300"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('providers')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Providers
          </a>
          <a
            href="#events"
            className="h-full flex items-center border-b-[3px] border-transparent hover:border-white text-base font-semibold uppercase transition-all duration-300"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Events
          </a>
          <a
            href="#contact"
            className="h-full flex items-center border-b-[3px] border-transparent hover:border-white text-base font-semibold uppercase transition-all duration-300"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
