import React from 'react';
import { Users, Eye, Clock, ArrowUp } from 'lucide-react';

const stats = [
  {
    label: 'Total Visitors',
    value: '12.5K',
    change: '+12%',
    icon: Users,
    color: 'blue'
  },
  {
    label: 'Page Views',
    value: '48.2K',
    change: '+18%',
    icon: Eye,
    color: 'green'
  },
  {
    label: 'Avg. Time',
    value: '3m 24s',
    change: '+5%',
    icon: Clock,
    color: 'purple'
  }
];

export default function WebsiteStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div key={stat.label} className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-2 bg-${stat.color}-50 rounded-lg`}>
                <Icon className={`w-5 h-5 text-${stat.color}-600`} />
              </div>
              <div className="flex items-center gap-1 text-green-600 text-sm">
                <ArrowUp className="w-4 h-4" />
                {stat.change}
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
            <p className="text-sm text-gray-600">{stat.label}</p>
          </div>
        );
      })}
    </div>
  );
}