'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import { business } from '@/lib/data';

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 pt-3.5 sm:pt-5 pointer-events-none">
      {/* Floating Black Rounded Pill Bar positioned over the hero section */}
      <div className="max-w-[1240px] mx-auto px-3.5 sm:px-7 py-2.5 sm:py-3 rounded-[24px] bg-black/95 backdrop-blur-md border border-white/10 shadow-2xl flex items-center justify-between gap-3 sm:gap-4 pointer-events-auto">
        
        {/* MOBILE PHONE BUTTON: ON THE LEFT */}
        <div className="flex sm:hidden items-center shrink-0">
          <a
            href={business.phoneTel}
            className="w-9 h-9 rounded-full bg-[#24b80b] hover:bg-[#1ea009] text-black flex items-center justify-center shadow-md active:scale-95 transition-all"
            aria-label="Call Bradley's Mowing"
          >
            <Phone className="w-4 h-4 fill-black text-black" />
          </a>
        </div>

        {/* LOGO: CENTERED ON PHONE VERSION, LEFT-ALIGNED ON TABLET/DESKTOP */}
        <div className="flex items-center justify-center sm:justify-start flex-1 sm:flex-initial">
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/logo-white.png"
              alt="Bradley's Mowing & Landscaping LLC"
              width={220}
              height={55}
              className="h-8 sm:h-9 md:h-11 w-auto object-contain"
              priority
            />
          </Link>
        </div>

        {/* CENTER NAVIGATION LINKS (DESKTOP) */}
        <nav className="hidden lg:flex items-center gap-7 xl:gap-8 font-display font-bold text-sm text-white">
          <Link href="/" className="hover:text-brand-lime transition-colors">
            Home
          </Link>

          {/* Services with dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link 
              href="/services" 
              className="flex items-center gap-1 hover:text-brand-lime transition-colors py-1"
            >
              <span>Services</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </Link>

            {servicesOpen && (
              <div className="absolute top-full -left-4 w-72 bg-[#053e14] border border-brand-cta/30 rounded-2xl shadow-2xl p-3 z-50 space-y-1 animate-fadeIn">
                <Link 
                  href="/services" 
                  className="block px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-lime border-b border-white/10 hover:text-white"
                >
                  All Services Overview →
                </Link>
                <Link href="/services/lawn-mowing" className="block px-3 py-1.5 text-sm text-white hover:bg-white/10 hover:text-brand-lime rounded-lg">
                  Lawn Mowing & Maintenance
                </Link>
                <Link href="/services/landscaping" className="block px-3 py-1.5 text-sm text-white hover:bg-white/10 hover:text-brand-lime rounded-lg">
                  Landscaping & Bed Renovation
                </Link>
                <Link href="/services/yard-leveling" className="block px-3 py-1.5 text-sm text-white hover:bg-white/10 hover:text-brand-lime rounded-lg">
                  Yard Leveling & Minor Grading
                </Link>
                <Link href="/services/drainage-solutions" className="block px-3 py-1.5 text-sm text-white hover:bg-white/10 hover:text-brand-lime rounded-lg">
                  Drainage Solutions & French Drains
                </Link>
                <Link href="/services/brush-clearing" className="block px-3 py-1.5 text-sm text-white hover:bg-white/10 hover:text-brand-lime rounded-lg">
                  Brush & Fence-Line Clearing
                </Link>
                <Link href="/services/commercial-lawn-care" className="block px-3 py-1.5 text-sm text-white hover:bg-white/10 hover:text-brand-lime rounded-lg">
                  Commercial Grounds Care
                </Link>
              </div>
            )}
          </div>

          <Link href="/about" className="hover:text-brand-lime transition-colors">
            About
          </Link>
          <Link href="/projects" className="hover:text-brand-lime transition-colors">
            Gallery
          </Link>
          <Link href="/service-areas" className="hover:text-brand-lime transition-colors">
            Areas
          </Link>
          <Link href="/contact" className="hover:text-brand-lime transition-colors">
            Contact
          </Link>
        </nav>

        {/* RIGHT SIDE: PHONE & REQUEST A QUOTE BUTTON (TABLET & DESKTOP) */}
        <div className="hidden sm:flex items-center gap-5">
          <a
            href={business.phoneTel}
            className="flex items-center gap-2 text-white font-display font-bold text-sm hover:text-brand-lime transition-colors"
          >
            <Phone className="w-4 h-4 text-white fill-white" />
            <span>{business.phone}</span>
          </a>

          <Link
            href="/request-estimate"
            className="px-5 py-2.5 rounded-full font-display font-bold text-sm text-black bg-[#24b80b] hover:bg-[#1ea009] transition-all shadow-md transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Request A Quote
          </Link>
        </div>

        {/* MOBILE & TABLET HAMBURGER BUTTON: ON THE RIGHT */}
        <div className="flex lg:hidden items-center shrink-0">
          <button
            onClick={() => setDrawerOpen(!drawerOpen)}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full text-white bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all"
            aria-label="Toggle menu"
          >
            {drawerOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      {drawerOpen && (
        <div className="lg:hidden mt-2 max-w-[1240px] mx-auto bg-black border border-white/10 rounded-2xl p-5 text-white space-y-3 shadow-2xl animate-fadeIn pointer-events-auto">
          <Link href="/" onClick={() => setDrawerOpen(false)} className="block py-2 font-bold hover:text-brand-lime">
            Home
          </Link>
          <Link href="/services" onClick={() => setDrawerOpen(false)} className="block py-2 font-bold hover:text-brand-lime">
            Services
          </Link>
          <Link href="/about" onClick={() => setDrawerOpen(false)} className="block py-2 font-bold hover:text-brand-lime">
            About Anthony
          </Link>
          <Link href="/projects" onClick={() => setDrawerOpen(false)} className="block py-2 font-bold hover:text-brand-lime">
            Gallery / Our Work
          </Link>
          <Link href="/service-areas" onClick={() => setDrawerOpen(false)} className="block py-2 font-bold hover:text-brand-lime">
            Service Areas
          </Link>
          <Link href="/contact" onClick={() => setDrawerOpen(false)} className="block py-2 font-bold hover:text-brand-lime">
            Contact
          </Link>
          <div className="pt-3 border-t border-white/15 flex flex-col gap-2.5">
            <a
              href={business.phoneTel}
              className="flex items-center justify-center gap-2 py-3 rounded-full bg-white/10 text-white font-bold text-sm"
            >
              <Phone className="w-4 h-4 fill-white" />
              <span>Call: {business.phone}</span>
            </a>
            <Link
              href="/request-estimate"
              onClick={() => setDrawerOpen(false)}
              className="flex items-center justify-center py-3 rounded-full bg-[#24b80b] text-black font-extrabold text-sm shadow-md"
            >
              Request A Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
