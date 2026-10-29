'use client';

import { useState, useRef, useEffect } from 'react';
import { CheckCircle2, ChevronDown } from 'lucide-react';

const serviceOptions = [
  'Lawn Mowing & Maintenance',
  'Landscaping & Bed Renovation',
  'Yard Leveling & Minor Grading',
  'Drainage Solutions & French Drains',
  'Brush & Fence-Line Clearing',
  'Commercial Grounds Care',
  'Other / Complete Outdoor Makeover',
];

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: '',
    service: '',
    email: '',
    phone: '',
    address: '',
    hearAbout: '',
  });

  const [selectOpen, setSelectOpen] = useState(false);
  const selectRef = useRef(null);

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Close custom dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setSelectOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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
        
        {/* Title */}
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
            
            {/* 3 COLUMNS × 2 ROWS */}
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

              {/* Row 1, Col 2: Services Desired (Branded Custom Dropdown Menu) */}
              <div className="relative" ref={selectRef}>
                <button
                  type="button"
                  onClick={() => setSelectOpen(!selectOpen)}
                  className="w-full bg-[#F2FFEA] border border-[#9ed390] rounded-xl px-4 py-3 sm:py-3.5 text-sm font-medium text-left flex items-center justify-between focus:outline-none focus:border-[#24B80B] focus:ring-2 focus:ring-[#24B80B]/25 transition-all cursor-pointer"
                >
                  <span className={formData.service ? 'text-gray-900 font-semibold' : 'text-[#526d4b]'}>
                    {formData.service || 'Services Desired'}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-[#526d4b] transition-transform duration-200 ${selectOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Hidden native input for required validation */}
                <input
                  type="text"
                  value={formData.service}
                  required
                  tabIndex={-1}
                  className="sr-only"
                  onChange={() => {}}
                />

                {/* Branded Dropdown Menu Popover */}
                {selectOpen && (
                  <div className="absolute top-full left-0 right-0 mt-1.5 bg-white border border-[#9ed390] rounded-2xl shadow-xl z-50 overflow-hidden py-1.5 animate-fadeIn">
                    <div className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-[#526d4b] bg-[#F2FFEA]/70 border-b border-[#9ed390]/40">
                      Select A Service
                    </div>
                    {serviceOptions.map((opt) => {
                      const isSelected = formData.service === opt;
                      return (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => {
                            setFormData({ ...formData, service: opt });
                            setSelectOpen(false);
                          }}
                          className={`w-full text-left px-4 py-2.5 text-sm font-medium transition-colors flex items-center justify-between cursor-pointer ${
                            isSelected
                              ? 'bg-[#24B80B] text-black font-bold'
                              : 'text-gray-800 hover:bg-[#F2FFEA] hover:text-[#075B1D]'
                          }`}
                        >
                          <span>{opt}</span>
                          {isSelected && <CheckCircle2 className="w-4 h-4 text-black" />}
                        </button>
                      );
                    })}
                  </div>
                )}
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
