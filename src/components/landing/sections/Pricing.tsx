'use client';

import React from 'react';
import { Section } from '@/components/ui/section';
import { Check } from 'lucide-react';

export function Pricing() {
  return (
    <Section className="bg-white" id="pricing">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Transparent Pricing</h2>
        <p className="text-lg text-gray-600 mb-12">
          We charge a small platform fee to keep the service running and secure. No hidden charges.
        </p>
        
        <div className="bg-gray-900 text-white rounded-2xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-64 h-64 bg-[#10B981]/20 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <div className="text-5xl font-bold text-[#10B981] mb-2">2.5%</div>
            <div className="text-xl font-medium mb-8">Platform Fee</div>
            
            <div className="grid md:grid-cols-2 gap-6 text-left max-w-lg mx-auto">
              <div className="flex items-center gap-3">
                <div className="h-6 w-6 rounded-full bg-[#10B981]/20 flex items-center justify-center text-[#10B981]">
                  <Check className="h-3 w-3" />
                </div>
                <span>Transaction processing</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-6 w-6 rounded-full bg-[#10B981]/20 flex items-center justify-center text-[#10B981]">
                  <Check className="h-3 w-3" />
                </div>
                <span>Artisan verification</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-6 w-6 rounded-full bg-[#10B981]/20 flex items-center justify-center text-[#10B981]">
                  <Check className="h-3 w-3" />
                </div>
                <span>Project monitoring</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-6 w-6 rounded-full bg-[#10B981]/20 flex items-center justify-center text-[#10B981]">
                  <Check className="h-3 w-3" />
                </div>
                <span>24/7 Support</span>
              </div>
            </div>

            <div className="mt-10 pt-10 border-t border-gray-800">
              <p className="text-gray-400 text-sm">
                Compared to traditional agents who charge 10-15%
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

