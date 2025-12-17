import React from 'react';
import { createProcessStepImage } from './processImages';

// Hero Section Content
export const HERO_CONTENT = {
  badge: "Available for new projects",
  heading: {
    line1: "Automate Your Business",
    line2: "With Software That Actually Works"
  },
  subheading: "We designs and builds custom SaaS platforms, ERPs, and workflow automations for business owners who want clarity, control, and efficiency—not bloated systems.",
  cta: {
    primary: {
      text: "Book call",
      href: "#contact"
    },
    secondary: {
      text: "See process",
      href: "#process"
    }
  }
};

// About Section Content
export const ABOUT_CONTENT = {
  badge: "About RudrX",
  primary: {
    text: "Rudrx.dev is a software studio focused on building custom SaaS platforms, ERPs, and internal automation systems for businesses with real operational complexity.\n\nWe don't ship features for the sake of it. We design systems around how your business actually functions—so teams move faster, decisions are clearer, and operations scale without friction.\n\nOur work is shaped by hands-on experience building internal tools and production-grade systems where reliability, clarity, and maintainability matter.\n\nThat perspective allows us to think beyond code—into workflows, dependencies, data flow, and long-term usability."
  },
  lower: {
    text: "Most software fails not because of technology, but because it ignores how businesses operate day to day.\n\nRudrx.dev exists to bridge that gap.\nWe work closely with business owners and operations teams to replace manual processes, disconnected tools, and fragile systems with software that is deliberate, structured, and built to last.\n\nWe operate as a premium, custom partner—focused on clarity over complexity, and systems that continue to work as your business grows."
  }
};

// Services Section Content
export const SERVICES_CONTENT = {
  heading: "End-to-End Software for Business Operations",
  services: [
    {
      title: "Custom ERP Systems",
      description: "Purpose-built ERPs designed around your internal processes—not generic templates.\nWe model workflows, data, and permissions to match how your teams actually operate."
    },
    {
      title: "SaaS Product Development",
      description: "From early-stage products to mature platforms, we build SaaS systems that are scalable, secure, and ready for real users and real data."
    },
    {
      title: "Internal Tools & Dashboards",
      description: "Operational dashboards and internal tools that give teams clarity and control.\nDesigned to reduce manual work, improve visibility, and support faster decisions."
    },
    {
      title: "Workflow Automation",
      description: "We automate repetitive and error-prone workflows across operations, finance, sales, and support—turning manual processes into reliable systems."
    },
    {
      title: "System Integrations",
      description: "Seamless integrations between your software and third-party tools like CRMs, payment gateways, accounting systems, and internal services."
    },
    {
      title: "Ongoing Maintenance & Scaling",
      description: "Software needs care as your business grows.\nWe handle improvements, performance, security, and scaling—so systems continue to work without disruption."
    }
  ]
};

// Testimonials Section Content
export const TESTIMONIALS_CONTENT = {
  heading: "Trusted by Teams Running Real Operations",
  subheading: "What founders and operators say about working with Rudrx.dev on complex, operations-critical software.",
  testimonials: [
    {
      id: '1',
      name: 'Sumeet Dhingra',
      title: 'Founder, Priceport',
      company: 'priceport.ai',
      companyUrl: 'https://priceport.ai',
      quote: "Rudrx.dev handled the entire product end-to-end—from architecture and development to ongoing maintenance.\n\nPriceport is used by airports across Oceania for duty-free price monitoring, and the system needed to be reliable, scalable, and data-heavy. The team understood the business context deeply and built a platform that continues to perform as we grow.",
      avatar: '/clientone.png',
    },
    {
      id: '2',
      name: 'Yogesh Bhanushali',
      title: 'Founder, Searchomes',
      company: 'searchomes.com',
      companyUrl: 'https://searchomes.com',
      quote: "We needed more than just software—we needed systems that could support real estate operations without friction.\n\nRudrx.dev built custom ERP workflows and automations that streamlined internal processes and removed a lot of manual overhead. The result was a much clearer, more efficient way to run the business.",
      avatar: '/clienttwo.png',
    },
  ]
};

// Contact Section Content
export const CONTACT_CONTENT = {
  heading: "Let's Talk About Your Systems",
  subheading: "If you're evaluating custom software, ERPs, or automation for real operational needs, we're happy to discuss your requirements and constraints—before writing a single line of code.",
  features: [
    "End-to-end system ownership",
    "Clear scoping before development",
    "Business-first system design",
    "Long-term maintenance & scaling",
    "Direct communication, no handoffs"
  ],
  contactInfo: {
    phone: "+91 8779627492",
    email: "dharmik@rudrx.dev"
  }
};

// Footer Content
export const FOOTER_CONTENT = {
  brand: "Rudrx.dev",
  subheading: "We design and build custom software, ERPs, and automations that power real business operations.",
  companyLinks: [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ],
  legalLinks: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ]
};

export const SERVICES = [
  "Android Development",
  "Application Development",
  "Custom Software Development",
  "SaaS Development",
  "User Experience Design (UED)",
  "Web Development",
  "Software Testing",
  "Cloud Application Development",
  "UX Research"
];

export const CASE_STUDIES = [
  {
    title: "Airport Operations System",
    description: "Built products used across airports in Australia and New Zealand",
    impact: "Streamlined operations for multiple international airports"
  },
  {
    title: "Real Estate Automation",
    description: "Automation system for Canadian real estate brokerage",
    impact: "Reduced operations workload by 30%"
  }
];

export const JOURNEY_STEPS = [
  {
    step: "01",
    title: "Clarify & Define",
    description: "Clarifying the idea and defining what actually matters for version 1"
  },
  {
    step: "02",
    title: "Design & Experience",
    description: "Designing intuitive user experiences that make the product easy to use"
  },
  {
    step: "03",
    title: "Build & Develop",
    description: "Building MVPs, SaaS products, and internal automations that solve real problems"
  },
  {
    step: "04",
    title: "Launch & Iterate",
    description: "Launching quickly, gathering feedback, and improving fast"
  }
];

export const NAV_ITEMS = ['About', 'Services', 'Process', 'Contact'];

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/dharmik-bhanushali/",
  email: "mailto:contact@example.com"
};

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  image?: React.ReactNode;
  animation?: React.ReactNode;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 1,
    title: "Discovery & Planning",
    description: "We start by understanding your vision, goals, and target audience. Through collaborative workshops and research, we map out the strategy that will guide your project from concept to launch.",
    image: createProcessStepImage('discovery'),
  },
  {
    id: 2,
    title: "Design & Prototyping",
    description: "Our design team creates beautiful, user-centric interfaces that balance aesthetics with functionality. We build interactive prototypes to validate concepts before development begins.",
    image: createProcessStepImage('design'),
  },
  {
    id: 3,
    title: "Development & Testing",
    description: "We build your product using modern technologies and best practices. Throughout development, we conduct rigorous testing to ensure quality, performance, and security at every stage.",
    image: createProcessStepImage('development'),
  },
  {
    id: 4,
    title: "Launch & Optimization",
    description: "We deploy your product with confidence and monitor its performance. Post-launch, we continuously optimize based on user feedback and analytics to ensure long-term success.",
    image: createProcessStepImage('launch'),
  },
];

