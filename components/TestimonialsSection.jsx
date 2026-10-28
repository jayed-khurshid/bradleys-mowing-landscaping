import { Star, CheckCircle } from 'lucide-react';
import { clientReviews } from '@/lib/data';

export default function TestimonialsSection() {
  const avatarColors = [
    'bg-blue-600',
    'bg-emerald-600',
    'bg-amber-600',
    'bg-purple-600'
  ];

  return (
    <section id="reviews" className="py-20 lg:py-28 px-4 sm:px-6 bg-white relative">
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

        {/* 4 Review Cards in Holtzclaw Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {clientReviews.map((review, idx) => {
            const initials = review.name.split(' ').map(n => n[0]).join('');
            const colorClass = avatarColors[idx % avatarColors.length];

            return (
              <div
                key={review.id}
                className="bg-[#FAFAF7] rounded-3xl p-6 sm:p-7 border border-gray-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top: Avatar & Google Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-11 h-11 rounded-full ${colorClass} text-white font-bold flex items-center justify-center text-sm shadow-sm`}>
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

                    {/* Google G icon */}
                    <div className="w-6 h-6 shrink-0">
                      <svg viewBox="0 0 24 24" width="24" height="24" className="w-full h-full">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
                      </svg>
                    </div>
                  </div>

                  {/* Star Rating */}
                  <div className="flex items-center gap-1 text-amber-400 mb-3 text-sm">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  {/* Quote Body */}
                  <p className="text-gray-700 text-sm font-sans leading-relaxed">
                    &ldquo;{review.text}&rdquo;
                  </p>
                </div>

                {/* Bottom Verified Badge */}
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
          })}
        </div>

      </div>
    </section>
  );
}
