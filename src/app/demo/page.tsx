"use client";

import React, { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Play, Sparkles, CheckCircle, RefreshCw } from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';

export default function DemoPage() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  return (
    <div>
      {/* Demo Hero */}
      <section className="bg-slate-50 border-b border-brand-border py-16 sm:py-24">
        <Container className="text-center max-w-2xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-blue bg-brand-blue/10 rounded-full mb-6">
            PRODUCT WALKTHROUGH
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-brand-navy mb-6">
            See healthcare automation in action
          </h1>
          <p className="text-sm text-slate-500 max-w-lg mx-auto leading-relaxed">
            Explore how Ovotech RPA processes clinical records and document flows natively.
          </p>
        </Container>
      </section>

      {/* Video Placeholder Area */}
      <section className="py-20 bg-white">
        <Container className="max-w-4xl space-y-12">
          
          {/* Custom Polished Video Player Simulation */}
          <div className="relative aspect-video bg-brand-navy rounded-2xl border border-white/10 overflow-hidden shadow-2xl group flex flex-col items-center justify-center">
            {/* Dark Graphic Background */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="videogrid" width="30" height="30" patternUnits="userSpaceOnUse">
                    <circle cx="1" cy="1" r="1" fill="#fff" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#videogrid)" />
              </svg>
            </div>

            {/* Glowing blur */}
            <div className="absolute w-60 h-60 bg-brand-cyan/20 rounded-full blur-3xl" />

            {/* Simulated UI Card Overlay */}
            <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md border border-white/10 text-white rounded-lg px-3 py-1.5 text-[10px] uppercase font-bold tracking-wider">
              Ovotech Demo Video Walkthrough
            </div>

            {/* Large Play Button */}
            <button 
              onClick={() => alert("Simulating play walkthrough video. In a production build, this triggers the video streaming widget.")}
              className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 bg-brand-cyan hover:bg-brand-blue text-white rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:scale-105"
            >
              <Play className="h-6 sm:h-8 w-6 sm:w-8 fill-current translate-x-0.5" />
            </button>
            
            <p className="text-white/60 text-xs mt-4 relative z-10">
              Click to preview system capabilities (2:45 mins)
            </p>
          </div>

          {/* Product Preview Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs font-bold tracking-widest text-brand-blue uppercase">
                WHAT YOU WILL SEE
              </span>
              <h2 className="text-2xl font-bold tracking-tight text-brand-navy">
                Secure clinical data ingestion and mapping
              </h2>
              <ul className="space-y-3.5 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4.5 w-4.5 text-brand-cyan flex-shrink-0 mt-0.5" />
                  <span>Real-time reading of GP letters and converting text to SNOMED CT clinical codes.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4.5 w-4.5 text-brand-cyan flex-shrink-0 mt-0.5" />
                  <span>Interactive routing validation showing safety rules evaluated by GP Clinician-in-the-loop.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4.5 w-4.5 text-brand-cyan flex-shrink-0 mt-0.5" />
                  <span>Automated PDF document routing into matching patient folders.</span>
                </li>
              </ul>
            </div>

            {/* Sign Up / Inquiry Card */}
            <Card hoverEffect={false} className="border-slate-200 p-8 space-y-6">
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-brand-navy">Request a Sandbox Login</h3>
                <p className="text-xs text-slate-500">
                  Submit your work email to receive access to the Ovotech interactive demo space.
                </p>
              </div>

              {status === 'success' ? (
                <div className="bg-emerald-50 border border-emerald-100 p-4 rounded-xl text-center space-y-2">
                  <CheckCircle className="h-8 w-8 text-brand-cyan mx-auto" />
                  <p className="text-xs font-bold text-emerald-800">Check Your Inbox</p>
                  <p className="text-[10px] text-emerald-600">We have sent instructions to access the sandbox environment.</p>
                </div>
              ) : (
                <form onSubmit={handleSignUp} className="space-y-4">
                  <div>
                    <label className="block text-[10px] uppercase font-bold text-slate-400 mb-1">
                      Work Email
                    </label>
                    <input 
                      type="email" 
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. name@surgery.nhs.net"
                      className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-brand-blue bg-slate-50"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    variant="primary" 
                    className="w-full text-xs py-2.5 font-bold"
                    disabled={status === 'loading'}
                  >
                    {status === 'loading' ? <RefreshCw className="h-4 w-4 animate-spin" /> : 'Sign Up'}
                  </Button>
                </form>
              )}

              <div className="text-center pt-2 border-t border-slate-100">
                <a 
                  href="/contact" 
                  className="text-xs font-semibold text-brand-blue hover:text-brand-cyan transition-colors"
                >
                  Request a Personalized Demo &rarr;
                </a>
              </div>
            </Card>
          </div>

        </Container>
      </section>

      {/* CTA */}
      <CTASection />
    </div>
  );
}
