'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Plus, FileText, Image as ImageIcon, Trash2, Upload, Pencil, X, Save } from 'lucide-react';
import { storage, Plan } from '@/lib/storage';

export default function PlansPage() {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  
  // Form state for both adding and editing
  const [formData, setFormData] = useState<Partial<Plan>>({});

  useEffect(() => {
    setPlans(storage.getPlans());
  }, []);

  const handleSavePlans = (newPlans: Plan[]) => {
    setPlans(newPlans);
    storage.savePlans(newPlans);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const startAdding = () => {
    setFormData({});
    setEditingId(null);
    setIsAdding(true);
  };

  const startEditing = (plan: Plan) => {
    setFormData(plan);
    setEditingId(plan.id);
    setIsAdding(true);
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const cancelForm = () => {
    setIsAdding(false);
    setEditingId(null);
    setFormData({});
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.price) {
      alert('Name and Price are required');
      return;
    }

    if (editingId) {
      // Update existing
      const updatedPlans = plans.map(p => 
        p.id === editingId 
          ? { ...p, ...formData } as Plan 
          : p
      );
      handleSavePlans(updatedPlans);
    } else {
      // Add new
      const newPlan: Plan = {
        id: Date.now().toString(),
        name: formData.name || '',
        type: formData.type || '',
        price: formData.price || '',
        image: formData.image || 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1000&auto=format&fit=crop', // Default placeholder
        qsFile: formData.qsFile || 'document.pdf',
        beds: Number(formData.beds) || 0,
        baths: Number(formData.baths) || 0,
        area: formData.area || ''
      };
      handleSavePlans([...plans, newPlan]);
    }
    
    cancelForm();
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this plan?')) {
      const updatedPlans = plans.filter(p => p.id !== id);
      handleSavePlans(updatedPlans);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Building Plans</h2>
          <p className="text-gray-500">Upload new plans and manage QS documents.</p>
        </div>
        {!isAdding && (
          <Button className="gap-2" onClick={startAdding}>
            <Plus className="h-4 w-4" /> Add New Plan
          </Button>
        )}
      </div>

      {isAdding && (
        <Card className="border-[#10B981] border-2">
          <CardHeader>
            <CardTitle>{editingId ? 'Edit Plan' : 'Add New Plan'}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Plan Name</Label>
                  <Input 
                    name="name" 
                    value={formData.name || ''} 
                    onChange={handleInputChange} 
                    placeholder="e.g. Modern Villa" 
                  />
                </div>
                <div className="space-y-2">
                  <Label>Building Type</Label>
                  <Input 
                    name="type" 
                    value={formData.type || ''} 
                    onChange={handleInputChange} 
                    placeholder="e.g. 4-Bedroom Detached" 
                  />
                </div>
                <div className="space-y-2">
                  <Label>Estimated Cost (₦)</Label>
                  <Input 
                    name="price" 
                    value={formData.price || ''} 
                    onChange={handleInputChange} 
                    placeholder="50,000,000" 
                  />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                     <Label>Beds</Label>
                     <Input 
                        name="beds" 
                        type="number"
                        value={formData.beds || ''} 
                        onChange={handleInputChange} 
                      />
                  </div>
                  <div className="space-y-2">
                     <Label>Baths</Label>
                     <Input 
                        name="baths" 
                        type="number"
                        value={formData.baths || ''} 
                        onChange={handleInputChange} 
                      />
                  </div>
                  <div className="space-y-2">
                     <Label>Area (sqm)</Label>
                     <Input 
                        name="area" 
                        value={formData.area || ''} 
                        onChange={handleInputChange} 
                      />
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Plan Image URL</Label>
                  {/* In a real app, this would be a file upload. For now, text input for URL */}
                  <Input 
                    name="image" 
                    value={formData.image || ''} 
                    onChange={handleInputChange} 
                    placeholder="https://example.com/image.jpg" 
                  />
                  <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center hover:bg-gray-50 transition-colors cursor-pointer">
                    <ImageIcon className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                    <span className="text-sm text-gray-500">Image Preview</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>QS Document Name</Label>
                  <Input 
                    name="qsFile" 
                    value={formData.qsFile || ''} 
                    onChange={handleInputChange} 
                    placeholder="filename.pdf" 
                  />
                </div>
              </div>
            </div>
            <div className="mt-6 flex justify-end gap-4">
              <Button variant="outline" onClick={cancelForm}>Cancel</Button>
              <Button onClick={handleSubmit}>{editingId ? 'Update Plan' : 'Save Plan'}</Button>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan) => (
          <Card key={plan.id} className="overflow-hidden">
            <div className="h-48 bg-gray-200 relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={plan.image}
                alt={plan.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/50 to-transparent p-2">
                 <span className="text-white text-xs font-medium">{plan.beds} Beds • {plan.baths} Baths • {plan.area}</span>
              </div>
            </div>
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-bold text-lg text-gray-900">{plan.name}</h3>
                  <p className="text-sm text-gray-500">{plan.type}</p>
                </div>
                <span className="bg-green-100 text-[#10B981] text-xs font-bold px-2 py-1 rounded-full">
                  ₦{plan.price}
                </span>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-6 p-3 bg-gray-50 rounded-lg border border-gray-100">
                <FileText className="h-4 w-4 text-blue-500" />
                <span className="truncate flex-1">{plan.qsFile}</span>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" className="flex-1" onClick={() => startEditing(plan)}>Edit</Button>
                <Button variant="destructive" size="icon" className="shrink-0" onClick={() => handleDelete(plan.id)}>
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
