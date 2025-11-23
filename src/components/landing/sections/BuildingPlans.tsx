'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import { BedDouble, Bath, Ruler, ChevronLeft, ChevronRight } from 'lucide-react';
import { storage, Plan } from '@/lib/storage';

export function BuildingPlans() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [plans, setPlans] = useState<Plan[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setPlans(storage.getPlans());
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -400 : 400;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  if (!mounted) return null;

  return (
    <Section className="bg-gray-50" id="building-plans">
      <div className="flex items-center justify-between mb-12">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-2">
            Popular Building Plans
          </h2>
          <p className="text-lg text-gray-600">
            Choose from our verified, architect-approved designs.
          </p>
        </div>
        <div className="hidden md:flex gap-2">
          <Button variant="outline" size="icon" onClick={() => scroll('left')}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={() => scroll('right')}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {plans.map((plan) => (
          <div 
            key={plan.id}
            className="min-w-[85vw] md:min-w-[350px] lg:min-w-[400px] bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow snap-center border border-gray-100 flex-shrink-0"
          >
            <div className="relative h-64 w-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={plan.image}
                alt={plan.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 pt-12">
                <span className="text-white font-medium px-3 py-1 rounded-full bg-[#10B981] text-xs">
                  {plan.type}
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                <p className="text-[#10B981] font-bold text-lg">₦{plan.price}</p>
              </div>
              
              <div className="flex items-center gap-4 text-gray-500 text-sm mb-6">
                <div className="flex items-center gap-1">
                  <BedDouble className="h-4 w-4" />
                  <span>{plan.beds} Beds</span>
                </div>
                <div className="flex items-center gap-1">
                  <Bath className="h-4 w-4" />
                  <span>{plan.baths} Baths</span>
                </div>
                <div className="flex items-center gap-1">
                  <Ruler className="h-4 w-4" />
                  <span>{plan.area}</span>
                </div>
              </div>

              <Button className="w-full">View Details</Button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 text-center md:hidden">
        <span className="text-sm text-gray-500">Swipe to see more plans</span>
      </div>
    </Section>
  );
}
