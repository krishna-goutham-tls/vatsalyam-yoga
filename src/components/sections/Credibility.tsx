"use client";

import { motion } from "framer-motion";
import { FadeIn } from "../animations/FadeIn";
import { CountUp } from "../animations/CountUp";

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  isText?: boolean;
  textDisplay?: string;
}

const stats: StatItem[] = [
  { value: 1000, suffix: "+", label: "Teaching Hours" },
  { value: 800, suffix: "+", label: "Classes Conducted" },
  { value: 4, suffix: "", label: "Countries — India, USA, UK, Australia" },
  { value: 20, suffix: "", label: "Years in Corporate IT" },
  { value: 0, suffix: "", label: "BITS Pilani", isText: true, textDisplay: "M.Sc Yoga" },
];

function StatNumber({ stat, index }: { stat: StatItem; index: number }) {
  return (
    <>
      <span className="font-display text-5xl sm:text-6xl lg:text-7xl font-medium text-parchment leading-none tracking-tight">
        {stat.isText ? (
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.12 + 0.2,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            {stat.textDisplay}
          </motion.span>
        ) : (
          <CountUp target={stat.value} suffix={stat.suffix} duration={2.2} />
        )}
      </span>

      <div className="h-px w-12 sm:w-14 bg-gold/50 my-2.5 sm:my-3" aria-hidden="true" />

      <p className="font-body text-sm sm:text-base text-parchment/75 leading-snug max-w-[220px]">
        {stat.label}
      </p>
    </>
  );
}

export function Credibility() {
  return (
    <section
      id="credibility"
      className="relative min-h-[100dvh] w-full flex flex-col items-center justify-center bg-deep-forest"
      aria-label="Years of practice and credentials"
    >
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #FAF6EE 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col justify-center h-full px-6 lg:px-16 pt-16 lg:pt-20 pb-8 lg:pb-10">
        <FadeIn delay={0.1}>
          <div className="flex items-center gap-4 sm:gap-5 mb-8 sm:mb-10 lg:mb-12 justify-center">
            <div className="h-px w-10 sm:w-14 lg:w-20 bg-gold/50" />
            <p className="font-body text-xs sm:text-sm tracking-[0.25em] uppercase text-gold/90">
              Years of Practice
            </p>
            <div className="h-px w-10 sm:w-14 lg:w-20 bg-gold/50" />
          </div>
        </FadeIn>

        {/* Mobile: single vertical column */}
        <div className="flex flex-col items-center gap-6 sm:gap-8 lg:hidden">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1 + 0.15,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="flex flex-col items-center text-center"
            >
              <StatNumber stat={stat} index={index} />
            </motion.div>
          ))}
        </div>

        {/* Desktop: 3 + 2 grid */}
        <div className="hidden lg:grid lg:grid-cols-3 lg:gap-y-8 lg:gap-x-6">
          {stats.slice(0, 3).map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.12 + 0.15,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="flex flex-col items-center text-center py-4"
            >
              <StatNumber stat={stat} index={index} />
            </motion.div>
          ))}
          <div className="col-start-1 col-span-3 grid grid-cols-2 gap-x-6 max-w-2xl mx-auto mt-4">
            {stats.slice(3, 5).map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: (index + 3) * 0.12 + 0.15,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="flex flex-col items-center text-center py-4"
              >
                <StatNumber stat={stat} index={index + 3} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
