import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

export default function TransformSection() {
  return (
    <section className="py-20 lg:py-28 px-4 sm:px-6 bg-white overflow-hidden">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: TEXT & CTA */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-cta bg-brand-cta/10 px-3.5 py-1.5 rounded-full">
              Curb Appeal Transformation
            </span>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-gray-900 tracking-tight leading-[1.12]">
              Transform Your <span className="text-brand-cta">Landscape & Outdoor Living Space</span>
            </h2>

            <p className="text-base sm:text-lg text-gray-700 font-sans leading-relaxed">
              Impress your neighbors and enhance your property value with curb appeal like no other. Whether you are looking for crisp lawn mowing, renovated flower beds, fresh dark mulch, sod installation, or clearing thick overgrown brush, our team is geared and ready to take on projects of all sizes across El Reno and Canadian County.
            </p>

            <div className="space-y-3 w-full text-sm font-semibold text-gray-800">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-brand-cta shrink-0" />
                <span>Precision turf cutting, mechanical sidewalk edging & blow-off</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-brand-cta shrink-0" />
                <span>Heavy-duty weed barrier fabric with premium hardwood mulch or river rock</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-brand-cta shrink-0" />
                <span>Yard leveling, depression filling & positive drainage away from foundations</span>
              </div>
            </div>

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

          {/* RIGHT: FEATURED IMAGE */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#FAFAF7] group">
              <Image
                src="/images/striped-lawn.jpg"
                alt="Beautiful striped lawn and landscape work completed by Bradley's Mowing & Landscaping in El Reno, Oklahoma"
                width={650}
                height={500}
                className="w-full h-80 sm:h-[420px] object-cover group-hover:scale-104 transition-transform duration-600 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white text-xs sm:text-sm font-medium flex items-center justify-between">
                <span className="bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
                  Acreage Lawn Striping
                </span>
                <span className="text-brand-lime font-bold">
                  Canadian County, OK
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
