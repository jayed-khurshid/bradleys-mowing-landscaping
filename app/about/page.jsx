import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Award, HeartHandshake, Phone, ArrowRight, CheckCircle2, MapPin } from 'lucide-react';
import { business } from '@/lib/data';
import QuoteForm from '@/components/QuoteForm';

export const metadata = {
  title: "About Anthony Bradley & Bradley's Mowing & Landscaping",
  description: "Learn about Anthony Bradley, founder and operator of Bradley's Mowing & Landscaping LLC in El Reno, Oklahoma. Built on hard work, reliability, and owner craftsmanship.",
};

export default function AboutPage() {
  return (
    <div className="bg-[#FAFAF7]">
      {/* PAGE HEADER */}
      <section className="bg-[#053e14] text-white pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-15" style={{ backgroundImage: "url('/images/mowing-backyard.jpg')" }} />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="text-xs font-bold text-brand-lime uppercase tracking-widest block mb-2">
            Locally Owned & Operated
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight">
            About Anthony Bradley & Our Company
          </h1>
          <p className="text-white/85 text-base sm:text-lg mt-4 max-w-2xl mx-auto">
            Built on honest hard work, dependability, and taking pride in every property in El Reno and Canadian County.
          </p>
        </div>
      </section>

      {/* FOUNDER STORY */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/images/mowing-backyard.jpg"
                alt="Anthony Bradley, Owner and Operator of Bradley's Mowing & Landscaping LLC"
                width={600}
                height={550}
                className="w-full h-80 sm:h-[480px] object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-[#03260c] text-white p-5 rounded-2xl shadow-xl border border-brand-lime/30 hidden sm:block">
              <p className="text-xs text-brand-lime font-bold uppercase tracking-wider">Owner & Operator</p>
              <p className="text-lg font-bold font-display">Anthony Bradley</p>
              <p className="text-xs text-white/80">El Reno, Oklahoma</p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-extrabold text-brand-cta uppercase tracking-widest bg-brand-cta/10 px-3.5 py-1.5 rounded-full">
              Our Story & Roots
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-gray-900 leading-tight">
              &ldquo;More Than a Business. A Future for Our Family.&rdquo;
            </h2>

            <div className="space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed font-sans">
              <p>
                I started <strong>Bradley�s Mowing & Landscaping</strong> because I wanted to build something of my own and create a company based on hard work, dedication, and quality workmanship.
              </p>
              <p>
                I�ve always enjoyed hands-on outdoor work, operating equipment, solving real problems on customer properties, and taking on challenging jobs that truly transform a yard. My vision goes far beyond owning a basic mowing outfit. What began with lawn mowing and routine yard maintenance has grown into landscaping, drainage improvements, yard leveling, brush clearing, and complete property maintenance.
              </p>
              <p>
                As this business grows, my long-term goal is to build a company that people in El Reno, Yukon, Mustang, and surrounding Oklahoma communities trust, recognize, and recommend without hesitation.
              </p>
            </div>

            {/* Core Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
              <div className="p-4 rounded-2xl bg-white border border-gray-200/80 shadow-sm">
                <h3 className="font-display font-bold text-base text-gray-950 mb-1">
                  Direct Owner Oversight
                </h3>
                <p className="text-xs sm:text-sm text-gray-600">
                  I personally supervise and perform the work on your property to ensure standards are met.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-gray-200/80 shadow-sm">
                <h3 className="font-display font-bold text-base text-gray-950 mb-1">
                  No Job Too Tough
                </h3>
                <p className="text-xs sm:text-sm text-gray-600">
                  Equipped for thick brush, heavy yard leveling, storm cleanup, and challenging acreage.
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <Link
                href="/request-estimate"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-brand-cta hover:bg-brand-lime text-black font-extrabold text-sm shadow-md transition-all"
              >
                <span>Request An Estimate</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={business.phoneTel}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-gray-50 text-gray-900 border border-gray-300 font-bold text-sm transition-all"
              >
                <Phone className="w-4 h-4 text-brand-cta" />
                <span>Call {business.phone}</span>
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* EMBEDDED QUOTE FORM */}
      <QuoteForm compact={false} />
    </div>
  );
}
