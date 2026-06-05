"use client";

import Image from "next/image";
import { FadeIn, StaggerContainer, StaggerItem } from "../animations/FadeIn";

const pillars = [
  {
    title: "Personal Attention",
    description: "Small groups, posture observation, individual guidance",
  },
  {
    title: "Yoga For You",
    description: "Modified for your age, goals, and physical condition",
  },
  {
    title: "Beyond Movement",
    description:
      "Breath, relaxation, awareness, and habits that stay with you",
  },
  {
    title: "Community",
    description: "A safe, supportive space where people grow at their own pace",
  },
];

export function About() {
  return (
    <section
      id="about"
      className="relative min-h-[100dvh] w-full flex flex-col lg:flex-row bg-linen"
      aria-label="About Vatsalyam Yoga"
    >
      {/* Left Image - Desktop / Top - Mobile */}
      <div className="relative w-full lg:w-1/2 h-[32vh] sm:h-[38vh] lg:h-auto lg:min-h-[100dvh]">
        <Image
          src="/community.jpg"
          alt="Vatsalyam Yoga community group photo in a warm indoor studio with wooden walls"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-center"
          loading="lazy"
        />
      </div>

      {/* Right Text Column on Parchment */}
      <div className="flex flex-col justify-center px-6 pt-16 pb-8 sm:px-10 lg:px-16 xl:px-24 lg:w-1/2 lg:min-h-[100dvh] bg-parchment">
        <div className="max-w-xl mx-auto lg:mx-0">
          <FadeIn delay={0.1}>
            <p className="font-body text-xs sm:text-sm tracking-[0.2em] uppercase text-terracotta mb-3 sm:mb-5">
              About Vatsalyam
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] xl:text-5xl font-medium leading-[1.2] text-charcoal mb-4 sm:mb-6">
              What Vatsalyam{" "}
              <span className="font-script italic text-burgundy">Means</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="font-body text-sm sm:text-base lg:text-[15px] leading-[1.75] text-charcoal/85 mb-6 sm:mb-8">
              The word Vatsalyam is the nurturing care of a mother. That spirit
              runs through every class here. Vatsalyam Yoga supports physical,
              mental and emotional well-being through movement, breath,
              mindfulness and self-awareness. Small groups. Individual attention.
              Practices that adapt to your body, your age, and what you need
              that day. Everyone is encouraged to grow at their own pace.
            </p>
          </FadeIn>

          <StaggerContainer
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
            staggerDelay={0.08}
          >
            {pillars.map((pillar) => (
              <StaggerItem key={pillar.title}>
                <div className="group p-3.5 sm:p-4 bg-sage/50 rounded-sm border border-gold/10 hover:border-gold/30 transition-all duration-300">
                  <h3 className="font-display text-sm sm:text-base font-medium text-charcoal mb-1 group-hover:text-deep-forest transition-colors duration-300">
                    {pillar.title}
                  </h3>
                  <p className="font-body text-xs text-charcoal/65 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
