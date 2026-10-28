import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ShieldCheck, MapPin } from 'lucide-react';
import { business } from '@/lib/data';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 px-4 sm:px-6 bg-[#FAFAF7]">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: PHOTOGRAPHY CARD */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
              <Image
                src="/images/mowing-backyard.jpg"
                alt="Anthony Bradley performing lawn maintenance in El Reno, Oklahoma backyard"
                width={600}
                height={500}
                className="w-full h-80 sm:h-[450px] object-cover group-hover:scale-103 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="inline-block bg-brand-cta text-black text-xs font-extrabold px-3 py-1 rounded-full mb-2">
                  Owner & Operator
                </span>
                <p className="font-display font-bold text-lg leading-tight">
                  Anthony Bradley
                </p>
                <p className="text-xs text-white/90">
                  Bradley's Mowing & Landscaping LLC • El Reno, OK
                </p>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 hidden sm:flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-brand-cta/20 text-brand-forest flex items-center justify-center font-bold">
                <MapPin className="w-6 h-6 text-brand-forest" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">Hometown Service</p>
                <p className="text-sm font-bold text-gray-900">El Reno, Oklahoma</p>
              </div>
            </div>
          </div>

          {/* RIGHT: STORY CONTENT */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            <div className="inline-flex items-center gap-2 text-xs font-bold text-brand-cta uppercase tracking-widest bg-brand-cta/10 px-3.5 py-1.5 rounded-full">
              <span>Hometown Dedication</span>
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-gray-900 tracking-tight leading-[1.15]">
              The El Reno Landscaper <span className="text-brand-cta">For You</span>
            </h2>

            <div className="space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed font-sans">
              <p>
                <strong className="text-gray-900">Bradley’s Mowing & Landscaping</strong> is a locally owned and operated outdoor property maintenance and landscaping company based right here in El Reno, Oklahoma.
              </p>
              <p>
                Our business was built from the ground up on honest hard work, dependability, and taking personal pride in every property we touch. What started with weekly lawn mowing and routine yard maintenance has steadily grown into comprehensive landscaping, drainage improvements, yard leveling, brush clearing, and outdoor property improvement services.
              </p>
              <p>
                When you call Bradley’s, you deal directly with Anthony Bradley. There are no middlemen, no cut corners, and no surprise charges. We work with homeowners, commercial property owners, rental landlords, and property managers who want dependable, high-quality outdoor results.
              </p>
            </div>

            {/* Quick check points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full pt-2 text-sm font-semibold text-gray-800">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-brand-cta shrink-0" />
                <span>Work directly with the owner Anthony</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-brand-cta shrink-0" />
                <span>Residential lawns & commercial grounds</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-brand-cta shrink-0" />
                <span>Clear upfront estimates before work starts</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-brand-cta shrink-0" />
                <span>Equipped for tough clearing & dirt work</span>
              </div>
            </div>

            {/* Button */}
            <div className="pt-3">
              <Link
                href="/request-estimate"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-gray-950 bg-brand-cta hover:bg-brand-lime transition-all duration-200 shadow-md hover:shadow-glow-green transform hover:-translate-y-0.5"
              >
                <span>Request A Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
