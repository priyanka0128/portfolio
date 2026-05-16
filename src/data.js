export const profile = {
  name: "Priyanka Subhash Chavan",
  shortName: "Priyanka Chavan",
  handle: "@priyankachavan",
  tagline: "Hi, I'm Priyanka.",
  intro: "I build small things that do quiet work — voice clones,chatbots, risk scorers, dashboards.",
  subIntro: "Most of them involve AI. None of them involve a 40-slide deck.",
  location: "Galway, Ireland",
  relocating: "Open to work",
  email: "priyanka.chavan.ie@gmail.com",
  phone: "+353 899 758 079",
  linkedin: "https://www.linkedin.com/in/priyanka-chavan-psc2002/",
  github: "https://github.com/priyanka0128",
};

export const about = [
  "I'm Priyanka — finishing an MSc in Cybersecurity Risk Management at Galway. My dissertation builds an adaptive cyber risk framework for the financial sector, mapped to ISO 27001, NIST CSF, NIS2 and the EU AI Act. Most frameworks tell you what went wrong after the annual audit; mine scores threats in real time, with a Power BI layer that connects SOC operations to GRC governance.",
  "These days I spend my evenings building things that probably shouldn't exist yet. Vela clones an ALS patient's voice before they lose it, then talks for them in their own dialect. An IRC chatbot I prototyped at AWS Breaking Barriers reads verified council content in any language a refugee speaks. An adaptive cyber risk framework scores threats in real time instead of waiting for the annual audit. None of these started as research — they started as the thought \"why doesn't this exist yet?\"",
  "The thread across all of it: I'm drawn to the messy edge where AI and security meet real-world systems — where a wrong answer has consequences, where compliance has to be designed in rather than bolted on, and where the goal isn't a clever model but a thing that genuinely works. I'd rather close a loop than open a tab."
];

export const work = [
  {
    role: "Teaching Assistant ",
    company: "University of Galway",
    location: "Galway, Ireland",
    period: "Oct 2025 — April 2026",
    summary: "Took everything learned building for production and brought it into the classroom — running web development practicals for engineering students and making sure concepts actually stuck.",
    highlights: [
      "Conducted hands-on lab sessions covering core web development for undergraduate engineering students.",
      "Broke down complex front-end concepts into practical exercises students could apply immediately.",
      "Bridged the gap between theory and real-world development — drawing on industry experience to answer the 'but why does this matter' questions."
    ]
  },
  {
  role: "Project Engineer — Network & Security",
  company: "Tata Communications (Novamesh)",
  location: "Pune, India",
  period: "Jul 2024 — Aug 2025",
  summary: "Owned network and security delivery for 10+ enterprise clients across the full project lifecycle — control assessments, compliance cadences, patching cycles, and stakeholder reporting in a critical telecoms and enterprise IT environment.",
  highlights: [
    "Improved managed-account uptime by 20% by replacing manual checks with Python-based monitoring, reducing mean time to detect across the client base.",
    "Ran compliance and patching cycles across multi-vendor stacks (Cisco, firewalls, Snort IDS), maintaining clean audit trails and evidencing control performance for internal and external reviews.",
    "Identified control deficiencies and drove data-driven remediation with engineering and client teams — tracking findings to closure against agreed SLAs.",
    "Translated control performance, risk exposure, and contractual obligations into actionable reporting for senior stakeholders, asset owners, and customers."
  ]
},
{
  role: "Data & Operations Intern",
  company: "Navtor India Pvt. Ltd.",
  location: "Mumbai, India",
  period: "Sep 2023 — Jun 2024",
  summary: "Built the end-to-end BI reporting layer the operations team didn't have — consolidating fragmented vessel and client data into a single source of truth used by leadership.",
  highlights: [
    "Designed and delivered a Power BI dashboard tracking KPIs across 30+ clients and 20+ vessels, replacing manual reporting with an automated, validated pipeline.",
    "Defined metrics with product and engineering tied to real operational and risk indicators — SLA performance, exception rates, and utilisation — rather than vanity activity counts.",
    "Validated data integrity end to end and documented the reporting model so it could be maintained and extended after handover."
  ]
},
  {
    role: "Student Intern",
    company: "Coincent.ai",
    location: "Remote",
    period: "Jun — Aug 2022",
    summary: "Structured training internship focused on AI fundamentals and cloud infrastructure — came out the other end with Microsoft Azure AI-900 certification.",
    highlights: [
      "Completed hands-on training in AI concepts, machine learning fundamentals, and Azure cloud services.",
      "Applied learning directly to certification — passed the Microsoft Azure AI Fundamentals (AI-900) exam.",
      "Explored responsible AI principles and how AI workloads are deployed in real cloud environments."
    ]
  },
  {
    role: "Software Engineering Intern",
    company: "Ingenium Marine Pvt. Ltd.",
    location: "Mumbai, India",
    period: "Aug — Dec 2021",
    summary: "First industry stint — shipped web modules, broke them on purpose, then wrote the documentation nobody else wanted to.",
    highlights: [
      "Built front-end modules in HTML, CSS, and JavaScript across three production systems.",
      "Ran functional, regression, and UAT cycles — traced defects back to root cause instead of just logging them.",
      "Documented three modules from scratch, cutting new-hire ramp-up time noticeably."
    ]
  },
  {
    role: "Web Design Intern",
    company: "Aerus Infotech",
    location: "Mumbai, India",
    period: "Jun — Aug 2020",
    summary: "University-placed internship where the brief was simple: learn how the web actually gets built. Spent three months going from zero to shipping real pages.",
    highlights: [
      "Trained in and applied core web technologies — HTML, CSS, and JavaScript — on live project work.",
      "Designed and developed web pages with a focus on layout, visual hierarchy, and usability basics.",
      "Built the foundation that every subsequent dev and QA role has run on."
    ]
  }
];

