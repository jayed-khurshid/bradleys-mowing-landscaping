import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, Phone, ArrowRight } from 'lucide-react';
import QuoteForm from '@/components/QuoteForm';
import { business } from '@/lib/data';

export const metadata = {
  title: "Residential Lawn Care in El Reno, OK | Bradley's Mowing & Landscaping",
  description: "Reliable Residential Lawn Care services provided by Bradley's Mowing & Landscaping LLC in El Reno, Oklahoma and Canadian County.",
};

export default function SubServicePage() {
  return (
    <div className="bg-[#FAFAF7]">
      <section className="bg-[#053e14] text-white pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24 px-4 sm:px-6 text-center">
        <span className="text-xs font-bold text-brand-lime uppercase tracking-widest block mb-2">
          Specialized Service
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight">
          Residential Lawn Care in El Reno, OK
        </h1>
        <p className="text-white/85 text-base sm:text-lg mt-4 max-w-2xl mx-auto font-normal">
          Dependable, owner-operated residential lawn care for residential homes and commercial properties throughout Canadian County.
        </p>
        <div className="pt-6 flex justify-center gap-3">
          <Link
            href="/request-estimate"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-brand-cta hover:bg-brand-lime text-black font-extrabold text-sm shadow-md"
          >
            <span>Request Free Quote</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 max-w-4xl mx-auto space-y-6 text-gray-700">
        <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-gray-900">
          Quality Residential Lawn Care Solutions
        </h2>
        <p className="text-base sm:text-lg leading-relaxed">
          At Bradley's Mowing & Landscaping LLC, Anthony Bradley ensures every residential lawn care project is executed with precision, clean edges, and thorough property cleanup. We discuss your project expectations upfront and provide honest, transparent estimates.
        </p>
        <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm space-y-2">
          <div className="flex items-center gap-2 text-sm font-semibold text-gray-900">
            <CheckCircle2 className="w-4 h-4 text-brand-cta shrink-0" />
            <span>Serving El Reno, Yukon, Mustang, Calumet, and surrounding areas</span>
          </div>
          <div className="flex items-center gap-2 text-sm font-semibold text-gray-900">
            <CheckCircle2 className="w-4 h-4 text-brand-cta shrink-0" />
            <span>Equipped with commercial mowers, trimmers, and grading tools</span>
          </div>
          <div className="flex items-center gap-2 text-sm font-semibold text-gray-900">
            <CheckCircle2 className="w-4 h-4 text-brand-cta shrink-0" />
            <span>Owner Anthony Bradley oversees all work directly</span>
          </div>
        </div>
        <div className="pt-2">
          <Link href="/services" className="text-sm font-bold text-brand-forest hover:text-brand-cta inline-flex items-center gap-1">
            ← Back to all services overview
          </Link>
        </div>
      </section>

      <QuoteForm compact={false} />
    </div>
  );
}
