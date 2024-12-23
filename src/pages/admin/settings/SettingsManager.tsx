import React from 'react';
import AdminLayout from '../layout/AdminLayout';
import GeneralSettings from './components/GeneralSettings';
import EmailSettings from './components/EmailSettings';
import SocialMediaSettings from './components/SocialMediaSettings';
import SEOSettings from './components/SEOSettings';

export default function SettingsManager() {
  return (
    <AdminLayout>
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Settings</h1>
        
        <div className="space-y-6">
          <GeneralSettings />
          <EmailSettings />
          <SocialMediaSettings />
          <SEOSettings />
        </div>
      </div>
    </AdminLayout>
  );
}