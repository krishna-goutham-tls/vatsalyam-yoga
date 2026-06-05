"use client";

import Image from "next/image";
import { FadeIn, StaggerContainer, StaggerItem } from "../animations/FadeIn";

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

function WorkshopCard({ ws }: { ws: typeof workshops[0] }) {
  return (
    <StaggerItem>
      <div className="group flex flex-col bg-parchment rounded-sm overflow-hidden border border-gold/10 hover:border-gold/25 transition-all duration-300 shadow-sm hover:shadow-md h-full">
        {/* Framed poster */}
        <div className="relative w-full aspect-[3/4] p-2 sm:p-3 lg:p-4 bg-sage/30 flex-none">
          <div className="relative w-full h-full rounded-sm overflow-hidden shadow-sm">
            <Image
              src={ws.image}
              alt={`${ws.title} workshop poster`}
              fill
              sizes="(max-width: 640px) 33vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <div className="flex flex-col flex-1 p-2.5 sm:p-3 lg:p-4">
          <h3 className="font-display text-xs sm:text-sm lg:text-base font-medium text-charcoal mb-0.5 sm:mb-1 group-hover:text-deep-forest transition-colors duration-300">
            {ws.title}
          </h3>
          <p className="font-body text-[10px] sm:text-[11px] text-charcoal/60 leading-snug mb-2 sm:mb-3 flex-1">
            {ws.description}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-3 py-1.5 sm:px-4 sm:py-2 border border-deep-forest/30 text-deep-forest font-body text-[10px] sm:text-xs font-medium tracking-wide rounded-sm hover:bg-deep-forest hover:text-parchment transition-colors duration-300 self-start"
          >
            Book Now
          </a>
        </div>
      </div>
    </StaggerItem>
  );
}

export function Workshops() {
  return (
    <section
      id="workshops"
      className="relative min-h-[100dvh] w-full flex flex-col bg-linen"
      aria-label="Upcoming workshops"
    >
      <div className="relative z-10 flex flex-col h-full pt-16 lg:pt-20 pb-8 lg:pb-10 px-6 lg:px-16 justify-center">
        {/* Header */}
        <div className="max-w-6xl mx-auto w-full flex-none mb-3 sm:mb-4 lg:mb-5">
          <FadeIn delay={0.1}>
            <p className="font-body text-[10px] sm:text-xs tracking-[0.2em] uppercase text-terracotta mb-1.5 sm:mb-2">
              Events
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium leading-[1.2] text-charcoal">
              Upcoming{" "}
              <span className="font-script italic text-burgundy">Workshops</span>
            </h2>
          </FadeIn>
        </div>

        {/* Vertical grid — no horizontal scroll */}
        <div className="max-w-6xl mx-auto w-full flex-1 min-h-0 flex flex-col justify-center">
          <StaggerContainer className="grid grid-cols-3 gap-2 sm:gap-3 lg:gap-4" staggerDelay={0.08}>
            {workshops.map((ws) => (
              <WorkshopCard key={ws.title} ws={ws} />
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
