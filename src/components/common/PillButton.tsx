'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import React from 'react';

interface PillButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export const PillButton = ({ 
  children, 
  href, 
  onClick, 
  variant = 'primary',
  className = ''
}: PillButtonProps) => {
  
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    if (href && href.startsWith('#')) {
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
    } else if (onClick) {
      onClick();
    }
  };
  
  const Component = href ? motion.a : motion.button;
  const props = href ? { href, onClick: handleClick } : { onClick: handleClick, type: 'button' as const };

  const variantStyles = {
    primary: {
      backgroundColor: '#ffffff',
      color: '#000000',
      border: 'none',
    },
    secondary: {
      backgroundColor: '#1a1a1a',
      color: '#ffffff',
      border: '1px solid rgba(255, 255, 255, 0.1)',
    }
  };

  return (
    <Component
      {...props}
      className={className}
      whileHover={{ 
        backgroundColor: variant === 'primary' ? 'rgba(255, 255, 255, 0.9)' : '#2a2a2a',
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      style={{
        backgroundColor: variantStyles[variant].backgroundColor,
        color: variantStyles[variant].color,
        border: variantStyles[variant].border,
        borderRadius: '20px',
        padding: '6px 16px',
        fontSize: '15px',
        fontWeight: 500,
        flex: '0 auto',
        display: className?.includes('w-full') ? 'flex' : 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        textDecoration: 'none',
        whiteSpace: 'nowrap',
        transition: 'background-color 0.2s',
        width: className?.includes('w-full') ? '100%' : 'auto',
      }}
    >
      {children}
    </Component>
  );
};

