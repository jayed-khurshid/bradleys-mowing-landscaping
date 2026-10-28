import Image from 'next/image';
import Link from 'next/link';
import { MapPin, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { workGallery, business } from '@/lib/data';
import QuoteForm from '@/components/QuoteForm';

export const metadata = {
  title: "Real Landscaping & Lawn Care Projects Gallery | Bradley's Mowing",
  description: "Browse actual project photos from Bradley's Mowing & Landscaping LLC in El Reno, Oklahoma: lawn mowing, flower beds, mulch, tree trimming, yard leveling, and property clearing.",
};

export default function ProjectsPage() {
  return (
    <div className="bg-[#FAFAF7]">
      {/* HEADER */}
      <section className="bg-[#053e14] text-white pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-15" style={{ backgroundImage: "url('/images/flower-bed-mulch.jpg')" }} />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="text-xs font-bold text-brand-lime uppercase tracking-widest block mb-2">
            Real Work, Real Results
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight">
            Our Work Portfolio & Projects
          </h1>
          <p className="text-white/85 text-base sm:text-lg mt-4 max-w-2xl mx-auto font-normal">
            No stock photos or AI-generated yard mockups. These are actual projects completed by Anthony Bradley and crew across Canadian County, Oklahoma.
          </p>
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {workGallery.map((project) => (
              <div
                key={project.id}
                className="group relative rounded-3xl overflow-hidden shadow-xl border border-gray-200/80 bg-white h-80 sm:h-96 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                style={{ position: 'relative' }}
              >
                <Image
                  src={project.src}
                  alt={project.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-106 transition-transform duration-600 ease-out"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-6 text-white flex flex-col justify-end">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-brand-lime bg-black/40 px-3 py-0.5 rounded-full border border-brand-lime/30">
                      {project.category}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-white/90">
                      <MapPin className="w-3.5 h-3.5 text-brand-lime" />
                      <span>{project.location}</span>
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-white group-hover:text-brand-lime transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ESTIMATE REQUEST FORM */}
      <QuoteForm compact={false} />
    </div>
  );
}
