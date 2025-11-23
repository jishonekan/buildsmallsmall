import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Building2, ScrollText, DollarSign } from 'lucide-react';

const stats = [
  {
    title: "Total Users",
    value: "12,345",
    change: "+12% from last month",
    icon: Users,
    color: "text-blue-600",
    bg: "bg-blue-100"
  },
  {
    title: "Active Projects",
    value: "423",
    change: "+5% from last month",
    icon: Building2,
    color: "text-[#10B981]",
    bg: "bg-green-100"
  },
  {
    title: "Building Plans",
    value: "86",
    change: "+3 new this week",
    icon: ScrollText,
    color: "text-purple-600",
    bg: "bg-purple-100"
  },
  {
    title: "Total Revenue",
    value: "₦45.2M",
    change: "+18% from last month",
    icon: DollarSign,
    color: "text-yellow-600",
    bg: "bg-yellow-100"
  }
];

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">Overview</h2>
        <p className="text-gray-500">Welcome back to the admin dashboard.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">
                {stat.title}
              </CardTitle>
              <div className={`h-8 w-8 rounded-lg ${stat.bg} flex items-center justify-center ${stat.color}`}>
                <stat.icon className="h-4 w-4" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <p className="text-xs text-gray-500 mt-1">{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Activity could go here */}
    </div>
  );
}

