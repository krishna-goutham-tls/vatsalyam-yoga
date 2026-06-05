"use client";

import { useState } from "react";
import { FadeIn } from "../animations/FadeIn";

const interests = [
  "Women's Yoga",
  "Senior Citizen Yoga",
  "Kids Yoga",
  "Corporate Wellness",
  "Pranayama / Meditation",
  "One-to-One Yoga Support",
];

export function Contact() {
  const [interest, setInterest] = useState("");

  return (
    <section
      id="contact"
      className="relative min-h-[100dvh] w-full flex flex-col lg:flex-row bg-parchment"
      aria-label="Begin your practice"
    >
      {/* Left: Contact Info */}
      <div className="flex flex-col justify-center flex-1 lg:min-h-[100dvh] px-6 pt-16 pb-8 sm:px-8 lg:px-12 lg:py-8 xl:px-16">
        <div className="max-w-md mx-auto lg:mx-0">
          <FadeIn delay={0.1}>
            <p className="font-body text-[10px] sm:text-xs tracking-[0.2em] uppercase text-terracotta mb-2 sm:mb-3">
              Reach Out
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium leading-[1.2] text-charcoal mb-3 sm:mb-4">
              Begin Your{" "}
              <span className="font-script italic text-burgundy">Practice</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="font-body text-xs sm:text-sm text-charcoal/75 leading-relaxed mb-4 sm:mb-6">
              Interested in yoga classes, corporate wellness sessions, workshops,
              or personalized support? Reach out directly.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="space-y-2.5 sm:space-y-3 mb-4 sm:mb-6">
              <a
                href="https://wa.me/919902811669?text=Hi%20Raji,%20I%20am%20interested%20in%20knowing%20more%20about%20Vatsalyam%20Yoga"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 font-body text-xs sm:text-sm text-charcoal hover:text-terracotta transition-colors duration-200"
              >
                <span className="w-6 h-6 rounded-full bg-sage flex items-center justify-center flex-none">
                  <svg className="w-3 h-3 text-muted-olive" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </span>
                WhatsApp: +91 99028 11669
              </a>

              <a
                href="https://vatsalyamyoga.practicenow.us"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 font-body text-xs sm:text-sm text-charcoal hover:text-terracotta transition-colors duration-200"
              >
                <span className="w-6 h-6 rounded-full bg-sage flex items-center justify-center flex-none">
                  <svg className="w-3 h-3 text-muted-olive" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </span>
                Book: vatsalyamyoga.practicenow.us
              </a>

              <a
                href="https://www.instagram.com/vatsalyamyoga/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 font-body text-xs sm:text-sm text-charcoal hover:text-terracotta transition-colors duration-200"
              >
                <span className="w-6 h-6 rounded-full bg-sage flex items-center justify-center flex-none">
                  <svg className="w-3 h-3 text-muted-olive" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </span>
                Instagram: Vatsalyam Yoga
              </a>

              <a
                href="https://www.linkedin.com/in/rajeswarisitaraman/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 font-body text-xs sm:text-sm text-charcoal hover:text-terracotta transition-colors duration-200"
              >
                <span className="w-6 h-6 rounded-full bg-sage flex items-center justify-center flex-none">
                  <svg className="w-3 h-3 text-muted-olive" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </span>
                LinkedIn: Rajeswari Sitaraman
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.5}>
            <a
              href="https://wa.me/919902811669?text=Hi%20Raji,%20I%20am%20interested%20in%20knowing%20more%20about%20Vatsalyam%20Yoga"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 bg-deep-forest text-parchment font-body text-xs sm:text-sm font-semibold tracking-wide rounded-sm hover:bg-charcoal transition-colors duration-300"
            >
              Enquire on WhatsApp
            </a>
          </FadeIn>
        </div>
      </div>

      {/* Right: Form */}
      <div className="flex flex-col justify-center flex-1 lg:min-h-[100dvh] px-6 pt-16 pb-8 sm:px-8 lg:px-12 lg:py-8 xl:px-16 bg-linen">
        <FadeIn delay={0.2}>
          <form className="max-w-md mx-auto lg:mx-0 w-full space-y-3 sm:space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="name" className="block font-body text-[11px] sm:text-xs tracking-wide uppercase text-charcoal/60 mb-1">
                Name
              </label>
              <input
                id="name"
                type="text"
                className="w-full px-3 py-2 bg-parchment border border-gold/15 rounded-sm font-body text-xs sm:text-sm text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:border-terracotta transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-body text-[11px] sm:text-xs tracking-wide uppercase text-charcoal/60 mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-3 py-2 bg-parchment border border-gold/15 rounded-sm font-body text-xs sm:text-sm text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:border-terracotta transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block font-body text-[11px] sm:text-xs tracking-wide uppercase text-charcoal/60 mb-1">
                Phone / WhatsApp
              </label>
              <input
                id="phone"
                type="tel"
                className="w-full px-3 py-2 bg-parchment border border-gold/15 rounded-sm font-body text-xs sm:text-sm text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:border-terracotta transition-colors"
                placeholder="+91 ..."
              />
            </div>

            <div>
              <label htmlFor="interest" className="block font-body text-[11px] sm:text-xs tracking-wide uppercase text-charcoal/60 mb-1">
                Interest
              </label>
              <select
                id="interest"
                value={interest}
                onChange={(e) => setInterest(e.target.value)}
                className="w-full px-3 py-2 bg-parchment border border-gold/15 rounded-sm font-body text-xs sm:text-sm text-charcoal focus:outline-none focus:border-terracotta transition-colors appearance-none"
              >
                <option value="">Select an option</option>
                {interests.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block font-body text-[11px] sm:text-xs tracking-wide uppercase text-charcoal/60 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={3}
                className="w-full px-3 py-2 bg-parchment border border-gold/15 rounded-sm font-body text-xs sm:text-sm text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:border-terracotta transition-colors resize-none"
                placeholder="How can we help you?"
              />
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center px-5 py-2.5 sm:py-3 bg-terracotta text-parchment font-body text-xs sm:text-sm font-semibold tracking-wide rounded-sm hover:bg-burgundy transition-colors duration-300"
            >
              Send Enquiry
            </button>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}
