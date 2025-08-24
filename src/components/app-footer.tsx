"use client";

import { HeartPulse, Mail, MapPin, Phone } from 'lucide-react';
import React, { useState, useEffect } from 'react';

export function AppFooter() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 py-12">
        <div className="flex flex-col items-start">
          <a href="#home" className="flex items-center gap-2 mb-4">
            <HeartPulse className="h-8 w-8 text-primary" />
            <span className="font-headline text-2xl font-bold">Healing Touch</span>
          </a>
          <p className="text-sm text-muted-foreground">Department of Surgery</p>
          <p className="text-sm text-muted-foreground">Govt. Medical College, Patiala</p>
        </div>
        <div>
          <h3 className="font-headline text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              <span>Sangrur Road, Patiala, Punjab, India</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              <a href="tel:+91-175-221290" className="hover:text-primary">+91-175-221290</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" />
              <a href="mailto:info@gmcpatiala.com" className="hover:text-primary">info@gmcpatiala.com</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-headline text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#faculty" className="hover:text-primary">Faculty</a></li>
            <li><a href="#services" className="hover:text-primary">Services</a></li>
            <li><a href="#appointments" className="hover:text-primary">Book an Appointment</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="container mx-auto flex justify-between items-center px-4 py-4 text-sm text-muted-foreground">
          <p>&copy; {currentYear} GMC Patiala. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
