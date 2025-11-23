import React from 'react';
import { Button } from '@/components/ui/button';
import { FileText, Upload, Download, Trash2 } from 'lucide-react';

export default function DocumentsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Documents & KYC</h1>
          <p className="text-gray-500">Manage your contracts, receipts, and identification</p>
        </div>
        <Button className="bg-emerald-600 hover:bg-emerald-700 text-white flex items-center gap-2">
          <Upload size={16} /> Upload New
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         <div className="md:col-span-2 bg-white rounded-xl border border-gray-200 shadow-sm">
            <div className="p-6 border-b border-gray-100">
               <h2 className="font-bold text-gray-900">Project Documents</h2>
            </div>
            <div className="divide-y divide-gray-100">
               {[
                  { name: 'Building Plan Approval.pdf', size: '2.4 MB', date: 'Nov 20, 2025', type: 'Permit' },
                  { name: 'Land Survey - Lekki.pdf', size: '5.1 MB', date: 'Oct 12, 2025', type: 'Deed' },
                  { name: 'Contract - Foundation Works.docx', size: '1.2 MB', date: 'Oct 15, 2025', type: 'Contract' },
                  { name: 'Material Receipt #4421.jpg', size: '450 KB', date: 'Nov 18, 2025', type: 'Receipt' },
               ].map((doc, i) => (
                  <div key={i} className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
                     <div className="flex items-center gap-4">
                        <div className="p-3 bg-gray-100 rounded-lg text-gray-500">
                           <FileText size={24} />
                        </div>
                        <div>
                           <p className="font-medium text-gray-900">{doc.name}</p>
                           <p className="text-xs text-gray-500">{doc.type} • {doc.size} • {doc.date}</p>
                        </div>
                     </div>
                     <div className="flex gap-2">
                        <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-900">
                           <Download size={16} />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-red-400 hover:text-red-600 hover:bg-red-50">
                           <Trash2 size={16} />
                        </Button>
                     </div>
                  </div>
               ))}
            </div>
         </div>

         <div className="space-y-6">
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
               <h3 className="font-bold text-gray-900 mb-4">KYC Status</h3>
               <div className="space-y-4">
                  <div className="flex items-center justify-between">
                     <span className="text-sm text-gray-600">Identity Verification</span>
                     <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-medium">Verified</span>
                  </div>
                  <div className="flex items-center justify-between">
                     <span className="text-sm text-gray-600">Address Proof</span>
                     <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-medium">Verified</span>
                  </div>
                  <div className="flex items-center justify-between">
                     <span className="text-sm text-gray-600">Bank Verification</span>
                     <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-xs font-medium">Pending</span>
                  </div>
               </div>
               <Button className="w-full mt-6" variant="outline">Update KYC</Button>
            </div>
         </div>
      </div>
    </div>
  );
}

