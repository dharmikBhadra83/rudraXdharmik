import React from 'react';
import { createProcessStepImage } from './processImages';

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

export const NAV_ITEMS = ['About', 'Services', 'Work', 'Contact'];

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

