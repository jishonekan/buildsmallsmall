'use client';

import React from 'react';
import Image from 'next/image';
import { Section } from '@/components/ui/section';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Emmanuel Okonkwo",
    role: "Homeowner",
    location: "Abuja",
    image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=1000&auto=format&fit=crop",
    quote: "I never thought I could build my house with my civil service salary until I found Build Small Small. The flexible payment plan is a lifesaver."
  },
  {
    name: "Sarah Adeyemi",
    role: "Block Molder",
    location: "Lagos",
    image: "https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?q=80&w=1000&auto=format&fit=crop",
    quote: "This platform has transformed my business. I get guaranteed customers and bulk orders from cooperatives. Payment is always prompt."
  },
  {
    name: "David Ibrahim",
    role: "Civil Servant",
    location: "Kaduna",
    image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=1000&auto=format&fit=crop",
    quote: "The salary deduction option made it seamless. I just watch my house grow without worrying about saving large sums first."
  }
];

export function Testimonials() {
  return (
    <Section className="bg-white" id="testimonials">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
          Stories from Our Community
        </h2>
        <p className="text-lg text-gray-600">
          Join 10,000+ satisfied Nigerians building their future with us.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((item, index) => (
          <div key={index} className="bg-gray-50 p-8 rounded-2xl relative">
            <Quote className="absolute top-8 right-8 h-8 w-8 text-gray-200" />
            <div className="flex gap-1 text-yellow-400 mb-6">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="text-gray-600 mb-8 relative z-10 italic">
              "{item.quote}"
            </p>
            <div className="flex items-center gap-4">
              <div className="relative h-12 w-12 rounded-full overflow-hidden bg-gray-200">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">{item.name}</h4>
                <p className="text-xs text-gray-500">{item.role}, {item.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

