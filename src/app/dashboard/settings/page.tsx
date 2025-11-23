import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Bell, Lock, User, Shield } from 'lucide-react';

export default function SettingsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Account Settings</h1>
        <p className="text-gray-500">Manage your profile and preferences</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
         {/* Settings Nav */}
         <div className="space-y-1">
            <button className="w-full flex items-center gap-3 px-4 py-2 bg-emerald-50 text-emerald-700 font-medium rounded-lg text-sm">
               <User size={18} /> Profile
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg text-sm font-medium">
               <Lock size={18} /> Security
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg text-sm font-medium">
               <Bell size={18} /> Notifications
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg text-sm font-medium">
               <Shield size={18} /> Privacy
            </button>
         </div>

         {/* Content */}
         <div className="md:col-span-3 space-y-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
               <h2 className="text-lg font-bold text-gray-900 mb-4">Personal Information</h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                     <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                     <Input defaultValue="John Doe" />
                  </div>
                  <div>
                     <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                     <Input defaultValue="john.doe@example.com" disabled />
                  </div>
                  <div>
                     <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                     <Input defaultValue="+234 801 234 5678" />
                  </div>
                  <div>
                     <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                     <Input defaultValue="Lekki, Lagos" />
                  </div>
               </div>
               <div className="mt-6 flex justify-end">
                  <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">Save Changes</Button>
               </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
               <h2 className="text-lg font-bold text-gray-900 mb-4">Password Change</h2>
               <div className="space-y-4 max-w-md">
                  <div>
                     <label className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
                     <Input type="password" />
                  </div>
                  <div>
                     <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                     <Input type="password" />
                  </div>
               </div>
               <div className="mt-6 flex justify-end">
                  <Button variant="outline">Update Password</Button>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}

