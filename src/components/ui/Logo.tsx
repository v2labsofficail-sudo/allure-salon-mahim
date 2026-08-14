import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  light?: boolean;
  full?: boolean;
  className?: string;
}

export default function Logo({ light = false, className = "" }: LogoProps) {
  // Use the transparent logo on dark backgrounds, and the original white-bg logo on light navigation backgrounds
  const logoSrc = light ? "/logo_transparent.png" : "/logo.png";
  const imgFilterClass = light ? "invert brightness-200" : "";

  return (
    <Link href="/" className={`inline-flex items-center group ${className}`}>
      <div className="relative w-40 h-16 md:w-48 md:h-20 transition-transform duration-500 group-hover:scale-102">
        <Image
          src={logoSrc}
          alt="Allure Salon Mahim Logo"
          fill
          sizes="(max-width: 768px) 160px, 192px"
          className={`object-contain ${imgFilterClass}`}
          priority
        />
      </div>
    </Link>
  );
}
