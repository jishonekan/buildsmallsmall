'use client';

import React from 'react';
import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export function CallToAction() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#10B981]">
      {/* Background Patterns */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
      <div className="absolute top-0 left-0 -translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 translate-y-1/2 translate-x-1/4 w-96 h-96 bg-black/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          Ready to Start Building Your Dream Home?
        </h2>
        <p className="text-xl text-green-50 max-w-2xl mx-auto mb-10">
          Join thousands of Nigerians who are building smarter, faster, and stress-free. Take the first step today.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <Button size="lg" className="bg-white text-[#10B981] hover:bg-gray-50 text-lg h-14 px-8">
            Get Started Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        <div className="flex justify-center gap-8 text-green-100 text-sm font-medium">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5" />
            Secure Platform
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5" />
            Verified Artisans
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5" />
            Licensed Partners
          </div>
        </div>
      </div>
    </section>
  );
}

