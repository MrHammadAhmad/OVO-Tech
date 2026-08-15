"use client";

import React, { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';

export default function FAQPage() {
  const faqs = [
    {
      q: "What is Health RPA?",
      a: "Health RPA (Robotic Process Automation) refers to the application of automated software robots to complete high-volume, repetitive tasks within healthcare environments, such as transferring patient records, sorting documents, and checking prescription requests."
    },
    {
      q: "What is RPA?",
      a: "RPA stands for Robotic Process Automation. It is a technology that allows software programs (or 'bots') to replicate human interactions with digital systems to execute structured workflows automatically, eliminating manual copy-pasting and data-entry errors."
    },
    {
      q: "What healthcare workflows can Ovotech automate?",
      a: "Ovotech automates key clinical and operational workflows, including repeat prescription processing, GP referral routing, CCG/NICE policy scraping, patient document management, digital calendar assistants, medical coding parsing, QOF target monitoring, and invoice generation."
    },
    {
      q: "How can Ovotech help GP practices?",
      a: "Ovotech helps GP practices by reducing administrative workloads, eliminating manual data entry mistakes, clearing patient backlogs, and ensuring QOF points are tracked proactively, enabling staff to focus on direct patient care."
    },
    {
      q: "What solutions does Ovotech provide?",
      a: "We offer 9 specialized healthcare automation systems: Repeat Prescription, Referral Automation, Policy Updates, Document Management (Docman), Digital Assistant, Medical Coding, Quality & Outcomes Framework (QOF), Prescription Automation, and Invoicing Automation."
    },
    {
      q: "Can Ovotech solutions be customized?",
      a: "Yes. Our systems are built around your custom rules and workflows. Clinics can request customizations to match local clinical pathways and routing preferences."
    },
    {
      q: "How can I request a demo?",
      a: "You can request a demo by visiting our /demo page and submitting your email, or by filling out the inquiry form on our /contact page."
    },
    {
      q: "How can I contact Ovotech?",
      a: "You can call us directly on 0161 820 1123, email ovotech.services@nhs.net or info@ovotech.co.uk, or send an inquiry via our contact form."
    }
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggleFAQ = (idx: number) => {
    if (openIdx === idx) {
      setOpenIdx(null);
    } else {
      setOpenIdx(idx);
    }
  };

  return (
    <div>
      {/* FAQ Hero */}
      <section className="bg-slate-50 border-b border-brand-border py-16 sm:py-24">
        <Container className="text-center max-w-2xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-blue bg-brand-blue/10 rounded-full mb-6">
            FAQ HUB
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-brand-navy mb-6">
            Questions, Answered
          </h1>
          <p className="text-sm text-slate-500 max-w-lg mx-auto leading-relaxed">
            Find answers to common questions about Health RPA, compliance, and how Ovotech optimizes GP workflows.
          </p>
        </Container>
      </section>

      {/* Accordion List */}
      <section className="py-20 bg-white">
        <Container className="max-w-3xl">
          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div 
                  key={idx}
                  className="border border-brand-border rounded-xl bg-white overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFAQ(idx)}
                    className="w-full flex items-center justify-between p-5 text-left font-bold text-brand-navy text-sm sm:text-base hover:bg-slate-50 transition-colors"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="h-5 w-5 text-brand-cyan flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-slate-400 flex-shrink-0" />
                    )}
                  </button>
                  
                  {isOpen && (
                    <div className="p-5 border-t border-brand-border bg-slate-50/50 text-xs sm:text-sm text-slate-500 leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <CTASection />
    </div>
  );
}
