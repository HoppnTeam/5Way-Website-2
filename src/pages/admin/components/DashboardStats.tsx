import React from 'react';
import { Users, FileText, Briefcase, Activity } from 'lucide-react';

const stats = [
  {
    label: 'Total Projects',
    value: '24',
    change: '+12%',
    icon: Briefcase,
    trend: 'up'
  },
  {
    label: 'Blog Posts',
    value: '18',
    change: '+5%',
    icon: FileText,
    trend: 'up'
  },
  {
    label: 'Team Members',
    value: '12',
    change: '0%',
    icon: Users,
    trend: 'neutral'
  },
  {
    label: 'Monthly Visits',
    value: '2.4K',
    change: '+18%',
    icon: Activity,
    trend: 'up'
  }
];

export default function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div key={stat.label} className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
                <Icon className="w-6 h-6 text-green-700" />
              </div>
              <span className={`text-sm font-medium ${
                stat.trend === 'up' ? 'text-green-600' : 
                stat.trend === 'down' ? 'text-red-600' : 
                'text-gray-600'
              }`}>
                {stat.change}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
            <p className="text-sm text-gray-600">{stat.label}</p>
          </div>
        );
      })}
    </div>
  );
}