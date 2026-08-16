import React from "react";
import ContactClient from "./ContactClient";
import { Metadata } from "next";
import { SITE_URL } from "@/utils/seo";

export const metadata: Metadata = {
  title: "Contact Us | Allure beauty and hair salon (only for ladies)",
  description:
    "Contact Allure beauty and hair salon (only for ladies) in Mumbai to enquire about services or request an appointment for your next beauty experience.",
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    title: "Contact Us | Allure beauty and hair salon (only for ladies)",
    description:
      "Contact Allure beauty and hair salon (only for ladies) in Mumbai to enquire about services or request an appointment for your next beauty experience.",
    url: `${SITE_URL}/contact`,
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
