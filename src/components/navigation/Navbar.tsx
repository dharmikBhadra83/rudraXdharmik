'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { NAV_ITEMS } from '@/constants';
import { PillButton } from '@/components/common/PillButton';

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
      className="fixed left-0 right-0 z-50 transition-all duration-500"
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
          width: isScrolled ? '70%' : '100%',
          marginLeft: isScrolled ? 'auto' : '0',
          marginRight: isScrolled ? 'auto' : '0',
        }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="desktop-nav hidden lg:flex"
        style={{
          height: '72px',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderRadius: isScrolled ? '20px' : '0px',
          border: isScrolled ? '1px solid rgba(50, 50, 50, 0.5)' : 'none',
          borderBottom: !isScrolled ? '1px solid rgba(50, 50, 50, 0.3)' : undefined,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingLeft: '32px',
          paddingRight: '32px',
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

        {/* Navigation Links - Center (flex-1 for centering) */}
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            gap: '4px',
            zIndex: 1,
          }}
        >
          {NAV_ITEMS.map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
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
                paddingLeft: '14px',
                paddingRight: '14px',
                fontSize: '1rem',
                lineHeight: '1.5',
                fontWeight: 500,
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                transition: 'color 0.2s',
                cursor: 'pointer',
                height: '100%',
              }}
            >
              {item}
            </motion.a>
          ))}
        </div>

        {/* Request a demo Button - Right */}
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            flexShrink: 0,
            zIndex: 1,
          }}
        >
          <PillButton href="#contact" variant="secondary">
            Request a demo
          </PillButton>
        </div>
      </motion.div>

      {/* Mobile Navigation */}
      <div className="lg:hidden" style={{ padding: isScrolled ? '0 16px' : '0' }}>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{
            height: '64px',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderRadius: isScrolled ? '20px' : '0px',
            border: isScrolled ? '1px solid rgba(50, 50, 50, 0.5)' : 'none',
            borderBottom: !isScrolled ? '1px solid rgba(50, 50, 50, 0.3)' : undefined,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0 20px',
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
            }}
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
              {NAV_ITEMS.map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
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
              ))}
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
              <PillButton 
                href="#contact" 
                variant="secondary"
                onClick={() => setIsMenuOpen(false)}
                className="w-full"
              >
                Request a demo
              </PillButton>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
