import React from "react";
import Hero from "../components/home/Hero";
import Introduction from "../components/home/Introduction";
import ServicesOverview from "../components/home/ServicesOverview";
import FeaturedServicesCarousel from "../components/home/FeaturedServicesCarousel";
import WhyAllure from "../components/home/WhyAllure";
import FeatureSection from "../components/home/FeatureSection";
import FinalCTA from "../components/home/FinalCTA";

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
