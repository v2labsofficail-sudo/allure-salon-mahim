"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { salonGallery } from "../../data/salonData";

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleOpen = (index: number) => {
    setSelectedIndex(index);
  };

  const handleClose = () => {
    setSelectedIndex(null);
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev === 0 ? salonGallery.length - 1 : prev! - 1));
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev === salonGallery.length - 1 ? 0 : prev! + 1));
  };

  const getAspectClass = (id: string) => {
    switch (id) {
      case "g1":
        return "md:col-span-2 md:row-span-1";
      case "g2":
        return "md:col-span-1 md:row-span-2";
      case "g3":
        return "md:col-span-1 md:row-span-1";
      case "g4":
        return "md:col-span-1 md:row-span-1";
      case "g5":
        return "md:col-span-2 md:row-span-1";
      case "g6":
        return "md:col-span-1 md:row-span-1";
      default:
        return "md:col-span-1 md:row-span-1";
    }
  };

  return (
    <>
      {/* Grid Portfolio */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
        {salonGallery.map((img, idx) => (
          <div
            key={img.id}
            onClick={() => handleOpen(idx)}
            className={`relative overflow-hidden group cursor-pointer border border-border-custom hover:border-rose-gold/40 transition-luxury duration-500 ${getAspectClass(img.id)}`}
          >
            {/* Dark blur/overlay & title on hover */}
            <div className="absolute inset-0 bg-charcoal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-end p-4">
              <span className="font-sans text-[10px] tracking-[0.2em] text-white uppercase font-medium bg-charcoal/60 px-3 py-1.5 backdrop-blur-sm">
                {img.category}
              </span>
            </div>
            
            {/* Image */}
            <Image
              src={img.url}
              alt={img.category}
              fill
              className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        ))}
      </div>

      {/* Lightbox / Popup Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleClose}
            className="fixed inset-0 z-50 bg-charcoal/95 backdrop-blur-md flex flex-col items-center justify-between p-4 md:p-6"
          >
            {/* Header: counter and close button */}
            <div className="w-full max-w-5xl flex items-center justify-between z-10 pt-2">
              <span className="font-sans text-xs tracking-[0.25em] text-rose-gold-light uppercase font-medium">
                {selectedIndex + 1} / {salonGallery.length}
              </span>
              <button
                onClick={handleClose}
                aria-label="Close gallery"
                className="p-2 rounded-full bg-white/5 text-cream hover:bg-white/10 hover:text-rose-gold transition-all duration-300"
              >
                <X className="w-6 h-6 stroke-[1.5]" />
              </button>
            </div>

            {/* Middle Image & Nav controls */}
            <div className="relative w-full max-w-5xl flex-grow flex items-center justify-between gap-4 py-4">
              {/* Prev Trigger */}
              <button
                onClick={handlePrev}
                aria-label="Previous image"
                className="p-3 rounded-full bg-white/5 text-cream hover:bg-white/10 hover:text-rose-gold transition-all duration-300 shrink-0 z-10 hidden sm:inline-block"
              >
                <ChevronLeft className="w-6 h-6 stroke-[1.5]" />
              </button>

              {/* High-res Active Slide */}
              <div 
                className="relative w-full h-full max-h-[60vh] md:max-h-[70vh] flex-grow select-none"
                onClick={(e) => e.stopPropagation()} // Prevent clicking image from closing modal
              >
                <motion.div
                  key={selectedIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={salonGallery[selectedIndex].url}
                    alt={salonGallery[selectedIndex].category}
                    fill
                    className="object-contain"
                    sizes="100vw"
                    priority
                  />
                </motion.div>
              </div>

              {/* Next Trigger */}
              <button
                onClick={handleNext}
                aria-label="Next image"
                className="p-3 rounded-full bg-white/5 text-cream hover:bg-white/10 hover:text-rose-gold transition-all duration-300 shrink-0 z-10 hidden sm:inline-block"
              >
                <ChevronRight className="w-6 h-6 stroke-[1.5]" />
              </button>
            </div>

            {/* Footer description & mobile nav indicators */}
            <div className="w-full max-w-5xl flex flex-col items-center gap-4 text-center z-10 pb-4 select-none">
              <span className="font-display text-lg md:text-xl text-cream tracking-wider">
                {salonGallery[selectedIndex].category}
              </span>
              
              {/* Mobile Arrow indicators (visible on mobile only) */}
              <div className="flex items-center gap-6 sm:hidden mt-2">
                <button
                  onClick={handlePrev}
                  aria-label="Previous image"
                  className="p-2 rounded-full bg-white/5 text-cream hover:text-rose-gold transition-all"
                >
                  <ChevronLeft className="w-5 h-5 stroke-[1.5]" />
                </button>
                <span className="font-sans text-[10px] tracking-[0.2em] text-soft-gray uppercase">
                  SWIPE / CLICK
                </span>
                <button
                  onClick={handleNext}
                  aria-label="Next image"
                  className="p-2 rounded-full bg-white/5 text-cream hover:text-rose-gold transition-all"
                >
                  <ChevronRight className="w-5 h-5 stroke-[1.5]" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
