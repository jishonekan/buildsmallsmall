'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Plus, Search, Mail, Phone, CheckCircle, XCircle, Trash2 } from 'lucide-react';
import { storage, Partner } from '@/lib/storage';

export default function PartnersPage() {
  const [partners, setPartners] = useState<Partner[]>([]);

  useEffect(() => {
    setPartners(storage.getPartners());
  }, []);

  const handleUpdateStatus = (id: string, status: Partner['status']) => {
    const updatedPartners = partners.map(p => 
      p.id === id ? { ...p, status } : p
    );
    setPartners(updatedPartners);
    storage.savePartners(updatedPartners);
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to remove this partner?')) {
      const updatedPartners = partners.filter(p => p.id !== id);
      setPartners(updatedPartners);
      storage.savePartners(updatedPartners);
    }
  };

  // Separate into pending and approved/rejected
  const pendingPartners = partners.filter(p => p.status === 'Pending');
  const activePartners = partners.filter(p => p.status === 'Approved');

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Partners</h2>
          <p className="text-gray-500">Manage partner relationships and review applications.</p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Active Partners */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Active Partners</CardTitle>
          </CardHeader>
          <CardContent>
            {activePartners.length === 0 ? (
              <p className="text-gray-500 text-sm">No active partners yet.</p>
            ) : (
              <div className="space-y-4">
                {activePartners.map((partner) => (
                  <div key={partner.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-100">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded bg-gray-200 flex items-center justify-center text-gray-500 font-bold">
                        {partner.companyName.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">{partner.companyName}</h4>
                        <p className="text-sm text-gray-500">{partner.category}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" onClick={() => handleUpdateStatus(partner.id, 'Pending')}>Suspend</Button>
                      <Button variant="destructive" size="icon" className="h-8 w-8" onClick={() => handleDelete(partner.id)}>
                         <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Applications */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Pending Applications</CardTitle>
          </CardHeader>
          <CardContent>
            {pendingPartners.length === 0 ? (
               <p className="text-gray-500 text-sm">No pending applications.</p>
            ) : (
              <div className="space-y-4">
                {pendingPartners.map((partner) => (
                  <div key={partner.id} className="p-6 border border-gray-200 rounded-xl hover:border-gray-300 transition-colors">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg">{partner.companyName}</h4>
                        <p className="text-xs text-gray-400 mb-1">{partner.category}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
                          <span className="flex items-center gap-1"><Mail className="h-3 w-3" /> {partner.email}</span>
                          <span className="flex items-center gap-1"><Phone className="h-3 w-3" /> {partner.phone}</span>
                        </div>
                      </div>
                      <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded-full">
                        Pending Review
                      </span>
                    </div>
                    
                    <div className="bg-gray-50 p-3 rounded text-sm text-gray-600 mb-4">
                      {partner.description}
                    </div>
                    <div className="text-xs text-gray-400 mb-4">
                       Address: {partner.address}
                    </div>

                    <div className="flex items-center gap-3">
                      <Button size="sm" className="gap-2 bg-green-600 hover:bg-green-700" onClick={() => handleUpdateStatus(partner.id, 'Approved')}>
                        <CheckCircle className="h-4 w-4" /> Approve
                      </Button>
                      <Button size="sm" variant="outline" className="gap-2 text-red-600 hover:text-red-700 hover:bg-red-50" onClick={() => handleUpdateStatus(partner.id, 'Rejected')}>
                        <XCircle className="h-4 w-4" /> Reject
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
