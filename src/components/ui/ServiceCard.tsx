import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  previewList: string[];
}

export default function ServiceCard({
  id,
  title,
  description,
  image,
  previewList,
}: ServiceCardProps) {
  return (
    <div className="group relative flex flex-col justify-between bg-white border border-border-custom hover:border-rose-gold/50 transition-luxury duration-500 overflow-hidden">
      {/* Visual Area */}
      <div className="relative w-full h-[220px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 25vw"
        />
        <div className="absolute inset-0 bg-rose-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content Area */}
      <div className="p-6 md:p-8 flex-grow flex flex-col justify-between">
        <div>
          <h3 className="font-display text-xl tracking-[0.1em] text-charcoal uppercase mb-3">
            {title}
          </h3>
          <p className="font-sans text-xs text-soft-gray mb-6 leading-relaxed">
            {description}
          </p>

          <ul className="flex flex-col gap-2.5 mb-8 border-t border-border-custom/50 pt-4">
            {previewList.map((item, idx) => (
              <li
                key={idx}
                className="font-sans text-xs tracking-wider text-charcoal/80 flex items-center gap-2"
              >
                <span className="w-1 h-1 rounded-full bg-rose-gold/60" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <Link
          href={`/services#${id}`}
          className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-rose-gold hover:text-rose-gold-dark inline-flex items-center gap-2 group/btn mt-auto"
        >
          View Category
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
