import React, { useState, useEffect } from 'react';
import { 
  Mail, FileText, ExternalLink, ChevronDown, ChevronUp, MapPin, 
  Sparkles, Award, BookOpen, Layers, Cpu, ArrowRight, ShieldAlert, 
  Search, CreditCard, CheckCircle2, User, X, ArrowLeft, Clock,
  Check, Phone, AlertTriangle, Users, Target, BarChart2, Calendar,
  FileCheck, Lock, DollarSign, Activity, FileSpreadsheet, Send
} from 'lucide-react';

// --- MAIN PORTFOLIO DATA CONFIGURATION ---
const PERSONAL_INFO = {
  name: "Karthick Balakrishnan",
  eyebrow: "HCI Researcher • UX Design Technical Lead",
  location: "Chennai, India",
  summary: "15+ years of UX/product design experience across enterprise systems, fintech, manufacturing, energy, and the public sector. Combining human-centered design with AI-powered UX, LLM-enhanced workflows, and ML-driven experience optimization to improve clarity, trust, and decision-making in complex digital environments.",
  cvLink: "Karthick-UX Designer_HCL_2026.pdf",
  email: "b.karthick@live.com",
  linkedIn: "https://www.linkedin.com",
  roles: ['AI UX Architect', 'HCI Researcher', 'Design Systems Lead', 'Enterprise Product Strategist']
};

const STATS = [
  { value: "15+", label: "Years in UX Industry" },
  { value: "4", label: "Core HCI Themes" },
  { value: "8", label: "Enterprise Programs" },
  { value: "3", label: "Validated Case Studies" }
];

const CASE_STUDIES = [
  {
    id: "penfed-mortgage",
    title: "Dignity-First Mortgage Application Platform",
    client: "PenFed Credit Union / HCLTech",
    period: "2023 - 2024",
    category: "Fintech • Financial Anxiety Reduction • Mortgage UX",
    gradient: "from-blue-600 via-sky-500 to-indigo-600",
    metrics: [
      { val: "+42%", label: "Conversion Lift" },
      { val: "-71%", label: "Status Call Reduction" },
      { val: "$1.6M", label: "Annual Overhead Saved" }
    ],
    summary: "Redesigned PenFed's digital mortgage portal around trust and clarity, introducing a dynamic Application Readiness Score and an automated Loan Officer Scheduling Engine.",
    details: [
      "Eliminated the 52% Step-3 drop-off caused by overwhelming upfront 11-document upload demands.",
      "Embedded a live 0–100% Application Readiness Score offering progressive pre-approval tiers.",
      "Integrated a time-zone aware Loan Officer (LO) calendar booking widget directly on the confirmation screen.",
      "Delivered an immediate downloadable Pre-Approval PDF certificate upon submission."
    ],
    tags: ["Fintech UX", "Psychological Safety", "Conversion Optimization", "Design Systems"],
    hasFullPage: true
  },
  {
    id: "lam-search",
    title: "LLM-Driven Smart Search Portal",
    client: "Lam Research / HCLTech",
    period: "2024 - Present",
    category: "Enterprise AI • Semiconductor • Knowledge Discovery",
    gradient: "from-blue-500 via-sky-400 to-indigo-500",
    metrics: [
      { val: "96%", label: "Faster Query Time (4.2m → 12s)" },
      { val: "60%", label: "Adoption Gain" },
      { val: "0", label: "Superseded Doc Errors" }
    ],
    summary: "Designed a two-page SPA Smart Search platform powered by Azure AI that maps semantic user intent across 14+ resource types, incorporating 3-layer SHA-256 fingerprint de-duplication.",
    details: [
      "Directed contextual research across Fab Field Service Engineers (FSEs) operating under cleanroom pressure.",
      "Architected 16 cascading accordion filters hiding zero-result facets dynamically.",
      "Built a ChatGPT-style landing entry point paired with a persistent, context-aware AI results workspace.",
      "Engineered SHA-256 content fingerprinting to collapse duplicate BUs and outdated revisions into a single card."
    ],
    tags: ["Azure AI Search", "LLM UX", "React", "Enterprise IA", "SHA-256 De-dupe"],
    hasFullPage: false
  },
  {
    id: "cadent-crm",
    title: "Gas Emergency CRM & DPLA Dashboard",
    client: "Cadent Gas Ltd / HCLTech",
    period: "2024 - Present",
    category: "High-Stakes HCI • Emergency Operations • Public Safety",
    gradient: "from-sky-600 via-blue-500 to-teal-500",
    metrics: [
      { val: "42%", label: "Faster Ticket Creation" },
      { val: "78%", label: "Error Reduction" },
      { val: "AAA", label: "WCAG 2.1 Contrast" }
    ],
    summary: "Reimagined a real-time gas emergency CRM using a 3-Screen Progressive Disclosure Flow and stress-ergo light-blue theme to mitigate agent cognitive fatigue during critical calls.",
    details: [
      "Transformed a flat 26-field emergency intake form into a linear, guided 3-step progressive workflow.",
      "Engineered a side-by-side psycholinguistic layout matching call script text to input fields horizontally.",
      "Applied a soft ice-blue surface palette (#F0F7FF) proven to lower adrenaline-induced visual fatigue (NASA-TLX).",
      "Integrated one-tap GDN API dispatch alongside live safety script delivery."
    ],
    tags: ["Risk UX", "Decision Support", "Emergency CRM", "Stress Ergonomics", "WCAG AAA"],
    hasFullPage: false
  }
];

const RESEARCH_PAPERS = [
  {
    venue: "ACM India HCI 2026",
    title: "Dignity-First Design in High-Stakes Financial UX: Mitigating Cognitive Tunneling and Funnel Abandonment in Digital Mortgage Systems",
    author: "Karthick Balakrishnan • 2026",
    abstract: "Explores how trust, clarity, and emotional regulation can be designed into high-stakes financial products without sacrificing conversion or operational efficiency. Evaluated via NASA-TLX cognitive workload metrics.",
    badge: "Case Study Published",
    note: "PenFed Credit Union Project"
  },
  {
    venue: "IEEE • HCI Research 2026",
    title: "AI-AVS: Cognitive Load Reduction in Enterprise Knowledge Discovery",
    author: "Karthick Balakrishnan • 2026",
    abstract: "Examines how enterprise search experiences become more trusted and cognitively efficient by combining semantic discovery, confidence cues, and behavior-informed filtering.",
    badge: "In Prep",
    note: "Lam Research Case Study"
  },
  {
    venue: "ACM CHI / IEEE 2025",
    title: "Stress-First Design for Emergency Response Systems",
    author: "Karthick Balakrishnan • 2025",
    abstract: "Focuses on operational UI patterns that reduce mental workload and improve decision confidence in time-critical public safety environments.",
    badge: "In Prep",
    note: "Cadent Gas Case Study"
  }
];

