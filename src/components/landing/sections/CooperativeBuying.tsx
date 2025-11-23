'use client';

import React from 'react';
import Image from 'next/image';
import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import { Users, TrendingDown, Truck, ShieldCheck, CheckCircle2 } from 'lucide-react';

const benefits = [
  {
    icon: TrendingDown,
    title: "Bulk Discounts",
    description: "Save up to 20% on materials by pooling orders with other builders."
  },
  {
    icon: Truck,
    title: "Shared Logistics",
    description: "Split transportation costs when buying materials for the same location."
  },
  {
    icon: Users,
    title: "Community Support",
    description: "Get advice, share experiences, and stay motivated with your group."
  },
  {
    icon: ShieldCheck,
    title: "Verified Suppliers",
    description: "Access our network of vetted suppliers who guarantee quality."
  }
];

export function CooperativeBuying() {
  return (
    <Section className="bg-gray-50" id="cooperative">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl lg:order-last">
          <Image
            src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?q=80&w=1000&auto=format&fit=crop"
            alt="Cooperative construction group meeting"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 text-white">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-10 w-10 rounded-full border-2 border-white bg-gray-300" />
                ))}
              </div>
              <span className="font-medium">+1,200 Groups Active</span>
            </div>
            <p className="text-sm opacity-90">"Joining a cooperative helped me finish my foundation in half the expected time." - Chidi, Lagos</p>
          </div>
        </div>

        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10B981]/10 text-[#10B981] text-sm font-medium mb-6">
            <Users className="h-4 w-4" />
            Community Power
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Save More with Cooperative Buying
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Don't build alone. Join forces with other homeowners in your area to negotiate better prices and share resources.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-[#10B981]">
                  <benefit.icon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">{benefit.title}</h4>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>

          <Button size="lg">Join a Cooperative Group</Button>
        </div>
      </div>
    </Section>
  );
}

