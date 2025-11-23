'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Plus, Pencil, Trash2, Save, X } from 'lucide-react';
import { storage, MarketPrice } from '@/lib/storage';

export default function MarketPricesPage() {
  const [prices, setPrices] = useState<MarketPrice[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<Partial<MarketPrice>>({});
  const [isAdding, setIsAdding] = useState(false);
  const [newPrice, setNewPrice] = useState<Partial<MarketPrice>>({
    name: '', price: '', unit: ''
  });

  useEffect(() => {
    setPrices(storage.getPrices());
  }, []);

  const handleSavePrices = (newPrices: MarketPrice[]) => {
    setPrices(newPrices);
    storage.savePrices(newPrices);
  };

  const handleEdit = (item: MarketPrice) => {
    setEditingId(item.id);
    setEditForm(item);
  };

  const handleUpdate = () => {
    if (!editingId) return;
    
    const updatedPrices = prices.map(p => 
      p.id === editingId 
        ? { ...p, ...editForm, lastUpdated: new Date().toISOString().split('T')[0] } as MarketPrice 
        : p
    );
    handleSavePrices(updatedPrices);
    setEditingId(null);
    setEditForm({});
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditForm({});
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this item?')) {
      const updatedPrices = prices.filter(p => p.id !== id);
      handleSavePrices(updatedPrices);
    }
  };

  const handleAdd = () => {
    if (!newPrice.name || !newPrice.price) return;
    
    const newItem: MarketPrice = {
      id: Date.now().toString(),
      name: newPrice.name,
      price: newPrice.price,
      unit: newPrice.unit || 'per unit',
      lastUpdated: new Date().toISOString().split('T')[0]
    };
    
    handleSavePrices([...prices, newItem]);
    setIsAdding(false);
    setNewPrice({ name: '', price: '', unit: '' });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Market Prices</h2>
          <p className="text-gray-500">Manage current market prices for building materials.</p>
        </div>
        <Button className="gap-2" onClick={() => setIsAdding(!isAdding)}>
          <Plus className="h-4 w-4" /> {isAdding ? 'Cancel' : 'Add New Item'}
        </Button>
      </div>

      {isAdding && (
        <Card className="border-green-100 bg-green-50/50">
          <CardContent className="pt-6">
             <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                <div>
                  <label className="text-xs font-medium text-gray-500 mb-1 block">Item Name</label>
                  <Input 
                    placeholder="e.g. Iron Rod 12mm"
                    value={newPrice.name}
                    onChange={e => setNewPrice({...newPrice, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-500 mb-1 block">Price (₦)</label>
                  <Input 
                    placeholder="e.g. 4500"
                    type="number"
                    value={newPrice.price}
                    onChange={e => setNewPrice({...newPrice, price: e.target.value})}
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-500 mb-1 block">Unit</label>
                  <Input 
                    placeholder="e.g. per length"
                    value={newPrice.unit}
                    onChange={e => setNewPrice({...newPrice, unit: e.target.value})}
                  />
                </div>
                <Button onClick={handleAdd}>Save Item</Button>
             </div>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Current Prices</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th className="px-6 py-3">Item Name</th>
                  <th className="px-6 py-3">Price (₦)</th>
                  <th className="px-6 py-3">Unit</th>
                  <th className="px-6 py-3">Last Updated</th>
                  <th className="px-6 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {prices.map((item) => (
                  <tr key={item.id} className="bg-white border-b hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">
                      {editingId === item.id ? (
                        <Input 
                          value={editForm.name} 
                          onChange={e => setEditForm({...editForm, name: e.target.value})}
                        />
                      ) : item.name}
                    </td>
                    <td className="px-6 py-4">
                      {editingId === item.id ? (
                        <Input 
                          value={editForm.price} 
                          onChange={e => setEditForm({...editForm, price: e.target.value})}
                        />
                      ) : `₦${item.price}`}
                    </td>
                    <td className="px-6 py-4">
                      {editingId === item.id ? (
                        <Input 
                          value={editForm.unit} 
                          onChange={e => setEditForm({...editForm, unit: e.target.value})}
                        />
                      ) : item.unit}
                    </td>
                    <td className="px-6 py-4">{item.lastUpdated}</td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        {editingId === item.id ? (
                          <>
                            <Button size="sm" variant="outline" onClick={handleUpdate} className="h-8 w-8 p-0 text-green-600 hover:text-green-700">
                              <Save className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="outline" onClick={handleCancel} className="h-8 w-8 p-0 text-red-600 hover:text-red-700">
                              <X className="h-4 w-4" />
                            </Button>
                          </>
                        ) : (
                          <>
                            <Button size="sm" variant="outline" onClick={() => handleEdit(item)} className="h-8 w-8 p-0">
                              <Pencil className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="outline" onClick={() => handleDelete(item.id)} className="h-8 w-8 p-0 text-red-500 hover:text-red-600 hover:bg-red-50">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
                {prices.length === 0 && (
                  <tr>
                    <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                      No prices found. Add a new item above.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
