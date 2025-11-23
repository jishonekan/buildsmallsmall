import React from 'react';
import { Button } from '@/components/ui/button';
import { Briefcase, MapPin, Clock, DollarSign } from 'lucide-react';

export default function JobBoardPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Job Board</h1>
          <p className="text-gray-500">Find new opportunities and projects</p>
        </div>
        <div className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">
           Verification Status: Verified
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         <div className="lg:col-span-2 space-y-4">
            {[1, 2, 3, 4].map((i) => (
               <div key={i} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                     <div>
                        <h3 className="font-bold text-gray-900 text-lg">Full House Wiring - Duplex</h3>
                        <p className="text-gray-500 text-sm mt-1">Posted 2 hours ago</p>
                     </div>
                     <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">New</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 mb-6">
                     <div className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin size={16} />
                        <span>Ikeja GRA, Lagos</span>
                     </div>
                     <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock size={16} />
                        <span>2 Weeks Duration</span>
                     </div>
                     <div className="flex items-center gap-2 text-sm text-gray-600">
                        <DollarSign size={16} />
                        <span className="font-bold text-gray-900">₦ 250,000 - ₦ 300,000</span>
                     </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-6 line-clamp-2">
                     Looking for an experienced electrician to handle complete wiring for a newly built 5-bedroom duplex. 
                     Must be able to read architectural drawings and provide certification.
                  </p>

                  <div className="flex gap-3">
                     <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">Apply Now</Button>
                     <Button variant="outline">View Details</Button>
                  </div>
               </div>
            ))}
         </div>

         <div className="space-y-6">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
               <h3 className="font-bold text-gray-900 mb-4">My Applications</h3>
               <div className="space-y-4">
                  <div className="pb-3 border-b border-gray-50 last:border-0">
                     <p className="font-medium text-sm text-gray-900">Plumbing Fix @ Yaba</p>
                     <span className="text-xs text-yellow-600 bg-yellow-50 px-2 py-0.5 rounded mt-1 inline-block">Pending Review</span>
                  </div>
                  <div className="pb-3 border-b border-gray-50 last:border-0">
                     <p className="font-medium text-sm text-gray-900">Roofing Project @ Epe</p>
                     <span className="text-xs text-red-600 bg-red-50 px-2 py-0.5 rounded mt-1 inline-block">Declined</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}

