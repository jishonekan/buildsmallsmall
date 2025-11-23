"use client";

import React from 'react';
import { Bell, ChevronDown, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function TopNav({ onMenuClick }: { onMenuClick?: () => void }) {
  return (
    <header className="h-16 bg-white border-b border-gray-200 sticky top-0 z-30 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
      <div className="flex items-center gap-4">
        {onMenuClick && (
          <button 
            onClick={onMenuClick}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg text-gray-600"
          >
            <Menu size={20} />
          </button>
        )}
        
        <nav className="hidden md:flex items-center text-sm text-gray-500">
          <span className="hover:text-gray-900 cursor-pointer">Dashboard</span>
          <span className="mx-2">/</span>
          <span className="font-medium text-gray-900">Overview</span>
        </nav>
      </div>

      <div className="flex items-center gap-4 sm:gap-6">
        {/* Wallet Balance (Desktop) */}
        <div className="hidden sm:flex flex-col items-end mr-2">
          <span className="text-xs text-gray-500">Wallet Balance</span>
          <span className="text-sm font-bold text-gray-900">₦ 2,450,000.00</span>
        </div>

        {/* Notifications */}
        <button className="relative p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors">
          <Bell size={20} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
        </button>

        {/* User Profile */}
        <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
          <div className="h-8 w-8 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-700 font-medium text-sm">
            JD
          </div>
          <div className="hidden sm:block text-left">
            <p className="text-sm font-medium text-gray-900">John Doe</p>
            <p className="text-xs text-gray-500">Homeowner</p>
          </div>
          <ChevronDown size={16} className="text-gray-400" />
        </div>
      </div>
    </header>
  );
}

