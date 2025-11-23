import React from 'react';
import { HelpCircle, Mail, MessageCircle } from 'lucide-react';

export default function HelpPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
       <div className="text-center py-8">
         <h1 className="text-3xl font-bold text-gray-900 mb-2">How can we help you?</h1>
         <p className="text-gray-500">Search our help center or browse common questions</p>
         <div className="mt-6 max-w-lg mx-auto">
            <input 
               type="text" 
               placeholder="Search for answers..." 
               className="w-full px-6 py-3 border border-gray-200 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
         </div>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 text-center hover:shadow-md transition-shadow">
             <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <HelpCircle size={24} />
             </div>
             <h3 className="font-bold text-gray-900 mb-2">FAQs</h3>
             <p className="text-sm text-gray-500">Browse commonly asked questions</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 text-center hover:shadow-md transition-shadow">
             <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail size={24} />
             </div>
             <h3 className="font-bold text-gray-900 mb-2">Email Support</h3>
             <p className="text-sm text-gray-500">Get in touch with our team</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 text-center hover:shadow-md transition-shadow">
             <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle size={24} />
             </div>
             <h3 className="font-bold text-gray-900 mb-2">Live Chat</h3>
             <p className="text-sm text-gray-500">Chat with support in real-time</p>
          </div>
       </div>
    </div>
  );
}

