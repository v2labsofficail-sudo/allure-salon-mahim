"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import Logo from "../ui/Logo";
import Button from "../ui/Button";
import MobileMenu from "./MobileMenu";

import { GOOGLE_REVIEW_URL } from "@/utils/seo";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show navbar at the very top of the page
      if (currentScrollY < 80) {
        setIsVisible(true);
        setIsScrolled(false);
      } else {
        setIsScrolled(true);
        // Scrolling down -> hide; Scrolling up -> show
        if (currentScrollY > lastScrollY) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Offers", href: "/offers" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Review Us", href: GOOGLE_REVIEW_URL, isExternal: true },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 w-full z-40 flex flex-col transition-transform duration-500 ${
          isVisible || isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Top Marquee Announcement Bar */}
        <div className="w-full bg-charcoal text-rose-gold-light py-2 text-[9px] md:text-[10px] tracking-[0.25em] font-medium font-sans uppercase overflow-hidden border-b border-rose-gold/15 select-none">
          <div className="relative flex overflow-x-hidden">
            <div className="animate-marquee whitespace-nowrap flex gap-12">
              <span>10% OFF First Visit &bull; Refer a Friend: 10% Discount &bull; Ladies Only Salon &bull; Allure Salon Mahim &bull; Tuesday to Sunday (10:30 AM - 9:00 PM) &bull; Monday Closed &bull; Book on WhatsApp &bull;</span>
              <span>10% OFF First Visit &bull; Refer a Friend: 10% Discount &bull; Ladies Only Salon &bull; Allure Salon Mahim &bull; Tuesday to Sunday (10:30 AM - 9:00 PM) &bull; Monday Closed &bull; Book on WhatsApp &bull;</span>
              <span>10% OFF First Visit &bull; Refer a Friend: 10% Discount &bull; Ladies Only Salon &bull; Allure Salon Mahim &bull; Tuesday to Sunday (10:30 AM - 9:00 PM) &bull; Monday Closed &bull; Book on WhatsApp &bull;</span>
              <span>10% OFF First Visit &bull; Refer a Friend: 10% Discount &bull; Ladies Only Salon &bull; Allure Salon Mahim &bull; Tuesday to Sunday (10:30 AM - 9:00 PM) &bull; Monday Closed &bull; Book on WhatsApp &bull;</span>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <div
          className={`w-full transition-all duration-500 ${
            isScrolled
              ? "bg-white/95 backdrop-blur-md border-b border-border-custom py-3"
              : "bg-transparent py-5"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
            {/* Brand Logo */}
            <Logo />

            {/* Center Navigation (Desktop) */}
            <nav className="hidden md:flex items-center gap-8 lg:gap-10">
              {navLinks.map((link) => {
                const isActive = !link.isExternal && pathname === link.href;
                if (link.isExternal) {
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="font-sans text-xs lg:text-sm tracking-[0.2em] uppercase font-medium transition-colors duration-300 relative py-1 text-charcoal hover:text-rose-gold"
                    >
                      {link.label}
                    </a>
                  );
                }
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`font-sans text-xs lg:text-sm tracking-[0.2em] uppercase font-medium transition-colors duration-300 relative py-1 hover:text-rose-gold ${
                      isActive ? "text-rose-gold" : "text-charcoal"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[1px] bg-rose-gold" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* CTA Book Button & Mobile Toggle */}
            <div className="flex items-center gap-4">
              <Button
                href="/contact"
                variant="outline"
                className="hidden md:inline-flex !py-2.5 !px-6 text-xs"
              >
                Book an Appointment
              </Button>

              <button
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open menu"
                className="md:hidden p-2 text-charcoal hover:text-rose-gold transition-colors duration-300"
              >
                <Menu className="w-6 h-6 stroke-[1.5]" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
            links={navLinks}
          />
        )}
      </AnimatePresence>
    </>
  );
}
