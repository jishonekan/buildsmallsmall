import React from 'react';
import { Users, ShoppingBag, Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CooperativeWidget() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-900 flex items-center gap-2">
          <Users size={18} className="text-purple-500" />
          Lekki Landlords Co-op
        </h3>
        <span className="px-2 py-1 bg-purple-50 text-purple-700 text-xs font-medium rounded-full">Member</span>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-500">Pooled Funds</span>
          <span className="font-bold text-gray-900">₦ 45,200,000</span>
        </div>

        <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-white rounded-md shadow-sm text-purple-600">
              <ShoppingBag size={16} />
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-900">Bulk Cement Purchase</p>
              <p className="text-xs text-gray-500 mt-1">Order closing in 2 days</p>
              <div className="mt-2 flex items-center gap-2 text-xs">
                 <span className="font-medium text-purple-700">12 Members joined</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between text-xs text-gray-500 border-t border-gray-50 pt-3">
          <span className="flex items-center gap-1">
            <Calendar size={12} />
            Next Meeting: Nov 28
          </span>
        </div>

        <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white h-9 text-xs">
          View Group Dashboard
        </Button>
      </div>
    </div>
  );
}

