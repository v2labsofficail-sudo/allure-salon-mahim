"use client";

import React, { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { salonServices } from "../../data/salonData";
import Button from "../../components/ui/Button";

function ServicesPageContent() {
  const searchParams = useSearchParams();
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  // Pre-select category based on URL query param (e.g. /services?category=beauty)
  useEffect(() => {
    const categoryParam = searchParams.get("category") || searchParams.get("service");
    if (categoryParam) {
      const index = salonServices.findIndex(
        (cat) => cat.id.toLowerCase() === categoryParam.toLowerCase()
      );
      if (index !== -1) {
        setActiveIndex(index);
      }
    }
  }, [searchParams]);

  const handleTabChange = (newIndex: number) => {
    setDirection(newIndex > activeIndex ? 1 : -1);
    setActiveIndex(newIndex);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? salonServices.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev === salonServices.length - 1 ? 0 : prev + 1));
  };

  const activeCategory = salonServices[activeIndex];

  // Slide transition animation config
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring" as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
      },
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
      transition: {
        x: { type: "spring" as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 },
      },
    }),
  };

  return (
    <div className="flex flex-col w-full bg-cream py-12 md:py-20 min-h-[calc(100vh-80px)] overflow-hidden">
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-6 mb-12 text-center select-none">
        <span className="font-sans text-xs md:text-sm font-semibold tracking-[0.35em] text-rose-gold uppercase block mb-4">
          OUR SERVICES
        </span>
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-charcoal leading-tight mb-6">
          Beauty, curated <span className="italic font-normal text-rose-gold-dark">around you.</span>
        </h1>
        <p className="font-sans text-sm md:text-base text-soft-gray max-w-2xl mx-auto leading-relaxed tracking-wide">
          At Allure Salon Mahim, we offer a comprehensive suite of bespoke hair, beauty, makeup, and
          wellness services. Explore our offerings below using the interactive category slider.
        </p>
        <div className="h-[1px] w-20 bg-rose-gold mx-auto mt-6" />
      </section>

      {/* Unique Carousel Tab Navigation */}
      <section className="max-w-4xl mx-auto w-full px-6 mb-12">
        <div className="flex items-center justify-between border-y border-border-custom py-4">
          {/* Arrow Left */}
          <button
            onClick={handlePrev}
            aria-label="Previous category"
            className="p-2 text-charcoal hover:text-rose-gold transition-colors duration-300 group"
          >
            <ArrowLeft className="w-5 h-5 stroke-[1.5] group-hover:-translate-x-1 transition-transform" />
          </button>

          {/* Categories Horizontal Tabs */}
          <nav className="flex items-center gap-4 md:gap-8 overflow-x-auto no-scrollbar scroll-smooth">
            {salonServices.map((cat, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleTabChange(idx)}
                  className={`font-sans text-xs md:text-sm tracking-[0.25em] uppercase font-bold py-2 px-3 transition-all duration-300 relative ${
                    isActive ? "text-rose-gold-dark scale-105" : "text-soft-gray hover:text-charcoal"
                  }`}
                >
                  {cat.title}
                  {isActive && (
                    <motion.span
                      layoutId="activeCategoryUnderline"
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-rose-gold-dark"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Arrow Right */}
          <button
            onClick={handleNext}
            aria-label="Next category"
            className="p-2 text-charcoal hover:text-rose-gold transition-colors duration-300 group"
          >
            <ArrowRight className="w-5 h-5 stroke-[1.5] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Sliding Content Canvas */}
      <section className="max-w-7xl mx-auto px-6 w-full relative min-h-[500px]">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={activeCategory.id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start w-full"
          >
            {/* Slide Left: Beautiful Category Image Stack (Line-by-Line) */}
            <div className="lg:col-span-5 flex flex-col gap-6 w-full lg:sticky lg:top-28">
              {activeCategory.images && activeCategory.images.length > 0 ? (
                <div className="flex flex-col gap-6">
                  {activeCategory.images.map((img, iIdx) => (
                    <div 
                      key={iIdx} 
                      className={`relative w-full h-[220px] md:h-[260px] ${
                        iIdx > 1 ? "hidden xl:block" : ""
                      }`}
                    >
                      <div className="absolute inset-0 border border-rose-gold/25 translate-x-2 translate-y-2 pointer-events-none" />
                      <div className="relative w-full h-full overflow-hidden">
                        <Image
                          src={img}
                          alt={`${activeCategory.title} premium styling service at Allure Salon Mahim - Image ${iIdx + 1}`}
                          fill
                          className="object-cover transition-transform duration-[2000ms] hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 40vw"
                          priority={iIdx === 0}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="relative w-full h-[300px] md:h-[450px]">
                  <div className="absolute inset-0 border border-rose-gold/25 translate-x-3 translate-y-3 pointer-events-none" />
                  <div className="relative w-full h-full overflow-hidden">
                    <Image
                      src={activeCategory.image}
                      alt={`${activeCategory.title} professional treatment at Allure Salon Mahim Mumbai`}
                      fill
                      className="object-cover transition-transform duration-[2000ms] hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 40vw"
                      priority
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Slide Right: Category Copy and Service Menu List */}
            <div className="lg:col-span-7 flex flex-col items-start w-full">
              <span className="font-sans text-[10px] md:text-xs font-semibold tracking-[0.25em] text-rose-gold uppercase mb-2">
                {activeCategory.subtitle}
              </span>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-light text-charcoal uppercase mb-4 tracking-wider">
                {activeCategory.title}
              </h2>
              <p 
                className="font-sans text-sm md:text-base text-soft-gray leading-relaxed mb-8 tracking-wide"
                dangerouslySetInnerHTML={{ __html: activeCategory.description }}
              />

              {/* Service Menu Items */}
              <div className="w-full flex flex-col gap-2 mb-10">
                {activeCategory.services.map((service, sIdx) => {
                  const messageText = `Hi Allure Salon, I would like to book the "${service.name}" service. Please let me know the pricing and availability.`;
                  const waUrl = `https://wa.me/919324653663?text=${encodeURIComponent(messageText)}`;
                  
                  return (
                    <a
                      key={sIdx}
                      href={waUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="group -mx-4 px-6 py-5 flex flex-col gap-2 transition-all duration-300 hover:bg-rose-gold border-b border-border-custom/50"
                    >
                      <div className="flex items-baseline justify-between w-full">
                        <h3 className="font-sans text-sm md:text-base font-semibold text-charcoal tracking-wide group-hover:text-white transition-colors duration-300 flex items-center gap-2">
                          {service.name}
                          {service.specialization && (
                            <span className="font-sans text-[8px] font-bold tracking-[0.15em] bg-rose-gold/20 text-rose-gold-dark px-2.5 py-0.5 rounded-full group-hover:bg-white group-hover:text-rose-gold-dark transition-all duration-300 shrink-0">
                              SPECIALTY
                            </span>
                          )}
                        </h3>
                        <span className="text-[9px] font-bold tracking-widest text-rose-gold uppercase opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-white transition-all duration-300 shrink-0 ml-auto">
                          &rarr; BOOK
                        </span>
                      </div>
                      <p className="font-sans text-xs md:text-sm text-soft-gray leading-relaxed max-w-2xl group-hover:text-white/80 transition-colors duration-300">
                        {service.description}
                      </p>
                    </a>
                  );
                })}
              </div>

              {/* Book Category Button */}
              <Button
                href={`https://wa.me/919324653663?text=${encodeURIComponent(`Hi Allure Salon, I would like to inquire about booking your ${activeCategory.title} services. Please let me know the pricing and availability.`)}`}
                variant="solid"
                className="bg-rose-gold hover:bg-rose-gold-dark text-charcoal hover:text-white"
              >
                BOOK THIS SERVICE
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>
    </div>
  );
}

export default function ServicesClient() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-[500px] bg-cream font-sans text-soft-gray uppercase tracking-widest animate-pulse">
          Loading services catalog...
        </div>
      }
    >
      <ServicesPageContent />
    </Suspense>
  );
}
