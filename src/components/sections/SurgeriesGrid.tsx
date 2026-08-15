import React from 'react';
import { Container } from '../ui/Container';

export function SurgeriesGrid() {
  const partners = [
    { name: "Mediscan", type: "Clinical Diagnostics" },
    { name: "IHMG", type: "Healthcare Management" },
    { name: "iTanz", type: "Digital Health Solutions" },
    { name: "NHS", type: "National Health Service", isNhs: true }
  ];

  return (
    <section className="bg-white border-t border-b border-brand-border py-12 select-none">
      <Container>
        <p className="text-center text-xs font-semibold tracking-widest text-slate-400 uppercase mb-8">
          Surgeries & Healthcare Partners We Work With
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {partners.map((partner) => (
            <div 
              key={partner.name} 
              className="flex flex-col items-center justify-center w-full max-w-[180px] p-4 rounded-2xl border border-slate-100 bg-slate-50/40 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-md hover:bg-white hover:border-brand-blue/30 transition-all duration-300 hover:scale-[1.03]"
            >
              <div className="flex items-center space-x-1.5">
                {partner.isNhs ? (
                  <div className="bg-[#005EB8] text-white px-2.5 py-0.5 font-bold italic tracking-tighter text-sm sm:text-base rounded-md shadow-sm">
                    NHS
                  </div>
                ) : (
                  <span className="text-base sm:text-lg font-black tracking-tight text-slate-800">
                    {partner.name}
                  </span>
                )}
              </div>
              <span className="text-[9px] text-slate-500 mt-1.5 uppercase tracking-wider font-semibold text-center">
                {partner.type}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
