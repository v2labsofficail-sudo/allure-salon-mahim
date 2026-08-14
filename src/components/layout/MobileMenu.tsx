"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import Logo from "../ui/Logo";
import Button from "../ui/Button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: { label: string; href: string; isExternal?: boolean }[];
}

export default function MobileMenu({ isOpen, onClose, links }: MobileMenuProps) {
  if (!isOpen) return null;

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}
      className="fixed inset-0 z-50 bg-cream/98 backdrop-blur-md flex flex-col justify-between p-6 md:hidden border-b border-border-custom"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <Logo />
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="p-2 text-charcoal hover:text-rose-gold transition-colors duration-300"
        >
          <X className="w-6 h-6 stroke-[1.5]" />
        </button>
      </div>

      {/* Links */}
      <div className="flex flex-col gap-6 my-auto items-center text-center">
        {links.map((link) => (
          <motion.div key={link.href} variants={itemVariants}>
            {link.isExternal ? (
              <a
                href={link.href}
                onClick={onClose}
                target="_blank"
                rel="noreferrer"
                className="font-sans text-lg tracking-[0.2em] uppercase font-medium text-charcoal hover:text-rose-gold transition-colors duration-300"
              >
                {link.label}
              </a>
            ) : (
              <Link
                href={link.href}
                onClick={onClose}
                className="font-sans text-lg tracking-[0.2em] uppercase font-medium text-charcoal hover:text-rose-gold transition-colors duration-300"
              >
                {link.label}
              </Link>
            )}
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div variants={itemVariants} className="w-full flex flex-col items-center gap-6 pb-8">
        <Button href="/contact" onClick={onClose} variant="solid" className="w-full text-center">
          Book an Appointment
        </Button>
      </motion.div>
    </motion.div>
  );
}
