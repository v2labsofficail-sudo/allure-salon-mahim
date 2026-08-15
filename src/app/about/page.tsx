import React from "react";
import Image from "next/image";
import { salonValues } from "../../data/salonData";
import Gallery from "../../components/ui/Gallery";
import { SITE_URL } from "@/utils/seo";

export const metadata = {
  title: "About Allure Salon Mahim | Premium Beauty Salon in Mumbai",
  description:
    "Learn about Allure Salon Mahim and our approach to personalised hair, beauty, makeup and wellness experiences in Mumbai.",
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
  openGraph: {
    title: "About Allure Salon Mahim | Premium Beauty Salon in Mumbai",
    description:
      "Learn about Allure Salon Mahim and our approach to personalised hair, beauty, makeup and wellness experiences in Mumbai.",
    url: `${SITE_URL}/about`,
  },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full bg-cream py-12 md:py-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 mb-16 md:mb-24 text-center">
        <span className="font-sans text-xs md:text-sm font-semibold tracking-[0.35em] text-rose-gold uppercase block mb-4">
          ABOUT ALLURE
        </span>
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-charcoal leading-tight max-w-4xl mx-auto mb-10">
          More than a salon. <br className="hidden sm:inline" />A space to feel{" "}
          <span className="italic font-normal text-rose-gold-dark">beautifully yourself.</span>
        </h1>
        <div className="relative w-full h-[350px] md:h-[500px] mt-6">
          <div className="absolute inset-0 border border-rose-gold/25 translate-x-3 translate-y-3 pointer-events-none" />
          <Image
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1200&auto=format&fit=crop"
            alt="Allure Salon Mahim premium beauty salon interior in Mumbai"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
      </section>

      {/* Our Story */}
      <section className="max-w-4xl mx-auto px-6 mb-20 md:mb-28 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-light text-charcoal mb-8 uppercase tracking-wider">
          Our Story
        </h2>
        <div className="flex flex-col gap-6 font-sans text-sm md:text-base text-soft-gray leading-relaxed tracking-wide text-justify md:text-center">
          <p>
            Allure Salon Mahim is founded by partners <strong>Rajeshree Mhetra</strong> and <strong>Sneha Gamare</strong>, who bring over <strong>15 years of professional experience</strong> in the beauty industry. Having mastered the arts of hair styling, advanced skincare, luxury nail design, and editorial makeup, they envisioned a sanctuary exclusively for ladies where beauty is not standardized, but personalized around you.
          </p>
          <p>
            Our mission is to deliver custom beauty solutions that feel like a natural extension of who you are. We take pride in our commitment to quality, utilising premium formulations and modern techniques in a tranquil environment. Rajeshree and Sneha lead a team of handpicked beauty specialists who bring expert knowledge, professional care, and meticulous attention to detail to every single service.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-charcoal text-cream py-20 md:py-28 my-12 relative text-center border-y border-rose-gold/25">
        <div className="max-w-4xl mx-auto px-6">
          <span className="font-sans text-xs font-semibold tracking-[0.4em] text-rose-gold uppercase block mb-8">
            OUR PHILOSOPHY
          </span>
          <p className="font-display text-2xl md:text-4xl lg:text-5xl font-light leading-snug tracking-wide text-cream max-w-3xl mx-auto select-none">
            &ldquo;Beauty is not about changing who you are. <br className="hidden md:inline" />
            It&rsquo;s about bringing out what already makes you <span className="italic font-normal text-rose-gold">unique.</span>&rdquo;
          </p>
        </div>
      </section>

      {/* Professional Classes Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 border-t border-border-custom/50">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <span className="font-sans text-xs md:text-sm font-semibold tracking-[0.3em] text-rose-gold uppercase mb-4">
              ALLURE ACADEMY
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-light text-charcoal leading-tight mb-6">
              Professional training <br />
              <span className="italic font-normal text-rose-gold-dark">by Rajeshree & Sneha.</span>
            </h2>
            <p className="font-sans text-sm md:text-base text-soft-gray leading-relaxed mb-6 tracking-wide">
              Empowering the next generation of beauty experts. Rajeshree Mhetra and Sneha Gamare conduct comprehensive, hands-on professional beauty, hair styling, nail art, and makeup classes.
            </p>
            <p className="font-sans text-sm md:text-base text-soft-gray leading-relaxed mb-8 tracking-wide">
              With 15 years of industry-leading expertise, their structured curriculum covers basic to advanced salon techniques, client etiquette, and industry trends to build technical mastery and business confidence.
            </p>
            <a
              href={`https://wa.me/919324653663?text=${encodeURIComponent("Hi Allure Academy, I'd like to inquire about your professional training classes.")}`}
              target="_blank"
              rel="noreferrer"
              className="font-sans text-xs tracking-[0.2em] uppercase font-medium bg-rose-gold text-charcoal hover:bg-rose-gold-dark hover:text-white transition-all py-4 px-8 border border-rose-gold hover:border-rose-gold-dark inline-block"
            >
              Inquire About Classes
            </a>
          </div>

          {/* Visual Area */}
          <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px]">
            <div className="absolute inset-0 border border-rose-gold/25 translate-x-3 translate-y-3 pointer-events-none" />
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?q=80&w=800&auto=format&fit=crop"
                alt="Professional beauty training and hair styling academy classes at Allure Salon Mahim"
                fill
                className="object-cover transition-transform duration-1000 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 35vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-28">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-sans text-xs md:text-sm font-semibold tracking-[0.3em] text-rose-gold uppercase block mb-4">
            OUR CORE VALUES
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-light text-charcoal">
            Refinement in <span className="italic font-normal text-rose-gold-dark">every detail.</span>
          </h2>
          <div className="h-[1px] w-20 bg-rose-gold mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {salonValues.map((value, idx) => (
            <div
              key={idx}
              className="flex flex-col items-start border-t border-rose-gold pt-6 hover:translate-y-[-4px] transition-transform duration-500"
            >
              <span className="font-sans text-[10px] text-rose-gold font-bold tracking-[0.2em] mb-4">
                0{idx + 1}
              </span>
              <h3 className="font-sans text-xs md:text-sm font-bold tracking-[0.2em] text-charcoal uppercase mb-3">
                {value.title}
              </h3>
              <p className="font-sans text-xs md:text-sm text-soft-gray leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Salon Gallery */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-20 border-t border-border-custom/50">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-sans text-xs md:text-sm font-semibold tracking-[0.3em] text-rose-gold uppercase block mb-4">
            VISUAL PORTFOLIO
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-light text-charcoal">
            Salon <span className="italic font-normal text-rose-gold-dark">Gallery.</span>
          </h2>
          <div className="h-[1px] w-20 bg-rose-gold mx-auto mt-6" />
        </div>

        {/* Masonry Gallery Component */}
        <Gallery />
      </section>
    </div>
  );
}
