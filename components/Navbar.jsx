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
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      {/* ── MOBILE HEADER (visible on mobile/tablet below lg) ── */}
      {/* Crisp white background matching the reference photo */}
      <div className="lg:hidden pointer-events-auto bg-white border-b border-gray-100 shadow-sm">
        <div className="flex items-center justify-between px-4 py-3 max-w-[1240px] mx-auto">
          {/* Left: Green rounded call button with larger phone icon */}
          <a
            href={business.phoneTel}
            className="w-12 h-12 rounded-2xl bg-brand-cta hover:bg-brand-ctaHover text-white flex items-center justify-center shadow-md active:scale-95 transition-all shrink-0"
            aria-label="Call Bradley's Mowing"
          >
            <Phone className="w-6 h-6 fill-white text-white" />
          </a>

          {/* Center: Larger logo on mobile */}
          <Link href="/" className="flex items-center justify-center flex-1 px-3">
            <Image
              src="/images/logo.png"
              alt="Bradley's Mowing & Landscaping LLC"
              width={260}
              height={70}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Right: Green rounded hamburger button with larger nav icon */}
          <button
            onClick={() => setDrawerOpen(!drawerOpen)}
            className="w-12 h-12 rounded-2xl bg-brand-cta hover:bg-brand-ctaHover text-white flex items-center justify-center shadow-md active:scale-95 transition-all shrink-0"
            aria-label="Toggle menu"
          >
            {drawerOpen ? <X className="w-7 h-7 text-white stroke-[2.5]" /> : <Menu className="w-7 h-7 text-white stroke-[2.5]" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {drawerOpen && (
          <div className="bg-white border-t border-gray-100 px-5 pt-3 pb-6 text-gray-900 space-y-1 shadow-2xl animate-fadeIn">
            {[
              { label: 'Home', href: '/' },
              { label: 'About', href: '/about' },
              { label: 'Services', href: '/services' },
              { label: 'Gallery / Our Work', href: '/projects' },
              { label: 'Service Areas', href: '/service-areas' },
              { label: 'Contact', href: '/contact' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setDrawerOpen(false)}
                className="block py-2.5 px-3 rounded-xl font-bold text-base text-gray-800 hover:bg-[#F2FFEA] hover:text-brand-forest transition-colors"
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-3 border-t border-gray-100 flex flex-col gap-2.5 mt-2">
              <a
                href={business.phoneTel}
                className="flex items-center justify-center gap-2 py-3 rounded-full bg-[#F2FFEA] border border-[#9ed390] text-brand-forest font-bold text-sm"
              >
                <Phone className="w-4 h-4 fill-brand-forest text-brand-forest" />
                <span>Call: {business.phone}</span>
              </a>
              <Link
                href="/request-estimate"
                onClick={() => setDrawerOpen(false)}
                className="flex items-center justify-center py-3.5 rounded-full bg-brand-cta hover:bg-brand-ctaHover text-black font-extrabold text-sm shadow-md transition-all"
              >
                Request A Quote
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* ── DESKTOP HEADER (lg and up) ── */}
      <div className="hidden lg:block pointer-events-auto px-6 pt-5">
        <div className="max-w-[1240px] mx-auto px-8 py-3.5 rounded-[24px] bg-black/95 backdrop-blur-md border border-white/10 shadow-2xl flex items-center justify-between gap-6">
          
          {/* Desktop Logo - larger display */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/logo-white.png"
              alt="Bradley's Mowing & Landscaping LLC"
              width={280}
              height={75}
              className="h-12 md:h-14 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="flex items-center gap-7 xl:gap-8 font-display font-bold text-sm text-white">
            <Link href="/" className="hover:text-brand-lime transition-colors">Home</Link>

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

            <Link href="/about" className="hover:text-brand-lime transition-colors">About</Link>
            <Link href="/projects" className="hover:text-brand-lime transition-colors">Gallery</Link>
            <Link href="/service-areas" className="hover:text-brand-lime transition-colors">Areas</Link>
            <Link href="/contact" className="hover:text-brand-lime transition-colors">Contact</Link>
          </nav>

          {/* Right side contact & CTA */}
          <div className="flex items-center gap-5">
            <a
              href={business.phoneTel}
              className="flex items-center gap-2 text-white font-display font-bold text-sm hover:text-brand-lime transition-colors"
            >
              <Phone className="w-4 h-4 text-white fill-white" />
              <span>{business.phone}</span>
            </a>
            <Link
              href="/request-estimate"
              className="px-6 py-2.5 rounded-full font-display font-bold text-sm text-black bg-brand-cta hover:bg-brand-ctaHover transition-all shadow-md transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Request A Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
