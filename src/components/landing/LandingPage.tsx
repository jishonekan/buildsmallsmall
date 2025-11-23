'use client';

import React from 'react';
import { Navbar } from './sections/Navbar';
import { Hero } from './sections/Hero';
import { HowItWorks } from './sections/HowItWorks';
import { BuildingPlans } from './sections/BuildingPlans';
import { BlockPrices } from './sections/BlockPrices';
import { CooperativeBuying } from './sections/CooperativeBuying';
import { UserCategories } from './sections/UserCategories';
import { Announcements } from './sections/Announcements';
import { Testimonials } from './sections/Testimonials';
import { Partners } from './sections/Partners';
import { FundingOptions } from './sections/FundingOptions';
import { Pricing } from './sections/Pricing';
import { FAQ } from './sections/FAQ';
import { CallToAction } from './sections/CallToAction';
import { Footer } from './sections/Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#10B981]/30">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <BuildingPlans />
        <BlockPrices />
        <CooperativeBuying />
        <UserCategories />
        <Announcements />
        <Testimonials />
        <Partners />
        <FundingOptions />
        <Pricing />
        <FAQ />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

