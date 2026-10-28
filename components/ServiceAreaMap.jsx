import Link from 'next/link';
import { MapPin, Navigation, ArrowRight, CheckCircle2 } from 'lucide-react';
import { serviceAreas, business } from '@/lib/data';

export default function ServiceAreaMap() {
  return (
    <section className="py-20 lg:py-28 px-4 sm:px-6 bg-[#03260c] text-white relative">
      <div className="max-w-[1240px] mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 lg:mb-16">
          <span className="text-xs sm:text-sm font-extrabold text-brand-lime tracking-widest uppercase block mb-2">
            Coverage Area
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white tracking-tight">
            Our Oklahoma <span className="text-brand-lime">Service Areas</span>
          </h2>
          <div className="w-20 h-1.5 bg-brand-cta mx-auto mt-4 rounded-full" />
          <p className="text-white/85 text-base sm:text-lg mt-4 font-normal">
            Based in El Reno, OK and serving residential and commercial properties throughout Canadian County and surrounding West OKC communities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* LEFT: MAP EMBED */}
          <div className="lg:col-span-6 rounded-3xl overflow-hidden shadow-2xl border-2 border-brand-cta/30 h-80 sm:h-[420px] relative bg-black/40">
            <iframe
              title="Bradley's Mowing & Landscaping Service Area - El Reno, OK"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51924.965004732155!2d-97.99026418388487!3d35.53428131379435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87ad62d295fa97f5%3A0xe5a363fe507c5885!2sEl%20Reno%2C%20OK%2073036!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full filter saturate-125"
            />
            <div className="absolute bottom-3 left-3 bg-[#053e14]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-brand-lime/30 text-xs font-semibold flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-brand-lime" />
              <span>Canadian County & Surrounding West OKC Metro</span>
            </div>
          </div>

          {/* RIGHT: LIST OF COMMUNITIES */}
          <div className="lg:col-span-6 flex flex-col space-y-4">
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
              Communities We Regularly Serve
            </h3>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed">
              We provide scheduled lawn mowing routes and property improvement services throughout the following communities. Click any town to view local services:
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2">
              {serviceAreas.map((area) => (
                <Link
                  key={area.slug}
                  href={`/service-areas/${area.slug}`}
                  className={`p-3.5 rounded-2xl border transition-all duration-200 flex items-center justify-between group ${
                    area.primary
                      ? 'bg-brand-cta/20 border-brand-lime text-white'
                      : 'bg-white/5 border-white/10 hover:border-brand-cta hover:bg-white/10 text-white/90'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Navigation className="w-4 h-4 text-brand-lime group-hover:scale-110 transition-transform" />
                    <span className="font-display font-bold text-sm sm:text-base">
                      {area.name}, OK
                    </span>
                  </div>
                  {area.primary ? (
                    <span className="text-[10px] font-extrabold bg-brand-cta text-black px-2 py-0.5 rounded-full">
                      Hometown
                    </span>
                  ) : (
                    <ArrowRight className="w-3.5 h-3.5 text-brand-lime opacity-0 group-hover:opacity-100 transition-opacity" />
                  )}
                </Link>
              ))}
            </div>

            <div className="pt-4">
              <Link
                href="/service-areas"
                className="inline-flex items-center gap-2 text-sm font-bold text-brand-lime hover:text-white transition-colors"
              >
                <span>Don&#39;t see your area listed? Check our full service radius</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
