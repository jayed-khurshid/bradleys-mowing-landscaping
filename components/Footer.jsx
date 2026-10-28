import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, ArrowRight } from 'lucide-react';
import { business, serviceCategories, serviceAreas } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* TOP CONTACT BANNER */}
        <div className="bg-[#053e14] rounded-3xl p-8 sm:p-10 mb-14 border border-brand-cta/30 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-center lg:text-left">
            <span className="text-xs font-extrabold text-brand-lime uppercase tracking-widest block mb-1">
              Ready For A Cleaner, Sharper Property?
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
              Contact Bradley&#39;s Today!
            </h3>
            <p className="text-white/80 text-sm mt-1">
              Serving El Reno, Yukon, Mustang, Calumet & all Canadian County communities.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
            <a
              href={business.phoneTel}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-all"
            >
              <Phone className="w-4 h-4 text-brand-lime" />
              <span>{business.phone}</span>
            </a>
            <Link
              href="/request-estimate"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#24b80b] hover:bg-[#1ea009] text-black font-extrabold text-sm shadow-lg hover:shadow-glow-green transition-all"
            >
              <span>Request Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 4 COLUMNS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* COL 1: BRAND INFO WITH WHITE VARIANT LOGO */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block group">
              <Image
                src="/logo-white.png"
                alt="Bradley's Mowing & Landscaping LLC"
                width={280}
                height={80}
                className="h-12 sm:h-14 lg:h-16 w-auto object-contain"
              />
            </Link>
            
            <p className="text-sm text-white/80 leading-relaxed font-sans">
              Locally owned and owner-operated by Anthony Bradley out of El Reno, Oklahoma. Providing dependable residential and commercial lawn care, landscaping, drainage, grading, and property clearing.
            </p>

            <div className="pt-1 space-y-2 text-sm text-white/90">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-brand-lime shrink-0" />
                <span>El Reno, Oklahoma 73036</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-lime shrink-0" />
                <a href={business.phoneTel} className="hover:text-brand-lime transition-colors">
                  {business.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-lime shrink-0" />
                <a href={business.emailMailto} className="hover:text-brand-lime transition-colors">
                  {business.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={business.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-all border border-white/10"
              >
                <Facebook className="w-4 h-4 text-blue-400" />
                <span>Follow on Facebook</span>
              </a>
            </div>
          </div>

          {/* COL 2: SERVICES */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display font-extrabold text-base text-white uppercase tracking-wider text-brand-lime">
              Core Services
            </h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link href="/services/lawn-mowing" className="hover:text-brand-lime transition-colors">
                  Lawn Mowing & Maintenance
                </Link>
              </li>
              <li>
                <Link href="/services/landscaping" className="hover:text-brand-lime transition-colors">
                  Landscaping & Bed Renovation
                </Link>
              </li>
              <li>
                <Link href="/services/yard-leveling" className="hover:text-brand-lime transition-colors">
                  Yard Leveling & Minor Grading
                </Link>
              </li>
              <li>
                <Link href="/services/drainage-solutions" className="hover:text-brand-lime transition-colors">
                  Drainage Solutions & French Drains
                </Link>
              </li>
              <li>
                <Link href="/services/brush-clearing" className="hover:text-brand-lime transition-colors">
                  Brush & Fence-Line Clearing
                </Link>
              </li>
              <li>
                <Link href="/services/commercial-lawn-care" className="hover:text-brand-lime transition-colors">
                  Commercial Grounds Maintenance
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-brand-lime font-bold hover:underline inline-flex items-center gap-1">
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* COL 3: SERVICE AREAS */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display font-extrabold text-base text-white uppercase tracking-wider text-brand-lime">
              Service Areas
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-sm text-white/80">
              <li>
                <Link href="/service-areas/el-reno-ok" className="hover:text-brand-lime transition-colors font-semibold text-white">
                  El Reno, OK
                </Link>
              </li>
              <li>
                <Link href="/service-areas/yukon-ok" className="hover:text-brand-lime transition-colors">
                  Yukon, OK
                </Link>
              </li>
              <li>
                <Link href="/service-areas/mustang-ok" className="hover:text-brand-lime transition-colors">
                  Mustang, OK
                </Link>
              </li>
              <li>
                <Link href="/service-areas/calumet-ok" className="hover:text-brand-lime transition-colors">
                  Calumet, OK
                </Link>
              </li>
              <li>
                <Link href="/service-areas/piedmont-ok" className="hover:text-brand-lime transition-colors">
                  Piedmont, OK
                </Link>
              </li>
              <li>
                <Link href="/service-areas/okarche-ok" className="hover:text-brand-lime transition-colors">
                  Okarche, OK
                </Link>
              </li>
              <li>
                <Link href="/service-areas/union-city-ok" className="hover:text-brand-lime transition-colors">
                  Union City, OK
                </Link>
              </li>
              <li>
                <Link href="/service-areas/geary-ok" className="hover:text-brand-lime transition-colors">
                  Geary, OK
                </Link>
              </li>
            </ul>
            <div className="pt-2">
              <Link href="/service-areas" className="text-xs text-brand-lime font-bold hover:underline">
                Explore Full Oklahoma Coverage →
              </Link>
            </div>
          </div>

          {/* COL 4: QUICK LINKS */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-display font-extrabold text-base text-white uppercase tracking-wider text-brand-lime">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link href="/" className="hover:text-brand-lime transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-brand-lime transition-colors">
                  About Anthony
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-brand-lime transition-colors">
                  Work Gallery
                </Link>
              </li>
              <li>
                <Link href="/request-estimate" className="hover:text-brand-lime transition-colors">
                  Request Free Quote
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-lime transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-brand-lime transition-colors text-xs text-white/60">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 gap-4">
          <p>
            © {new Date().getFullYear()} Bradley&#39;s Mowing & Landscaping LLC. All Rights Reserved.
          </p>
          <p>
            Locally Owned & Operated in El Reno, Oklahoma.
          </p>
        </div>

      </div>
    </footer>
  );
}
