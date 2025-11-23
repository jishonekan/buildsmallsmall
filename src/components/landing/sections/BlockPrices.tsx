'use client';

import React, { useState, useEffect } from 'react';
import { Section } from '@/components/ui/section';
import { Cuboid, RefreshCw, MapPin } from 'lucide-react';
import { storage, MarketPrice } from '@/lib/storage';

export function BlockPrices() {
  const [prices, setPrices] = useState<MarketPrice[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setPrices(storage.getPrices());
  }, []);

  if (!mounted) return null;

  return (
    <Section className="bg-white" id="block-prices">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Real-Time Market Prices
          </h2>
          <p className="text-gray-600 flex items-center justify-center gap-2">
            <MapPin className="h-4 w-4 text-[#10B981]" />
            Current average prices in Lagos, Nigeria
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {prices.map((item) => (
            <div 
              key={item.id}
              className="flex items-center justify-between p-6 bg-gray-50 rounded-xl border border-gray-100 hover:border-[#10B981]/30 transition-colors group"
            >
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 bg-white rounded-lg flex items-center justify-center shadow-sm text-gray-400 group-hover:text-[#10B981]">
                  <Cuboid className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{item.name}</h4>
                  <p className="text-sm text-gray-500">{item.unit}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold text-[#10B981]">₦{item.price}</p>
                <div className="flex items-center justify-end gap-1 text-xs text-gray-500">
                  <RefreshCw className="h-3 w-3" />
                  <span>{item.lastUpdated}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            *Prices are indicative and may vary by location and vendor. Join a cooperative for bulk discounts.
          </p>
        </div>
      </div>
    </Section>
  );
}
