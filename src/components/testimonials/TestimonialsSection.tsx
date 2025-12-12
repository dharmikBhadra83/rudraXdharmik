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
        ease: [0.22, 1, 0.36, 1],
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
      className="relative w-full min-h-screen flex items-center justify-center py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #000000 0%, #0a0a0f 50%, #000000 100%)',
      }}
    >
      {/* Background Ripple Effect */}
      <BackgroundRippleEffect rows={8} cols={27} cellSize={56} />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
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
              <span className="relative text-sm font-semibold text-blue-400">Testimonials</span>
            </div>
          </motion.div>

          <motion.h2
            variants={titleVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4"
            style={{
              fontFamily: 'sans-serif',
            }}
          >
            What people say
          </motion.h2>
          <motion.p
            variants={titleVariants}
            className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto"
            style={{
              fontFamily: 'sans-serif',
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
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={cardVariants}
              className="relative group"
            >
              <div
                className="relative h-full rounded-2xl p-6 lg:p-8"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(20, 20, 50, 0.4) 50%, rgba(10, 10, 30, 0.6) 100%)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  boxShadow: '0 4px 24px 0 rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05) inset, 0 0 40px rgba(0, 0, 0, 0.3) inset',
                }}
              >
                {/* Avatar */}
                <div className="flex items-center mb-5">
                  <div
                    className="w-12 h-12 rounded-full overflow-hidden mr-4 flex-shrink-0"
                    style={{
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
                      className="text-base sm:text-lg font-bold text-white mb-1"
                      style={{
                        fontFamily: 'sans-serif',
                      }}
                    >
                      {testimonial.name}
                    </h3>
                    <p 
                      className="text-xs sm:text-sm text-gray-400"
                      style={{
                        fontFamily: 'sans-serif',
                      }}
                    >
                      {testimonial.title}
                    </p>
                  </div>
                </div>

                {/* Quote */}
                <p 
                  className="text-gray-300 leading-relaxed text-sm sm:text-base"
                  style={{
                    fontFamily: 'sans-serif',
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
