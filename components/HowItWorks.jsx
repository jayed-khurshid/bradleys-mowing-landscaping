import { customerProcess } from '@/lib/data';

export default function HowItWorks() {
  return (
    <section className="py-20 lg:py-28 px-4 sm:px-6 bg-[#FAFAF7]">
      <div className="max-w-[1240px] mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 lg:mb-16">
          <span className="text-xs sm:text-sm font-extrabold text-brand-cta tracking-widest uppercase block mb-2">
            Simple & Transparent
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-gray-900 tracking-tight">
            How Working With Us <span className="text-brand-cta">Works</span>
          </h2>
          <div className="w-20 h-1.5 bg-brand-cta mx-auto mt-4 rounded-full" />
          <p className="text-gray-600 text-base sm:text-lg mt-4 font-sans">
            From your first estimate request to final property walkthrough, here is our straightforward 7-step process.
          </p>
        </div>

        {/* 7-step cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {customerProcess.slice(0, 4).map((p, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 relative group"
            >
              <span className="text-3xl sm:text-4xl font-extrabold font-display text-brand-cta/25 group-hover:text-brand-cta transition-colors">
                {p.step}
              </span>
              <h3 className="font-display font-bold text-lg text-gray-900 mt-2 mb-2">
                {p.title}
              </h3>
              <p className="text-sm text-gray-600 font-sans leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 max-w-4xl mx-auto">
          {customerProcess.slice(4, 7).map((p, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 relative group"
            >
              <span className="text-3xl sm:text-4xl font-extrabold font-display text-brand-cta/25 group-hover:text-brand-cta transition-colors">
                {p.step}
              </span>
              <h3 className="font-display font-bold text-lg text-gray-900 mt-2 mb-2">
                {p.title}
              </h3>
              <p className="text-sm text-gray-600 font-sans leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
