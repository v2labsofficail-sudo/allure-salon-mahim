import React from "react";

interface SectionHeadingProps {
  eyebrow: string;
  heading: string;
  italicWord?: string;
  center?: boolean;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  heading,
  italicWord,
  center = true,
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`max-w-2xl mb-12 md:mb-16 ${
        center ? "text-center mx-auto" : "text-left"
      } ${className}`}
    >
      <span className="font-sans text-xs md:text-sm font-semibold tracking-[0.3em] text-rose-gold uppercase block mb-4">
        {eyebrow}
      </span>
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-charcoal leading-tight">
        {heading}{" "}
        {italicWord && (
          <span className="italic font-normal text-rose-gold-dark">
            {italicWord}.
          </span>
        )}
      </h2>
      <div
        className={`h-[1px] w-20 bg-rose-gold mt-6 ${
          center ? "mx-auto" : "mr-auto"
        }`}
      />
    </div>
  );
}
