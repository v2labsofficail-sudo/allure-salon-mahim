import React from "react";
import Image from "next/image";

export default function FeatureSection() {
  return (
    <section className="relative h-[60vh] md:h-[70vh] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1596178065887-1198b6148b2b?q=80&w=1600&auto=format&fit=crop"
          alt="Cinematic luxury beauty aesthetic"
          fill
          className="object-cover transition-transform duration-[4000ms] hover:scale-105"
          sizes="100vw"
        />
        {/* Dark elegant backdrop filter to pop white text */}
        <div className="absolute inset-0 bg-charcoal/45 backdrop-brightness-[0.8]" />
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 text-center px-6">
        <div className="max-w-4xl mx-auto flex flex-col gap-3 md:gap-4 select-none">
          <span className="font-sans text-xs md:text-sm font-semibold tracking-[0.4em] text-rose-gold uppercase mb-2">
            STATEMENT OF INDIVIDUALITY
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-light text-white tracking-widest leading-[1.2]">
            YOUR MOMENT. <br className="sm:hidden" />
            YOUR BEAUTY. <br className="sm:hidden" />
            <span className="italic font-normal text-rose-gold-light">YOUR ALLURE.</span>
          </h2>
        </div>
      </div>

      {/* Double decorative hairline border overlays */}
      <div className="absolute inset-6 border border-white/10 pointer-events-none z-10" />
      <div className="absolute inset-8 border border-rose-gold/10 pointer-events-none z-10" />
    </section>
  );
}
