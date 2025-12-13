'use client';

import { motion } from 'framer-motion';

export const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      }
    }
  };

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

  return (
    <section 
      id="about"
      className="relative w-full"
      style={{
        background: '#000000',
        paddingTop: 'clamp(3rem, 8vh, 6.25rem)',
        paddingBottom: 'clamp(3rem, 8vh, 6.25rem)',
      }}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full"
        >
          {/* Centered Badge */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center"
            style={{ marginBottom: 'clamp(2rem, 5vh, 4rem)' }}
          >
            <div className="relative overflow-hidden flex items-center rounded-full border border-blue-500/40 bg-blue-500/10"
              style={{
                gap: 'clamp(8px, 2vw, 12px)',
                padding: 'clamp(8px, 2vw, 10px) clamp(16px, 4vw, 20px)',
              }}
            >
              <motion.div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.5), transparent)',
                }}
                animate={{ x: ['-200%', '200%'] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 2, ease: 'linear' }}
              />
              <motion.span 
                className="relative rounded-full bg-blue-500"
                style={{
                  width: 'clamp(6px, 1.5vw, 8px)',
                  height: 'clamp(6px, 1.5vw, 8px)',
                }}
                animate={{
                  boxShadow: ['0 0 8px rgba(59, 130, 246, 0.8)', '0 0 16px rgba(59, 130, 246, 1)', '0 0 8px rgba(59, 130, 246, 0.8)'],
                  scale: [1, 1.2, 1],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />
              <span 
                className="relative font-semibold text-blue-400"
                style={{
                  fontSize: 'clamp(0.75rem, 2vw, 0.875rem)',
                }}
              >
                About Me
              </span>
            </div>
          </motion.div>

          {/* Grid Container with Bento-style borders */}
          <motion.div 
            variants={itemVariants} 
            className="relative w-full"
            style={{
              border: '1px solid rgba(59, 130, 246, 0.3)',
              borderRadius: '0px',
              overflow: 'hidden',
            }}
          >
            {/* Animated border glow effect */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(90deg, transparent 0%, rgba(59, 130, 246, 0.4) 50%, transparent 100%)',
                backgroundSize: '200% 100%',
              }}
              animate={{
                backgroundPosition: ['0% 0%', '200% 0%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear',
              }}
            />

            {/* Row 1: Image 40% | Text 60% */}
            <div 
              className="flex flex-col md:flex-row relative"
              style={{ 
                minHeight: 'clamp(300px, 50vh, 400px)',
                borderBottom: '1px solid rgba(59, 130, 246, 0.3)',
              }}
            >
              {/* Horizontal line animation */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-[2px] pointer-events-none hidden md:block"
                style={{
                  background: 'linear-gradient(90deg, transparent, #3b82f6, #60a5fa, transparent)',
                  boxShadow: '0 0 20px rgba(59, 130, 246, 0.8), 0 0 40px rgba(59, 130, 246, 0.5)',
                  opacity: 0.8,
                }}
                animate={{
                  x: ['-100%', '100%'],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              {/* Image - 40% */}
              <div 
                className="w-full md:w-[40%] relative border-b md:border-b-0 md:border-r"
                style={{
                  minHeight: 'clamp(200px, 30vh, 300px)',
                  borderColor: 'rgba(59, 130, 246, 0.3)',
                }}
              >
                {/* Vertical line animation */}
                <motion.div
                  className="absolute top-0 right-0 w-[2px] pointer-events-none hidden md:block"
                  style={{
                    height: '120px',
                    background: 'linear-gradient(180deg, transparent, #3b82f6, #60a5fa, transparent)',
                    boxShadow: '0 0 20px rgba(59, 130, 246, 0.8), 0 0 40px rgba(59, 130, 246, 0.5)',
                  }}
                  animate={{
                    y: ['-120px', '520px'],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
                
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
                  alt="Portrait"
                  className="w-full h-full object-cover"
                  style={{ filter: 'grayscale(100%) contrast(1.1) brightness(0.9)' }}
                />
              </div>
              
              {/* Text - 60% */}
              <div 
                className="w-full md:w-[60%] flex items-center"
                style={{
                  padding: 'clamp(1.5rem, 4vw, 3rem)',
                  minHeight: 'clamp(200px, 30vh, 300px)',
                }}
              >
                <p 
                  className="text-white leading-relaxed font-light"
                  style={{
                    fontSize: 'clamp(0.938rem, 2.5vw, 1.25rem)',
                    lineHeight: 'clamp(1.6, 2vw, 1.8)',
                  }}
                >
                  Award-winning designer that won the awwward price in october 2021 for an IDE website that also focus on the UX to make the product more human-like and build it on design system.
                  <br /><br />
                  My goal before 30 is to impact 1,000,000 persons positively where I can make a change in their life.
                </p>
              </div>
            </div>

            {/* Row 2: Text 60% | Image 40% */}
            <div 
              className="flex flex-col md:flex-row relative"
              style={{ minHeight: 'clamp(300px, 50vh, 400px)' }}
            >
              {/* Text - 60% */}
              <div 
                className="w-full md:w-[60%] flex items-center order-2 md:order-1"
                style={{
                  padding: 'clamp(1.5rem, 4vw, 3rem)',
                  minHeight: 'clamp(200px, 30vh, 300px)',
                }}
              >
                <p 
                  className="text-white leading-relaxed font-light"
                  style={{
                    fontSize: 'clamp(0.938rem, 2.5vw, 1.25rem)',
                    lineHeight: 'clamp(1.6, 2vw, 1.8)',
                  }}
                >
                  If you see me not online or designing then you should know that I'm building something or ideating about a new startup that i have in mind.
                  <br /><br />
                  I truly want to leave something good in this life to be remember by.
                  <br /><br />
                  Currently, I'm making this post just so that I step away a bit from work and my problems to remember where i have came from.
                </p>
              </div>
              
              {/* Image - 40% */}
              <div 
                className="w-full md:w-[40%] order-1 md:order-2 relative border-b md:border-b-0 md:border-l"
                style={{
                  minHeight: 'clamp(200px, 30vh, 300px)',
                  borderColor: 'rgba(59, 130, 246, 0.3)',
                }}
              >
                {/* Vertical line animation (left side for second row) */}
                <motion.div
                  className="absolute top-0 left-0 w-[2px] pointer-events-none hidden md:block"
                  style={{
                    height: '120px',
                    background: 'linear-gradient(180deg, transparent, #3b82f6, #60a5fa, transparent)',
                    boxShadow: '0 0 20px rgba(59, 130, 246, 0.8), 0 0 40px rgba(59, 130, 246, 0.5)',
                  }}
                  animate={{
                    y: ['480px', '-120px'],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: 2.5,
                  }}
                />

                <img
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80"
                  alt="Portrait looking up"
                  className="w-full h-full object-cover"
                  style={{ filter: 'grayscale(100%) contrast(1.1) brightness(0.9)' }}
                />
              </div>
            </div>

            {/* Corner sparkle effects */}
            {[
              { top: '0', left: '0', delay: 0 },
              { top: '0', right: '0', delay: 0.5 },
              { bottom: '0', left: '0', delay: 1 },
              { bottom: '0', right: '0', delay: 1.5 },
            ].map((corner, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 pointer-events-none"
                style={{
                  ...corner,
                  background: 'radial-gradient(circle, #60a5fa 0%, transparent 70%)',
                  borderRadius: '50%',
                }}
                animate={{
                  scale: [0, 1.5, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: corner.delay,
                  ease: 'easeInOut',
                }}
              />
            ))}

            {/* Center intersection glow */}
            <motion.div
              className="absolute pointer-events-none"
              style={{
                top: '50%',
                left: '40%',
                transform: 'translate(-50%, -50%)',
                width: '60px',
                height: '60px',
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.6) 0%, transparent 70%)',
                borderRadius: '50%',
                filter: 'blur(15px)',
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
