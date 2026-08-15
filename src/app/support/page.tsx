"use client";

import React from 'react';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Terminal, Shield, MessageSquare, Calendar, Sliders } from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';

export default function SupportPage() {
  return (
    <div>
      {/* Support Hero */}
      <section className="bg-slate-50 border-b border-brand-border py-16 sm:py-24">
        <Container className="text-center max-w-2xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-blue bg-brand-blue/10 rounded-full mb-6">
            SUPPORT DESK
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-brand-navy mb-6">
            Support when you need it
          </h1>
          <p className="text-sm text-slate-500 max-w-lg mx-auto leading-relaxed">
            Bridging technical excellence and clinical safety to maintain reliable clinical automations.
          </p>
        </Container>
      </section>

      {/* Support Cards Grid */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Technical Support Card */}
            <Card hoverEffect={false} className="p-8 border-slate-200 flex flex-col justify-between h-full space-y-6">
              <div className="space-y-4">
                <div className="p-3 bg-brand-blue/10 text-brand-blue w-fit rounded-xl">
                  <Terminal className="h-6 w-6 text-brand-cyan" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-navy">Technical Support</h3>
                  <p className="text-xs text-brand-cyan font-semibold uppercase tracking-wider mt-0.5">
                    Professional Software Developers
                  </p>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Get direct access to Ovotech systems developers. We assist with pipeline custom configurations, database synchronization, GP registry mappings, and system error troubleshooting.
                </p>
              </div>

              <div className="space-y-3 pt-6 border-t border-slate-100">
                <Button href="/contact" variant="primary" className="w-full text-xs flex items-center justify-center gap-2">
                  <MessageSquare className="h-4 w-4" /> Contact Support
                </Button>
                <Button href="/contact" variant="outline" className="w-full text-xs flex items-center justify-center gap-2">
                  <Sliders className="h-4 w-4" /> Request Customisation
                </Button>
              </div>
            </Card>

            {/* Healthcare Support Card */}
            <Card hoverEffect={false} className="p-8 border-slate-200 flex flex-col justify-between h-full space-y-6">
              <div className="space-y-4">
                <div className="p-3 bg-brand-blue/10 text-brand-blue w-fit rounded-xl">
                  <Shield className="h-6 w-6 text-brand-cyan" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-navy">Healthcare Support</h3>
                  <p className="text-xs text-brand-cyan font-semibold uppercase tracking-wider mt-0.5">
                    Consultant Medical Professionals
                  </p>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Our clinical governance team is composed of licensed doctors and consultants. We review and validate all clinical rules, safety thresholds, and DCB compliance criteria.
                </p>
              </div>

              <div className="space-y-3 pt-6 border-t border-slate-100">
                <Button href="/contact" variant="dark" className="w-full text-xs flex items-center justify-center gap-2">
                  <Calendar className="h-4 w-4" /> Schedule a Meeting
                </Button>
              </div>
            </Card>

          </div>
        </Container>
      </section>

      {/* Trust Details */}
      <section className="py-16 bg-slate-50 border-t border-brand-border text-center">
        <Container className="max-w-xl">
          <h4 className="text-sm font-bold text-brand-navy mb-2">Emergency Clinical Escalation</h4>
          <p className="text-[11px] text-slate-500 leading-relaxed">
            For urgent system disruptions in live NHS operations, please contact the dedicated clinical operations line at <strong>0161 820 1123</strong> or submit a high-priority ticket via <strong>ovotech.services@nhs.net</strong>.
          </p>
        </Container>
      </section>

      {/* CTA */}
      <CTASection />
    </div>
  );
}
