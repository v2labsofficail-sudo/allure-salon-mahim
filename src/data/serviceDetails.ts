export interface FAQItem {
  q: string;
  a: string;
}

export interface RelatedItem {
  label: string;
  slug: string;
}

export interface ServiceDetail {
  title: string;
  description: string;
  h1: string;
  intro: string;
  aboutText: string;
  benefits: string[];
  process: string[];
  faqs: FAQItem[];
  category: string;
  imageUrl: string;
  related: RelatedItem[];
}

export const serviceDetails: Record<string, ServiceDetail> = {
  "haircut": {
    title: "Haircut & Styling in Mahim | Allure Salon",
    description: "Get professional bespoke cuts and premium hair styling in Mahim West, Mumbai at Allure Salon. Tailored cuts for ladies by experienced stylists.",
    h1: "Premium Haircut & Styling in Mahim",
    intro: "Experience the art of personalized hair cutting and styling tailored to frame your face, match your lifestyle, and elevate your natural confidence.",
    aboutText: "At Allure Salon Mahim West, we believe a great haircut is the foundation of individual style. Our master stylists start each session with a detailed consultation, examining your hair texture, facial structure, and styling habits. Whether you are looking for a classic trim, soft layers, or a bold modern transformation, we deliver with precision and care in our serene ladies-only environment in Mumbai.",
    benefits: [
      "Bespoke cuts that complement your unique facial structure.",
      "Professional blowout styling included with every signature cut.",
      "Texture optimization to improve natural volume and hair health.",
      "Easy-to-maintain styles tailored to your daily routine."
    ],
    process: [
      "Personalized consultation to discuss style options and hair goals.",
      "Soothing double-shampoo wash using professional premium formulations.",
      "Bespoke precision haircutting tailored by our senior stylists.",
      "Blowout styling and volume-adding texturization to finish your look."
    ],
    category: "HAIR SERVICES",
    imageUrl: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&auto=format&fit=crop",
    related: [
      { label: "Hair Colouring", slug: "hair-colour" },
      { label: "Nourishing Hair Spa", slug: "hair-spa" },
      { label: "Hair Botox Treatment", slug: "hair-botox" }
    ],
    faqs: [
      {
        q: "How often should I get a haircut at Allure Salon?",
        a: "To maintain the shape and health of your hair, we recommend getting a haircut every 6 to 8 weeks, especially if you want to keep split ends at bay."
      },
      {
        q: "Do you offer blowout styling separately in Mahim?",
        a: "Yes! We offer professional wash and blowout styling as a standalone service for special events, meetings, or self-care days."
      },
      {
        q: "Where is Allure Salon located in Mahim?",
        a: "We are located at Mori Rd, Mahim West, Mahim, Mumbai, Maharashtra 400016."
      }
    ]
  },
  "hair-colour": {
    title: "Global Hair Colour in Mahim | Allure Salon",
    description: "Explore professional global hair colouring services at Allure Salon in Mahim West, Mumbai. Safe, rich, and shiny tones tailored for ladies.",
    h1: "Global Hair Colour in Mahim",
    intro: "Transform your look with vibrant, long-lasting global hair colour that adds depth, shine, and complete coverage tailored to your skin tone.",
    aboutText: "Allure Salon Mahim offers premium global hair colouring treatments for ladies looking for rich, sophisticated hues. We utilize high-grade, ammonia-free, and low-ammonia formulas from leading international brands to ensure optimal hair protection, moisture retention, and brilliant multi-dimensional shine. Our expert colorists customize formulas to seamlessly complement your natural complexion.",
    benefits: [
      "Even, seamless root-to-tip colour coverage.",
      "High-grade formulas that protect hair integrity and softness.",
      "Optimal grey coverage with long-lasting pigment retention.",
      "Infused with shine-boosting nutrients for a glossy finish."
    ],
    process: [
      "Color selection and skin tone analysis during your consultation.",
      "Precise sectional application of professional hair color.",
      "Processing time monitoring to ensure accurate color development.",
      "Colour-lock wash followed by a deep-conditioning treatment and blowout."
    ],
    category: "HAIR SERVICES",
    imageUrl: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&auto=format&fit=crop",
    related: [
      { label: "Balayage Artistry", slug: "balayage" },
      { label: "Hair Highlights", slug: "highlights" },
      { label: "Nourishing Hair Spa", slug: "hair-spa" }
    ],
    faqs: [
      {
        q: "How long does global hair colour last?",
        a: "Typically, global hair colour lasts about 4 to 6 weeks before you need a root touch-up, depending on your hair growth cycle and maintenance routine."
      },
      {
        q: "Will colouring damage my hair?",
        a: "We prioritize hair health by using protective, conditioning hair dyes and post-colour treatments to seal the cuticle and lock in hydration."
      },
      {
        q: "Is Allure Salon near Mahim station?",
        a: "Yes, our salon is located on Mori Road, just a short walk or drive from Mahim West station, making it highly accessible."
      }
    ]
  },
  "balayage": {
    title: "Balayage Hair Colour in Mahim | Allure Salon",
    description: "Experience premium, hand-painted balayage hair colouring in Mahim West, Mumbai at Allure Salon. Soft, sun-kissed gradients for ladies.",
    h1: "Balayage Hair Colour in Mahim",
    intro: "Achieve a soft, natural, sun-kissed gradient look with our bespoke hand-painted balayage highlighting techniques.",
    aboutText: "Our senior colorists at Allure Salon Mahim specialize in the French art of balayage. By hand-painting lightener directly onto sections of your hair, we create custom, blended color gradients that grow out gracefully without harsh demarcation lines. This technique adds visual dimension, movement, and a premium modern edge to your look.",
    benefits: [
      "Bespoke, hand-painted highlighting tailored to your haircut.",
      "Low-maintenance grow-out with no harsh root lines.",
      "Adds multi-dimensional depth and the illusion of thickness.",
      "Custom toner shades to neutralize unwanted warm or brassy tones."
    ],
    process: [
      "Detailed color consultation to align on placement and highlight density.",
      "Sectional hand-painting lightener application by a senior colorist.",
      "Careful monitoring followed by a precise clarifying wash.",
      "Glaze or toner application to refine the undertone, finished with styling."
    ],
    category: "HAIR SERVICES",
    imageUrl: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&auto=format&fit=crop",
    related: [
      { label: "Global Hair Colour", slug: "hair-colour" },
      { label: "Hair Highlights", slug: "highlights" },
      { label: "Keratin Treatment", slug: "keratin-treatment" }
    ],
    faqs: [
      {
        q: "What is the difference between highlights and balayage?",
        a: "Traditional highlights use foils from the roots down for structured brightness. Balayage is a freehand technique applied mid-shaft to ends for a softer, blended gradient."
      },
      {
        q: "How often does balayage need to be touched up?",
        a: "Because of the blended root transition, balayage is low-maintenance and only needs touch-ups every 3 to 6 months."
      }
    ]
  },
  "highlights": {
    title: "Hair Highlights in Mahim | Allure Salon",
    description: "Get stunning foil hair highlights in Mahim West at Allure Salon. Add dimension and luminosity with premium tones styled for ladies.",
    h1: "Hair Highlights in Mahim",
    intro: "Illuminate your hair with custom-placed foil highlights that add contrast, dimension, and brilliant pockets of light to your style.",
    aboutText: "At Allure Salon Mahim West, we design foil highlighting patterns to create structure, contrast, and customized lightness. Whether you prefer fine baby-lights for a natural lift or bolder streaks for high contrast, we utilize premium protective formulas to lift your hair safely and apply custom-blended glazes to lock in shine.",
    benefits: [
      "Creates visual movement and accents the lines of your haircut.",
      "Fine baby-lights to bold slice placements customized to your preferences.",
      "Premium bond-builders included to protect hair structure.",
      "Refined glossing to seal the cuticles and increase reflectivity."
    ],
    process: [
      "Section mapping based on your natural fall and styling habits.",
      "Careful foil weaving and lightener application.",
      "Rinse and apply professional bond-builder treatments.",
      "Glossing or toning to achieve the desired gold, ash, or caramel hue."
    ],
    category: "HAIR SERVICES",
    imageUrl: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&auto=format&fit=crop",
    related: [
      { label: "Global Hair Colour", slug: "hair-colour" },
      { label: "Balayage Artistry", slug: "balayage" },
      { label: "Hair Botox Treatment", slug: "hair-botox" }
    ],
    faqs: [
      {
        q: "Do highlights work on dark Indian hair?",
        a: "Absolutely! We specialize in warm caramel, rich honey, deep hazelnut, and soft chocolate tones that look gorgeous on dark bases."
      },
      {
        q: "How do I care for my highlights at home?",
        a: "Use color-safe, sulfate-free shampoos and nourishing masks. Avoid excessive heat styling to maintain moisture and prevent fading."
      }
    ]
  },
  "keratin-treatment": {
    title: "Keratin Treatment in Mahim | Allure Salon",
    description: "Looking for keratin treatment in Mahim? Explore professional hair smoothing services at Allure Salon Mahim and enquire about your appointment.",
    h1: "Keratin Treatment in Mahim",
    intro: "Banish frizz and restore structural protein to your hair. Discover our professional smoothing treatment for sleek, manageable locks.",
    aboutText: "Living in a humid environment like Mumbai can make hair prone to frizz and unmanageability. At Allure Salon Mahim West, our premium Keratin Treatment restores keratin protein back into porous hair shafts. This process smooths down hair cuticles, significantly cuts down blow-dry time, and leaves your hair looking sleek, straight, and incredibly soft for months.",
    benefits: [
      "Eliminates up to 90% of frizz and unruly volume.",
      "Reduces daily styling and blow-drying time by half.",
      "Coats hair with a protective protein layer, improving strength.",
      "Imparts a glossy, high-shine finish to coarse or damaged hair."
    ],
    process: [
      "Deep-cleansing shampoo wash to remove residue and open hair cuticles.",
      "Sectional application of premium, protein-rich keratin formula.",
      "Blow-drying and professional flat-iron sealing to lock in the treatment.",
      "Post-treatment instruction guidance for color-safe maintenance."
    ],
    category: "HAIR SERVICES",
    imageUrl: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?q=80&w=800&auto=format&fit=crop",
    related: [
      { label: "Hair Botox Treatment", slug: "hair-botox" },
      { label: "Cysteine Hair Treatment", slug: "cysteine-treatment" },
      { label: "Nourishing Hair Spa", slug: "hair-spa" }
    ],
    faqs: [
      {
        q: "How long does the Keratin treatment last?",
        a: "With proper care and using sulfate-free shampoos, a Keratin treatment typically lasts between 3 to 4 months."
      },
      {
        q: "Is Keratin suitable for all hair types?",
        a: "Yes, it is highly effective for frizzy, curly, wavy, coarse, and chemically treated hair that needs smoothing and repair."
      },
      {
        q: "What aftercare is required post-treatment?",
        a: "You must avoid washing your hair or tying it back for the first 48 to 72 hours. Always use sulfate-free and sodium chloride-free hair care products thereafter."
      }
    ]
  },
  "hair-botox": {
    title: "Hair Botox in Mahim | Allure Salon",
    description: "Discover professional hair Botox treatment in Mahim at Allure Salon. Explore the service, suitability and aftercare before booking an appointment.",
    h1: "Hair Botox in Mahim",
    intro: "Rejuvenate aging, damaged, or dull hair with a deep-conditioning, anti-aging hair Botox therapy that restores life and bounce.",
    aboutText: "Hair Botox is a non-chemical, deep-conditioning treatment that repairs damaged and broken hair fibers. At Allure Salon Mahim, we use formulas packed with vitamins, amino acids, natural oils, and collagen. It acts as a filler for hair fibers, smoothing out frizz, restoring lost hydration, and returning youthful elasticity without chemically altering your natural hair bond.",
    benefits: [
      "Deeply hydrates and repairs chemically damaged or dry hair.",
      "Smoothes out frizz while preserving your natural curl or wave volume.",
      "100% formaldehyde-free and non-chemical conditioning formula.",
      "Adds brilliant, healthy-looking bounce and volume to fine hair."
    ],
    process: [
      "Clarifying hair wash to prep hair fibers for maximum absorption.",
      "Meticulous application of the nutrient-rich Hair Botox cream.",
      "Letting the formula absorb, followed by blow-dry styling.",
      "Sealing in the nutrients using a professional flat-iron at optimized heat."
    ],
    category: "HAIR SERVICES",
    imageUrl: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?q=80&w=800&auto=format&fit=crop",
    related: [
      { label: "Keratin Treatment", slug: "keratin-treatment" },
      { label: "Cysteine Hair Treatment", slug: "cysteine-treatment" },
      { label: "Nourishing Hair Spa", slug: "hair-spa" }
    ],
    faqs: [
      {
        q: "Does Hair Botox straighten the hair?",
        a: "Unlike straightening or keratin, Hair Botox does not break hair bonds to straighten it. It smooths frizz and relaxes curls slightly, but focuses on deep conditioning and repair."
      },
      {
        q: "Who is the ideal candidate for Hair Botox?",
        a: "It is ideal for anyone with dry, dehydrated, color-damaged, frizzy, or split-end prone hair seeking deep repair and shine."
      }
    ]
  },
  "cysteine-treatment": {
    title: "Cysteine Hair Treatment in Mahim | Allure Salon",
    description: "Get premium cysteine hair smoothing treatments at Allure Salon in Mahim West, Mumbai. Safe, natural amino-acid based smoothing for ladies.",
    h1: "Cysteine Hair Treatment in Mahim",
    intro: "Opt for a gentle, natural amino-acid based smoothing treatment that softens curls, eliminates frizz, and protects hair health.",
    aboutText: "Cysteine treatment is one of the safest hair smoothing procedures available, utilizing natural cysteine amino acids to relax hair curls and eliminate frizz. At Allure Salon Mahim West, our cysteine therapy is entirely free of formaldehyde and harsh chemicals, making it exceptionally safe for pregnant or sensitive clients who want smooth, manageable, and naturally falling hair.",
    benefits: [
      "Formaldehyde-free and zero harsh chemical emissions.",
      "Gently relaxes tight curls into soft, natural waves.",
      "Fades out gradually without leaving stark, contrasting regrowth lines.",
      "Extremely safe for chemically processed and sensitive hair types."
    ],
    process: [
      "Gentle preparation wash to remove mineral buildup.",
      "Careful application of the cysteine amino-acid complex.",
      "Processing under heat to allow penetration, followed by blow-drying.",
      "Flat-iron sealing to bond the proteins to the hair shaft."
    ],
    category: "HAIR SERVICES",
    imageUrl: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?q=80&w=800&auto=format&fit=crop",
    related: [
      { label: "Keratin Treatment", slug: "keratin-treatment" },
      { label: "Hair Botox Treatment", slug: "hair-botox" },
      { label: "Nourishing Hair Spa", slug: "hair-spa" }
    ],
    faqs: [
      {
        q: "Is Cysteine treatment safer than Keratin?",
        a: "Yes, Cysteine formulas are generally free of formaldehyde and its derivatives, making it a gentler and safer alternative for sensitive scalps."
      },
      {
        q: "How long does Cysteine treatment last?",
        a: "It typically lasts for 2 to 3 months and fades out naturally, leaving no harsh regrowth line between treated and untreated hair."
      }
    ]
  },
  "hair-spa": {
    title: "Nourishing Hair Spa in Mahim | Allure Salon",
    description: "Relax with a premium nourishing hair spa treatment at Allure Salon in Mahim West, Mumbai. Deep conditioning and scalp care for ladies.",
    h1: "Nourishing Hair Spa in Mahim",
    intro: "Rejuvenate your scalp and condition your hair with a luxurious, deeply relaxing therapeutic hair spa ritual.",
    aboutText: "Daily pollution, hard water, and stress can take a toll on your hair and scalp. Our signature hair spa at Allure Salon Mahim West combines deep-conditioning cream masques with targeted head massages to stimulate blood circulation, purify the hair roots, and restore hydration to dry, damaged strands in a tranquil environment.",
    benefits: [
      "Deeply hydrates dry, damaged hair shafts from root to tip.",
      "Cleanses the scalp, reducing dandruff and excess sebum.",
      "Improves blood circulation through specialized massage techniques.",
      "Deeply relaxing therapy that relieves physical and mental stress."
    ],
    process: [
      "Shampoo wash to cleanse the scalp and open cuticles.",
      "Application of custom nourishing masques mixed with essential concentrates.",
      "Relaxing 15-20 minute scalp, neck, and shoulder massage.",
      "Gentle steaming to allow deep absorption, followed by a final rinse."
    ],
    category: "HAIR SERVICES",
    imageUrl: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800&auto=format&fit=crop",
    related: [
      { label: "Haircut & Styling", slug: "haircut" },
      { label: "Hair Botox Treatment", slug: "hair-botox" },
      { label: "Global Hair Colour", slug: "hair-colour" }
    ],
    faqs: [
      {
        q: "What are the benefits of a regular hair spa?",
        a: "A regular hair spa normalizes oil secretion, rehydrates the hair, strengthens the roots, and keeps the scalp healthy and flake-free."
      },
      {
        q: "How often should I get a hair spa?",
        a: "We recommend a hair spa session once every 3 to 4 weeks to maintain optimal hair texture and scalp hygiene."
      }
    ]
  },
  "hydrafacial": {
    title: "Hydrafacial in Mahim | Allure Salon",
    description: "Looking for Hydrafacial in Mahim? Explore facial and skincare services at Allure Salon Mahim and enquire about your appointment.",
    h1: "Hydrafacial Skincare in Mahim",
    intro: "Reveal clear, glowing skin with our multi-step hydra-dermabrasion facial that deep cleanses, extracts, and infuses skin with vital antioxidants.",
    aboutText: "Hydrafacial is a non-invasive, multi-step skincare treatment that combines cleansing, exfoliation, extraction, hydration, and antioxidant protection. At Allure Salon Mahim West, we utilize professional hydra-dermabrasion technology to gently vacuum out blackheads and impurities while simultaneously infusing custom nourishing serums, leaving your skin plump, clear, and glowing.",
    benefits: [
      "Deeply cleanses pores, removing blackheads and sebum build-up.",
      "Gentle exfoliation reveals a bright, smooth skin texture.",
      "Infuses skin with hyaluronic acid, peptides, and vital antioxidants.",
      "Instant, noticeable glow with zero downtime or redness."
    ],
    process: [
      "Vortex-cleansing and exfoliation to remove dead skin cells.",
      "Gentle acid peel to loosen dirt and prep pores for extraction.",
      "Automated vortex-suction to clean out pores painlessly.",
      "Vortex-infusion of custom hydrating and antioxidant serums."
    ],
    category: "BEAUTY & SKINCARE",
    imageUrl: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=800&auto=format&fit=crop",
    related: [
      { label: "Facial Treatments", slug: "facial" },
      { label: "D-Tan Brightening", slug: "d-tan" },
      { label: "Bridal Makeup", slug: "bridal-makeup" }
    ],
    faqs: [
      {
        q: "Is there any downtime after a Hydrafacial?",
        a: "No! One of the best benefits of a Hydrafacial is that it has zero downtime. You will walk out of the salon with a fresh, radiant glow and can immediately resume your day."
      },
      {
        q: "How often should I get a Hydrafacial?",
        a: "For optimal skin texture, pore maintenance, and a lasting glow, we recommend scheduling one Hydrafacial session once a month."
      }
    ]
  },
  "facial": {
    title: "Facial Treatments in Mahim | Allure Salon",
    description: "Rejuvenate your skin with professional O3+, Serenite, and luxury facial treatments at Allure Salon in Mahim West, Mumbai. Safe and relaxing.",
    h1: "Facial & Skincare in Mahim",
    intro: "Restore your skin's natural balance and radiance with our targeted facial treatments, customized to address your skin concerns.",
    aboutText: "At Allure Salon Mahim, we provide facial therapies designed for various skin types and concerns. Utilizing premium professional lines like O3+ and Serenite, our skincare specialists deliver cleansing, targeted massages, and custom masques to soothe inflammation, combat pigmentation, and intensely hydrate your skin.",
    benefits: [
      "Deeply purges skin impurities and environmental toxins.",
      "Boosts cellular renewal, helping combat signs of aging.",
      "Improves skin tone and reduces sun spots or hyperpigmentation.",
      "Relaxing facial massage stimulates circulation and drains lymph."
    ],
    process: [
      "Detailed skin analysis to select the right facial system.",
      "Deep cleansing followed by gentle steam and extraction.",
      "Hydrating massage using nutrient-rich creams and serums.",
      "Application of a specialized treatment mask to lock in moisture."
    ],
    category: "BEAUTY & SKINCARE",
    imageUrl: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop",
    related: [
      { label: "Hydrafacial Skincare", slug: "hydrafacial" },
      { label: "D-Tan Brightening", slug: "d-tan" },
      { label: "Bridal Makeup", slug: "bridal-makeup" }
    ],
    faqs: [
      {
        q: "Which facial is best for skin brightening?",
        a: "The O3+ Facial is highly recommended for skin brightening, as it uses oxygenating formulas that help reduce tanning and hyperpigmentation."
      },
      {
        q: "Is facial massage good for acne-prone skin?",
        a: "We customize our treatments. For active acne, we focus on calming, antibacterial, and extraction therapies with very light, non-stimulating massages to avoid spreading inflammation."
      }
    ]
  },
  "d-tan": {
    title: "D-Tan Skin Brightening in Mahim | Allure Salon",
    description: "Remove sun tan and restore even skin tone with professional D-Tan facials at Allure Salon in Mahim West, Mumbai. Gentle and effective.",
    h1: "D-Tan Skin Brightening in Mahim",
    intro: "Instantly reverse sun damage, soothe hyperpigmentation, and restore an even, radiant complexion with our specialized D-Tan therapies.",
    aboutText: "Extended exposure to the Mumbai sun can cause uneven skin tone and tan buildup. Our professional D-Tan treatment at Allure Salon Mahim West uses gentle, natural brightening agents and cooling botanicals to lift sun tan safely, soothe sun-stressed skin, and reveal a fresh, luminous complexion without harsh bleaching chemicals.",
    benefits: [
      "Instantly lifts sun tan, evening out skin tone differences.",
      "Cleanses deep-seated impurities, clearing up surface dullness.",
      "Infused with natural botanical extracts to soothe sun exposure.",
      "Gentle on all skin types, preserving natural skin protective barriers."
    ],
    process: [
      "Mild cleansing to prepare the skin surface.",
      "Application of the premium D-Tan pack containing natural fruit acids.",
      "Allowing active ingredients to process, followed by a cooling massage.",
      "Rinse off and application of hydrating sunscreen defense."
    ],
    category: "BEAUTY & SKINCARE",
    imageUrl: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=800&auto=format&fit=crop",
    related: [
      { label: "Hydrafacial Skincare", slug: "hydrafacial" },
      { label: "Facial Treatments", slug: "facial" },
      { label: "Bridal Makeup", slug: "bridal-makeup" }
    ],
    faqs: [
      {
        q: "Does D-Tan facial bleach the skin?",
        a: "No, our D-Tan packs do not contain harsh bleaching chemicals. They utilize safe fruit enzymes and milk acids to break down pigmented dead cells naturally."
      },
      {
        q: "How immediately can I see results?",
        a: "You will notice a brighter, cleaner, and less tanned complexion immediately after the very first session."
      }
    ]
  },
  "bridal-makeup": {
    title: "Bridal Makeup in Mahim | Allure Salon",
    description: "Looking for bridal makeup in Mahim? Explore bridal and event makeup services at Allure Salon and enquire about your beauty appointment.",
    h1: "Exquisite Bridal Makeup in Mahim",
    intro: "Look breathtaking on your special day with bespoke, long-wear bridal makeovers and stunning hairstyles customized around your bridal vision.",
    aboutText: "Your wedding day is one of the most memorable moments of your life. At Allure Salon Mahim, our senior makeup artists specialize in creating flawless, high-definition, and photography-friendly bridal makeup looks. We blend international cosmetic brands with custom-tailored draping and hair designs to make sure you look radiant, natural, and feel beautifully yourself throughout your celebrations.",
    benefits: [
      "Flawless HD or Airbrush makeup designed for high-resolution photography.",
      "Long-wear cosmetic formulations that withstand heat and emotion.",
      "Complete bridal service including hair styling, draping, and nail care.",
      "Pre-wedding consultation and trials available for peace of mind."
    ],
    process: [
      "Detailed bridal consultation to discuss outfits, theme, and look preferences.",
      "Skin preparation using premium hydrating primers.",
      "Meticulous makeup application (HD/Airbrush) and lash enhancement.",
      "Elegant bridal hair styling, dupatta draping, and accessory settings."
    ],
    category: "MAKEUP",
    imageUrl: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop",
    related: [
      { label: "Event & Party Makeup", slug: "event-makeup" },
      { label: "Hydrafacial Skincare", slug: "hydrafacial" },
      { label: "D-Tan Brightening", slug: "d-tan" }
    ],
    faqs: [
      {
        q: "Do you offer makeup trials before the wedding?",
        a: "Yes! We highly recommend scheduling a bridal makeup trial 3 to 4 weeks prior to the wedding date to test products, fine-tune the look, and ensure complete confidence."
      },
      {
        q: "What makeup brands do you use?",
        a: "We use only premium, dermatologist-tested international brands such as MAC, Huda Beauty, Kryolan, NARS, and Anastasia Beverly Hills."
      },
      {
        q: "Can you accommodate bridal draping?",
        a: "Yes, standard saree or dupatta draping, hair accessory placements, and jewelry adjustments are fully included in our bridal packages."
      }
    ]
  },
  "event-makeup": {
    title: "Event & Party Makeup in Mahim | Allure Salon",
    description: "Get stunning party and event makeup services in Mahim West at Allure Salon. Flawless evening and daytime glam packages for ladies.",
    h1: "Party & Event Makeup in Mahim",
    intro: "Step out in style for any social gathering, corporate event, or festive celebration with our professional party makeup packages.",
    aboutText: "Whether you are attending a glamorous reception, a festive family gathering, or a major corporate event in Mumbai, our professional makeup artists at Allure Salon Mahim West create clean, stunning makeovers that complement your attire. From a subtle, radiant daytime look to a classic smokey eye or bold red lip, we design a look that lasts.",
    benefits: [
      "Customized makeup aligned with your outfit and occasion theme.",
      "Photography-friendly base makeup with subtle contour and highlight.",
      "Durable, long-lasting products that stay fresh for hours.",
      "Quick and professional service to get you ready on time."
    ],
    process: [
      "Outfit and skin type analysis to select colour palettes.",
      "Precision base makeup application and skin prep.",
      "Eye makeup enhancements, eyebrow grooming, and lipstick setting.",
      "Setting spray application for extended wear, finished with hair setting."
    ],
    category: "MAKEUP",
    imageUrl: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800&auto=format&fit=crop",
    related: [
      { label: "Bridal Makeup", slug: "bridal-makeup" },
      { label: "Express Facial", slug: "facial" },
      { label: "Haircut & Styling", slug: "haircut" }
    ],
    faqs: [
      {
        q: "How long does a party makeup session take?",
        a: "A typical party makeup and hair styling session takes approximately 1 to 1.5 hours, allowing us to deliver meticulous detail while getting you out on time."
      },
      {
        q: "Can I bring my own makeup products?",
        a: "You are welcome to bring specific products if you have severe skin sensitivities, though our artists use a wide range of premium, hypoallergenic professional makeup products."
      }
    ]
  }
};
