import Link from 'next/link';
import { business } from '@/lib/data';

export const metadata = {
  title: "Privacy Policy | Bradley's Mowing & Landscaping LLC",
  description: "Privacy policy for Bradley's Mowing & Landscaping LLC in El Reno, Oklahoma.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#FAFAF7] pt-32 pb-16 sm:pt-40 sm:pb-24 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/80 shadow-md space-y-6 text-gray-700 font-sans leading-relaxed">
        <h1 className="text-3xl sm:text-4xl font-extrabold font-display text-gray-900">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-500">
          Last Updated: October 2026
        </p>

        <section className="space-y-3">
          <h2 className="text-xl font-bold font-display text-gray-900">1. Information We Collect</h2>
          <p className="text-sm">
            Bradley’s Mowing & Landscaping LLC collects information you provide directly to us when requesting an estimate or contacting us by phone, email, or web form. This typically includes your name, telephone number, email address, property service address, and descriptions of services desired.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold font-display text-gray-900">2. How We Use Your Information</h2>
          <p className="text-sm">
            We use the information you submit solely to:
          </p>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>Evaluate your property requirements and prepare honest estimates</li>
            <li>Contact you regarding scheduling, questions, or project follow-up</li>
            <li>Provide agreed lawn care, landscaping, and property maintenance services</li>
            <li>Send invoices and customer service communications</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold font-display text-gray-900">3. Information Sharing</h2>
          <p className="text-sm">
            We do not sell, rent, or share your personal contact details with third-party advertisers or telemarketers. Your information is kept strictly confidential within our business operations.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold font-display text-gray-900">4. Contact Us</h2>
          <p className="text-sm">
            If you have questions regarding this Privacy Policy, please contact Anthony Bradley at:
          </p>
          <p className="text-sm font-semibold text-gray-900">
            Bradley’s Mowing & Landscaping LLC<br />
            El Reno, Oklahoma 73036<br />
            Phone: {business.phone}<br />
            Email: {business.email}
          </p>
        </section>

        <div className="pt-4 border-t border-gray-200">
          <Link href="/" className="text-xs font-bold text-brand-forest hover:text-brand-cta">
            ← Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
