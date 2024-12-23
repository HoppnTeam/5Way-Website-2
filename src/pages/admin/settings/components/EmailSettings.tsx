import React, { useState } from 'react';
import { Save } from 'lucide-react';
import { SettingsCard } from './SettingsCard';

export default function EmailSettings() {
  const [settings, setSettings] = useState({
    emailServiceId: 'service_vub6kai',
    emailTemplateId: 'template_1nfyfl5',
    emailPublicKey: 'KD2WOtECuSVelS7sj',
    notificationEmail: 'notifications@5way.com.ng'
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
    console.log('Saving email settings:', settings);
  };

  return (
    <SettingsCard
      title="Email Settings"
      description="Configure email service settings and notifications"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="emailServiceId" className="block text-sm font-medium text-gray-700">
              Email Service ID
            </label>
            <input
              type="text"
              id="emailServiceId"
              value={settings.emailServiceId}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            />
          </div>

          <div>
            <label htmlFor="emailTemplateId" className="block text-sm font-medium text-gray-700">
              Email Template ID
            </label>
            <input
              type="text"
              id="emailTemplateId"
              value={settings.emailTemplateId}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="emailPublicKey" className="block text-sm font-medium text-gray-700">
              Email Public Key
            </label>
            <input
              type="text"
              id="emailPublicKey"
              value={settings.emailPublicKey}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            />
          </div>

          <div>
            <label htmlFor="notificationEmail" className="block text-sm font-medium text-gray-700">
              Notification Email
            </label>
            <input
              type="email"
              id="notificationEmail"
              value={settings.notificationEmail}
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