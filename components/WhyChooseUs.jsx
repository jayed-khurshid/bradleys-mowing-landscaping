import Link from 'next/link';
import { Truck, Award, HeartHandshake, ArrowRight } from 'lucide-react';

export default function WhyChooseUs() {
  const points = [
    {
      icon: Truck,
      title: 'Efficient & Reliable',
      desc: 'Our team will get in, get the job done right, and leave your property with a beautiful, healthy lawn as efficiently and dependably as possible.'
    },
    {
      icon: Award,
      title: 'Owner-Operated Quality',
      desc: 'You work directly with Anthony Bradley on every project. We operate commercial-grade mowers and equipment with personal attention to every detail.'
    },
    {
      icon: HeartHandshake,
      title: 'Caring & Dedicated',
      desc: 'As a local El Reno business, we treat our customers like neighbors. Honest upfront estimates, prompt communication, and pride in our craftsmanship.'
    }
  ];

  return (
    <section id="why-choose" className="py-20 lg:py-28 px-4 sm:px-6 bg-[#03260c] text-white relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-brand-cta/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1240px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT: HEADLINE & BUTTON */}
          <div className="lg:col-span-4 flex flex-col items-start space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-lime">
              Why Bradley&#39;s?
            </span>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.12]">
              Why Choose <span className="text-brand-lime">Bradley&#39;s?</span>
            </h2>

            <p className="text-base sm:text-lg text-white/80 font-normal leading-relaxed">
              The El Reno Landscaper <span className="text-white font-semibold">For You</span>. We stand apart through personal service, dependable scheduling, and the capability to handle both routine lawn cuts and tough property improvements.
            </p>

            <div className="pt-2">
              <Link
                href="/request-estimate"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-gray-950 bg-brand-cta hover:bg-brand-lime transition-all duration-200 shadow-md hover:shadow-glow-green transform hover:-translate-y-0.5"
              >
                <span>Request A Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* RIGHT: 3 CARDS (Adjusted height & sleek proportions) */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            {points.map((pt, idx) => {
              const Icon = pt.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl sm:rounded-3xl py-5 px-4 sm:py-6 sm:px-5 text-gray-900 border-2 border-brand-cta shadow-xl hover:shadow-glow-green transition-all duration-300 flex flex-col items-center text-center group hover:-translate-y-1"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-brand-inputBg border border-brand-inputBorder flex items-center justify-center mb-3.5 group-hover:scale-105 transition-transform shrink-0">
                    <Icon className="w-6 h-6 text-brand-cta" />
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-extrabold text-base sm:text-lg text-gray-950 mb-1.5 leading-snug">
                    {pt.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-[13px] text-gray-600 font-sans leading-relaxed">
                    {pt.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
