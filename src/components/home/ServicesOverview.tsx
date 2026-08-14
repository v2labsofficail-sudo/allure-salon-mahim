import React from "react";
import { salonServices } from "../../data/salonData";
import SectionHeading from "../ui/SectionHeading";
import ServiceCard from "../ui/ServiceCard";

export default function ServicesOverview() {
  // We take the first 4 service categories from our salonData
  const previewCategories = salonServices.slice(0, 4);

  // Map out customized service list previews for each category
  const getPreviewList = (id: string) => {
    switch (id) {
      case "hair":
        return ["Blowdry", "Hairstyling", "Botox Treatment", "Keratin Treatment"];
      case "beauty":
        return ["Express Facial", "O3+ Facial", "Manicure & Pedicure", "Nail Art"];
      case "makeup":
        return ["Bridal Makeup", "Engagement Makeup", "Party Makeup"];
      case "wellness":
        return ["Spa Treatments"];
      default:
        return [];
    }
  };

  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <SectionHeading
          eyebrow="OUR SERVICES"
          heading="Signature beauty"
          italicWord="services"
          center
        />

        {/* 4 Premium Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {previewCategories.map((category) => (
            <ServiceCard
              key={category.id}
              id={category.id}
              title={category.title}
              description={category.description}
              image={category.image}
              previewList={getPreviewList(category.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
