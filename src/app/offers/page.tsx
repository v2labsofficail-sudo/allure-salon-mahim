import React from "react";
import OffersClient from "./OffersClient";
import { Metadata } from "next";
import { SITE_URL } from "@/utils/seo";

export const metadata: Metadata = {
  title: "Special Offers & Packages | Allure beauty and hair salon (only for ladies)",
  description:
    "Discover active promotions, referral discounts, and seasonal beauty packages at Allure beauty and hair salon (only for ladies). Book your beauty session today.",
  alternates: {
    canonical: `${SITE_URL}/offers`,
  },
  openGraph: {
    title: "Special Offers & Packages | Allure beauty and hair salon (only for ladies)",
    description:
      "Discover active promotions, referral discounts, and seasonal beauty packages at Allure beauty and hair salon (only for ladies). Book your beauty session today.",
    url: `${SITE_URL}/offers`,
  },
};

export default function OffersPage() {
  return <OffersClient />;
}
