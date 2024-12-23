import React from 'react';
import { competencies } from './data';

export default function CoreCompetencies() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Core Competencies</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our expertise and capabilities that set us apart in the construction industry
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {competencies.map((competency, index) => {
            const Icon = competency.icon;
            return (
              <div key={index} className="bg-gray-50 p-8 rounded-lg">
                <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-green-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{competency.title}</h3>
                <p className="text-gray-600 mb-6">{competency.description}</p>
                <ul className="space-y-3">
                  {competency.points.map((point, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-700" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}