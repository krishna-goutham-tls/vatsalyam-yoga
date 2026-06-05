"use client";

import Image from "next/image";
import { FadeIn } from "../animations/FadeIn";

const credentials = [
  "M.Sc. Information Systems, BITS Pilani",
  "M.Sc. Yoga",
  "Nearly 20 years in IT, including Tata Consultancy Services",
  "Teacher Training in Yoga Therapy for Women",
  "Certified Kids Yoga Teacher",
  "Applied Anatomy in Yoga Teaching",
  "Ongoing study of Pranayama, Meditation, and Therapeutic Applications of Yoga",
];

export function Founder() {
  return (
    <section
      id="founder"
      className="relative min-h-[100dvh] w-full flex flex-col lg:flex-row bg-linen"
      aria-label="Meet the founder"
    >
      {/* Left Image */}
      <div className="relative w-full lg:w-[42%] h-[55vh] sm:h-[60vh] lg:h-auto lg:min-h-[100dvh] flex-none">
        <Image
          src="/seated.jpg"
          alt="Rajeswari Sitaraman seated outdoors under tree canopy"
          fill
          sizes="(max-width: 1024px) 100vw, 42vw"
          className="object-cover object-top"
          loading="lazy"
        />
      </div>

      {/* Right Text */}
      <div className="flex flex-col justify-center flex-1 lg:min-h-[100dvh] px-6 pt-16 pb-8 sm:px-8 lg:px-12 lg:py-8 xl:px-16 bg-parchment overflow-y-auto lg:overflow-visible">
        <div className="max-w-xl mx-auto lg:mx-0">
          <FadeIn delay={0.1}>
            <p className="font-body text-[10px] sm:text-xs tracking-[0.2em] uppercase text-terracotta mb-2 sm:mb-3">
              The Person Behind It
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium leading-[1.2] text-charcoal mb-3 sm:mb-4">
              Meet{" "}
              <span className="font-script italic text-burgundy">Raji</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="font-body text-xs sm:text-sm text-charcoal/80 leading-relaxed mb-3 sm:mb-4">
              Rajeswari Sitaraman is the founder of Vatsalyam Yoga. Nearly two
              decades in corporate IT gave her firsthand understanding of stress,
              deadlines, and the need for sustainable wellness. Her shift to yoga was
              driven by personal change, not merely a career change.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="mb-3 sm:mb-4">
              <p className="font-display text-sm sm:text-base font-medium text-charcoal mb-2">
                Credentials
              </p>
              <ul className="space-y-1">
                {credentials.map((cred) => (
                  <li
                    key={cred}
                    className="flex items-start gap-2 font-body text-[11px] sm:text-xs text-charcoal/70 leading-relaxed"
                  >
                    <span className="text-gold mt-1 flex-none">—</span>
                    {cred}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div className="pt-3 sm:pt-4 border-t border-gold/10">
              <h3 className="font-display text-sm sm:text-base font-medium text-charcoal mb-2">
                What Grounds Her
              </h3>
              <p className="font-body text-xs sm:text-sm text-charcoal/80 leading-relaxed">
                Yoga changed how Raji relates to her body and mind. Her ongoing study
                of Vedanta — the Bhagavad Gita and Upanishads — continues to offer
                grounding, clarity, and perspective. This understanding shapes how
                she teaches and how she works with every student.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
