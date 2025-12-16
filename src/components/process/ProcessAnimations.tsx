'use client';

import React from 'react';

// SVG Icons
const SearchIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const DocumentIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const UsersIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const LightBulbIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

const PaletteIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
  </svg>
);

const LayersIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
  </svg>
);

const CodeIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const CheckCircleIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const RocketIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const ChartIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const TargetIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

// Upload icon for central button
const UploadIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
  </svg>
);

// Video/Camera icon
const VideoIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
  </svg>
);

// Verify/Scan icon (corner brackets)
const VerifyIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
  </svg>
);

// Credit card/Wallet icon
const CreditCardIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
  </svg>
);

interface ProcessAnimationProps {
  step: 'discovery' | 'design' | 'development' | 'launch';
  index: number;
}

export const ProcessAnimation: React.FC<ProcessAnimationProps> = ({ step, index }) => {
  const colors = {
    discovery: {
      circleColor: 'rgb(59, 130, 246)', // blue-500
      circleGlow: 'rgba(59, 130, 246, 0.5)',
      accent: 'text-blue-400',
      bg: 'bg-blue-600',
      border: 'border-blue-500/30',
      bgLight: 'bg-blue-500/20',
    },
    design: {
      circleColor: 'rgb(168, 85, 247)', // purple-500
      circleGlow: 'rgba(168, 85, 247, 0.5)',
      accent: 'text-purple-400',
      bg: 'bg-purple-600',
      border: 'border-purple-500/30',
      bgLight: 'bg-purple-500/20',
    },
    development: {
      circleColor: 'rgb(6, 182, 212)', // cyan-500
      circleGlow: 'rgba(6, 182, 212, 0.5)',
      accent: 'text-cyan-400',
      bg: 'bg-cyan-600',
      border: 'border-cyan-500/30',
      bgLight: 'bg-cyan-500/20',
    },
    launch: {
      circleColor: 'rgb(99, 102, 241)', // indigo-500
      circleGlow: 'rgba(99, 102, 241, 0.5)',
      accent: 'text-indigo-400',
      bg: 'bg-indigo-600',
      border: 'border-indigo-500/30',
      bgLight: 'bg-indigo-500/20',
    },
  };

  const colorScheme = colors[step];

  // Helper function to render circular border with rotating icons
  const renderCircularFlow = (
    items: Array<{ delay: number; icon: React.ComponentType<{ className?: string }>; label: string }>,
    centerIcon: React.ComponentType<{ className?: string }>
  ) => {
    // Responsive container size - optimized for mobile, tablet, and desktop
    // Mobile: 180px, Tablet: 250px, iPad: 280px, Desktop: 312px-400px
    const containerSize = 'clamp(180px, min(70vw, 70vh, 400px), 400px)';
    // Circle is 90% of container (280px in example, so radius is 140px)
    // For responsive: radius = containerSize * 0.45 (90% / 2)
    const radiusPx = 'calc(' + containerSize + ' * 0.45)';
    // Responsive icon size - smaller on mobile
    const iconSize = 'clamp(20px, 2.5vw, 32px)';
    const iconHalf = 'calc(' + iconSize + ' / 2)';
    
    return (
      <div className="relative w-full h-full flex items-center justify-center overflow-visible">
        {/* Container with fixed aspect ratio - responsive */}
        <div 
          className="relative mx-auto"
          style={{
            width: containerSize,
            height: containerSize,
            maxWidth: '100%',
            maxHeight: '100%',
            minWidth: '180px',
            minHeight: '180px',
          }}
        >
          {/* Pulsing Circle Border */}
          <div
            className={`absolute animate-pulse rounded-full border-2 ${colorScheme.border} ${colorScheme.bgLight}`}
            style={{ 
              width: '90%', 
              height: '90%',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />

          {/* Circular Border Line - SVG Circle - More visible */}
          <svg 
            className="absolute"
            style={{
              width: '100%',
              height: '100%',
              left: 0,
              top: 0,
              overflow: 'visible',
            }}
          >
            <circle
              cx="50%"
              cy="50%"
              r={radiusPx}
              fill="none"
              stroke={colorScheme.circleColor}
              strokeWidth="2.5"
              opacity="0.8"
              style={{
                filter: `drop-shadow(0 0 10px ${colorScheme.circleGlow})`,
              }}
            />
          </svg>

          {/* Rotating Icons on the Circle - positioned exactly on the border */}
          {items.map((item, i) => {
            const ItemIcon = item.icon;
            
            return (
              <div
                key={i}
                className="absolute flex items-center justify-center"
                style={{
                  animationName: 'spin',
                  animationDuration: '40s',
                  animationTimingFunction: 'linear',
                  animationIterationCount: 'infinite',
                  animationDelay: `${item.delay}s`,
                  transformOrigin: `calc(50% + ${radiusPx}) 50%`,
                  left: `calc(50% - ${radiusPx} - ${iconHalf})`,
                  top: `calc(50% - ${iconHalf})`,
                  width: iconSize,
                  height: iconSize,
                }}
              >
                <div
                  className="flex h-full w-full items-center justify-center"
                  style={{
                    animationName: 'spin',
                    animationDuration: '40s',
                    animationTimingFunction: 'linear',
                    animationIterationCount: 'infinite',
                    animationDelay: `${item.delay}s`,
                    animationDirection: 'reverse',
                  }}
                >
                  <div className="relative flex items-center justify-center">
                    {/* Small dot on the circle line - positioned at center (on the circle) */}
                    <div 
                      className="absolute rounded-full"
                      style={{
                        width: 'clamp(4px, 1vw, 6px)',
                        height: 'clamp(4px, 1vw, 6px)',
                        backgroundColor: colorScheme.circleColor,
                        boxShadow: `0 0 6px ${colorScheme.circleGlow}`,
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                        zIndex: 20,
                      }}
                    />
                    
                    {/* Icon */}
                    <div className="z-10 text-white relative" style={{ width: 'clamp(14px, 2.5vw, 20px)', height: 'clamp(14px, 2.5vw, 20px)' }}>
                      <ItemIcon className="w-full h-full" />
                    </div>
                    
                    {/* Background circle for icon - responsive */}
                    <div 
                      className="absolute rounded-full bg-white/50 ring-1 shadow-lg ring-black/5" 
                      style={{ 
                        width: 'clamp(28px, 5vw, 40px)', 
                        height: 'clamp(28px, 5vw, 40px)',
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                      }} 
                    />
                    
                    {/* Label - responsive and visible on all devices */}
                    <div className="absolute -top-3 sm:-top-4 md:-top-5 left-2 sm:left-3 md:left-4">
                      <div className="flex gap-0.5 sm:gap-1">
                        <div className={`flex items-center justify-center rounded-l-full ${colorScheme.bg} p-0.5 sm:p-1 text-[9px] sm:text-[10px] md:text-xs ring-1 ring-gray-200`}>
                          <div className="size-1.5 sm:size-2 md:size-3 shrink-0 bg-white rounded-full" />
                        </div>
                        <div className="rounded-r-full bg-white/50 py-0.5 pr-1 sm:pr-1.5 pl-0.5 sm:pl-1 text-[9px] sm:text-[10px] md:text-xs whitespace-nowrap ring-1 ring-gray-200 text-gray-900">
                          {item.label}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Central Icon Button - responsive */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              {/* Outer glow ring */}
              <div
                className="absolute rounded-full opacity-30 blur-xl"
                style={{
                  backgroundColor: colorScheme.circleColor,
                  width: 'clamp(52px, 13vw, 88px)',
                  height: 'clamp(52px, 13vw, 88px)',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              />
              
              {/* Main button - responsive */}
              <div
                className="relative rounded-full flex items-center justify-center"
                style={{
                  width: 'clamp(48px, 12vw, 80px)',
                  height: 'clamp(48px, 12vw, 80px)',
                  background: `linear-gradient(135deg, ${colorScheme.circleColor} 0%, ${colorScheme.circleColor}dd 100%)`,
                  border: `2px solid ${colorScheme.circleColor}`,
                  boxShadow: `
                    0 0 20px ${colorScheme.circleGlow},
                    inset 0 0 20px rgba(255, 255, 255, 0.1)
                  `,
                }}
              >
                {/* Inner ring */}
                <div
                  className="absolute rounded-full border-2 border-white/30"
                  style={{
                    width: 'calc(100% - 8px)',
                    height: 'calc(100% - 8px)',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                />
                
                {/* Icon - responsive */}
                <div 
                  className="relative z-10 flex items-center justify-center"
                  style={{ 
                    filter: 'drop-shadow(0 0 4px rgba(255, 255, 255, 0.5))',
                    width: 'clamp(18px, 4.5vw, 32px)',
                    height: 'clamp(18px, 4.5vw, 32px)',
                  }}
                >
                  {React.createElement(centerIcon, { 
                    className: `text-white w-full h-full`
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Discovery & Planning Animation
  if (step === 'discovery') {
    return (
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden pointer-events-none select-none">
        {/* Diagonal Pattern Background */}
        <svg className="absolute size-full opacity-20" style={{ maskImage: 'linear-gradient(transparent, white 10rem, white calc(100% - 10rem), transparent)' }}>
          <defs>
            <pattern
              id={`diagonal-pattern-discovery-${index}`}
              patternUnits="userSpaceOnUse"
              width="64"
              height="64"
            >
              {Array.from({ length: 17 }, (_, i) => (
                <path
                  key={i}
                  d={`M-${106 - i * 8} 110L${22 + i * 8} -18`}
                  className="stroke-blue-400/30"
                  strokeWidth="1"
                />
              ))}
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#diagonal-pattern-discovery-${index})`} />
        </svg>

        {/* Animated Diagram Container */}
        <div className="relative z-10 flex items-center justify-center" style={{ 
          width: 'clamp(200px, min(50vw, 50vh), 400px)', 
          height: 'clamp(200px, min(50vw, 50vh), 400px)',
          maxWidth: '100%',
          maxHeight: '100%',
        }}>
          {renderCircularFlow(
            [
              { delay: 0, icon: SearchIcon, label: 'Research' },
              { delay: -10, icon: DocumentIcon, label: 'Planning' },
              { delay: -20, icon: UsersIcon, label: 'Workshop' },
              { delay: -30, icon: LightBulbIcon, label: 'Strategy' },
            ],
            SearchIcon
          )}
        </div>
      </div>
    );
  }

  // Design & Prototyping Animation
  if (step === 'design') {
    return (
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden pointer-events-none select-none">
        {/* Grid Background */}
        <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none">
          <defs>
            <pattern id={`grid-pattern-design-${index}`} width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="currentColor" strokeWidth="1" className="stroke-purple-400/30" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#grid-pattern-design-${index})`} />
        </svg>

        <div className="relative z-10 flex items-center justify-center" style={{ 
          width: 'clamp(200px, min(50vw, 50vh), 400px)', 
          height: 'clamp(200px, min(50vw, 50vh), 400px)',
          maxWidth: '100%',
          maxHeight: '100%',
        }}>
          {renderCircularFlow(
            [
              { delay: 0, icon: PaletteIcon, label: 'Design' },
              { delay: -10, icon: LayersIcon, label: 'Prototype' },
              { delay: -20, icon: DocumentIcon, label: 'Wireframe' },
              { delay: -30, icon: CheckCircleIcon, label: 'Validate' },
            ],
            PaletteIcon
          )}
        </div>
      </div>
    );
  }

  // Development & Testing Animation
  if (step === 'development') {
    return (
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden pointer-events-none select-none">
        {/* Scan Circle Effect */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          {[1, 1.2, 1.4].map((scale, i) => {
            const size = `calc(clamp(200px, min(50vw, 50vh), 400px) * ${scale * 0.7})`;
            return (
              <circle
                key={i}
                cx="50%"
                cy="50%"
                r={`calc(${size} / 2)`}
                fill="none"
                stroke={colorScheme.circleColor}
                strokeWidth="2"
                opacity="0.3"
                style={{
                  animation: 'pulse 2s ease-in-out infinite',
                  animationDelay: `${i * 0.3}s`,
                }}
              />
            );
          })}
        </svg>

        <div className="relative z-10 flex items-center justify-center" style={{ 
          width: 'clamp(200px, min(50vw, 50vh), 400px)', 
          height: 'clamp(200px, min(50vw, 50vh), 400px)',
          maxWidth: '100%',
          maxHeight: '100%',
        }}>
          {renderCircularFlow(
            [
              { delay: 0, icon: CodeIcon, label: 'Build' },
              { delay: -10, icon: CheckCircleIcon, label: 'Test' },
              { delay: -20, icon: TargetIcon, label: 'Quality' },
              { delay: -30, icon: ChartIcon, label: 'Performance' },
            ],
            CodeIcon
          )}
        </div>
      </div>
    );
  }

  // Launch & Optimization Animation
  if (step === 'launch') {
    return (
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden pointer-events-none select-none">
        {/* Starfield background effect */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          {Array.from({ length: 20 }, (_, i) => (
            <circle
              key={i}
              cx={`${(i * 37) % 100}%`}
              cy={`${(i * 23) % 100}%`}
              r="1.5"
              fill={colorScheme.circleColor}
              style={{
                animation: `fadeInScale 2s ease-in-out infinite`,
                animationDelay: `${i * 0.1}s`,
              }}
            />
          ))}
        </svg>

        <div className="relative z-10 flex items-center justify-center" style={{ 
          width: 'clamp(200px, min(50vw, 50vh), 400px)', 
          height: 'clamp(200px, min(50vw, 50vh), 400px)',
          maxWidth: '100%',
          maxHeight: '100%',
        }}>
          {renderCircularFlow(
            [
              { delay: 0, icon: RocketIcon, label: 'Launch' },
              { delay: -10, icon: ChartIcon, label: 'Monitor' },
              { delay: -20, icon: TargetIcon, label: 'Optimize' },
              { delay: -30, icon: CheckCircleIcon, label: 'Success' },
            ],
            RocketIcon
          )}
        </div>
      </div>
    );
  }

  return null;
};
