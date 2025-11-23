'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/landing/sections/Navbar';
import { Footer } from '@/components/landing/sections/Footer';
import { Container } from '@/components/ui/container';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { CheckCircle2, FileCheck, ArrowRight, Upload, Building2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { storage, Partner } from '@/lib/storage';

type Step = 'agreement' | 'form' | 'success';

export default function PartnerApplyPage() {
  const [step, setStep] = useState<Step>('agreement');
  const [agreed, setAgreed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Form State
  const [formData, setFormData] = useState({
    companyName: '',
    category: '',
    email: '',
    phone: '',
    address: '',
    description: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Save to storage
    const newPartner: Partner = {
      id: Date.now().toString(),
      companyName: formData.companyName,
      category: formData.category,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      description: formData.description,
      status: 'Pending'
    };
    
    const existingPartners = storage.getPartners();
    storage.savePartners([...existingPartners, newPartner]);

    setTimeout(() => {
      setIsSubmitting(false);
      setStep('success');
      window.scrollTo(0, 0);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-20">
        <Container className="max-w-3xl">
          <div className="mb-10 text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Become a Partner</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join our network of trusted suppliers, financial institutions, and service providers.
            </p>
          </div>

          {/* Progress Steps */}
          <div className="mb-12 flex items-center justify-center gap-4 text-sm font-medium">
            <div className={cn("flex items-center gap-2", step === 'agreement' ? "text-[#10B981]" : "text-gray-900")}>
              <div className={cn("h-8 w-8 rounded-full flex items-center justify-center border-2", step === 'agreement' ? "border-[#10B981] bg-[#10B981] text-white" : "border-[#10B981] bg-[#10B981] text-white")}>1</div>
              <span>Agreement</span>
            </div>
            <div className="h-0.5 w-12 bg-gray-200" />
            <div className={cn("flex items-center gap-2", step === 'form' ? "text-[#10B981]" : step === 'success' ? "text-gray-900" : "text-gray-400")}>
              <div className={cn("h-8 w-8 rounded-full flex items-center justify-center border-2", step === 'form' ? "border-[#10B981] bg-[#10B981] text-white" : step === 'success' ? "border-[#10B981] bg-[#10B981] text-white" : "border-gray-200 text-gray-400")}>2</div>
              <span>Application</span>
            </div>
            <div className="h-0.5 w-12 bg-gray-200" />
            <div className={cn("flex items-center gap-2", step === 'success' ? "text-[#10B981]" : "text-gray-400")}>
              <div className={cn("h-8 w-8 rounded-full flex items-center justify-center border-2", step === 'success' ? "border-[#10B981] bg-[#10B981] text-white" : "border-gray-200 text-gray-400")}>3</div>
              <span>Done</span>
            </div>
          </div>

          {step === 'agreement' && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileCheck className="h-6 w-6 text-[#10B981]" />
                  Partner Agreement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-sm max-w-none h-96 overflow-y-auto bg-gray-50 p-6 rounded-lg border border-gray-100 mb-6 text-gray-600">
                  <h3 className="font-bold text-gray-900 mt-0">1. Introduction</h3>
                  <p>This Partnership Agreement ("Agreement") constitutes a legally binding contract between Build Small Small ("Platform") and the applicant ("Partner"). By submitting an application, you agree to adhere to the terms outlined below.</p>
                  
                  <h3 className="font-bold text-gray-900">2. Partner Obligations</h3>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Partners must provide valid government-issued identification and business registration documents (CAC).</li>
                    <li>All products and services provided must meet the quality standards set by the Standards Organization of Nigeria (SON).</li>
                    <li>Partners agree to offer the agreed-upon discounts to Platform users.</li>
                    <li>Partners must maintain high ethical standards and transparency in all dealings.</li>
                  </ul>

                  <h3 className="font-bold text-gray-900">3. Platform Fees & Payments</h3>
                  <p>The Platform charges a commission on successful transactions as detailed in the fee schedule. Payments will be processed within 48 hours of delivery confirmation.</p>

                  <h3 className="font-bold text-gray-900">4. Termination</h3>
                  <p>The Platform reserves the right to terminate this agreement if the Partner violates any terms or engages in fraudulent activities.</p>
                  
                  <p className="mt-8">... (Scroll to read full agreement)</p>
                </div>

                <div className="flex items-center space-x-2 mb-6">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="h-4 w-4 rounded border-gray-300 text-[#10B981] focus:ring-[#10B981]"
                  />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I have read and agree to the Partner Agreement terms and conditions.
                  </label>
                </div>

                <Button 
                  onClick={() => setStep('form')} 
                  disabled={!agreed}
                  className="w-full"
                >
                  Continue to Application <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          )}

          {step === 'form' && (
            <Card>
              <CardHeader>
                <CardTitle>Partner Application Form</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="companyName">Company / Business Name</Label>
                      <Input 
                        id="companyName" 
                        required 
                        placeholder="e.g. ABC Construction Ltd" 
                        value={formData.companyName}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="category">Partner Category</Label>
                      <select 
                        className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" 
                        id="category"
                        required
                        value={formData.category}
                        onChange={handleInputChange}
                      >
                        <option value="">Select a category</option>
                        <option value="Material Supplier">Material Supplier</option>
                        <option value="Construction Contractor">Construction Contractor</option>
                        <option value="Financial Institution">Financial Institution</option>
                        <option value="Logistics Provider">Logistics Provider</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Business Email</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        required 
                        placeholder="partner@company.com" 
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        required 
                        placeholder="+234..." 
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="address">Physical Address</Label>
                      <Input 
                        id="address" 
                        required 
                        placeholder="Head office address" 
                        value={formData.address}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="description">Business Description</Label>
                      <Textarea 
                        id="description" 
                        placeholder="Tell us about your services and capacity..." 
                        value={formData.description}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="space-y-4 border-t border-gray-100 pt-6">
                    <h3 className="font-bold text-gray-900">Document Uploads</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="border-2 border-dashed border-gray-200 rounded-lg p-6 text-center hover:bg-gray-50 transition-colors cursor-pointer">
                        <Upload className="h-6 w-6 mx-auto text-gray-400 mb-2" />
                        <span className="text-sm font-medium text-gray-700">CAC Certificate</span>
                        <p className="text-xs text-gray-500 mt-1">PDF or Image (Max 5MB)</p>
                      </div>
                      <div className="border-2 border-dashed border-gray-200 rounded-lg p-6 text-center hover:bg-gray-50 transition-colors cursor-pointer">
                        <Upload className="h-6 w-6 mx-auto text-gray-400 mb-2" />
                        <span className="text-sm font-medium text-gray-700">Company Profile</span>
                        <p className="text-xs text-gray-500 mt-1">PDF (Max 10MB)</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <Button type="button" variant="outline" onClick={() => setStep('agreement')}>Back</Button>
                    <Button type="submit" className="flex-1" disabled={isSubmitting}>
                      {isSubmitting ? 'Submitting...' : 'Submit Application'}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}

          {step === 'success' && (
            <Card className="text-center py-12">
              <CardContent className="space-y-6">
                <div className="h-20 w-20 bg-green-100 rounded-full flex items-center justify-center mx-auto text-[#10B981]">
                  <CheckCircle2 className="h-10 w-10" />
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold text-gray-900">Application Submitted!</h2>
                  <p className="text-gray-600 max-w-md mx-auto">
                    Thank you for applying to partner with Build Small Small. Our team will review your documents and contact you within 3-5 business days.
                  </p>
                </div>
                <Button onClick={() => window.location.href = '/'} variant="outline">
                  Return to Home
                </Button>
              </CardContent>
            </Card>
          )}
        </Container>
      </main>
      
      <Footer />
    </div>
  );
}
