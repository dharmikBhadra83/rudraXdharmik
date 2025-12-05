'use client';

import { motion } from 'framer-motion';

export const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1] as any
      }
    }
  };

  return (
    <section 
      id="about"
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #000000 0%, #0a0a0a 50%, #000000 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '140px',
        paddingBottom: '140px',
      }}
    >
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(60, 60, 60, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(60, 60, 60, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content Container */}
      <div 
        className="relative z-10 w-full max-w-5xl mx-auto px-6 lg:px-8"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-150px" }}
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* Centered Badge */}
          <motion.div
            variants={itemVariants}
            className="relative overflow-hidden group mb-20"
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
            }}
          >
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

            <span 
              className="relative text-center"
              style={{
                fontSize: 'clamp(0.813rem, 1.5vw, 0.938rem)',
                fontWeight: 600,
                background: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              About Me
            </span>
          </motion.div>

          {/* Section 1: Image Left + Text Right */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center w-full"
          >
            <div 
              className="md:col-span-2"
              style={{
                aspectRatio: '4/5',
                borderRadius: '16px',
                overflow: 'hidden',
                position: 'relative',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.6), 0 0 40px rgba(59, 130, 246, 0.15)',
              }}
            >
              <div 
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.12) 0%, transparent 60%)',
                  zIndex: 1,
                }}
              />
              
              <img
                src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=800&q=80"
                alt="Software development"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'grayscale(100%) contrast(1.1)',
                }}
              />
            </div>

            <div className="md:col-span-3" style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
              <p style={{
                fontSize: 'clamp(1.063rem, 1.5vw, 1.25rem)',
                lineHeight: '1.9',
                color: '#ffffff',
                fontWeight: 300,
                fontFamily: 'var(--font-montserrat), -apple-system, sans-serif',
              }}>
                Most people come to me with a <span style={{ fontWeight: 600, color: '#60a5fa' }}>spark</span>—an idea, 
                a problem, a workflow that's slowing everything down. They know what they want to build, but not how 
                to turn it into something real. <span style={{ fontWeight: 500 }}>That's where I step in.</span>
              </p>
              
              <p style={{
                fontSize: 'clamp(1.063rem, 1.5vw, 1.25rem)',
                lineHeight: '1.9',
                color: '#ffffff',
                fontWeight: 300,
                fontFamily: 'var(--font-montserrat), -apple-system, sans-serif',
              }}>
                I work with <span style={{ 
                  background: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontWeight: 600,
                }}>non-technical founders</span>, <span style={{ 
                  background: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontWeight: 600,
                }}>early-stage startups</span>, and <span style={{ 
                  background: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontWeight: 600,
                }}>small businesses</span>.
              </p>
            </div>
          </motion.div>

          {/* Animated Cross Lighting Divider */}
          <motion.div
            variants={itemVariants}
            className="relative w-full my-24"
            style={{
              height: '100px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div style={{ position: 'absolute', width: '100%', height: '1px', background: 'rgba(40, 40, 40, 0.5)' }} />

            <motion.div
              style={{
                position: 'absolute',
                width: '100%',
                height: '2px',
                background: 'linear-gradient(90deg, transparent 0%, rgba(59, 130, 246, 0.3) 20%, #3b82f6 50%, rgba(59, 130, 246, 0.3) 80%, transparent 100%)',
                boxShadow: '0 0 20px rgba(59, 130, 246, 0.6), 0 0 40px rgba(59, 130, 246, 0.3)',
              }}
              animate={{ x: ['-100%', '200%'], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 4, repeat: Infinity, repeatDelay: 0.5, ease: 'easeInOut' }}
            />

            <motion.div
              style={{
                position: 'absolute',
                width: '2px',
                height: '100px',
                background: 'linear-gradient(180deg, transparent 0%, rgba(59, 130, 246, 0.4) 30%, #3b82f6 50%, rgba(59, 130, 246, 0.4) 70%, transparent 100%)',
                boxShadow: '0 0 30px rgba(59, 130, 246, 0.8)',
              }}
              animate={{ opacity: [0.3, 1, 0.3], scaleY: [0.8, 1, 0.8] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />

            <motion.div
              style={{
                position: 'absolute',
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.6), rgba(59, 130, 246, 0.2) 40%, transparent 70%)',
                filter: 'blur(10px)',
              }}
              animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />

            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                style={{
                  position: 'absolute',
                  width: '3px',
                  height: '3px',
                  borderRadius: '50%',
                  background: '#3b82f6',
                  left: '50%',
                  top: '50%',
                }}
                animate={{
                  x: [0, (Math.cos(i * 45 * Math.PI / 180) * 40)],
                  y: [0, (Math.sin(i * 45 * Math.PI / 180) * 40)],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.25,
                  ease: 'easeOut',
                }}
              />
            ))}
          </motion.div>

          {/* Section 2: Text Left + Image Right */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center w-full"
          >
            <div className="md:col-span-3" style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
              <p style={{
                fontSize: 'clamp(1.063rem, 1.5vw, 1.25rem)',
                lineHeight: '1.9',
                color: '#ffffff',
                fontWeight: 300,
                fontFamily: 'var(--font-montserrat), -apple-system, sans-serif',
              }}>
                My approach is built around three things: <span style={{ fontWeight: 600 }}>refining ideas</span>,{' '}
                <span style={{ fontWeight: 600 }}>designing with intention</span>, and{' '}
                <span style={{ fontWeight: 600 }}>building fast</span> without sacrificing quality.
              </p>
              
              <p style={{
                fontSize: 'clamp(1.063rem, 1.5vw, 1.25rem)',
                lineHeight: '1.9',
                color: '#ffffff',
                fontWeight: 300,
                fontFamily: 'var(--font-montserrat), -apple-system, sans-serif',
              }}>
                I've helped teams ship products used across <span style={{ 
                  background: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontWeight: 600,
                }}>airports in Australia and New Zealand</span>, and built automation systems that <span style={{ 
                  background: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontWeight: 600,
                }}>reduced operations workload by 30%</span>.
              </p>

              <p style={{
                fontSize: 'clamp(1.063rem, 1.5vw, 1.25rem)',
                lineHeight: '1.9',
                color: '#ffffff',
                fontWeight: 300,
                fontFamily: 'var(--font-montserrat), -apple-system, sans-serif',
              }}>
                Think of me as your <span style={{ 
                  fontWeight: 600,
                  background: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>technical co-pilot</span> — someone who cares about the outcome as much as you do.
              </p>
            </div>

            <div 
              className="md:col-span-2"
              style={{
                aspectRatio: '4/5',
                borderRadius: '16px',
                overflow: 'hidden',
                position: 'relative',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.6), 0 0 40px rgba(59, 130, 246, 0.15)',
              }}
            >
              <div 
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(225deg, rgba(139, 92, 246, 0.1) 0%, transparent 60%)',
                  zIndex: 1,
                }}
              />
              
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80"
                alt="Founder collaboration"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'grayscale(100%) contrast(1.1)',
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

