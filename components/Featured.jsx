import { ArrowRight, Hammer } from 'lucide-react';

export default function Featured() {
  return (
    <section className="py-20 px-6 max-w-[1200px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Right Image (placed first in DOM for mobile, reordered on desktop) */}
        <div className="lg:col-span-6 lg:order-2 relative">
          <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-200 group">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_Tv32TECj3kgYuXc3FqegyEEihk-tzwoFIPET_ESn38D6xGClExRaIVIkUJGDKOAUrO4Jl-gTsq7IG2DsC9SQQ830DkWCvVOy3kS4fH270IjLavwliVAOSIuP5eO7rbDjm5C9qlkccfK5aaZgC64B5wicyqjH8szl2CO5Dj53DNpqmQKnGWR-jcqNsP3N9hfJgGcPKMo-aDFN1T_7Tj7SSyoUpH_5uAObVaIaaJOJzDL-0JUlFMqbSUHYiRxdXpLtlnXrnkMX6Dk"
              alt="Custom hardscape patio construction with retaining wall and pavers"
              className="w-full h-[400px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          
          <div className="absolute -bottom-5 -left-5 hidden sm:flex items-center gap-3 bg-white p-3 rounded-2xl shadow-xl border border-gray-100">
            <div className="w-12 h-12 rounded-xl bg-brand-inputBg text-brand-cta flex items-center justify-center">
              <Hammer className="w-6 h-6" />
            </div>
            <div>
              <p className="font-display font-bold text-sm text-gray-900">Hardscape Experts</p>
              <p className="text-xs text-gray-500">Patios, Walls & Walkways</p>
            </div>
          </div>
        </div>

        {/* Left Content */}
        <div className="lg:col-span-6 lg:order-1 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-brand-forest font-semibold text-xs tracking-wider uppercase">
            <Hammer className="w-3.5 h-3.5" />
            <span>Featured Capability</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-gray-900 leading-tight">
            Complete Outdoor <span className="text-brand-cta">Transformations</span>
          </h2>

          <div className="space-y-4 text-sm sm:text-base text-gray-600 font-sans leading-relaxed">
            <p>
              Beyond routine lawn care, we specialize in full-scale landscape construction and hardscaping. From custom stone paver patios and structural retaining walls to elegant walkways and drainage solutions, our team handles every aspect of your outdoor renovation.
            </p>
            <p>
              Each project begins with a thorough consultation where we assess your property, understand your vision, and create a detailed plan. We use premium materials and proven techniques to ensure your investment stands the test of time.
            </p>
          </div>

          <div className="pt-2">
            <a 
              href="#quote-form"
              className="inline-flex items-center gap-2 bg-brand-cta hover:bg-brand-lime text-brand-deepDark font-display font-bold text-sm px-6 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all"
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}