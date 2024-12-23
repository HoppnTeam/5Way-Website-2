import React from 'react';
import { Award, Shield, Clock, MapPin } from 'lucide-react';

const reasons = [
  {
    icon: Award,
    title: 'Professional Expertise',
    description: 'Our team of certified professionals brings years of industry experience and technical knowledge.'
  },
  {
    icon: Shield,
    title: 'Quality Assurance',
    description: 'We maintain rigorous quality control standards throughout every phase of construction.'
  },
  {
    icon: Clock,
    title: 'Timely Delivery',
    description: 'We pride ourselves on completing projects within agreed timelines without compromising quality.'
  },
  {
    icon: MapPin,
    title: 'Local Understanding',
    description: 'Deep knowledge of Nigerian construction landscape, regulations, and market dynamics.'
  }
];

export default function WhyChooseUs() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We combine expertise, quality, and dedication to deliver exceptional construction solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-4">
                <reason.icon className="w-6 h-6 text-green-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}