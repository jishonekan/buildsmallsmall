'use client';

import React, { useState, useEffect } from 'react';
import { Section } from '@/components/ui/section';
import { Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { storage, NewsItem } from '@/lib/storage';

export function Announcements() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setNews(storage.getNews().filter(item => item.status === 'Published'));
  }, []);

  if (!mounted) return null;

  return (
    <Section className="bg-gray-50" id="news">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-2">
            Latest Updates
          </h2>
          <p className="text-lg text-gray-600">
            Stay informed with platform news and market trends.
          </p>
        </div>
        <Button variant="outline" className="hidden md:flex gap-2">
          View All News
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {news.slice(0, 3).map((item) => (
          <div key={item.id} className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow flex flex-col h-full">
            <div className="flex items-center gap-2 text-sm text-[#10B981] font-medium mb-3">
              <Calendar className="h-4 w-4" />
              {item.date}
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-3">
              {item.title}
            </h3>
            <p className="text-gray-600 mb-6 flex-grow">
              {item.excerpt}
            </p>
            <a href="#" className="inline-flex items-center gap-1 text-sm font-medium text-gray-900 hover:text-[#10B981] mt-auto">
              Read more <ArrowRight className="h-3 w-3" />
            </a>
          </div>
        ))}
      </div>

      <div className="mt-8 md:hidden">
        <Button variant="outline" className="w-full">View All News</Button>
      </div>
    </Section>
  );
}
