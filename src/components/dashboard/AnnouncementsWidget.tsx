import React from 'react';
import { Megaphone, ChevronRight, ExternalLink } from 'lucide-react';

export default function AnnouncementsWidget() {
  const announcements = [
    {
      id: 1,
      title: "New Cooperative Features",
      date: "Nov 22, 2025",
      excerpt: "Join forces with others to buy materials at bulk prices."
    },
    {
      id: 2,
      title: "Cement Price Update",
      date: "Nov 20, 2025",
      excerpt: "Market prices for Dangote Cement have stabilized."
    },
    {
      id: 3,
      title: "Artisan Verification Badge",
      date: "Nov 18, 2025",
      excerpt: "Look for the blue tick to hire verified professionals."
    }
  ];

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-900 flex items-center gap-2">
          <Megaphone size={18} className="text-emerald-500" />
          Announcements
        </h3>
        <a href="#" className="text-xs text-emerald-600 font-medium hover:underline">View All</a>
      </div>
      
      <div className="space-y-4">
        {announcements.map((item) => (
          <div key={item.id} className="pb-3 border-b border-gray-50 last:border-0 last:pb-0">
            <div className="flex justify-between items-start mb-1">
              <h4 className="text-sm font-medium text-gray-900 hover:text-emerald-600 cursor-pointer transition-colors">
                {item.title}
              </h4>
              <span className="text-[10px] text-gray-400 whitespace-nowrap ml-2">{item.date}</span>
            </div>
            <p className="text-xs text-gray-500 line-clamp-2 mb-1">{item.excerpt}</p>
            <a href="#" className="text-[10px] font-medium text-emerald-500 flex items-center gap-1 hover:text-emerald-600">
              Read More <ChevronRight size={10} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

