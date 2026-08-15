"use client";

import React, { use, useState } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Check, 
  Play, 
  Database, 
  FileCode, 
  Layers, 
  CheckCircle, 
  AlertCircle, 
  UserCheck, 
  Send,
  MessageSquare,
  FileText,
  BarChart3,
  Calendar,
  Sparkles,
  RefreshCw
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { solutions } from '@/lib/data/solutions';
import { CTASection } from '@/components/sections/CTASection';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function ProductDetailPage({ params }: PageProps) {
  const { slug } = use(params);
  const solution = solutions.find((s) => s.slug === slug);
  
  // Interactive Simulator States
  const [simState, setSimState] = useState<'idle' | 'running' | 'success'>('idle');
  const [docUploaded, setDocUploaded] = useState(false);
  const [extractedData, setExtractedData] = useState<any>(null);
  const [chatMessages, setChatMessages] = useState<Array<{ sender: 'user' | 'bot'; text: string }>>([
    { sender: 'bot', text: "Hello! I am your clinic's digital assistant. How can I help you book or manage your appointments today?" }
  ]);
  const [userInput, setUserInput] = useState('');

  if (!solution) {
    return (
      <Container className="py-20 text-center">
        <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-brand-navy">Solution Not Found</h1>
        <p className="text-slate-500 mt-2">The solution you are looking for does not exist.</p>
        <Link href="/solutions" className="text-brand-blue hover:underline inline-block mt-4">
          &larr; Back to Solutions Catalog
        </Link>
      </Container>
    );
  }

  // Action Simulators
  const runPrescriptionVerification = () => {
    setSimState('running');
    setTimeout(() => {
      setSimState('success');
    }, 2000);
  };

  const handleDocUpload = () => {
    setSimState('running');
    setTimeout(() => {
      setDocUploaded(true);
      setSimState('success');
    }, 1500);
  };

  const runMedicalCodingAI = () => {
    setSimState('running');
    setTimeout(() => {
      setExtractedData({
        diagnosis: "Essential Hypertension",
        snomedCode: "38341003",
        icd10Code: "I10",
        confidence: "99.4%"
      });
      setSimState('success');
    }, 2000);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    const newMsgs: Array<{ sender: 'user' | 'bot'; text: string }> = [
      ...chatMessages, 
      { sender: 'user' as const, text: userInput }
    ];
    setChatMessages(newMsgs);
    setUserInput('');

    setTimeout(() => {
      let botResponse = "I can help with that. Let me look up open appointments in the clinic register.";
      if (userInput.toLowerCase().includes("book") || userInput.toLowerCase().includes("appointment")) {
        botResponse = "I have found 2 open slots tomorrow for Dr. Jenkins: 10:00 AM and 2:30 PM. Would you like me to book one?";
      } else if (userInput.toLowerCase().includes("10")) {
        botResponse = "Excellent. I have booked your appointment with Dr. Jenkins for tomorrow at 10:00 AM. A confirmation text has been sent to your phone.";
      }
      setChatMessages([...newMsgs, { sender: 'bot' as const, text: botResponse }]);
    }, 1000);
  };

  // Render Custom UI Software View based on dynamic slug
  const renderProductUI = () => {
    switch (solution.slug) {
      case "repeat-prescription":
      case "prescription-automation":
        return (
          <div className="bg-[#080d16] text-white p-6 rounded-2xl border border-white/10 space-y-6">
            <div className="flex items-center justify-between border-b border-white/5 pb-4">
              <span className="text-xs font-bold text-brand-cyan tracking-wider">PRESCRIPTION VERIFICATION ENGINE</span>
              <span className="text-[10px] text-slate-400 font-mono">EPS SYNC: ONLINE</span>
            </div>

            <div className="space-y-3.5">
              <div className="p-3 bg-white/5 rounded-xl border border-white/5 flex items-center justify-between text-xs">
                <div>
                  <p className="font-semibold text-slate-200">Patient: Arthur Pendragon</p>
                  <p className="text-[10px] text-slate-400">Medication: Metformin 500mg (Repeat)</p>
                </div>
                <span className="bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded text-[10px] font-bold">
                  VALIDATED
                </span>
              </div>
              <div className="p-3 bg-white/5 rounded-xl border border-white/5 flex items-center justify-between text-xs">
                <div>
                  <p className="font-semibold text-slate-200">Patient: Guinevere Cole</p>
                  <p className="text-[10px] text-slate-400">Medication: Atorvastatin 20mg (Repeat)</p>
                </div>
                {simState === 'success' ? (
                  <span className="bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded text-[10px] font-bold">
                    VALIDATED
                  </span>
                ) : simState === 'running' ? (
                  <span className="bg-amber-500/10 text-amber-400 px-2 py-0.5 rounded text-[10px] font-bold animate-pulse">
                    VERIFYING...
                  </span>
                ) : (
                  <span className="bg-slate-500/25 text-slate-400 px-2 py-0.5 rounded text-[10px] font-semibold">
                    PENDING CHECK
                  </span>
                )}
              </div>
            </div>

            {simState !== 'success' ? (
              <button 
                onClick={runPrescriptionVerification}
                disabled={simState === 'running'}
                className="w-full bg-brand-cyan hover:bg-brand-blue text-white text-xs font-semibold py-2.5 rounded-xl transition-all flex items-center justify-center gap-1.5"
              >
                {simState === 'running' ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : <Play className="h-3.5 w-3.5" />}
                Run Clinical Rule Check
              </button>
            ) : (
              <div className="bg-emerald-500/10 border border-emerald-500/20 p-3 rounded-xl flex items-center gap-2 text-xs text-emerald-400">
                <CheckCircle className="h-4.5 w-4.5" />
                <span>Verification check complete. 100% accuracy matched. Files ready for clinician signature.</span>
              </div>
            )}
          </div>
        );

      case "referral-automation":
        return (
          <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <span className="text-xs font-bold text-brand-navy uppercase tracking-wider">Referral Pipeline Tracker</span>
              <span className="text-[10px] text-slate-400 font-mono">ID: REF-92931</span>
            </div>

            <div className="relative">
              <div className="absolute top-1/2 left-2 right-2 h-0.5 bg-slate-100 -translate-y-1/2 -z-10" />
              <div className="grid grid-cols-5 gap-1 text-center relative z-10">
                {[
                  { name: "Initiated", ok: true },
                  { name: "Validation", ok: true },
                  { name: "NLP Match", ok: true },
                  { name: "Routing", ok: simState === 'success' },
                  { name: "Finalized", ok: false }
                ].map((step, idx) => (
                  <div key={step.name} className="flex flex-col items-center">
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold ${
                      step.ok ? 'bg-brand-cyan text-white' : 'bg-slate-100 text-slate-400 border border-slate-200'
                    }`}>
                      {idx + 1}
                    </div>
                    <span className="text-[9px] text-slate-500 mt-1 font-medium">{step.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {simState !== 'success' ? (
              <Button onClick={() => setSimState('success')} variant="primary" className="w-full text-xs">
                Simulate Workflow Processing
              </Button>
            ) : (
              <div className="bg-emerald-50 border border-emerald-100 p-3 rounded-xl text-xs text-emerald-800 flex items-center gap-2">
                <CheckCircle className="h-4.5 w-4.5 text-brand-cyan" />
                <span>Referral processing complete. 50% of manual workloads eliminated. Logs dispatched to NHS Hub.</span>
              </div>
            )}
          </div>
        );

      case "policy-updates":
        return (
          <div className="bg-[#080d16] text-white p-6 rounded-2xl border border-white/10 space-y-6">
            <div className="flex items-center justify-between border-b border-white/5 pb-4">
              <span className="text-xs font-bold text-brand-cyan tracking-wider">PORTAL SCRAPER LOGGER</span>
              <span className="text-[10px] text-slate-400 font-mono">STATUS: SCANNING</span>
            </div>

            <div className="space-y-3.5">
              <div className="p-3 bg-white/5 rounded-xl text-xs border border-white/5">
                <div className="flex justify-between font-semibold text-slate-200 mb-1">
                  <span>NHS Guidance Update</span>
                  <span className="text-brand-cyan">NICE Portal</span>
                </div>
                <p className="text-[10px] text-slate-400">Scanned: 10 mins ago • Changed: Section 3 (Hypertension Guidelines)</p>
              </div>
              <div className="p-3 bg-white/5 rounded-xl text-xs border border-white/5">
                <div className="flex justify-between font-semibold text-slate-200 mb-1">
                  <span>CCG Prescribing Framework</span>
                  <span className="text-brand-cyan">Local CCG</span>
                </div>
                <p className="text-[10px] text-slate-400">Scanned: 1 hour ago • Changed: None</p>
              </div>
            </div>

            <button 
              onClick={() => {
                alert("Triggered real-time scrapers scan. All 5 sources parsed.");
              }}
              className="w-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold py-2 rounded-xl transition-all"
            >
              Scan Sources Now
            </button>
          </div>
        );

      case "document-management":
        return (
          <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <span className="text-xs font-bold text-brand-navy uppercase tracking-wider">DOCMAN AUTOMATION ENGINE</span>
              <span className="text-[10px] text-slate-400">GP Practices Synced</span>
            </div>

            {!docUploaded ? (
              <div className="border border-dashed border-slate-200 p-8 rounded-xl text-center space-y-3">
                <FileText className="h-8 w-8 text-slate-300 mx-auto" />
                <p className="text-xs text-slate-500">Simulate GP Letter PDF Upload</p>
                <button 
                  onClick={handleDocUpload}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-800 text-[10px] font-bold px-3 py-1.5 rounded-full"
                >
                  Upload Test Letter
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-xs space-y-2">
                  <p className="font-bold text-brand-navy">Document Processed Successfully</p>
                  <p className="text-slate-500 text-[10px]">Type: Discharge Letter</p>
                  <div className="grid grid-cols-2 gap-2 text-[10px] pt-1">
                    <div>
                      <span className="block text-slate-400">Recipient Assigned</span>
                      <span className="font-semibold text-brand-navy">Doctor (Lead GP)</span>
                    </div>
                    <div>
                      <span className="block text-slate-400">File Action</span>
                      <span className="font-semibold text-brand-navy">Save to Patient Folder</span>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={() => setDocUploaded(false)}
                  className="text-xs text-brand-blue font-semibold hover:underline"
                >
                  Upload Another Document
                </button>
              </div>
            )}
          </div>
        );

      case "digital-assistant":
        return (
          <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-4 max-w-sm mx-auto shadow-md">
            <div className="flex items-center space-x-2 border-b border-slate-100 pb-3">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold text-brand-navy">AI Clinical Assistant Chatbot</span>
            </div>

            <div className="h-64 overflow-y-auto border border-slate-100 rounded-xl p-3 bg-slate-50 space-y-3.5 text-xs scrollbar-thin">
              {chatMessages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-2.5 rounded-2xl ${
                    msg.sender === 'user' 
                      ? 'bg-brand-navy text-white rounded-tr-none' 
                      : 'bg-white text-slate-700 border border-slate-100 rounded-tl-none shadow-sm'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            <form onSubmit={handleSendMessage} className="flex gap-2">
              <input 
                type="text" 
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Type 'book appointment'..."
                className="flex-grow border border-slate-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-brand-blue"
              />
              <button type="submit" className="bg-brand-navy hover:bg-brand-dark text-white p-2 rounded-xl">
                <Send className="h-3.5 w-3.5" />
              </button>
            </form>
          </div>
        );

      case "medical-coding":
        return (
          <div className="bg-[#080d16] text-white p-6 rounded-2xl border border-white/10 space-y-6">
            <div className="flex items-center justify-between border-b border-white/5 pb-4">
              <span className="text-xs font-bold text-brand-cyan tracking-wider">AI MEDICAL CODING SCANNER</span>
              <span className="text-[10px] text-slate-400">NLP MODEL 3.5</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/5 p-4 rounded-xl border border-white/5 space-y-2 text-[11px]">
                <p className="font-bold text-brand-cyan">Source Patient Letter Text</p>
                <p className="text-slate-300 italic leading-relaxed">
                  &quot;The patient presents with chronic migraine symptoms. Prescribed 50mg of Sumatriptan for acute episodes.&quot;
                </p>
              </div>

              <div className="bg-white/5 p-4 rounded-xl border border-white/5 space-y-2.5 text-[11px]">
                <p className="font-bold text-slate-200">Extracted Clinical Entity</p>
                
                {extractedData ? (
                  <div className="space-y-1 text-[10px] text-slate-300">
                    <p><span className="text-slate-500">Diagnosis:</span> <strong className="text-white">{extractedData.diagnosis}</strong></p>
                    <p><span className="text-slate-500">SNOMED CT:</span> <strong className="text-brand-cyan font-mono">{extractedData.snomedCode}</strong></p>
                    <p><span className="text-slate-500">ICD-10 Code:</span> <strong className="text-brand-cyan font-mono">{extractedData.icd10Code}</strong></p>
                    <p><span className="text-slate-500">Confidence:</span> <strong className="text-emerald-400">{extractedData.confidence}</strong></p>
                  </div>
                ) : (
                  <p className="text-slate-500 italic">Click scan below to extract entity codes.</p>
                )}
              </div>
            </div>

            {simState !== 'success' ? (
              <button 
                onClick={runMedicalCodingAI}
                disabled={simState === 'running'}
                className="w-full bg-brand-cyan hover:bg-brand-blue text-white text-xs font-semibold py-2.5 rounded-xl transition-all"
              >
                {simState === 'running' ? 'Scanning with NLP...' : 'Simulate AI NLP Scan'}
              </button>
            ) : (
              <div className="bg-emerald-500/10 border border-emerald-500/20 p-3 rounded-xl flex items-center gap-2 text-xs text-emerald-400">
                <CheckCircle className="h-4.5 w-4.5" />
                <span>AI clinical extraction successful. Codes recorded with 99.4% precision accuracy.</span>
              </div>
            )}
          </div>
        );

      case "qoaf":
        return (
          <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <span className="text-xs font-bold text-brand-navy uppercase tracking-wider">QOF Performance Dashboard</span>
              <span className="text-[10px] text-slate-400">NHS GP Practice Demo</span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="border border-slate-100 p-3 rounded-xl">
                <span className="block text-[10px] text-slate-400 uppercase font-medium">QOF Points Target</span>
                <span className="text-xl font-bold text-brand-navy">945 / 1000</span>
              </div>
              <div className="border border-slate-100 p-3 rounded-xl">
                <span className="block text-[10px] text-slate-400 uppercase font-medium">Revenue Capture Opportunity</span>
                <span className="text-xl font-bold text-brand-cyan">£12,490</span>
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold text-slate-800">Unmet Indicators Detected</span>
              <div className="text-[10px] space-y-1.5 text-slate-500">
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span>HYP-001 (Blood Pressure Check)</span>
                  <span className="text-red-500 font-bold">14 Patients Missing</span>
                </div>
                <div className="flex justify-between py-1">
                  <span>DM-002 (Diabetes HbA1c Check)</span>
                  <span className="text-red-500 font-bold">6 Patients Missing</span>
                </div>
              </div>
            </div>
            
            <button 
              onClick={() => alert("Notification campaigns scheduled to outstanding patient registries.")}
              className="w-full bg-brand-navy hover:bg-brand-dark text-white text-xs font-semibold py-2.5 rounded-xl transition-all"
            >
              Trigger Patient Comms (SMS / Email)
            </button>
          </div>
        );

      case "invoicing-automation":
        return (
          <div className="bg-[#080d16] text-white p-6 rounded-2xl border border-white/10 space-y-6">
            <div className="flex items-center justify-between border-b border-white/5 pb-4">
              <span className="text-xs font-bold text-brand-cyan tracking-wider">INVOICE FILE COMPILER</span>
              <span className="text-[10px] text-slate-400">EXPORT FORMAT: XML/CSV</span>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between text-xs py-1 border-b border-white/5">
                <span className="text-slate-400">Claim 492: General Diagnostics</span>
                <span className="text-emerald-400">Ready</span>
              </div>
              <div className="flex justify-between text-xs py-1 border-b border-white/5">
                <span className="text-slate-400">Claim 493: Specialist Clinic Referral</span>
                <span className="text-emerald-400">Ready</span>
              </div>
            </div>

            {simState !== 'success' ? (
              <button 
                onClick={() => setSimState('success')}
                className="w-full bg-brand-cyan hover:bg-brand-blue text-white text-xs font-semibold py-2.5 rounded-xl transition-all"
              >
                Compile Invoices (Export XML)
              </button>
            ) : (
              <div className="bg-emerald-500/10 border border-emerald-500/20 p-3 rounded-xl text-xs text-emerald-400 text-center">
                <span>Invoices exported successfully: <strong>ovotech_billing_export.xml</strong></span>
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div>
      {/* Product Hero */}
      <section className="bg-slate-50 border-b border-brand-border py-16 sm:py-24 relative overflow-hidden">
        <Container>
          <Link href="/solutions" className="inline-flex items-center gap-1 text-xs font-semibold text-brand-blue hover:text-brand-cyan mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to Solutions Catalog
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Copy */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-blue bg-brand-blue/10 rounded-full">
                AUTOMATION SYSTEM
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-brand-navy leading-tight">
                {solution.title}
              </h1>
              <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
                {solution.description}
              </p>
              
              <div className="bg-white border border-brand-border p-4 rounded-xl flex items-center gap-3">
                <span className="text-xs font-bold text-slate-400">VERIFIED CLAIM:</span>
                <span className="text-sm font-bold text-brand-navy">{solution.proof}</span>
              </div>
            </div>

            {/* Right software UI view */}
            <div className="lg:col-span-5 relative">
              <div className="absolute -inset-1 bg-gradient-to-tr from-brand-cyan to-brand-blue opacity-5 rounded-2xl blur-lg" />
              <div className="relative">
                {renderProductUI()}
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* Dynamic Workflow visualization */}
      <section className="py-20 bg-white">
        <Container className="max-w-4xl">
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-2xl font-bold text-brand-navy">Automated Process Pipeline</h2>
            <p className="text-xs text-slate-500">Visual mapping of how data flows through Ovotech automations securely.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start relative">
            {solution.workflow.map((step, idx) => (
              <div key={step} className="flex flex-col items-center text-center space-y-3 relative">
                <div className="w-10 h-10 rounded-full bg-brand-blue/10 border-2 border-brand-cyan flex items-center justify-center font-bold text-sm text-brand-navy">
                  0{idx + 1}
                </div>
                <h4 className="text-xs font-bold text-slate-800">{step}</h4>
                {idx < solution.workflow.length - 1 && (
                  <div className="hidden md:block absolute top-5 left-[70%] w-full h-0.5 border-t border-dashed border-slate-300 -z-10" />
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Product Benefits Section */}
      <section className="py-20 bg-slate-50 border-t border-b border-brand-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold tracking-widest text-brand-blue uppercase">
                SYSTEM ADVANTAGES
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-brand-navy">
                Engineered for accuracy and clinician efficiency
              </h2>
              <p className="text-xs text-slate-500 leading-relaxed">
                By taking care of administrative tasks, Ovotech empowers medical staff to reclaim hours of their clinical day while securing maximum regulatory compliance.
              </p>
            </div>
            
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {solution.benefits.map((benefit) => (
                <Card key={benefit} hoverEffect={false} className="p-5 border-slate-200 flex items-start gap-3">
                  <Check className="h-5 w-5 text-brand-cyan flex-shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-600 font-medium leading-relaxed">{benefit}</span>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <CTASection />
    </div>
  );
}
