"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, HeartPulse, X } from 'lucide-react';

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Faculty", href: "#faculty" },
  { name: "Services", href: "#services" },
  { name: "Research", href: "#research" },
  { name: "Tour", href: "#tour" },
  { name: "AI Summarizer", href: "#ai-summarizer" },
  { name: "Appointments", href: "#appointments" },
];

export function AppHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <a href="#home" className="flex items-center gap-2" onClick={handleLinkClick}>
          <HeartPulse className="h-6 w-6 text-primary" />
          <span className="font-headline text-xl font-bold">Healing Touch</span>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="transition-colors hover:text-primary">
              {link.name}
            </a>
          ))}
        </nav>

        <div className="md:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px]">
              <div className="flex justify-between items-center p-4 border-b">
                 <a href="#home" className="flex items-center gap-2" onClick={handleLinkClick}>
                  <HeartPulse className="h-6 w-6 text-primary" />
                  <span className="font-headline text-xl font-bold">Healing Touch</span>
                </a>
                <SheetTrigger asChild>
                   <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
                      <X className="h-6 w-6" />
                      <span className="sr-only">Close menu</span>
                   </Button>
                </SheetTrigger>
              </div>
              <nav className="flex flex-col items-start gap-6 p-4 text-lg font-medium">
                {navLinks.map((link) => (
                  <a key={link.name} href={link.href} className="transition-colors hover:text-primary w-full" onClick={handleLinkClick}>
                    {link.name}
                  </a>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
