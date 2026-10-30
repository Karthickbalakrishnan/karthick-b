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
  summary: "15+ years of UX/product design experience across enterprise systems, fintech, manufacturing, energy, and the public sector. Combining human-centered design with AI-powered UX, LLM-enha[...]
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
    abstract: "Explores how trust, clarity, and emotional regulation can be designed into high-stakes financial products without sacrificing conversion or operational efficiency. Evaluated via NA[...]
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
                className="text-xs font-semibold text-[#4a6382] uppercase tracking-wider hover:text-[#0052cc] relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#0052cc] after:transition-all hover:after:w-full"
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-200 bg-white/90 shadow-sm text-xs font-mono font-semibold text-[#0052cc] uppercase tracking-[0.16em]">
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
                <div className="w-40 h-40 rounded-full bg-gradient-to-br from-[#eaf4ff] to-white border border-blue-200 flex items-center justify-center font-serif italic text-5xl text-[#0052cc] shadow-lg">
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
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0066ff] text-white font-semibold text-xs hover:bg-[#004080] transition-colors shadow-sm hover:shadow-md"
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
    <div className="penfed-case-study min-h-screen bg-[#f4f8fc] text-[#0f253e] font-sans antialiased selection:bg-blue-200 selection:text-blue-900">
      <style>{`
        .penfed-case-study {
          --bg: #f4f8fc;
          --panel: rgba(255,255,255,0.9);
          --panel-strong: #ffffff;
          --panel-soft: #edf6ff;
          --line: rgba(17, 88, 200, 0.12);
          --line-strong: rgba(17, 88, 200, 0.2);
          --text: #0f253e;
          --text-soft: #3b526d;
          --text-muted: #5a738e;
          --accent: #0052cc;
          --accent-strong: #004080;
          --blue: #0066ff;
          --sky: #7fc6ff;
          --mint: #6dd2c0;
          --shadow: 0 18px 40px rgba(16, 71, 145, 0.08);
          --radius: 24px;
        }

        .penfed-case-study * { box-sizing: border-box; }
        .penfed-case-study .case-nav {
          background: rgba(255,255,255,0.95);
          border-bottom: 1px solid var(--line);
          box-shadow: 0 10px 25px rgba(17, 88, 200, 0.04);
          backdrop-filter: blur(14px);
        }
        .penfed-case-study .case-nav-item {
          font-family: 'JetBrains Mono', 'SFMono-Regular', monospace;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--text-muted);
          white-space: nowrap;
          padding-bottom: 10px;
          border-bottom: 2px solid transparent;
          transition: all 0.2s ease;
        }
        .penfed-case-study .case-nav-item:hover,
        .penfed-case-study .case-nav-item.active {
          color: var(--accent);
          border-bottom-color: var(--accent);
        }
        .penfed-case-study .case-hero {
          background: linear-gradient(180deg, #ffffff 0%, #f0f7ff 52%, #f4f8fc 100%);
          border-bottom: 1px solid var(--line);
        }
        .penfed-case-study .case-chip {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 9px 14px;
          border-radius: 999px;
          border: 1px solid var(--line);
          background: rgba(255,255,255,0.8);
          color: var(--accent);
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          box-shadow: var(--shadow);
        }
        .penfed-case-study .case-title {
          font-family: 'Fraunces', Georgia, serif;
          font-style: italic;
          font-size: clamp(2.75rem, 5vw, 5rem);
          line-height: 0.96;
          letter-spacing: -0.05em;
          font-weight: 700;
          color: var(--text);
        }
        .penfed-case-study .case-title em {
          color: var(--blue);
          font-style: normal;
        }
        .penfed-case-study .case-lead {
          color: var(--text-soft);
          font-size: 1.08rem;
          line-height: 1.8;
          max-width: 760px;
        }
        .penfed-case-study .case-meta-grid {
          border-top: 1px solid var(--line);
          margin-top: 30px;
          padding-top: 26px;
          display: grid;
          grid-template-columns: repeat(4, minmax(0,1fr));
          gap: 20px;
        }
        .penfed-case-study .case-meta-item {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--text-muted);
        }
        .penfed-case-study .case-meta-item strong {
          display: block;
          margin-top: 4px;
          color: var(--text);
          font-size: 12px;
          letter-spacing: 0;
          text-transform: none;
          font-family: 'Inter', sans-serif;
        }
        .penfed-case-study .case-card {
          background: rgba(255,255,255,0.9);
          border: 1px solid var(--line);
          border-radius: var(--radius);
          box-shadow: var(--shadow);
        }
        .penfed-case-study .case-section {
          scroll-margin-top: 120px;
          margin-top: 48px;
        }
        .penfed-case-study .case-section-header {
          display: flex;
          align-items: center;
          gap: 12px;
          border-bottom: 1px solid var(--line);
          padding-bottom: 12px;
          margin-bottom: 22px;
        }
        .penfed-case-study .case-section-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--accent);
        }
        .penfed-case-study .case-section-title {
          font-family: 'Fraunces', Georgia, serif;
          font-style: italic;
          font-size: clamp(1.8rem, 3vw, 2.6rem);
          letter-spacing: -0.04em;
          color: var(--text);
        }
        .penfed-case-study .case-body {
          color: var(--text-soft);
          font-size: 1rem;
          line-height: 1.82;
        }
        .penfed-case-study .case-funnel {
          background: rgba(255,255,255,0.9);
          border: 1px solid var(--line);
          border-radius: 20px;
          padding: 24px;
          box-shadow: var(--shadow);
          margin-top: 18px;
        }
        .penfed-case-study .case-funnel-row {
          margin-bottom: 18px;
        }
        .penfed-case-study .case-funnel-label {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 8px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: var(--text-soft);
        }
        .penfed-case-study .case-funnel-bar {
          height: 12px;
          border-radius: 999px;
          background: rgba(17, 88, 200, 0.06);
          overflow: hidden;
        }
        .penfed-case-study .case-funnel-fill {
          height: 100%;
          border-radius: inherit;
          background: linear-gradient(90deg, #0066ff, #7fc6ff);
        }
        .penfed-case-study .case-funnel-fill.red {
          background: linear-gradient(90deg, #f76262, #ff8f6d);
        }
        .penfed-case-study .case-grid-2 {
          display: grid;
          grid-template-columns: repeat(2, minmax(0,1fr));
          gap: 20px;
          margin-top: 24px;
        }
        .penfed-case-study .case-mini-card {
          background: rgba(255,255,255,0.9);
          border: 1px solid var(--line);
          border-radius: 18px;
          padding: 20px;
          box-shadow: var(--shadow);
        }
        .penfed-case-study .case-mini-card strong {
          display: block;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.08em;
          color: var(--accent);
          margin-bottom: 8px;
          text-transform: uppercase;
        }
        .penfed-case-study .case-mini-card p {
          color: var(--text-soft);
          font-size: 0.92rem;
          line-height: 1.7;
        }
        .penfed-case-study .case-metric-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0,1fr));
          gap: 16px;
          margin-top: 20px;
        }
        .penfed-case-study .case-metric {
          background: rgba(255,255,255,0.9);
          border: 1px solid var(--line);
          border-radius: 18px;
          padding: 24px 18px;
          text-align: center;
          box-shadow: var(--shadow);
        }
        .penfed-case-study .case-metric .value {
          font-family: 'Fraunces', Georgia, serif;
          font-style: italic;
          font-size: clamp(1.8rem, 3vw, 3rem);
          font-weight: 700;
          color: var(--accent);
        }
        .penfed-case-study .case-metric .label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-top: 6px;
        }
        .penfed-case-study .case-table-wrap {
          overflow-x: auto;
          background: rgba(255,255,255,0.9);
          border: 1px solid var(--line);
          border-radius: 18px;
          box-shadow: var(--shadow);
          margin-top: 20px;
        }
        .penfed-case-study table {
          width: 100%;
          border-collapse: collapse;
          min-width: 680px;
        }
        .penfed-case-study th,
        .penfed-case-study td {
          padding: 16px 18px;
          border-bottom: 1px solid var(--line);
          vertical-align: top;
          text-align: left;
          font-size: 0.92rem;
          color: var(--text-soft);
        }
        .penfed-case-study th {
          background: rgba(237,246,255,0.95);
          color: var(--accent);
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
        .penfed-case-study .case-pill {
          display: inline-flex;
          align-items: center;
          padding: 6px 10px;
          border-radius: 999px;
          border: 1px solid var(--line);
          background: rgba(17,88,200,0.06);
          color: var(--accent);
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        @media (max-width: 768px) {
          .penfed-case-study .case-meta-grid,
          .penfed-case-study .case-grid-2,
          .penfed-case-study .case-metric-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (max-width: 640px) {
          .penfed-case-study .case-meta-grid,
          .penfed-case-study .case-grid-2,
          .penfed-case-study .case-metric-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* PERSISTENT HEADER BAR */}
      <nav className="case-nav sticky top-0 z-50 bg-white/95 border-b border-blue-100 shadow-sm backdrop-blur-md">
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

        <div className="bg-[#ebf4ff] border-t border-blue-100 px-6 overflow-x-auto py-2.5 flex items-center gap-6 scrollbar-none">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setActiveNav(item.id)}
              className={`case-nav-item ${activeNav === item.id ? 'active' : ''}`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      <header className="case-hero py-16 px-6">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="case-chip">
            <Award size={14} />
            <span>ACM India HCI 2026 • Full Research Case Study</span>
          </div>

          <h1 className="case-title max-w-5xl">
            From <em>Stranger</em> to <em>Homeowner</em>: Redesigning Financial Dignity
          </h1>

          <p className="case-lead">
            A comprehensive Human-Computer Interaction case study evaluating the operational and psychological mechanics of a 33-step enterprise mortgage portal, transforming a 62% funnel drop-off into a guided, trust-building journey.
          </p>

          <div className="case-meta-grid">
            <div className="case-meta-item">
              <span>Client</span>
              <strong>PenFed Credit Union (USA)</strong>
            </div>
            <div className="case-meta-item">
              <span>Methodology</span>
              <strong>NASA-TLX, A/B Testing, UT</strong>
            </div>
            <div className="case-meta-item">
              <span>Key Artifacts</span>
              <strong>LO Engine, Readiness Score</strong>
            </div>
            <div className="case-meta-item">
              <span>Primary Outcome</span>
              <strong style={{ color: '#0052cc', fontWeight: 700 }}>+42% Application Conversion</strong>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <section id="problem" className="case-section">
          <div className="case-section-header">
            <span className="case-section-label">// Section 01</span>
            <h2 className="case-section-title">Problem Framing & Baseline Funnel Drop-off</h2>
          </div>

          <p className="case-body">
            Before proposing a single UI component, we established a quantified baseline: precise abandonment percentages at every stage of the legacy application. Without this, no claim of improvement could be trusted.
          </p>

          <div className="case-funnel">
            <h3 style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#0052cc', marginBottom: '18px' }}>Quantified Baseline Funnel (n=18,400 Application Starts)</h3>
            <div className="case-funnel-row">
              <div className="case-funnel-label"><span>Step 1: Application Page Reached</span><span>100%</span></div>
              <div className="case-funnel-bar"><div className="case-funnel-fill" style={{ width: '100%' }} /></div>
            </div>
            <div className="case-funnel-row">
              <div className="case-funnel-label"><span>Step 2: First Field Interaction</span><span>82%</span></div>
              <div className="case-funnel-bar"><div className="case-funnel-fill" style={{ width: '82%' }} /></div>
            </div>
            <div className="case-funnel-row">
              <div className="case-funnel-label"><span>Step 3: 11-Document List Displayed</span><span>38%</span></div>
              <div className="case-funnel-bar"><div className="case-funnel-fill red" style={{ width: '38%' }} /></div>
            </div>
            <div className="case-funnel-row">
              <div className="case-funnel-label"><span>Steps 4–32: General Form Body</span><span>28%</span></div>
              <div className="case-funnel-bar"><div className="case-funnel-fill" style={{ width: '28%' }} /></div>
            </div>
            <div className="case-funnel-row" style={{ marginBottom: 0 }}>
              <div className="case-funnel-label"><span>Step 33: Validation Blindside</span><span>18%</span></div>
              <div className="case-funnel-bar"><div className="case-funnel-fill red" style={{ width: '18%' }} /></div>
            </div>
          </div>
        </section>

        <section id="sequencing" className="case-section">
          <div className="case-section-header">
            <span className="case-section-label">// Section 02</span>
            <h2 className="case-section-title">Research Sequencing & Double Diamond Plan</h2>
          </div>
          <p className="case-body">In high-stakes financial UX, research order is paramount. Testing before diagnosing produces solutions to the wrong problem. We structured the work over a 26-week Double Diamond model to ensure problem clarity before design intervention.</p>
          <div className="case-grid-2">
            <div className="case-mini-card"><strong>Weeks 1–4</strong><p>Stakeholder interviews, analytics funnel audit, and session replay coding.</p></div>
            <div className="case-mini-card"><strong>Weeks 5–12</strong><p>Exit surveys, think-alouds, and loan officer workflow shadowing.</p></div>
            <div className="case-mini-card"><strong>Weeks 13–20</strong><p>Card sorting, prototype iteration, and design-system definition.</p></div>
            <div className="case-mini-card"><strong>Weeks 21–26</strong><p>A/B validation, NASA-TLX measurement, and deployment review.</p></div>
          </div>
        </section>

        <section id="stakeholder" className="case-section">
          <div className="case-section-header">
            <span className="case-section-label">// Section 03</span>
            <h2 className="case-section-title">Stakeholder Research & Alignment</h2>
          </div>
          <div className="case-grid-2">
            <div className="case-mini-card"><strong>Loan Officers</strong><p>“At least half of my applications are missing critical documents. I spend 20 minutes triaging before calling.”</p></div>
            <div className="case-mini-card"><strong>Call Center Leads</strong><p>“70% of calls on Monday are status inquiries from applicants who do not know what happens next.”</p></div>
            <div className="case-mini-card"><strong>Compliance Officers</strong><p>“Mandatory RESPA, ECOA, and Reg B disclosures cannot be buried; pre-approval must be conditional.”</p></div>
            <div className="case-mini-card"><strong>Applicants</strong><p>“I do not know what I am missing, and I don’t know whether I am allowed to pause or continue.”</p></div>
          </div>
        </section>

        <section id="users" className="case-section">
          <div className="case-section-header">
            <span className="case-section-label">// Section 04</span>
            <h2 className="case-section-title">End-User Research & Archetype Recruiting</h2>
          </div>
          <div className="case-metric-grid">
            <div className="case-metric"><div className="value">A</div><div className="label">First-Time Buyer</div></div>
            <div className="case-metric"><div className="value">B</div><div className="label">Existing Member</div></div>
            <div className="case-metric"><div className="value">C</div><div className="label">Co-Applicant Pairs</div></div>
            <div className="case-metric"><div className="value">D</div><div className="label">Military / VA</div></div>
          </div>
        </section>

        <section id="personas" className="case-section">
          <div className="case-section-header">
            <span className="case-section-label">// Section 05</span>
            <h2 className="case-section-title">Research-Derived User Personas</h2>
          </div>
          <div className="case-grid-2">
            <div className="case-mini-card"><strong>Persona A • Maya Chen</strong><p>First-time buyer in California. Anxiety-driven, uncertain about missing paperwork, and highly sensitive to “what happens next” messaging.</p></div>
            <div className="case-mini-card"><strong>Persona C • CPT. David Park</strong><p>Active military member abroad. Needs asynchronous completion, timezone-aware scheduling, and highly clear guidance.</p></div>
          </div>
        </section>

        <section id="empathy" className="case-section">
          <div className="case-section-header">
            <span className="case-section-label">// Section 06</span>
            <h2 className="case-section-title">Empathy Mapping</h2>
          </div>
          <div className="case-grid-2">
            <div className="case-mini-card"><strong>What they say</strong><p>“How long is this going to take? Do I have all these documents ready?”</p></div>
            <div className="case-mini-card"><strong>What they think</strong><p>“What if I enter something wrong and get rejected? Nobody is watching if I leave.”</p></div>
            <div className="case-mini-card"><strong>What they do</strong><p>Open multiple tabs, pause at SSN, scroll to the bottom of document list, and abandon.</p></div>
            <div className="case-mini-card"><strong>What they feel</strong><p>Anxious, overwhelmed, emotionally exhausted, and uncertain about control.</p></div>
          </div>
        </section>

        <section id="painpoints" className="case-section">
          <div className="case-section-header">
            <span className="case-section-label">// Section 07</span>
            <h2 className="case-section-title">Cross-Segment Pain Point Matrix</h2>
          </div>
          <div className="case-table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Stage</th>
                  <th>Maya (Guest)</th>
                  <th>James (Member)</th>
                  <th>Cpt. Park (Military)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Start</strong></td>
                  <td>No orientation or welcome.</td>
                  <td>Not recognized as a member.</td>
                  <td>VA loan option obscured.</td>
                </tr>
                <tr>
                  <td><strong>Step 3 Docs</strong></td>
                  <td>Abandons at the 11-document wall.</td>
                  <td>Dislikes redundant uploads.</td>
                  <td>COE upload step missing.</td>
                </tr>
                <tr>
                  <td><strong>Post-Submit</strong></td>
                  <td>Anxious status waiting.</td>
                  <td>Generic response call.</td>
                  <td>9–5 EST call impossible.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="methods" className="case-section">
          <div className="case-section-header">
            <span className="case-section-label">// Section 08</span>
            <h2 className="case-section-title">Research Methods Inventory</h2>
          </div>
          <div className="case-grid-2">
            <div className="case-mini-card"><strong>01. Session Replay</strong><p>340 recordings coded for rage-clicks, hover hesitations, and exit triggers.</p></div>
            <div className="case-mini-card"><strong>02. NASA-TLX</strong><p>Standardized cognitive workload index across phases of the application journey.</p></div>
            <div className="case-mini-card"><strong>03. Card Sorting</strong><p>24 participants helped reshape the information architecture and field grouping logic.</p></div>
            <div className="case-mini-card"><strong>04. Stakeholder Shadowing</strong><p>Loan officer workflow mapping improved operational handoff and scheduling automation.</p></div>
          </div>
        </section>

        <section id="frameworks" className="case-section">
          <div className="case-section-header">
            <span className="case-section-label">// Section 09</span>
            <h2 className="case-section-title">Applied Behavioural Frameworks</h2>
          </div>
          <div className="case-grid-2">
            <div className="case-mini-card"><strong>Cognitive Load Theory</strong><p>Reduced extraneous load by moving from 33 unordered steps to six focused progressive panels.</p></div>
            <div className="case-mini-card"><strong>Goal Gradient Effect</strong><p>Introduced a dynamic readiness score and visible progress to motivate completion.</p></div>
          </div>
        </section>

        <section id="lo" className="case-section">
          <div className="case-section-header">
            <span className="case-section-label">// Section 10</span>
            <h2 className="case-section-title">Loan Officer Workflow Optimization</h2>
          </div>
          <div className="case-grid-2">
            <div className="case-mini-card" style={{ borderColor: 'rgba(232,34,10,0.2)' }}><strong style={{ color: '#b3261e' }}>As-Is Flow</strong><p>Generic email alert → manual triage → missing-document identification → cold call → unstructured 23-minute review.</p></div>
            <div className="case-mini-card" style={{ borderColor: 'rgba(17, 123, 103, 0.2)' }}><strong style={{ color: '#117b67' }}>Redesigned Flow</strong><p>Readiness score → pre-filled calendar slot → gap brief → structured 11-minute review.</p></div>
          </div>
        </section>

        <section id="ia" className="case-section">
          <div className="case-section-header">
            <span className="case-section-label">// Section 11</span>
            <h2 className="case-section-title">6-Step Information Architecture</h2>
          </div>
          <div className="case-grid-2" style={{ gridTemplateColumns: 'repeat(6, minmax(0, 1fr))' }}>
            <div className="case-mini-card" style={{ padding: '14px 10px', textAlign: 'center' }}><strong style={{ display: 'block', marginBottom: '0' }}>01</strong><p style={{ margin: 0 }}>Goal</p></div>
            <div className="case-mini-card" style={{ padding: '14px 10px', textAlign: 'center' }}><strong style={{ display: 'block', marginBottom: '0' }}>02</strong><p style={{ margin: 0 }}>Identity</p></div>
            <div className="case-mini-card" style={{ padding: '14px 10px', textAlign: 'center' }}><strong style={{ display: 'block', marginBottom: '0' }}>03</strong><p style={{ margin: 0 }}>Property</p></div>
            <div className="case-mini-card" style={{ padding: '14px 10px', textAlign: 'center' }}><strong style={{ display: 'block', marginBottom: '0' }}>04</strong><p style={{ margin: 0 }}>Income</p></div>
            <div className="case-mini-card" style={{ padding: '14px 10px', textAlign: 'center' }}><strong style={{ display: 'block', marginBottom: '0' }}>05</strong><p style={{ margin: 0 }}>Assets</p></div>
            <div className="case-mini-card" style={{ padding: '14px 10px', textAlign: 'center' }}><strong style={{ display: 'block', marginBottom: '0' }}>06</strong><p style={{ margin: 0 }}>Review</p></div>
          </div>
        </section>

        <section id="flows" className="case-section">
          <div className="case-section-header">
            <span className="case-section-label">// Section 12</span>
            <h2 className="case-section-title">Asynchronous User Flows</h2>
          </div>
          <div className="case-mini-card"><p>Co-applicants received secure individual magic links to complete their income sections asynchronously without sharing credentials or waiting for simultaneous free time.</p></div>
        </section>

        <section id="interaction" className="case-section">
          <div className="case-section-header">
            <span className="case-section-label">// Section 13</span>
            <h2 className="case-section-title">SSN Trust Layer & Inline Micro-Interactions</h2>
          </div>
          <div className="case-mini-card"><strong>Trust copy</strong><p>Added explicit reassurance: “We use soft credit checks to protect your score during pre-qualification. Your SSN is encrypted end-to-end.”</p></div>
        </section>

        <section id="income" className="case-section">
          <div className="case-section-header">
            <span className="case-section-label">// Section 14</span>
            <h2 className="case-section-title">Grouped Panel Income Entry</h2>
          </div>
          <div className="case-mini-card"><p>Replaced rigid single-field gross income prompts with specialized modules for W-2, RSU, BAH/military allowance, and self-employment Schedule C revenue.</p></div>
        </section>

        <section id="upload" className="case-section">
          <div className="case-section-header">
            <span className="case-section-label">// Section 15</span>
            <h2 className="case-section-title">Progressive Document Collection</h2>
          </div>
          <div className="case-mini-card"><p>Only two essential documents were requested at submission; the remaining nine were deferred post-submission without blocking pre-qualification.</p></div>
        </section>

        <section id="iteration" className="case-section">
          <div className="case-section-header">
            <span className="case-section-label">// Section 16</span>
            <h2 className="case-section-title">Prototype Failure & Rapid Iteration</h2>
          </div>
          <div className="case-mini-card" style={{ borderColor: 'rgba(232,34,10,0.2)' }}><strong style={{ color: '#b3261e' }}>Failed hypothesis</strong><p>Testing revealed applicants felt a chatbot was inefficient for sensitive financial data entry. The interaction spiked cognitive load, so we immediately shifted to structured grouped panels.</p></div>
        </section>

        <section id="preloan" className="case-section">
          <div className="case-section-header">
            <span className="case-section-label">// Section 17</span>
            <h2 className="case-section-title">Instant Pre-Loan Success Letter</h2>
          </div>
          <div className="case-card" style={{ padding: '28px 24px', borderColor: 'rgba(17,88,200,0.25)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--line)', paddingBottom: '12px' }}>
              <span style={{ fontFamily: 'Fraunces, serif', fontStyle: 'italic', fontSize: '1.3rem', color: '#0052cc', fontWeight: 700 }}>PenFed Conditional Pre-Approval</span>
              <span className="case-pill">Instant PDF</span>
            </div>
            <p style={{ marginTop: '16px', color: 'var(--text-soft)' }}>Submitted applications instantly produced a PDF pre-approval certificate with precise estimated purchasing capacity based on real readiness data.</p>
          </div>
        </section>

        <section id="engine" className="case-section">
          <div className="case-section-header">
            <span className="case-section-label">// Section 18</span>
            <h2 className="case-section-title">Time-Zone Aware LO Booking Engine</h2>
          </div>
          <div className="case-mini-card"><p>Eliminated cold calls by embedding live loan officer calendar booking directly on the confirmation screen and auto-converting applicants’ time zones.</p></div>
        </section>

        <section id="outcomes" className="case-section">
          <div className="case-section-header">
            <span className="case-section-label">// Section 19</span>
            <h2 className="case-section-title">Measured Enterprise Business Outcomes</h2>
          </div>
          <div className="case-metric-grid">
            <div className="case-metric"><div className="value">+42%</div><div className="label">Application completion</div></div>
            <div className="case-metric"><div className="value">-71%</div><div className="label">Status call reduction</div></div>
            <div className="case-metric"><div className="value">$1.6M</div><div className="label">Annual overhead saved</div></div>
            <div className="case-metric"><div className="value">47.8</div><div className="label">NASA-TLX</div></div>
          </div>
        </section>

        <section id="conclusion" className="case-section" style={{ paddingBottom: '48px' }}>
          <div className="case-section-header">
            <span className="case-section-label">// Section 20</span>
            <h2 className="case-section-title">Summary & Academic Contribution</h2>
          </div>
          <div className="case-card" style={{ background: 'linear-gradient(135deg, #0066ff 0%, #004080 100%)', color: '#fff', padding: '32px 28px' }}>
            <h3 style={{ fontFamily: 'Fraunces, serif', fontStyle: 'italic', fontSize: '2rem', marginBottom: '12px' }}>Reframing High-Stakes Financial UX</h3>
            <p style={{ color: 'rgba(255,255,255,0.88)', lineHeight: 1.8, maxWidth: '780px' }}>
              By replacing administrative suspicion with dignity-first interaction architecture, financial institutions can reduce operational friction while building lasting trust. This project demonstrated that conversion gains and emotional reassurance are not competing goals—they are a unified design outcome.
            </p>
            <div style={{ marginTop: '24px' }}>
              <button onClick={onBack} className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-[#0052cc] rounded-xl text-xs font-bold hover:bg-blue-50 transition-colors">Return to Portfolio Main Page</button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-blue-100 bg-white py-8 text-center text-xs text-[#5a738e] font-mono">
        <p>PenFed Credit Union UX Case Study • Authored by Karthick Balakrishnan</p>
      </footer>
    </div>
  );
}
