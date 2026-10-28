import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Phone } from 'lucide-react';
import { serviceCategories, business } from '@/lib/data';
import QuoteForm from '@/components/QuoteForm';

export const metadata = {
  title: "Professional Lawn Care & Landscaping Services in El Reno, OK",
  description: "Explore all residential and commercial services offered by Bradley's Mowing & Landscaping LLC: lawn mowing, landscaping, drainage, yard leveling, brush clearing, and cleanups in El Reno & Canadian County.",
};

export default function ServicesPage() {
  return (
    <div className="bg-[#FAFAF7]">
      {/* HEADER */}
      <section className="bg-[#053e14] text-white pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-15" style={{ backgroundImage: "url('/images/flower-bed-mulch.jpg')" }} />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="text-xs font-bold text-brand-lime uppercase tracking-widest block mb-2">
            Complete Outdoor Maintenance
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight">
            Our Services & Capabilities
          </h1>
          <p className="text-white/85 text-base sm:text-lg mt-4 max-w-2xl mx-auto font-normal">
            From scheduled weekly mowing to tough clearing, drainage solutions, and full landscape renovations in El Reno and Canadian County.
          </p>
        </div>
      </section>

      {/* DETAILED CATEGORIES */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-[1240px] mx-auto space-y-20">
          {serviceCategories.map((category, catIdx) => (
            <div key={catIdx} className="space-y-8">
              <div className="border-b border-gray-200 pb-4">
                <span className="text-xs font-extrabold text-brand-cta uppercase tracking-widest block mb-1">
                  Category 0{catIdx + 1}
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-gray-900">
                  {category.name}
                </h2>
                <p className="text-gray-600 text-sm sm:text-base mt-2 max-w-3xl font-sans">
                  {category.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {category.services.map((svc, svcIdx) => (
                  <div
                    key={svcIdx}
                    className="bg-white rounded-3xl overflow-hidden border border-gray-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div className="relative h-48 w-full overflow-hidden" style={{ position: 'relative' }}>
                      <Image
                        src={svc.heroImage}
                        alt={svc.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <h3 className="absolute bottom-3 left-4 right-4 text-white font-display font-bold text-lg leading-tight">
                        {svc.title}
                      </h3>
                    </div>

                    <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                      <p className="text-sm text-gray-600 font-sans leading-relaxed">
                        {svc.shortDesc}
                      </p>

                      <ul className="space-y-2 text-xs text-gray-700">
                        {svc.features.slice(0, 3).map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-brand-cta shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                        <Link
                          href={`/services/${svc.slug}`}
                          className="text-xs font-bold text-brand-forest hover:text-brand-cta inline-flex items-center gap-1 uppercase tracking-wider"
                        >
                          <span>Learn More Details</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                        <Link
                          href="/request-estimate"
                          className="text-xs font-extrabold text-black bg-brand-cta hover:bg-brand-lime px-3 py-1.5 rounded-full shadow-sm transition-colors"
                        >
                          Get Quote
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EMBEDDED ESTIMATE FORM */}
      <QuoteForm compact={false} />
    </div>
  );
}
