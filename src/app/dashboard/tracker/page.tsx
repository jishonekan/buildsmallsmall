import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, Circle } from 'lucide-react';

export default function TrackerPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Progress Tracker</h1>
          <p className="text-gray-500">Monitor milestones and project phases</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
         <div className="mb-6">
            <h2 className="text-lg font-bold text-gray-900">Lekki Duplex Project</h2>
            <div className="w-full bg-gray-100 rounded-full h-2.5 mt-2">
               <div className="bg-emerald-600 h-2.5 rounded-full" style={{ width: '65%' }}></div>
            </div>
            <p className="text-sm text-gray-500 mt-2 text-right">65% Complete</p>
         </div>

         <div className="space-y-8 relative before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-0.5 before:bg-gray-200">
            {[
               { name: 'Foundation', status: 'completed', date: 'Oct 15, 2025' },
               { name: 'DPC / German Floor', status: 'completed', date: 'Oct 30, 2025' },
               { name: 'Block Work', status: 'completed', date: 'Nov 12, 2025' },
               { name: 'Lintel & Concrete', status: 'current', date: 'In Progress' },
               { name: 'Roofing', status: 'pending', date: 'Estimated: Dec 05' },
               { name: 'Plastering', status: 'pending', date: 'Pending' },
            ].map((phase, idx) => (
               <div key={idx} className="relative pl-12">
                  <div className={`absolute left-0 top-0 w-10 h-10 rounded-full flex items-center justify-center border-2 z-10 bg-white ${
                     phase.status === 'completed' ? 'border-emerald-500 text-emerald-500' : 
                     phase.status === 'current' ? 'border-blue-500 text-blue-500' : 'border-gray-300 text-gray-300'
                  }`}>
                     {phase.status === 'completed' ? <CheckCircle size={20} /> : <Circle size={20} fill={phase.status === 'current' ? "currentColor" : "none"} />}
                  </div>
                  <div>
                     <h3 className={`font-bold ${phase.status === 'pending' ? 'text-gray-400' : 'text-gray-900'}`}>{phase.name}</h3>
                     <p className="text-sm text-gray-500">{phase.date}</p>
                     {phase.status === 'current' && (
                        <div className="mt-2">
                           <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white text-xs">
                              View Updates
                           </Button>
                        </div>
                     )}
                  </div>
               </div>
            ))}
         </div>
      </div>
    </div>
  );
}

