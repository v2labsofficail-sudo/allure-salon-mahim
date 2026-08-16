import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { serviceDetails } from "@/data/serviceDetails";
import { SITE_URL } from "@/utils/seo";
import Button from "@/components/ui/Button";

interface ServicePageProps {
  params: Promise<{ service: string }>;
}

// Generate static params for all 13 service slugs at build time
export async function generateStaticParams() {
  return Object.keys(serviceDetails).map((slug) => ({
    service: slug,
  }));
}

// Generate dynamic metadata for SEO crawlers
export async function generateMetadata(props: ServicePageProps): Promise<Metadata> {
  const params = await props.params;
  const details = serviceDetails[params.service];

  if (!details) {
    return {};
  }

  const canonicalUrl = `${SITE_URL}/services/${params.service}`;

  return {
    title: details.title,
    description: details.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: details.title,
      description: details.description,
      url: canonicalUrl,
      images: [
        {
          url: details.imageUrl,
          width: 800,
          height: 800,
          alt: details.h1,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: details.title,
      description: details.description,
      images: [details.imageUrl],
    },
  };
}

export default async function ServiceSubPage(props: ServicePageProps) {
  const params = await props.params;
  const details = serviceDetails[params.service];

  if (!details) {
    notFound();
  }

  // Schema: BreadcrumbList
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": SITE_URL,
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": `${SITE_URL}/services`,
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": details.h1,
        "item": `${SITE_URL}/services/${params.service}`,
      },
    ],
  };

  // Schema: FAQPage
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": details.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a,
      },
    })),
  };

  return (
    <div className="flex flex-col w-full bg-cream py-12 md:py-20">
      {/* Dynamic SEO JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <span className="font-sans text-xs md:text-sm font-semibold tracking-[0.35em] text-rose-gold uppercase block mb-4">
          {details.category}
        </span>
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-charcoal leading-tight max-w-4xl mx-auto mb-8">
          {details.h1}
        </h1>
        <p className="font-sans text-sm md:text-base text-soft-gray max-w-2xl mx-auto leading-relaxed tracking-wide">
          {details.intro}
        </p>
        <div className="h-[1px] w-20 bg-rose-gold mx-auto mt-6" />

        {/* Brand Image Visual */}
        <div className="relative w-full h-[300px] md:h-[450px] mt-12 max-w-5xl mx-auto">
          <div className="absolute inset-0 border border-rose-gold/25 translate-x-3 translate-y-3 pointer-events-none" />
          <Image
            src={details.imageUrl}
            alt={`${details.h1} treatment at Allure Salon Mahim West`}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 80vw"
          />
        </div>
      </section>

      {/* Deep Description */}
      <section className="max-w-4xl mx-auto px-6 mb-16 text-center">
        <h2 className="font-display text-2xl md:text-3xl font-light text-charcoal mb-6 uppercase tracking-wider">
          Experience Custom Care
        </h2>
        <p className="font-sans text-sm md:text-base text-soft-gray leading-relaxed tracking-wide text-justify md:text-center">
          {details.aboutText}
        </p>
      </section>

      {/* Benefits & Process Section */}
      <section className="bg-charcoal text-cream py-16 md:py-24 my-12 border-y border-rose-gold/25">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left Column: Benefits */}
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-light text-rose-gold mb-8 uppercase tracking-wider">
              Key Benefits
            </h2>
            <ul className="flex flex-col gap-6">
              {details.benefits.map((benefit, idx) => (
                <li key={idx} className="flex gap-4 items-start">
                  <span className="font-sans text-xs text-rose-gold font-bold tracking-[0.2em] mt-1">
                    0{idx + 1}
                  </span>
                  <p className="font-sans text-sm text-rose-gold-light leading-relaxed tracking-wide">
                    {benefit}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Treatment Process */}
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-light text-rose-gold mb-8 uppercase tracking-wider">
              The Process
            </h2>
            <ol className="flex flex-col gap-6">
              {details.process.map((step, idx) => (
                <li key={idx} className="flex gap-4 items-start border-b border-border-custom/10 pb-4 last:border-0 last:pb-0">
                  <span className="font-sans text-xs text-rose-gold-light font-bold mt-1">
                    STEP {idx + 1}
                  </span>
                  <p className="font-sans text-sm text-soft-gray leading-relaxed tracking-wide text-gray-300">
                    {step}
                  </p>
                </li>
              ))}
            </ol>
          </div>

        </div>
      </section>

      {/* FAQ System */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="font-display text-3xl font-light text-charcoal mb-10 uppercase tracking-wider text-center">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col gap-6">
          {details.faqs.map((faq, idx) => (
            <div key={idx} className="border border-border-custom bg-white p-6 md:p-8">
              <h3 className="font-sans text-sm md:text-base font-semibold text-charcoal tracking-wide mb-3">
                {faq.q}
              </h3>
              <p className="font-sans text-xs md:text-sm text-soft-gray leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Related Services */}
      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-border-custom/50 text-center">
        <h2 className="font-display text-xl font-light text-charcoal mb-6 uppercase tracking-wider">
          Related Beauty Services
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {details.related.map((item, idx) => (
            <Link
              key={idx}
              href={`/services/${item.slug}`}
              className="font-sans text-xs tracking-widest uppercase font-semibold text-rose-gold hover:text-rose-gold-dark py-2.5 px-5 border border-border-custom bg-white hover:bg-cream transition-luxury"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </section>

      {/* Call To Action */}
      <section className="max-w-4xl mx-auto px-6 py-12 text-center">
        <div className="bg-white border border-rose-gold/25 p-8 md:p-12 relative overflow-hidden flex flex-col items-center">
          <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-rose-gold/20 translate-x-3 translate-y-3 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-rose-gold/20 -translate-x-3 -translate-y-3 pointer-events-none" />
          
          <h2 className="font-display text-2xl md:text-3xl font-light text-charcoal mb-4 uppercase tracking-wider">
            Book Your Consultation
          </h2>
          <p className="font-sans text-xs md:text-sm text-soft-gray max-w-md leading-relaxed mb-8">
            Treat yourself to customized care at our premium ladies-only salon in Mahim West. Connect with us on WhatsApp to select your service and reserve your booking slot.
          </p>
          <Button
            href="/contact"
            variant="solid"
            className="bg-rose-gold hover:bg-rose-gold-dark text-charcoal hover:text-white border-rose-gold hover:border-rose-gold-dark"
          >
            Book Your Appointment
          </Button>
        </div>
      </section>
    </div>
  );
}