export const projects = [
  {
    slug: "vela",
    category: "build",
    title: "Vela",
    subtitle: "AAC Communication System for ALS/MND Patients",
    year: "2026",
    tagline: "Voice cloning meets eye tracking — Vela preserves a patient's voice forever and lets them communicate through speech, text, pictograms, or just their eyes.",
    stack: ["HTML/CSS/JS", "React JS","Node.js", "ElevenLabs API", "Groq LLM", "Google AI STudio", "Vercel"],
    problem: "People with ALS/MND progressively lose the ability to speak, type, and move. Existing AAC tools use robotic synthetic voices, ignore regional dialect and personality, and cost thousands of euros — putting them out of reach for most patients.",
    approach: "Built a multimodal communication web app with four input modes: voice, text, pictogram touch, and eye tracking. Integrated ElevenLabs to clone the patient's real voice before they lose it — so every generated message sounds exactly like them. Groq rewrites messages in the patient's natural dialect and personality profile (region, tone, humour, slang level). A caregiver mode with PIN access lets caregivers manage all patient voices and add custom phrases. Fully offline-capable with browser speech fallback.",
    outcome: "Live web app deployed on Vercel. Supports voice cloning, real-time personality rewriting in Spanish (Spain/Mexico) and English (Ireland/UK/USA), eye tracking via WebGazer, private per-patient voice bank, and caregiver management panel. Demoed to 10 users with cloned voices at a healthcare hackathon.",
    tag: "AI · Healthcare · Accessibility",
    links: [
      
      { label: "Live Demo", url: "https://vela-app-theta.vercel.app/", type: "external" }
  
    ]
  },
  {
    slug: "irish-refugee-council-ai-assistant",
    category: "build",
    title: "Irish Refugee Council AI Assistant",
    subtitle: "AWS Breaking Barriers Hackathon 2026",
    year: "2026",
    tagline: "An AWS-powered multilingual chatbot giving Ireland's refugee community 24/7 access to verified IRC information — without overwhelming frontline staff.",
    stack: ["AWS", "Amazon Bedrock", "Figma", "Prototyping"],
    problem: "The Irish Refugee Council handles 300+ queries per week with a small multilingual team against a demand of 450+ — a 50% capacity gap. Staff rarely speak more than two languages, support is limited to working hours, and repetitive informational queries consume time that should be spent on complex, high-vulnerability cases.",
    approach: "Designed and prototyped a RAG-based conversational AI assistant grounded exclusively in verified IRC website content, built on AWS. The system handles natural language queries with full source citation, detects legal boundary cases and redirects compassionately to human staff, auto-detects user language and responds multilingually, generates anonymised interaction summaries for staff review, and compiles structured handover packages when escalation is required. Built in 72 hours by Team Advoc8 — a cross-functional team spanning AWS, EPAM, Bank of Ireland, Hertz, and University of Galway.",
    outcome: "Delivered a working prototype targeting <11 second response time, >95% knowledge base accuracy, 30+ staff hours saved weekly, and >85% user satisfaction. Presented as a strategic solution aligned to IRC's 2027 capacity goals — scalable, GDPR-compliant, and deployable without additional headcount.",
    tag: "Hackathon · AWS · Social Impact",
  },
  {
    slug: "student-shift-marketplace",
    category: "build",
    title: "Student Shift Marketplace",
    subtitle: "Cloud Computing Project",
    year: "2026",
    tagline: "A serverless, cloud-native job platform connecting Irish students with SMEs for on-demand shift-based employment.",
    stack: ["React JS", "Node.js", "AWS", "Netlify"],
    problem: "Ireland's 230,000+ third-level students struggle to find flexible, short-notice work through platforms built for long-term hiring. Meanwhile, SMEs in hospitality, retail, and events face operational disruptions from last-minute staff shortages — with no dedicated marketplace to bridge the two.",
    approach: "Architected a fully serverless AWS stack — Lambda functions (Node.js) per operation exposed via API Gateway, DynamoDB (PAY_PER_REQUEST) for sub-millisecond NoSQL reads/writes across Users, Shifts, and Applications tables, and S3 with pre-signed URL access control for secure file storage. Amazon Cognito User Pools handle auth with JWT issuance and role-based access control, validated on every Lambda invocation via aws-jwt-verify. The React SPA integrates backend services through AWS Amplify SDK, deployed on Netlify with CI/CD from GitHub.",
    outcome: "Delivered a working full-stack prototype with role-aware dashboards for students and employers, real-time shift listings, and a one-click application flow. Shift postings go live instantly with no moderation delay — purpose-built for the Irish student temp labour market.",
    tag: "Cloud · Full-Stack · Serverless",
    links: [
      
      { label: "Live Demo", url: "https://boisterous-blancmange-0da0ce.netlify.app/", type: "external" }
  
    ]
  },
  {
    slug: "ai-cyber-risk-evaluation",
    category: "build",
    title: "AI Cyber Risk Evaluation",
    subtitle: "Cybersecurity & Data Analytics Project",
    year: "2025",
    tagline: "An end-to-end cyber risk evaluation framework for financial institutions — from attack simulation and telemetry collection to ACI-based risk scoring and dual-layer governance dashboards.",
    stack: ["AWS", "Grafana", "Power BI", "Python"],
    problem: "Mid-sized financial institutions face the same threat landscape as large banks — ransomware, phishing, credential theft, insider misuse, and supply chain compromise — but with significantly fewer resources. Traditional risk assessment methodologies are static and periodic, unable to keep pace with dynamic cyber threats or satisfy continuous compliance obligations under ISO/IEC 27001:2022, NIST CSF, GDPR, NIS2, and DORA.",
    approach: "Deployed a cloud-native monitoring environment on AWS (EC2, VPC, CloudWatch, VPC Flow Logs) hosting a simulated financial services web application as the attack target. Built a full observability stack using Docker Compose — Promtail for log shipping, Loki as the centralized log aggregation engine, and Grafana for real-time operational dashboards tracking request rates, scripted access patterns, error spikes, and source IP activity. Introduced the Adaptive Control Index (ACI) — a normalised risk metric of (Likelihood × Impact) × (1 − Control Effectiveness) — to score and prioritize five risk scenarios across the CIA triad. Mapped all identified threats to ISO/IEC 27001:2022 Annex A controls and GRC frameworks. Designed a Power BI executive governance dashboard translating raw telemetry into risk classification, MTTD/MTTR KPIs, compliance evidence tables, and governance readiness scores.",
    outcome: "Delivered a fully functional dual-layer visibility architecture — Grafana for SOC-level operational monitoring and Power BI for executive governance reporting. Produced a working proof-of-concept demonstrating how cloud telemetry can be continuously mapped to regulatory compliance obligations, bridging the gap between technical cybersecurity operations and GRC decision-making in regulated financial environments.",
    tag: "Cybersecurity · GRC · Cloud · Data Analytics",
    links: [

        { label: "Documentation", url: "https://drive.google.com/file/d/1GK3MAhsZTUIz2DsYBATQqqDnh3Blwixn/view?usp=sharing", type: "external" }
    ]
  },
  {
    slug: "plant-disease-detection",
    category: "build",
    title: "Plant Disease Detection",
    subtitle: "Machine Learning Project",
    year: "2024",
    tagline: "Upload a leaf, get a diagnosis — CNN-powered plant disease detection with treatment recommendations in seconds.",
    stack: ["React JS", "Python", "Flask", "TensorFlow"],
    problem: "Early-stage plant disease often goes undetected until visible crop damage has already spread. Small-scale farmers lack real-time access to agricultural expertise, making timely and accurate diagnosis a critical gap in precision agriculture.",
    approach: "Trained a Convolutional Neural Network (CNN) on a labelled plant disease dataset, leveraging convolutional and pooling layers to extract spatial features from leaf imagery. The trained model was serialised and served via a Flask REST API, accepting image uploads and returning a predicted disease class with a confidence score. A React frontend handles image capture, communicates with the inference endpoint, and renders the diagnosis alongside suggested treatment.",
    outcome: "Achieved 85–90% classification accuracy across tested disease classes. Delivered an end-to-end working prototype capable of real-time inference — from leaf image upload to diagnosis and treatment suggestion within seconds.",
    tag: "ML · Full-Stack",
    links: [

       { label: "GitHub", url: "https://github.com/priyanka0128/AzurePlant", type: "external" }
    ]
  },
  {
    slug: "galwaymate",
    category: "research",
    title: "GalwayMate",
    subtitle: "Innovation4Sustainability Hackathon — Winner",
    year: "2025",
    tagline: "A platform connecting incoming students with current residents — so moving to a new city feels less like guesswork.",
    stack: ["Figma", "Design Thinking", "Prototyping"],
    problem: "Every year, thousands of international students arrive in Galway with no real sense of what the city feels like on the ground. Generic university guides miss the nuance: which areas are actually walkable, what rent really costs, how public transport works at 11pm.",
    approach: "Designed and prototyped a matchmaking platform connecting incoming students with current Galway residents — matched by course, budget, lifestyle, and district. Developed a working UI prototype in Figma and a functional front-end proof-of-concept in 48 hours at the Portershed hackathon.",
    outcome: "Won the Innovation4Sustainability Hackathon 2025 at the Portershed, Galway. Judged on social impact, feasibility, and execution under time pressure. Delivered as a prototype — full product development not in scope for the competition.",
    tag: "Hackathon · Winner",
  },
  {
    slug: "parentech",
    category: "build",
    title: "ParenTech",
    subtitle: "Diploma Capstone — Published in IRJET",
    year: "2021",
    tagline: "A communication app closing the gap between parents and teachers in Indian schools.",
    stack: ["React Native", "SQL", "Firebase"],
    problem: "In many Indian schools, parent-teacher communication happens through paper notes and irregular PTMs. Important updates get missed, and there's no shared record of a student's progress outside report cards.",
    approach: "A cross-platform mobile app where teachers can post updates, share progress notes, and message parents directly — with both sides seeing a timeline of the student's academic journey.",
    outcome: "Published as \"ParenTech: Connecting School to Home\" in the International Research Journal of Engineering and Technology (IRJET), April 2021.",
    tag: "Mobile · Published",
  },
  {
    slug: "shadow-change-management",
    category: "research",
    title: "Shadow Change Management",
    subtitle: "Research Project",
    year: "2025",
    tagline: "Quantifying governance blind spots in AI-driven infrastructure — a risk analytics framework for shadow change detection in telecom and cloud environments.",
    stack: ["Python", "Data Analytics", "Power BI", "Network Security", "Cloud Governance"],
    problem: "Modern telecom and cloud infrastructure — powered by SDN, NFV, Kubernetes, and CI/CD pipelines — executes changes autonomously and continuously. Traditional ITIL-based governance frameworks assume human-initiated, pre-approved, and scheduled changes. In AI-driven environments, machine-triggered changes bypass approval workflows and fragment audit trails, creating a critical governance gap: Shadow Changes — infrastructure modifications that occur entirely outside formal visibility or accountability mechanisms.",
    approach: "Designed a Governance Intelligence Layer that sits atop operational data to classify, map, and score every infrastructure change. Simulated enterprise-level multi-system logs across 5G Core, SDN controllers, cloud platforms, and edge systems, enriched with governance attributes — initiator type (AI/Human/Vendor), approval mapping (Ticket ID), shadow flag, and risk classification. Introduced the Shadow Change Index (Untracked Changes / Total Changes × 100) as a novel KPI to quantify governance gaps.",
    outcome: "Research phase complete — governance framework defined, Shadow Change Index metric established, and dataset engineered with full governance attribution. Power BI analytics dashboard currently in development for executive-level visualisation and NIS2 compliance reporting.",
    tag: "Research · Cloud Governance · Risk Analytics",
    
  },
  {
    slug: "fenergo-strategic-analysis",
    category: "research",
    title: "Fenergo Strategic Analysis",
    subtitle: "Strategic Management Report",
    year: "2025",
    tagline: "A consulting-grade strategic deep-dive into Fenergo's competitive position, capability gaps, and a 2025–2030 growth roadmap for the global RegTech market.",
    stack: ["Strategic Management", "PESTEL", "Porter's Five Forces", "VRIO", "Value Chain Analysis"],
    problem: "Fenergo operates in a rapidly evolving RegTech landscape where regulatory complexity is accelerating across multi-jurisdictional frameworks — GDPR, MiFID II, FATCA, NIS2 — while AI-native competitors are lowering market entry barriers. The core challenge: sustaining competitive differentiation and global scalability while managing rising client bargaining power, ESG integration demands, and cybersecurity obligations across a $50B projected market by 2030.",
    approach: "Applied a multi-framework strategic analysis — PESTEL for macro-environmental mapping, Porter's Five Forces for competitive intensity assessment, VRIO for internal capability evaluation, and Value Chain Analysis for operational efficiency review. Synthesised findings into a SWOT/TOWS alignment matrix to identify strategic gaps. Formulated three strategic alternatives — Organic Growth, Strategic Partnerships, and Selective Acquisitions — evaluated against feasibility, acceptability, and sustainability criteria.",
    outcome: "Delivered a comprehensive strategic report with a phased 2025–2030 implementation roadmap covering AI-first platform modernisation, regional compliance hub deployment across APAC and MENA, ESG scoring module integration, and a targeted M&A strategy for AI/pKYC capability acquisition. Produced KPI-mapped risk mitigation plans aligned to Fenergo's long-term positioning as a global RegTech leader.",
    tag: "Strategy · RegTech · FinTech",
    links: [
      { label: "Documentation", url: "https://drive.google.com/file/d/1xe5yW4L1Uf5PkQQCtgWDrEvJ8wQrG_2M/view?usp=drive_link", type: "external" }

    ]
  },
  {
    slug: "ibm-qradar-siem-analysis",
    category: "research",
    title: "IBM QRadar SIEM Analysis",
    subtitle: "Software Development & Project Management Report",
    year: "2025",
    tagline: "A structured project management analysis of IBM QRadar SIEM deployment — mapping real-world implementation failures and enhancements against NIST CSF and Phase-Based Management frameworks.",
    stack: ["IBM QRadar SIEM", "NIST CSF", "SOC Operations", "Cybersecurity"],
    problem: "Organisations deploying IBM QRadar SIEM face a critical execution gap — while QRadar provides powerful threat detection and compliance capabilities, unstructured deployments lead to DSM misconfigurations, log normalisation failures, alert fatigue, and EPS-based licensing overruns. The absence of a governance-aligned, phase-driven implementation methodology results in SIEM environments that fail to stabilise, leaving SOC teams blind to real threats.",
    approach: "Applied two complementary project management frameworks — the NIST Cybersecurity Framework (Identify, Protect, Detect, Respond, Recover) and a Phase-Based Management Method covering architecture planning, log source onboarding, DSM mapping, correlation rule development, SOC workflow integration, and continuous tuning. Analysed real-world QRadar deployments across enterprise banking (ABN AMRO), healthcare (LARNHÄLSAN), academia (University of Canberra), and SME (CyberNova Tech) contexts to identify failure patterns and governance gaps. Evaluated proposed enhancements including federated learning, transformer-based threat detection, SOAR/XDR integration, and Explainable AI (SHAP/LIME) for alert transparency.",
    outcome: "Produced a comprehensive project management analysis documenting phase-critical failure modes, cross-sector implementation learnings, and a future-state enhancement roadmap for QRadar environments. Key findings highlight DSM normalisation and continuous tuning as the highest-impact phases for SIEM stabilisation and SOC operational readiness.",
    tag: "Cybersecurity · SIEM · Project Management",
    links: [

       { label: "Documentation", url: "https://drive.google.com/file/d/1nVWlSXK275IGUBSyTcUZqaHJWPc37Yrn/view?usp=drive_link", type: "external" }


    ]
  }
];

