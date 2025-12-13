'use client';

import { motion } from 'framer-motion';
import { SOCIAL_LINKS } from '@/constants';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: 'About', href: '#about' },
      { label: 'Services', href: '#services' },
      { label: 'Work', href: '#work' },
      { label: 'Contact', href: '#contact' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' },
    ],
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const sectionId = href.substring(1);
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <footer className="relative w-full bg-black border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{
          paddingTop: 'clamp(2rem, 5vh, 4rem)',
          paddingBottom: 'clamp(2rem, 5vh, 4rem)',
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
          style={{
            gap: 'clamp(2rem, 5vw, 3rem)',
          }}
        >
          {/* Brand Section */}
          <div className="col-span-1 lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 
                className="font-bold text-white"
                style={{
                  fontSize: 'clamp(1.5rem, 4vw, 1.75rem)',
                  marginBottom: 'clamp(0.75rem, 2vh, 1rem)',
                }}
              >
                Dharmik
              </h3>
              <p 
                className="text-neutral-400 leading-relaxed"
                style={{
                  fontSize: 'clamp(0.813rem, 2vw, 0.875rem)',
                  maxWidth: '100%',
                  marginBottom: 'clamp(1rem, 3vh, 1.5rem)',
                }}
              >
                Building MVPs and SaaS products that solve real problems. 
                Let&apos;s bring your vision to life.
              </p>
              {/* Social Links */}
              <div className="flex" style={{ gap: 'clamp(0.75rem, 2vw, 1rem)' }}>
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white hover:border-blue-500/50 transition-all"
                  style={{
                    width: 'clamp(36px, 8vw, 40px)',
                    height: 'clamp(36px, 8vw, 40px)',
                  }}
                  aria-label="LinkedIn"
                >
                  <svg 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                    style={{
                      width: 'clamp(18px, 4vw, 20px)',
                      height: 'clamp(18px, 4vw, 20px)',
                    }}
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href={SOCIAL_LINKS.email}
                  className="rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white hover:border-blue-500/50 transition-all"
                  style={{
                    width: 'clamp(36px, 8vw, 40px)',
                    height: 'clamp(36px, 8vw, 40px)',
                  }}
                  aria-label="Email"
                >
                  <svg 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    style={{
                      width: 'clamp(18px, 4vw, 20px)',
                      height: 'clamp(18px, 4vw, 20px)',
                    }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Company and Legal Links - Same Row on Mobile Only */}
          <div className="flex flex-row md:contents gap-8 md:gap-0 justify-center md:justify-start"
            style={{
              paddingLeft: 'clamp(1rem, 4vw, 0px)',
              paddingRight: 'clamp(1rem, 4vw, 0px)',
            }}
          >
            {/* Company Links */}
            <div className="flex-1 md:flex-none max-w-[50%] md:max-w-none">
              <motion.h4
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-white font-semibold"
                style={{
                  fontSize: 'clamp(0.938rem, 2.5vw, 1.125rem)',
                  marginBottom: 'clamp(0.75rem, 2vh, 1rem)',
                }}
              >
                Company
              </motion.h4>
              <motion.ul
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{
                  gap: 'clamp(0.5rem, 1.5vh, 0.75rem)',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="text-neutral-400 hover:text-white transition-colors"
                      style={{
                        fontSize: 'clamp(0.813rem, 2vw, 0.875rem)',
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </motion.ul>
            </div>

            {/* Legal Links */}
            <div className="flex-1 md:flex-none max-w-[50%] md:max-w-none">
              <motion.h4
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-white font-semibold"
                style={{
                  fontSize: 'clamp(0.938rem, 2.5vw, 1.125rem)',
                  marginBottom: 'clamp(0.75rem, 2vh, 1rem)',
                }}
              >
                Legal
              </motion.h4>
              <motion.ul
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{
                  gap: 'clamp(0.5rem, 1.5vh, 0.75rem)',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-neutral-400 hover:text-white transition-colors"
                      style={{
                        fontSize: 'clamp(0.813rem, 2vw, 0.875rem)',
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </motion.ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-neutral-800"
          style={{
            marginTop: 'clamp(2rem, 5vh, 3rem)',
            paddingTop: 'clamp(1.5rem, 4vh, 2rem)',
          }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center"
            style={{
              gap: 'clamp(0.75rem, 2vh, 1rem)',
            }}
          >
            <p 
              className="text-neutral-500"
              style={{
                fontSize: 'clamp(0.75rem, 1.8vw, 0.875rem)',
              }}
            >
              © {currentYear} Dharmik. All rights reserved.
            </p>
            <p 
              className="text-neutral-500"
              style={{
                fontSize: 'clamp(0.75rem, 1.8vw, 0.875rem)',
              }}
            >
              Built with passion and attention to detail.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
