import type { Metadata } from "next";
import { Bodoni_Moda, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import WhatsAppButton from "../components/ui/WhatsAppButton";

const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni-moda",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Allure Salon Mahim | Hair, Beauty, Makeup & Wellness",
  description:
    "Experience refined, premium beauty and wellness services in Mahim, Mumbai. Bespoke hair cutting, color, advanced skincare, bridal makeup, and calming self-care rituals.",
  openGraph: {
    title: "Allure Salon Mahim | Hair, Beauty, Makeup & Wellness",
    description:
      "Experience refined, premium beauty and wellness services in Mahim, Mumbai. Bespoke hair cutting, color, advanced skincare, bridal makeup, and calming self-care rituals.",
    url: "https://alluresalonmahim.com",
    siteName: "Allure Salon Mahim",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": "Allure Salon Mahim",
    "image": "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1200&auto=format&fit=crop",
    "description": "Premium beauty salon in Mahim, Mumbai offering luxury hair, beauty, makeup, and wellness services.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Shop No.3, Ground Floor, Sea Breez Society, Behind Mahim Church, Mori Road, Mahim (W)",
      "addressLocality": "Mumbai",
      "addressRegion": "Maharashtra",
      "postalCode": "400016",
      "addressCountry": "IN"
    },
    "telephone": "+91 93246 53663",
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "10:30",
        "closes": "21:00"
      }
    ]
  };

  return (
    <html
      lang="en"
      className={`${bodoniModa.variable} ${montserrat.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-cream text-charcoal">
        <Navbar />
        <main className="flex-grow pt-[115px]">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
