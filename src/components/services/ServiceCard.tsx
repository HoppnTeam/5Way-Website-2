import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  image: string;
  features: string[];
  index: number;
}

export default function ServiceCard({ icon: Icon, title, description, image, features, index }: ServiceCardProps) {
  const isEven = index % 2 === 0;

  return (
    <div className={`py-16 ${isEven ? 'bg-white' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
          <div className={`${isEven ? 'lg:pr-12' : 'lg:pl-12'}`}>
            <div className="flex items-center gap-3 text-green-700 mb-4">
              <Icon className="w-8 h-8" />
              <span className="text-xl font-semibold">{title}</span>
            </div>
            <p className="text-gray-600 mb-6">{description}</p>
            <ul className="space-y-3 mb-8">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2 text-gray-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-700" />
                  {feature}
                </li>
              ))}
            </ul>
            <Button variant="primary">
              Learn More
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
          <div className={`relative ${isEven ? 'lg:order-last' : 'lg:order-first'}`}>
            <img 
              src={image}
              alt={title}
              className="rounded-lg shadow-xl w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}