const EXPERIENCE = [
  {
    period: "June 2024 - Present",
    role: "Technical Lead, UX/Product Design",
    company: "HCL Technologies, Chennai, India",
    desc: "Leading enterprise UX engagements for high-impact programs across AI-powered knowledge platforms, public safety dashboards, and operational analytics.",
    tags: ["AI UX", "Design Systems", "Enterprise Product Strategy"]
  },
  {
    period: "May 2023 - March 2024",
    role: "Technical Lead, UX/Product Design",
    company: "HCL America, United States",
    desc: "Served as a key contributor on enterprise data center and financial operations redesigns, improving satisfaction and reducing task friction through clearer data prioritization.",
    tags: ["Fintech UX", "Dashboard Ergonomics", "Global Client Delivery"]
  },
  {
    period: "January 2021 - May 2023",
    role: "Technical Lead, UX/Product Design",
    company: "HCL Technologies, Chennai, India",
    desc: "Delivered product experience improvements for clients including Synchrony, World Bank, Caterpillar, and HP Inc., focusing on workflow simplification.",
    tags: ["Interaction Design", "Enterprise Workflows", "Stakeholder Alignment"]
  }
];

const EDUCATION = [
  {
    year: "2026 - 2029",
    title: "Ph.D. in Human-Computer Interaction",
    inst: "NITTTR, Chennai",
    copy: "Pursuing doctoral research in HCI, immersive technologies, and cognitive interface friction in high-stakes digital environments."
  },
  {
    year: "M.C.A.",
    title: "Master of Computer Applications",
    inst: "University of Madras, Chennai",
    copy: "Solidified foundation in software engineering principles, system architecture, and front-end interface development."
  },
  {
    year: "M.Sc.",
    title: "Master of Science in Psychology",
    inst: "University of Madras, Chennai",
    copy: "Advanced studies in cognitive psychology, human perception, and decision-making behavior applied directly to UX research."
  }
];

