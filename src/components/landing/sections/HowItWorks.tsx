'use client';

import React from 'react';
import { Section } from '@/components/ui/section';
import { UserPlus, ScrollText, Hammer } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    icon: UserPlus,
    title: "Register & Get Verified",
    description: "Complete our simple KYC process to ensure a secure building community. Create your account in minutes."
  },
  {
    icon: ScrollText,
    title: "Choose Your Plan",
    description: "Browse our catalog of verified building plans and select high-quality materials at cooperative prices."
  },
  {
    icon: Hammer,
    title: "Build Small Small",
    description: "Make flexible payments, track your construction progress, and watch your dream home rise step by step."
  }
];

export function HowItWorks() {
  return (
    <Section className="bg-white" id="how-it-works">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
          How It Works
        </h2>
        <p className="text-lg text-gray-600">
          We've simplified the home building process into three easy steps.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-lg transition-shadow"
          >
            <div className="h-14 w-14 bg-[#10B981]/10 rounded-xl flex items-center justify-center text-[#10B981] mb-6">
              <step.icon className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {step.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

