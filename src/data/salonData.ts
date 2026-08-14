export interface ServiceItem {
  name: string;
  description: string;
  price?: string;
  duration?: string;
  specialization?: boolean;
}

export interface ServiceCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  images?: string[];
  services: ServiceItem[];
}

export interface TestimonialItem {
  id: string;
  author: string;
  text: string;
  rating: number;
}

export interface GalleryItem {
  id: string;
  url: string;
  category: string;
  aspect: string;
}

export const salonServices: ServiceCategory[] = [
  {
    id: "hair",
    title: "HAIR SERVICES",
    subtitle: "Artistry in styling and hair care.",
    description: "Our master stylists create bespoke cuts, vibrant styles, and nourishing treatments designed to accentuate your natural features and restore hair health.",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1595853035070-59a39fe84de3?q=80&w=800&auto=format&fit=crop"
    ],
    services: [
      {
        name: "Blowdry",
        description: "Professional wash and blow-out styling, customized to be sleek, voluminous, or beautifully waved."
      },
      {
        name: "Hairstyling",
        description: "Expert styling for special occasions, custom updos, braids, or sleek looks tailored to your preferences."
      },
      {
        name: "Tongs",
        description: "Beautifully defined curls or loose beachy waves using professional high-grade hot tongs."
      },
      {
        name: "Straightening",
        description: "Sleek, smooth, and frizz-free professional straightening for long-lasting sheen and manageability."
      },
      {
        name: "Botox Treatment",
        description: "Advanced hair botox therapy to deeply condition, repair damaged fibers, and restore youthful elasticity.",
        specialization: true
      },
      {
        name: "Keratin Treatment",
        description: "Premium keratin smoothing treatment to eliminate frizz, rebuild structural strength, and add brilliant shine.",
        specialization: true
      }
    ]
  },
  {
    id: "beauty",
    title: "BEAUTY & SKINCARE",
    subtitle: "Radiant skincare and facial treatments.",
    description: "Rejuvenate your skin and body with our curated beauty rituals. From targeted professional facials to luxury nail therapies.",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800&auto=format&fit=crop"
    ],
    services: [
      {
        name: "Express Facial",
        description: "A quick skin rejuvenation facial to cleanse, gently exfoliate, and instantly refresh and hydrate the face."
      },
      {
        name: "O3+ Facial",
        description: "Premium brightening and oxygenating facial utilizing O3+ professional formulas to reduce tan and reveal a luminous glow."
      },
      {
        name: "Serenite Facial",
        description: "Luxury therapeutic facial designed to target specific skin concerns, calm inflammation, and intensely hydrate.",
        specialization: true
      },
      {
        name: "Luxury Facial",
        description: "An indulgent multi-step facial ritual to deeply nourish, lift, and revitalize aging or tired skin."
      },
      {
        name: "Waxing",
        description: "Gentle hair removal utilizing premium chocolate and organic waxes designed to minimize discomfort and soothe skin."
      },
      {
        name: "Manicure",
        description: "Classic hand therapy featuring nail shaping, cuticle care, exfoliating scrub, light massage, and premium polish."
      },
      {
        name: "Pedicure",
        description: "Classic foot therapy with a therapeutic soak, exfoliating scrub, nail shaping, and relaxing massage."
      },
      {
        name: "Spa Manicure",
        description: "Luxury hand rejuvenation with exfoliating scrub, nourishing mask, massage, and high-shine professional polish."
      },
      {
        name: "Spa Pedicure",
        description: "Indulgent foot rejuvenation incorporating therapeutic salts, deep exfoliation, soothing mask, and professional massage."
      },
      {
        name: "Nail Art",
        description: "Custom nail artistry ranging from elegant minimal designs to detailed, hand-painted gel illustrations."
      }
    ]
  },
  {
    id: "makeup",
    title: "MAKEUP",
    subtitle: "Glamour defined by elegance.",
    description: "From editorial-grade bridal makeup to high-impact event looks, our makeup artists specialize in flawless, long-wear applications.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=800&auto=format&fit=crop"
    ],
    services: [
      {
        name: "Bridal Makeup & Hairstyles",
        description: "Exquisite, long-lasting wedding makeup and styling customized to your bridal look, including pre-wedding consultation and hairstyling.",
        specialization: true
      },
      {
        name: "Engagement Makeup",
        description: "A tailored look balancing elegance and photogenic longevity for your pre-wedding celebrations."
      },
      {
        name: "Party Makeup",
        description: "Stunning, customized makeup for social events, ranging from subtle daytime glam to dramatic evening looks."
      }
    ]
  },
  {
    id: "wellness",
    title: "WELLNESS",
    subtitle: "Nourish your mind, body and soul.",
    description: "Unplug and restore your inner balance with our therapeutic wellness rituals, designed to relieve stress and revitalize your energy.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=800&auto=format&fit=crop"
    ],
    services: [
      {
        name: "Spa Treatments",
        description: "Therapeutic body massages and body spa rituals using organic essential oils to release muscle tension and calm the mind."
      }
    ]
  }
];

export const salonTestimonials: TestimonialItem[] = [
  {
    id: "t1",
    author: "Elena R.",
    text: "The level of precision and care at Allure is unmatched. My haircut is perfect and the rose-gold, calm ambiance makes the entire experience so incredibly luxurious.",
    rating: 5
  },
  {
    id: "t2",
    author: "Aria S.",
    text: "Their bridal makeup services made my special day absolute perfection. Flawless, glowing, and it photographed beautifully. Truly the best salon in Mahim.",
    rating: 5
  },
  {
    id: "t3",
    author: "Meera K.",
    text: "The wellness treatments here are absolute heaven. It is my weekly self-care ritual. Staff are professional, kind, and incredibly detailed with their service.",
    rating: 5
  }
];

export const salonValues = [
  {
    title: "QUALITY",
    description: "We use only the finest premium products and advanced techniques to guarantee exceptional, long-lasting results."
  },
  {
    title: "PERSONALISED SERVICE",
    description: "Every service starts with a detailed consultation to ensure the treatment is tailor-made to your hair, skin, and lifestyle."
  },
  {
    title: "EXPERTISE",
    description: "Our handpicked specialists undergo continuous education to bring you the latest international trends and techniques."
  },
  {
    title: "CARE",
    description: "We create a warm, serene space that prioritizes your comfort, hygiene, and overall wellness in every interaction."
  }
];

export const salonGallery: GalleryItem[] = [
  {
    id: "g1",
    url: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800&auto=format&fit=crop",
    category: "Salon Interior",
    aspect: "md:col-span-2 md:row-span-1"
  },
  {
    id: "g2",
    url: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&auto=format&fit=crop",
    category: "Hair Styling",
    aspect: "md:col-span-1 md:row-span-2"
  },
  {
    id: "g3",
    url: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800&auto=format&fit=crop",
    category: "Professional Makeup",
    aspect: "md:col-span-1 md:row-span-1"
  },
  {
    id: "g4",
    url: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=800&auto=format&fit=crop",
    category: "Beauty Treatments",
    aspect: "md:col-span-1 md:row-span-1"
  },
  {
    id: "g5",
    url: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop",
    category: "Salon Details",
    aspect: "md:col-span-2 md:row-span-1"
  },
  {
    id: "g6",
    url: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=800&auto=format&fit=crop",
    category: "Luxury Nail Care",
    aspect: "md:col-span-1 md:row-span-1"
  }
];