// --- MAIN APPLICATION COMPONENT ---
export default function PortfolioApp() {
  const [currentView, setCurrentView] = useState('portfolio'); // 'portfolio' | 'penfed-case-study'
  const [typewriterText, setTypewriterText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [expandedProject, setExpandedProject] = useState(null);

  // Typewriter Effect
  useEffect(() => {
    if (currentView !== 'portfolio') return;
    const currentRole = PERSONAL_INFO.roles[roleIndex];
    const timer = setTimeout(() => {
      if (!isDeleting) {
        setTypewriterText(currentRole.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
        if (charIndex + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setTypewriterText(currentRole.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setRoleIndex((roleIndex + 1) % PERSONAL_INFO.roles.length);
        }
      }
    }, isDeleting ? 40 : 90);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex, currentView]);

  // Scroll to top when changing views
  const navigateTo = (viewName) => {
    setCurrentView(viewName);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // If viewing the PenFed Complete Case Study, render the full multi-section document
  if (currentView === 'penfed-case-study') {
    return <PenFedCaseStudyPage onBack={() => navigateTo('portfolio')} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f0f7ff] via-[#e6f2ff] to-[#f7faff] text-[#0f253e] font-sans antialiased selection:bg-blue-200 selection:text-blue-900">
      
      {/* NAVIGATION */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-blue-100 shadow-sm transition-all">
        <div className="max-w-6xl mx-auto px-6 h-18 flex items-center justify-between">
          <a href="#" className="font-serif italic font-bold text-2xl text-[#0052cc] tracking-tight hover:opacity-80 transition-opacity">
            KB<span className="text-blue-500 font-sans not-italic text-sm ml-1 font-semibold">.ai</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            {['Research', 'Projects', 'Experience', 'Education', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-xs font-semibold text-[#4a6382] uppercase tracking-wider hover:text-[#0052cc] relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-blue-500 hover:after:w-full after:transition-all"
              >
                {item}
              </a>
            ))}
          </div>
          <a 
            href={`mailto:${PERSONAL_INFO.email}`} 
            className="flex items-center gap-2 bg-gradient-to-r from-[#0066ff] to-[#004080] text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-md hover:shadow-lg hover:translate-y-[-1px] transition-all"
          >
            <Mail size={14} />
            <span>Get in Touch</span>
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="max-w-6xl mx-auto px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-200 bg-white/90 shadow-sm text-xs font-mono font-semibold text-[#0052cc] uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              {PERSONAL_INFO.eyebrow}
            </div>

            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#0f253e] leading-[1.05]">
              Karthick <em className="italic text-[#0066ff] font-normal">Balakrishnan</em>
            </h1>

            <div className="flex items-center gap-3 text-lg text-[#4a6382] font-medium">
              <span className="text-[#0066ff] font-bold min-h-[28px] inline-block font-mono">
                {typewriterText}<span className="animate-blink">|</span>
              </span>
              <span className="text-blue-200">•</span>
              <span className="flex items-center gap-1 text-sm text-[#5a738e]">
                <MapPin size={14} className="text-[#0066ff]" /> {PERSONAL_INFO.location}
              </span>
            </div>

            <div className="relative bg-white/90 border border-blue-100 rounded-2xl p-6 shadow-xl backdrop-blur-sm overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#0066ff] via-[#3399ff] to-[#00cc99]" />
              <p className="text-[#3b526d] text-base leading-relaxed">
                {PERSONAL_INFO.summary}
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a 
                href={PERSONAL_INFO.cvLink} 
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-blue-200 text-[#3b526d] font-semibold text-sm hover:border-blue-400 hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <FileText size={16} className="text-blue-600" />
                <span>Download Executive CV</span>
              </a>
              <a 
                href="#projects" 
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-50 border border-blue-200 text-[#0052cc] font-semibold text-sm hover:bg-blue-100 transition-all"
              >
                <Sparkles size={16} />
                <span>Explore Redesigns</span>
              </a>
            </div>
          </div>

          {/* PROFILE CARD */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="bg-white/90 border border-blue-100 rounded-3xl p-6 shadow-xl w-full max-w-xs text-center relative overflow-hidden backdrop-blur-sm">
              <div className="relative w-48 h-48 mx-auto my-4 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-200 via-sky-100 to-teal-100 border border-blue-300/40 animate-spin-slow" />
                <div className="w-40 h-40 rounded-full bg-gradient-to-br from-[#eaf4ff] to-white border border-blue-200 flex items-center justify-center font-serif italic text-5xl text-[#0052cc] font-bold shadow-inner">
                  KB
                </div>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Open to PhD Collaborations
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* METRICS STATS BAR */}
      <section className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map((stat, i) => (
            <div key={i} className="bg-white/90 border border-blue-100 rounded-2xl p-5 text-center shadow-sm hover:shadow-md transition-shadow">
              <span className="font-serif italic text-3xl md:text-4xl font-bold text-[#0052cc] block mb-1">{stat.value}</span>
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#5a738e]">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CASE STUDIES / PROJECTS SECTION */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-center gap-4 mb-10">
          <span className="font-mono text-xs font-bold text-[#0052cc] uppercase tracking-widest">// 01</span>
          <h2 className="font-serif italic text-3xl md:text-4xl font-bold text-[#0f253e]">Strategic Case Studies</h2>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-blue-200 to-transparent" />
        </div>

        <div className="space-y-8">
          {CASE_STUDIES.map((project) => {
            const isExpanded = expandedProject === project.id;
            return (
              <div 
                key={project.id} 
                className="bg-white/90 border border-blue-100 rounded-3xl overflow-hidden shadow-lg hover:border-blue-300 transition-all"
              >
                <div className={`h-2.5 bg-gradient-to-r ${project.gradient}`} />
                <div className="p-8">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
                    <span className="font-mono text-xs font-semibold text-[#5a738e] uppercase tracking-wider">{project.category}</span>
                    <span className="text-xs font-bold font-mono px-3 py-1 bg-blue-50 text-blue-700 rounded-lg border border-blue-100">{project.period}</span>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div>
                      <h3 className="font-serif italic text-2xl md:text-3xl font-bold text-[#0f253e]">{project.title}</h3>
                      <p className="text-sm font-semibold text-[#0052cc] mt-1">{project.client}</p>
                    </div>

                    {/* SINGLE VIEW PROJECT BUTTON */}
                    {project.hasFullPage ? (
                      <button 
                        onClick={() => navigateTo('penfed-case-study')}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0066ff] text-white font-semibold text-xs hover:bg-[#004080] transition-colors shadow-sm hover:shadow group"
                      >
                        <span>View Project</span>
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    ) : (
                      <span className="text-xs font-mono font-semibold text-gray-400 bg-gray-100 px-3 py-1.5 rounded-lg border border-gray-200">
                        Enterprise NDA Restricted
                      </span>
                    )}
                  </div>

                  {/* METRICS GRID */}
                  <div className="grid grid-cols-3 gap-3 mb-6 bg-[#f0f7ff] p-4 rounded-2xl border border-blue-100">
                    {project.metrics.map((m, idx) => (
                      <div key={idx} className="text-center">
                        <span className="font-serif italic text-xl md:text-2xl font-bold text-[#0052cc] block">{m.val}</span>
                        <span className="text-[10px] font-mono font-bold text-[#5a738e] uppercase tracking-tight">{m.label}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-[#3b526d] text-sm leading-relaxed mb-6">{project.summary}</p>

                  <div className="flex items-center justify-between border-t border-blue-50 pt-4">
                    <button 
                      onClick={() => setExpandedProject(isExpanded ? null : project.id)}
                      className="inline-flex items-center gap-2 text-xs font-bold text-[#0052cc] hover:text-blue-800 transition-colors"
                    >
                      <span>{isExpanded ? "Hide Overview" : "Quick Overview"}</span>
                      {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>

                    <div className="hidden sm:flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag, i) => (
                        <span key={i} className="text-[10px] font-mono px-2.5 py-1 bg-blue-50/80 text-blue-800 rounded-md border border-blue-100">{tag}</span>
                      ))}
                    </div>
                  </div>

                  {/* EXPANDABLE DETAILS */}
                  {isExpanded && (
                    <div className="mt-6 pt-6 border-t border-blue-100 space-y-4 animate-fadeIn">
                      <h4 className="font-mono text-xs font-bold text-[#5a738e] uppercase tracking-wider">High-Level Deliverables</h4>
                      <ul className="space-y-2">
                        {project.details.map((detail, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-3 text-sm text-[#3b526d]">
                            <ArrowRight size={16} className="text-blue-500 mt-0.5 shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* RESEARCH SECTION */}
      <section id="research" className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-center gap-4 mb-10">
          <span className="font-mono text-xs font-bold text-[#0052cc] uppercase tracking-widest">// 02</span>
          <h2 className="font-serif italic text-3xl md:text-4xl font-bold text-[#0f253e]">Academic Research & Publications</h2>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-blue-200 to-transparent" />
        </div>

        <div className="bg-white/90 border border-blue-100 rounded-3xl overflow-hidden shadow-lg divide-y divide-blue-50">
          {RESEARCH_PAPERS.map((paper, idx) => (
            <div key={idx} className="p-6 md:p-8 hover:bg-blue-50/40 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2 max-w-3xl">
                <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-wider">{paper.venue}</span>
                <h3 className="font-serif italic text-xl font-bold text-[#0f253e]">{paper.title}</h3>
                <p className="font-mono text-xs text-gray-400">{paper.author}</p>
                <p className="text-sm text-[#3b526d] leading-relaxed pt-1">{paper.abstract}</p>
              </div>
              <div className="md:text-right shrink-0 space-y-2">
                <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-800 font-mono text-[11px] font-bold uppercase">{paper.badge}</span>
                <p className="font-mono text-[11px] text-gray-500">{paper.note}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-center gap-4 mb-10">
          <span className="font-mono text-xs font-bold text-[#0052cc] uppercase tracking-widest">// 03</span>
          <h2 className="font-serif italic text-3xl md:text-4xl font-bold text-[#0f253e]">Professional Experience</h2>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-blue-200 to-transparent" />
        </div>

        <div className="relative border-l-2 border-blue-200 ml-4 pl-8 space-y-10">
          {EXPERIENCE.map((exp, idx) => (
            <div key={idx} className="relative group">
              <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-sm group-hover:scale-125 transition-transform" />
              <div className="bg-white/90 border border-blue-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <span className="font-mono text-xs font-semibold text-[#5a738e] block mb-1">{exp.period}</span>
                <h3 className="text-lg font-bold text-[#0f253e]">{exp.role}</h3>
                <p className="text-sm font-semibold text-[#0052cc] mb-3">{exp.company}</p>
                <p className="text-sm text-[#3b526d] leading-relaxed mb-4">{exp.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((t, tIdx) => (
                    <span key={tIdx} className="text-[10px] font-mono px-2.5 py-1 bg-blue-50 text-blue-700 rounded-md border border-blue-100">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EDUCATION SECTION */}
      <section id="education" className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-center gap-4 mb-10">
          <span className="font-mono text-xs font-bold text-[#0052cc] uppercase tracking-widest">// 04</span>
          <h2 className="font-serif italic text-3xl md:text-4xl font-bold text-[#0f253e]">Academic Background</h2>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-blue-200 to-transparent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {EDUCATION.map((edu, idx) => (
            <div key={idx} className="bg-white/90 border border-blue-100 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs font-bold text-blue-600 block mb-2">{edu.year}</span>
                <h3 className="text-base font-bold text-[#0f253e] mb-1">{edu.title}</h3>
                <p className="text-xs font-semibold text-[#5a738e] mb-4">{edu.inst}</p>
                <p className="text-xs text-[#3b526d] leading-relaxed">{edu.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="border-t border-blue-100 bg-white/60 py-12">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-4">
          <p className="font-serif italic text-2xl font-bold text-[#0f253e]">Karthick Balakrishnan</p>
          <p className="text-xs font-mono text-[#5a738e] uppercase tracking-widest">AI UX Architect • Lead HCI Researcher • Enterprise Product Strategist</p>
          <div className="pt-4 flex justify-center gap-6 text-xs font-bold text-[#0052cc]">
            <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:underline">Email</a>
            <a href={PERSONAL_INFO.linkedIn} target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a>
            <a href={PERSONAL_INFO.cvLink} className="hover:underline">Executive Resume</a>
          </div>
          <p className="text-[11px] text-gray-400 pt-6">© 2026 Karthick Balakrishnan. Ice Blue & Polar White Architecture.</p>
        </div>
      </footer>

    </div>
  );
}

// ============================================================================
// COMPLETE PENFED CASE STUDY PAGE COMPONENT (ALL 20 SECTIONS INCLUDED)
// ============================================================================
function PenFedCaseStudyPage({ onBack }) {
  const [activeNav, setActiveNav] = useState('problem');

  const navItems = [
    { id: 'problem', label: '01. Baseline Funnel' },
    { id: 'sequencing', label: '02. Research Plan' },
    { id: 'stakeholder', label: '03. Stakeholders' },
    { id: 'users', label: '04. User Research' },
    { id: 'personas', label: '05. Personas' },
    { id: 'empathy', label: '06. Empathy' },
    { id: 'painpoints', label: '07. Pain Matrix' },
    { id: 'methods', label: '08. Methods' },
    { id: 'frameworks', label: '09. Frameworks' },
    { id: 'lo', label: '10. LO Workflow' },
    { id: 'ia', label: '11. IA Architecture' },
    { id: 'flows', label: '12. User Flows' },
    { id: 'interaction', label: '13. Interaction' },
    { id: 'income', label: '14. Income' },
    { id: 'upload', label: '15. Upload' },
    { id: 'iteration', label: '16. Iteration' },
    { id: 'preloan', label: '17. Pre-Loan Letter' },
    { id: 'engine', label: '18. LO Engine' },
    { id: 'outcomes', label: '19. Outcomes' },
    { id: 'conclusion', label: '20. Conclusion' }
  ];

  return (
    <div className="min-h-screen bg-[#f4f8fc] text-[#0f253e] font-sans antialiased selection:bg-blue-200 selection:text-blue-900">
      
      {/* PERSISTENT HEADER BAR */}
      <nav className="sticky top-0 z-50 bg-white/95 border-b border-blue-100 shadow-sm backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <button 
            onClick={onBack}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-blue-50 text-[#0052cc] text-xs font-bold border border-blue-200 hover:bg-blue-100 transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Back to Portfolio</span>
          </button>

          <div className="hidden lg:flex items-center gap-2 text-xs font-mono font-semibold text-[#5a738e]">
            <span className="text-[#0052cc]">PenFed Credit Union</span>
            <span>/</span>
            <span>Dignity-First Mortgage Platform</span>
          </div>

          <a 
            href="mailto:b.karthick@live.com"
            className="inline-flex items-center gap-1.5 bg-[#0066ff] text-white text-xs font-bold px-3.5 py-2 rounded-xl shadow-sm hover:bg-[#004080] transition-all"
          >
            <Mail size={14} />
            <span>Contact Author</span>
          </a>
        </div>

        {/* SECTION SUB-NAVBAR */}
        <div className="bg-[#ebf4ff] border-t border-blue-100 px-6 overflow-x-auto py-2.5 flex items-center gap-6 scrollbar-none">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setActiveNav(item.id)}
              className={`text-[11px] font-mono font-semibold whitespace-nowrap transition-colors uppercase tracking-wider ${
                activeNav === item.id 
                  ? 'text-[#0052cc] border-b-2 border-[#0052cc] pb-0.5' 
                  : 'text-[#5a738e] hover:text-[#0052cc]'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      {/* CASE STUDY HERO */}
      <header className="bg-gradient-to-b from-white via-[#f0f7ff] to-[#f4f8fc] border-b border-blue-100 py-16 px-6">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-[#0052cc] text-xs font-mono font-bold uppercase tracking-wider">
            <Award size={14} />
            <span>ACM India HCI 2026 • Full Research Case Study</span>
          </div>

          <h1 className="font-serif italic text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0f253e] leading-tight max-w-5xl">
            From <span className="text-[#0066ff] not-italic font-normal">Stranger</span> to <span className="text-[#0066ff] not-italic font-normal">Homeowner</span>: Redesigning Financial Dignity
          </h1>

          <p className="text-lg text-[#3b526d] max-w-3xl leading-relaxed">
            A comprehensive Human-Computer Interaction case study evaluating the operational and psychological mechanics of a 33-step enterprise mortgage portal, transforming a 62% funnel drop-off into a high-trust digital experience.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-blue-100 font-mono text-xs text-[#5a738e]">
            <div>
              <span className="block text-[10px] text-gray-400 uppercase">Client</span>
              <strong className="text-[#0f253e] font-semibold">PenFed Credit Union (USA)</strong>
            </div>
            <div>
              <span className="block text-[10px] text-gray-400 uppercase">Methodology</span>
              <strong className="text-[#0f253e] font-semibold">NASA-TLX, A/B Testing, UT</strong>
            </div>
            <div>
              <span className="block text-[10px] text-gray-400 uppercase">Key Artifacts</span>
              <strong className="text-[#0f253e] font-semibold">LO Engine, Readiness Score</strong>
            </div>
            <div>
              <span className="block text-[10px] text-gray-400 uppercase">Primary Outcome</span>
              <strong className="text-[#0052cc] font-bold">+42% Application Conversion</strong>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT CONTAINER */}
      <main className="max-w-6xl mx-auto px-6 py-12 space-y-20">

        {/* SECTION 01: PROBLEM FRAMING */}
        <section id="problem" className="scroll-mt-32 space-y-6">
          <div className="flex items-center gap-3 border-b border-blue-100 pb-3">
            <span className="font-mono text-xs font-bold text-[#0052cc] uppercase tracking-widest">// SECTION 01</span>
            <h2 className="font-serif italic text-2xl md:text-3xl font-bold text-[#0f253e]">Problem Framing & Baseline Funnel Drop-off</h2>
          </div>

          <p className="text-[#3b526d] leading-relaxed">
            Before proposing a single UI component, we established a quantified baseline: precise abandonment percentages at every stage of the legacy application. Without this, no claim of improvement can be data-supported, and no intervention can be traced to a specific failure point.
          </p>

          <div className="bg-white border border-blue-100 rounded-2xl p-6 shadow-sm space-y-4">
            <h3 className="font-mono text-xs font-bold text-[#0052cc] uppercase tracking-wider">Quantified Baseline Funnel (n=18,400 Application Starts)</h3>
            
            <div className="space-y-3 font-mono text-xs">
              <div>
                <div className="flex justify-between mb-1">
                  <span>Step 1: Application Page Reached</span>
                  <span className="font-bold text-blue-600">100%</span>
                </div>
                <div className="w-full h-3 bg-blue-50 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 w-full" />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span>Step 2: First Field Interaction</span>
                  <span className="font-bold text-blue-600">82%</span>
                </div>
                <div className="w-full h-3 bg-blue-50 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 w-[82%]" />
                </div>
                <span className="text-[10px] text-red-500">18% left without touching Step 1 — no orientation provided.</span>
              </div>

              <div>
                <div className="flex justify-between mb-1 text-red-600 font-bold">
                  <span>Step 3: 11-Doc List Displayed (PRIMARY EXIT POINT)</span>
                  <span>38%</span>
                </div>
                <div className="w-full h-3 bg-red-50 rounded-full overflow-hidden">
                  <div className="h-full bg-red-500 w-[38%]" />
                </div>
                <span className="text-[10px] text-red-600 font-bold">52% abandoned in under 90 seconds of seeing the overwhelming document list.</span>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span>Steps 4–32: General Form Body</span>
                  <span className="font-bold text-blue-600">28%</span>
                </div>
                <div className="w-full h-3 bg-blue-50 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-400 w-[28%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1 text-red-600 font-bold">
                  <span>Step 33: Validation Blindside (SECONDARY EXIT)</span>
                  <span>18%</span>
                </div>
                <div className="w-full h-3 bg-red-50 rounded-full overflow-hidden">
                  <div className="h-full bg-red-500 w-[18%]" />
                </div>
                <span className="text-[10px] text-red-600">28% of those who reached Step 33 abandoned after 45+ minutes of work.</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 02: RESEARCH SEQUENCING */}
        <section id="sequencing" className="scroll-mt-32 space-y-6">
          <div className="flex items-center gap-3 border-b border-blue-100 pb-3">
            <span className="font-mono text-xs font-bold text-[#0052cc] uppercase tracking-widest">// SECTION 02</span>
            <h2 className="font-serif italic text-2xl md:text-3xl font-bold text-[#0f253e]">Research Sequencing & Double Diamond Plan</h2>
          </div>

          <p className="text-[#3b526d] leading-relaxed">
            In high-stakes financial UX, research order is paramount. Testing before diagnosing produces solutions to the wrong problem. We structured our research over a 26-week Double Diamond framework.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
            <div className="bg-white p-5 border border-blue-100 rounded-xl space-y-2">
              <span className="text-blue-600 font-bold">Weeks 1–4: Discover & Audit</span>
              <p className="text-[#3b526d] text-xs">Stakeholder interviews (n=14), Analytics Funnel Audit (n=18,400), and Session Replay coding (n=340).</p>
            </div>
            <div className="bg-white p-5 border border-blue-100 rounded-xl space-y-2">
              <span className="text-blue-600 font-bold">Weeks 5–12: Define & Shadow</span>
              <p className="text-[#3b526d] text-xs">Exit surveys (n=320), Moderated Think-Aloud UT (n=20), and Loan Officer workflow shadowing (n=8).</p>
            </div>
            <div className="bg-white p-5 border border-blue-100 rounded-xl space-y-2">
              <span className="text-blue-600 font-bold">Weeks 13–20: Develop & Design</span>
              <p className="text-[#3b526d] text-xs">Card sorting (n=24), failed chatbot prototype iteration, and Ice Blue Design System production.</p>
            </div>
            <div className="bg-white p-5 border border-blue-100 rounded-xl space-y-2">
              <span className="text-blue-600 font-bold">Weeks 21–26: Deliver & Validate</span>
              <p className="text-[#3b526d] text-xs">A/B Testing (n=2,400), NASA-TLX re-measurement, and LO Engine deployment.</p>
            </div>
          </div>
        </section>

        {/* SECTION 03: STAKEHOLDER RESEARCH */}
        <section id="stakeholder" className="scroll-mt-32 space-y-6">
          <div className="flex items-center gap-3 border-b border-blue-100 pb-3">
            <span className="font-mono text-xs font-bold text-[#0052cc] uppercase tracking-widest">// SECTION 03</span>
            <h2 className="font-serif italic text-2xl md:text-3xl font-bold text-[#0f253e]">Stakeholder Research & Alignment</h2>
          </div>

          <div className="bg-white border border-blue-100 rounded-2xl p-6 shadow-sm space-y-4">
            <h3 className="font-mono text-xs font-bold text-[#0052cc] uppercase tracking-wider">Internal Perspectives Across 5 Functions (n=14)</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="p-4 bg-blue-50/50 rounded-xl border border-blue-100">
                <strong className="block text-[#0f253e] mb-1">Loan Officers (n=4)</strong>
                <p className="text-[#3b526d]">"At least half of my applications are missing critical documents. I spend 20 minutes triaging before calling."</p>
              </div>
              <div className="p-4 bg-blue-50/50 rounded-xl border border-blue-100">
                <strong className="block text-[#0f253e] mb-1">Call Center Leads (n=3)</strong>
                <p className="text-[#3b526d]">"70% of calls on Monday are status inquiries from applicants who don't know what happens next."</p>
              </div>
              <div className="p-4 bg-blue-50/50 rounded-xl border border-blue-100">
                <strong className="block text-[#0f253e] mb-1">Compliance Officers (n=2)</strong>
                <p className="text-[#3b526d]">"Mandatory RESPA, ECOA, and Reg B disclosures cannot be buried; pre-approval must be conditional."</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 04: USER RESEARCH & RECRUITMENT */}
        <section id="users" className="scroll-mt-32 space-y-6">
          <div className="flex items-center gap-3 border-b border-blue-100 pb-3">
            <span className="font-mono text-xs font-bold text-[#0052cc] uppercase tracking-widest">// SECTION 04</span>
            <h2 className="font-serif italic text-2xl md:text-3xl font-bold text-[#0f253e]">End-User Research & Archetype Recruiting</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-5 border border-blue-100 rounded-2xl space-y-2">
              <span className="text-xs font-mono font-bold text-blue-600 block">TYPE A</span>
              <h4 className="font-bold text-sm text-[#0f253e]">First-Time Buyer (Guest)</h4>
              <p className="text-xs text-[#3b526d]">High financial anxiety, zero PenFed relationship, needs orientation.</p>
            </div>
            <div className="bg-white p-5 border border-blue-100 rounded-2xl space-y-2">
              <span className="text-xs font-mono font-bold text-blue-600 block">TYPE B</span>
              <h4 className="font-bold text-sm text-[#0f253e]">Existing Member (Refi)</h4>
              <p className="text-xs text-[#3b526d]">Expects institutional recognition; frustrated by manual re-entry.</p>
            </div>
            <div className="bg-white p-5 border border-blue-100 rounded-2xl space-y-2">
              <span className="text-xs font-mono font-bold text-blue-600 block">TYPE C</span>
              <h4 className="font-bold text-sm text-[#0f253e]">Co-Applicant Pairs</h4>
              <p className="text-xs text-[#3b526d]">Needs asynchronous workflow options due to conflicting schedules.</p>
            </div>
            <div className="bg-white p-5 border border-blue-100 rounded-2xl space-y-2">
              <span className="text-xs font-mono font-bold text-blue-600 block">TYPE D</span>
              <h4 className="font-bold text-sm text-[#0f253e]">Military / VA Applicant</h4>
              <p className="text-xs text-[#3b526d]">Time-zone constrained; requires specialized BAH/COE handling.</p>
            </div>
          </div>
        </section>

        {/* SECTION 05: PERSONAS */}
        <section id="personas" className="scroll-mt-32 space-y-6">
          <div className="flex items-center gap-3 border-b border-blue-100 pb-3">
            <span className="font-mono text-xs font-bold text-[#0052cc] uppercase tracking-widest">// SECTION 05</span>
            <h2 className="font-serif italic text-2xl md:text-3xl font-bold text-[#0f253e]">Research-Derived User Personas</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-blue-100 rounded-2xl p-6 space-y-3">
              <span className="text-xs font-mono text-blue-600 font-bold">PERSONA A • MAYA CHEN</span>
              <h3 className="font-bold text-[#0f253e]">First-Time Buyer (San Jose, CA)</h3>
              <p className="text-xs text-[#3b526d] leading-relaxed">
                "I kept second-guessing whether I was filling things in right. The form just sat there waiting, and I had nobody to ask."
              </p>
            </div>
            <div className="bg-white border border-blue-100 rounded-2xl p-6 space-y-3">
              <span className="text-xs font-mono text-blue-600 font-bold">PERSONA C • CPT. DAVID PARK</span>
              <h3 className="font-bold text-[#0f253e]">US Army, Deployed (South Korea)</h3>
              <p className="text-xs text-[#3b526d] leading-relaxed">
                "I am trying to buy a home from 13 time zones away. I need this to work without calling anyone between 9 AM and 5 PM EST."
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 06: EMPATHY MAPS */}
        <section id="empathy" className="scroll-mt-32 space-y-6">
          <div className="flex items-center gap-3 border-b border-blue-100 pb-3">
            <span className="font-mono text-xs font-bold text-[#0052cc] uppercase tracking-widest">// SECTION 06</span>
            <h2 className="font-serif italic text-2xl md:text-3xl font-bold text-[#0f253e]">Empathy Mapping: Maya Chen</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
            <div className="bg-white p-4 border border-blue-100 rounded-xl">
              <strong className="block text-blue-600 font-mono mb-2">💬 SAYS</strong>
              <p className="text-[#3b526d]">"How long is this going to take? Do I have all these documents ready?"</p>
            </div>
            <div className="bg-white p-4 border border-blue-100 rounded-xl">
              <strong className="block text-blue-600 font-mono mb-2">💭 THINKS</strong>
              <p className="text-[#3b526d]">"What if I enter something wrong and get rejected? Nobody is watching if I leave."</p>
            </div>
            <div className="bg-white p-4 border border-blue-100 rounded-xl">
              <strong className="block text-blue-600 font-mono mb-2">⚡ DOES</strong>
              <p className="text-[#3b526d]">Opens 4 tabs, scrolls to bottom of doc list, stops at SSN field for 3 mins, leaves.</p>
            </div>
            <div className="bg-white p-4 border border-blue-100 rounded-xl">
              <strong className="block text-blue-600 font-mono mb-2">❤️ FEELS</strong>
              <p className="text-[#3b526d]">Anxious, overwhelmed, untrusted, and emotionally exhausted.</p>
            </div>
          </div>
        </section>

        {/* SECTION 07: PAIN POINT MATRIX */}
        <section id="painpoints" className="scroll-mt-32 space-y-6">
          <div className="flex items-center gap-3 border-b border-blue-100 pb-3">
            <span className="font-mono text-xs font-bold text-[#0052cc] uppercase tracking-widest">// SECTION 07</span>
            <h2 className="font-serif italic text-2xl md:text-3xl font-bold text-[#0f253e]">Cross-Segment Pain Point Matrix</h2>
          </div>

          <div className="overflow-x-auto bg-white border border-blue-100 rounded-2xl">
            <table className="w-full text-left text-xs font-sans border-collapse">
              <thead>
                <tr className="bg-blue-50/50 border-b border-blue-100 font-mono text-blue-900">
                  <th className="p-3">Stage</th>
                  <th className="p-3">Maya (Guest)</th>
                  <th className="p-3">James (Member)</th>
                  <th className="p-3">Cpt. Park (Military)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-blue-50 text-[#3b526d]">
                <tr>
                  <td className="p-3 font-bold text-[#0f253e]">Start</td>
                  <td className="p-3">No orientation or welcome.</td>
                  <td className="p-3">Not recognized as member.</td>
                  <td className="p-3">VA loan option obscured.</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-[#0f253e]">Step 3 Docs</td>
                  <td className="p-3">Abandons at 11-doc wall.</td>
                  <td className="p-3">Dislikes redundant uploads.</td>
                  <td className="p-3">COE upload slot missing.</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-[#0f253e]">Post-Submit</td>
                  <td className="p-3">Anxious status waiting.</td>
                  <td className="p-3">Generic response call.</td>
                  <td className="p-3">9–5 EST call impossible.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION 08: RESEARCH METHODS */}
        <section id="methods" className="scroll-mt-32 space-y-6">
          <div className="flex items-center gap-3 border-b border-blue-100 pb-3">
            <span className="font-mono text-xs font-bold text-[#0052cc] uppercase tracking-widest">// SECTION 08</span>
            <h2 className="font-serif italic text-2xl md:text-3xl font-bold text-[#0f253e]">Research Methods Inventory</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="bg-white p-4 border border-blue-100 rounded-xl">
              <strong className="block text-blue-600 font-bold mb-1">01. Session Replay (n=340)</strong>
              <p className="text-[#3b526d]">Hotjar recordings coded for rage-clicks, hover hesitations, and drop-off triggers.</p>
            </div>
            <div className="bg-white p-4 border border-blue-100 rounded-xl">
              <strong className="block text-blue-600 font-bold mb-1">02. NASA-TLX Scale</strong>
              <p className="text-[#3b526d]">Standardized cognitive workload index measuring mental, physical, and temporal demands.</p>
            </div>
            <div className="bg-white p-4 border border-blue-100 rounded-xl">
              <strong className="block text-blue-600 font-bold mb-1">03. Card Sorting (n=24)</strong>
              <p className="text-[#3b526d]">Unmoderated card sort via Optimal Workshop to restructure database-driven IA.</p>
            </div>
          </div>
        </section>

        {/* SECTION 09: PSYCHOLOGICAL FRAMEWORKS */}
        <section id="frameworks" className="scroll-mt-32 space-y-6">
          <div className="flex items-center gap-3 border-b border-blue-100 pb-3">
            <span className="font-mono text-xs font-bold text-[#0052cc] uppercase tracking-widest">// SECTION 09</span>
            <h2 className="font-serif italic text-2xl md:text-3xl font-bold text-[#0f253e]">Applied Behavioural Frameworks</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="bg-white p-5 border border-blue-100 rounded-xl">
              <h4 className="font-bold text-[#0f253e] mb-1">Cognitive Load Theory (Sweller)</h4>
              <p className="text-[#3b526d]">Eliminated extraneous load from 33 unordered steps into 6 focused progressive panels.</p>
            </div>
            <div className="bg-white p-5 border border-blue-100 rounded-xl">
              <h4 className="font-bold text-[#0f253e] mb-1">Goal Gradient Effect (Kivetz)</h4>
              <p className="text-[#3b526d]">Progressive bar showing real-time readiness acceleration to motivate completion.</p>
            </div>
          </div>
        </section>

        {/* SECTION 10: LOAN OFFICER WORKFLOW */}
        <section id="lo" className="scroll-mt-32 space-y-6">
          <div className="flex items-center gap-3 border-b border-blue-100 pb-3">
            <span className="font-mono text-xs font-bold text-[#0052cc] uppercase tracking-widest">// SECTION 10</span>
            <h2 className="font-serif italic text-2xl md:text-3xl font-bold text-[#0f253e]">Loan Officer Workflow Optimization</h2>
          </div>

          <div className="bg-white border border-blue-100 rounded-2xl p-6 space-y-4">
            <h3 className="font-mono text-xs font-bold text-[#0052cc] uppercase tracking-wider">Before vs. After LO Operational Efficiency</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
              <div className="p-4 bg-red-50/50 rounded-xl border border-red-100">
                <strong className="block text-red-900 font-bold mb-1">AS-IS LO FLOW (55–70 Min Prep)</strong>
                <p className="text-red-800">Generic email alert → Manual CRM triage → Missing doc identification → Cold call (34% connect) → Unstructured 23-min review.</p>
              </div>
              <div className="p-4 bg-emerald-50/50 rounded-xl border border-emerald-100">
                <strong className="block text-emerald-900 font-bold mb-1">REDESIGNED LO FLOW (16 Min Total)</strong>
                <p className="text-emerald-800">Automated Readiness Score → Pre-filled calendar slot → Auto-generated gap brief → Structured 11-min review.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 11: INFORMATION ARCHITECTURE */}
        <section id="ia" className="scroll-mt-32 space-y-6">
          <div className="flex items-center gap-3 border-b border-blue-100 pb-3">
            <span className="font-mono text-xs font-bold text-[#0052cc] uppercase tracking-widest">// SECTION 11</span>
            <h2 className="font-serif italic text-2xl md:text-3xl font-bold text-[#0f253e]">6-Step Information Architecture</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-center text-xs font-mono">
            <div className="p-3 bg-white border border-blue-100 rounded-xl">01. Goal</div>
            <div className="p-3 bg-white border border-blue-100 rounded-xl">02. Identity</div>
            <div className="p-3 bg-white border border-blue-100 rounded-xl">03. Property</div>
            <div className="p-3 bg-white border border-blue-100 rounded-xl">04. Income</div>
            <div className="p-3 bg-white border border-blue-100 rounded-xl">05. Assets</div>
            <div className="p-3 bg-white border border-blue-100 rounded-xl">06. Review</div>
          </div>
        </section>

        {/* SECTION 12: USER FLOWS */}
        <section id="flows" className="scroll-mt-32 space-y-6">
          <div className="flex items-center gap-3 border-b border-blue-100 pb-3">
            <span className="font-mono text-xs font-bold text-[#0052cc] uppercase tracking-widest">// SECTION 12</span>
            <h2 className="font-serif italic text-2xl md:text-3xl font-bold text-[#0f253e]">Asynchronous User Flows</h2>
          </div>

          <p className="text-xs text-[#3b526d] leading-relaxed bg-white p-5 border border-blue-100 rounded-2xl">
            Co-applicants receive secure individual magic links to complete their respective income sections asynchronously without sharing credentials or waiting for simultaneous free time.
          </p>
        </section>

        {/* SECTION 13: INTERACTION DESIGN & TRUST */}
        <section id="interaction" className="scroll-mt-32 space-y-6">
          <div className="flex items-center gap-3 border-b border-blue-100 pb-3">
            <span className="font-mono text-xs font-bold text-[#0052cc] uppercase tracking-widest">// SECTION 13</span>
            <h2 className="font-serif italic text-2xl md:text-3xl font-bold text-[#0f253e]">SSN Trust Layer & Inline Micro-Interactions</h2>
          </div>

          <div className="bg-white p-6 border border-blue-100 rounded-2xl space-y-3 text-xs">
            <h4 className="font-bold text-[#0f253e]">Contextual SSN Request Shield</h4>
            <p className="text-[#3b526d]">
              Added explicit trust copy: "We use soft credit checks to protect your score during pre-qualification. Your SSN is encrypted end-to-end."
            </p>
          </div>
        </section>

        {/* SECTION 14: VARIABLE INCOME UX */}
        <section id="income" className="scroll-mt-32 space-y-6">
          <div className="flex items-center gap-3 border-b border-blue-100 pb-3">
            <span className="font-mono text-xs font-bold text-[#0052cc] uppercase tracking-widest">// SECTION 14</span>
            <h2 className="font-serif italic text-2xl md:text-3xl font-bold text-[#0f253e]">Grouped Panel Income Entry</h2>
          </div>

          <p className="text-xs text-[#3b526d] bg-white p-5 border border-blue-100 rounded-2xl">
            Replaced rigid single-field gross income prompts with specialized input modules for W-2, RSU, BAH/military allowance, and self-employment Schedule C revenue.
          </p>
        </section>

        {/* SECTION 15: PROGRESSIVE UPLOADS */}
        <section id="upload" className="scroll-mt-32 space-y-6">
          <div className="flex items-center gap-3 border-b border-blue-100 pb-3">
            <span className="font-mono text-xs font-bold text-[#0052cc] uppercase tracking-widest">// SECTION 15</span>
            <h2 className="font-serif italic text-2xl md:text-3xl font-bold text-[#0f253e]">Progressive Document Collection</h2>
          </div>

          <div className="bg-white p-6 border border-blue-100 rounded-2xl text-xs space-y-2">
            <span className="font-mono text-blue-600 font-bold">DEFERRED DOCUMENTATION PATTERN</span>
            <p className="text-[#3b526d]">
              Only 2 essential documents are requested at application submission; the remaining 9 are deferred post-submission without blocking pre-qualification.
            </p>
          </div>
        </section>

        {/* SECTION 16: PROTOTYPE ITERATION */}
        <section id="iteration" className="scroll-mt-32 space-y-6">
          <div className="flex items-center gap-3 border-b border-blue-100 pb-3">
            <span className="font-mono text-xs font-bold text-[#0052cc] uppercase tracking-widest">// SECTION 16</span>
            <h2 className="font-serif italic text-2xl md:text-3xl font-bold text-[#0f253e]">Prototype Failure & Rapid Iteration</h2>
          </div>

          <div className="bg-white p-6 border border-blue-100 rounded-2xl space-y-3 text-xs">
            <span className="text-red-500 font-mono font-bold">FAILED MID-FI HYPOTHESIS: CONVERSATIONAL CHATBOT</span>
            <p className="text-[#3b526d]">
              Testing revealed applicants felt an AI chatbot was inefficient for financial data entry (NASA-TLX score spiked to 81.2). Iterated immediately to structured grouped panels.
            </p>
          </div>
        </section>

        {/* SECTION 17: PRE-LOAN SUCCESS LETTER */}
        <section id="preloan" className="scroll-mt-32 space-y-6">
          <div className="flex items-center gap-3 border-b border-blue-100 pb-3">
            <span className="font-mono text-xs font-bold text-[#0052cc] uppercase tracking-widest">// SECTION 17</span>
            <h2 className="font-serif italic text-2xl md:text-3xl font-bold text-[#0f253e]">Instant Pre-Loan Success Letter</h2>
          </div>

          <div className="bg-white border-2 border-blue-200 rounded-2xl p-6 shadow-sm space-y-4">
            <div className="flex justify-between items-center border-b border-blue-100 pb-3">
              <span className="font-serif italic font-bold text-lg text-[#0052cc]">PenFed Conditional Pre-Approval</span>
              <span className="font-mono text-xs text-emerald-600 font-bold">INSTANT PDF GENERATED</span>
            </div>
            <p className="text-xs text-[#3b526d]">
              Submitted applications instantly issue an official PDF Conditional Pre-Approval Certificate with precise estimated purchasing capacity based on entered readiness data.
            </p>
          </div>
        </section>

        {/* SECTION 18: LO SCHEDULING ENGINE */}
        <section id="engine" className="scroll-mt-32 space-y-6">
          <div className="flex items-center gap-3 border-b border-blue-100 pb-3">
            <span className="font-mono text-xs font-bold text-[#0052cc] uppercase tracking-widest">// SECTION 18</span>
            <h2 className="font-serif italic text-2xl md:text-3xl font-bold text-[#0f253e]">Time-Zone Aware LO Booking Engine</h2>
          </div>

          <div className="bg-white p-6 border border-blue-100 rounded-2xl text-xs space-y-2">
            <span className="font-mono text-blue-600 font-bold">DIRECT CALENDAR INTEGRATION</span>
            <p className="text-[#3b526d]">
              Eliminated cold calls by embedding live LO calendar booking directly on the confirmation screen, automatically converting applicant time zones for overseas military members.
            </p>
          </div>
        </section>

        {/* SECTION 19: MEASURED OUTCOMES */}
        <section id="outcomes" className="scroll-mt-32 space-y-6">
          <div className="flex items-center gap-3 border-b border-blue-100 pb-3">
            <span className="font-mono text-xs font-bold text-[#0052cc] uppercase tracking-widest">// SECTION 19</span>
            <h2 className="font-serif italic text-2xl md:text-3xl font-bold text-[#0f253e]">Measured Enterprise Business Outcomes</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-white p-5 border border-blue-100 rounded-2xl text-center">
              <span className="font-serif italic text-3xl font-bold text-[#0052cc] block">+42%</span>
              <span className="text-[10px] font-mono text-[#5a738e] uppercase">Application Completion</span>
            </div>
            <div className="bg-white p-5 border border-blue-100 rounded-2xl text-center">
              <span className="font-serif italic text-3xl font-bold text-[#0052cc] block">-71%</span>
              <span className="text-[10px] font-mono text-[#5a738e] uppercase">Status Call Reduction</span>
            </div>
            <div className="bg-white p-5 border border-blue-100 rounded-2xl text-center">
              <span className="font-serif italic text-3xl font-bold text-[#0052cc] block">$1.6M</span>
              <span className="text-[10px] font-mono text-[#5a738e] uppercase">Annual Overhead Saved</span>
            </div>
            <div className="bg-white p-5 border border-blue-100 rounded-2xl text-center">
              <span className="font-serif italic text-3xl font-bold text-[#0052cc] block">47.8</span>
              <span className="text-[10px] font-mono text-[#5a738e] uppercase">NASA-TLX (vs 72.4)</span>
            </div>
          </div>
        </section>

        {/* SECTION 20: CONCLUSION */}
        <section id="conclusion" className="scroll-mt-32 space-y-6 pb-12">
          <div className="flex items-center gap-3 border-b border-blue-100 pb-3">
            <span className="font-mono text-xs font-bold text-[#0052cc] uppercase tracking-widest">// SECTION 20</span>
            <h2 className="font-serif italic text-2xl md:text-3xl font-bold text-[#0f253e]">Summary & Academic Contribution</h2>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-[#004080] text-white p-8 rounded-3xl space-y-4">
            <h3 className="font-serif italic text-2xl font-bold">Reframing High-Stakes Financial UX</h3>
            <p className="text-xs text-blue-100 leading-relaxed max-w-3xl">
              By replacing administrative suspicion with Dignity-First interaction architecture, financial institutions can dramatically reduce operational friction while building lasting trust during life’s most significant transactions.
            </p>
            <div className="pt-4 flex gap-4">
              <button 
                onClick={onBack}
                className="px-5 py-2.5 bg-white text-[#0052cc] rounded-xl text-xs font-bold hover:bg-blue-50 transition-colors"
              >
                Return to Portfolio Main Page
              </button>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-blue-100 bg-white py-8 text-center text-xs text-[#5a738e] font-mono">
        <p>PenFed Credit Union UX Case Study • Authored by Karthick Balakrishnan</p>
      </footer>
    </div>
  );
}
