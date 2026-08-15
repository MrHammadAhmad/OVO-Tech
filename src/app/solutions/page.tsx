"use client";

import React from 'react';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Activity, Cpu, CheckCircle } from 'lucide-react';
import { solutions } from '@/lib/data/solutions';
import { CTASection } from '@/components/sections/CTASection';

export default function SolutionsCatalogPage() {
  return (
    <div>
      {/* Catalog Hero */}
      <section className="bg-slate-50 border-b border-brand-border py-16 sm:py-24">
        <Container className="text-center max-w-3xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-blue bg-brand-blue/10 rounded-full mb-6">
            PRODUCT CATALOG
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-brand-navy leading-tight mb-6">
            Healthcare automation built around your workflow
          </h1>
          <p className="text-sm sm:text-base text-slate-500 max-w-xl mx-auto leading-relaxed">
            Discover our collection of RPA and AI tools designed to integrate with NHS systems, eliminate repetitive admin tasks, and guarantee clinical safety.
          </p>
        </Container>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((item, idx) => (
              <Card
                key={item.slug}
                onClick={() => window.location.href = `/solutions/${item.slug}`}
                className="flex flex-col justify-between p-8 border-slate-200 h-full min-h-[300px] hover:border-brand-blue transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">
                      SYSTEM 0{idx + 1}
                    </span>
                    <div className="p-1.5 bg-brand-cyan/10 rounded text-brand-cyan">
                      <Cpu className="h-4 w-4" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-brand-navy group-hover:text-brand-blue transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                
                <div className="pt-6 border-t border-slate-100 flex items-center justify-between mt-auto">
                  <span className="text-[10px] text-slate-400 font-medium">
                    Proof: {item.proof}
                  </span>
                  <span className="text-xs font-semibold text-brand-blue flex items-center gap-1">
                    {item.ctaText} &rarr;
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Extra Trust Section */}
      <section className="py-16 bg-slate-50 border-t border-brand-border">
        <Container className="text-center max-w-3xl">
          <h2 className="text-2xl font-bold text-brand-navy mb-4">
            Designed for NHS GP Practices & Clinics
          </h2>
          <p className="text-xs text-slate-500 max-w-lg mx-auto mb-8">
            All systems conform to the highest UK standards for clinical risk management, information governance (IG), and security audit trails.
          </p>
          <div className="flex justify-center gap-8 text-xs text-slate-500 font-semibold">
            <span className="flex items-center gap-1.5">
              <CheckCircle className="h-4.5 w-4.5 text-brand-cyan" /> 100% Secure Audits
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="h-4.5 w-4.5 text-brand-cyan" /> Data Protection (PDPA)
            </span>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <CTASection />
    </div>
  );
}
