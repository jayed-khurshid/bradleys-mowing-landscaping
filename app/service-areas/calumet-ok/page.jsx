import Image from 'next/image';
import Link from 'next/link';
import { MapPin, CheckCircle2, Phone, ArrowRight, ShieldCheck, Star } from 'lucide-react';
import QuoteForm from '@/components/QuoteForm';
import { business } from '@/lib/data';

export const metadata = {
  title: "Lawn Care & Acreage Mowing in Calumet, OK | Bradley's Mowing & Landscaping",
  description: "Serving Calumet with residential lawn maintenance, pasture edge clearing, fence line clearing, and heavy-duty property cleanups.",
  keywords: ["lawn mowing Calumet OK", "landscaping Calumet Oklahoma", "lawn care Calumet", "yard cleanup Calumet OK"],
};

export default function AreaPage() {
  const features = ["Zero-turn commercial acreage mowing for spacious rural properties","Tough brush clearing, cedar sapling removal, and pasture edge cleanup","Fence-line reclamation removing thick weeds, vines, and old debris","Light dirt grading and filling low spots across uneven land","Storm limb removal and rural yard cleanouts"];
  const nearby = [{"name":"El Reno, OK","slug":"el-reno-ok"},{"name":"Geary, OK","slug":"geary-ok"},{"name":"Okarche, OK","slug":"okarche-ok"}];

  return (
    <div className="bg-[#FAFAF7]">
      {/* HEADER */}
      <section className="bg-[#053e14] text-white pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-15" style={{ backgroundImage: "url('/images/commercial-mowing.jpg')" }} />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-black/40 px-3.5 py-1.5 rounded-full border border-white/15 text-xs font-semibold mb-4 text-brand-lime">
            <MapPin className="w-3.5 h-3.5" />
            <span>Calumet, Oklahoma Service Area</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight leading-tight">
            Lawn Care & Acreage Mowing in Calumet, OK
          </h1>
          <p className="text-white/85 text-base sm:text-lg mt-4 max-w-2xl mx-auto font-normal">
            Serving Calumet with residential lawn maintenance, pasture edge clearing, fence line clearing, and heavy-duty property cleanups.
          </p>
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/request-estimate"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-brand-cta hover:bg-brand-lime text-black font-extrabold text-sm shadow-md transition-all"
            >
              <span>Get Free Estimate in Calumet</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={business.phoneTel}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all"
            >
              <Phone className="w-4 h-4 text-brand-lime" />
              <span>Call {business.phone}</span>
            </a>
          </div>
        </div>
      </section>

      {/* BODY CONTENT */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold text-brand-cta uppercase tracking-widest bg-brand-cta/10 px-3.5 py-1.5 rounded-full">
              Local Oklahoma Standards
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-gray-900 leading-tight">
              Dependable Outdoor Maintenance for Calumet Properties
            </h2>
            <p className="text-gray-700 text-base leading-relaxed font-sans">
              Anthony Bradley operates Bradley's Mowing & Landscaping with an owner-operated commitment to reliability and fair pricing. Whether you have a residential yard in Calumet or manage commercial acreage in Canadian County, we provide complete property solutions without the hassle.
            </p>

            <div className="space-y-3 pt-2">
              {features.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-gray-800">
                  <CheckCircle2 className="w-5 h-5 text-brand-cta shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-gray-200">
              <h3 className="font-display font-bold text-base text-gray-900 mb-2">
                Nearby Communities We Also Serve:
              </h3>
              <div className="flex flex-wrap gap-2">
                {nearby.map((near, idx) => (
                  <Link
                    key={idx}
                    href={`/service-areas/${near.slug}`}
                    className="text-xs font-semibold bg-white border border-gray-200 hover:border-brand-cta px-3 py-1.5 rounded-lg text-gray-700 hover:text-brand-forest transition-colors"
                  >
                    {near.name} →
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white relative group">
              <Image
                src="/images/commercial-mowing.jpg"
                alt="Lawn Care & Acreage Mowing in Calumet, OK"
                width={650}
                height={480}
                className="w-full h-80 sm:h-[450px] object-cover group-hover:scale-103 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 right-5 text-white flex items-center justify-between">
                <div>
                  <p className="font-display font-bold text-lg leading-tight">
                    Bradley's Mowing & Landscaping LLC
                  </p>
                  <p className="text-xs text-white/90">
                    Serving Calumet, OK & Surrounding Communities
                  </p>
                </div>
                <span className="bg-brand-cta text-black text-xs font-extrabold px-3 py-1 rounded-full">
                  5.0 ★ Rated
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ESTIMATE FORM */}
      <QuoteForm compact={false} />
    </div>
  );
}
