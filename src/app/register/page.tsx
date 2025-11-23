'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Navbar } from '@/components/landing/sections/Navbar';
import { Footer } from '@/components/landing/sections/Footer';
import { Input } from '@/components/ui/input';
import { storage } from '@/lib/storage';
import { useRouter } from 'next/navigation';
import { Home, Hammer } from 'lucide-react';
import { cn } from '@/lib/utils';

type AccountType = 'homeowner' | 'artisan';

export default function RegisterPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [accountType, setAccountType] = useState<AccountType>('homeowner');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate registration
    setTimeout(() => {
      storage.login(formData.email, accountType);
      setLoading(false);
      router.push('/dashboard');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
        <Container className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Create your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Start building your dream home today.{' '}
              <Link href="/login" className="font-medium text-[#10B981] hover:text-[#059669]">
                Already have an account?
              </Link>
            </p>
          </div>

          {/* Account Type Selector */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <button
              type="button"
              onClick={() => setAccountType('homeowner')}
              className={cn(
                "flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all duration-200",
                accountType === 'homeowner'
                  ? "border-emerald-500 bg-emerald-50 text-emerald-700"
                  : "border-gray-100 bg-gray-50 text-gray-500 hover:bg-gray-100"
              )}
            >
              <Home className={cn("w-6 h-6 mb-2", accountType === 'homeowner' && "fill-emerald-200")} />
              <span className="text-sm font-medium">I'm a Homeowner</span>
            </button>

            <button
              type="button"
              onClick={() => setAccountType('artisan')}
              className={cn(
                "flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all duration-200",
                accountType === 'artisan'
                  ? "border-emerald-500 bg-emerald-50 text-emerald-700"
                  : "border-gray-100 bg-gray-50 text-gray-500 hover:bg-gray-100"
              )}
            >
              <Hammer className={cn("w-6 h-6 mb-2", accountType === 'artisan' && "fill-emerald-200")} />
              <span className="text-sm font-medium">I'm an Artisan</span>
            </button>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm space-y-4">
              <div>
                <label htmlFor="name" className="sr-only">
                  Full Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <Input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  required
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                required
                className="h-4 w-4 text-[#10B981] focus:ring-[#10B981] border-gray-300 rounded"
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                I agree to the <a href="#" className="text-[#10B981]">Terms and Conditions</a>
              </label>
            </div>

            <div>
              <Button className="w-full" type="submit" disabled={loading}>
                {loading ? 'Creating Account...' : 'Register'}
              </Button>
            </div>
          </form>
        </Container>
      </div>
      <Footer />
    </div>
  );
}
