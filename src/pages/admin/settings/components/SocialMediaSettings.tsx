import React, { useState } from 'react';
import { Save } from 'lucide-react';
import { SettingsCard } from './SettingsCard';

export default function SocialMediaSettings() {
  const [settings, setSettings] = useState({
    facebook: 'https://facebook.com/5waycontractors',
    twitter: 'https://twitter.com/5waycontractors',
    instagram: 'https://instagram.com/5waycontractors',
    linkedin: 'https://linkedin.com/company/5waycontractors',
    youtube: 'https://youtube.com/5waycontractors'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSettings(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Save settings logic here
    console.log('Saving social media settings:', settings);
  };

  return (
    <SettingsCard
      title="Social Media Settings"
      description="Configure your social media profile links"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="facebook" className="block text-sm font-medium text-gray-700">
              Facebook URL
            </label>
            <input
              type="url"
              id="facebook"
              value={settings.facebook}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            />
          </div>

          <div>
            <label htmlFor="twitter" className="block text-sm font-medium text-gray-700">
              Twitter URL
            </label>
            <input
              type="url"
              id="twitter"
              value={settings.twitter}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            />
          </div>

          <div>
            <label htmlFor="instagram" className="block text-sm font-medium text-gray-700">
              Instagram URL
            </label>
            <input
              type="url"
              id="instagram"
              value={settings.instagram}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            />
          </div>

          <div>
            <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700">
              LinkedIn URL
            </label>
            <input
              type="url"
              id="linkedin"
              value={settings.linkedin}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            />
          </div>

          <div>
            <label htmlFor="youtube" className="block text-sm font-medium text-gray-700">
              YouTube URL
            </label>
            <input
              type="url"
              id="youtube"
              value={settings.youtube}
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