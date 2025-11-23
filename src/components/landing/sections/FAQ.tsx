'use client';

import React, { useState } from 'react';
import { Section } from '@/components/ui/section';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "How does payment work?",
    answer: "We offer two main payment methods: Card Payment for flexible, milestone-based payments, and Salary Deduction for civil servants. All payments go into your secure project wallet."
  },
  {
    question: "Is my information secure?",
    answer: "Yes, we use bank-grade encryption for all data. We are NDPR compliant and partner with licensed payment processors like Paystack and Flutterwave."
  },
  {
    question: "Can I change my building plan?",
    answer: "Yes, you can switch plans before construction begins. If construction has started, our engineers will assess if modifications are possible."
  },
  {
    question: "What happens if I miss a payment?",
    answer: "We understand that life happens. There are no penalties for missed payments, but construction on your project will be paused until funding resumes."
  },
  {
    question: "How do I join a cooperative?",
    answer: "After signing up, you can browse active cooperative groups in your location and request to join. You can also start your own group."
  },
  {
    question: "What documents do I need for KYC?",
    answer: "You'll need a valid government ID (NIN, Driver's License, or International Passport), a recent utility bill, and a passport photograph."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section className="bg-gray-50" id="faq">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-gray-600">
          Everything you need to know about building with us.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="bg-white rounded-xl border border-gray-100 overflow-hidden transition-colors hover:border-gray-200"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-6 text-left"
            >
              <span className="font-bold text-gray-900">{faq.question}</span>
              <span className="text-[#10B981]">
                {openIndex === index ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
              </span>
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </Section>
  );
}

