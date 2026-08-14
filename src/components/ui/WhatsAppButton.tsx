"use client";

import React from "react";

export default function WhatsAppButton() {
  const whatsappNumber = "919324653663";
  const defaultMessage = "Hi Allure Salon, I'd like to inquire about booking an appointment.";
  const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center group">
      {/* Tooltip text */}
      <span className="mr-3 bg-charcoal text-cream text-xs font-sans tracking-widest uppercase py-2 px-4 shadow-lg opacity-0 translate-x-2 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 border border-rose-gold/20 select-none hidden md:inline-block">
        Book on WhatsApp
      </span>

      {/* Button wrapper with pulsing glow */}
      <a
        href={waUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Book on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl transition-transform duration-300 hover:scale-110 active:scale-95"
      >
        {/* Pulsing ring outer effect */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none" />

        {/* WhatsApp Official SVG Icon */}
        <svg
          className="w-8 h-8 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.863-9.736.001-2.599-1.01-5.048-2.848-6.888C16.65 2.141 14.205 1.128 11.61 1.128c-5.442 0-9.866 4.372-9.87 9.738 0 1.764.47 3.487 1.366 5.022L2.1 21.847l6.547-1.711zM17.18 14.346c-.3-.15-1.77-.875-2.046-.975-.276-.1-.477-.15-.677.15-.2.3-.775.975-.95 1.175-.177.2-.35.225-.65.075-3.05-1.522-4.52-2.28-5.795-4.475-.325-.562-.05-.862.227-1.137.25-.25.55-.637.625-.762.075-.125.037-.25-.013-.35-.05-.1-.477-1.15-.654-1.575-.172-.412-.36-.356-.477-.362l-.4-.008c-.138 0-.362.05-.55.263-.188.213-.725.713-.725 1.738s.738 2.013.838 2.15c.1.137 1.45 2.225 3.51 3.1 2.062.875 2.062.587 2.437.55.375-.037 1.77-.725 2.025-1.425.25-.7.25-1.3 1.75-1.425z" />
        </svg>
      </a>
    </div>
  );
}
