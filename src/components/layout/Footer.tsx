import React from "react";
import Link from "next/link";
import Logo from "../ui/Logo";

export default function Footer() {
  const links = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-charcoal text-cream pt-16 pb-8 border-t border-rose-gold/20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        {/* Brand Information */}
        <div className="flex flex-col gap-4 md:col-span-2 items-start">
          <Logo light full className="!items-start" />
          <p className="font-sans text-sm text-soft-gray max-w-sm leading-relaxed mt-2">
            Experience refined, personalised beauty care exclusively for ladies in the heart of Mahim, Mumbai.
          </p>
        </div>

        {/* Links Navigation */}
        <div className="flex flex-col gap-4">
          <h3 className="font-sans text-xs tracking-[0.2em] uppercase font-semibold text-rose-gold">
            Navigation
          </h3>
          <ul className="flex flex-col gap-2">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-sans text-sm text-soft-gray hover:text-cream transition-colors duration-300 tracking-wider"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact info and social links */}
        <div className="flex flex-col gap-4">
          <h3 className="font-sans text-xs tracking-[0.2em] uppercase font-semibold text-rose-gold">
            Get in Touch
          </h3>
          <p className="font-sans text-sm text-soft-gray leading-relaxed">
            Shop No.3, Ground Floor, Sea Breez Society,<br />
            Behind Mahim Church, Mori Road, Mahim (W),<br />
            Mumbai - 400 016 <br />
            Phone: <a href="tel:+919324653663" className="hover:text-rose-gold transition-colors font-medium">+91 93246 53663</a> <br />
            Hours: Tue - Sun (10:30 AM - 9:00 PM) <br />
            Monday Closed
          </p>
          <div className="flex items-center gap-4 mt-2">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="text-soft-gray hover:text-rose-gold transition-colors duration-300"
            >
              <svg className="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="text-soft-gray hover:text-rose-gold transition-colors duration-300"
            >
              <svg className="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a
              href="https://wa.me/919324653663"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="text-soft-gray hover:text-rose-gold transition-colors duration-300"
            >
              <svg className="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Decorative rose-gold line divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-rose-gold/45 to-transparent my-8" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-soft-gray tracking-widest uppercase">
            &copy; 2026 Allure Salon Mahim. All rights reserved.
          </p>
          <p className="font-sans text-[10px] text-soft-gray tracking-[0.2em] uppercase">
            Created by{" "}
            <a
              href="https://v2labsglobal.com"
              target="_blank"
              rel="noreferrer"
              className="text-rose-gold hover:text-rose-gold-light transition-colors duration-300 font-semibold"
            >
              V2 Labs Global
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
