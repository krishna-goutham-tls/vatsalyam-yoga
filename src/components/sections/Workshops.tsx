"use client";

import Image from "next/image";
import { FadeIn, StaggerContainer, StaggerItem } from "../animations/FadeIn";

// Most recent workshop first
const workshops = [
  {
    image: "/workshops/workshop-jyothi-trataka.jpg",
    title: "Jyothi Trataka",
    description: "A meditative candle-gazing practice for focus and inner stillness.",
  },
  {
    image: "/workshops/workshop-reconnecting.jpg",
    title: "Reclaim Your Energy",
    description: "A day of movement, breathwork, and mindful restoration.",
  },
  {
    image: "/workshops/workshop-registration.jpg",
    title: "Upcoming Workshop",
    description: "Stay tuned for the next immersive experience at Vatsalyam Yoga.",
  },
];

function WorkshopCard({ ws }: { ws: (typeof workshops)[0] }) {
  return (
    <StaggerItem>
      <div className="group flex flex-row bg-parchment rounded-sm overflow-hidden border border-gold/10 hover:border-gold/25 transition-all duration-300 shadow-sm hover:shadow-md">
        {/* Poster image */}
        <div className="relative w-[38%] aspect-[3/4] flex-none">
          <Image
            src={ws.image}
            alt={`${ws.title} workshop poster`}
            fill
            sizes="(max-width: 640px) 38vw, 280px"
            className="object-cover"
            loading="lazy"
          />
        </div>

        {/* Content */}
        <div className="flex-1 p-4 sm:p-5 lg:p-6 flex flex-col justify-center min-h-0">
          <h3 className="font-display text-base sm:text-lg lg:text-xl font-medium text-charcoal leading-tight group-hover:text-deep-forest transition-colors duration-300">
            {ws.title}
          </h3>
          <p className="font-body text-xs sm:text-sm lg:text-base text-charcoal/65 leading-relaxed mt-2">
            {ws.description}
          </p>
        </div>
      </div>
    </StaggerItem>
  );
}

export function Workshops() {
  return (
    <section className="relative w-full bg-linen flex-1" aria-label="Upcoming workshops">
      <div className="relative z-10 pt-24 lg:pt-28 pb-12 lg:pb-16 px-6 lg:px-16">
        <div className="max-w-4xl mx-auto">
          {/* Page header */}
          <FadeIn delay={0.1}>
            <p className="font-body text-xs sm:text-sm tracking-[0.2em] uppercase text-terracotta mb-2">
              Events
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-medium leading-[1.2] text-charcoal mb-6 lg:mb-8">
              Upcoming{" "}
              <span className="font-script italic text-burgundy">Workshops</span>
            </h1>
          </FadeIn>

          {/* Workshop cards */}
          <StaggerContainer className="flex flex-col gap-4 sm:gap-5 lg:gap-6" staggerDelay={0.1}>
            {workshops.map((ws) => (
              <WorkshopCard key={ws.title} ws={ws} />
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
