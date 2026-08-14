"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { MessageSquare } from "lucide-react";

interface FeaturedService {
  title: string;
  category: string;
  description: string;
  image: string;
  waMessage: string;
}

export default function FeaturedServicesCarousel() {
  const featuredServices: FeaturedService[] = [
    {
      title: "Hair Botox & Keratin",
      category: "HAIR TREATMENT",
      description: "Advanced restorative treatments that eliminate frizz, rebuild structural strength, and deliver mirror-like shine.",
      image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?q=80&w=800&auto=format&fit=crop",
      waMessage: "Hi Allure Salon, I'd like to book a consultation for the Hair Botox & Keratin Treatment."
    },
    {
      title: "Luxury Facials (O3 & Serenite)",
      category: "SKINCARE RITUALS",
      description: "Deeply nourishing facial treatments tailored to restore moisture, treat skin concerns, and reveal a radiant glow.",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop",
      waMessage: "Hi Allure Salon, I'd like to book a Luxury Facial (O3 / Serenite) session."
    },
    {
      title: "Bridal Makeup & Hairstyles",
      category: "BRIDAL & EDITORIAL",
      description: "Exquisite, long-lasting bridal makeovers and customized hairstyles crafted to make your wedding day unforgettable.",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop",
      waMessage: "Hi Allure Salon, I'd like to book or inquire about your Bridal Makeup and Hairstyling packages."
    },
    {
      title: "Spa Manicure & Pedicure",
      category: "WELLNESS CARE",
      description: "Indulgent hand and foot wellness therapies that include organic scrubs, soothing massage, and expert nail grooming.",
      image: "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?q=80&w=800&auto=format&fit=crop",
      waMessage: "Hi Allure Salon, I'd like to book a Spa Manicure & Spa Pedicure session."
    },
    {
      title: "Custom Nail Art & Gel Extensions",
      category: "NAIL ARTISTRY",
      description: "Express your individuality with intricate custom designs, durable gel overlays, and high-fashion extension work.",
      image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=800&auto=format&fit=crop",
      waMessage: "Hi Allure Salon, I'd like to book an appointment for Custom Nail Art & Extensions."
    }
  ];

  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeDot, setActiveDot] = useState(0);

  // Mouse drag state variables for desktop/simulated swipe
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeftVal = useRef(0);

  // Monitor scroll to update the active dot indicator
  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const cardWidth = scrollRef.current.firstElementChild?.clientWidth || 300;
      const gap = 24; // gap-6 matches 24px in Tailwind
      const index = Math.round(scrollLeft / (cardWidth + gap));
      setActiveDot(index);
    }
  };

  // Mouse Drag Event Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    isDown.current = true;
    if (scrollRef.current) {
      startX.current = e.pageX - scrollRef.current.offsetLeft;
      scrollLeftVal.current = scrollRef.current.scrollLeft;
    }
  };

  const handleMouseLeave = () => {
    isDown.current = false;
  };

  const handleMouseUp = () => {
    isDown.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5; // Adjust drag speed
    scrollRef.current.scrollLeft = scrollLeftVal.current - walk;
  };

  return (
    <section className="py-20 md:py-28 bg-cream/45 border-b border-border-custom/50 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-row items-end justify-between mb-10 md:mb-16 gap-4">
          <div className="text-left">
            <span className="font-sans text-xs md:text-sm font-semibold tracking-[0.3em] text-rose-gold uppercase block mb-4">
              SIGNATURE TREATMENTS
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-charcoal leading-tight">
              Our Featured <span className="italic font-normal text-rose-gold-dark">Specials.</span>
            </h2>
          </div>
        </div>

        {/* Carousel Container with Scroll Snap & Drag/Swipe Capabilities */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className="flex flex-row flex-nowrap overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden pb-6 -mx-6 px-6 lg:mx-0 lg:px-0 cursor-grab active:cursor-grabbing select-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {featuredServices.map((service, idx) => (
            <div
              key={idx}
              className="bg-white border border-border-custom group flex flex-col h-auto w-[80vw] sm:w-[45vw] lg:w-[calc(33.333%-16px)] shrink-0 snap-start relative"
            >
              {/* Image Section */}
              <div className="relative w-full h-[240px] md:h-[280px] overflow-hidden pointer-events-none">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  sizes="(max-width: 768px) 80vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-charcoal/10" />
                <span className="absolute top-4 left-4 bg-white/95 px-3 py-1 font-sans text-[10px] font-bold tracking-widest uppercase text-rose-gold-dark border border-rose-gold/20">
                  {service.category}
                </span>
              </div>

              {/* Details Section */}
              <div className="p-6 md:p-8 flex flex-col flex-grow items-start text-left">
                <h3 className="font-display text-xl md:text-2xl font-light text-charcoal mb-3 group-hover:text-rose-gold-dark transition-colors duration-300 pointer-events-none">
                  {service.title}
                </h3>
                <p className="font-sans text-xs md:text-sm text-soft-gray leading-relaxed mb-8 flex-grow pointer-events-none">
                  {service.description}
                </p>
                
                {/* WhatsApp Direct Book Link */}
                <a
                  href={`https://wa.me/919324653663?text=${encodeURIComponent(service.waMessage)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-auto w-full border border-rose-gold text-charcoal hover:bg-rose-gold hover:text-charcoal transition-all duration-300 py-3.5 px-4 font-sans text-xs tracking-[0.25em] font-semibold uppercase flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-current" />
                  Book via WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Dot Indicators (Paging navigation for both desktop & mobile) */}
        <div className="flex justify-center gap-2.5 mt-4">
          {featuredServices.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                if (scrollRef.current) {
                  const cardWidth = scrollRef.current.firstElementChild?.clientWidth || 300;
                  const gap = 24;
                  scrollRef.current.scrollTo({
                    left: idx * (cardWidth + gap),
                    behavior: "smooth"
                  });
                }
              }}
              className={`h-1.5 transition-all duration-300 rounded-full ${
                activeDot === idx ? "w-6 bg-rose-gold" : "w-1.5 bg-rose-gold/30"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
