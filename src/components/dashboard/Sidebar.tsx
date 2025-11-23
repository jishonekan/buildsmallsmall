"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { 
  LayoutDashboard, 
  Building, 
  BookOpen, 
  Wallet, 
  Users, 
  ShoppingBag, 
  Briefcase, 
  Activity, 
  FileText, 
  MessageSquare, 
  Settings, 
  HelpCircle, 
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  LogOut,
  Hammer
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { storage } from '@/lib/storage';

const homeownerItems = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'My Projects', href: '/dashboard/projects', icon: Building },
  { name: 'Plans Library', href: '/dashboard/plans', icon: BookOpen },
  { name: 'Wallet', href: '/dashboard/wallet', icon: Wallet },
  { name: 'Cooperative', href: '/dashboard/cooperative', icon: Users },
  { name: 'Marketplace', href: '/dashboard/marketplace', icon: ShoppingBag },
  { name: 'Tracker', href: '/dashboard/tracker', icon: Activity },
  { name: 'Documents', href: '/dashboard/documents', icon: FileText },
  { name: 'Messages', href: '/dashboard/messages', icon: MessageSquare },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
];

const artisanItems = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'My Jobs', href: '/dashboard/projects', icon: Hammer }, // Reusing projects page but maybe different content
  { name: 'Job Board', href: '/dashboard/jobs', icon: Briefcase },
  { name: 'Wallet', href: '/dashboard/wallet', icon: Wallet },
  { name: 'Marketplace', href: '/dashboard/marketplace', icon: ShoppingBag },
  { name: 'Messages', href: '/dashboard/messages', icon: MessageSquare },
  { name: 'Documents', href: '/dashboard/documents', icon: FileText },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
];

const secondaryItems = [
  { name: 'Help Center', href: '/dashboard/help', icon: HelpCircle },
  { name: 'Feedback', href: '/dashboard/feedback', icon: MessageCircle },
];

interface SidebarProps {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

export default function Sidebar({ collapsed, setCollapsed }: SidebarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [role, setRole] = useState<'admin' | 'homeowner' | 'artisan' | null>(null);

  useEffect(() => {
    setRole(storage.getUserRole());
  }, []);

  const handleLogout = () => {
    storage.logout();
    router.push('/login');
  };

  // Default to homeowner items if role is null or unknown (better to show something)
  // Or show empty while loading. For now, default to homeowner.
  const menuItems = role === 'artisan' ? artisanItems : homeownerItems;

  return (
    <aside 
      className={cn(
        "h-full bg-white border-r border-gray-200 flex flex-col transition-all duration-300",
        collapsed ? "w-20" : "w-64"
      )}
    >
      {/* Logo Area */}
      <div className="h-16 flex items-center px-4 border-b border-gray-100 shrink-0">
        <Link href="/dashboard" className="flex items-center gap-2 overflow-hidden">
          <div className="w-8 h-8 bg-emerald-500 rounded-lg flex-shrink-0 flex items-center justify-center text-white font-bold">
            B
          </div>
          {!collapsed && (
            <div className="flex flex-col">
               <span className="font-bold text-gray-900 whitespace-nowrap leading-none">Build Small Small</span>
               {role && <span className="text-[10px] text-gray-500 uppercase tracking-wider mt-1 font-medium">{role}</span>}
            </div>
          )}
        </Link>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto py-4 px-3 space-y-6 scrollbar-hide">
        <div className="space-y-1">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors group relative",
                  isActive 
                    ? "bg-emerald-50 text-emerald-600" 
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                )}
                title={collapsed ? item.name : undefined}
              >
                <item.icon size={20} className={cn("flex-shrink-0", isActive && "text-emerald-500")} />
                {!collapsed && (
                  <span className="font-medium text-sm">{item.name}</span>
                )}
                {isActive && collapsed && (
                  <div className="absolute right-2 w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                )}
              </Link>
            );
          })}
        </div>

        <div className="pt-4 border-t border-gray-100 space-y-1">
          {secondaryItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
              title={collapsed ? item.name : undefined}
            >
              <item.icon size={20} className="flex-shrink-0" />
              {!collapsed && (
                <span className="font-medium text-sm">{item.name}</span>
              )}
            </Link>
          ))}
          
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-red-600 hover:bg-red-50 transition-colors"
            title={collapsed ? "Logout" : undefined}
          >
            <LogOut size={20} className="flex-shrink-0" />
            {!collapsed && (
              <span className="font-medium text-sm">Logout</span>
            )}
          </button>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="p-4 border-t border-gray-100 shrink-0">
        <button 
          onClick={() => setCollapsed(!collapsed)}
          className="w-full flex items-center gap-3 px-3 py-2 text-gray-500 hover:text-gray-900 transition-colors rounded-lg hover:bg-gray-50"
        >
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          {!collapsed && <span className="text-sm font-medium">Collapse</span>}
        </button>
      </div>
    </aside>
  );
}
