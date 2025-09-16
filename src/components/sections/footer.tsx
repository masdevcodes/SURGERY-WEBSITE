import Image from 'next/image';
import { Phone, Mail, MapPin, Check } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-zinc-900 text-white py-8">
      <div className="container mx-auto">
        <div className="text-center">
          <p className="text-xs">©2025 SURGERY DEPARTMENT, GMC PATIALA</p>
        </div>
      </div>
    </footer>
  );
}
