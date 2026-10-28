import { Phone, ShieldCheck, CheckCircle2 } from 'lucide-react';
import ContactQuoteForm from '@/components/ContactQuoteForm';
import { business } from '@/lib/data';

export const metadata = {
  title: "Request A Free Estimate | Bradley's Mowing & Landscaping LLC",
  description: "Request a free upfront estimate for lawn mowing, landscaping, yard leveling, drainage solutions, or property cleanups in El Reno, OK and Canadian County.",
};

export default function RequestEstimatePage() {
  return (
    <div className="bg-[#FAFAF7] pt-32 pb-14 sm:pt-40 sm:pb-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto mb-8 text-center">
        <span className="text-xs font-bold text-brand-cta uppercase tracking-widest bg-brand-cta/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
          Free, Upfront Estimates
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-gray-900 tracking-tight leading-tight">
          Request Your Free Estimate
        </h1>
        <p className="text-gray-600 text-base sm:text-lg mt-3 max-w-2xl mx-auto font-sans">
          Tell Anthony Bradley about your property and the services you need. We discuss expectations upfront and provide honest estimates with zero surprise fees.
        </p>
      </div>

      <ContactQuoteForm />
    </div>
  );
}
