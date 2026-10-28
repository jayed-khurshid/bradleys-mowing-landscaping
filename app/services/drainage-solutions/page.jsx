import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, Phone, ArrowRight, ShieldCheck, HelpCircle, Star } from 'lucide-react';
import QuoteForm from '@/components/QuoteForm';
import { business } from '@/lib/data';

export const metadata = {
  title: "Drainage Solutions & French Drains in El Reno, OK | Bradley's Mowing & Landscaping",
  description: "Custom French drain installation, surface swales, and downspout extensions to eliminate standing water.",
  keywords: ["drainage solutions El Reno OK", "Drainage Solutions & French Drains Canadian County", "Bradley's Mowing"],
};

export default function ServicePage() {
  const features = ["On-site slope, elevation, and water flow analysis","Deep French drain trenching with commercial filter fabric wrap","Perforated PVC or corrugated drainage pipe embedded in washed gravel","Catch basin installation in localized low collection points","Downspout burial and popup emitter discharge away from home"];
  const problems = ["Water pooling around home foundations threatening structural integrity","Soggy, muddy backyard sections that never dry out between rains","Roof downspouts dumping heavy water directly onto walkways or flower beds","Soil erosion and washed-out landscape beds on sloped yards"];
  const faqs = [{"q":"What is a French drain and how does it work?","a":"A French drain is a gravel-filled trench containing a perforated pipe that redirects surface and subsurface groundwater downhill away from your home."},{"q":"How long does a French drain last?","a":"When properly installed with commercial filter fabric and washed drainage stone, a French drain lasts for decades without clogging."}];

  return (
    <div className="bg-[#FAFAF7]">
      {/* HEADER */}
      <section className="bg-[#053e14] text-white pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-15" style={{ backgroundImage: "url('/images/mowing-backyard.jpg')" }} />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-black/40 px-3.5 py-1.5 rounded-full border border-white/15 text-xs font-semibold mb-4 text-brand-lime">
            <span>Drainage Service</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight leading-tight">
            Drainage Solutions & French Drains
          </h1>
          <p className="text-white/85 text-base sm:text-lg mt-4 max-w-2xl mx-auto font-normal">
            Custom French drain installation, surface swales, and downspout extensions to eliminate standing water.
          </p>
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/request-estimate"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-brand-cta hover:bg-brand-lime text-black font-extrabold text-sm shadow-md transition-all"
            >
              <span>Request Free Quote</span>
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

      {/* DETAILED CONTENT */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold text-brand-cta uppercase tracking-widest bg-brand-cta/10 px-3.5 py-1.5 rounded-full">
              Why Quality Work Matters
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-gray-900 leading-tight">
              Professional Workmanship & Attention to Detail
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-sans">
              Oklahoma thunderstorms bring sudden heavy rainfall that can pool against foundations, drown grass, and saturate backyards. We design and install practical drainage solutions like perforated French drains, catch basins, and swales to channel water safely away.
            </p>

            <div className="space-y-3 pt-2">
              <h3 className="font-display font-bold text-base text-gray-900">What Our Service Includes:</h3>
              {features.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-gray-800">
                  <CheckCircle2 className="w-5 h-5 text-brand-cta shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-gray-200">
              <h3 className="font-display font-bold text-base text-gray-900 mb-2">Common Problems We Solve:</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                {problems.map((prob, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-brand-cta font-bold">•</span>
                    <span>{prob}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white relative group">
              <Image
                src="/images/mowing-backyard.jpg"
                alt="Drainage Solutions & French Drains"
                width={650}
                height={500}
                className="w-full h-80 sm:h-[450px] object-cover group-hover:scale-103 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 right-5 text-white flex items-center justify-between">
                <div>
                  <p className="font-display font-bold text-lg leading-tight">
                    Bradley's Mowing & Landscaping LLC
                  </p>
                  <p className="text-xs text-white/90">
                    Locally Owned • El Reno, Oklahoma
                  </p>
                </div>
                <span className="bg-brand-cta text-black text-xs font-extrabold px-3 py-1 rounded-full">
                  Owner on Every Job
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SERVICE FAQS */}
      {faqs.length > 0 && (
        <section className="py-12 px-4 sm:px-6 max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-gray-900 mb-6 text-center">
            Questions About Drainage Solutions & French Drains?
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
                <h3 className="font-display font-bold text-base text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-sm text-gray-600 font-sans leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ESTIMATE REQUEST FORM */}
      <QuoteForm compact={false} />
    </div>
  );
}
