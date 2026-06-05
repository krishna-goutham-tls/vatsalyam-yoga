import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Credibility } from "@/components/sections/Credibility";
import { Classes } from "@/components/sections/Classes";
import { Stories } from "@/components/sections/Stories";
import { VideoTestimonials } from "@/components/sections/VideoTestimonials";
import { Founder } from "@/components/sections/Founder";
import { Contact } from "@/components/sections/Contact";
import { Workshops } from "@/components/sections/Workshops";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Vatsalyam Yoga",
    description:
      "Vatsalyam Yoga supports physical, mental and emotional well-being through movement, breath, mindfulness and self-awareness. Yoga for women, senior citizens, kids, and corporate wellness.",
    url: "https://vatsalyamyoga.com",
    image: "/hero.jpg",
    founder: {
      "@type": "Person",
      name: "Rajeswari Sitaraman",
      jobTitle: "Founder & Yoga Instructor",
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "BITS Pilani",
      },
    },
    areaServed: {
      "@type": "Place",
      name: "Bangalore, India",
    },
    serviceType: [
      "Women's Yoga",
      "Senior Citizens Yoga",
      "Kids Yoga",
      "Online Yoga Classes",
      "Pranayama & Meditation",
      "Yoga Therapy",
      "Corporate Wellness",
    ],
    sameAs: [
      "https://www.instagram.com/vatsalyamyoga/",
      "https://www.linkedin.com/in/rajeswarisitaraman/",
    ],
  };

  return (
    <main className="flex flex-col flex-1">
      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Hero />
      <About />
      <Credibility />
      <Classes />
      <Stories />
      <VideoTestimonials />
      <Founder />
      <Contact />
      <Workshops />
      <Footer />
    </main>
  );
}
