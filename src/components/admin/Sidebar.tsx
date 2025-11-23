'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { 
  LayoutDashboard, 
  Coins, 
  ScrollText, 
  Newspaper, 
  Users, 
  LogOut,
  Settings
} from 'lucide-react';
import { storage } from '@/lib/storage';

const sidebarLinks = [
  { name: 'Overview', href: '/admin', icon: LayoutDashboard },
  { name: 'Market Prices', href: '/admin/market-prices', icon: Coins },
  { name: 'Building Plans', href: '/admin/plans', icon: ScrollText },
  { name: 'News & Updates', href: '/admin/news', icon: Newspaper },
  { name: 'Partners', href: '/admin/partners', icon: Users },
];

export function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    storage.logout();
    router.push('/login');
  };

  return (
    <div className="w-64 bg-gray-900 text-white h-screen fixed left-0 top-0 flex flex-col">
      <div className="p-6 border-b border-gray-800">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded bg-[#10B981] flex items-center justify-center text-white font-bold">
            B
          </div>
          <span className="font-bold text-lg">Admin Panel</span>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {sidebarLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                isActive 
                  ? "bg-[#10B981] text-white" 
                  : "text-gray-400 hover:text-white hover:bg-gray-800"
              )}
            >
              <link.icon className="h-5 w-5" />
              {link.name}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-gray-800 space-y-1">
        <button className="flex w-full items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">
          <Settings className="h-5 w-5" />
          Settings
        </button>
        <button 
          onClick={handleLogout}
          className="flex w-full items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-red-400 hover:text-red-300 hover:bg-gray-800 transition-colors"
        >
          <LogOut className="h-5 w-5" />
          Logout
        </button>
      </div>
    </div>
  );
}
