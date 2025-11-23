import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';

export default function MessagesPage() {
  return (
    <div className="h-[calc(100vh-8rem)] bg-white border border-gray-200 rounded-xl shadow-sm flex overflow-hidden">
      {/* Sidebar */}
      <div className="w-80 border-r border-gray-200 flex flex-col">
         <div className="p-4 border-b border-gray-200">
            <input 
               type="text" 
               placeholder="Search messages..." 
               className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
         </div>
         <div className="flex-1 overflow-y-auto">
            {[1, 2, 3].map(i => (
               <div key={i} className={`p-4 border-b border-gray-50 cursor-pointer hover:bg-gray-50 ${i === 1 ? 'bg-emerald-50 border-l-4 border-l-emerald-500' : ''}`}>
                  <div className="flex justify-between mb-1">
                     <span className="font-bold text-gray-900 text-sm">Emmanuel (Plumber)</span>
                     <span className="text-xs text-gray-400">10:30 AM</span>
                  </div>
                  <p className="text-xs text-gray-500 line-clamp-1">
                     I will be arriving at the site by 2 PM today with the materials.
                  </p>
               </div>
            ))}
         </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col bg-white">
         <div className="p-4 border-b border-gray-200 flex justify-between items-center">
            <div>
               <h3 className="font-bold text-gray-900">Emmanuel (Plumber)</h3>
               <p className="text-xs text-green-600 flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full inline-block"></span> Online
               </p>
            </div>
            <Button variant="ghost" size="sm">View Profile</Button>
         </div>

         <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-50">
            <div className="flex justify-end">
               <div className="bg-emerald-600 text-white px-4 py-2 rounded-lg rounded-tr-none max-w-[70%] text-sm">
                  Hello Emmanuel, are we still on for today?
               </div>
            </div>
            <div className="flex justify-start">
               <div className="bg-white border border-gray-200 text-gray-800 px-4 py-2 rounded-lg rounded-tl-none max-w-[70%] text-sm shadow-sm">
                  Yes sir. I will be arriving at the site by 2 PM today with the materials.
               </div>
            </div>
         </div>

         <div className="p-4 border-t border-gray-200 bg-white">
            <div className="flex gap-2">
               <Input placeholder="Type your message..." className="flex-1" />
               <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                  <Send size={18} />
               </Button>
            </div>
         </div>
      </div>
    </div>
  );
}

