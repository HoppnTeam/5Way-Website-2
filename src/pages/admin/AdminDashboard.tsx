import React from 'react';
import { adminRoutes } from './routes/adminRoutes';
import EditablePagesList from './components/EditablePagesList';
import WebsiteStats from './components/WebsiteStats';
import QuickActions from './components/QuickActions';

export default function AdminDashboard() {
  // Get all editable pages from routes
  const editablePages = adminRoutes
    .filter(route => route.editablePages)
    .flatMap(route => route.editablePages || []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Manage your website content and monitor performance</p>
        </div>

        <WebsiteStats />

        <div className="mt-8">
          <QuickActions />
        </div>

        <div className="mt-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Editable Pages</h2>
          <EditablePagesList pages={editablePages} />
        </div>
      </div>
    </div>
  );
}