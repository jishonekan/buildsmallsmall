import React from 'react';
import { Button } from '@/components/ui/button';
import { Search, Filter } from 'lucide-react';

export default function PlansPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Building Plans Library</h1>
          <p className="text-gray-500">Explore professionally designed building plans</p>
        </div>
      </div>

      <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col md:flex-row gap-4">
         <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="Search by style, bedrooms, etc..." 
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
         </div>
         <div className="flex gap-2">
            <select className="px-4 py-2 border border-gray-200 rounded-lg bg-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500">
              <option>All Types</option>
              <option>Bungalow</option>
              <option>Duplex</option>
              <option>Mansion</option>
            </select>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter size={16} /> More Filters
            </Button>
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow group">
            <div className="h-48 bg-gray-100 relative overflow-hidden">
               <div className="absolute inset-0 bg-gray-200 group-hover:scale-105 transition-transform duration-500" />
               <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                 ₦15M - ₦20M
               </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-gray-900 mb-1">Modern Family Home {i}</h3>
              <p className="text-sm text-gray-500 mb-3">4 Beds • 5 Baths • 450 sqm</p>
              <Button className="w-full variant-outline border-emerald-200 text-emerald-600 hover:bg-emerald-50">
                View Details
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

