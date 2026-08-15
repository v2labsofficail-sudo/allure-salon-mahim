"use client";

import React from "react";
import { Sparkles, Bell, Users } from "lucide-react";
import Button from "../../components/ui/Button";

export default function OffersClient() {
  const whatsappNumber = "919324653663";
  const firstVisitMessage = "Hi Allure Salon, I'd like to book my first appointment and claim the 10% First Visit discount! Pls let me know the available slots.";
  const referralMessage = "Hi Allure Salon, I'd like to refer my friend for an appointment so we both can receive the 10% referral discount! My name is [Your Name] and my friend's name is [Friend's Name].";
  const vipMessage = "Hi Allure Salon, I'd like to join your VIP WhatsApp list to receive updates on exclusive offers and packages.";

  const firstVisitUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(firstVisitMessage)}`;
  const referralUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(referralMessage)}`;
  const vipUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(vipMessage)}`;

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
          At Allure Salon Mahim, we delight in offering bespoke packages and active promotions designed to elevate your hair, beauty, and wellness experience.
        </p>
        <div className="h-[1px] w-20 bg-rose-gold mx-auto mt-8" />
      </section>

      {/* Offers Grid */}
      <section className="max-w-6xl mx-auto px-6 w-full mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Offer 1: First Visit */}
          <div className="bg-white border border-border-custom p-8 md:p-10 flex flex-col items-start relative overflow-hidden h-full shadow-xs hover:shadow-md transition-shadow duration-300">
            {/* Decorative luxury corners */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-rose-gold/25 translate-x-3 translate-y-3 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-rose-gold/25 -translate-x-3 -translate-y-3 pointer-events-none" />

            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center border border-border-custom">
                <Sparkles className="w-5 h-5 text-rose-gold stroke-[1.5]" />
              </div>
              <span className="font-sans text-xs font-bold tracking-widest text-rose-gold uppercase">
                Welcome Offer
              </span>
            </div>

            <h2 className="font-display text-3xl font-light text-charcoal mb-2 leading-tight uppercase tracking-wider">
              First Visit Special
            </h2>
            <div className="font-display text-5xl font-light text-rose-gold-dark mb-6">
              10% OFF
            </div>

            <p className="font-sans text-sm text-soft-gray leading-relaxed mb-6 flex-grow">
              Experience the unmatched care and luxury of Allure Salon Mahim. We welcome all new clients with a special discount on their very first visit across any of our premium services.
            </p>

            <div className="w-full border-t border-border-custom/50 pt-6 mb-8">
              <h3 className="font-sans text-xs font-bold tracking-wider text-charcoal uppercase mb-3">
                Offer Details:
              </h3>
              <ul className="space-y-2 text-xs text-soft-gray font-sans">
                <li className="flex items-start gap-2">
                  <span className="text-rose-gold">&bull;</span>
                  <span>Valid only for new clients on their first visit.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-gold">&bull;</span>
                  <span>Applicable to all hair, skin, makeup, and nail services.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-gold">&bull;</span>
                  <span>Exclusively for ladies at our Mahim West salon.</span>
                </li>
              </ul>
            </div>

            <Button
              href={firstVisitUrl}
              variant="solid"
              className="w-full bg-rose-gold hover:bg-rose-gold-dark text-charcoal hover:text-white border-rose-gold hover:border-rose-gold-dark"
            >
              Book First Visit (10% Off)
            </Button>
          </div>

          {/* Offer 2: Referral */}
          <div className="bg-white border border-border-custom p-8 md:p-10 flex flex-col items-start relative overflow-hidden h-full shadow-xs hover:shadow-md transition-shadow duration-300">
            {/* Decorative luxury corners */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-rose-gold/25 translate-x-3 translate-y-3 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-rose-gold/25 -translate-x-3 -translate-y-3 pointer-events-none" />

            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center border border-border-custom">
                <Users className="w-5 h-5 text-rose-gold stroke-[1.5]" />
              </div>
              <span className="font-sans text-xs font-bold tracking-widest text-rose-gold uppercase">
                Refer &amp; Share
              </span>
            </div>

            <h2 className="font-display text-3xl font-light text-charcoal mb-2 leading-tight uppercase tracking-wider">
              Refer a Friend
            </h2>
            <div className="font-display text-5xl font-light text-rose-gold-dark mb-6">
              10% OFF EACH
            </div>

            <p className="font-sans text-sm text-soft-gray leading-relaxed mb-6 flex-grow">
              Share the Allure experience with your friends! When you refer a friend to our salon, both you and your friend will receive a special 10% discount on your next appointment.
            </p>

            <div className="w-full border-t border-border-custom/50 pt-6 mb-8">
              <h3 className="font-sans text-xs font-bold tracking-wider text-charcoal uppercase mb-3">
                Offer Details:
              </h3>
              <ul className="space-y-2 text-xs text-soft-gray font-sans">
                <li className="flex items-start gap-2">
                  <span className="text-rose-gold">&bull;</span>
                  <span>Friend gets 10% off on their first visit.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-gold">&bull;</span>
                  <span>You receive 10% off after their successful booking.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-gold">&bull;</span>
                  <span>No limits—refer as many friends as you like!</span>
                </li>
              </ul>
            </div>

            <Button
              href={referralUrl}
              variant="solid"
              className="w-full bg-rose-gold hover:bg-rose-gold-dark text-charcoal hover:text-white border-rose-gold hover:border-rose-gold-dark"
            >
              Refer a Friend (10% Off)
            </Button>
          </div>
        </div>
      </section>

      {/* VIP Broadcast List */}
      <section className="max-w-6xl mx-auto px-6 w-full mb-12">
        <div className="bg-white border border-border-custom p-8 md:p-12 text-center flex flex-col items-center relative overflow-hidden shadow-xs">
          {/* Decorative luxury corners */}
          <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-rose-gold/20 translate-x-3 translate-y-3 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-rose-gold/20 -translate-x-3 -translate-y-3 pointer-events-none" />

          <Bell className="w-12 h-12 text-rose-gold mb-6 stroke-[1]" />
          
          <h2 className="font-display text-2xl md:text-3xl font-light text-charcoal mb-4 uppercase tracking-wider">
            Join Our VIP Broadcast List
          </h2>
          
          <p className="font-sans text-sm text-soft-gray leading-relaxed max-w-xl mb-8">
            Be the first to hear about our seasonal packages, exclusive weekend flash sales, and last-minute booking openings sent straight to your phone.
          </p>

          <Button
            href={vipUrl}
            variant="solid"
            className="bg-rose-gold hover:bg-rose-gold-dark text-charcoal hover:text-white border-rose-gold hover:border-rose-gold-dark"
          >
            Subscribe on WhatsApp
          </Button>
        </div>
      </section>
    </div>
  );
}
