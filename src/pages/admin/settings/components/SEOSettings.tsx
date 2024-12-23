import React, { useState } from 'react';
import { Save } from 'lucide-react';
import { SettingsCard } from './SettingsCard';

export default function SEOSettings() {
  const [settings, setSettings] = useState({
    defaultTitle: '5Way General Contractors Nigeria Limited',
    defaultDescription: 'Premier Construction Company in Nigeria - Building Excellence Through Innovation',
    defaultKeywords: 'construction, contractors, nigeria, building, renovation, architecture',
    googleAnalyticsId: '',
    googleVerification: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSettings(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Save settings logic here
    console.log('Saving SEO settings:', settings);
  };

  return (
    <SettingsCard
      title="SEO Settings"
      description="Configure search engine optimization settings"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="defaultTitle" className="block text-sm font-medium text-gray-700">
            Default Meta Title
          </label>
          <input
            type="text"
            id="defaultTitle"
            value={settings.defaultTitle}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          />
        </div>

        <div>
          <label htmlFor="defaultDescription" className="block text-sm font-medium text-gray-700">
            Default Meta Description
          </label>
          <textarea
            id="defaultDescription"
            value={settings.defaultDescription}
            onChange={handleChange}
            rows={3}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          />
        </div>

        <div>
          <label htmlFor="defaultKeywords" className="block text-sm font-medium text-gray-700">
            Default Meta Keywords
          </label>
          <input
            type="text"
            id="defaultKeywords"
            value={settings.defaultKeywords}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          />
          <p className="mt-1 text-sm text-gray-500">Separate keywords with commas</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="googleAnalyticsId" className="block text-sm font-medium text-gray-700">
              Google Analytics ID
            </label>
            <input
              type="text"
              id="googleAnalyticsId"
              value={settings.googleAnalyticsId}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              placeholder="UA-XXXXXXXXX-X"
            />
          </div>

          <div>
            <label htmlFor="googleVerification" className="block text-sm font-medium text-gray-700">
              Google Site Verification
            </label>
            <input
              type="text"
              id="googleVerification"
              value={settings.googleVerification}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            />
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="flex items-center gap-2 px-4 py-2 bg-green-700 text-white rounded-md hover:bg-green-800"
          >
            <Save className="w-4 h-4" />
            Save Changes
          </button>
        </div>
      </form>
    </SettingsCard>
  );
}