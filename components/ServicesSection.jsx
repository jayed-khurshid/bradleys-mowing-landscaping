import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { allServices } from '@/lib/data';

export default function ServicesSection() {
  // 6 Primary Highlighted Services matching the Holtzclaw visual layout
  const highlightServices = [
    {
      title: 'Lawn Mowing & Maintenance',
      slug: 'lawn-mowing',
      image: '/images/mowing-backyard.jpg',
      desc: 'Precision cutting, string trimming, crisp edging, and full surface blow-off for residential & commercial properties.'
    },
    {
      title: 'Landscaping & Bed Renovation',
      slug: 'landscaping',
      image: '/images/flower-bed-mulch.jpg',
      desc: 'Custom flower bed redesign, fresh dark mulch, river rock, and shrub shaping for pristine curb appeal.'
    },
    {
      title: 'Yard Leveling & Minor Grading',
      slug: 'yard-leveling',
      image: '/images/residential-brick-home.jpg',
      desc: 'Filling low spots, smoothing uneven terrain, light dirt work, and positive slope grading.'
    },
    {
      title: 'Drainage Solutions & French Drains',
      slug: 'drainage-solutions',
      image: '/images/striped-lawn.jpg',
      desc: 'Protecting foundations and preventing standing water with custom French drains and surface swales.'
    },
    {
      title: 'Brush & Fence-Line Clearing',
      slug: 'brush-clearing',
      image: '/images/cleanup-before.jpg',
      desc: 'Tackling overgrown fence lines, thickets, volunteer saplings, and neglected rural parcels.'
    },
    {
      title: 'Commercial Grounds Maintenance',
      slug: 'commercial-lawn-care',
      image: '/images/commercial-mowing.jpg',
      desc: 'Scheduled acreage mowing and exterior grounds care for offices, storage units, and businesses.'
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-28 px-4 sm:px-6 bg-[#053e14] text-white relative overflow-hidden">
      
      {/* Background ambient accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-cta/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-lime/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1240px] mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 lg:mb-16">
          <span className="text-xs sm:text-sm font-extrabold text-brand-lime tracking-widest uppercase block mb-2">
            Outdoor Property Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight">
            Our Services
          </h2>
          <div className="w-20 h-1.5 bg-brand-cta mx-auto mt-4 rounded-full" />
          <p className="text-white/85 text-base sm:text-lg mt-4 font-normal">
            From scheduled lawn mowing to heavy-duty property clearing and drainage, Bradley's delivers dependable workmanship on every job.
          </p>
        </div>

        {/* Services Grid (Holtzclaw reference style with image cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {highlightServices.map((service, idx) => (
            <Link
              key={idx}
              href={`/services/${service.slug}`}
              className="group relative rounded-3xl overflow-hidden shadow-2xl border border-brand-cta/30 h-80 sm:h-96 block transition-all duration-300 hover:border-brand-lime hover:-translate-y-1.5"
              style={{ position: 'relative' }}
            >
              {/* Background Image */}
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity group-hover:from-black/95" />

              {/* Content Positioned at Bottom */}
              <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end text-white">
                <span className="text-brand-lime text-xs font-bold uppercase tracking-wider mb-1">
                  Professional Service
                </span>
                
                <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white group-hover:text-brand-lime transition-colors flex items-center justify-between">
                  <span>{service.title}</span>
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-brand-cta text-black text-sm shrink-0 transform group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </h3>

                <p className="text-xs sm:text-sm text-white/80 mt-2 line-clamp-2 font-normal leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA to View All Services */}
        <div className="text-center mt-12 sm:mt-14">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm sm:text-base text-white bg-white/10 hover:bg-white/20 border border-brand-lime/30 transition-all hover:scale-103"
          >
            <span>View All Detailed Services & Capabilities</span>
            <ArrowRight className="w-4 h-4 text-brand-lime" />
          </Link>
        </div>

      </div>
    </section>
  );
}
