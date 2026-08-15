import React from "react";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] bg-cream py-12 md:py-20 px-6 text-center select-none relative">
      {/* Decorative luxury lines background elements */}
      <div className="absolute top-1/4 left-10 w-40 h-[1px] bg-rose-gold/25 hidden lg:block" />
      <div className="absolute bottom-1/4 right-10 w-40 h-[1px] bg-rose-gold/25 hidden lg:block" />

      <span className="font-sans text-xs md:text-sm font-semibold tracking-[0.35em] text-rose-gold uppercase block mb-4">
        404 ERROR
      </span>

      <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-charcoal leading-tight mb-6">
        Page <span className="italic font-normal text-rose-gold-dark">not found.</span>
      </h1>

      <p className="font-sans text-sm md:text-base text-soft-gray max-w-md mx-auto leading-relaxed tracking-wide mb-10">
        The page you are looking for does not exist or has been moved. Let us help you find your way back to Allure.
      </p>

      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full sm:w-auto z-10">
        <Button href="/" variant="solid" className="bg-rose-gold hover:bg-rose-gold-dark text-charcoal hover:text-white border-rose-gold hover:border-rose-gold-dark">
          Back to Home
        </Button>
        <Button href="/services" variant="outline">
          Explore Services
        </Button>
        <Button href="/contact" variant="outline">
          Contact Us
        </Button>
      </div>
    </div>
  );
}
