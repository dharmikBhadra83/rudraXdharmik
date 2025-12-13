import { ReactNode } from 'react';

interface SectionLayoutProps {
  children: ReactNode;
  className?: string;
  maxWidth?: 'narrow' | 'wide' | 'full';
}

export const SectionLayout = ({ 
  children, 
  className = '',
  maxWidth = 'wide'
}: SectionLayoutProps) => {
  const maxWidthClass = {
    narrow: 'max-w-5xl',
    wide: 'max-w-7xl',
    full: 'max-w-full'
  }[maxWidth];

  return (
    <div className={`w-full mx-auto px-4 sm:px-6 lg:px-8 ${maxWidthClass} ${className}`}>
      {children}
    </div>
  );
};

