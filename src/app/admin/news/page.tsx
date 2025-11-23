'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Plus, Calendar, Trash2, Edit, Save, X } from 'lucide-react';
import { storage, NewsItem } from '@/lib/storage';

export default function NewsPage() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<Partial<NewsItem>>({});

  useEffect(() => {
    setNews(storage.getNews());
  }, []);

  const handleSaveNews = (newNews: NewsItem[]) => {
    setNews(newNews);
    storage.saveNews(newNews);
  };

  const startAdding = () => {
    setFormData({ date: new Date().toISOString().split('T')[0], status: 'Published' });
    setEditingId(null);
    setIsAdding(true);
  };

  const startEditing = (item: NewsItem) => {
    setFormData(item);
    setEditingId(item.id);
    setIsAdding(true);
  };

  const cancelForm = () => {
    setIsAdding(false);
    setEditingId(null);
    setFormData({});
  };

  const handleSubmit = () => {
    if (!formData.title || !formData.excerpt) {
      alert('Title and Excerpt are required');
      return;
    }

    if (editingId) {
      const updatedNews = news.map(item => 
        item.id === editingId 
          ? { ...item, ...formData } as NewsItem 
          : item
      );
      handleSaveNews(updatedNews);
    } else {
      const newItem: NewsItem = {
        id: Date.now().toString(),
        title: formData.title || '',
        date: formData.date || new Date().toISOString().split('T')[0],
        status: (formData.status as 'Published' | 'Draft') || 'Published',
        excerpt: formData.excerpt || ''
      };
      handleSaveNews([newItem, ...news]);
    }
    cancelForm();
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this post?')) {
      const updatedNews = news.filter(item => item.id !== id);
      handleSaveNews(updatedNews);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">News & Updates</h2>
          <p className="text-gray-500">Publish announcements and market updates.</p>
        </div>
        {!isAdding && (
          <Button className="gap-2" onClick={startAdding}>
            <Plus className="h-4 w-4" /> Create Post
          </Button>
        )}
      </div>

      {isAdding && (
        <Card className="border-[#10B981] border-2">
           <CardHeader>
             <CardTitle>{editingId ? 'Edit Post' : 'New Post'}</CardTitle>
           </CardHeader>
           <CardContent>
             <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                   <div className="space-y-2">
                      <Label>Title</Label>
                      <Input 
                        value={formData.title || ''} 
                        onChange={e => setFormData({...formData, title: e.target.value})}
                        placeholder="Post Title"
                      />
                   </div>
                   <div className="space-y-2">
                      <Label>Date</Label>
                      <Input 
                        type="date"
                        value={formData.date || ''} 
                        onChange={e => setFormData({...formData, date: e.target.value})}
                      />
                   </div>
                </div>
                <div className="space-y-2">
                   <Label>Excerpt / Content</Label>
                   <Textarea 
                      value={formData.excerpt || ''} 
                      onChange={e => setFormData({...formData, excerpt: e.target.value})}
                      placeholder="Brief summary of the news..."
                      rows={4}
                   />
                </div>
                <div className="flex justify-end gap-4">
                   <Button variant="outline" onClick={cancelForm}>Cancel</Button>
                   <Button onClick={handleSubmit}>{editingId ? 'Update' : 'Publish'}</Button>
                </div>
             </div>
           </CardContent>
        </Card>
      )}

      <div className="grid gap-6">
        {news.map((item) => (
          <Card key={item.id}>
            <CardContent className="p-6 flex flex-col md:flex-row md:items-start justify-between gap-6">
              <div className="space-y-2 flex-1">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1 text-sm text-gray-500">
                    <Calendar className="h-3 w-3" />
                    {item.date}
                  </span>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${item.status === 'Published' ? 'bg-green-100 text-[#10B981]' : 'bg-gray-100 text-gray-600'}`}>
                    {item.status}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                <p className="text-gray-600">
                  {item.excerpt}
                </p>
              </div>
              <div className="flex gap-2 shrink-0">
                <Button variant="outline" size="icon" onClick={() => startEditing(item)}>
                  <Edit className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="text-red-500 hover:text-red-600 hover:bg-red-50" onClick={() => handleDelete(item.id)}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
