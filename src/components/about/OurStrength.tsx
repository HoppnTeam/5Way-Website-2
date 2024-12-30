import React from 'react';
import { Shield, Users, Clock, Lightbulb, Heart } from 'lucide-react';


/**
 * 
 * 
 * Expertise:
 Our team of highly skilled professionals brings extensive knowledge and experience to every project, ensuring compliance with both local and international standards.
Experience:
 We have a proven track record of successfully completing residential, commercial, and public sector projects of varying complexities, with a focus on timely and cost-effective delivery.
Innovation:
 We leverage advanced technology, including AI-driven project management, smart home automation, and renewable energy solutions, to provide forward-thinking construction services tailored to our clients' needs.
Sustainability:
 We prioritize eco-friendly practices by using sustainable building materials, integrating renewable energy systems such as solar power, and employing green construction techniques that reduce waste and environmental impact.
Spirit:
 We are driven by passion, dedication, and a commitment to excellence. Our team approaches each project with enthusiasm, creativity, and a desire to build structures that stand the test of time.
 */

const strengths = [
  {
    icon: Shield,
    title: 'Expertise',
    description: 'Our team of highly skilled professionals brings extensive knowledge and experience to every project, ensuring compliance with both local and international standards.'
  },
  {
    icon: Users,
    title: 'Experience',
    description: 'We have a proven track record of successfully completing residential, commercial, and public sector projects of varying complexities, with a focus on timely and cost-effective delivery.'
  },
  {
    icon: Clock,
    title: 'Innovation',
    description: 'We leverage advanced technology, including AI-driven project management, smart home automation, and renewable energy solutions, to provide forward-thinking construction services tailored to our clients\' needs.'
  },
  {
    icon: Lightbulb,
    title: 'Sustainability',
    description: 'We prioritize eco-friendly practices by using sustainable building materials, integrating renewable energy systems such as solar power, and employing green construction techniques that reduce waste and environmental impact.'
  },
  {
    icon: Heart,
    title: 'Spirit',
    description: 'We are driven by passion, dedication, and a commitment to excellence. Our team approaches each project with enthusiasm, creativity, and a desire to build structures that stand the test of time.'
  },
];


export default function OurStrengths() {
  return (
    <div className="py-16 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">Our Strengths</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            These values guide our work and shape our relationships with clients, partners, and communities.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {strengths.map((value, index) => (
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