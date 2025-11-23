'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/#about' },
  { name: 'How It Works', href: '/#how-it-works' },
  { name: 'Building Plans', href: '/#building-plans' },
  { name: 'Pricing', href: '/#pricing' },
  { name: 'Partners', href: '/#partners' },
  { name: 'Contact', href: '/#contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const buttonBaseClass = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2";
  const ghostClass = "hover:bg-gray-100 hover:text-gray-900 text-gray-600";
  const primaryClass = "bg-[#10B981] text-white hover:bg-[#059669] shadow-sm";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      )}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-lg bg-[#10B981] flex items-center justify-center text-white font-bold text-xl">
              B
            </div>
            <span className={cn("text-xl font-bold", isScrolled ? "text-gray-900" : "text-gray-900")}>
              Build Small Small
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-[#10B981] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/login" className={cn(buttonBaseClass, ghostClass)}>
              Login
            </Link>
            <Link href="/register" className={cn(buttonBaseClass, primaryClass)}>
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg p-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-base font-medium text-gray-600 hover:text-[#10B981] py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col gap-3 mt-4 border-t border-gray-100 pt-4">
              <Link href="/login" className={cn(buttonBaseClass, ghostClass, "w-full justify-start")}>
                Login
              </Link>
              <Link href="/register" className={cn(buttonBaseClass, primaryClass, "w-full")}>
                Get Started
              </Link>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
