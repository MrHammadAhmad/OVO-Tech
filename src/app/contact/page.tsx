"use client";

import React, { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Phone, Mail, MapPin, CheckCircle, RefreshCw } from 'lucide-react';

export default function ContactPage() {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    organization: '',
    jobTitle: '',
    areaOfInterest: 'General Enquiry',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const interests = [
    "Repeat Prescription",
    "Referral Automation",
    "Policy Updates",
    "Document Management",
    "Digital Assistant",
    "Medical Coding",
    "Quality & Outcomes Framework",
    "Prescription Automation",
    "Invoicing Automation",
    "General Enquiry"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      // Reset form
      setFormState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        organization: '',
        jobTitle: '',
        areaOfInterest: 'General Enquiry',
        message: ''
      });
    }, 1500);
  };

  return (
    <div>
      {/* Contact Hero */}
      <section className="bg-slate-50 border-b border-brand-border py-16 sm:py-24">
        <Container className="text-center max-w-2xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-blue bg-brand-blue/10 rounded-full mb-6">
            GET IN TOUCH
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-brand-navy mb-6">
            Let&apos;s build a better healthcare workflow
          </h1>
          <p className="text-sm text-slate-500 max-w-lg mx-auto leading-relaxed">
            Reach out to discuss your practice automations, custom integrations, or scheduling options.
          </p>
        </Container>
      </section>

      {/* Main Form/Details grid */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Contact Info */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <span className="text-xs font-bold tracking-widest text-brand-blue uppercase">
                  CONTACT DETAILS
                </span>
                <h2 className="text-2xl font-bold tracking-tight text-brand-navy">
                  Speak with our integration advisors
                </h2>
                <p className="text-xs text-slate-500 leading-relaxed max-w-md">
                  We are available during normal office hours (Monday - Friday, 9:00 AM - 5:00 PM) to walk through rules dashboards and sandbox deployments.
                </p>
              </div>

              <div className="space-y-6 text-sm text-slate-600">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-brand-blue/10 rounded-lg text-brand-blue mt-0.5">
                    <Phone className="h-5 w-5 text-brand-cyan" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-slate-400">Phone</span>
                    <strong className="text-brand-navy">0161 820 1123</strong>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-brand-blue/10 rounded-lg text-brand-blue mt-0.5">
                    <Mail className="h-5 w-5 text-brand-cyan" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-slate-400">NHS Services Email</span>
                    <strong className="text-brand-navy">ovotech.services@nhs.net</strong>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-brand-blue/10 rounded-lg text-brand-blue mt-0.5">
                    <Mail className="h-5 w-5 text-brand-cyan" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-slate-400">General Inquiry Email</span>
                    <strong className="text-brand-navy">info@ovotech.co.uk</strong>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-brand-blue/10 rounded-lg text-brand-blue mt-0.5">
                    <MapPin className="h-5 w-5 text-brand-cyan" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-slate-400">Office Location</span>
                    <strong className="text-brand-navy">
                      Tameside Business Park<br />
                      Manchester, UK<br />
                      M34 3QS
                    </strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Request Demo form */}
            <div className="lg:col-span-7">
              <Card hoverEffect={false} className="border-slate-200 p-8 shadow-sm">
                <h3 className="text-lg font-bold text-brand-navy mb-6">Request Demo & Enquiry Form</h3>
                
                {status === 'success' ? (
                  <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-2xl text-center space-y-3">
                    <CheckCircle className="h-10 w-10 text-brand-cyan mx-auto" />
                    <p className="text-sm font-bold text-emerald-800">Inquiry Submitted Successfully</p>
                    <p className="text-xs text-emerald-600">
                      Thank you for contacting Ovotech. A clinic automation advisor will review your request and reach out within 24 hours.
                    </p>
                    <Button onClick={() => setStatus('idle')} variant="outline" size="sm" className="mt-4">
                      Submit Another Inquiry
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6 text-xs">
                    
                    {/* Name fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] uppercase font-bold text-slate-400 mb-1">
                          First Name *
                        </label>
                        <input 
                          type="text" 
                          required
                          name="firstName"
                          value={formState.firstName}
                          onChange={handleInputChange}
                          className="w-full border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-brand-blue bg-slate-50"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] uppercase font-bold text-slate-400 mb-1">
                          Last Name *
                        </label>
                        <input 
                          type="text" 
                          required
                          name="lastName"
                          value={formState.lastName}
                          onChange={handleInputChange}
                          className="w-full border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-brand-blue bg-slate-50"
                        />
                      </div>
                    </div>

                    {/* Email / Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] uppercase font-bold text-slate-400 mb-1">
                          Work Email *
                        </label>
                        <input 
                          type="email" 
                          required
                          name="email"
                          value={formState.email}
                          onChange={handleInputChange}
                          className="w-full border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-brand-blue bg-slate-50"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] uppercase font-bold text-slate-400 mb-1">
                          Phone *
                        </label>
                        <input 
                          type="text" 
                          required
                          name="phone"
                          value={formState.phone}
                          onChange={handleInputChange}
                          className="w-full border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-brand-blue bg-slate-50"
                        />
                      </div>
                    </div>

                    {/* Org / Title */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] uppercase font-bold text-slate-400 mb-1">
                          Organization *
                        </label>
                        <input 
                          type="text" 
                          required
                          name="organization"
                          value={formState.organization}
                          onChange={handleInputChange}
                          className="w-full border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-brand-blue bg-slate-50"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] uppercase font-bold text-slate-400 mb-1">
                          Job Title *
                        </label>
                        <input 
                          type="text" 
                          required
                          name="jobTitle"
                          value={formState.jobTitle}
                          onChange={handleInputChange}
                          className="w-full border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-brand-blue bg-slate-50"
                        />
                      </div>
                    </div>

                    {/* Dropdown Area of interest */}
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-slate-400 mb-1">
                        Area of Interest *
                      </label>
                      <select 
                        name="areaOfInterest"
                        value={formState.areaOfInterest}
                        onChange={handleInputChange}
                        className="w-full border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-brand-blue bg-slate-50"
                      >
                        {interests.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-slate-400 mb-1">
                        Message *
                      </label>
                      <textarea 
                        name="message"
                        required
                        rows={4}
                        value={formState.message}
                        onChange={handleInputChange}
                        className="w-full border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-brand-blue bg-slate-50 resize-none"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      variant="primary" 
                      className="w-full py-2.5 font-bold"
                      disabled={status === 'loading'}
                    >
                      {status === 'loading' ? <RefreshCw className="h-4 w-4 animate-spin" /> : 'Send Inquiry'}
                    </Button>
                  </form>
                )}
              </Card>
            </div>

          </div>
        </Container>
      </section>

    </div>
  );
}
