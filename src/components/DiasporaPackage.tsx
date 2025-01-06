import React from 'react';
import { Plane, Home, CheckCircle } from 'lucide-react';
import { Button } from './ui/Button';

export default function DiasporaPackage() {
  const features = [
    'Dedicated Project Managers to Oversee Every Step',
    'Transparent Communication with Regular Updates',
    'Flexible Payment Options and Currency Transfers',
    'Trusted Team with Proven Experience',
  ];

  return (
    <div className="py-16 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <div className="flex items-center gap-3 mb-4 text-green-700">
              <Plane className="w-6 h-6" />
              <span className="font-semibold">Diaspora Callout</span>
            </div>
            <h2 className="mb-6 text-4xl font-bold text-gray-900">Bringing Your Dreams Home—For Nigerians in the Diaspora.</h2>
            <p className="mb-8 text-lg text-gray-600">
              At 5Way, we understand the challenges of building or managing a construction project from abroad. That&apos;s why we offer a seamless, transparent, and reliable process tailored for Diaspora clients. Whether you're building your dream home or managing a renovation, we handle every detail from start to finish with integrity and precision.
            </p>
            <ul className="mb-8 space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-700" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            <Button>
              Start Your Project With Us
              <Home className="w-5 h-5" />
            </Button>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80"
              alt="Modern Home"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute p-4 bg-white rounded-lg shadow-lg -bottom-6 -left-6">
              <p className="text-4xl font-bold text-green-700">150+</p>
              <p className="text-gray-600">Diaspora Projects Completed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}