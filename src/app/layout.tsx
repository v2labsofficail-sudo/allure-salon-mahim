import type { Metadata } from "next";
import { Bodoni_Moda, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import WhatsAppButton from "../components/ui/WhatsAppButton";
import { SITE_URL } from "@/utils/seo";

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
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Allure Salon Mahim | Hair, Beauty, Makeup & Wellness",
    template: "%s | Allure Salon Mahim",
  },
  description:
    "Experience refined, premium beauty and wellness services in Mahim, Mumbai. Bespoke hair cutting, color, advanced skincare, bridal makeup, and calming self-care rituals.",
  alternates: {
    canonical: "./",
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  openGraph: {
    title: "Allure Salon Mahim | Hair, Beauty, Makeup & Wellness",
    description:
      "Experience refined, premium beauty and wellness services in Mahim, Mumbai. Bespoke hair cutting, color, advanced skincare, bridal makeup, and calming self-care rituals.",
    url: "./",
    siteName: "Allure Salon Mahim",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Allure Salon Mahim | Hair, Beauty, Makeup & Wellness",
      },
    ],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Allure Salon Mahim | Hair, Beauty, Makeup & Wellness",
    description:
      "Experience refined, premium beauty and wellness services in Mahim, Mumbai. Bespoke hair cutting, color, advanced skincare, bridal makeup, and calming self-care rituals.",
    images: ["/og-image.jpg"],
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
    "@id": `${SITE_URL}/#salon`,
    "name": "Allure Salon Mahim",
    "url": SITE_URL,
    "logo": `${SITE_URL}/logo.png`,
    "image": `${SITE_URL}/og-image.jpg`,
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

