import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MessageSquare, Star } from 'lucide-react';

export default function FeedbackPage() {
  return (
    <div className="max-w-2xl mx-auto mt-8">
      <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
         <div className="text-center mb-8">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
               <MessageSquare size={32} />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">We value your feedback</h1>
            <p className="text-gray-500 mt-2">Tell us about your experience with Build Small Small</p>
         </div>

         <form className="space-y-6">
            <div>
               <label className="block text-sm font-medium text-gray-700 mb-2">How would you rate your experience?</label>
               <div className="flex gap-2 justify-center">
                  {[1, 2, 3, 4, 5].map(i => (
                     <button key={i} type="button" className="p-2 hover:bg-yellow-50 rounded-full transition-colors group">
                        <Star size={32} className="text-gray-300 group-hover:text-yellow-400" />
                     </button>
                  ))}
               </div>
            </div>

            <div>
               <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
               <select className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500">
                  <option>General Feedback</option>
                  <option>Bug Report</option>
                  <option>Feature Request</option>
                  <option>Building Plan Issue</option>
                  <option>Payment Issue</option>
               </select>
            </div>

            <div>
               <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
               <Input placeholder="Brief summary of your feedback" />
            </div>

            <div>
               <label className="block text-sm font-medium text-gray-700 mb-2">Details</label>
               <Textarea placeholder="Please describe your experience in detail..." className="h-32" />
            </div>

            <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">Submit Feedback</Button>
         </form>
      </div>
    </div>
  );
}

