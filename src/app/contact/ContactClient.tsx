"use client";

import React from "react";
import { Mail, Phone, MapPin, Clock, ShieldAlert } from "lucide-react";
import Button from "../../components/ui/Button";

export default function ContactClient() {
  const whatsappNumber = "919324653663";
  const defaultMessage = "Hi Allure Salon, I would like to book an appointment. Please let me know the available slots.";
  const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div className="flex flex-col w-full bg-cream py-12 md:py-20">
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-6 mb-16 md:mb-24 text-center">
        <span className="font-sans text-xs md:text-sm font-semibold tracking-[0.35em] text-rose-gold uppercase block mb-4">
          CONTACT ALLURE
        </span>
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-charcoal leading-tight mb-6">
          Let&rsquo;s create your <span className="italic font-normal text-rose-gold-dark">Allure moment.</span>
        </h1>
        <p className="font-sans text-sm md:text-base text-soft-gray max-w-2xl mx-auto leading-relaxed tracking-wide">
          Ready to experience premium hair, beauty, and skincare? We operate exclusively for ladies. Get in touch with us directly via WhatsApp to book your slot, or visit our salon in Mahim.
        </p>
        <div className="h-[1px] w-20 bg-rose-gold mx-auto mt-8" />
      </section>

      {/* Main Content Layout */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
        {/* Left Side: Contact Information Cards */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          <div className="border border-border-custom bg-white p-8">
            <h2 className="font-display text-2xl font-light text-charcoal mb-8 border-b border-border-custom/50 pb-4 uppercase tracking-wider">
              Salon Details
            </h2>

            <div className="flex flex-col gap-6">
              {/* Ladies Only Banner */}
              <div className="flex gap-4 items-center bg-rose-gold/5 p-4 border border-rose-gold/20">
                <ShieldAlert className="w-5 h-5 text-rose-gold-dark shrink-0" />
                <div>
                  <h3 className="font-sans text-xs font-bold tracking-wider uppercase text-rose-gold-dark">
                    Policy
                  </h3>
                  <p className="font-sans text-xs text-soft-gray font-medium tracking-wide mt-0.5">
                    EXCLUSIVELY FOR LADIES
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex gap-4">
                <MapPin className="w-5 h-5 text-rose-gold stroke-[1.5] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-sans text-xs font-bold tracking-wider uppercase text-charcoal mb-1">
                    Location
                  </h3>
                  <p className="font-sans text-sm text-soft-gray leading-relaxed">
                    Shop No.3, Ground Floor, Sea Breez Society,<br />
                    Behind Mahim Church, Mori Road,<br />
                    Mahim (W), Mumbai - 400 016
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <Phone className="w-5 h-5 text-rose-gold stroke-[1.5] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-sans text-xs font-bold tracking-wider uppercase text-charcoal mb-1">
                    Phone & WhatsApp
                  </h3>
                  <p className="font-sans text-sm text-soft-gray leading-relaxed">
                    <a href="tel:+919324653663" className="hover:text-rose-gold transition-colors duration-300 font-medium">
                      +91 93246 53663
                    </a>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <Mail className="w-5 h-5 text-rose-gold stroke-[1.5] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-sans text-xs font-bold tracking-wider uppercase text-charcoal mb-1">
                    Email
                  </h3>
                  <p className="font-sans text-sm text-soft-gray leading-relaxed font-light">
                    hello@alluresalon.in
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4">
                <Clock className="w-5 h-5 text-rose-gold stroke-[1.5] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-sans text-xs font-bold tracking-wider uppercase text-charcoal mb-1">
                    Hours
                  </h3>
                  <p className="font-sans text-sm text-soft-gray leading-relaxed">
                    Tuesday &ndash; Sunday <br />
                    10:30 AM &ndash; 9:00 PM <br />
                    <span className="text-rose-gold-dark font-medium">Monday Closed</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: WhatsApp Booking & Google Map */}
        <div className="lg:col-span-7 flex flex-col gap-8 w-full">
          {/* Booking Card */}
          <div className="bg-white border border-border-custom p-8 md:p-10 flex flex-col items-center justify-center text-center">
            <ShieldAlert className="w-12 h-12 text-rose-gold mb-6 stroke-[1]" />
            <h2 className="font-display text-2xl md:text-3xl font-light text-charcoal mb-4 uppercase tracking-wider">
              Book on WhatsApp
            </h2>
            <p className="font-sans text-sm text-soft-gray max-w-md leading-relaxed mb-8">
              We have simplified our booking experience. We do not use forms anymore. Click below to chat directly with us on WhatsApp to discuss your required services and confirm your appointment.
            </p>
            <Button
              href={waUrl}
              variant="solid"
              className="w-full sm:w-auto bg-rose-gold hover:bg-rose-gold-dark text-charcoal hover:text-white"
            >
              Start WhatsApp Booking
            </Button>
          </div>

          {/* Interactive Map Embed */}
          <div className="border border-border-custom bg-white p-8">
            <h2 className="font-display text-xl font-light text-charcoal mb-6 uppercase tracking-wider">
              Find Us on Map
            </h2>
            <div className="w-full h-[350px] relative overflow-hidden border border-border-custom/50">
              <iframe
                title="Allure Salon Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.8213693245465!2d72.84136921434316!3d19.027538587116744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ced2ec7ee6d3%3A0x7d01869e5d4de75d!2sSt.%20Michael&#39;s%20Church!5e0!3m2!1sen!2sin!4v1723630000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
