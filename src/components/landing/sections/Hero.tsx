'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Play, ArrowRight, CheckCircle2 } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative bg-gray-50 pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[600px] h-[600px] bg-[#10B981]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-1/3 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl" />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10B981]/10 text-[#10B981] text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]"></span>
              </span>
              Join 10,000+ Nigerian homeowners
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
              Build Your Dream Home{' '}
              <span className="text-[#10B981]">Small Small</span>
              <br />
              <span className="text-2xl lg:text-4xl font-medium text-gray-500 mt-2 block">
                No Rush, No Stress.
              </span>
            </h1>

            <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
              The smart way to build in Nigeria. Connect with verified artisans, buy materials at cooperative prices, and finance your project incrementally.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gap-2 text-base h-14 px-8">
                Start Building Today
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2 text-base h-14 px-8">
                <Play className="h-4 w-4 fill-current" />
                Watch How It Works
              </Button>
            </div>

            <div className="pt-8 border-t border-gray-200 flex flex-col sm:flex-row gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-[#10B981]" />
                <span>Verified Artisans</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-[#10B981]" />
                <span>Material Discounts</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-[#10B981]" />
                <span>Secure Payments</span>
              </div>
            </div>
          </div>

          {/* Image/Video Placeholder */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] lg:aspect-square bg-gray-200">
            {/* 
              Using a placeholder image service since I cannot access local files 
              that aren't in the repo yet.
            */}
            <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/20 to-transparent z-10" />
            <Image
              src="https://images.unsplash.com/photo-1593604340846-4f7e60c36785?q=80&w=1000&auto=format&fit=crop" 
              alt="Nigerian family in front of new home"
              fill
              className="object-cover"
              priority
            />
            
            {/* Float Card */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur p-4 rounded-xl shadow-lg z-20 border border-gray-100">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center text-[#10B981] font-bold">
                  95%
                </div>
                <div>
                  <p className="font-bold text-gray-900">Project Completion</p>
                  <p className="text-sm text-gray-500">Mr. Adebayo's Duplex</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

