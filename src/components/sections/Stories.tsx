"use client";

import { motion } from "framer-motion";
import { FadeIn } from "../animations/FadeIn";

const testimonials = [
  {
    name: "Anuradha Bharat",
    location: "Chennai",
    quote:
      "I was skeptical about online yoga, but Raji is incredibly observant and attentive. Yoga has helped me manage aches and pains while improving fitness and awareness.",
    rotateDeg: 1,
    yOffsetPx: -4,
    featured: true,
  },
  {
    name: "Jayalakshmi R.",
    location: "USA",
    quote:
      "Raji tailored the session to my personal goals. She observed, corrected my posture, offered suggestions, and consistently followed up.",
    rotateDeg: -1,
    yOffsetPx: 8,
    featured: true,
  },
  {
    name: "Bhanu Devarakonda",
    location: "",
    quote:
      "My mother and mother-in-law have transformed physically and mentally. Raji's kindness, patience, and personal connection created a safe and uplifting environment.",
    rotateDeg: 2,
    yOffsetPx: -8,
    featured: true,
  },
  {
    name: "Devi Subramanian",
    location: "Australia",
    quote:
      "Despite the virtual format, her teaching is exceptionally focused. She observes, corrects, and aligns poses accurately even through the screen.",
    rotateDeg: -2,
    yOffsetPx: 4,
    featured: false,
  },
  {
    name: "Archana Wad",
    location: "",
    quote:
      "Raji understood the knee problems for each one of us and gave precise exercises. That helped me greatly.",
    rotateDeg: 1,
    yOffsetPx: -4,
    featured: false,
  },
  {
    name: "Student",
    location: "UK",
    quote:
      "I started with no background in yoga. My stamina and flexibility improved so much through her patient and supportive teaching.",
    rotateDeg: -1,
    yOffsetPx: 8,
    featured: false,
  },
];

function TestimonialCard({
  t,
  index,
}: {
  t: (typeof testimonials)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: t.yOffsetPx + 30, rotate: t.rotateDeg }}
      whileInView={{ opacity: 1, y: t.yOffsetPx, rotate: t.rotateDeg }}
      whileHover={{
        rotate: 0,
        y: t.yOffsetPx - 4,
        transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
      }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1 + 0.15,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="group"
    >
      <div
        className={`bg-linen rounded-sm border border-gold/10 hover:border-gold/25 shadow-sm hover:shadow-lg transition-shadow duration-300 h-full flex flex-col ${
          t.featured ? "p-4 sm:p-5 lg:p-6" : "p-3 sm:p-4 lg:p-5"
        }`}
      >
        <div className="relative flex-1">
          <span
            className="absolute -top-2 -left-2 font-display text-4xl sm:text-5xl lg:text-6xl text-gold/6 leading-none select-none"
            aria-hidden="true"
          >
            &ldquo;
          </span>
          <p
            className={`font-body text-charcoal/80 leading-relaxed relative z-10 ${
              t.featured
                ? "text-sm lg:text-[15px]"
                : "text-xs sm:text-sm"
            }`}
          >
            {t.quote}
          </p>
        </div>
        <div className="mt-3 sm:mt-4 pt-3 border-t border-gold/10">
          <p className="font-display text-sm sm:text-base font-medium text-charcoal">
            {t.name}
          </p>
          {t.location && (
            <p className="font-body text-xs text-charcoal/50 mt-0.5">
              {t.location}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function Stories() {
  return (
    <section
      id="stories"
      className="relative min-h-[100dvh] w-full flex flex-col bg-parchment"
      aria-label="Stories from our students"
    >
      <div className="relative z-10 flex flex-col h-full pt-16 lg:pt-20 pb-8 lg:pb-10 px-6 lg:px-16 justify-center">
        {/* Header */}
        <div className="max-w-6xl mx-auto w-full flex-none mb-6 lg:mb-10">
          <FadeIn delay={0.1}>
            <p className="font-body text-xs tracking-[0.2em] uppercase text-terracotta mb-2">
              Testimonials
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-medium leading-[1.2] text-charcoal mb-2 lg:mb-3">
              Stories From Our{" "}
              <span className="font-script italic text-burgundy">Students</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="font-body text-sm text-charcoal/70 max-w-lg leading-relaxed">
              Students across India, Australia, the UK, and the USA practice with
              Vatsalyam Yoga. Here is what they say.
            </p>
          </FadeIn>
        </div>

        {/* Tilted cards grid — scattered editorial feel */}
        <div className="max-w-6xl mx-auto w-full flex-1 min-h-0 flex flex-col justify-center">
          {/* Mobile: single column with alternating tilts */}
          <div className="flex flex-col gap-5 lg:hidden">
            {testimonials.map((t, index) => (
              <TestimonialCard key={t.name} t={t} index={index} />
            ))}
          </div>

          {/* Desktop: 3×2 grid with scattered tilts */}
          <div className="hidden lg:grid lg:grid-cols-3 lg:gap-6">
            {testimonials.map((t, index) => (
              <TestimonialCard key={t.name} t={t} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
