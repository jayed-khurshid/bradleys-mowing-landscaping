import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, Phone, ArrowRight, ShieldCheck, HelpCircle, Star } from 'lucide-react';
import QuoteForm from '@/components/QuoteForm';
import { business } from '@/lib/data';

export const metadata = {
  title: "Commercial Lawn Care & Grounds Maintenance in El Reno, OK | Bradley's Mowing & Landscaping",
  description: "Dependable grounds maintenance for business complexes, storage facilities, HOAs, and rental properties.",
  keywords: ["commercial lawn care El Reno OK", "Commercial Lawn Care & Grounds Maintenance Canadian County", "Bradley's Mowing"],
};

export default function ServicePage() {
  const features = ["Custom weekly or biweekly commercial grounds mowing contracts","Precise curb, sidewalk, and landscape bed edging and weed control","Litter and light debris pickup prior to mowing","High-velocity blower cleanup of parking lots, entryways, and walkways","Itemized transparent invoicing with reliable business communication"];
  const problems = ["Lawn care providers skipping service weeks or showing up inconsistently","Trash and light wind-blown debris left scattered on commercial grounds","Weeds encroaching on parking lot curbs, sidewalks, and signs","Unprofessional crews causing property damage or disruptions"];
  const faqs = [{"q":"Do you offer monthly billing for commercial contracts?","a":"Yes, we provide flexible monthly maintenance billing or per-service invoicing for commercial accounts."},{"q":"Are you licensed and insured for commercial properties?","a":"Yes, Bradley’s Mowing & Landscaping LLC carries full general liability insurance for commercial operations."}];

  return (
    <div className="bg-[#FAFAF7]">
      {/* HEADER */}
      <section className="bg-[#053e14] text-white pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-15" style={{ backgroundImage: "url('/images/commercial-mowing.jpg')" }} />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-black/40 px-3.5 py-1.5 rounded-full border border-white/15 text-xs font-semibold mb-4 text-brand-lime">
            <span>Commercial Service</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight leading-tight">
            Commercial Lawn Care & Grounds Maintenance
          </h1>
          <p className="text-white/85 text-base sm:text-lg mt-4 max-w-2xl mx-auto font-normal">
            Dependable grounds maintenance for business complexes, storage facilities, HOAs, and rental properties.
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
              A sharp, clean commercial landscape projects professionalism to your customers and tenants. Bradley’s provides dependable grounds maintenance contracts tailored to businesses, self-storage facilities, churches, and property management companies throughout El Reno and Yukon.
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
                src="/images/commercial-mowing.jpg"
                alt="Commercial Lawn Care & Grounds Maintenance"
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
            Questions About Commercial Lawn Care & Grounds Maintenance?
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
