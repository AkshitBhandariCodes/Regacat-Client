import { DrugServiceData } from "./DrugServiceTemplate";

export const drugServicesData: Record<string, DrugServiceData> = {
  cdscoImportLicense: {
    heroBadge: "CDSCO Import License",
    heroTitle: "CDSCO Import License Consultant in India",
    heroDescription:
      "End-to-end support for cosmetics, medical devices, and drug import approvals in India with classification, dossier readiness, SUGAM filing, and query handling.",
    heroImage:
      "https://blogs.regacats.in/wp-content/uploads/2026/02/regacats-cdsco-import-license-1024x683.webp",
    processImage:
      "https://blogs.regacats.in/wp-content/uploads/2026/02/regacats-cdsco-import-license-1024x683.webp",
    secondaryImage:
      "https://blogs.regacats.in/wp-content/uploads/2026/01/indian-authorized-agent-services-india-regacats-1024x683.webp",
    highlights: [
      "Category-wise route mapping for cosmetics, devices, and drugs",
      "SUGAM-ready documentation structure",
      "Form and dossier preparation support",
      "CDSCO deficiency response management",
      "Import compliance planning before shipment",
      "Post-approval regulatory continuity",
    ],
    detailedSteps: [
      {
        title: "Step 1: Product Classification",
        description:
          "Products are mapped to the correct regulatory framework under the Drugs and Cosmetics Act, Medical Devices Rules, or Cosmetic Rules.",
      },
      {
        title: "Step 2: Documentation Gap Analysis",
        description:
          "International technical and legal documents are reviewed against Indian format and content expectations.",
      },
      {
        title: "Step 3: Regulatory Strategy",
        description:
          "A category-specific filing strategy is prepared to reduce rework and deficiency cycles.",
      },
      {
        title: "Step 4: Dossier Compilation and Filing",
        description:
          "The application package is prepared and submitted through prescribed portals with quality checks.",
      },
      {
        title: "Step 5: Query Resolution and Approval",
        description:
          "CDSCO clarifications are managed quickly to support predictable timelines and license issuance.",
      },
      {
        title: "Step 6: Post-Approval Compliance",
        description:
          "Ongoing compliance support is provided for labeling, updates, and authority communication.",
      },
    ],
    timeline: [
      { label: "Typical approval range", value: "3-6 months" },
      { label: "Category coverage", value: "Cosmetics, Devices, Drugs" },
      { label: "Submission model", value: "Portal-based regulatory filing" },
      { label: "Review dependency", value: "Documentation quality" },
    ],
    documents: [
      "Manufacturer legal and licensing documents",
      "Product technical and composition details",
      "Label and pack artwork",
      "Quality and compliance certificates",
      "Authorization and appointment letters",
      "Category-specific forms and declarations",
    ],
    challenges: [
      "Incorrect product classification",
      "Portal filing errors and documentation mismatch",
      "Repeated authority deficiencies",
      "Import delays due to incomplete compliance",
    ],
    faqs: [
      {
        question: "What is a CDSCO import license?",
        answer: "It is a mandatory regulatory approval to legally import notified cosmetics, medical devices, or drugs into India.",
      },
      {
        question: "Who can apply for CDSCO import approvals?",
        answer: "Foreign manufacturers and Indian entities can apply through a compliant Indian regulatory setup, often with an authorized representative.",
      },
      {
        question: "How long does approval take?",
        answer: "Most applications take around 3-6 months depending on category complexity and dossier quality.",
      },
      {
        question: "Why use a consultant?",
        answer: "Expert support improves document quality, reduces deficiency cycles, and helps accelerate approvals.",
      },
    ],
    formServiceOptions: ["CDSCO Import License", "Drug Import", "Medical Device Import", "Cosmetic Import"],
  },

  authorizedAgentDrugs: {
    heroBadge: "Indian Authorized Agent - Drugs",
    heroTitle: "Indian Authorized Agent for Drugs in India",
    heroDescription:
      "Regulatory representation for foreign pharmaceutical manufacturers covering registration, import licensing, pharmacovigilance, and compliance continuity in India.",
    heroImage:
      "https://blogs.regacats.in/wp-content/uploads/2026/01/indian-authorized-agent-for-drugs-regacats-1024x683.webp",
    processImage:
      "https://blogs.regacats.in/wp-content/uploads/2026/01/indian-authorized-agent-for-drugs-regacats-1024x683.webp",
    highlights: [
      "Official CDSCO-facing regulatory representation",
      "Support for Form 40, Form 41, and Form 10 pathways",
      "Wholesale license aligned representation guidance",
      "Regulatory query and inspection coordination",
      "Pharmacovigilance and PSUR support",
      "Recall and corrective action coordination",
    ],
    detailedSteps: [
      {
        title: "Step 1: Feasibility and Product Mapping",
        description:
          "Drug category, route, and import pathway are assessed for Indian compliance feasibility.",
      },
      {
        title: "Step 2: Agent Appointment",
        description:
          "The Indian Authorized Agent is formally appointed as local regulatory representative.",
      },
      {
        title: "Step 3: Registration and Import Filing",
        description:
          "Drug registration and import documentation are compiled and submitted in prescribed formats.",
      },
      {
        title: "Step 4: Authority Coordination",
        description:
          "Technical queries, notices, and clarifications from authorities are managed through a single accountable interface.",
      },
      {
        title: "Step 5: Pharmacovigilance and Post-Market Compliance",
        description:
          "ADR reporting, PSUR activity, and post-market compliance actions are coordinated as required.",
      },
    ],
    timeline: [
      { label: "Appointment setup", value: "Case-based" },
      { label: "Registration and import cycle", value: "Depends on product and dossier" },
      { label: "Post-market support", value: "Continuous" },
      { label: "Compliance model", value: "Lifecycle-based" },
    ],
    documents: [
      "Manufacturer profile and legal papers",
      "Drug product and formulation details",
      "Regulatory forms and declarations",
      "Wholesale license related records (as applicable)",
      "Quality, stability, and safety documents",
      "Pharmacovigilance process details",
    ],
    challenges: [
      "Failure to appoint compliant local representative",
      "Delayed responses to CDSCO notices",
      "Gaps in pharmacovigilance workflow",
      "Regulatory delays from weak dossiers",
    ],
    faqs: [
      {
        question: "Is an Indian Authorized Agent mandatory for imported drugs?",
        answer: "Yes. Foreign drug manufacturers require a locally accountable representative under Indian regulatory practice.",
      },
      {
        question: "Can one agent represent multiple products?",
        answer: "Yes, if the regulatory scope and licensing conditions are satisfied.",
      },
      {
        question: "Does the agent need a wholesale license?",
        answer: "In many cases yes, the appointed setup must meet applicable licensing requirements for lawful representation.",
      },
      {
        question: "Is pharmacovigilance part of agent responsibility?",
        answer: "Yes, the agent supports ADR handling, PSUR obligations, and recall coordination.",
      },
    ],
    formServiceOptions: ["Drug Authorized Agent", "Drug Registration", "Import License", "Pharmacovigilance Support"],
  },

  authorizedAgentMedicalDevices: {
    heroBadge: "Indian Authorized Agent - Medical Devices",
    heroTitle: "Indian Authorized Agent for Medical Devices in India",
    heroDescription:
      "Regulatory representation for foreign medical device manufacturers including classification, licensing support, authority communication, and vigilance obligations.",
    heroImage:
      "https://blogs.regacats.in/wp-content/uploads/2026/01/indian-authorized-agent-medical-devices-1024x683.webp",
    processImage:
      "https://blogs.regacats.in/wp-content/uploads/2026/01/indian-authorized-agent-medical-devices-1024x683.webp",
    highlights: [
      "Representation before CDSCO for imported devices",
      "Class A/B/C/D and IVD pathway support",
      "Registration and licensing submission management",
      "Authority query and inspection support",
      "Post-market surveillance coordination",
      "Long-term compliance partner model",
    ],
    detailedSteps: [
      {
        title: "Step 1: Classification and Regulatory Assessment",
        description:
          "Device risk class, intended use, and import pathway are mapped under Indian regulations.",
      },
      {
        title: "Step 2: Formal Indian Agent Appointment",
        description:
          "The local representative is appointed for Indian accountability and regulator communication.",
      },
      {
        title: "Step 3: Registration and Licensing Submissions",
        description:
          "Required technical and regulatory documents are prepared and submitted for review.",
      },
      {
        title: "Step 4: Import Compliance and Authority Liaison",
        description:
          "Import-stage and review-stage clarifications are coordinated with regulators.",
      },
      {
        title: "Step 5: Vigilance and Post-Market Compliance",
        description:
          "Ongoing surveillance and compliance obligations are managed after approval.",
      },
    ],
    timeline: [
      { label: "Assessment and onboarding", value: "1-2 weeks" },
      { label: "Submission readiness", value: "2-6 weeks" },
      { label: "Authority review", value: "Case-based" },
      { label: "Post-market obligations", value: "Continuous" },
    ],
    documents: [
      "Device classification and intended use details",
      "Technical dossier and quality certifications",
      "Manufacturer legal and authorization papers",
      "Indian representative appointment documents",
      "Labeling and IFU compliance records",
      "Post-market surveillance process documents",
    ],
    challenges: [
      "Incorrect device classification",
      "Incomplete technical documentation",
      "Regulatory communication delays",
      "Weak post-market compliance tracking",
    ],
    faqs: [
      {
        question: "Is an Indian Authorized Agent mandatory for imported medical devices?",
        answer: "Yes. Foreign manufacturers need a locally established representative for Indian regulatory interaction.",
      },
      {
        question: "Can one agent support multiple medical devices?",
        answer: "Yes, within approved scope and regulatory obligations.",
      },
      {
        question: "Can the appointed agent be changed later?",
        answer: "Yes, changes are possible subject to prescribed procedures.",
      },
      {
        question: "Does the agent carry regulatory accountability?",
        answer: "Yes, the agent is accountable before Indian authorities for defined obligations.",
      },
    ],
    formServiceOptions: ["Medical Device Authorized Agent", "Device Classification", "CDSCO Liaison", "Post-market Support"],
  },

  authorizedAgentCosmetics: {
    heroBadge: "Indian Authorized Agent - Cosmetics",
    heroTitle: "Indian Authorized Agent for Cosmetics in India",
    heroDescription:
      "Regulatory representation for foreign cosmetic brands and manufacturers with support for product registration, import compliance, authority coordination, and post-market obligations.",
    heroImage:
      "https://blogs.regacats.in/wp-content/uploads/2026/01/indian-authorized-agent-cosmetics-india-regacats-1024x683.webp",
    processImage:
      "https://blogs.regacats.in/wp-content/uploads/2026/01/indian-authorized-agent-cosmetics-india-regacats-1024x683.webp",
    highlights: [
      "Official local representation for cosmetic compliance",
      "Support for cosmetic registrations and submissions",
      "Label and ingredient alignment support",
      "Authority query and notice handling",
      "Import and documentation coordination",
      "Post-registration compliance support",
    ],
    detailedSteps: [
      {
        title: "Step 1: Product Eligibility and Review",
        description:
          "Product composition, ingredients, and labeling requirements are reviewed for India entry readiness.",
      },
      {
        title: "Step 2: Appointment of Indian Authorized Agent",
        description:
          "The agent is formally appointed to represent the foreign manufacturer.",
      },
      {
        title: "Step 3: Registration and Submission",
        description:
          "Application documents are prepared and submitted under applicable cosmetic regulations.",
      },
      {
        title: "Step 4: Regulatory Coordination",
        description:
          "CDSCO communication, query handling, and authority liaison are managed end-to-end.",
      },
      {
        title: "Step 5: Post-Market and Label Compliance",
        description:
          "Ongoing support is provided for regulatory updates and post-approval obligations.",
      },
    ],
    timeline: [
      { label: "Eligibility and planning", value: "1-2 weeks" },
      { label: "Submission preparation", value: "2-5 weeks" },
      { label: "Authority review", value: "Case-based" },
      { label: "Post-approval support", value: "Continuous" },
    ],
    documents: [
      "Manufacturer and brand legal details",
      "Ingredient and formulation documents",
      "Label and packaging artwork",
      "Indian representative appointment documents",
      "Compliance declarations and certificates",
      "Import and distribution support records",
    ],
    challenges: [
      "Ingredient and label non-conformity",
      "Incomplete registration datasets",
      "Import-stage compliance gaps",
      "Slow authority response coordination",
    ],
    faqs: [
      {
        question: "Is an Indian Authorized Agent mandatory for imported cosmetics?",
        answer: "Yes. Foreign cosmetic manufacturers require a locally established agent for regulatory compliance in India.",
      },
      {
        question: "Can one agent represent multiple cosmetic products?",
        answer: "Yes, provided category scope and compliance obligations are met.",
      },
      {
        question: "Can a foreign manufacturer change the agent?",
        answer: "Yes, changes are permitted with proper regulatory procedure.",
      },
      {
        question: "Does this replace cosmetic registration itself?",
        answer: "No. Agent appointment and registration are separate but linked compliance requirements.",
      },
    ],
    formServiceOptions: ["Cosmetic Authorized Agent", "Cosmetic Registration", "Label Compliance", "CDSCO Coordination"],
  },

  authorizedAgentFssaiProducts: {
    heroBadge: "Indian Authorized Agent - FSSAI Products",
    heroTitle: "Indian Authorized Agent for FSSAI Products in India",
    heroDescription:
      "Local regulatory representation for foreign food, dietary supplement, and nutraceutical manufacturers requiring FSSAI-facing accountability and compliance management.",
    heroImage:
      "https://blogs.regacats.in/wp-content/uploads/2026/01/indian-authorized-agent-fssai-food-regacats-1024x683.webp",
    processImage:
      "https://blogs.regacats.in/wp-content/uploads/2026/01/indian-authorized-agent-fssai-food-regacats-1024x683.webp",
    highlights: [
      "FSSAI-facing local accountability in India",
      "Support for licensing and registration workflows",
      "Import clearance and authority coordination",
      "Category support for food and nutraceutical products",
      "Regulatory query and inspection support",
      "Post-market compliance management",
    ],
    detailedSteps: [
      {
        title: "Step 1: Product Category Mapping",
        description:
          "Food, supplement, and nutraceutical products are mapped to the right FSSAI pathway.",
      },
      {
        title: "Step 2: Agent Appointment",
        description:
          "Indian Authorized Agent is appointed for local compliance representation.",
      },
      {
        title: "Step 3: Licensing and Registration Support",
        description:
          "FSSAI submissions are prepared and coordinated through regulator-aligned documentation.",
      },
      {
        title: "Step 4: Import and Authority Coordination",
        description:
          "Import clearance communication and regulatory clarifications are managed with Indian authorities.",
      },
      {
        title: "Step 5: Post-Market Compliance",
        description:
          "Label, update, and surveillance obligations are supported for compliance continuity.",
      },
    ],
    timeline: [
      { label: "Initial mapping and setup", value: "1-3 weeks" },
      { label: "Submission cycle", value: "Depends on product and route" },
      { label: "Authority coordination", value: "Ongoing" },
      { label: "Post-market support", value: "Continuous" },
    ],
    documents: [
      "Product composition and category details",
      "Manufacturer and exporter records",
      "Label and claim documents",
      "Indian agent appointment papers",
      "Import support documents",
      "FSSAI compliance records",
    ],
    challenges: [
      "Wrong category mapping for imported products",
      "Delayed response to authority communications",
      "Incomplete labeling and compliance records",
      "Regulatory risk from weak local representation",
    ],
    faqs: [
      {
        question: "Is an Indian Authorized Agent required for imported FSSAI products?",
        answer: "Yes, for most foreign manufacturers of food, supplements, and nutraceutical categories.",
      },
      {
        question: "Can one Indian agent represent multiple products?",
        answer: "Yes, if the scope and compliance framework are properly managed.",
      },
      {
        question: "Can the foreign manufacturer change the agent later?",
        answer: "Yes, subject to procedural compliance.",
      },
      {
        question: "Does agent appointment replace FSSAI licensing?",
        answer: "No. It complements, but does not replace, licensing and registration obligations.",
      },
    ],
    formServiceOptions: ["FSSAI Authorized Agent", "FSSAI Import Compliance", "FSSAI Licensing Support", "Nutraceutical Compliance"],
  },

  authorizedAgentServicesIndia: {
    heroBadge: "Indian Authorized Agent Services",
    heroTitle: "Indian Authorized Agent Services in India",
    heroDescription:
      "Cross-category Indian Authorized Agent support for foreign manufacturers in food, nutraceuticals, cosmetics, medical devices, and pharmaceuticals entering India.",
    heroImage:
      "https://blogs.regacats.in/wp-content/uploads/2026/01/indian-authorized-agent-services-india-regacats-1024x683.webp",
    processImage:
      "https://blogs.regacats.in/wp-content/uploads/2026/01/indian-authorized-agent-services-india-regacats-1024x683.webp",
    secondaryImage:
      "https://blogs.regacats.in/wp-content/uploads/2026/01/indian-authorized-agent-for-drugs-regacats-1024x683.webp",
    relatedServices: [
      {
        title: "Indian Authorized Agent for Medical Devices",
        description: "Representation, registration, and compliance support for foreign medical device manufacturers.",
        href: "/indian-authorized-agent-for-medical-devices",
      },
      {
        title: "Indian Authorized Agent for Cosmetics",
        description: "Indian regulatory representative support for cosmetic registration and import compliance.",
        href: "/indian-authorized-agent-for-cosmetics-in-india",
      },
      {
        title: "Indian Authorized Agent for FSSAI Products",
        description: "FSSAI-facing authorized agent support for imported food, supplements, and nutraceutical products.",
        href: "/indian-authorized-agent-for-fssai-products",
      },
      {
        title: "Indian Authorized Agent for Drugs",
        description: "Drug registration, import licensing, and post-market support through local accountable representation.",
        href: "/indian-authorized-agent-for-drugs",
      },
    ],
    highlights: [
      "Single representation model across major regulated categories",
      "Category-specific compliance strategy and execution",
      "Authority communication and records management",
      "Inspection and query response support",
      "Importer vs representative role clarity",
      "Long-term post-market compliance coverage",
    ],
    detailedSteps: [
      {
        title: "Step 1: Category and Regulatory Assessment",
        description:
          "Products are assessed under relevant Indian authority frameworks such as CDSCO and FSSAI.",
      },
      {
        title: "Step 2: Appointment and Onboarding",
        description:
          "The Indian Authorized Agent role is formalized and aligned to category-specific obligations.",
      },
      {
        title: "Step 3: Application and Submission Support",
        description:
          "Registrations, licenses, and approvals are prepared and filed with compliance-first documentation.",
      },
      {
        title: "Step 4: Continuous Authority Coordination",
        description:
          "Queries, inspections, and notices are handled through a controlled regulatory communication process.",
      },
      {
        title: "Step 5: Post-Market and Lifecycle Compliance",
        description:
          "Ongoing obligations, reporting, and updates are managed to sustain market access.",
      },
    ],
    timeline: [
      { label: "Assessment phase", value: "1-2 weeks" },
      { label: "Onboarding and setup", value: "1-3 weeks" },
      { label: "Submission cycles", value: "Category dependent" },
      { label: "Support duration", value: "Ongoing lifecycle" },
    ],
    documents: [
      "Manufacturer and product category details",
      "Authority-specific application forms",
      "Technical and labeling dossiers",
      "Import and representation documents",
      "Compliance declarations and records",
      "Post-market reporting frameworks",
    ],
    challenges: [
      "Confusion between agent and importer roles",
      "Multi-category compliance complexity",
      "Documentation inconsistency across authorities",
      "Regulatory delays due to weak coordination",
    ],
    faqs: [
      {
        question: "Is an Indian Authorized Agent mandatory for foreign manufacturers?",
        answer: "Yes, for most regulated categories India requires local regulatory representation.",
      },
      {
        question: "Can one agent represent multiple categories?",
        answer: "Yes, if the agent has appropriate compliance capability for each category.",
      },
      {
        question: "Is the agent the same as importer of record?",
        answer: "Not always. The roles are different, though in some cases one entity may perform both.",
      },
      {
        question: "Can foreign manufacturers switch agents?",
        answer: "Yes, authorities permit changes when procedures are followed correctly.",
      },
    ],
    formServiceOptions: ["Indian Authorized Agent", "Regulatory Representation", "Cross-category Compliance", "Authority Liaison"],
  },
};
