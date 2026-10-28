import Hero from '@/components/Hero';
import QuoteForm from '@/components/QuoteForm';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import TransformSection from '@/components/TransformSection';
import ProjectsGallery from '@/components/ProjectsGallery';
import TestimonialsSection from '@/components/TestimonialsSection';
import HowItWorks from '@/components/HowItWorks';
import ServiceAreaMap from '@/components/ServiceAreaMap';
import FAQSection from '@/components/FAQSection';

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Floating Quote Form Card */}
      <QuoteForm />

      {/* 3. About Company / Anthony Bradley Story */}
      <AboutSection />

      {/* 4. Core Services Section (Holtzclaw dark green card grid) */}
      <ServicesSection />

      {/* 5. Client Testimonials */}
      <TestimonialsSection />

      {/* 6. Why Choose Bradley's (Contrasting 3-card layout) */}
      <WhyChooseUs />

      {/* 7. Transform Your Outdoor Living Space Feature */}
      <TransformSection />

      {/* 8. Recent Real Projects Gallery */}
      <ProjectsGallery limit={6} />

      {/* 9. 7-Step Customer Working Process */}
      <HowItWorks />

      {/* 10. Service Areas & Google Map */}
      <ServiceAreaMap />

      {/* 11. Frequently Asked Questions */}
      <FAQSection />
    </>
  );
}
