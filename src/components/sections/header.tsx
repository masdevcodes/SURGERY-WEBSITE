import Image from 'next/image';
import { Search } from 'lucide-react';

export function Header() {
  return (
    <header className="absolute top-0 left-0 w-full h-24 z-20 border-b border-white/30 bg-zinc-900/50 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between h-full px-5">
        <div className="w-28 h-24">
          <Image
            src="/GMClogo.jpg"
            alt="GMC Patiala Logo"
            width={120}
            height={90}
            data-ai-hint="logo"
          />
        </div>
        <nav className="hidden lg:flex items-center space-x-12 h-full text-white">
          <a
            href="#home"
            className="h-full flex items-center border-b-[3px] border-white text-base font-semibold uppercase"
          >
            Home
          </a>
          <a
            href="#about"
            className="h-full flex items-center border-b-[3px] border-transparent hover:border-white text-base font-semibold uppercase"
          >
            About
          </a>
          <a
            href="#services"
            className="h-full flex items-center border-b-[3px] border-transparent hover:border-white text-base font-semibold uppercase"
          >
            Services
          </a>
          <a
            href="#providers"
            className="h-full flex items-center border-b-[3px] border-transparent hover:border-white text-base font-semibold uppercase"
          >
            Providers
          </a>
          <a
            href="#contact"
            className="h-full flex items-center border-b-[3px] border-transparent hover:border-white text-base font-semibold uppercase"
          >
            Contact
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <button className="w-11 h-11 bg-white/10 rounded-full flex items-center justify-center">
            <Search className="w-4 h-4 text-white" />
          </button>
          <button className="w-11 h-11 bg-white/10 rounded-full flex items-center justify-center">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 0C3.13 0 0 3.13 0 7C0 10.87 3.13 14 7 14C10.87 14 14 10.87 14 7C14 3.13 10.87 0 7 0ZM7 12.6C3.91 12.6 1.4 10.09 1.4 7C1.4 3.91 3.91 1.4 7 1.4C10.09 1.4 12.6 3.91 12.6 7C12.6 10.09 10.09 12.6 7 12.6ZM9.8 4.2H8.75V7.35H4.2V8.75H9.8V4.2Z"
                fill="white"
              />
            </svg>
          </button>
          <button className="bg-teal-500 rounded-md shadow-sm px-6 py-3 flex items-center gap-3">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.6666 5.83333H14.1666V3.33333C14.1666 2.41667 13.4166 1.66667 12.5 1.66667H7.5C6.58332 1.66667 5.83332 2.41667 5.83332 3.33333V5.83333H3.33332C2.41666 5.83333 1.66666 6.58333 1.66666 7.5V16.6667C1.66666 17.5833 2.41666 18.3333 3.33332 18.3333H16.6666C17.5833 18.3333 18.3333 17.5833 18.3333 16.6667V7.5C18.3333 6.58333 17.5833 5.83333 16.6666 5.83333ZM7.49999 3.33333H12.5V5.83333H7.49999V3.33333ZM11.6666 13.3333H10.8333V14.1667H9.16666V13.3333H8.33332V11.6667H9.16666V10.8333H10.8333V11.6667H11.6666V13.3333Z"
                fill="white"
              />
            </svg>
            <span className="text-white text-sm font-bold leading-none">
              Make an Appointment
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
