"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FadeIn } from "../animations/FadeIn";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] w-full overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background Image - Full bleed on mobile, right half on desktop */}
      <div className="absolute inset-0 lg:left-1/2">
        <Image
          src="/hero.jpg"
          alt="Rajeswari Sitaraman in Vrikshasana — Tree pose in nature with vivid blue sky and green grass"
          fill
          preload
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-center"
          style={{ objectPosition: "center 30%" }}
        />
      </div>

      {/* Mobile: Dark translucent card at bottom for text */}
      <div className="lg:hidden absolute bottom-0 left-0 right-0 z-10">
        <div className="bg-charcoal/80 backdrop-blur-sm px-6 py-8 sm:px-8 sm:py-10">
          <FadeIn delay={0.1}>
            <p className="font-body text-xs tracking-[0.2em] uppercase text-gold mb-3">
              Nurturing Holistic Well-being
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="font-display text-2xl sm:text-3xl font-medium leading-[1.15] text-parchment mb-3">
              Reclaim Your Energy.{" "}
              <span className="font-script italic text-gold/90">
                Reconnect With Yourself.
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="font-body text-sm leading-relaxed text-parchment/80 mb-5 max-w-sm">
              Helping women, professionals, seniors and children build strength,
              resilience and well-being through yoga, breathwork and mindful
              living.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-3 mb-5">
              <a
                href="#classes"
                className="inline-flex items-center justify-center px-6 py-3 bg-parchment text-deep-forest font-body text-sm font-semibold tracking-wide rounded-sm hover:bg-sage transition-colors duration-300"
              >
                Explore Classes
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-parchment/40 text-parchment font-body text-sm font-medium tracking-wide rounded-sm hover:border-gold hover:text-gold transition-colors duration-300"
              >
                Contact Us
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-body text-parchment/60">
              <span>1000+ Teaching Hours</span>
              <span className="text-gold/60">·</span>
              <span>4 Countries</span>
              <span className="text-gold/60">·</span>
              <span>M.Sc Yoga, BITS Pilani</span>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Desktop: Left text column on parchment */}
      <div className="hidden lg:flex relative z-10 flex-col justify-center bg-parchment px-16 xl:px-24 w-1/2 min-h-[100dvh] pt-20">
        <div className="max-w-xl">
          <FadeIn delay={0.1}>
            <p className="font-body text-sm tracking-[0.2em] uppercase text-terracotta mb-6">
              Nurturing Holistic Well-being
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="font-display text-[3.25rem] xl:text-[3.75rem] font-medium leading-[1.15] text-charcoal mb-6">
              Reclaim Your Energy.{" "}
              <span className="font-script italic text-burgundy">
                Reconnect With Yourself.
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="font-body text-base xl:text-lg leading-relaxed text-charcoal/80 mb-8 max-w-md">
              Helping women, professionals, seniors and children build strength,
              resilience and well-being through yoga, breathwork and mindful
              living.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="flex flex-row gap-4 mb-8">
              <a
                href="#classes"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-deep-forest text-parchment font-body text-sm font-semibold tracking-wide rounded-sm hover:bg-charcoal transition-colors duration-300"
              >
                Explore Classes
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3.5 border border-charcoal/30 text-charcoal font-body text-sm font-medium tracking-wide rounded-sm hover:border-terracotta hover:text-terracotta transition-colors duration-300"
              >
                Contact Us
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-body text-charcoal/60">
              <span>1000+ Teaching Hours</span>
              <span className="text-gold">·</span>
              <span>4 Countries</span>
              <span className="text-gold">·</span>
              <span>M.Sc Yoga, BITS Pilani</span>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Decorative gold line - desktop only */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="hidden lg:block absolute left-1/2 top-[10%] bottom-[10%] w-px bg-gold/40 origin-top z-20"
      />
    </section>
  );
}
