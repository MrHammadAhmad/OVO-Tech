"use client";

import React from 'react';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Users, Mail } from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';

export default function LeadershipPage() {
  const team = [
    {
      name: "Dr. Noman Ehsan",
      role: "Founder & CEO",
      desc: "Directs strategy and clinical oversight for all RPA/AI healthcare automation pipelines."
    },
    {
      name: "Gokhan Karahan",
      role: "Tech Lead",
      desc: "Oversees core systems architecture, NHS framework interfaces, and clinical safety compliance engineering."
    },
    {
      name: "Eze Emejuru-Okre",
      role: "Office Manager",
      desc: "Manages business operations, clinical contract onboarding, and framework scheduling."
    },
    {
      name: "Wasif Ahmad",
      role: "Product Manager",
      desc: "Coordinates product lifecycles, user features, and clinic workflow integration assessments."
    }
  ];

  return (
    <div>
      {/* Leadership Hero */}
      <section className="bg-slate-50 border-b border-brand-border py-16 sm:py-24">
        <Container className="text-center max-w-2xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-blue bg-brand-blue/10 rounded-full mb-6">
            OVOTECH TEAM
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-brand-navy mb-6">
            The people behind Ovotech
          </h1>
          <p className="text-sm text-slate-500 max-w-lg mx-auto leading-relaxed">
            Bridging clinical expertise and advanced software engineering to build safe, secure, and resilient healthcare systems.
          </p>
        </Container>
      </section>

      {/* Team Cards Grid */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <Card 
                key={member.name}
                hoverEffect={false}
                className="flex flex-col justify-between p-6 border-slate-200 shadow-sm"
              >
                <div className="space-y-4">
                  {/* Visual Initial Mockup */}
                  <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-400">
                    <Users className="h-5 w-5" />
                  </div>
                  
                  <div>
                    <h3 className="text-base font-bold text-brand-navy">{member.name}</h3>
                    <p className="text-xs font-semibold text-brand-cyan uppercase tracking-wider mt-0.5">{member.role}</p>
                  </div>
                  
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {member.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-100 mt-6 flex items-center gap-2 text-slate-400 text-xs font-medium">
                  <Mail className="h-4 w-4" />
                  <span>Contact via Ovotech</span>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <CTASection />
    </div>
  );
}
