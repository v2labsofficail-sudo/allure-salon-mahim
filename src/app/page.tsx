import React from "react";
import Hero from "../components/home/Hero";
import Introduction from "../components/home/Introduction";
import ServicesOverview from "../components/home/ServicesOverview";
import FeaturedServicesCarousel from "../components/home/FeaturedServicesCarousel";
import WhyAllure from "../components/home/WhyAllure";
import FeatureSection from "../components/home/FeatureSection";
import FinalCTA from "../components/home/FinalCTA";
import { Metadata } from "next";
import { SITE_URL } from "@/utils/seo";

export const metadata: Metadata = {
  title: "Allure beauty and hair salon (only for ladies) | Hair, Beauty, Makeup & Wellness",
  description:
    "Discover Allure beauty and hair salon (only for ladies) for premium hair, beauty, makeup and wellness services in Mumbai. Explore our services and book your next beauty appointment.",
  alternates: {
    canonical: `${SITE_URL}/`,
  },
  openGraph: {
    title: "Allure beauty and hair salon (only for ladies) | Hair, Beauty, Makeup & Wellness",
    description:
      "Discover Allure beauty and hair salon (only for ladies) for premium hair, beauty, makeup and wellness services in Mumbai. Explore our services and book your next beauty appointment.",
    url: `${SITE_URL}/`,
  },
};

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      <Hero />
      <Introduction />
      <ServicesOverview />
      <FeaturedServicesCarousel />
      <WhyAllure />
      <FeatureSection />
      <FinalCTA />
    </div>
  );
}

