"use client";

import React from "react";
import { Sparkles, Gift, Bell } from "lucide-react";
import Button from "../../components/ui/Button";

export default function OffersPage() {
  const whatsappNumber = "919324653663";
  const vipMessage = "Hi Allure Salon, I'd like to join your VIP WhatsApp list to receive updates on exclusive offers and packages.";
  const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(vipMessage)}`;

  return (
    <div className="flex flex-col w-full bg-cream py-12 md:py-20 min-h-[calc(100vh-80px)] justify-center">
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-6 mb-12 md:mb-16 text-center">
        <span className="font-sans text-xs md:text-sm font-semibold tracking-[0.35em] text-rose-gold uppercase block mb-4">
          ALLURE PROMOTIONS
        </span>
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-charcoal leading-tight mb-6">
          Exclusive Offers &amp; <span className="italic font-normal text-rose-gold-dark">Packages.</span>
        </h1>
        <p className="font-sans text-sm md:text-base text-soft-gray max-w-2xl mx-auto leading-relaxed tracking-wide">
          At Allure Salon Mahim, we periodically curate bespoke packages and seasonal promotions designed to elevate your hair, beauty, and wellness experience.
        </p>
        <div className="h-[1px] w-20 bg-rose-gold mx-auto mt-8" />
      </section>

      {/* Offers State Section */}
      <section className="max-w-3xl mx-auto px-6 w-full mb-12">
        <div className="bg-white border border-border-custom p-8 md:p-12 text-center flex flex-col items-center relative overflow-hidden">
          {/* Decorative luxury corners */}
          <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-rose-gold/20 translate-x-3 translate-y-3 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-rose-gold/20 -translate-x-3 -translate-y-3 pointer-events-none" />

          <Gift className="w-14 h-14 text-rose-gold mb-6 stroke-[1]" />
          
          <h2 className="font-display text-2xl md:text-3xl font-light text-charcoal mb-4 uppercase tracking-wider">
            Preparing Our Next Collection
          </h2>
          
          <p className="font-sans text-sm text-soft-gray leading-relaxed max-w-md mb-8">
            We currently do not have active offers running on the website. We are busy designing our upcoming seasonal packages to bring you the finest skincare, hair styling, and nail art selections.
          </p>

          {/* Call to action card inside */}
          <div className="w-full bg-cream/40 border border-border-custom/50 p-6 flex flex-col items-center gap-4">
            <div className="flex items-center gap-2 text-rose-gold-dark">
              <Bell className="w-4 h-4" />
              <span className="font-sans text-xs font-bold tracking-widest uppercase">
                VIP WhatsApp List
              </span>
            </div>
            <p className="font-sans text-xs text-soft-gray leading-relaxed max-w-sm">
              Be the first to know! Join our exclusive WhatsApp broadcast list to receive seasonal promotions, early-bird package details, and last-minute booking slots directly to your phone.
            </p>
            <Button
              href={waUrl}
              variant="solid"
              className="bg-rose-gold hover:bg-rose-gold-dark text-charcoal hover:text-white mt-2"
            >
              Subscribe on WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
