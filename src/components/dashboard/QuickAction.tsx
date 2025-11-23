import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface QuickActionProps {
  icon: LucideIcon;
  label: string;
  description?: string;
  onClick?: () => void;
  highlight?: boolean;
}

export default function QuickAction({ icon: Icon, label, description, onClick, highlight }: QuickActionProps) {
  return (
    <button 
      onClick={onClick}
      className={cn(
        "flex flex-col items-center justify-center p-4 rounded-xl border transition-all duration-200 text-center h-full w-full",
        highlight 
          ? "bg-emerald-50 border-emerald-200 hover:bg-emerald-100 hover:border-emerald-300" 
          : "bg-white border-gray-100 hover:bg-gray-50 hover:border-gray-200 hover:shadow-sm"
      )}
    >
      <div className={cn(
        "w-10 h-10 rounded-full flex items-center justify-center mb-3",
        highlight ? "bg-emerald-200 text-emerald-700" : "bg-gray-100 text-gray-600"
      )}>
        <Icon size={20} />
      </div>
      <h4 className={cn("font-medium text-sm mb-1", highlight ? "text-emerald-900" : "text-gray-900")}>
        {label}
      </h4>
      {description && (
        <p className="text-xs text-gray-500 line-clamp-2">{description}</p>
      )}
    </button>
  );
}

