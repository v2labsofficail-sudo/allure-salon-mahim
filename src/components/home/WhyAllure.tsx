import React from "react";
import { Award, Sparkles, Shield, Compass } from "lucide-react";

export default function WhyAllure() {
  const items = [
    {
      icon: Award,
      title: "EXPERTISE",
      description: "Professional beauty specialists dedicated to detail.",
    },
    {
      icon: Sparkles,
      title: "PERSONALised CARE",
      description: "Services tailored around every client's individual needs.",
    },
    {
      icon: Compass,
      title: "PREMIUM EXPERIENCE",
      description: "A refined salon environment designed around comfort.",
    },
    {
      icon: Shield,
      title: "ATTENTION TO DETAIL",
      description: "Every service delivered with precision and care.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white border-b border-border-custom/50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <span className="font-sans text-xs md:text-sm font-semibold tracking-[0.3em] text-rose-gold uppercase block mb-4">
            WHY ALLURE
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-charcoal leading-tight">
            Crafted for <span className="italic font-normal text-rose-gold-dark">excellence.</span>
          </h2>
          <div className="h-[1px] w-20 bg-rose-gold mx-auto mt-6" />
        </div>

        {/* 4-Item Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="group flex flex-col items-center text-center p-8 border border-border-custom bg-cream/30 hover:bg-cream transition-luxury duration-500"
              >
                {/* Minimal Icon Outline */}
                <div className="mb-6 p-4 rounded-full border border-rose-gold/20 text-rose-gold group-hover:bg-rose-gold group-hover:text-white transition-luxury duration-500">
                  <IconComponent className="w-6 h-6 stroke-[1.25]" />
                </div>

                <h3 className="font-sans text-xs md:text-sm tracking-[0.2em] uppercase font-bold text-charcoal mb-4">
                  {item.title}
                </h3>
                <p className="font-sans text-xs md:text-sm text-soft-gray leading-relaxed max-w-[240px]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
