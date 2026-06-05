"use client";

import Image from "next/image";

const offerings = [
  {
    image: "/women-class.jpg",
    title: "Women's Yoga",
    description: "Strength, mobility, stress support, and women's wellness",
  },
  {
    image: "/seniors-chair.jpg",
    title: "Senior Citizens Yoga",
    description: "Gentle practices for mobility, breathing, balance, and confidence",
  },
  {
    image: "/kids-group.jpg",
    title: "Kids Yoga",
    description: "Fun movement for body awareness, balance, and emotional regulation",
  },
  {
    image: "/zoom-class.jpg",
    title: "Online Yoga",
    description: "Live classes with personal attention and corrections, wherever you are",
  },
  {
    image: "/teaching-class.jpg",
    title: "Pranayama & Meditation",
    description: "Breathwork and focus for calm, clarity, and nervous system ease",
  },
  {
    image: "/hero.jpg",
    title: "Yoga Therapy & Knee Care",
    description: "Personalized support for safe, therapeutic movement",
  },
  {
    image: "/community.jpg",
    title: "Corporate Wellness",
    description: "Desk mobility, stress management, and energy for teams",
  },
];

/* ---------- Stacking offsets ---------- */
const MOBILE_TAB_H = 36;
const MOBILE_START = 170;
const DESKTOP_TAB_H = 44;
const DESKTOP_START = 220;

function getMobileOffset(index: number) {
  return MOBILE_START + index * MOBILE_TAB_H;
}

function getDesktopOffset(index: number) {
  return DESKTOP_START + index * DESKTOP_TAB_H;
}

/* ---------- Section sticky header ---------- */
function SectionHeader() {
  return (
    <div className="sticky top-16 z-50 bg-linen/95 backdrop-blur-sm border-b border-gold/10 px-6 lg:px-16 xl:px-24 py-4 lg:py-5">
      <div className="max-w-7xl mx-auto">
        <p className="font-body text-xs lg:text-sm tracking-[0.2em] uppercase text-terracotta mb-1 lg:mb-2">
          Offerings
        </p>
        <h2 className="font-display text-2xl lg:text-3xl xl:text-4xl font-medium leading-[1.15] text-charcoal mb-1 lg:mb-2">
          Something For{" "}
          <span className="font-script italic text-burgundy">Everybody</span>
        </h2>
        <p className="font-body text-sm text-charcoal/70 max-w-lg leading-relaxed hidden lg:block">
          Age, experience, and physical condition shape what you need from
          yoga. Every offering here is adapted accordingly.
        </p>
      </div>
    </div>
  );
}

/* ---------- Sticky stacking card — single container, tab + body together ---------- */
function StackingCard({
  item,
  index,
}: {
  item: (typeof offerings)[0];
  index: number;
}) {
  const mobileOffset = getMobileOffset(index);
  const desktopOffset = getDesktopOffset(index);
  const reversed = index % 2 === 1;

  return (
    <>
      {/* Mobile */}
      <div
        className="sticky z-40 lg:hidden"
        style={{ top: `${mobileOffset}px` }}
      >
        {/* Title tab — always visible, creates the stacking ribbon */}
        <div className="bg-linen/95 backdrop-blur-sm border-b border-gold/10 px-6 h-9 flex items-center">
          <span className="max-w-xl mx-auto w-full font-display text-sm font-medium text-charcoal">
            {item.title}
          </span>
        </div>

        {/* Card body — gets covered by the next card */}
        <div className="px-6">
          <div className="max-w-xl mx-auto bg-parchment border-x border-b border-gold/10 shadow-sm h-[calc(100dvh-220px)] min-h-[400px] flex flex-col overflow-hidden">
            {/* Image */}
            <div className="relative flex-[3] min-h-0">
              <Image
                src={item.image}
                alt={`${item.title} class at Vatsalyam Yoga`}
                fill
                sizes="100vw"
                className="object-cover"
                loading="lazy"
              />
            </div>
            {/* Text */}
            <div className="flex-1 p-5 flex flex-col justify-center">
              <h3 className="font-display text-xl font-medium text-charcoal leading-tight">
                {item.title}
              </h3>
              <p className="font-body text-sm text-charcoal/65 leading-relaxed mt-2">
                {item.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop */}
      <div
        className="sticky z-40 hidden lg:block"
        style={{ top: `${desktopOffset}px` }}
      >
        {/* Title tab — always visible, creates the stacking ribbon */}
        <div className="bg-linen/95 backdrop-blur-sm border-b border-gold/10 px-16 xl:px-24 h-11 flex items-center">
          <span className="max-w-7xl mx-auto w-full font-display text-base font-medium text-charcoal">
            {item.title}
          </span>
        </div>

        {/* Card body — gets covered by the next card */}
        <div className="px-16 xl:px-24">
          <div className="max-w-7xl mx-auto bg-parchment border-x border-b border-gold/10 shadow-sm h-[calc(100dvh-300px)] min-h-[440px] max-h-[560px] flex overflow-hidden">
            {/* Image */}
            <div
              className={`relative w-[42%] h-full flex-none ${
                reversed ? "order-2" : "order-1"
              }`}
            >
              <Image
                src={item.image}
                alt={`${item.title} class at Vatsalyam Yoga`}
                fill
                sizes="42vw"
                className="object-cover"
                loading="lazy"
              />
            </div>

            {/* Text */}
            <div
              className={`flex-1 flex flex-col justify-center px-10 xl:px-14 ${
                reversed
                  ? "order-1 text-right"
                  : "order-2 text-left"
              }`}
            >
              <h3 className="font-display text-2xl xl:text-[1.75rem] font-medium text-charcoal leading-tight">
                {item.title}
              </h3>
              <p className="font-body text-base xl:text-lg text-charcoal/65 leading-relaxed mt-3">
                {item.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function Classes() {
  return (
    <section
      id="classes"
      className="relative w-full bg-linen"
      aria-label="Classes and offerings"
    >
      <SectionHeader />

      {offerings.map((item, index) => (
        <StackingCard key={item.title} item={item} index={index} />
      ))}
    </section>
  );
}
