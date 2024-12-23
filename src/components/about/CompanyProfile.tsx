import React from 'react';
import { Building2 } from 'lucide-react';

export default function CompanyProfile() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 text-green-700 mb-4">
              <Building2 className="w-8 h-8" />
              <span className="text-xl font-semibold">Our Story</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Leading Construction Excellence in Nigeria
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Founded in 2010, 5Way General Contractors has grown to become one of Nigeria's most trusted construction companies. Our journey began with a vision to transform the construction landscape in Nigeria by introducing international standards and innovative building solutions.
              </p>
              <p>
                Today, we pride ourselves on delivering exceptional construction services to clients both at home and in the diaspora. Our team of experienced professionals combines technical expertise with deep local knowledge to ensure every project's success.
              </p>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80"
              alt="Construction site"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg">
              <p className="text-4xl font-bold text-green-700">13+</p>
              <p className="text-gray-600">Years of Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}