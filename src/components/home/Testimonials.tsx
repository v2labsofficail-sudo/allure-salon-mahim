import React from "react";
import { Star } from "lucide-react";
import { salonTestimonials } from "../../data/salonData";

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-cream border-b border-border-custom/50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <span className="font-sans text-xs md:text-sm font-semibold tracking-[0.3em] text-rose-gold uppercase block mb-4">
            TESTIMONIALS
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-charcoal leading-tight">
            Loved by <span className="italic font-normal text-rose-gold-dark">Our Clients.</span>
          </h2>
          <div className="h-[1px] w-20 bg-rose-gold mx-auto mt-6" />
        </div>

        {/* 3-Column Editorial Quotes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 items-start">
          {salonTestimonials.map((item, index) => (
            <div
              key={item.id}
              className={`flex flex-col items-center text-center px-4 relative ${
                index !== 0 ? "md:border-l md:border-border-custom/50" : ""
              }`}
            >
              {/* Star Rating */}
              <div className="flex items-center gap-1.5 mb-6 text-rose-gold">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>

              {/* Quote Block */}
              <p className="font-display text-lg md:text-xl font-light text-charcoal italic leading-relaxed mb-6 tracking-wide select-none">
                &ldquo;{item.text}&rdquo;
              </p>

              {/* Author Identifier */}
              <span className="font-sans text-[10px] md:text-xs font-semibold tracking-[0.25em] text-soft-gray uppercase">
                {item.author}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
