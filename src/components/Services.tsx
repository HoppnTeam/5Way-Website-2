import React from 'react';
import { Home, Wrench, SunMedium, Building } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Renovations',
    description: 'Complete home and office renovation services tailored to your needs'
  },
  {
    icon: SunMedium,
    title: 'Smart Home & Solar',
    description: 'Modern solutions for energy-efficient and intelligent living spaces'
  },
  {
    icon: Building,
    title: 'Construction',
    description: 'Full-scale construction projects from concept to completion'
  },
  {
    icon: Wrench,
    title: 'Maintenance',
    description: 'Regular maintenance and repair services to keep your property in top condition'
  }
];

export default function Services() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <service.icon className="w-12 h-12 text-green-700 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}