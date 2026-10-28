import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'William Crocker',
    initials: 'WC',
    date: '2 months ago',
    location: 'Marion, IL',
    text: 'Bradley did a great job grading and seeding some sloped areas of my yard. He also backfilled behind some retaining walls where the dirt had settled. The crew was fast, polite, and very affordable. I will definitely use them in the future for additional projects.',
  },
  {
    name: 'Sarah Jenkins',
    initials: 'SJ',
    date: '4 months ago',
    location: 'Carterville, IL',
    text: 'We hired Bradley’s Mowing & Landscaping for weekly mowing and our spring cleanup. They consistently show up on schedule, keep the edging razor sharp, and never leave any clippings behind. Our curb appeal has never looked better!',
  },
  {
    name: 'Michael Henderson',
    initials: 'MH',
    date: '6 months ago',
    location: 'Carbondale, IL',
    text: 'Incredible work on our new paver patio and floral landscaping! Bradley listened to our ideas, provided honest recommendations, and completed the job on time and on budget. Top tier professionalism.',
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="py-20 px-6 max-w-[1200px] mx-auto">
      
      <div className="text-center max-w-xl mx-auto mb-14">
        <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-gray-900 leading-tight">
          Hear From Our <span className="text-brand-cta">Happy Clients</span>
        </h2>
        <p className="text-xs sm:text-sm text-gray-500 mt-2 font-sans">
          Real feedback from residential property owners across Southern Illinois
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((review, index) => (
          <div 
            key={index}
            className="bg-white rounded-3xl p-6 sm:p-7 shadow-soft-card border border-gray-100 flex flex-col justify-between hover:shadow-xl transition-shadow"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-teal-700 text-white font-display font-bold text-sm flex items-center justify-center shadow">
                    {review.initials}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-sm text-gray-900 leading-tight">
                      {review.name}
                    </h3>
                    <p className="text-[11px] text-gray-400">
                      {review.date} • {review.location}
                    </p>
                  </div>
                </div>
                <Quote className="w-6 h-6 text-brand-lime/40" />
              </div>

              {/* 5 Gold Stars */}
              <div className="flex text-amber-400 text-sm mb-3 space-x-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans italic">
                "{review.text}"
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-gray-100 flex items-center gap-1.5 text-[11px] text-emerald-800 font-semibold">
              <span className="w-2 h-2 rounded-full bg-brand-cta inline-block" />
              Verified Local Homeowner
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
