import React, { useState } from 'react';
import AdminLayout from '../layout/AdminLayout';
import ServiceList from './components/ServiceList';
import ServiceEditor from './components/ServiceEditor';
import { Service } from './types';

export default function ServiceManager() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <AdminLayout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Services Management</h1>
          <button
            onClick={() => {
              setSelectedService(null);
              setIsEditing(true);
            }}
            className="px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800"
          >
            Add Service
          </button>
        </div>

        {isEditing ? (
          <ServiceEditor
            service={selectedService}
            onSave={() => {
              setIsEditing(false);
              setSelectedService(null);
            }}
            onCancel={() => {
              setIsEditing(false);
              setSelectedService(null);
            }}
          />
        ) : (
          <ServiceList
            onEdit={(service) => {
              setSelectedService(service);
              setIsEditing(true);
            }}
          />
        )}
      </div>
    </AdminLayout>
  );
}