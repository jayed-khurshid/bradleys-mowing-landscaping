import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MapPin, Eye } from 'lucide-react';
import { workGallery } from '@/lib/data';

export default function ProjectsGallery({ limit = 6, showHeader = true }) {
  const displayPhotos = limit ? workGallery.slice(0, limit) : workGallery;

  return (
    <section id="projects" className="py-20 lg:py-28 px-4 sm:px-6 bg-[#FAFAF7]">
      <div className="max-w-[1240px] mx-auto">
        
        {/* Section Header */}
        {showHeader && (
          <div className="text-center max-w-2xl mx-auto mb-14 lg:mb-16">
            <span className="text-xs sm:text-sm font-extrabold text-brand-cta tracking-widest uppercase block mb-2">
              Authentic Oklahoma Workmanship
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-gray-900 tracking-tight">
              Check Out Some Of Our <span className="text-brand-cta">Recent Projects</span>
            </h2>
            <div className="w-20 h-1.5 bg-brand-cta mx-auto mt-4 rounded-full" />
            <p className="text-gray-600 text-base sm:text-lg mt-4 font-sans">
              Real projects completed by Anthony Bradley across El Reno, Yukon, Mustang, and Canadian County.
            </p>
          </div>
        )}

        {/* Photography Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {displayPhotos.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-3xl overflow-hidden shadow-lg border border-gray-200 bg-white h-72 sm:h-80 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              style={{ position: 'relative' }}
            >
              <Image
                src={project.src}
                alt={project.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-106 transition-transform duration-600 ease-out"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-90 transition-opacity" />

              {/* Bottom Project Details */}
              <div className="absolute inset-x-0 bottom-0 p-5 text-white flex flex-col justify-end">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-brand-lime bg-black/40 px-2.5 py-0.5 rounded-full border border-brand-lime/30">
                    {project.category}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-medium text-white/90">
                    <MapPin className="w-3 h-3 text-brand-lime" />
                    <span>{project.location}</span>
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg sm:text-xl text-white group-hover:text-brand-lime transition-colors">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        {limit && (
          <div className="text-center mt-12 sm:mt-14">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm sm:text-base text-gray-950 bg-brand-cta hover:bg-brand-lime transition-all duration-200 shadow-md hover:shadow-glow-green transform hover:-translate-y-0.5"
            >
              <span>View Full Project Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}
