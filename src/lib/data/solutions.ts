export interface Solution {
  slug: string;
  name: string;
  title: string;
  description: string;
  workflow: string[];
  benefits: string[];
  proof: string;
  ctaText: string;
  details?: Record<string, any>;
}

export const solutions: Solution[] = [
  {
    slug: "repeat-prescription",
    name: "Repeat Prescription",
    title: "Repeat Prescription Automation",
    description: "Automates the repeat prescription process for patients, eliminating manual data entry while maintaining total compliance.",
    workflow: [
      "Patient Request",
      "Prescription Processing",
      "Automated Verification",
      "Completed Prescription"
    ],
    benefits: [
      "100% Accuracy in data entry",
      "Drastic reduction in processing turnaround times",
      "Seamless integration with existing GP prescription pipelines",
      "Reduced administrative workload for clinic staff"
    ],
    proof: "100% accuracy",
    ctaText: "Watch Demo"
  },
  {
    slug: "referral-automation",
    name: "Referral Automation",
    title: "RPA-Powered Referral Process",
    description: "Converts manual, slow healthcare referral requests into structured, automated tasks with rapid, reliable outcome updates.",
    workflow: [
      "Patient Referral Requested",
      "Referral Request Processing",
      "Automated Routing & Validation",
      "Referral Destination Notification",
      "Completed Referral Logs"
    ],
    benefits: [
      "Eliminates 50% of manual work",
      "Direct workflow visibility from creation to destination",
      "Reduced wait times for patient appointments",
      "Prevents lost or misrouted referral files"
    ],
    proof: "Eliminates 50% of manual work",
    ctaText: "Explore Solutions"
  },
  {
    slug: "policy-updates",
    name: "Policy Updates",
    title: "Policy Updates Monitoring",
    description: "Automatically tracks, detects, and synchronizes policy changes from national and regional healthcare portals to your local systems.",
    workflow: [
      "Policy Sources",
      "Monitoring",
      "Change Detection",
      "Updated Policy",
      "Healthcare Team"
    ],
    benefits: [
      "Continuous compliance monitoring across multiple websites",
      "Instant email and dashboard updates for policy variations",
      "Maintains audit logs of policy distribution to teams",
      "Reduces manual research and administrative upkeep"
    ],
    proof: "Automatic updates from policy sites",
    ctaText: "Learn More"
  },
  {
    slug: "document-management",
    name: "Document Management",
    title: "Docman Automation",
    description: "A powerful, RPA-driven solution that effectively manages the influx of patient records, correspondence, and emails within the organization.",
    workflow: [
      "Document Uploaded",
      "Information Extracted",
      "Rules Evaluated",
      "Recipient Determined",
      "Document Sent",
      "Patient Folder"
    ],
    benefits: [
      "Enhanced Efficiency & instant search",
      "Reduced Manual Errors through smart routing",
      "Significant Time Savings for administrative teams",
      "Improved Organization & Patient Record cleanliness",
      "Streamlined Workflow for doctors & nurse practitioners",
      "Substantial Operational Cost Savings"
    ],
    proof: "More than 20 GP Practices on board all across the UK",
    ctaText: "Request a Demo",
    details: {
      recipients: ["Doctor", "Nurse", "Administrative Staff"]
    }
  },
  {
    slug: "digital-assistant",
    name: "Digital Assistant",
    title: "AI Digital Assistant",
    description: "Manages incoming calls, patient queries, and books appointments autonomously, freeing up receptionists for in-person patient care.",
    workflow: [
      "Patient Query",
      "Digital Assistant Analysis",
      "Appointment Availability check",
      "Book / Reschedule / Cancel confirmation"
    ],
    benefits: [
      "24/7 availability for booking appointments",
      "Direct sync with GP practice calendar scheduling",
      "Interactive conversational patient flows for reschedule/cancel requests",
      "Reduces call queues by up to 40%"
    ],
    proof: "Active patient calendar synchronization",
    ctaText: "Watch Demo"
  },
  {
    slug: "medical-coding",
    name: "Medical Coding",
    title: "Medical Coding Automation",
    description: "Utilizes advanced AI, Natural Language Processing (NLP), and Machine Learning (ML) to convert letters, scans, and notes into standardized NHS medical codes.",
    workflow: [
      "Medical Letter Received",
      "AI Analysis & NLP Parsing",
      "Information Extraction",
      "Diagnosis / Procedure / Treatment Identification",
      "Standardized Medical Code Mapping"
    ],
    benefits: [
      "Increased Accuracy with robust NLP machine learning models",
      "Time Savings in manual coding tasks by administrators",
      "Reduced costs and standardization across records",
      "High scalability to process thousands of letters daily",
      "Fully compliant and secure audit trail built in"
    ],
    proof: "More than 20 GP Practices on board all across the UK",
    ctaText: "Get Started"
  },
  {
    slug: "qoaf",
    name: "Quality & Outcomes Framework",
    title: "Quality & Outcomes Framework Automation",
    description: "A proactive healthcare analytics dashboard for monitoring, evaluating, and achieving NHS Quality & Outcomes Framework (QOF) targets.",
    workflow: [
      "Patient Data ingestion",
      "KPI & Targets Analysis",
      "Unmet KPI Detection",
      "Relevant Patient identification",
      "Patient Communication trigger",
      "Targeted Action completion"
    ],
    benefits: [
      "Proactive Performance Management and KPI tracking",
      "Improved QOF achievement and maximized practice funding",
      "Revenue Optimization through targeted gaps detection",
      "Efficient Resource Allocation for practice clinicians",
      "Timely Interventions with high-risk patient lists",
      "Data-driven insights to manage chronic diseases effectively"
    ],
    proof: "Proactive performance dashboard indicators",
    ctaText: "Explore Analytics"
  },
  {
    slug: "prescription-automation",
    name: "Prescription Automation",
    title: "End-to-End Prescription Automation",
    description: "Accelerates prescription routing and authorization tasks, reducing administrative friction between GP practices and pharmacies.",
    workflow: [
      "Prescription Request",
      "Automated Processing",
      "Verification",
      "Completion & Electronic Signature"
    ],
    benefits: [
      "Secures direct e-signature transmission to pharmacies",
      "Saves hours of clinician review time every week",
      "Improves patient satisfaction with faster prescription collection",
      "Reduces manual errors in dosage transcription"
    ],
    proof: "Direct Electronic Prescription Service routing",
    ctaText: "Request a Demo"
  },
  {
    slug: "invoicing-automation",
    name: "Invoicing Automation",
    title: "Invoicing Automation",
    description: "Tracks healthcare activity logs and generates customized invoicing files in your desired format automatically.",
    workflow: [
      "Healthcare Activity Logged",
      "Invoice Data Aggregation",
      "Automated Formatting & Processing",
      "Customized Invoice File Delivery"
    ],
    benefits: [
      "Eliminates hours of manual invoicing spreadsheet entries",
      "Supports major accounting formats for seamless export",
      "Reduces billing discrepancies and outstanding payments",
      "Tracks claims in real-time with automated verification"
    ],
    proof: "Zero billing discrepancies in test cycles",
    ctaText: "Learn More"
  }
];
