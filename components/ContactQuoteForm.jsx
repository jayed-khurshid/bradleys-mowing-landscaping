'use client';

import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { business } from '@/lib/data';

export default function ContactQuoteForm() {
  const [formData, setFormData] = useState({
    name: '',
    service: '',
    address: '',
    source: '',
    phone: '',
    email: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl border border-gray-100 max-w-3xl mx-auto">
      
      {/* Title & Subtitle matching Image 3 */}
      <div className="text-center mb-8">
        <h2 className="font-display font-black text-3xl sm:text-4xl text-gray-950 tracking-tight">
          Request A <span className="text-[#74DD3A]">Free Quote</span>
        </h2>
        <p className="text-xs sm:text-sm text-gray-600 mt-2 font-sans font-medium">
          Fill Out The Form Below For A Free Estimate For Any Of Our Services.
        </p>
      </div>

      {submitted ? (
        <div className="bg-[#F2FFEA] border border-[#d2f3c4] rounded-2xl p-8 text-center max-w-md mx-auto space-y-3 animate-fadeIn">
          <div className="w-14 h-14 rounded-full bg-[#74DD3A] text-black flex items-center justify-center mx-auto shadow-md">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <h3 className="font-display font-bold text-xl text-gray-900">
            Estimate Request Sent!
          </h3>
          <p className="text-sm text-gray-700 leading-relaxed font-sans">
            Thank you, <span className="font-bold">{formData.name}</span>! Anthony Bradley will review your property details and contact you at <span className="font-semibold">{formData.phone}</span> shortly.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* 2-COLUMN GRID matching Image 3 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
            
            {/* ROW 1 */}
            <div>
              <input
                type="text"
                required
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-[#F2FFEA] border border-[#9ed390] rounded-xl px-4 py-3.5 text-sm font-medium text-gray-900 placeholder-[#526d4b] focus:outline-none focus:border-[#24B80B] focus:ring-2 focus:ring-[#24B80B]/25 transition-all"
              />
            </div>

            <div>
              <input
                type="text"
                required
                placeholder="Services Desired"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full bg-[#F2FFEA] border border-[#9ed390] rounded-xl px-4 py-3.5 text-sm font-medium text-gray-900 placeholder-[#526d4b] focus:outline-none focus:border-[#24B80B] focus:ring-2 focus:ring-[#24B80B]/25 transition-all"
              />
            </div>

            {/* ROW 2 */}
            <div>
              <input
                type="text"
                required
                placeholder="Address"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full bg-[#F2FFEA] border border-[#9ed390] rounded-xl px-4 py-3.5 text-sm font-medium text-gray-900 placeholder-[#526d4b] focus:outline-none focus:border-[#24B80B] focus:ring-2 focus:ring-[#24B80B]/25 transition-all"
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="How did you hear about us?"
                value={formData.source}
                onChange={(e) => setFormData({ ...formData, source: e.target.value })}
                className="w-full bg-[#F2FFEA] border border-[#9ed390] rounded-xl px-4 py-3.5 text-sm font-medium text-gray-900 placeholder-[#526d4b] focus:outline-none focus:border-[#24B80B] focus:ring-2 focus:ring-[#24B80B]/25 transition-all"
              />
            </div>

            {/* ROW 3 */}
            <div>
              <input
                type="tel"
                required
                placeholder="Phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-[#F2FFEA] border border-[#9ed390] rounded-xl px-4 py-3.5 text-sm font-medium text-gray-900 placeholder-[#526d4b] focus:outline-none focus:border-[#24B80B] focus:ring-2 focus:ring-[#24B80B]/25 transition-all"
              />
            </div>

            <div>
              <input
                type="email"
                required
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-[#F2FFEA] border border-[#9ed390] rounded-xl px-4 py-3.5 text-sm font-medium text-gray-900 placeholder-[#526d4b] focus:outline-none focus:border-[#24B80B] focus:ring-2 focus:ring-[#24B80B]/25 transition-all"
              />
            </div>

          </div>

          {/* FULL WIDTH BUTTON matching Image 3 */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-[#24b80b] hover:bg-[#1ea009] text-black font-display font-extrabold text-base py-4 px-6 rounded-full shadow-md transition-all active:scale-[0.99] flex items-center justify-center cursor-pointer tracking-wide"
            >
              {submitting ? 'Submitting Request...' : 'Get Free Quote'}
            </button>
          </div>

        </form>
      )}

    </div>
  );
}
