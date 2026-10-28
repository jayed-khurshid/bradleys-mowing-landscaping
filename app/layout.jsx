import { Poppins, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MobileStickyBar from '@/components/MobileStickyBar';
import { business } from '@/lib/data';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://bradleysmowingllc.com'),
  title: {
    default: "Bradley's Mowing & Landscaping LLC | El Reno, OK Lawn Care & Property Maintenance",
    template: "%s | Bradley's Mowing & Landscaping LLC"
  },
  description: "Locally owned and owner-operated lawn care, landscaping, yard leveling, drainage solutions, brush clearing, and property maintenance in El Reno, Oklahoma and Canadian County.",
  keywords: [
    "lawn mowing El Reno OK",
    "lawn care El Reno Oklahoma",
    "landscaping El Reno OK",
    "yard leveling El Reno OK",
    "brush clearing El Reno OK",
    "drainage solutions El Reno",
    "sod installation El Reno OK",
    "mulch installation El Reno",
    "commercial lawn care Canadian County",
    "property maintenance El Reno"
  ],
  authors: [{ name: "Anthony Bradley" }],
  creator: "Anthony Bradley",
  publisher: "Bradley's Mowing & Landscaping LLC",
  openGraph: {
    title: "Bradley's Mowing & Landscaping LLC | El Reno, OK",
    description: "Reliable lawn care, landscaping, yard leveling, drainage solutions, and property clearing in El Reno, Oklahoma. Owned & operated by Anthony Bradley.",
    url: "https://bradleysmowingllc.com",
    siteName: "Bradley's Mowing & Landscaping LLC",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/flower-bed-mulch.jpg",
        width: 1200,
        height: 630,
        alt: "Bradley's Mowing & Landscaping LLC Project Showcase in El Reno, OK",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bradley's Mowing & Landscaping LLC | El Reno, OK",
    description: "Reliable lawn care, landscaping, drainage, and property maintenance in El Reno, Oklahoma.",
    images: ["/images/flower-bed-mulch.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": business.name,
    "legalName": business.name,
    "alternateName": business.shortName,
    "image": "https://bradleysmowingllc.com/logo.png",
    "telephone": business.phone,
    "email": business.email,
    "url": "https://bradleysmowingllc.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "El Reno",
      "addressRegion": "OK",
      "postalCode": "73036",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 35.5323,
      "longitude": -97.9550
    },
    "areaServed": [
      "El Reno, OK",
      "Yukon, OK",
      "Mustang, OK",
      "Calumet, OK",
      "Piedmont, OK",
      "Okarche, OK",
      "Union City, OK",
      "Geary, OK"
    ],
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "07:00",
      "closes": "19:00"
    },
    "sameAs": [
      business.facebook,
      business.googleMaps
    ]
  };

  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="min-h-screen bg-brand-surface font-sans text-gray-800 antialiased selection:bg-brand-cta selection:text-black flex flex-col pb-14 sm:pb-0" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <MobileStickyBar />
      </body>
    </html>
  );
}
