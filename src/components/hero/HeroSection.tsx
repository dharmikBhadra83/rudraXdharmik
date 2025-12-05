'use client';

import { motion } from 'framer-motion';
import { PillButton } from '@/components/common/PillButton';

export const HeroSection = () => {
  const heading1 = "Build Your MVP";
  const heading2 = "Faster Than Expected";
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as any
      }
    }
  };

  return (
    <section 
      className="relative min-h-screen overflow-hidden"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '120px',
        paddingBottom: '80px',
      }}
    >
      {/* Dark Background */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, #000000 0%, #0a0a0a 40%, #000000 100%)',
        }}
      />

      {/* Grid Pattern Background */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(60, 60, 60, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(60, 60, 60, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse 80% 50% at 50% 50%, black 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 50% at 50% 50%, black 40%, transparent 100%)',
        }}
      />

      {/* Glowing Orbs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.25), transparent 70%)',
        }}
      />
      
      <motion.div 
        animate={{ 
          scale: [1.1, 1, 1.1],
          opacity: [0.08, 0.15, 0.08],
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] rounded-full blur-3xl pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.2), transparent 70%)',
        }}
      />

      {/* Content Container - Centered with Flexbox */}
      <div 
        className="relative z-10 w-full max-w-5xl mx-auto px-6 lg:px-8"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          {/* Badge - Available for Projects */}
          <motion.div
            variants={itemVariants}
            className="relative overflow-hidden group mb-12 mx-auto"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              padding: '10px 20px',
              borderRadius: '9999px',
              border: '1px solid rgba(59, 130, 246, 0.4)',
              backgroundColor: 'rgba(59, 130, 246, 0.08)',
              backdropFilter: 'blur(10px)',
              maxWidth: 'fit-content',
            }}
          >
            {/* Shining sweep effect */}
            <motion.div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.5), transparent)',
              }}
              animate={{
                x: ['-200%', '200%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 2,
                ease: 'linear',
              }}
            />

            {/* Pulsing dot indicator */}
            <motion.span 
              className="relative rounded-full"
              style={{
                width: '8px',
                height: '8px',
                flexShrink: 0,
                background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                boxShadow: '0 0 8px rgba(59, 130, 246, 0.8)',
              }}
              animate={{
                boxShadow: [
                  '0 0 8px rgba(59, 130, 246, 0.8)',
                  '0 0 16px rgba(59, 130, 246, 1)',
                  '0 0 8px rgba(59, 130, 246, 0.8)',
                ],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            {/* Badge Text - Responsive */}
            <span 
              className="relative text-center"
              style={{
                fontSize: 'clamp(0.813rem, 1.5vw, 0.938rem)',
                fontWeight: 600,
                background: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                lineHeight: 1.2,
              }}
            >
              Available for new projects
            </span>
          </motion.div>

          {/* Main Heading with Letter-by-Letter Animation */}
          <div 
            className="mb-10"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            {/* First Line - White */}
            <motion.h1 
              className="font-bold leading-tight text-center"
              style={{
                fontSize: 'clamp(2.5rem, 8vw, 5.5rem)',
                letterSpacing: '-0.02em',
              }}
            >
              <span
                style={{
                  background: 'linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  display: 'inline-block',
                }}
              >
                {heading1.split('').map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.5 + index * 0.05,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    style={{ display: 'inline-block' }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </span>
            </motion.h1>

            {/* Second Line - Vibrant Blue with Highlight */}
            <motion.h1 
              className="font-bold leading-tight text-center"
              style={{
                fontSize: 'clamp(2.5rem, 8vw, 5.5rem)',
                letterSpacing: '-0.02em',
              }}
            >
              <motion.span 
                style={{
                  background: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 50%, #2563eb 100%)',
                  backgroundSize: '200% 100%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  display: 'inline-block',
                  filter: 'drop-shadow(0 0 30px rgba(59, 130, 246, 0.5))',
                }}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              >
                {heading2.split('').map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 1.2 + index * 0.05,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    style={{ display: 'inline-block' }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </motion.span>
            </motion.h1>
          </div>

          {/* Main Description - Multi-line with Different Font Styles */}
          <motion.div
            variants={itemVariants}
            className="text-center"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '24px',
              maxWidth: '1000px',
              marginBottom: '48px',
              padding: '0 20px',
            }}
          >
          </motion.div>

          {/* Decorative Divider */}
          <motion.div
            variants={itemVariants}
            style={{
              width: '80px',
              height: '2px',
              marginBottom: '48px',
              background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.6), transparent)',
              borderRadius: '2px',
            }}
          />

          {/* Supporting Text - Italic Serif Style */}
          <motion.p
            variants={itemVariants}
            className="text-center"
            style={{
              fontSize: 'clamp(1.063rem, 2vw, 1.5rem)',
              maxWidth: '900px',
              lineHeight: '1.8',
              color: '#b3b3b3',
              fontWeight: 400,
              letterSpacing: '0.005em',
              fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif',
              fontStyle: 'italic',
              padding: '0 20px',
              marginBottom: '64px',
            }}
          >
            Your technical co-pilot for transforming early concepts
            <br />
            into working products that are{' '}
            <span style={{ 
              color: '#ffffff', 
              fontWeight: 500,
              fontStyle: 'normal',
            }}>
              clear, simple, and ready for users
            </span>.
          </motion.p>

          {/* CTA Buttons with Clear Spacing */}
          <motion.div 
            variants={itemVariants}
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '16px',
              justifyContent: 'center',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            <PillButton 
              href="#contact" 
              variant="secondary"
            >
              Request a demo
            </PillButton>
            <PillButton 
              href="#signup" 
              variant="primary"
            >
              Sign up for free
            </PillButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
