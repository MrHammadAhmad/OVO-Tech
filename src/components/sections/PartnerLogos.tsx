import React from 'react';

export function PartnerLogos() {
  const tags = [
    "SOLUTIONS",
    "TECHNOLOGY",
    "AI & AUTOMATION",
    "CUSTOMER SUPPORT",
    "WEB DEVELOPMENT",
    "STAFF AUGMENTATION",
    "OPERATIONS"
  ];

  return (
    <section className="bg-slate-50 border-b border-brand-border py-8 overflow-hidden select-none">
      <div className="text-center mb-6">
        <p className="text-[10px] sm:text-xs font-bold tracking-wider text-slate-500 uppercase">
          BUILT ON RELIABILITY, TRANSPARENCY & RESULTS
        </p>
      </div>
      
      <div className="marquee-container relative">
        {/* Fade overlays on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

        {/* Scrolling track */}
        <div className="animate-marquee-loop flex items-center">
          {/* Set 1 */}
          {tags.map((tag, idx) => (
            <span 
              key={`t1-${idx}`} 
              className="text-xs sm:text-sm font-extrabold tracking-wider text-[#0c1b33] uppercase mx-12 whitespace-nowrap"
            >
              {tag}
            </span>
          ))}
          {/* Set 2 */}
          {tags.map((tag, idx) => (
            <span 
              key={`t2-${idx}`} 
              className="text-xs sm:text-sm font-extrabold tracking-wider text-[#0c1b33] uppercase mx-12 whitespace-nowrap"
            >
              {tag}
            </span>
          ))}
          {/* Set 3 */}
          {tags.map((tag, idx) => (
            <span 
              key={`t3-${idx}`} 
              className="text-xs sm:text-sm font-extrabold tracking-wider text-[#0c1b33] uppercase mx-12 whitespace-nowrap"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
