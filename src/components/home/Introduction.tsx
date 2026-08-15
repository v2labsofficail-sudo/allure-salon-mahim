"use client";

import React from "react";
import Image from "next/image";
import Button from "../ui/Button";

export default function Introduction() {
  return (
    <section className="py-20 md:py-28 bg-white border-y border-border-custom/50">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Side: Editorial Image */}
        <div className="lg:col-span-6 relative w-full h-[300px] md:h-[450px]">
          {/* Subtle border outline behind the image */}
          <div className="absolute inset-0 border border-rose-gold/20 -translate-x-3 -translate-y-3 lg:-translate-x-5 lg:-translate-y-5" />
          <div className="relative w-full h-full overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1200&auto=format&fit=crop"
              alt="Allure Salon Mahim premium beauty parlour interior in Mumbai"
              fill
              className="object-cover transition-transform duration-1000 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Right Side: Elegant Copy */}
        <div className="lg:col-span-6 flex flex-col items-start text-left">
          <span className="font-sans text-xs md:text-sm font-semibold tracking-[0.3em] text-rose-gold uppercase mb-4">
            THE ALLURE EXPERIENCE
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-charcoal leading-tight mb-8">
            Beauty, thoughtfully <br />
            <span className="italic font-normal text-rose-gold-dark">elevated.</span>
          </h2>
          <p className="font-sans text-sm md:text-base text-soft-gray leading-relaxed mb-6 tracking-wide">
            At Allure Salon Mahim, we believe beauty is a deeply personal expression. We reject the
            one-size-fits-all approach, instead curating tailor-made experiences designed around
            your individual desires, hair structure, and skin needs.
          </p>
          <p className="font-sans text-sm md:text-base text-soft-gray leading-relaxed mb-10 tracking-wide">
            Our serene sanctuary in Mahim combines premium products with refined technical mastery,
            creating a tranquil space where you can unwind while our specialists deliver meticulous
            skincare, hair design, makeup, and wellness rituals.
          </p>
          <Button href="/about" variant="outline">
            DISCOVER ALLURE
          </Button>
        </div>
      </div>
    </section>
  );
}
