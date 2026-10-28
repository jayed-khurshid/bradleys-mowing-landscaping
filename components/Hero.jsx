import Image from 'next/image';
import Link from 'next/link';
import { Star, MapPin, ShieldCheck, ThumbsUp, Phone, ArrowRight, CheckCircle2 } from 'lucide-react';
import { business } from '@/lib/data';

export default function Hero() {
  return (
    <section 
      className="relative text-white overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28 lg:pt-40 lg:pb-36 min-h-[640px] lg:min-h-[700px] bg-cover bg-center flex flex-col justify-center"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(3, 38, 12, 0.92) 0%, rgba(7, 91, 29, 0.85) 50%, rgba(3, 38, 12, 0.95) 100%), url('/images/striped-lawn.jpg')`,
      }}
    >
      {/* Subtle organic pattern accents */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none" 
        style={{
          backgroundImage: 'radial-gradient(#74DD3A 1.5px, transparent 1.5px)',
          backgroundSize: '32px 32px',
        }}
      />
      <div className="absolute -right-24 -top-24 w-96 h-96 bg-brand-cta/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -left-20 bottom-0 w-80 h-80 bg-brand-lime/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: DISPLAY HEADLINE & TRUST BADGES */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* GOOGLE TRUST BADGE */}
            <div className="inline-flex items-center gap-2.5 bg-black/45 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/15 text-xs font-semibold shadow-sm">
              <svg className="w-4 h-4 shrink-0" width="16" height="16" viewBox="0 0 24 24">
                <path d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.65v3.05h3.9c2.28-2.1 3.645-5.2 3.645-9.14z" fill="#4285F4"/>
                <path d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.9-3.05c-1.08.72-2.45 1.16-4.03 1.16-3.1 0-5.74-2.1-6.68-4.93H1.21v3.15C3.25 21.4 7.33 24 12 24z" fill="#34A853"/>
                <path d="M5.32 14.27c-.24-.72-.38-1.49-.38-2.27s.14-1.55.38-2.27V6.58H1.21C.44 8.11 0 9.99 0 12s.44 3.89 1.21 5.42l4.11-3.15z" fill="#FBBC05"/>
                <path d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.25 2.6 1.21 6.58l4.11 3.15c.94-2.83 3.58-4.98 6.68-4.98z" fill="#EA4335"/>
              </svg>
              <span className="text-white font-bold">4.8 Rating</span>
              <div className="flex text-amber-400 text-xs tracking-wider">★★★★★</div>
              <span className="text-emerald-200 text-[11px] hidden sm:inline">| Verified Oklahoma Local Service</span>
            </div>

            {/* DISPLAY HEADING — MANDATORY: First two words italicized */}
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.08]">
              <span className="italic text-brand-lime">Outdoor Spaces,</span> Done Right in El Reno, OK
            </h1>

            {/* SUPPORTING COPY */}
            <p className="text-base sm:text-lg text-white/90 max-w-2xl font-normal leading-relaxed">
              From dependable residential lawn maintenance and acreage mowing to property cleanups, landscaping, French drains, and yard leveling, Bradley’s Mowing & Landscaping delivers reliable, owner-operated service across El Reno, Yukon, Mustang, and surrounding Canadian County communities.
            </p>

            {/* CALL TO ACTION BUTTONS */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto pt-2">
              <Link
                href="/request-estimate"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-bold text-gray-950 bg-brand-cta hover:bg-brand-lime transition-all duration-200 shadow-lg hover:shadow-glow-green transform hover:-translate-y-0.5 active:translate-y-0 text-base"
              >
                <span>Request An Estimate</span>
                <ArrowRight className="w-5 h-5" />
              </Link>

              <a
                href={business.phoneTel}
                className="inline-flex items-center justify-center gap-2.5 font-bold text-white hover:text-brand-lime transition-all duration-200 text-base sm:text-lg px-3 py-2 group"
              >
                <Phone className="w-5 h-5 text-brand-lime fill-brand-lime group-hover:scale-110 transition-transform" />
                <span className="group-hover:underline underline-offset-4">{business.phone}</span>
              </a>
            </div>

            {/* TRUST PILLS */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-3 text-xs sm:text-sm font-medium text-white/90">
              <div className="inline-flex items-center gap-1.5 bg-black/35 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-white/15">
                <MapPin className="w-4 h-4 text-brand-lime" />
                <span>Locally Owned & Operated</span>
              </div>
              <div className="inline-flex items-center gap-1.5 bg-black/35 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-white/15">
                <ShieldCheck className="w-4 h-4 text-brand-lime" />
                <span>Reliable & Insured</span>
              </div>
              <div className="inline-flex items-center gap-1.5 bg-black/35 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-white/15">
                <ThumbsUp className="w-4 h-4 text-brand-lime" />
                <span>Satisfaction Guaranteed</span>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: FEATURED REAL WORK IMAGE & OWNER BADGE */}
          <div className="lg:col-span-5 relative">
            
            {/* Owner Pill Badge (Holtzclaw style) */}
            <div className="inline-flex items-center gap-3 bg-[#053e14]/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-brand-lime/40 shadow-xl mb-4 transform hover:scale-102 transition-transform">
              <div className="w-10 h-10 rounded-full bg-brand-cta text-black font-extrabold flex items-center justify-center text-sm shadow-md">
                AB
              </div>
              <div>
                <h3 className="font-display font-bold text-white text-sm sm:text-base leading-tight">
                  Anthony Bradley
                </h3>
                <p className="text-xs text-brand-lime font-medium">
                  Owner & Operator • El Reno, OK
                </p>
              </div>
            </div>

            {/* Featured Real Work Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20 group">
              <Image
                src="/images/flower-bed-mulch.jpg"
                alt="Manicured landscaping and flower bed with fresh dark mulch completed by Bradley's Mowing & Landscaping in El Reno, OK"
                width={650}
                height={500}
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white text-xs sm:text-sm font-medium flex items-center justify-between">
                <span className="bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
                  Featured Project: Flower Bed Renovation
                </span>
                <span className="text-brand-lime font-bold">
                  El Reno, OK
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
