import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  trend?: string;
  trendUp?: boolean;
  description?: string;
  icon?: React.ReactNode;
  actionLabel?: string;
  actionLink?: string;
  color?: 'emerald' | 'blue' | 'purple' | 'orange';
  children?: React.ReactNode;
}

export default function StatCard({
  title,
  value,
  trend,
  trendUp,
  description,
  icon,
  actionLabel,
  actionLink,
  color = 'emerald',
  children
}: StatCardProps) {
  const colorStyles = {
    emerald: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    blue: 'bg-blue-50 text-blue-600 border-blue-100',
    purple: 'bg-purple-50 text-purple-600 border-purple-100',
    orange: 'bg-orange-50 text-orange-600 border-orange-100',
  };

  return (
    <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-sm font-medium text-gray-500 mb-1">{title}</p>
          <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
        </div>
        {icon && (
          <div className={cn("p-2 rounded-lg", colorStyles[color])}>
            {icon}
          </div>
        )}
      </div>

      {children}

      {(trend || description) && (
        <div className="flex items-center gap-2 mt-2">
          {trend && (
            <span className={cn(
              "flex items-center text-xs font-medium px-2 py-0.5 rounded",
              trendUp ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
            )}>
              {trendUp ? <ArrowUpRight size={14} className="mr-1" /> : <ArrowDownRight size={14} className="mr-1" />}
              {trend}
            </span>
          )}
          {description && (
            <span className="text-xs text-gray-400">{description}</span>
          )}
        </div>
      )}
      
      {actionLabel && (
        <div className="mt-4 pt-4 border-t border-gray-50">
          <a href={actionLink} className={cn("text-sm font-medium hover:opacity-80 transition-opacity", `text-${color}-600`)}>
            {actionLabel} &rarr;
          </a>
        </div>
      )}
    </div>
  );
}

