'use client';

import React, { useState, forwardRef } from 'react';
import { motion } from 'framer-motion';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Custom input component for PhoneInput to ensure id and name attributes
const CustomPhoneInput = forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  (props, ref) => {
    return (
      <input
        ref={ref}
        {...props}
        id="phone"
        name="phone"
        autoComplete="tel"
        style={{ 
          backgroundColor: '#262626', 
          color: '#ffffff',
          background: '#262626',
          backgroundImage: 'none'
        }}
        onFocus={(e) => {
          e.target.style.backgroundColor = '#262626';
          e.target.style.background = '#262626';
          e.target.style.backgroundImage = 'none';
          e.target.style.color = '#ffffff';
        }}
        onBlur={(e) => {
          e.target.style.backgroundColor = '#262626';
          e.target.style.background = '#262626';
          e.target.style.color = '#ffffff';
        }}
      />
    );
  }
);

CustomPhoneInput.displayName = 'CustomPhoneInput';

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

  const handlePhoneChange = (value: string | undefined) => {
    setFormData(prev => ({ ...prev, phone: value || '' }));
    if (errors.phone) {
      setErrors(prev => ({ ...prev, phone: undefined }));
    }
  };

  const handlePhoneBlur = () => {
    if (formData.phone) {
      validateField('phone', formData.phone);
    }
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
        } else if (typeof value === 'string' && !isValidPhoneNumber(value)) {
          newErrors.phone = 'Please enter a valid phone number';
        } else {
          delete newErrors.phone;
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

    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!isValidPhoneNumber(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
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
            if (field === 'phone') {
              element = document.querySelector('.PhoneInputInput') as HTMLElement;
            } else if (field === 'agreeToTerms') {
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

  const features = [
    'Reliable Delivery',
    'Comprehensive Token & Digest',
    'Customizable Notifications',
    'Real-Time Updates',
    'Seamless Integration',
  ];

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
        className="relative w-full min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, #000000 0%, #0a0a0a 50%, #000000 100%)',
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
        <div className="relative z-10 w-full max-w-7xl mx-auto">
          {/* Badge */}
          <motion.div
            variants={badgeVariants}
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
              <span className="relative text-sm font-semibold text-blue-400 uppercase tracking-wider">Contact Us</span>
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

            <div className="relative grid grid-cols-1 lg:grid-cols-[40%_60%] min-h-[600px]">
              {/* Left Column - Contact Information */}
              <div className="p-8 lg:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-neutral-800 relative z-10">
                <motion.div variants={itemVariants} className="w-full pr-4">
                  <h2 className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-bold text-white mb-4" style={{ lineHeight: '1.2', wordSpacing: 'normal' }}>
                    Get in Touch with Us
                  </h2>
                  <p className="text-neutral-400 text-base leading-relaxed mb-8">
                    We&apos;re here to help. Whether you&apos;re interested in learning more about our services or need support, we&apos;re happy to assist you.
                  </p>

                  {/* Feature List */}
                  <div className="space-y-4 mb-8">
                    {features.map((feature, index) => (
                      <motion.div
                        key={feature}
                        variants={itemVariants}
                        className="flex items-center gap-3"
                      >
                        <div
                          className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{
                            background: 'rgba(59, 130, 246, 0.2)',
                            border: '1px solid rgba(59, 130, 246, 0.4)',
                          }}
                        >
                          <svg
                            className="w-3 h-3 text-blue-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-neutral-300 text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Contact Details */}
                <motion.div variants={itemVariants} className="mt-auto">
                  <h3 className="text-neutral-200 font-semibold mb-4">General Contact Info</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-neutral-400">Phone: </span>
                      <span className="text-neutral-300">+1-415-555-0199</span>
                    </div>
                    <div>
                      <span className="text-neutral-400">Email: </span>
                      <span className="text-neutral-300">contact@innovatech.com</span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Right Column - Contact Form */}
              <div className="p-8 lg:p-12 relative">
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  {/* First Name and Last Name Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <motion.div variants={itemVariants} className="space-y-2">
                      <label htmlFor="firstName" className="block text-sm text-neutral-300">
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
                        style={{ backgroundColor: '#262626', color: '#ffffff', background: '#262626' }}
                        className={`w-full px-4 py-3 rounded-lg bg-neutral-800 border-2 text-white placeholder-neutral-500 focus:outline-none focus:ring-1 transition-all ${
                          errors.firstName 
                            ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
                            : 'border-neutral-700 focus:border-blue-500/50 focus:ring-blue-500/20'
                        }`}
                        required
                      />
                      {errors.firstName && (
                        <p className="text-red-400 text-xs mt-1">{errors.firstName}</p>
                      )}
                    </motion.div>
                    <motion.div variants={itemVariants} className="space-y-2">
                      <label htmlFor="lastName" className="block text-sm text-neutral-300">
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
                        style={{ backgroundColor: '#262626', color: '#ffffff', background: '#262626' }}
                        className={`w-full px-4 py-3 rounded-lg bg-neutral-800 border-2 text-white placeholder-neutral-500 focus:outline-none focus:ring-1 transition-all ${
                          errors.lastName 
                            ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
                            : 'border-neutral-700 focus:border-blue-500/50 focus:ring-blue-500/20'
                        }`}
                        required
                      />
                      {errors.lastName && (
                        <p className="text-red-400 text-xs mt-1">{errors.lastName}</p>
                      )}
                    </motion.div>
                  </div>

                  {/* Email Address */}
                  <motion.div variants={itemVariants} className="space-y-2">
                    <label htmlFor="email" className="block text-sm text-neutral-300">
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
                      style={{ backgroundColor: '#262626', color: '#ffffff', background: '#262626' }}
                      className={`w-full px-4 py-3 rounded-lg bg-neutral-800 border-2 text-white placeholder-neutral-500 focus:outline-none focus:ring-1 transition-all ${
                        errors.email 
                          ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
                          : 'border-neutral-700 focus:border-blue-500/50 focus:ring-blue-500/20'
                      }`}
                      required
                    />
                    {errors.email && (
                      <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                    )}
                  </motion.div>

                  {/* Phone Number with Country Selector */}
                  <motion.div variants={itemVariants} className="space-y-2">
                    <label htmlFor="phone" className="block text-sm text-neutral-300">
                      Phone Number
                    </label>
                    <div className={`phone-input-wrapper ${errors.phone ? 'error' : ''}`}>
                      <PhoneInput
                        international
                        defaultCountry="US"
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        onBlur={handlePhoneBlur}
                        placeholder="Enter phone number"
                        inputComponent={CustomPhoneInput}
                        className={`w-full px-4 py-3 rounded-lg bg-neutral-700 border-2 text-neutral-300 placeholder-neutral-500 focus:outline-none focus:ring-1 transition-all ${
                          errors.phone 
                            ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
                            : 'border-neutral-600 focus:border-blue-500/50 focus:ring-blue-500/20'
                        }`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-red-400 text-xs mt-1">{errors.phone}</p>
                    )}
                  </motion.div>

                  {/* Tell Us About Your Ideas and Needs */}
                  <motion.div variants={itemVariants} className="space-y-2">
                    <label htmlFor="ideas" className="block text-sm text-neutral-300">
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
                      style={{ backgroundColor: '#262626', color: '#ffffff', background: '#262626' }}
                      className={`w-full px-4 py-3 rounded-lg bg-neutral-800 border-2 text-white placeholder-neutral-500 focus:outline-none focus:ring-1 transition-all resize-none ${
                        errors.ideas 
                          ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
                          : 'border-neutral-700 focus:border-blue-500/50 focus:ring-blue-500/20'
                      }`}
                      required
                    />
                    {errors.ideas && (
                      <p className="text-red-400 text-xs mt-1">{errors.ideas}</p>
                    )}
                  </motion.div>

                  {/* Checkbox and Submit Button Row */}
                  <motion.div
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4"
                  >
                    <div className="flex flex-col">
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <div className="relative flex-shrink-0">
                          <input
                            type="checkbox"
                            name="agreeToTerms"
                            checked={formData.agreeToTerms}
                            onChange={handleCheckboxChange}
                            className="peer sr-only"
                            required
                          />
                          <div
                            className={`w-5 h-5 rounded border-2 bg-neutral-800 transition-all duration-200 peer-checked:bg-blue-600 peer-checked:border-blue-600 peer-focus:ring-2 peer-focus:ring-blue-500/50 peer-focus:ring-offset-2 peer-focus:ring-offset-neutral-900 cursor-pointer flex items-center justify-center ${
                              errors.agreeToTerms ? 'border-red-500/50' : 'border-neutral-700'
                            }`}
                          >
                            {formData.agreeToTerms && (
                              <svg
                                className="w-3.5 h-3.5 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
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
                        <span className="text-sm text-neutral-400 group-hover:text-neutral-300 transition-colors leading-tight">
                          I agree to Fireside{' '}
                          <a href="#" className="font-semibold text-white hover:text-blue-400 transition-colors">
                            Terms of Use
                          </a>{' '}
                          and{' '}
                          <a href="#" className="font-semibold text-white hover:text-blue-400 transition-colors">
                            Privacy Policy
                          </a>{' '}
                          <span className="text-blue-500">*</span>
                        </span>
                      </label>
                      {errors.agreeToTerms && (
                        <p className="text-red-400 text-xs mt-1 ml-8">{errors.agreeToTerms}</p>
                      )}
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 disabled:cursor-not-allowed text-white font-semibold transition-all duration-200 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30"
                      whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit'}
                    </motion.button>
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
