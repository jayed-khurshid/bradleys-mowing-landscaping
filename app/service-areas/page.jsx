import Link from 'next/link';
import { MapPin, Navigation, ArrowRight, Phone, CheckCircle2 } from 'lucide-react';
import { serviceAreas, business } from '@/lib/data';
import ServiceAreaMap from '@/components/ServiceAreaMap';
import QuoteForm from '@/components/QuoteForm';

export const metadata = {
  title: "Service Areas | Bradley's Mowing & Landscaping LLC",
  description: "View all communities served by Bradley's Mowing & Landscaping LLC: El Reno, Yukon, Mustang, Calumet, Piedmont, Okarche, Union City, and Geary, Oklahoma.",
};

export default function ServiceAreasPage() {
  return (
    <div className="bg-[#FAFAF7]">
      {/* HEADER */}
      <section className="bg-[#053e14] text-white pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-15" style={{ backgroundImage: "url('/images/striped-lawn.jpg')" }} />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="text-xs font-bold text-brand-lime uppercase tracking-widest block mb-2">
            Local Oklahoma Coverage
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight">
            Our Service Areas in Canadian County
          </h1>
          <p className="text-white/85 text-base sm:text-lg mt-4 max-w-2xl mx-auto font-normal">
            Locally based in El Reno and providing dependable lawn care, landscaping, drainage, and property cleanups to surrounding West OKC communities.
          </p>
        </div>
      </section>

      {/* SERVICE AREAS GRID */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceAreas.map((area) => (
              <div
                key={area.slug}
                className={`rounded-3xl p-6 sm:p-7 border flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                  area.primary
                    ? 'bg-[#053e14] text-white border-brand-cta shadow-lg'
                    : 'bg-white text-gray-900 border-gray-200/80 shadow-md'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-bold uppercase tracking-wider ${area.primary ? 'text-brand-lime' : 'text-brand-cta'}`}>
                      {area.state} Service Area
                    </span>
                    {area.primary && (
                      <span className="bg-brand-cta text-black text-[10px] font-extrabold px-2.5 py-0.5 rounded-full">
                        Hometown Base
                      </span>
                    )}
                  </div>

                  <h2 className="font-display font-extrabold text-2xl mb-2">
                    {area.name}, OK
                  </h2>

                  <p className={`text-xs sm:text-sm leading-relaxed mb-4 ${area.primary ? 'text-white/80' : 'text-gray-600'}`}>
                    {area.description}
                  </p>

                  <div className="space-y-1.5 mb-6">
                    {area.highlights.map((hl, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs">
                        <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${area.primary ? 'text-brand-lime' : 'text-brand-cta'}`} />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <Link
                    href={`/service-areas/${area.slug}`}
                    className={`text-xs font-bold inline-flex items-center gap-1 ${area.primary ? 'text-brand-lime hover:underline' : 'text-brand-forest hover:text-brand-cta'}`}
                  >
                    <span>View City Services</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    href="/request-estimate"
                    className="text-xs font-extrabold bg-brand-cta text-black px-3 py-1.5 rounded-full hover:bg-brand-lime transition-colors"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAP SECTION */}
      <ServiceAreaMap />

      {/* ESTIMATE REQUEST FORM */}
      <QuoteForm compact={false} />
    </div>
  );
}
