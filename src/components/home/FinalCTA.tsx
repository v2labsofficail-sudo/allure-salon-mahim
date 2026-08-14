import React from "react";
import Button from "../ui/Button";

export default function FinalCTA() {
  return (
    <section className="bg-charcoal text-cream py-20 md:py-28 relative overflow-hidden text-center border-b border-rose-gold/20">
      {/* Decorative luxury lines background elements */}
      <div className="absolute top-0 left-0 w-24 h-24 border-t border-l border-rose-gold/15 translate-x-6 translate-y-6 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-24 h-24 border-b border-r border-rose-gold/15 -translate-x-6 -translate-y-6 pointer-events-none" />

      <div className="max-w-3xl mx-auto px-6 relative z-10 flex flex-col items-center">
        <span className="font-sans text-xs md:text-sm font-semibold tracking-[0.35em] text-rose-gold uppercase mb-6">
          RESERVE YOUR EXPERIENCE
        </span>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-cream mb-6 leading-tight">
          Ready for your <span className="italic font-normal text-rose-gold">Allure moment?</span>
        </h2>
        <p className="font-sans text-sm md:text-base text-rose-gold-light max-w-lg mb-10 leading-relaxed tracking-wide">
          Book your next beauty, hair, makeup, or wellness experience with Allure Salon Mahim.
          Enjoy 10% off on your first visit or when you refer a friend. Let us elevate your natural confidence.
        </p>
        <Button href="/contact" variant="solid" className="bg-rose-gold text-charcoal hover:bg-rose-gold-dark hover:text-white border-rose-gold hover:border-rose-gold-dark">
          BOOK AN APPOINTMENT
        </Button>
      </div>
    </section>
  );
}
