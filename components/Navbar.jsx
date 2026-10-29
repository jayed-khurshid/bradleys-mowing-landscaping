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
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 pt-3 sm:pt-5 pointer-events-none">
      {/* Floating Black Rounded Bar */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-8 py-3 sm:py-3.5 rounded-[24px] bg-black/95 backdrop-blur-md border border-white/10 shadow-2xl flex items-center justify-between gap-3 sm:gap-6 pointer-events-auto">
        
        {/* MOBILE PHONE BUTTON: ON THE LEFT (larger icon & button) */}
        <div className="flex sm:hidden items-center shrink-0">
          <a
            href={business.phoneTel}
            className="w-11 h-11 rounded-full bg-[#24b80b] hover:bg-[#1ea009] text-black flex items-center justify-center shadow-md active:scale-95 transition-all"
            aria-label="Call Bradley's Mowing"
          >
            <Phone className="w-5 h-5 fill-black text-black" />
          </a>
        </div>

        {/* LOGO: CENTERED ON PHONE VERSION, LEFT-ALIGNED ON TABLET/DESKTOP (enlarged on both) */}
        <div className="flex items-center justify-center sm:justify-start flex-1 sm:flex-initial">
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/logo-white.png"
              alt="Bradley's Mowing & Landscaping LLC"
              width={280}
              height={70}
              className="h-10 sm:h-11 md:h-14 w-auto object-contain"
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
              <div className="absolute top-full -left-4 w-72 bg-brand-forestDark border border-brand-cta/30 rounded-2xl shadow-2xl p-3 z-50 space-y-0.5 animate-fadeIn">
                <Link 
                  href="/services" 
                  className="block px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-lime border-b border-white/10 hover:text-white mb-1"
                >
                  All Services Overview &rarr;
                </Link>
                {[
                  ['Lawn Mowing & Maintenance', '/services/lawn-mowing'],
                  ['Landscaping & Bed Renovation', '/services/landscaping'],
                  ['Yard Leveling & Minor Grading', '/services/yard-leveling'],
                  ['Drainage Solutions & French Drains', '/services/drainage-solutions'],
                  ['Brush & Fence-Line Clearing', '/services/brush-clearing'],
                  ['Commercial Grounds Care', '/services/commercial-lawn-care'],
                  ['Sod Installation', '/services/sod-installation'],
                  ['Decorative Rock & Mulch', '/services/decorative-rock-installation'],
                  ['Seasonal Yard Cleanups', '/services/seasonal-yard-cleanups'],
                ].map(([label, href]) => (
                  <Link
                    key={href}
                    href={href}
                    className="block px-3 py-1.5 text-sm text-white hover:bg-white/10 hover:text-brand-lime rounded-lg transition-colors"
                  >
                    {label}
                  </Link>
                ))}
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
            className="px-6 py-2.5 rounded-full font-display font-bold text-sm text-black bg-[#24b80b] hover:bg-[#1ea009] transition-all shadow-md transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Request A Quote
          </Link>
        </div>

        {/* MOBILE & TABLET HAMBURGER BUTTON: ON THE RIGHT (larger icon & button with original translucent background) */}
        <div className="flex lg:hidden items-center shrink-0">
          <button
            onClick={() => setDrawerOpen(!drawerOpen)}
            className="w-11 h-11 rounded-full text-white bg-white/10 hover:bg-white/20 active:scale-95 flex items-center justify-center transition-all"
            aria-label="Toggle menu"
          >
            {drawerOpen ? <X className="w-6 h-6 text-white stroke-[2.5]" /> : <Menu className="w-6 h-6 text-white stroke-[2.5]" />}
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      {drawerOpen && (
        <div className="lg:hidden mt-2 max-w-[1240px] mx-auto bg-black/95 backdrop-blur-md border border-white/10 rounded-2xl p-5 text-white space-y-3 shadow-2xl animate-fadeIn pointer-events-auto">
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
