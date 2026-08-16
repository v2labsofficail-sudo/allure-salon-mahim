"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

interface FeaturedService {
  title: string;
  category: string;
  description: string;
  image: string;
  waMessage: string;
  serviceSlug?: string;
}

export default function FeaturedServicesCarousel() {
  const featuredServices: FeaturedService[] = [
    {
      title: "Hair Botox & Keratin",
      category: "HAIR TREATMENT",
      description: "Advanced restorative treatments that eliminate frizz, rebuild structural strength, and deliver mirror-like shine.",
      image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?q=80&w=800&auto=format&fit=crop",
      waMessage: "Hi Allure Salon, I'd like to book a consultation for the Hair Botox & Keratin Treatment.",
      serviceSlug: "hair-botox"
    },
    {
      title: "Luxury Facials (O3 & Serenite)",
      category: "SKINCARE RITUALS",
      description: "Deeply nourishing facial treatments tailored to restore moisture, treat skin concerns, and reveal a radiant glow.",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop",
      waMessage: "Hi Allure Salon, I'd like to book a Luxury Facial (O3 / Serenite) session.",
      serviceSlug: "facial"
    },
    {
      title: "Bridal Makeup & Hairstyles",
      category: "BRIDAL & EDITORIAL",
      description: "Exquisite, long-lasting bridal makeovers and customized hairstyles crafted to make your wedding day unforgettable.",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop",
      waMessage: "Hi Allure Salon, I'd like to book or inquire about your Bridal Makeup and Hairstyling packages.",
      serviceSlug: "bridal-makeup"
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

  const [currentIndex, setCurrentIndex] = useState(0);

  // We set a fixed responsive card width plus gap (300px card + 24px gap = 324px step width)
  const stepWidth = 324;

  const handleDragEnd = (event: any, info: any) => {
    const swipeThreshold = 50;
    const swipeOffset = info.offset.x;

    if (swipeOffset < -swipeThreshold && currentIndex < featuredServices.length - 1) {
      // Swiped left -> show next card
      setCurrentIndex((prev) => prev + 1);
    } else if (swipeOffset > swipeThreshold && currentIndex > 0) {
      // Swiped right -> show previous card
      setCurrentIndex((prev) => prev - 1);
    }
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

        {/* Outer view mask */}
        <div className="relative w-full overflow-hidden -mx-6 px-6 lg:mx-0 lg:px-0">
          {/* Framer Motion Draggable Row */}
          <motion.div
            drag="x"
            dragElastic={0.2}
            dragConstraints={{
              left: -((featuredServices.length - 1) * stepWidth),
              right: 0
            }}
            onDragEnd={handleDragEnd}
            animate={{ x: -(currentIndex * stepWidth) }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="flex flex-row flex-nowrap gap-6 cursor-grab active:cursor-grabbing w-fit"
          >
            {featuredServices.map((service, idx) => (
              <div
                key={idx}
                className="bg-white border border-border-custom group flex flex-col h-auto w-[300px] shrink-0 relative"
              >
                {/* Image Section */}
                <div className="relative w-full h-[240px] md:h-[280px] overflow-hidden pointer-events-none">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    sizes="300px"
                  />
                  <div className="absolute inset-0 bg-charcoal/10" />
                  <span className="absolute top-4 left-4 bg-white/95 px-3 py-1 font-sans text-[10px] font-bold tracking-widest uppercase text-rose-gold-dark border border-rose-gold/20">
                    {service.category}
                  </span>
                </div>

                {/* Details Section */}
                <div className="p-6 md:p-8 flex flex-col flex-grow items-start text-left">
                  {service.serviceSlug ? (
                    <Link href={`/services/${service.serviceSlug}`} className="group/title">
                      <h3 className="font-display text-xl md:text-2xl font-light text-charcoal mb-3 group-hover/title:text-rose-gold-dark transition-colors duration-300">
                        {service.title}
                      </h3>
                    </Link>
                  ) : (
                    <Link href="/services" className="group/title">
                      <h3 className="font-display text-xl md:text-2xl font-light text-charcoal mb-3 group-hover/title:text-rose-gold-dark transition-colors duration-300">
                        {service.title}
                      </h3>
                    </Link>
                  )}
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
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.456h.008c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Book via WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Carousel Dot Indicators */}
        <div className="flex justify-center gap-2.5 mt-8">
          {featuredServices.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 transition-all duration-300 rounded-full ${
                currentIndex === idx ? "w-6 bg-rose-gold" : "w-1.5 bg-rose-gold/30"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
