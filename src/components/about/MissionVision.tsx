import React from 'react';
import { Target, Eye } from 'lucide-react';

export default function MissionVision() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Mission */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-green-700" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To deliver exceptional construction solutions that exceed client expectations through innovation, quality craftsmanship, and sustainable practices, while contributing to Nigeria's infrastructural development.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-6">
              <Eye className="w-8 h-8 text-green-700" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To be Nigeria's most trusted construction company, recognized for excellence in building innovative, sustainable, and high-quality structures that shape the future of construction in Africa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}