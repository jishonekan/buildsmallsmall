'use client';

import React from 'react';
import { Section } from '@/components/ui/section';
import { 
  Home, Cuboid, Wrench, Flame, Hammer, 
  Grid, Zap, Paintbrush, BrickWall, Armchair
} from 'lucide-react';
import { motion } from 'framer-motion';

const categories = [
  { icon: Home, title: "Homeowners", description: "Build your dream home" },
  { icon: Cuboid, title: "Block Molders", description: "Supply quality blocks" },
  { icon: Wrench, title: "Plumbers", description: "Expert plumbing services" },
  { icon: Flame, title: "Welders", description: "Structural metal works" },
  { icon: Hammer, title: "Carpenters", description: "Roofing and furniture" },
  { icon: Grid, title: "Tilers", description: "Perfect floor finishing" },
  { icon: Zap, title: "Electricians", description: "Safe electrical wiring" },
  { icon: Paintbrush, title: "Painters", description: "Beautiful wall finishes" },
  { icon: BrickWall, title: "Bricklayers", description: "Solid construction" },
];

export function UserCategories() {
  return (
    <Section className="bg-white" id="categories">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
          Who is Build Small Small For?
        </h2>
        <p className="text-lg text-gray-600">
          Whether you're building or providing services, there's a place for you in our ecosystem.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02, borderColor: '#10B981' }}
            className="flex flex-col items-center text-center p-6 rounded-2xl border border-gray-100 bg-white hover:shadow-md transition-all cursor-pointer group"
          >
            <div className="h-14 w-14 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 mb-4 group-hover:bg-[#10B981] group-hover:text-white transition-colors">
              <category.icon className="h-7 w-7" />
            </div>
            <h3 className="font-bold text-gray-900 mb-1 group-hover:text-[#10B981] transition-colors">
              {category.title}
            </h3>
            <p className="text-sm text-gray-500">
              {category.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

