import React from 'react';
import { Shield, Users, Clock, Lightbulb, Heart } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: 'Quality',
    description: 'Unwavering commitment to excellence in every project we undertake'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Working together with clients and partners to achieve shared goals'
  },
  {
    icon: Clock,
    title: 'Reliability',
    description: 'Consistent delivery of projects on time and within budget'
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Embracing new technologies and methods to improve our services'
  },
  {
    icon: Heart,
    title: 'Integrity',
    description: 'Maintaining the highest standards of professional ethics'
  }
];

export default function CoreValues() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            These principles guide our work and shape our relationships with clients, partners, and communities.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mb-4">
                <value.icon className="w-6 h-6 text-green-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}