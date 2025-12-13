'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { NAV_ITEMS } from '@/constants';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className="fixed left-0 right-0 z-50 transition-all duration-500 w-full"
      style={{
        top: isScrolled ? '12px' : '0',
        paddingLeft: isScrolled ? '16px' : '0',
        paddingRight: isScrolled ? '16px' : '0',
      }}
    >
      {/* Desktop Navigation */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
          y: 0, 
          opacity: 1,
        }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`hidden lg:flex ${isScrolled ? 'max-w-7xl mx-auto' : 'w-full'}`}
        style={{
          height: '72px',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderRadius: isScrolled ? '20px' : '0px',
          border: isScrolled ? '1px solid rgba(50, 50, 50, 0.5)' : 'none',
          borderBottom: !isScrolled ? '1px solid rgba(50, 50, 50, 0.3)' : undefined,
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingLeft: isScrolled ? 'clamp(1rem, 4vw, 2rem)' : 'clamp(1.5rem, 4vw, 2rem)',
          paddingRight: isScrolled ? 'clamp(1rem, 4vw, 2rem)' : 'clamp(1.5rem, 4vw, 2rem)',
          position: 'relative',
          overflow: 'visible',
          fontFamily: 'Suisseintl, -apple-system, BlinkMacSystemFont, sans-serif',
        }}
      >
        {/* Logo - Left */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center',
          flexShrink: 0,
          zIndex: 1,
        }}>
          <motion.a
            href="#"
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              src="/main_cropped_whiteR.svg"
              alt="Dharmik Logo"
              width={50}
              height={50}
              priority
              style={{
                objectFit: 'contain',
                    filter: "brightness(0) invert(1)"
              }}
            />
          </motion.a>
        </div>

        {/* Navigation Links - Center (absolutely centered) */}
        <div 
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'clamp(2px, 0.5vw, 4px)',
            zIndex: 1,
            maxWidth: 'calc(100% - 280px)',
            flexWrap: 'nowrap',
          }}
        >
          {NAV_ITEMS.map((item, index) => {
            const sectionId = item.toLowerCase() === 'process' ? 'process' : item.toLowerCase();
            const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
              e.preventDefault();
              const element = document.getElementById(sectionId);
              if (element) {
                const offset = 80; // Account for fixed navbar
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;
                window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth'
                });
              }
            };
            
            return (
              <motion.a
                key={item}
                href={`#${sectionId}`}
                onClick={handleClick}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                onMouseEnter={() => setHoveredItem(item)}
                onMouseLeave={() => setHoveredItem(null)}
                style={{
                  color: hoveredItem === item ? '#ffffff' : '#cccccc',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingLeft: 'clamp(8px, 1.5vw, 14px)',
                  paddingRight: 'clamp(8px, 1.5vw, 14px)',
                  fontSize: 'clamp(0.875rem, 1.2vw, 1rem)',
                  lineHeight: '1.5',
                  fontWeight: 500,
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                  transition: 'color 0.2s',
                  cursor: 'pointer',
                  height: '100%',
                  flexShrink: 0,
                }}
              >
                {item}
              </motion.a>
            );
          })}
        </div>

        {/* Request a demo Button - Right */}
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            flexShrink: 0,
            zIndex: 1,
            minWidth: 'fit-content',
          }}
        >
          <HoverBorderGradient
            as="a"
            href="#contact"
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
              e.preventDefault();
              const element = document.getElementById('contact');
              if (element) {
                const offset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;
                window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth'
                });
              }
            }}
            containerClassName="rounded-full"
            className="bg-black text-white px-4 xl:px-6 py-2.5 text-xs xl:text-sm font-semibold whitespace-nowrap"
            duration={1}
          >
            Request a demo
          </HoverBorderGradient>
        </div>
      </motion.div>

      {/* Mobile Navigation - Hidden on desktop (lg and above) */}
      <div 
        className="lg:hidden w-full max-w-7xl mx-auto px-4 sm:px-6 block" 
        style={{ 
          paddingTop: isScrolled ? '12px' : '0', 
          paddingBottom: isScrolled ? '12px' : '0',
        }}
      >
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex"
          style={{
            height: 'clamp(56px, 8vw, 64px)',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderRadius: isScrolled ? '20px' : '0px',
            border: isScrolled ? '1px solid rgba(50, 50, 50, 0.5)' : 'none',
            borderBottom: !isScrolled ? '1px solid rgba(50, 50, 50, 0.3)' : undefined,
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingLeft: 'clamp(1rem, 4vw, 1.25rem)',
            paddingRight: 'clamp(1rem, 4vw, 1.25rem)',
          }}
        >
          {/* Logo */}
          <motion.a
            href="#"
            style={{
              display: 'flex',
              alignItems: 'center',
              zIndex: 1,
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              src="/main_cropped_whiteR.svg"
              alt="Dharmik Logo"
              width={40}
              height={40}
              priority
              style={{
                objectFit: 'contain',
                filter: "brightness(0) invert(1)",
                width: 'clamp(36px, 6vw, 40px)',
                height: 'clamp(36px, 6vw, 40px)',
              }}
            />
          </motion.a>

          {/* Menu Button */}
          <motion.button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.9 }}
            style={{
              background: 'none',
              border: 'none',
              color: '#ffffff',
              padding: '8px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: '40px',
              minHeight: '40px',
            }}
            aria-label="Toggle menu"
          >
            <motion.svg 
              width="24"
              height="24"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              animate={{ rotate: isMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </motion.svg>
          </motion.button>
        </motion.div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isMenuOpen ? 'auto' : 0,
            opacity: isMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          style={{
            overflow: 'hidden',
            marginTop: '8px',
          }}
        >
          <div 
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              borderRadius: '20px',
              border: '1px solid rgba(50, 50, 50, 0.5)',
              padding: '24px',
            }}
          >
            {/* Mobile Nav Links */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
              {NAV_ITEMS.map((item, index) => {
                const sectionId = item.toLowerCase() === 'process' ? 'process' : item.toLowerCase();
                const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
                  e.preventDefault();
                  setIsMenuOpen(false);
                  setTimeout(() => {
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
                  }, 100);
                };
                
                return (
                  <motion.a
                    key={item}
                    href={`#${sectionId}`}
                    onClick={handleClick}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ 
                      opacity: isMenuOpen ? 1 : 0, 
                      x: isMenuOpen ? 0 : -20 
                    }}
                    transition={{ delay: index * 0.08, duration: 0.3 }}
                    style={{
                      color: '#cccccc',
                      fontSize: '1rem',
                      fontWeight: 500,
                      textDecoration: 'none',
                      padding: '12px 16px',
                      borderRadius: '12px',
                      transition: 'all 0.2s',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#ffffff';
                      e.currentTarget.style.backgroundColor = 'rgba(100, 100, 100, 0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#cccccc';
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }}
                  >
                    <span style={{
                      marginRight: '8px',
                      fontSize: '16px',
                      fontWeight: 'bold',
                      backgroundImage: 'linear-gradient(135deg, #60a5fa 0%, #8b5cf6 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}>
                      →
                    </span>
                    {item}
                  </motion.a>
                );
              })}
            </div>
            
            {/* Mobile Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ 
                opacity: isMenuOpen ? 1 : 0, 
                y: isMenuOpen ? 0 : 10 
              }}
              transition={{ delay: NAV_ITEMS.length * 0.08, duration: 0.3 }}
            >
              <HoverBorderGradient
                as="a"
                href="#contact"
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  e.preventDefault();
                  setIsMenuOpen(false);
                  setTimeout(() => {
                    const element = document.getElementById('contact');
                    if (element) {
                      const offset = 80;
                      const elementPosition = element.getBoundingClientRect().top;
                      const offsetPosition = elementPosition + window.pageYOffset - offset;
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                      });
                    }
                  }, 100);
                }}
                containerClassName="rounded-full w-full"
                className="bg-black text-white px-4 sm:px-6 py-2.5 text-xs sm:text-sm font-semibold w-full flex items-center justify-center"
                duration={1}
              >
                Request a demo
              </HoverBorderGradient>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
