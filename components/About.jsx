import { ArrowRight, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 px-6 max-w-[1200px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Image */}
        <div className="lg:col-span-5 relative">
          <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-200">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAz8vO2DTio8ZX1Q1hsPJ57rEujKJP75-qys0ZwaKAIBD9OHTXmmKayWKGi-W_wGCR5_iSexjmNuqQrOJDhJsEgRlexbU3GStFXDw5KFnVtxiPR1YiR78o6Q6U_nXB1feZRDpyv9FD7rC30yYpXPaObpvMRc84YeCjm-ylhEXQxtfh2vygD8rbjYn6Rz7Aqlum3LmEmibHhzCOwZQWa-vbkw9TsZcABSA3iXVgFspjR8kO0-2-wHgyPLbCHrGnsFgTsoKd7hkwpN_I"
              alt="High-end residential front porch entrance with masonry and stone mulch"
              className="w-full h-[400px] sm:h-[480px] object-cover"
            />
          </div>
          
          <div className="absolute -bottom-6 -right-6 hidden sm:flex items-center gap-3 bg-white p-4 rounded-2xl shadow-xl border border-gray-100">
            <div className="w-12 h-12 rounded-xl bg-brand-inputBg text-brand-cta flex items-center justify-center font-bold">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <p className="font-display font-bold text-sm text-gray-900">Family Owned</p>
              <p className="text-xs text-gray-500">Dedicated Personal Service</p>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-brand-forest font-semibold text-xs tracking-wider uppercase">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>Trusted Craftsmanship</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-gray-900 leading-tight">
            The Local Landscaper <span className="text-brand-cta">For You</span>
          </h2>

          <div className="space-y-4 text-sm sm:text-base text-gray-600 font-sans leading-relaxed">
            <p>
              Bradley's Mowing & Landscaping is here for all your landscaping needs in Marion, Illinois, and the surrounding area. With years of experience, our family-owned company delivers only the highest quality of services and will treat you as if you were family every step of the way.
            </p>
            <p>
              Our crew specializes in professional landscaping for properties of any size, creating stunning outdoor aesthetics with thoughtfully designed plant arrangements and greenery, and full-service hardscape construction to transform your outdoor living space completely with custom patios, retaining walls, walkways, and other durable structural elements.
            </p>
            <p>
              When hiring us for your landscaping needs, we will do the job as efficiently as possible and leave you with the landscape of your dreams.
            </p>
          </div>

          <div className="pt-2">
            <a 
              href="#quote-form"
              className="inline-flex items-center gap-2 bg-brand-cta hover:bg-brand-lime text-brand-deepDark font-display font-bold text-sm px-6 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all"
            >
              <span>Request A Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
