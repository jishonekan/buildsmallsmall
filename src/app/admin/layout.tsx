import React from 'react';
import { Sidebar } from '@/components/admin/Sidebar';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar />
      <div className="ml-64 min-h-screen">
        <header className="bg-white border-b border-gray-200 h-16 flex items-center px-8 sticky top-0 z-10">
          <h1 className="font-bold text-gray-900">Dashboard</h1>
          <div className="ml-auto flex items-center gap-4">
            <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-sm font-bold">
              A
            </div>
          </div>
        </header>
        <main className="p-8">
          {children}
        </main>
      </div>
    </div>
  );
}

