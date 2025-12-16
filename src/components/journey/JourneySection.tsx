'use client';

import { motion } from 'framer-motion';
import { JOURNEY_STEPS } from '@/constants';

export const JourneySection = () => {
  return (
    <section className="py-32 bg-black">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          The <span className="text-blue-500">Journey</span>
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          {JOURNEY_STEPS.map((step, i) => (
            <div key={i} className="p-6 border border-gray-800 rounded-lg">
              <div className="text-4xl text-blue-500/20 font-bold mb-4">{step.step}</div>
              <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};











