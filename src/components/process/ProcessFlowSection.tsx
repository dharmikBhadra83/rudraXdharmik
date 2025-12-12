'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { ProcessStep } from '@/constants';
import { PROCESS_STEPS } from '@/constants';

interface ProcessFlowSectionProps {
  steps?: ProcessStep[];
  title?: string;
  subtitle?: string;
}

// --- Animation Variants ---
// Text & Image Enter: Bottom-Right (x: 40, y: 40) -> Center
// Exit: Left (x: -40)
const contentVariants = {
  initial: { 
    opacity: 0, 
    x: 40, 
    y: 40 
  },
  animate: { 
    opacity: 1, 
    x: 0, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 1, 0.5, 1] as [number, number, number, number], // Smooth cubic-bezier
    }
  },
  exit: { 
    opacity: 0, 
    x: -40,
    y: 0, // Keep Y stable on exit to prevent "dropping"
    transition: {
      duration: 0.5,
      ease: [0.42, 0, 1, 1] as [number, number, number, number]
    }
  }
};

// Title just fades in/out in place (Fixed position feel)
const titleVariants = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: 10, transition: { duration: 0.5 } }
};

// Badge animation variants
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as any
    }
  }
};

export const ProcessFlowSection = ({ 
  steps = PROCESS_STEPS,
  title = "Our Process",
  subtitle = "How we bring your vision to life"
}: ProcessFlowSectionProps) => {
  const [activeStep, setActiveStep] = useState(0);
  
  // Refs for scroll triggers
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Intersection Observer to track which step is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setActiveStep(index);
          }
        });
      },
      { threshold: 0.6 } // Trigger when 60% of the step is visible
    );

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div id="work" className="relative w-full bg-black text-white font-sans">
      
      {/* Section Header */}
      <div className="text-center py-20 px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex justify-center mb-12"
        >
          <div className="relative overflow-hidden flex items-center gap-3 px-5 py-2.5 rounded-full border border-blue-500/40 bg-blue-500/10">
            <motion.div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.5), transparent)',
              }}
              animate={{ x: ['-200%', '200%'] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 2, ease: 'linear' }}
            />
            <motion.span 
              className="relative w-2 h-2 rounded-full bg-blue-500"
              animate={{
                boxShadow: ['0 0 8px rgba(59, 130, 246, 0.8)', '0 0 16px rgba(59, 130, 246, 1)', '0 0 8px rgba(59, 130, 246, 0.8)'],
                scale: [1, 1.2, 1],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
            <span className="relative text-sm font-semibold text-blue-400">Our Process</span>
          </div>
        </motion.div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-white">
          {title}
        </h2>
        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>

      {/* --- 1. STICKY VIEWPORT (The Visuals) --- */}
      <div className="sticky top-0 left-0 h-screen w-full flex flex-col lg:flex-row overflow-hidden z-10">
        
        {/* Left Pane: Text */}
        <div className="relative flex-1 flex flex-col justify-center px-8 lg:px-24 bg-gradient-to-r from-black via-black to-transparent z-20">
          <AnimatePresence mode="wait">
            {steps.map((step, index) => (
              activeStep === index && (
                <div key={step.id} className="absolute w-full max-w-lg">
                  {/* Fixed Title Anchor */}
                  <motion.h3 
                    variants={titleVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="text-blue-400 text-sm font-bold uppercase tracking-[0.2em] mb-6"
                  >
                    {String(index + 1).padStart(2, '0')}. {step.title.split('.')[0] || step.title}
                  </motion.h3>
                  {/* Description Group */}
                  <motion.div
                    variants={contentVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    <h2 className="text-4xl lg:text-5xl font-semibold leading-tight mb-6 text-white">
                      {step.title}
                    </h2>
                    <p className="text-lg text-gray-400 leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                </div>
              )
            ))}
          </AnimatePresence>
        </div>

        {/* Right Pane: Images */}
        <div className="flex-1 bg-[#0a0a0a] relative flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="popLayout">
            {steps.map((step, index) => (
              activeStep === index && (
                <motion.div
                  key={`img-${step.id}`}
                  variants={contentVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="absolute inset-0 flex items-center justify-center p-8 lg:p-16"
                >
                  {/* Image Card with Floating Animation */}
                  <motion.div
                    className="relative w-full h-full max-h-[60vh] rounded-3xl shadow-2xl overflow-hidden group"
                    animate={{
                      y: [0, -15, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                  >
                    {step.image || step.animation || (
                      <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-gray-800/50 flex items-center justify-center">
                        <div className="text-center p-8">
                          <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-blue-500/20 border-2 border-blue-500/30 flex items-center justify-center">
                            <span className="text-4xl font-bold text-blue-400">{index + 1}</span>
                          </div>
                          <p className="text-gray-400 text-sm">Step {index + 1} Image</p>
                        </div>
                      </div>
                    )}
                    {/* Decorative overlay for gloss effect */}
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                  </motion.div>
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* --- 2. SCROLL TRACK (Invisible Triggers) --- */}
      {/* This sits "below" the sticky viewport in DOM order but pushes the page height. 
         We pull it up with negative margin so the first step triggers immediately.
      */}
      <div className="relative z-0 -mt-[100vh]">
        {steps.map((step, index) => (
          <div
            key={`trigger-${step.id}`}
            data-index={index}
            ref={(el) => {
              stepRefs.current[index] = el;
            }}
            className="h-screen w-full" 
          />
        ))}
        {/* Extra spacer at bottom to allow full scroll out */}
        <div className="h-[50vh]" />
      </div>
    </div>
  );
};

// Example usage with sample data
export const ProcessFlowExample = () => {
  return (
    <ProcessFlowSection
      steps={PROCESS_STEPS}
      title="Our Process"
      subtitle="How we bring your vision to life"
    />
  );
};
