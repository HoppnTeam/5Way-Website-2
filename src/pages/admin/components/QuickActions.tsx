import React from 'react';
import { Plus, FileText, Image, Users } from 'lucide-react';

const actions = [
  {
    label: 'Add New Project',
    icon: Plus,
    path: '/admin/projects',
    color: 'bg-blue-50 text-blue-700'
  },
  {
    label: 'Create Blog Post',
    icon: FileText,
    path: '/admin/blog',
    color: 'bg-purple-50 text-purple-700'
  },
  {
    label: 'Upload Media',
    icon: Image,
    path: '/admin/media',
    color: 'bg-orange-50 text-orange-700'
  },
  {
    label: 'Manage Team',
    icon: Users,
    path: '/admin/team',
    color: 'bg-green-50 text-green-700'
  }
];

export default function QuickActions() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
      <div className="grid grid-cols-2 gap-4">
        {actions.map((action) => {
          const Icon = action.icon;
          return (
            <button
              key={action.label}
              className="flex flex-col items-center justify-center p-4 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors"
            >
              <div className={`w-10 h-10 ${action.color} rounded-lg flex items-center justify-center mb-2`}>
                <Icon className="w-5 h-5" />
              </div>
              <span className="text-sm text-gray-700">{action.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}