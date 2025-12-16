'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { ProcessStep } from '@/constants';
import { PROCESS_STEPS } from '@/constants';
import { ProcessAnimation } from './ProcessAnimations';

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
    <div id="process" className="relative w-full py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-black text-white font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16">
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex justify-center mb-4 sm:mb-6 md:mb-8 lg:mb-12"
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

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2 sm:mb-3 md:mb-4 text-white">
            {title}
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* --- 1. STICKY VIEWPORT (The Visuals) --- */}
        <div 
          className="sticky top-0 left-0 w-full flex flex-col lg:flex-row overflow-hidden z-10"
          style={{ 
            height: '100vh',
            maxHeight: '100vh',
            paddingTop: 'clamp(80px, 20vh, 150px)',
          }}
        >
          {/* Container with max-width inside sticky - Using Flexbox */}
          <div 
            className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 flex flex-col lg:flex-row items-center justify-center lg:h-full gap-0 lg:gap-0"
            style={{
              height: 'calc(100% - clamp(80px, 10vh, 120px))',
              minHeight: 'calc(100% - clamp(80px, 10vh, 120px))',
            }}
          >
            {/* Left Pane: Text - Mobile: w-full, Desktop: flex-1 */}
            <div className="w-full lg:flex-1 flex flex-col justify-center items-center lg:items-start px-2 sm:px-4 md:px-6 lg:px-8 xl:px-24 z-20 text-center lg:text-left mb-1 lg:mb-0">
              <AnimatePresence mode="wait">
                {steps.map((step, index) => (
                  activeStep === index && (
                    <div key={step.id} className="w-full max-w-lg">
                      {/* Fixed Title Anchor */}
                      <motion.h3 
                        variants={titleVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="text-blue-400 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] mb-2 sm:mb-3 md:mb-4 lg:mb-6"
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
                        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold leading-tight mb-2 sm:mb-3 md:mb-4 lg:mb-6 text-white">
                          {step.title}
                        </h2>
                        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-400 leading-relaxed">
                          {step.description}
                        </p>
                      </motion.div>
                    </div>
                  )
                ))}
              </AnimatePresence>
            </div>

            {/* Right Pane: SVG Animations - Mobile: w-full, Desktop: flex-1 */}
            <div 
              className="w-full lg:flex-1 flex items-center justify-center relative overflow-visible"
              style={{
                height: '100%',
                minHeight: 'clamp(250px, 40vh, 600px)',
                marginTop: 'clamp(-0.1rem, -5vh, 0)',
              }}
            >
              <AnimatePresence mode="popLayout">
                {steps.map((step, index) => {
                  const stepType = step.id === 1 ? 'discovery' : step.id === 2 ? 'design' : step.id === 3 ? 'development' : 'launch';
                  return (
                    activeStep === index && (
                      <motion.div
                        key={`img-${step.id}`}
                        variants={contentVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="absolute inset-0 flex items-center justify-center"
                        style={{ 
                          width: '100%',
                          height: '100%',
                          padding: 'clamp(0.5rem, 1.5vw, 1.5rem)',
                        }}
                      >
                        {/* Animated Diagram Container - Properly sized and responsive */}
                        <div className="relative flex items-center justify-center w-full h-full">
                          <ProcessAnimation step={stepType} index={index} />
                        </div>
                      </motion.div>
                    )
                  );
                })}
              </AnimatePresence>
            </div>
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
