'use client';

import { useState, useEffect, useCallback } from 'react';
import { Star, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { clientReviews } from '@/lib/data';

const avatarColors = [
  'bg-blue-600',
  'bg-emerald-600',
  'bg-amber-600',
  'bg-purple-600',
];

function GoogleIcon() {
  return (
    <div className="w-6 h-6 shrink-0">
      <svg viewBox="0 0 24 24" width="24" height="24" className="w-full h-full">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
      </svg>
    </div>
  );
}

function ReviewCard({ review, colorClass }) {
  const initials = review.name.split(' ').map((n) => n[0]).join('');
  return (
    <div className="bg-[#FAFAF7] rounded-3xl p-6 sm:p-7 border border-gray-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full">
      <div>
        {/* Top: Avatar & Google Badge */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className={`w-11 h-11 rounded-full ${colorClass} text-white font-bold flex items-center justify-center text-sm shadow-sm shrink-0`}>
              {initials}
            </div>
            <div>
              <h3 className="font-display font-bold text-gray-900 text-base leading-tight">
                {review.name}
              </h3>
              <p className="text-xs text-gray-500 font-medium">
                {review.location}
              </p>
            </div>
          </div>
          <GoogleIcon />
        </div>

        {/* Star Rating */}
        <div className="flex items-center gap-1 text-amber-400 mb-3 text-sm">
          {[...Array(review.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-400" />
          ))}
        </div>

        {/* Review Quote */}
        <p className="text-gray-700 text-sm font-sans leading-relaxed">
          &ldquo;{review.text}&rdquo;
        </p>
      </div>

      {/* Verified Badge */}
      <div className="pt-4 mt-4 border-t border-gray-200/60 flex items-center justify-between text-xs text-gray-500">
        <span className="font-semibold text-brand-forest">
          {review.service}
        </span>
        <span className="inline-flex items-center gap-1 text-emerald-700 font-medium">
          <CheckCircle className="w-3.5 h-3.5" />
          Verified
        </span>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const reviews = clientReviews;
  const total = reviews.length;

  // Desktop shows 3 cards at once; can slide index from 0 to total - 3
  const desktopVisible = 3;
  const maxDesktop = Math.max(0, total - desktopVisible);

  const [desktopIndex, setDesktopIndex] = useState(0);
  const [mobileIndex, setMobileIndex] = useState(0);

  const nextDesktop = useCallback(() => {
    setDesktopIndex((i) => (i >= maxDesktop ? 0 : i + 1));
  }, [maxDesktop]);

  const prevDesktop = useCallback(() => {
    setDesktopIndex((i) => (i <= 0 ? maxDesktop : i - 1));
  }, [maxDesktop]);

  const nextMobile = useCallback(() => {
    setMobileIndex((i) => (i >= total - 1 ? 0 : i + 1));
  }, [total]);

  const prevMobile = useCallback(() => {
    setMobileIndex((i) => (i <= 0 ? total - 1 : i - 1));
  }, [total]);

  // Auto-play sliding every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextDesktop();
      nextMobile();
    }, 5000);
    return () => clearInterval(timer);
  }, [nextDesktop, nextMobile]);

  return (
    <section id="reviews" className="py-20 lg:py-28 px-4 sm:px-6 bg-white relative overflow-hidden">
      <div className="max-w-[1240px] mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 lg:mb-16">
          <span className="text-xs sm:text-sm font-extrabold text-brand-cta tracking-widest uppercase block mb-2">
            Customer Satisfaction
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-gray-900 tracking-tight">
            Hear From Our <span className="text-brand-cta">Happy Clients</span>
          </h2>
          <div className="w-20 h-1.5 bg-brand-cta mx-auto mt-4 rounded-full" />
          <p className="text-gray-600 text-base sm:text-lg mt-4 font-sans">
            Real feedback from homeowners and businesses across El Reno and Canadian County.
          </p>
        </div>

        {/* ── DESKTOP CAROUSEL (3 visible at once, slides 1 by 1) ── */}
        <div className="hidden lg:block relative px-8">
          <div className="overflow-hidden py-2">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${desktopIndex * (100 / desktopVisible)}%)`,
              }}
            >
              {reviews.map((review, idx) => (
                <div
                  key={review.id}
                  className="w-1/3 flex-none px-3"
                >
                  <ReviewCard review={review} colorClass={avatarColors[idx % avatarColors.length]} />
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Navigation Arrows */}
          <button
            onClick={prevDesktop}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-brand-forest text-white shadow-lg flex items-center justify-center hover:bg-brand-cta hover:text-black transition-all z-10 cursor-pointer"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextDesktop}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-brand-forest text-white shadow-lg flex items-center justify-center hover:bg-brand-cta hover:text-black transition-all z-10 cursor-pointer"
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxDesktop + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setDesktopIndex(i)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  i === desktopIndex ? 'w-8 bg-brand-cta' : 'w-2.5 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* ── MOBILE CAROUSEL (1 visible at a time) ── */}
        <div className="lg:hidden relative px-4">
          <div className="overflow-hidden py-2">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${mobileIndex * 100}%)`,
              }}
            >
              {reviews.map((review, idx) => (
                <div key={review.id} className="w-full flex-none px-1">
                  <ReviewCard review={review} colorClass={avatarColors[idx % avatarColors.length]} />
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation Arrows */}
          <button
            onClick={prevMobile}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-brand-forest text-white shadow-md flex items-center justify-center hover:bg-brand-cta hover:text-black transition-all z-10 cursor-pointer"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextMobile}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-brand-forest text-white shadow-md flex items-center justify-center hover:bg-brand-cta hover:text-black transition-all z-10 cursor-pointer"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Mobile Dots */}
          <div className="flex justify-center gap-2 mt-7">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setMobileIndex(i)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  i === mobileIndex ? 'w-7 bg-brand-cta' : 'w-2.5 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to review ${i + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
