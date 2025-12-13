'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BackgroundRippleEffect } from '@/components/ui/background-ripple-effect';

interface Testimonial {
  id: string;
  name: string;
  title: string;
  quote: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    title: 'Small Business Owner',
    quote: "Since integrating this solution into our workflow, we've experienced a significant improvement in efficiency and collaboration.",
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
  },
  {
    id: '2',
    name: 'David Patel',
    title: 'Project Manager',
    quote: "I've tested numerous options in this category, but one stands out for its intuitive design and comprehensive functionality.",
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
  },
  {
    id: '3',
    name: 'Emily Carter',
    title: 'Operations Manager',
    quote: "The tool we've adopted has surpassed our expectations, providing invaluable insights and support as our business continues to grow.",
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily',
  },
];

export const TestimonialsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
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
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #000000 0%, #0a0a0f 50%, #000000 100%)',
        paddingTop: 'clamp(3rem, 8vh, 6.25rem)',
        paddingBottom: 'clamp(3rem, 8vh, 6.25rem)',
      }}
    >
      {/* Background Ripple Effect */}
      <BackgroundRippleEffect rows={8} cols={27} cellSize={56} />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title and Subtitle */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center"
            style={{ marginBottom: 'clamp(2rem, 5vh, 3rem)' }}
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
                Testimonials
              </span>
            </div>
          </motion.div>

          <motion.h2
            variants={titleVariants}
            className="font-bold text-white"
            style={{
              fontFamily: 'sans-serif',
              fontSize: 'clamp(2rem, 6vw, 3.75rem)',
              marginBottom: 'clamp(1rem, 2vh, 1.5rem)',
            }}
          >
            What people say
          </motion.h2>
          <motion.p
            variants={titleVariants}
            className="text-gray-400 max-w-2xl mx-auto"
            style={{
              fontFamily: 'sans-serif',
              fontSize: 'clamp(0.938rem, 2.5vw, 1.125rem)',
            }}
          >
            Discover what our satisfied customers have to say about their experiences with our products/services.
          </motion.p>
        </motion.div>

        {/* Testimonial Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          style={{
            gap: 'clamp(1.5rem, 4vw, 2rem)',
            marginTop: 'clamp(2rem, 5vh, 4rem)',
          }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={cardVariants}
              className="relative group"
            >
              <div
                className="relative h-full rounded-2xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(20, 20, 50, 0.4) 50%, rgba(10, 10, 30, 0.6) 100%)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  boxShadow: '0 4px 24px 0 rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05) inset, 0 0 40px rgba(0, 0, 0, 0.3) inset',
                  padding: 'clamp(1.5rem, 4vw, 2rem)',
                }}
              >
                {/* Avatar */}
                <div className="flex items-center" style={{ marginBottom: 'clamp(1rem, 3vh, 1.25rem)' }}>
                  <div
                    className="rounded-full overflow-hidden flex-shrink-0"
                    style={{
                      width: 'clamp(40px, 8vw, 48px)',
                      height: 'clamp(40px, 8vw, 48px)',
                      marginRight: 'clamp(0.75rem, 2vw, 1rem)',
                      border: '2px solid rgba(255, 255, 255, 0.15)',
                    }}
                  >
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 
                      className="font-bold text-white"
                      style={{
                        fontFamily: 'sans-serif',
                        fontSize: 'clamp(0.875rem, 2vw, 1.125rem)',
                        marginBottom: 'clamp(0.25rem, 1vh, 0.5rem)',
                      }}
                    >
                      {testimonial.name}
                    </h3>
                    <p 
                      className="text-gray-400"
                      style={{
                        fontFamily: 'sans-serif',
                        fontSize: 'clamp(0.75rem, 1.8vw, 0.875rem)',
                      }}
                    >
                      {testimonial.title}
                    </p>
                  </div>
                </div>

                {/* Quote */}
                <p 
                  className="text-gray-300 leading-relaxed"
                  style={{
                    fontFamily: 'sans-serif',
                    fontSize: 'clamp(0.875rem, 2.2vw, 1rem)',
                    lineHeight: 'clamp(1.5, 2vw, 1.75)',
                  }}
                >
                  {testimonial.quote}
                </p>

                {/* Subtle glow effect */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle at 30% 30%, rgba(100, 150, 255, 0.08) 0%, transparent 60%)',
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
