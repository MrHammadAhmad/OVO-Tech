"use client";

import React from 'react';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { CheckCircle2, ShieldCheck, Cpu, ClipboardList } from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';

export default function NhsFrameworkPage() {
  const guidelines = [
    {
      title: "Information Governance (IG)",
      desc: "Ovotech software design prioritizes data privacy, ensuring patient identifiable data is processed within secure NHS networks in compliance with UK GDPR and DPA 2018.",
      icon: ShieldCheck
    },
    {
      title: "Clinical Risk Management",
      desc: "We ensure our solutions follow DCB0129 and DCB0160 standards for clinical risk management, integrating strict clinical safety checks overseen by healthcare professionals.",
      icon: CheckCircle2
    },
    {
      title: "Interoperability (EMIS & SystmOne)",
      desc: "Our automation interfaces are engineered to interact alongside standard GP clinical software registers, supporting document-routing and coding efficiency.",
      icon: Cpu
    },
    {
      title: "Procurement Standards",
      desc: "GP Practices and Integrated Care Boards (ICBs) can review our solution schemas for localized onboarding and procurement assessment protocols.",
      icon: ClipboardList
    }
  ];

  return (
    <div>
      {/* NHS Hero */}
      <section className="bg-slate-50 border-b border-brand-border py-16 sm:py-24">
        <Container className="max-w-4xl space-y-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-blue bg-brand-blue/10 rounded-full">
            NHS SYSTEM ALIGNMENT
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-brand-navy leading-tight">
            NHS Frameworks & Procurement Compliance
          </h1>
          <p className="text-sm sm:text-base text-slate-500 leading-relaxed max-w-3xl">
            At Ovotech, we build software workflows aligned with NHS governance, clinical risk, and procurement safety standards. Our tools assist GP practices to safely automate high-volume administrative tasks.
          </p>
        </Container>
      </section>

      {/* Compliance Pillars */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Left Column Text */}
            <div className="space-y-4">
              <span className="text-xs font-bold tracking-widest text-brand-blue uppercase">
                SAFETY & GOVERNANCE
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-brand-navy">
                Clinical safety and IG compliance built in
              </h2>
              <p className="text-xs text-slate-500 leading-relaxed max-w-md">
                We bridge high-performance software engineering with strict healthcare standards. Every pipeline is tested extensively to verify accuracy, audit trails, and data safety.
              </p>
              <div className="bg-slate-50 border border-brand-border p-4 rounded-xl text-xs space-y-2 max-w-md">
                <p className="font-bold text-brand-navy">Standard Compliance Practices Include:</p>
                <ul className="space-y-1 text-slate-600 pl-4 list-disc">
                  <li>Data processing inside secure NHS networks</li>
                  <li>Clinician-in-the-loop validation configurations</li>
                  <li>Full digital audit logs of processed records</li>
                </ul>
              </div>
            </div>

            {/* Right Column Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {guidelines.map((guide) => {
                const Icon = guide.icon;
                return (
                  <Card key={guide.title} hoverEffect={false} className="border-slate-100 p-5 space-y-3">
                    <div className="p-2 bg-brand-blue/10 text-brand-blue w-fit rounded-lg">
                      <Icon className="h-5 w-5 text-brand-cyan" />
                    </div>
                    <h3 className="text-sm font-bold text-brand-navy">{guide.title}</h3>
                    <p className="text-[11px] text-slate-500 leading-relaxed">{guide.desc}</p>
                  </Card>
                );
              })}
            </div>

          </div>
        </Container>
      </section>

      {/* CTA */}
      <CTASection />
    </div>
  );
}
