'use client';

import React from 'react';
import { Section } from '@/components/ui/section';
import { Building2 } from 'lucide-react';

const partners = [
  "FirstBank", "Dangote Cement", "Lagos State Gov", "Paystack", "Flutterwave", "Julius Berger"
];

export function Partners() {
  return (
    <Section className="bg-white py-12 border-t border-gray-100">
      <div className="text-center mb-10">
        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
          Trusted by Industry Leaders
        </p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
        {partners.map((partner, index) => (
          <div key={index} className="flex items-center gap-2 text-xl font-bold text-gray-400 hover:text-[#10B981] transition-colors cursor-pointer">
            <Building2 className="h-6 w-6" />
            {partner}
          </div>
        ))}
      </div>
    </Section>
  );
}

