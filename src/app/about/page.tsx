"use client";

import React from 'react';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { ShieldCheck, Heart, BarChart3, Settings } from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';

export default function AboutPage() {
  const sections = [
    {
      title: "AI + Healthcare",
      desc: "Our machine learning models analyze patient texts and documents safely, bringing intelligent automation to standard administrative workflows.",
      icon: ShieldCheck
    },
    {
      title: "Automation",
      desc: "By combining RPA with clinical rules engines, we eliminate the need for manual copy-pasting, routing files instantly into records.",
      icon: Settings
    },
    {
      title: "Patient-Centric Healthcare",
      desc: "Unlocking new administrative efficiencies directly translates to more time back in the clinical day for direct patient contact and personalized care.",
      icon: Heart
    },
    {
      title: "Data-Driven Care",
      desc: "Empowering clinical teams to track indicators and clinical outcomes in real-time, preventing missed targets and ensuring timely care.",
      icon: BarChart3
    }
  ];

  return (
    <div>
      {/* About Hero */}
      <section className="bg-slate-50 border-b border-brand-border py-16 sm:py-24">
        <Container className="max-w-4xl space-y-6">
          <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-blue bg-brand-blue/10 rounded-full">
            ABOUT OVOTECH
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-brand-navy leading-tight">
            Building a more intelligent future for healthcare
          </h1>
          <p className="text-sm sm:text-base text-slate-500 leading-relaxed max-w-3xl">
            Ovotech&apos;s innovative AI healthcare software is designed to unlock new possibilities and enable healthcare providers to deliver personalized, data-driven care while advancing healthcare toward a more sustainable and patient-centric future.
          </p>
        </Container>
      </section>

      {/* Philosophy Pillars */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Pillars Intro */}
            <div className="space-y-4">
              <span className="text-xs font-bold tracking-widest text-brand-blue uppercase">
                OUR VALUES
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-brand-navy">
                Intelligent software built for clinicians
              </h2>
              <p className="text-xs text-slate-500 leading-relaxed max-w-md">
                We believe that administrative friction shouldn&apos;t hold back NHS surgeries. By engineering clinical-safety first automations, we build systems clinics can trust implicitly.
              </p>
            </div>

            {/* Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {sections.map((sect) => {
                const Icon = sect.icon;
                return (
                  <Card key={sect.title} hoverEffect={false} className="border-slate-100 p-5 space-y-3">
                    <div className="p-2 bg-brand-blue/10 text-brand-blue w-fit rounded-lg">
                      <Icon className="h-5 w-5 text-brand-cyan" />
                    </div>
                    <h3 className="text-sm font-bold text-brand-navy">{sect.title}</h3>
                    <p className="text-[11px] text-slate-500 leading-relaxed">{sect.desc}</p>
                  </Card>
                );
              })}
            </div>

          </div>
        </Container>
      </section>

      {/* Stats Block (Static Showcase) */}
      <section className="py-16 bg-slate-50 border-t border-b border-brand-border">
        <Container className="text-center max-w-xl space-y-4">
          <h2 className="text-2xl font-bold text-brand-navy">Company Statistics</h2>
          <p className="text-xs text-slate-500">
            Backed by years of deployment, working alongside NHS framework standards.
          </p>
          <div className="grid grid-cols-3 gap-4 pt-4">
            <div>
              <p className="text-3xl font-extrabold text-brand-navy">15</p>
              <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Years Experience</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-brand-navy">20+</p>
              <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">GP Practices</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-brand-navy">100+</p>
              <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Surgeries</p>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <CTASection />
    </div>
  );
}
