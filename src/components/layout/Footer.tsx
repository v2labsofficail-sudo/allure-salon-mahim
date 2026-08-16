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
            Mori Rd, Mahim West,<br />
            Mahim, Mumbai,<br />
            Maharashtra 400016 <br />
            Phone: <a href="tel:+919324653663" className="hover:text-rose-gold transition-colors font-medium">093246 53663</a> <br />
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
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.456h.008c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
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
            &copy; 2026 Allure beauty and hair salon (only for ladies). All rights reserved.
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
