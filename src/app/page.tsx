import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Trust } from "@/components/sections/Trust";
import { GoogleProfile } from "@/components/sections/GoogleProfile";
import { Location } from "@/components/sections/Location";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { siteConfig } from "@/lib/site";
import Script from "next/script";
import { ScrollProgress } from "@/components/ui/shared/ScrollProgress";

export default function Home() {
  // Structured Data (JSON-LD) for LocalBusiness to boost local SEO in Coventry
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: siteConfig.businessName,
    image: "/images/wires.jpg",
    "@id": siteConfig.googleProfileUrl,
    url: "https://jrmautos.co.uk", // Update to real URL later
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address,
      addressLocality: "Coventry",
      addressRegion: "West Midlands",
      addressCountry: "UK",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:30",
        closes: "17:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "13:00",
      },
    ],
    priceRange: "$$",
  };

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ScrollProgress />
      <Header />
      <main className="flex-1 w-full overflow-hidden">
        <Hero />
        <Services />
        <Trust />
        <GoogleProfile />
        <Location />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
