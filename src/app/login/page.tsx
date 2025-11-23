'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Navbar } from '@/components/landing/sections/Navbar';
import { Footer } from '@/components/landing/sections/Footer';
import { storage } from '@/lib/storage';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API login
    setTimeout(() => {
      let role: 'admin' | 'homeowner' | 'artisan' = 'homeowner';
      
      if (email.includes('admin')) {
        role = 'admin';
      } else if (email.includes('artisan')) {
        role = 'artisan';
      }

      storage.login(email, role);
      setLoading(false);
      
      if (role === 'admin') {
        router.push('/admin');
      } else {
        router.push('/dashboard');
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
        <Container className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Welcome Back
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{' '}
              <Link href="/register" className="font-medium text-[#10B981] hover:text-[#059669]">
                create a new account
              </Link>
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm space-y-4">
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  autoComplete="current-password"
                  required
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-[#10B981] focus:ring-[#10B981] border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-[#10B981] hover:text-[#059669]">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <Button className="w-full" type="submit" disabled={loading}>
                {loading ? 'Signing in...' : 'Sign in'}
              </Button>
            </div>
          </form>
        </Container>
      </div>
      <Footer />
    </div>
  );
}
