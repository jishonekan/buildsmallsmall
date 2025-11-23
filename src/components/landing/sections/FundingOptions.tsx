'use client';

import React from 'react';
import { Section } from '@/components/ui/section';
import { CreditCard, Landmark, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function FundingOptions() {
  return (
    <Section className="bg-gray-50" id="funding">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
          Flexible Funding Options
        </h2>
        <p className="text-lg text-gray-600">
          Choose the payment method that suits your income flow.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Card Payment */}
        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="h-12 w-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6">
            <CreditCard className="h-6 w-6" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Card Payment</h3>
          <p className="text-gray-600 mb-8">
            Perfect for business owners and private sector employees. Pay as you build with your debit card.
          </p>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-3 text-gray-600">
              <Check className="h-5 w-5 text-[#10B981]" />
              Flexible payment schedules
            </li>
            <li className="flex items-center gap-3 text-gray-600">
              <Check className="h-5 w-5 text-[#10B981]" />
              Secure payment gateway
            </li>
            <li className="flex items-center gap-3 text-gray-600">
              <Check className="h-5 w-5 text-[#10B981]" />
              Pay for milestones only
            </li>
          </ul>
          <Button className="w-full" variant="outline">Select Card Payment</Button>
        </div>

        {/* Salary Deduction */}
        <div className="bg-white p-8 rounded-2xl border-2 border-[#10B981]/20 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-[#10B981] text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
            POPULAR
          </div>
          <div className="h-12 w-12 bg-green-50 rounded-xl flex items-center justify-center text-[#10B981] mb-6">
            <Landmark className="h-6 w-6" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Salary Deduction</h3>
          <p className="text-gray-600 mb-8">
            Designed for Civil Servants. Automate your building savings directly from your salary source.
          </p>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-3 text-gray-600">
              <Check className="h-5 w-5 text-[#10B981]" />
              Direct source deduction
            </li>
            <li className="flex items-center gap-3 text-gray-600">
              <Check className="h-5 w-5 text-[#10B981]" />
              Government partnership verified
            </li>
            <li className="flex items-center gap-3 text-gray-600">
              <Check className="h-5 w-5 text-[#10B981]" />
              Pre-approved funding limits
            </li>
          </ul>
          <Button className="w-full">Select Salary Deduction</Button>
        </div>
      </div>
    </Section>
  );
}

