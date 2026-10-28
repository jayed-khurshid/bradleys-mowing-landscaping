'use client';

import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: '',
    service: '',
    email: '',
    phone: '',
    address: '',
    hearAbout: '',
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
    <section id="quote-form" className="relative z-20 px-4 sm:px-6 -mt-14 sm:-mt-16 lg:-mt-20 max-w-[1280px] mx-auto">
      <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl border border-gray-100">
        
        {/* Title matching the reference screenshot */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-gray-950 tracking-tight">
            Request A <span className="text-[#6EDB5A]">Free Quote</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-600 mt-2 font-sans font-medium">
            Fill Out The Form Below For A Free Estimate For Any Of Our Services.
          </p>
        </div>

        {submitted ? (
          <div className="bg-[#F2FFEA] border border-[#9ed390] rounded-2xl p-8 text-center max-w-md mx-auto space-y-3 animate-fadeIn">
            <div className="w-14 h-14 rounded-full bg-[#185520] text-black flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-7 h-7 text-[#74DD3A]" />
            </div>
            <h3 className="font-display font-bold text-xl text-gray-900">
              Quote Request Sent!
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed font-sans">
              Thank you, <span className="font-bold">{formData.name}</span>! Anthony Bradley will review your request and get in touch with you at <span className="font-semibold">{formData.phone}</span> shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* 3 COLUMNS × 2 ROWS (Exact layout from the screenshot) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4">
              
              {/* Row 1, Col 1: Name */}
              <div>
                <input
                  type="text"
                  required
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#F2FFEA] border border-[#9ed390] rounded-xl px-4 py-3 sm:py-3.5 text-sm font-medium text-gray-900 placeholder-[#526d4b] focus:outline-none focus:border-[#24B80B] focus:ring-2 focus:ring-[#24B80B]/25 transition-all"
                />
              </div>

              {/* Row 1, Col 2: Services Desired */}
              <div>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-[#F2FFEA] border border-[#9ed390] rounded-xl px-4 py-3 sm:py-3.5 text-sm font-medium text-gray-900 focus:outline-none focus:border-[#24B80B] focus:ring-2 focus:ring-[#24B80B]/25 transition-all appearance-none cursor-pointer"
                  style={{
                    color: formData.service ? '#111827' : '#526d4b',
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23526d4b'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 1rem center',
                    backgroundSize: '1.25rem',
                  }}
                >
                  <option value="" disabled className="text-[#526d4b]">Services Desired</option>
                  <option value="Lawn Mowing & Maintenance">Lawn Mowing & Maintenance</option>
                  <option value="Landscaping & Bed Renovation">Landscaping & Bed Renovation</option>
                  <option value="Yard Leveling & Minor Grading">Yard Leveling & Minor Grading</option>
                  <option value="Drainage Solutions & French Drains">Drainage Solutions & French Drains</option>
                  <option value="Brush & Fence-Line Clearing">Brush & Fence-Line Clearing</option>
                  <option value="Commercial Grounds Care">Commercial Grounds Care</option>
                  <option value="Other / Complete Outdoor Makeover">Other / Complete Outdoor Makeover</option>
                </select>
              </div>

              {/* Row 1, Col 3: Email */}
              <div>
                <input
                  type="email"
                  required
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#F2FFEA] border border-[#9ed390] rounded-xl px-4 py-3 sm:py-3.5 text-sm font-medium text-gray-900 placeholder-[#526d4b] focus:outline-none focus:border-[#24B80B] focus:ring-2 focus:ring-[#24B80B]/25 transition-all"
                />
              </div>

              {/* Row 2, Col 1: Phone */}
              <div>
                <input
                  type="tel"
                  required
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[#F2FFEA] border border-[#9ed390] rounded-xl px-4 py-3 sm:py-3.5 text-sm font-medium text-gray-900 placeholder-[#526d4b] focus:outline-none focus:border-[#24B80B] focus:ring-2 focus:ring-[#24B80B]/25 transition-all"
                />
              </div>

              {/* Row 2, Col 2: Address */}
              <div>
                <input
                  type="text"
                  required
                  placeholder="Address"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full bg-[#F2FFEA] border border-[#9ed390] rounded-xl px-4 py-3 sm:py-3.5 text-sm font-medium text-gray-900 placeholder-[#526d4b] focus:outline-none focus:border-[#24B80B] focus:ring-2 focus:ring-[#24B80B]/25 transition-all"
                />
              </div>

              {/* Row 2, Col 3: How did you hear about us? */}
              <div>
                <input
                  type="text"
                  placeholder="How did you hear about us?"
                  value={formData.hearAbout}
                  onChange={(e) => setFormData({ ...formData, hearAbout: e.target.value })}
                  className="w-full bg-[#F2FFEA] border border-[#9ed390] rounded-xl px-4 py-3 sm:py-3.5 text-sm font-medium text-gray-900 placeholder-[#526d4b] focus:outline-none focus:border-[#24B80B] focus:ring-2 focus:ring-[#24B80B]/25 transition-all"
                />
              </div>

            </div>

            {/* Row 3: Full Width Button - #24b80b with black text and rounded-full */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-[#24b80b] hover:bg-[#1ea009] text-black font-display font-extrabold text-base sm:text-lg py-4 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center justify-center tracking-wide"
              >
                {submitting ? 'Sending Request...' : 'Get Free Quote'}
              </button>
            </div>
          </form>
        )}

      </div>
    </section>
  );
}
