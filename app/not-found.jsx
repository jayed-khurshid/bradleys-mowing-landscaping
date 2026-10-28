import Link from 'next/link';
import { Home, Phone, ArrowRight } from 'lucide-react';
import { business } from '@/lib/data';

export const metadata = {
  title: "Page Not Found | Bradley's Mowing & Landscaping LLC",
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#FAFAF7] px-4 py-16">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-10 border border-gray-200/80 shadow-xl text-center space-y-5">
        <span className="text-6xl font-extrabold font-display text-brand-cta">
          404
        </span>
        <h1 className="font-display font-extrabold text-2xl text-gray-900">
          Page Not Found
        </h1>
        <p className="text-sm text-gray-600 font-sans leading-relaxed">
          The page you are looking for does not exist or may have been moved. Let&#39;s get you back on track to clean, sharp lawn care.
        </p>

        <div className="flex flex-col gap-2.5 pt-2">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-brand-cta hover:bg-brand-lime text-black font-extrabold text-sm shadow-md transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold text-sm transition-all"
          >
            <span>Browse All Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href={business.phoneTel}
            className="inline-flex items-center justify-center gap-2 text-xs font-bold text-brand-forest hover:text-brand-cta pt-2"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Need Help? Call {business.phone}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
