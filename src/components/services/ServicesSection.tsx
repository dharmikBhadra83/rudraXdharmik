'use client';

import { motion } from 'framer-motion';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="2" />
        <path d="M8 8h8M8 12h8M8 16h4" />
      </svg>
    ),
    title: 'Web App development',
    description: "We'll build you a website that's so good, it'll make all the other websites jealous. Trust me, not kidding.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: 'Web Design',
    description: "Your website will be so beautiful, you'll want to frame it and hang it on your wall (but please don't).",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M5 12l14 0" />
        <path d="M12 5l7 7-7 7" />
      </svg>
    ),
    title: 'Deployments and Hosting',
    description: 'Get your website out there in the world, where it belongs, with our lightning-fast deployment services.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v6m0 6v6M5.64 5.64l4.24 4.24m4.24 4.24l4.24 4.24M1 12h6m6 0h6M5.64 18.36l4.24-4.24m4.24-4.24l4.24-4.24" />
      </svg>
    ),
    title: 'Maintenance',
    description: 'We keep your website running like a well-oiled machine. From optimizing performance to ensuring security, we\'ve got you covered',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: 'Full-Stack Development',
    description: 'Take your website to the next level with our full-stack development services. We\'ve got all the skills to make your vision a reality.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
    title: 'And everything else',
    description: 'Ecommerce, Landing pages, Back-end heavy, Dashboards. You name it, we\'ve done it AND we\'ll do it for you.',
  },
];

export const ServicesSection = () => {
  
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
    <section id="services" className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {/* Badge */}
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

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
            We handle just about everything!
          </h2>
          
       
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ service, index }: { service: Service; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group"
    >
      {/* Card Container */}
      <div className="relative h-full p-6 sm:p-8 rounded-xl bg-[#0a0a0a] border border-gray-900 overflow-hidden">
        {/* Animated Border Effect */}
        <div className="absolute inset-0 rounded-xl overflow-hidden">
          {/* Base border */}
          <div className="absolute inset-0 rounded-xl border border-gray-800" />
          
          {/* Animated neon border - using pseudo-elements via wrapper */}
          <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <svg className="absolute inset-0 w-full h-full" style={{ filter: 'blur(1px)' }}>
              <defs>
                <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                  <stop offset="50%" stopColor="#3b82f6" stopOpacity="1" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                </linearGradient>
              </defs>
              <rect
                x="0"
                y="0"
                width="100%"
                height="100%"
                fill="none"
                stroke={`url(#gradient-${index})`}
                strokeWidth="2"
                rx="12"
                className="animated-border"
              />
            </svg>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          {/* Icon */}
          <div className="mb-4 text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
            {service.icon}
          </div>

          {/* Title */}
          <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white group-hover:text-blue-100 transition-colors duration-300">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
            {service.description}
          </p>
        </div>

        {/* Subtle glow effect on hover */}
        <div className="absolute inset-0 rounded-xl bg-blue-500/0 group-hover:bg-blue-500/5 transition-colors duration-300 pointer-events-none" />
      </div>

      <style jsx>{`
        @keyframes borderRotate {
          0% {
            stroke-dasharray: 0 1000;
            stroke-dashoffset: 0;
          }
          50% {
            stroke-dasharray: 500 1000;
            stroke-dashoffset: -250;
          }
          100% {
            stroke-dasharray: 1000 1000;
            stroke-dashoffset: -1000;
          }

        }

        .animated-border {
          animation: borderRotate 3s linear infinite;
          stroke-dasharray: 0 1000;
        }
      `}</style>
    </motion.div>
  );
};


