import React from 'react';
import { Target, Eye } from 'lucide-react';

export default function MissionVision() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Mission */}
          <div className="p-8 bg-white rounded-lg shadow-lg">
            <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-green-50">
              <Target className="w-8 h-8 text-green-700" />
            </div>
            <h3 className="mb-4 text-2xl font-bold text-gray-900">Our Mission</h3>
            <p className="text-gray-600">
              <strong className='text-black'>"Together We Build With Passion."</strong> <br />
              Our mission is to transform dreams into reality by delivering high-quality, innovative, and sustainable construction solutions. We are committed to building lasting relationships with our clients through transparent communication, reliable service, and exceptional craftsmanship.
            </p>
          </div>

          {/* Vision */}
          <div className="p-8 bg-white rounded-lg shadow-lg">
            <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-green-50">
              <Eye className="w-8 h-8 text-green-700" />
            </div>
            <h3 className="mb-4 text-2xl font-bold text-gray-900">Our Vision</h3>
            <p className="text-gray-600">
              To be the most trusted and innovative construction and finishing company in Nigeria, known for delivering seamless, modern, and sustainable projects that improve the lives of our clients and communities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}