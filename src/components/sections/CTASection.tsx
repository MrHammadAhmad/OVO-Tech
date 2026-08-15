import React from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

export function CTASection() {
  return (
    <section className="bg-brand-navy py-16 lg:py-24 text-white relative overflow-hidden border-t border-b border-white/5">
      {/* Decorative vector background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <Container className="relative z-10 text-center max-w-4xl">
        <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-cyan bg-brand-cyan/10 rounded-full mb-6">
          GET STARTED
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
          Ready to transform your healthcare workflows?
        </h2>
        <p className="text-base sm:text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Discover how intelligent automation can streamline repetitive processes, eliminate administrative workload, and let your clinical team focus on patient outcomes.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/demo" variant="accent" size="lg" className="w-full sm:w-auto">
            Request a Demo
          </Button>
          <Button href="/solutions" variant="outline-white" size="lg" className="w-full sm:w-auto">
            Explore Solutions
          </Button>
        </div>
      </Container>
    </section>
  );
}
