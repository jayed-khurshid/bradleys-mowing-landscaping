'use client';

import Link from 'next/link';
import { Phone, Calendar } from 'lucide-react';
import { business } from '@/lib/data';

export default function MobileStickyBar() {
  return (
    <div className="sm:hidden fixed bottom-0 inset-x-0 z-40 bg-[#03260c]/98 backdrop-blur-md border-t border-brand-cta/30 px-3 py-2.5 shadow-2xl flex items-center gap-2">
      <a
        href={business.phoneTel}
        className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-full bg-white/10 text-white font-bold text-xs border border-white/20 active:bg-white/20"
      >
        <Phone className="w-4 h-4 text-brand-lime" />
        <span>Call Now</span>
      </a>

      <Link
        href="/request-estimate"
        className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-full bg-[#24b80b] text-black font-extrabold text-xs shadow-md active:bg-brand-lime"
      >
        <Calendar className="w-4 h-4" />
        <span>Get Free Quote</span>
      </Link>
    </div>
  );
}
