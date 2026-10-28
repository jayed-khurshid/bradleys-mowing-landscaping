import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Landscape Planting',
    desc: 'Expert tree, shrub, and perennial flower bed installations with rich soil preparation.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDonow7d8tiA1S8qaqr7N4HMFwDNPsvrhSs3NsMnhM6FibKZuFR0gOPpL2y549gGd6iKi227qIjOyteuFoFqR0npvJVNEDWoyY0k1yjbeFejKc5kRxpHAZZg9ZOU8XYef24Sfu9tu-plg4Jx0eqXLn7Lr5ESLw5jw3_0ldzubnjfjKUBztLWf3UnJ71ebKid6_tXixgd-ImhHgj-37Wq3A_nf8MTtiIbnSRo8I3nNsS5SvDCMChxrs_uPFmq1GiLKKIEs1Ybqd2OpQ',
  },
  {
    title: 'Seasonal Cleanups',
    desc: 'Spring rejuvenation, fall leaf clearing, debris removal, and bed edge redefinition.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSoTabGMk9NJqxCs6KTKgXfBPKpxHcdmBs__wTKTqBaSCJijZV2dfGCVHXSRsDtlh8fr_P3gws1qhfXWK7G4S1QkukN_Kg7ix-gZge2Xef0rFMpInyIwFs_01TP2WvO8EC9NSr5s9On4DkKGMt4cC544Fn5_GSCuA839hlJyJblMqLo7zXophZBpg59mw5mTnzNFQXrxWesI0Qimt-XPq6GluI-ByywfrqtZLKRZPlujm0SOGZmY2hHyl2s3RKkoF8gtNdnGNPUXo',
  },
  {
    title: 'Landscape Construction',
    desc: 'Custom stone paver patios, structural retaining walls, grading, and drainage solutions.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_Tv32TECj3kgYuXc3FqegyEEihk-tzwoFIPET_ESn38D6xGClExRaIVIkUJGDKOAUrO4Jl-gTsq7IG2DsC9SQQ830DkWCvVOy3kS4fH270IjLavwliVAOSIuP5eO7rbDjm5C9qlkccfK5aaZgC64B5wicyqjH8szl2CO5Dj53DNpqmQKnGWR-jcqNsP3N9hfJgGcPKMo-aDFN1T_7Tj7SSyoUpH_5uAObVaIaaJOJzDL-0JUlFMqbSUHYiRxdXpLtlnXrnkMX6Dk',
  },
  {
    title: 'Lawn Mowing & Maintenance',
    desc: 'Scheduled weekly mowing, crisp string trimming, edging, and immaculate debris blowing.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_dIqnT460BJ-mM2MNJZfua6tPL0ymj-4wGruQ-Mv2mc0YY0hp5i8fz3Hu-VfTgXLJA9ZVU1V5I-pIn1d6CnBUABJ1VJPYz54b42ZP27tS0eUg2phJl2xFQArAU1KigjgoJ4XqJewd6UoMLrAXLlSjSPEISuexJ4moNOrYjLIpwCwCI67V4mWuEwBXV_KR7_aWvTEZEBEzGOvevR2V0F2t8YGQBT_IDVVji-N6ntfFFHDb8GxMFmMRTc9GVJ5UGIcXXavJf7IFQUs',
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-brand-forest py-20 px-6 text-white relative">
      <div className="max-w-[1200px] mx-auto">
        
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="text-xs font-semibold text-brand-lime tracking-widest uppercase block mb-1">
            Expert Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display">
            Our Services
          </h2>
          <div className="w-16 h-1 bg-brand-cta mx-auto mt-3 rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="relative rounded-2xl overflow-hidden shadow-xl border border-brand-cta/30 group cursor-pointer h-72 sm:h-80"
            >
              <img 
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-deepDark via-black/40 to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div>
                  <h3 className="font-display font-bold text-lg text-white tracking-wide">
                    {service.title}
                  </h3>
                  <p className="text-xs text-emerald-200/80 line-clamp-2 mt-1">
                    {service.desc}
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-brand-lime text-brand-deepDark flex items-center justify-center font-bold flex-shrink-0 group-hover:translate-x-1 transition-transform shadow">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#quote-form"
            className="inline-flex items-center gap-2 bg-brand-cta hover:bg-brand-lime text-brand-deepDark font-display font-bold text-sm px-8 py-3.5 rounded-full shadow-lg transition-colors"
          >
            <span>Request An Estimate For Any Service</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
