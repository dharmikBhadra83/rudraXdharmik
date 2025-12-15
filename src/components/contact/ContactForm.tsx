'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';
import { CONTACT_CONTENT } from '@/constants';

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  ideas?: string;
  agreeToTerms?: string;
}

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    ideas: '',
    agreeToTerms: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    // Validate individual field on blur
    validateField(name as keyof FormErrors, value);
  };


  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, agreeToTerms: e.target.checked }));
    if (errors.agreeToTerms) {
      setErrors(prev => ({ ...prev, agreeToTerms: undefined }));
    }
  };

  const validateField = (fieldName: keyof FormErrors, value: string | boolean) => {
    const newErrors: FormErrors = { ...errors };

    switch (fieldName) {
      case 'firstName':
        if (!value || (typeof value === 'string' && !value.trim())) {
          newErrors.firstName = 'First name is required';
        } else if (typeof value === 'string' && value.trim().length < 2) {
          newErrors.firstName = 'First name must be at least 2 characters';
        } else {
          delete newErrors.firstName;
        }
        break;

      case 'lastName':
        if (!value || (typeof value === 'string' && !value.trim())) {
          newErrors.lastName = 'Last name is required';
        } else if (typeof value === 'string' && value.trim().length < 2) {
          newErrors.lastName = 'Last name must be at least 2 characters';
        } else {
          delete newErrors.lastName;
        }
        break;

      case 'email':
        if (!value || (typeof value === 'string' && !value.trim())) {
          newErrors.email = 'Email is required';
        } else if (typeof value === 'string') {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(value)) {
            newErrors.email = 'Please enter a valid email address';
          } else {
            delete newErrors.email;
          }
        }
        break;

      case 'phone':
        if (!value || (typeof value === 'string' && !value.trim())) {
          newErrors.phone = 'Phone number is required';
        } else if (typeof value === 'string') {
          // Basic phone validation (allows numbers, spaces, dashes, parentheses, plus)
          const phoneRegex = /^[\d\s\-\+\(\)]+$/;
          if (!phoneRegex.test(value) || value.trim().length < 10) {
            newErrors.phone = 'Please enter a valid phone number';
          } else {
            delete newErrors.phone;
          }
        }
        break;

      case 'ideas':
        if (!value || (typeof value === 'string' && !value.trim())) {
          newErrors.ideas = 'Please tell us about your ideas and needs';
        } else if (typeof value === 'string' && value.trim().length < 10) {
          newErrors.ideas = 'Message must be at least 10 characters';
        } else {
          delete newErrors.ideas;
        }
        break;

      case 'agreeToTerms':
        if (!value) {
          newErrors.agreeToTerms = 'You must agree to the terms and privacy policy';
        } else {
          delete newErrors.agreeToTerms;
        }
        break;
    }

    setErrors(newErrors);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    } else if (formData.firstName.trim().length < 2) {
      newErrors.firstName = 'First name must be at least 2 characters';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    } else if (formData.lastName.trim().length < 2) {
      newErrors.lastName = 'Last name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address';
      }
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else {
      // Basic phone validation (allows numbers, spaces, dashes, parentheses, plus)
      const phoneRegex = /^[\d\s\-\+\(\)]+$/;
      if (!phoneRegex.test(formData.phone) || formData.phone.trim().length < 10) {
        newErrors.phone = 'Please enter a valid phone number';
      }
    }

    if (!formData.ideas.trim()) {
      newErrors.ideas = 'Please tell us about your ideas and needs';
    } else if (formData.ideas.trim().length < 10) {
      newErrors.ideas = 'Message must be at least 10 characters';
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms and privacy policy';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields - this sets the errors state
    const isValid = validateForm();
    
    if (!isValid) {
      // Don't show toast on validation error, just show field errors
      // Scroll to first error field after a brief delay to allow state update
      setTimeout(() => {
        const errorFields = ['firstName', 'lastName', 'email', 'phone', 'ideas', 'agreeToTerms'];
        for (const field of errorFields) {
          // Check if this field has an error by querying the DOM for error message
          const errorElement = document.querySelector(`[name="${field}"]`)?.parentElement?.querySelector('.text-red-400');
          if (errorElement) {
            let element: HTMLElement | null = null;
            if (field === 'agreeToTerms') {
              element = document.querySelector('[name="agreeToTerms"]')?.parentElement?.parentElement as HTMLElement;
            } else {
              element = document.querySelector(`[name="${field}"]`) as HTMLElement;
            }
            if (element) {
              element.scrollIntoView({ behavior: 'smooth', block: 'center' });
              if (element.focus && field !== 'agreeToTerms') element.focus();
              break;
            }
          }
        }
      }, 100);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit form');
      }

      // Success toast
      toast.success('Thank you! Your message has been sent successfully.', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'dark',
        style: {
          background: '#1a1a1a',
          color: '#fff',
          border: '1px solid rgba(59, 130, 246, 0.3)',
        },
      });

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        ideas: '',
        agreeToTerms: false,
      });
      setErrors({});
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('Something went wrong. Please try again later.', {
        position: 'top-right',
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'dark',
        style: {
          background: '#1a1a1a',
          color: '#fff',
          border: '1px solid rgba(239, 68, 68, 0.3)',
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as any,
      },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as any,
      },
    },
  };

  const features = CONTACT_CONTENT.features;

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        style={{ zIndex: 9999 }}
      />
      <section 
        id="contact"
        className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, #000000 0%, #0a0a0a 50%, #000000 100%)',
          paddingTop: 'clamp(3rem, 8vh, 6.25rem)',
          paddingBottom: 'clamp(3rem, 8vh, 6.25rem)',
        }}
      >
        {/* Blue Glow Effect on Right Side */}
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[800px] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.2) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />

        {/* Main Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Badge */}
          <motion.div
            variants={badgeVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
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
                className="relative font-semibold text-blue-400 uppercase tracking-wider"
                style={{
                  fontSize: 'clamp(0.75rem, 2vw, 0.875rem)',
                }}
              >
                Contact Us
              </span>
            </div>
          </motion.div>

          {/* Main Card Container */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative rounded-2xl overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
            }}
          >
            {/* Subtle Texture Overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.15) 1px, transparent 0)`,
                backgroundSize: '20px 20px',
                opacity: 0.3,
              }}
            />

            <div className="relative grid grid-cols-1 lg:grid-cols-[40%_60%]"
              style={{ minHeight: 'clamp(500px, 80vh, 600px)' }}
            >
              {/* Left Column - Contact Information */}
              <div className="flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-neutral-800 relative z-10"
                style={{
                  padding: 'clamp(1.5rem, 4vw, 3rem)',
                }}
              >
                <motion.div variants={itemVariants} className="w-full"
                  style={{ paddingRight: 'clamp(0.5rem, 2vw, 1rem)' }}
                >
                  <h2 
                    className="font-bold text-white"
                    style={{ 
                      lineHeight: '1.2',
                      wordSpacing: 'normal',
                      fontSize: 'clamp(1.75rem, 5vw, 3rem)',
                      marginBottom: 'clamp(1rem, 3vh, 1.5rem)',
                    }}
                  >
                    {CONTACT_CONTENT.heading}
                  </h2>
                  <p 
                    className="text-neutral-400 leading-relaxed"
                    style={{
                      fontSize: 'clamp(0.938rem, 2.5vw, 1rem)',
                      marginBottom: 'clamp(1.5rem, 4vh, 2rem)',
                    }}
                  >
                    {CONTACT_CONTENT.subheading}
                  </p>

                  {/* Feature List */}
                  <div style={{ 
                    marginBottom: 'clamp(1.5rem, 4vh, 2rem)',
                    gap: 'clamp(0.75rem, 2vh, 1rem)',
                    display: 'flex',
                    flexDirection: 'column',
                  }}>
                    {features.map((feature, index) => (
                      <motion.div
                        key={feature}
                        variants={itemVariants}
                        className="flex items-center"
                        style={{ gap: 'clamp(0.5rem, 2vw, 0.75rem)' }}
                      >
                        <div
                          className="rounded-full flex items-center justify-center flex-shrink-0"
                          style={{
                            width: 'clamp(20px, 5vw, 24px)',
                            height: 'clamp(20px, 5vw, 24px)',
                            background: 'rgba(59, 130, 246, 0.2)',
                            border: '1px solid rgba(59, 130, 246, 0.4)',
                          }}
                        >
                          <svg
                            className="text-blue-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            style={{
                              width: 'clamp(12px, 3vw, 14px)',
                              height: 'clamp(12px, 3vw, 14px)',
                            }}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span 
                          className="text-neutral-300"
                          style={{
                            fontSize: 'clamp(0.813rem, 2vw, 0.875rem)',
                          }}
                        >
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Contact Details */}
                <motion.div variants={itemVariants} className="mt-auto">
                  <h3 
                    className="text-neutral-200 font-semibold"
                    style={{
                      fontSize: 'clamp(0.938rem, 2.5vw, 1.125rem)',
                      marginBottom: 'clamp(0.75rem, 2vh, 1rem)',
                    }}
                  >
                    Contact Info
                  </h3>
                  <div style={{ 
                    gap: 'clamp(0.5rem, 1.5vh, 0.75rem)',
                    display: 'flex',
                    flexDirection: 'column',
                  }}>
                    <div>
                      <span 
                        className="text-neutral-400"
                        style={{ fontSize: 'clamp(0.813rem, 2vw, 0.875rem)' }}
                      >
                        Phone:{' '}
                      </span>
                      <a
                        href={`tel:${CONTACT_CONTENT.contactInfo.phone.replace(/\s/g, '')}`}
                        className="text-neutral-300 hover:text-blue-400 transition-colors"
                        style={{ fontSize: 'clamp(0.813rem, 2vw, 0.875rem)' }}
                      >
                        {CONTACT_CONTENT.contactInfo.phone}
                      </a>
                    </div>
                    <div>
                      <span 
                        className="text-neutral-400"
                        style={{ fontSize: 'clamp(0.813rem, 2vw, 0.875rem)' }}
                      >
                        Email:{' '}
                      </span>
                      <a
                        href={`mailto:${CONTACT_CONTENT.contactInfo.email}`}
                        className="text-neutral-300 hover:text-blue-400 transition-colors"
                        style={{ fontSize: 'clamp(0.813rem, 2vw, 0.875rem)' }}
                      >
                        {CONTACT_CONTENT.contactInfo.email}
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Right Column - Contact Form */}
              <div className="relative"
                style={{
                  padding: 'clamp(1.5rem, 4vw, 3rem)',
                }}
              >
                <form onSubmit={handleSubmit} className="relative z-10"
                  style={{
                    gap: 'clamp(1rem, 3vh, 1.5rem)',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  {/* First Name and Last Name Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2"
                    style={{
                      gap: 'clamp(1rem, 3vw, 1.5rem)',
                    }}
                  >
                    <motion.div variants={itemVariants}
                      style={{
                        gap: 'clamp(0.5rem, 1.5vh, 0.75rem)',
                        display: 'flex',
                        flexDirection: 'column',
                      }}
                    >
                      <label 
                        htmlFor="firstName"
                        className="block text-neutral-300"
                        style={{
                          fontSize: 'clamp(0.813rem, 2vw, 0.875rem)',
                        }}
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        autoComplete="given-name"
                        value={formData.firstName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        onFocus={(e) => {
                          e.target.style.backgroundColor = '#262626';
                          e.target.style.background = '#262626';
                          e.target.style.color = '#ffffff';
                        }}
                        placeholder="Albert"
                        style={{ 
                          backgroundColor: '#262626', 
                          color: '#ffffff', 
                          background: '#262626',
                          padding: 'clamp(0.75rem, 2vw, 0.875rem) clamp(1rem, 3vw, 1.25rem)',
                          fontSize: 'clamp(0.875rem, 2.2vw, 1rem)',
                        }}
                        className={`w-full rounded-lg bg-neutral-800 border-2 text-white placeholder-neutral-500 focus:outline-none focus:ring-1 transition-all ${
                          errors.firstName 
                            ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
                            : 'border-neutral-700 focus:border-blue-500/50 focus:ring-blue-500/20'
                        }`}
                        required
                      />
                      {errors.firstName && (
                        <p 
                          className="text-red-400"
                          style={{
                            fontSize: 'clamp(0.75rem, 1.8vw, 0.813rem)',
                            marginTop: '0.25rem',
                          }}
                        >
                          {errors.firstName}
                        </p>
                      )}
                    </motion.div>
                    <motion.div variants={itemVariants}
                      style={{
                        gap: 'clamp(0.5rem, 1.5vh, 0.75rem)',
                        display: 'flex',
                        flexDirection: 'column',
                      }}
                    >
                      <label 
                        htmlFor="lastName"
                        className="block text-neutral-300"
                        style={{
                          fontSize: 'clamp(0.813rem, 2vw, 0.875rem)',
                        }}
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        autoComplete="family-name"
                        value={formData.lastName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        onFocus={(e) => {
                          e.target.style.backgroundColor = '#262626';
                          e.target.style.background = '#262626';
                          e.target.style.color = '#ffffff';
                        }}
                        placeholder="Susanto"
                        style={{ 
                          backgroundColor: '#262626', 
                          color: '#ffffff', 
                          background: '#262626',
                          padding: 'clamp(0.75rem, 2vw, 0.875rem) clamp(1rem, 3vw, 1.25rem)',
                          fontSize: 'clamp(0.875rem, 2.2vw, 1rem)',
                        }}
                        className={`w-full rounded-lg bg-neutral-800 border-2 text-white placeholder-neutral-500 focus:outline-none focus:ring-1 transition-all ${
                          errors.lastName 
                            ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
                            : 'border-neutral-700 focus:border-blue-500/50 focus:ring-blue-500/20'
                        }`}
                        required
                      />
                      {errors.lastName && (
                        <p 
                          className="text-red-400"
                          style={{
                            fontSize: 'clamp(0.75rem, 1.8vw, 0.813rem)',
                            marginTop: '0.25rem',
                          }}
                        >
                          {errors.lastName}
                        </p>
                      )}
                    </motion.div>
                  </div>

                  {/* Email Address */}
                  <motion.div variants={itemVariants}
                    style={{
                      gap: 'clamp(0.5rem, 1.5vh, 0.75rem)',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <label 
                      htmlFor="email"
                      className="block text-neutral-300"
                      style={{
                        fontSize: 'clamp(0.813rem, 2vw, 0.875rem)',
                      }}
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      onFocus={(e) => {
                        e.target.style.backgroundColor = '#262626';
                        e.target.style.background = '#262626';
                        e.target.style.color = '#ffffff';
                      }}
                      placeholder="albert.susanto@example.com"
                      style={{ 
                        backgroundColor: '#262626', 
                        color: '#ffffff', 
                        background: '#262626',
                        padding: 'clamp(0.75rem, 2vw, 0.875rem) clamp(1rem, 3vw, 1.25rem)',
                        fontSize: 'clamp(0.875rem, 2.2vw, 1rem)',
                      }}
                      className={`w-full rounded-lg bg-neutral-800 border-2 text-white placeholder-neutral-500 focus:outline-none focus:ring-1 transition-all ${
                        errors.email 
                          ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
                          : 'border-neutral-700 focus:border-blue-500/50 focus:ring-blue-500/20'
                      }`}
                      required
                    />
                    {errors.email && (
                      <p 
                        className="text-red-400"
                        style={{
                          fontSize: 'clamp(0.75rem, 1.8vw, 0.813rem)',
                          marginTop: '0.25rem',
                        }}
                      >
                        {errors.email}
                      </p>
                    )}
                  </motion.div>

                  {/* Phone Number */}
                  <motion.div variants={itemVariants}
                    style={{
                      gap: 'clamp(0.5rem, 1.5vh, 0.75rem)',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <label 
                      htmlFor="phone"
                      className="block text-neutral-300"
                      style={{
                        fontSize: 'clamp(0.813rem, 2vw, 0.875rem)',
                      }}
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      autoComplete="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      onFocus={(e) => {
                        e.target.style.backgroundColor = '#262626';
                        e.target.style.background = '#262626';
                        e.target.style.color = '#ffffff';
                      }}
                      placeholder="+1 (555) 123-4567"
                      pattern="[\d\s\-\+\(\)]+"
                      style={{ 
                        backgroundColor: '#262626', 
                        color: '#ffffff', 
                        background: '#262626',
                        padding: 'clamp(0.75rem, 2vw, 0.875rem) clamp(1rem, 3vw, 1.25rem)',
                        fontSize: 'clamp(0.875rem, 2.2vw, 1rem)',
                      }}
                      className={`w-full rounded-lg bg-neutral-800 border-2 text-white placeholder-neutral-500 focus:outline-none focus:ring-1 transition-all ${
                        errors.phone 
                          ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
                          : 'border-neutral-700 focus:border-blue-500/50 focus:ring-blue-500/20'
                      }`}
                      required
                    />
                    {errors.phone && (
                      <p 
                        className="text-red-400"
                        style={{
                          fontSize: 'clamp(0.75rem, 1.8vw, 0.813rem)',
                          marginTop: '0.25rem',
                        }}
                      >
                        {errors.phone}
                      </p>
                    )}
                  </motion.div>

                  {/* Tell Us About Your Ideas and Needs */}
                  <motion.div variants={itemVariants}
                    style={{
                      gap: 'clamp(0.5rem, 1.5vh, 0.75rem)',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <label 
                      htmlFor="ideas"
                      className="block text-neutral-300"
                      style={{
                        fontSize: 'clamp(0.813rem, 2vw, 0.875rem)',
                      }}
                    >
                      Tell Us About Your Ideas and Needs <span className="text-blue-500">*</span>
                    </label>
                    <textarea
                      id="ideas"
                      name="ideas"
                      autoComplete="off"
                      value={formData.ideas}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      onFocus={(e) => {
                        e.target.style.backgroundColor = '#262626';
                        e.target.style.background = '#262626';
                        e.target.style.color = '#ffffff';
                      }}
                      placeholder="Write your ideas and needs..."
                      rows={5}
                      style={{ 
                        backgroundColor: '#262626', 
                        color: '#ffffff', 
                        background: '#262626',
                        padding: 'clamp(0.75rem, 2vw, 0.875rem) clamp(1rem, 3vw, 1.25rem)',
                        fontSize: 'clamp(0.875rem, 2.2vw, 1rem)',
                      }}
                      className={`w-full rounded-lg bg-neutral-800 border-2 text-white placeholder-neutral-500 focus:outline-none focus:ring-1 transition-all resize-none ${
                        errors.ideas 
                          ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
                          : 'border-neutral-700 focus:border-blue-500/50 focus:ring-blue-500/20'
                      }`}
                      required
                    />
                    {errors.ideas && (
                      <p 
                        className="text-red-400"
                        style={{
                          fontSize: 'clamp(0.75rem, 1.8vw, 0.813rem)',
                          marginTop: '0.25rem',
                        }}
                      >
                        {errors.ideas}
                      </p>
                    )}
                  </motion.div>

                  {/* Checkbox and Submit Button Row */}
                  <motion.div
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between"
                    style={{
                      gap: 'clamp(1rem, 3vw, 1.5rem)',
                      paddingTop: 'clamp(0.5rem, 2vh, 1rem)',
                    }}
                  >
                    <div className="flex flex-col w-full sm:w-auto items-center sm:items-start">
                      <div className="w-full flex justify-center sm:justify-start"
                        style={{
                          paddingLeft: 'clamp(1rem, 4vw, 0px)',
                          paddingRight: 'clamp(1rem, 4vw, 0px)',
                        }}
                      >
                        <label className="flex items-start cursor-pointer group sm:justify-start"
                          style={{ 
                            gap: 'clamp(0.75rem, 3vw, 0.75rem)',
                            maxWidth: '100%',
                            width: 'fit-content',
                            justifyContent: 'center',
                          }}
                        >
                          <div className="relative shrink-0" style={{ 
                            marginTop: '0.125rem',
                          }}>
                            <input
                              type="checkbox"
                              name="agreeToTerms"
                              checked={formData.agreeToTerms}
                              onChange={handleCheckboxChange}
                              className="peer sr-only"
                              required
                            />
                            <div
                              className={`rounded border-2 bg-neutral-800 transition-all duration-200 peer-checked:bg-blue-600 peer-checked:border-blue-600 cursor-pointer flex items-center justify-center ${
                                errors.agreeToTerms ? 'border-red-500/50' : 'border-neutral-700'
                              }`}
                              style={{
                                width: 'clamp(18px, 4vw, 20px)',
                                height: 'clamp(18px, 4vw, 20px)',
                              }}
                            >
                              {formData.agreeToTerms && (
                                <svg
                                  className="text-white"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                  style={{
                                    width: 'clamp(12px, 3vw, 14px)',
                                    height: 'clamp(12px, 3vw, 14px)',
                                  }}
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={3}
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                              )}
                            </div>
                          </div>
                          <span 
                            className="text-neutral-400 group-hover:text-neutral-300 transition-colors sm:text-left"
                            style={{
                              fontSize: 'clamp(0.75rem, 1.8vw, 0.875rem)',
                              lineHeight: '1.5',
                              textAlign: 'center',
                              flex: 1,
                              wordBreak: 'break-word',
                              overflowWrap: 'break-word',
                            }}
                          >
                            I agree to Rudrx{' '}
                            <a href="/terms" className="font-semibold text-white hover:text-blue-400 transition-colors">
                              Terms of{' '}
                              <span className="sm:hidden"><br /></span>
                              Use
                            </a>
                            {' '}and{' '}
                            <a href="/privacy" className="font-semibold text-white hover:text-blue-400 transition-colors">
                              Privacy Policy
                            </a>
                            {' '}
                            <span className="text-blue-500">*</span>
                          </span>
                        </label>
                      </div>
                      {errors.agreeToTerms && (
                        <p 
                          className="text-red-400 sm:text-left"
                          style={{
                            fontSize: 'clamp(0.75rem, 1.8vw, 0.813rem)',
                            marginTop: '0.25rem',
                            textAlign: 'center',
                            width: '100%',
                          }}
                        >
                          {errors.agreeToTerms}
                        </p>
                      )}
                    </div>

                    <div className="w-full sm:w-auto flex justify-center sm:justify-end">
                      <HoverBorderGradient
                        as="button"
                        type="submit"
                        disabled={isSubmitting}
                        containerClassName="rounded-full"
                        className={`bg-black text-white font-semibold ${
                          isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                        style={{
                          padding: 'clamp(0.625rem, 2vw, 0.75rem) clamp(2rem, 5vw, 2.5rem)',
                          fontSize: 'clamp(0.875rem, 2.2vw, 1rem)',
                        }}
                        duration={1}
                      >
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                      </HoverBorderGradient>
                    </div>
                  </motion.div>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};
