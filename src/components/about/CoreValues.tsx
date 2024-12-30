import React from 'react';
import { Shield, Users, Clock, Lightbulb, Heart } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Integrity',
    description: 'We operate with honesty and transparency in all our dealings, ensuring our clients\' trust is earned and maintained.'
  },
  {
    icon: Shield,
    title: 'Excellence',
    description: 'We strive for perfection in every project, delivering exceptional quality and craftsmanship that exceeds client expectations.'
  },
  {
    icon: Clock,
    title: 'Sustainability',
    description: 'We are committed to environmentally friendly practices by integrating sustainable building materials, energy-efficient systems, and green technologies in all our projects.'
  },
  {
    icon: Lightbulb,
    title: 'Customer Focus',
    description: 'Our clients are at the heart of everything we do. We listen, understand their needs, and provide personalized solutions that bring their vision to life.'
  },
  {
    icon: Users,
    title: 'Teamwork',
    description: 'We believe in the power of collaboration, fostering a positive and productive environment where our team, clients, and partners work together to achieve success.'
  },
];

export default function CoreValues() {
  return (
    <div className="py-16 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">Our Core Values</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            These principles guide our work and shape our relationships with clients, partners, and communities.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => (
            <div key={index} className="p-6 rounded-lg bg-gray-50">
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-green-50">
                <value.icon className="w-6 h-6 text-green-700" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}