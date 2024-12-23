import React from 'react';
import { Plane, Home, CheckCircle } from 'lucide-react';
import { Button } from './ui/Button';

export default function DiasporaPackage() {
  const features = [
    'Land acquisition and verification',
    'Architectural design and planning',
    'Construction management',
    'Regular progress updates',
    'Quality assurance',
    'Legal documentation'
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 text-green-700 mb-4">
              <Plane className="w-6 h-6" />
              <span className="font-semibold">Diaspora Package</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Building Dreams Across Borders</h2>
            <p className="text-lg text-gray-600 mb-8">
              5Way is your trusted partner for building your dream home while abroad. From land acquisition to project management, we handle it all, so you don't have to.
            </p>
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-700" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            <Button>
              Start Your Diaspora Project Now
              <Home className="w-5 h-5" />
            </Button>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80" 
              alt="Modern Home" 
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
              <p className="text-4xl font-bold text-green-700">150+</p>
              <p className="text-gray-600">Diaspora Projects Completed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}