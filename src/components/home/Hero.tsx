"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center overflow-hidden py-12 md:py-20">
      {/* Decorative background lines */}
      <div className="absolute top-1/4 left-10 w-40 h-[1px] bg-rose-gold/25 hidden lg:block" />
      <div className="absolute bottom-1/4 right-10 w-40 h-[1px] bg-rose-gold/25 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Text Content Column */}
        <div className="lg:col-span-6 z-10 flex flex-col items-start text-left">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-xs md:text-sm font-semibold tracking-[0.35em] text-rose-gold uppercase mb-6"
          >
            WELCOME TO ALLURE
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-charcoal leading-[1.15] mb-8"
          >
            Where Beauty <br />
            Becomes Your <br />
            <span className="italic text-rose-gold-dark font-normal">Signature.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-sm md:text-base text-soft-gray leading-relaxed max-w-lg mb-10 tracking-wide"
          >
            Experience refined hair, beauty, makeup and wellness services designed to make
            you feel effortlessly confident. Delivered with precision and tailored around you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
          >
            <Button href="/contact" variant="solid">
              BOOK AN APPOINTMENT
            </Button>
            <Button href="/services" variant="outline">
              EXPLORE SERVICES
            </Button>
          </motion.div>
        </div>

        {/* Asymmetrical Image Column */}
        <div className="lg:col-span-6 relative flex justify-center items-center w-full min-h-[350px] md:min-h-[500px]">
          {/* Framed Background Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 border border-rose-gold/25 translate-x-4 translate-y-4 lg:translate-x-6 lg:translate-y-6 pointer-events-none"
          />

          {/* Main Visual */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full h-[350px] md:h-[500px] overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=1600&auto=format&fit=crop"
              alt="Luxury hair styling and beauty treatments at Allure Salon Mahim Mumbai"
              fill
              priority
              className="object-cover transition-transform duration-1000 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
