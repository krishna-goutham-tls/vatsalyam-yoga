"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "../animations/FadeIn";

const videos = [
  { id: "video1", label: "Anuradha's Story" },
  { id: "video2", label: "Jayalakshmi's Story" },
  { id: "video3", label: "Bhanu's Story" },
  { id: "video4", label: "Student from UK" },
];

function VideoCard({ video }: { video: typeof videos[0] }) {
  return (
    <StaggerItem>
      <button
        className="group relative w-full aspect-[16/9] sm:aspect-video bg-charcoal/40 rounded-sm overflow-hidden border border-gold/10 hover:border-gold/30 transition-all duration-300"
        aria-label={`Play video: ${video.label}`}
        onClick={() => {
          const el = document.getElementById(video.id);
          if (el) {
            (el as HTMLVideoElement).play();
          }
        }}
      >
        <div
          className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-charcoal/20 z-10"
          aria-hidden="true"
        />

        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-parchment/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 text-deep-forest ml-1"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-20 p-3 sm:p-4 lg:p-5">
          <p className="font-body text-sm sm:text-base lg:text-lg text-parchment font-medium">
            {video.label}
          </p>
        </div>

        <video
          id={video.id}
          src={`/${video.id}.mp4`}
          className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-30 transition-opacity duration-300"
          preload="none"
          playsInline
        />
      </button>
    </StaggerItem>
  );
}

export function VideoTestimonials() {
  return (
    <section
      id="videos"
      className="relative min-h-[100dvh] w-full flex flex-col bg-deep-forest"
      aria-label="Video testimonials"
    >
      <div className="relative z-10 flex flex-col h-full pt-16 lg:pt-20 pb-8 lg:pb-10 px-6 lg:px-16 justify-center">
        {/* Header */}
        <div className="max-w-6xl mx-auto w-full flex-none mb-4 lg:mb-6">
          <FadeIn delay={0.1}>
            <p className="font-body text-xs tracking-[0.2em] uppercase text-gold/80 mb-2">
              In Their Words
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-medium leading-[1.2] text-parchment mb-2">
              Watch Their{" "}
              <span className="font-script italic text-gold">Stories</span>
            </h2>
          </FadeIn>
        </div>

        {/* Mobile: full-width vertical stack */}
        <div className="max-w-6xl mx-auto w-full flex-1 min-h-0 flex flex-col justify-center lg:hidden">
          <StaggerContainer className="flex flex-col gap-3" staggerDelay={0.08}>
            {videos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </StaggerContainer>
        </div>

        {/* Desktop: 2x2 grid */}
        <div className="max-w-6xl mx-auto w-full flex-1 min-h-0 hidden lg:flex lg:flex-col lg:justify-center">
          <StaggerContainer className="grid grid-cols-2 gap-5 xl:gap-6" staggerDelay={0.08}>
            {videos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
