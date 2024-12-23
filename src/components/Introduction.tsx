import React from 'react';
import { Building2 } from 'lucide-react';

export default function Introduction() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <Building2 className="w-16 h-16 text-green-700 mb-6" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About 5Way</h2>
          <div className="max-w-3xl">
            <p className="text-lg text-gray-600">
              5Way General Contractors is Nigeria's premier construction company, dedicated to delivering exceptional building solutions. With over a decade of experience, we combine innovative techniques with traditional craftsmanship to create spaces that inspire and endure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}