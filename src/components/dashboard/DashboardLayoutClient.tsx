"use client";

import React, { useState } from 'react';
import Sidebar from './Sidebar';
import TopNav from './TopNav';
import { cn } from '@/lib/utils';

export default function DashboardLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Mobile Sidebar Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={cn(
        "fixed lg:static inset-y-0 left-0 z-50 transition-transform duration-300 lg:transform-none",
        mobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
        // Sidebar component handles its own width based on collapsed prop
      )}>
        <Sidebar 
          collapsed={sidebarCollapsed} 
          setCollapsed={setSidebarCollapsed} 
        />
      </div>

      {/* Main Content */}
      <div className={cn(
        "flex-1 transition-all duration-300 flex flex-col min-h-screen w-full",
        // If sidebar is fixed on desktop, we need margin. 
        // But here I made sidebar static on desktop in the flex container?
        // The original Sidebar had 'fixed'. I should probably make Sidebar not fixed if I use flex here, 
        // OR handle margin dynamically.
      )}>
        {/* 
           If Sidebar is fixed (as in original code), we need to adjust margin-left of this container.
           However, passing 'collapsed' state to Sidebar implies we control it here.
           Let's modify Sidebar to NOT be fixed by default, or handle it here.
        */}
        
        <TopNav onMenuClick={() => setMobileMenuOpen(true)} />
        
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-x-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}

