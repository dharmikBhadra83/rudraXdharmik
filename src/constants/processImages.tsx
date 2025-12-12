import React from 'react';

// Helper function to create process step images
export const createProcessStepImage = (type: 'discovery' | 'design' | 'development' | 'launch') => {
  const imageConfigs = {
    discovery: {
      gradient: 'from-blue-500/20 to-blue-600/10',
      color: 'text-blue-400/50',
      svgPath: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
    },
    design: {
      gradient: 'from-purple-500/20 to-purple-600/10',
      color: 'text-purple-400/50',
      svgPath: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01'
    },
    development: {
      gradient: 'from-cyan-500/20 to-cyan-600/10',
      color: 'text-cyan-400/50',
      svgPath: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
    },
    launch: {
      gradient: 'from-indigo-500/20 to-indigo-600/10',
      color: 'text-indigo-400/50',
      svgPath: 'M13 10V3L4 14h7v7l9-11h-7z'
    }
  };

  const config = imageConfigs[type];

  return (
    <div className={`w-full h-full rounded-2xl bg-gradient-to-br ${config.gradient} border border-gray-800/50 flex items-center justify-center`}>
      <svg className={`w-48 h-48 ${config.color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={config.svgPath} />
      </svg>
    </div>
  );
};

