import React from "react";
import ServicesClient from "./ServicesClient";
import { Metadata } from "next";
import { SITE_URL } from "@/utils/seo";

export const metadata: Metadata = {
  title: "Salon Services in Mahim | Allure beauty and hair salon (only for ladies)",
  description:
    "Explore hair, beauty, makeup and wellness services at Allure beauty and hair salon (only for ladies) in Mumbai. Discover the right beauty service for your next appointment.",
  alternates: {
    canonical: `${SITE_URL}/services`,
  },
  openGraph: {
    title: "Salon Services in Mahim | Allure beauty and hair salon (only for ladies)",
    description:
      "Explore hair, beauty, makeup and wellness services at Allure beauty and hair salon (only for ladies) in Mumbai. Discover the right beauty service for your next appointment.",
    url: `${SITE_URL}/services`,
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
