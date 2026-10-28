import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook } from 'lucide-react';
import { business } from '@/lib/data';
import ContactQuoteForm from '@/components/ContactQuoteForm';

export const metadata = {
  title: "Contact Anthony Bradley | Bradley's Mowing & Landscaping LLC",
  description: "Get in touch with Anthony Bradley at Bradley's Mowing & Landscaping LLC in El Reno, Oklahoma. Call (140) 599-6858 or submit an online estimate request.",
};

export default function ContactPage() {
  return (
    <div className="bg-[#FAFAF7]">
      {/* HEADER */}
      <section className="bg-[#053e14] text-white pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24 px-4 sm:px-6 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="text-xs font-bold text-brand-lime uppercase tracking-widest block mb-2">
            Get In Touch Directly
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight">
            Contact Bradley&#39;s Mowing & Landscaping
          </h1>
          <p className="text-white/85 text-base sm:text-lg mt-4 max-w-2xl mx-auto font-normal">
            Have questions about a lawn maintenance schedule, drainage project, or property cleanup? Contact Anthony Bradley directly.
          </p>
        </div>
      </section>

      {/* CONTACT DETAILS CARDS */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Card 1: Phone */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-md text-center flex flex-col items-center justify-between">
            <div className="w-14 h-14 rounded-2xl bg-brand-inputBg border border-brand-inputBorder flex items-center justify-center text-brand-forest mb-4">
              <Phone className="w-7 h-7 text-brand-cta" />
            </div>
            <div>
              <h2 className="font-display font-bold text-xl text-gray-900 mb-1">Direct Phone</h2>
              <p className="text-xs text-gray-500 mb-3">Call or Text Anthony Bradley</p>
              <a
                href={business.phoneTel}
                className="text-base sm:text-lg font-extrabold text-brand-forest hover:text-brand-cta transition-colors"
              >
                {business.phone}
              </a>
            </div>
            <div className="mt-4 pt-3 border-t border-gray-100 w-full text-xs text-gray-500">
              Monday � Saturday: 7am � 7pm
            </div>
          </div>

          {/* Card 2: Email */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-md text-center flex flex-col items-center justify-between">
            <div className="w-14 h-14 rounded-2xl bg-brand-inputBg border border-brand-inputBorder flex items-center justify-center text-brand-forest mb-4">
              <Mail className="w-7 h-7 text-brand-cta" />
            </div>
            <div>
              <h2 className="font-display font-bold text-xl text-gray-900 mb-1">Email Inquiries</h2>
              <p className="text-xs text-gray-500 mb-3">Send project details & photos</p>
              <a
                href={business.emailMailto}
                className="text-sm sm:text-base font-bold text-brand-forest hover:text-brand-cta transition-colors break-all"
              >
                {business.email}
              </a>
            </div>
            <div className="mt-4 pt-3 border-t border-gray-100 w-full text-xs text-gray-500">
              Responses within 24 hours
            </div>
          </div>

          {/* Card 3: Location */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-md text-center flex flex-col items-center justify-between">
            <div className="w-14 h-14 rounded-2xl bg-brand-inputBg border border-brand-inputBorder flex items-center justify-center text-brand-forest mb-4">
              <MapPin className="w-7 h-7 text-brand-cta" />
            </div>
            <div>
              <h2 className="font-display font-bold text-xl text-gray-900 mb-1">Hometown Base</h2>
              <p className="text-xs text-gray-500 mb-3">Canadian County, Oklahoma</p>
              <p className="text-base font-bold text-gray-900">
                El Reno, OK 73036
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-gray-100 w-full text-xs text-gray-500">
              Serving El Reno & Canadian County
            </div>
          </div>

        </div>

        {/* EMBEDDED CONTACT FORM MATCHING IMAGE 3 */}
        <ContactQuoteForm />
      </section>
    </div>
  );
}
