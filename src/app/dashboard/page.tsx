import React from 'react';
import { 
  Wallet, 
  TrendingUp, 
  Plus, 
  Building, 
  Users, 
  Calendar, 
  ArrowRight,
  PlusSquare,
  BookOpen,
  HardHat,
  CreditCard,
  Upload,
  FileText,
  Truck
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import StatCard from '@/components/dashboard/StatCard';
import QuickAction from '@/components/dashboard/QuickAction';
import ProjectCard from '@/components/dashboard/ProjectCard';
import ActivityFeed from '@/components/dashboard/ActivityFeed';
import AnnouncementsWidget from '@/components/dashboard/AnnouncementsWidget';
import RecommendedPlans from '@/components/dashboard/RecommendedPlans';
import CooperativeWidget from '@/components/dashboard/CooperativeWidget';

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Welcome back, John</h1>
        <p className="text-gray-500">Here's what's happening with your projects today.</p>
      </div>

      {/* Top Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Wallet Balance" 
          value="₦ 2,450,000" 
          trend="12% vs last month" 
          trendUp={true}
          color="emerald"
          icon={<Wallet size={20} />}
          actionLabel="Add Funds"
          actionLink="/dashboard/wallet"
        >
           <div className="h-1 w-full bg-emerald-100 rounded-full mt-3 overflow-hidden">
             <div className="h-full bg-emerald-500 w-[70%]" />
           </div>
        </StatCard>

        <StatCard 
          title="Active Projects" 
          value="2" 
          description="Avg. Progress: 45%"
          color="blue"
          icon={<Building size={20} />}
          actionLabel="View All Projects"
          actionLink="/dashboard/projects"
        >
          <div className="h-1 w-full bg-blue-100 rounded-full mt-3 overflow-hidden">
             <div className="h-full bg-blue-500 w-[45%]" />
           </div>
        </StatCard>

        <StatCard 
          title="Cooperative Savings" 
          value="₦ 850,000" 
          description="Next Contribution: Nov 25"
          color="purple"
          icon={<Users size={20} />}
          actionLabel="View Group"
          actionLink="/dashboard/cooperative"
        />

        <StatCard 
          title="Upcoming Payment" 
          value="₦ 150,000" 
          description="Due in 3 days"
          color="orange"
          icon={<Calendar size={20} />}
          actionLabel="Make Payment"
          actionLink="/dashboard/payments"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Main Column */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Active Projects */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-900">Active Projects</h2>
              <Button variant="ghost" className="text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50">
                View All <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ProjectCard 
                title="Lekki Duplex Project"
                address="12B Admiralty Way, Lekki Phase 1"
                planType="Modern 5-Bed Duplex"
                progress={65}
                phase="Roofing"
                status="active"
                lastUpdated="2 days ago"
              />
              <ProjectCard 
                title="Ibadan Family House"
                address="Plot 45, Ring Road, Ibadan"
                planType="Traditional 4-Bed Bungalow"
                progress={25}
                phase="Foundation"
                status="active"
                lastUpdated="5 hours ago"
              />
            </div>
          </section>

          {/* Recent Activity */}
          <section className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
             <ActivityFeed />
          </section>
        </div>

        {/* Right Sidebar Column */}
        <div className="space-y-8">
          
          {/* Quick Actions */}
          <section className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-3">
              <QuickAction icon={PlusSquare} label="New Project" highlight />
              <QuickAction icon={BookOpen} label="Browse Plans" />
              <QuickAction icon={Users} label="Join Co-op" />
              <QuickAction icon={HardHat} label="Find Artisans" />
              <QuickAction icon={CreditCard} label="Pay" />
              <QuickAction icon={Upload} label="Documents" />
            </div>
          </section>

          {/* Recommended Plans */}
          <RecommendedPlans />

          {/* Cooperative Widget */}
          <CooperativeWidget />

          {/* Announcements */}
          <AnnouncementsWidget />
          
        </div>
      </div>
    </div>
  );
}

