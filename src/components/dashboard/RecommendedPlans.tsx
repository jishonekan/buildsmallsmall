import React from 'react';
import { Home, ChevronRight } from 'lucide-react';

export default function RecommendedPlans() {
  const plans = [
    {
      id: 1,
      name: "Modern 3-Bed Bungalow",
      cost: "₦15M - ₦18M",
      rooms: "3 Beds, 4 Baths",
      image: "/api/placeholder/400/300"
    },
    {
      id: 2,
      name: "Contemporary Duplex",
      cost: "₦35M - ₦42M",
      rooms: "5 Beds, 6 Baths",
      image: "/api/placeholder/400/300"
    }
  ];

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-900">Recommended Plans</h3>
        <a href="#" className="text-xs text-emerald-600 font-medium hover:underline">View Library</a>
      </div>
      
      <div className="space-y-4">
        {plans.map((plan) => (
          <div key={plan.id} className="group cursor-pointer">
            <div className="relative h-32 bg-gray-100 rounded-lg overflow-hidden mb-2">
              {/* Placeholder for image */}
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-400 group-hover:scale-105 transition-transform duration-500">
                <Home size={24} />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                <span className="text-white text-xs font-medium">{plan.cost}</span>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-900 group-hover:text-emerald-600 transition-colors">{plan.name}</h4>
              <p className="text-xs text-gray-500">{plan.rooms}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 pt-3 border-t border-gray-50">
        <p className="text-xs text-gray-400 italic">Based on your budget preferences</p>
      </div>
    </div>
  );
}

