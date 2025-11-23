import React from 'react';
import { Building, MoreHorizontal, MapPin, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  title: string;
  address: string;
  planType: string;
  progress: number;
  phase: string;
  status: 'active' | 'paused' | 'completed';
  lastUpdated: string;
  imageUrl?: string;
}

export default function ProjectCard({
  title,
  address,
  planType,
  progress,
  phase,
  status,
  lastUpdated,
  imageUrl
}: ProjectCardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col">
      <div className="h-32 bg-gray-100 relative">
        {imageUrl ? (
          <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-emerald-50 text-emerald-200">
            <Building size={48} />
          </div>
        )}
        <div className="absolute top-3 right-3">
          <span className={`px-2 py-1 rounded text-xs font-medium uppercase tracking-wide ${
            status === 'active' ? 'bg-green-100 text-green-700' :
            status === 'paused' ? 'bg-yellow-100 text-yellow-700' :
            'bg-gray-100 text-gray-700'
          }`}>
            {status}
          </span>
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col">
        <div className="mb-4">
          <h3 className="font-bold text-gray-900 text-lg mb-1">{title}</h3>
          <div className="flex items-center text-gray-500 text-sm mb-2">
            <MapPin size={14} className="mr-1" />
            {address}
          </div>
          <div className="text-xs text-gray-400">{planType}</div>
        </div>

        <div className="mb-4 space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600 font-medium">Progress</span>
            <span className="text-emerald-600 font-bold">{progress}%</span>
          </div>
          <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-emerald-500 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-xs text-gray-500 mt-1">Current Phase: <span className="font-medium text-gray-700">{phase}</span></p>
        </div>

        <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
          <span className="text-xs text-gray-400 flex items-center">
            <Calendar size={12} className="mr-1" />
            Updated {lastUpdated}
          </span>
          <Button variant="outline" size="sm" className="text-emerald-600 border-emerald-200 hover:bg-emerald-50">
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
}