export const awards = [
  {
    year: "2026",
    title: "President's Award for Innovation & Entrepreneurship — Bronze",
    issuer: "University of Galway IdeasLab",
    description: "Awarded for reimagining an existing technology with a fresh, scalable application."
  },
  {
    year: "2025",
    title: "Winner — Innovation4Sustainability Hackathon",
    issuer: "Portershed, Galway",
    description: "First place for GalwayMate, a student-to-student onboarding platform built in 48 hours."
  },
  {
    year: "2022",
    title: "Microsoft Certified: Azure AI Fundamentals",
    issuer: "Microsoft",
    description: "Certified foundational knowledge of AI workloads, ML, and Azure AI services."
  },
  {
    year: "2023 – 2024",
    title: "Chairperson, IEEE Student Chapter",
    issuer: "Pillai College of Engineering",
    description: "Led technical events, workshops, and team operations for the university's IEEE branch."
  },
  {
    year: "2021",
    title: "Published Researcher — IRJET",
    issuer: "International Research Journal of Engineering & Technology",
    description: "Co-authored \"ParenTech: Connecting School to Home\"."
  }
];

// Skills are organised into 4 broad domains, each containing skill clusters
export const skillDomains = [
  {
    domain: "Intelligence & Analytics",
    clusters: [
      {
        name: "AI & Machine Learning",
        items: ["AWS Bedrock", "ElevenLabs API", "Groq LLM", "Google AI Studio", "LangChain", "TensorFlow", "CNN"]
      },
      {
        name: "Data & Analytics",
        items: ["Power BI", "Loki","Heatmaps", "User Behaviour Research", "Statistical Significance", "Dashboard Design", "Stakeholder Reporting", "Operational Data Analysis"]
      },
      {
        name: "Databases",
        items: ["DynamoDB", "Firebase", "SQL"]
      }
    ]
  },
  {
    domain: "Networks & Security",
    clusters: [
      {
        name: "Cybersecurity & GRC",
        items: ["Snort IDS", "SOC Operations", "Security Patch Mgmt", "Risk Assessment", "Incident Response", "Threat Modelling", "Compliance", "NIST CSF","GDPR", "DORA"]
      },
      {
        name: "Networking & Systems",
        items: ["Multi-vendor Networks", "Network Configuration", "Network Automation", "Network Monitoring", "Distributed Systems", "Network Interoperability"]
      }
    ]
  },
  {
    domain: "Strategy & Delivery",
    clusters: [
      {
        name: "Strategy & Frameworks",
        items: ["PESTEL", "Porter's Five Forces", "Value Chain Analysis", "Design Thinking"]
      },
      {
        name: "Project & Client Delivery",
        items: ["Project Engineering", "Client Relationship Mgmt", "Technical Documentation", "Root Cause Analysis", "Cross-team Coordination"]
      }
    ]
  },
  {
    domain: "Engineering & Development",
    clusters: [
      {
        name: "Frontend",
        items: ["HTML / CSS / JS", "React JS", "Figma"]
      },
      {
        name: "Backend",
        items: ["Node.js", "Python", "REST APIs", "Flask"]
      },
      {
        name: "Cloud & Infrastructure",
        items: ["AWS Lambda", "API Gateway", "Amazon Cognito", "S3", "CloudWatch", "Docker", "Vercel", "Netlify"]
      }
    ]
  }
];

