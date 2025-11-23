import React from 'react';
import { Button } from '@/components/ui/button';
import { Plus, Filter } from 'lucide-react';
import ProjectCard from '@/components/dashboard/ProjectCard';

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">My Projects</h1>
          <p className="text-gray-500">Manage and track your building projects</p>
        </div>
        <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
          <Plus size={16} className="mr-2" /> New Project
        </Button>
      </div>

      <div className="flex gap-4 mb-6">
        <div className="relative flex-1">
           <input 
            type="text" 
            placeholder="Search projects..." 
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
           />
        </div>
        <Button variant="outline" className="flex items-center gap-2">
          <Filter size={16} /> Filter
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
         {/* Empty State / Add New Placeholder */}
         <button className="border-2 border-dashed border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center text-gray-400 hover:border-emerald-400 hover:text-emerald-500 transition-colors min-h-[300px]">
            <Plus size={48} className="mb-4" />
            <span className="font-medium">Create New Project</span>
         </button>
      </div>
    </div>
  );
}

