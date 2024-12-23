import React from 'react';
import { processSteps } from './data';

export default function ProcessTimeline() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Process</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A systematic approach to project execution ensuring quality and efficiency
          </p>
        </div>
        <div className="space-y-8">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="flex items-start gap-8">
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon className="w-8 h-8 text-green-700" />
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg flex-grow">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                        {step.duration}
                      </span>
                    </div>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {step.tasks.map((task, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-700">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-700" />
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-green-100" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}