export const education = [
  {
    degree: "MSc Cybersecurity Risk Management",
    institution: "University of Galway, Ireland",
    period: "2025 — Present",
    detail: "Dissertation: AI-Based Cyber Risk Evaluation for Financial Institutions."
  },
  {
    degree: "B.Tech. Information Technology",
    institution: "Pillai College of Engineering, Mumbai University",
    period: "2021 — 2024",
    detail: "Grade: 9.10 / 10 · Final project: Plant Disease Detection (CNN, React, Flask)."
  }
];

export const process = [
  {
    number: "01",
    title: "Find where the value actually lives",
    body: "Before tooling, before data, before AI — the real question is which decision, if made better, would meaningfully move the business. Most teams skip this and end up automating noise. I start by mapping the workflow, the risk surface, and the biggest unanswered question — and only then ask what data, model, or agent can move the needle."
  },
  {
    number: "02",
    title: "Build with AI agents, not around them",
    body: "The next wave isn't dashboards humans read — it's AI agents that act, decide, and learn inside the system. I'm building toward that future: chatbots grounded in verified data, voice agents that preserve identity, governance layers that catch what humans miss. Every project I take on now is a step toward agentic infrastructure — where AI doesn't just analyse the work, it does the work."
  },
  {
    number: "03",
    title: "Ship the smallest thing that proves the thesis",
    body: "Big ideas die in slide decks. I'd rather get a rough prototype in front of users in two weeks than a polished one in six months. Vela's voice cloning. The Irish Refugee Council assistant in 72 hours. The Shadow Change governance layer. Every project starts as a working slice that proves a single belief — then earns the right to scale."
  },
  {
    number: "04",
    title: "Build for what comes next, not what's standard now",
    body: "The metrics that matter today — uptime, conversion, NPS — will be table stakes in three years. The teams that win are the ones already building for the agentic, AI-mediated, self-monitoring stack. I want to be in the room helping companies make that shift — not maintaining yesterday's pipeline."
  }
];

