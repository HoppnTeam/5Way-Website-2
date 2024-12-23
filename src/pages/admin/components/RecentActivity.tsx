import React from 'react';
import { FileText, Briefcase, Users, Clock } from 'lucide-react';

const activities = [
  {
    type: 'project',
    icon: Briefcase,
    title: 'New Project Added',
    description: 'Luxury Villa Complex in Lekki',
    time: '2 hours ago'
  },
  {
    type: 'blog',
    icon: FileText,
    title: 'Blog Post Published',
    description: 'Sustainable Building Practices in Nigeria',
    time: '4 hours ago'
  },
  {
    type: 'team',
    icon: Users,
    title: 'Team Member Added',
    description: 'New Project Manager joined the team',
    time: '1 day ago'
  }
];

export default function RecentActivity() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
      <div className="space-y-6">
        {activities.map((activity, index) => {
          const Icon = activity.icon;
          return (
            <div key={index} className="flex items-start gap-4">
              <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon className="w-4 h-4 text-green-700" />
              </div>
              <div className="flex-grow">
                <h3 className="text-sm font-medium text-gray-900">{activity.title}</h3>
                <p className="text-sm text-gray-600">{activity.description}</p>
                <div className="flex items-center gap-1 mt-1">
                  <Clock className="w-3 h-3 text-gray-400" />
                  <span className="text-xs text-gray-500">{activity.time}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}