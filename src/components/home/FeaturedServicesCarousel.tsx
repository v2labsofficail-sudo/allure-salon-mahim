"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  // Responsive adjustments for number of cards visible at once
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsToShow(1);
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2);
      } else {
        setCardsToShow(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = featuredServices.length - cardsToShow;

  const nextSlide = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      // Loop back to start
      setCurrentIndex(0);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    } else {
      // Loop to end
      setCurrentIndex(maxIndex);
    }
  };

  return (
    <section className="py-20 md:py-28 bg-cream/45 border-b border-border-custom/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div className="text-left">
            <span className="font-sans text-xs md:text-sm font-semibold tracking-[0.3em] text-rose-gold uppercase block mb-4">
              SIGNATURE TREATMENTS
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-charcoal leading-tight">
              Our Featured <span className="italic font-normal text-rose-gold-dark">Specials.</span>
            </h2>
          </div>
          {/* Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              className="p-3 border border-border-custom text-charcoal hover:bg-rose-gold hover:text-charcoal hover:border-rose-gold transition-all duration-300 rounded-none bg-white"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 stroke-[1.5]" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 border border-border-custom text-charcoal hover:bg-rose-gold hover:text-charcoal hover:border-rose-gold transition-all duration-300 rounded-none bg-white"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 stroke-[1.5]" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-6 lg:gap-8"
            animate={{ x: `-${currentIndex * (100 / cardsToShow + (cardsToShow === 3 ? 1.5 : cardsToShow === 2 ? 2 : 0))}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            style={{ width: `${(featuredServices.length / cardsToShow) * 100}%` }}
          >
            {featuredServices.map((service, idx) => (
              <div
                key={idx}
                className="bg-white border border-border-custom group flex flex-col h-full relative"
                style={{ width: `${100 / featuredServices.length}%` }}
              >
                {/* Image Section */}
                <div className="relative w-full h-[240px] md:h-[280px] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-charcoal/10" />
                  <span className="absolute top-4 left-4 bg-white/95 px-3 py-1 font-sans text-[10px] font-bold tracking-widest uppercase text-rose-gold-dark border border-rose-gold/20">
                    {service.category}
                  </span>
                </div>

                {/* Details Section */}
                <div className="p-6 md:p-8 flex flex-col flex-grow items-start text-left">
                  <h3 className="font-display text-xl md:text-2xl font-light text-charcoal mb-3 group-hover:text-rose-gold-dark transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-soft-gray leading-relaxed mb-8 flex-grow">
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