export const beliefs = [
  {
    number: "01",
    title: "AI is leverage, not the goal.",
    body: "The best AI projects don't start with \"let's use AI for this.\" They start with a problem worth solving, then ask what kind of agent, model, or automation can actually move it. Anything else is a demo dressed up as a product."
  },
  {
    number: "02",
    title: "The best insight is the one you can act on by Friday.",
    body: "Long reports with 40 recommendations rarely ship. One well-framed prototype that a team can run next sprint usually beats a quarterly deep-dive that sits on a shelf."
  },
  {
    number: "03",
    title: "AI without security is a liability.",
    body: "Every agent I build has to think about what happens when it's wrong, manipulated, or overtrusted. The cybersecurity instinct isn't a separate skill — it's how I think about every system I touch."
  }
];

export const learning = [
  { topic: "AWS Bedrock", detail: "Building agentic workflows with Claude and Titan models" },
  { topic: "LangChain & multi-agent", detail: "Orchestration patterns for autonomous agent systems" },
  { topic: "Agentic AI safety", detail: "How to keep autonomous agents honest, auditable, and aligned" },
  { topic: "Spanish", detail: "Learning for fun — and because Spain feels right." },
 
];

export const metrics = [
  { value: "20%",    label: "Uptime gained",       context: "across enterprise client accounts at Tata Communications" },
  { value: "30+",    label: "Clients served",      context: "via BI dashboard consolidating data from 20+ vessels" },
  { value: "1st",    label: "Hackathon win",       context: "Innovation4Sustainability, Portershed Galway, 2025" },
  { value: "Bronze", label: "President's Award",   context: "Innovation & Entrepreneurship, University of Galway, 2026" }
];
