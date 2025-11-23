import React from 'react';
import { Button } from '@/components/ui/button';
import { Search, ShoppingBag, Star, MapPin } from 'lucide-react';

export default function MarketplacePage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Marketplace</h1>
          <p className="text-gray-500">Find verified artisans and quality materials</p>
        </div>
      </div>

      <div className="flex gap-4 border-b border-gray-200 pb-4">
         <button className="text-emerald-600 font-medium border-b-2 border-emerald-600 pb-4 -mb-4.5">Find Artisans</button>
         <button className="text-gray-500 hover:text-gray-700 font-medium pb-4">Buy Materials</button>
      </div>

      <div className="flex gap-4 mb-6">
         <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="Search for plumbers, electricians, carpenters..." 
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
         </div>
         <Button variant="outline">Filter</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow p-5">
               <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex-shrink-0" />
                  <div>
                     <h3 className="font-bold text-gray-900">Emmanuel Okonkwo</h3>
                     <p className="text-emerald-600 font-medium text-sm">Master Plumber</p>
                     <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                        <MapPin size={12} />
                        Lekki, Lagos
                     </div>
                  </div>
               </div>
               
               <div className="mt-4 flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1 bg-yellow-50 text-yellow-700 px-2 py-1 rounded">
                     <Star size={14} fill="currentColor" />
                     <span className="font-bold">4.8</span>
                     <span className="text-xs opacity-75">(24)</span>
                  </div>
                  <div className="text-gray-500">
                     <span className="font-bold text-gray-900">₦5,000</span>/hr
                  </div>
               </div>

               <div className="mt-4 pt-4 border-t border-gray-100 flex gap-2">
                  <Button className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white">Book Now</Button>
                  <Button variant="outline" className="flex-1">Profile</Button>
               </div>
            </div>
         ))}
      </div>
    </div>
  );
}

