import React from 'react';
import { Button } from '@/components/ui/button';
import { Users, ShoppingCart, Calendar } from 'lucide-react';

export default function CooperativePage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Cooperative Groups</h1>
          <p className="text-gray-500">Join forces to buy materials at bulk prices</p>
        </div>
        <Button className="bg-purple-600 hover:bg-purple-700 text-white">
          Find a Group
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         {/* Group Summary */}
         <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <div className="flex justify-between items-start mb-6">
               <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
                     <Users size={32} />
                  </div>
                  <div>
                     <h2 className="text-xl font-bold text-gray-900">Lekki Landlords Co-op</h2>
                     <p className="text-gray-500">Member since Oct 2025</p>
                  </div>
               </div>
               <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">Active Member</span>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-8">
               <div className="p-4 bg-gray-50 rounded-lg text-center">
                  <p className="text-gray-500 text-xs uppercase mb-1">Pooled Funds</p>
                  <p className="text-xl font-bold text-purple-700">₦ 45.2M</p>
               </div>
               <div className="p-4 bg-gray-50 rounded-lg text-center">
                  <p className="text-gray-500 text-xs uppercase mb-1">Your Savings</p>
                  <p className="text-xl font-bold text-emerald-600">₦ 850K</p>
               </div>
               <div className="p-4 bg-gray-50 rounded-lg text-center">
                  <p className="text-gray-500 text-xs uppercase mb-1">Members</p>
                  <p className="text-xl font-bold text-gray-900">24</p>
               </div>
            </div>

            <h3 className="font-bold text-gray-900 mb-4">Active Group Purchases</h3>
            <div className="space-y-4">
               {[1, 2].map(i => (
                  <div key={i} className="border border-gray-200 rounded-lg p-4 flex items-center justify-between">
                     <div className="flex items-center gap-4">
                        <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
                           <ShoppingCart size={20} />
                        </div>
                        <div>
                           <p className="font-medium text-gray-900">Bulk Cement Order (Dangote)</p>
                           <p className="text-xs text-gray-500">Closing in 2 days • 12/50 slots filled</p>
                        </div>
                     </div>
                     <Button size="sm" variant="outline" className="text-purple-600 border-purple-200 hover:bg-purple-50">
                        Join Buy
                     </Button>
                  </div>
               ))}
            </div>
         </div>

         {/* Sidebar Info */}
         <div className="space-y-6">
            <div className="bg-purple-50 border border-purple-100 rounded-xl p-6">
               <h3 className="font-bold text-purple-900 mb-2">Next Meeting</h3>
               <div className="flex items-center gap-2 text-purple-700 mb-4">
                  <Calendar size={18} />
                  <span>Nov 28, 2025 • 10:00 AM</span>
               </div>
               <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                  Join Virtual Room
               </Button>
            </div>
         </div>
      </div>
    </div>
  );
}

