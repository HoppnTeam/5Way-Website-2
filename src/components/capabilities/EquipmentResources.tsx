import React from 'react';
import { equipment } from './data';

export default function EquipmentResources() {
  return (
    <div className="relative py-16 bg-gray-50 overflow-hidden">
      {/* Equipment Montage Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-3 grid-rows-3 h-full">
          <img 
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80" 
            alt="" 
            className="object-cover w-full h-full"
          />
          <img 
            src="https://images.unsplash.com/photo-1416331108676-a22ccb276e35?auto=format&fit=crop&q=80" 
            alt="" 
            className="object-cover w-full h-full"
          />
          <img 
            src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80" 
            alt="" 
            className="object-cover w-full h-full"
          />
          <img 
            src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80" 
            alt="" 
            className="object-cover w-full h-full"
          />
          <img 
            src="https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&q=80" 
            alt="" 
            className="object-cover w-full h-full"
          />
          <img 
            src="https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&q=80" 
            alt="" 
            className="object-cover w-full h-full"
          />
          <img 
            src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&q=80" 
            alt="" 
            className="object-cover w-full h-full"
          />
          <img 
            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80" 
            alt="" 
            className="object-cover w-full h-full"
          />
          <img 
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80" 
            alt="" 
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Equipment & Resources</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            State-of-the-art equipment and professional resources that enable us to deliver excellence
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {equipment.map((category, index) => {
            const Icon = category.icon;
            return (
              <div key={index} className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-green-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{category.category}</h3>
                <ul className="space-y-3">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-700" />
                      {item}
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