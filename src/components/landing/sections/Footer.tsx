'use client';

import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 border-t border-gray-800">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white font-bold text-xl">
              <div className="h-8 w-8 rounded bg-[#10B981] flex items-center justify-center text-white">B</div>
              Build Small Small
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering Nigerians to build their dream homes incrementally through cooperative financing and verified artisans.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="hover:text-[#10B981] transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="hover:text-[#10B981] transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="hover:text-[#10B981] transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="hover:text-[#10B981] transition-colors"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="hover:text-[#10B981] transition-colors">Home</Link></li>
              <li><Link href="/#about" className="hover:text-[#10B981] transition-colors">About Us</Link></li>
              <li><Link href="/#how-it-works" className="hover:text-[#10B981] transition-colors">How It Works</Link></li>
              <li><Link href="/#building-plans" className="hover:text-[#10B981] transition-colors">Building Plans</Link></li>
              <li><Link href="/partners/apply" className="hover:text-[#10B981] transition-colors">Become a Partner</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-bold mb-6">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="#" className="hover:text-[#10B981] transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-[#10B981] transition-colors">Help Center</Link></li>
              <li><Link href="#" className="hover:text-[#10B981] transition-colors">Terms & Conditions</Link></li>
              <li><Link href="#" className="hover:text-[#10B981] transition-colors">Privacy Policy</Link></li>
              <li><Link href="/#faq" className="hover:text-[#10B981] transition-colors">FAQs</Link></li>
              <li><Link href="/admin" className="hover:text-[#10B981] transition-colors text-xs opacity-50">Admin Login</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-6">Stay Updated</h4>
            <p className="text-sm text-gray-400 mb-4">
              Subscribe to our newsletter for construction tips and market updates.
            </p>
            <form className="space-y-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-[#10B981] text-sm"
              />
              <Button className="w-full bg-[#10B981] hover:bg-[#059669] text-white">Subscribe</Button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <div>
            &copy; {new Date().getFullYear()} Build Small Small. All rights reserved.
          </div>
          <div className="flex gap-6">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+234 800 123 4567</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>hello@buildsmallsmall.ng</span>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
