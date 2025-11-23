import React from 'react';
import { CheckCircle, Clock, AlertCircle, DollarSign, FileText, Hammer } from 'lucide-react';
import { cn } from '@/lib/utils';

type ActivityType = 'payment' | 'project' | 'document' | 'milestone' | 'alert';

interface Activity {
  id: string;
  type: ActivityType;
  title: string;
  description: string;
  timestamp: string;
  status?: 'completed' | 'pending' | 'failed';
  amount?: string;
}

const iconMap = {
  payment: DollarSign,
  project: Hammer,
  document: FileText,
  milestone: CheckCircle,
  alert: AlertCircle,
};

const colorMap = {
  payment: 'bg-green-100 text-green-600',
  project: 'bg-blue-100 text-blue-600',
  document: 'bg-orange-100 text-orange-600',
  milestone: 'bg-purple-100 text-purple-600',
  alert: 'bg-red-100 text-red-600',
};

export default function ActivityFeed() {
  // Mock data
  const activities: Activity[] = [
    {
      id: '1',
      type: 'payment',
      title: 'Payment Successful',
      description: 'Material deposit for Project Alpha',
      timestamp: '2 hours ago',
      amount: '₦ 450,000'
    },
    {
      id: '2',
      type: 'milestone',
      title: 'Foundation Complete',
      description: 'Artisan verified completion of foundation',
      timestamp: '1 day ago',
    },
    {
      id: '3',
      type: 'document',
      title: 'Document Uploaded',
      description: 'Building permit approved and uploaded',
      timestamp: '2 days ago',
    },
    {
      id: '4',
      type: 'project',
      title: 'New Artisan Assigned',
      description: 'Electrician joined Project Alpha',
      timestamp: '3 days ago',
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
        <a href="/dashboard/activity" className="text-sm text-emerald-600 hover:text-emerald-700 font-medium">View All</a>
      </div>
      
      <div className="relative border-l-2 border-gray-100 ml-3 space-y-8 pb-2">
        {activities.map((activity) => {
          const Icon = iconMap[activity.type];
          return (
            <div key={activity.id} className="relative pl-8">
              <div className={cn(
                "absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 border-white ring-1 ring-gray-100 flex items-center justify-center",
                activity.type === 'alert' ? "bg-red-500" : "bg-emerald-500"
              )} />
              
              <div className="flex items-start justify-between bg-white p-4 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex gap-4">
                  <div className={cn("p-2 rounded-lg shrink-0 h-fit", colorMap[activity.type])}>
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{activity.title}</p>
                    <p className="text-sm text-gray-500 mt-0.5">{activity.description}</p>
                    <p className="text-xs text-gray-400 mt-2 flex items-center gap-1">
                      <Clock size={12} />
                      {activity.timestamp}
                    </p>
                  </div>
                </div>
                {activity.amount && (
                  <span className="font-semibold text-gray-900">{activity.amount}</span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

