import React from 'react';
import { X, Tag, CheckCircle } from 'lucide-react';
import { AIDesign } from './types';

interface AIDesignModalProps {
  design: AIDesign;
  onClose: () => void;
}

export default function AIDesignModal({ design, onClose }: AIDesignModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
      <div className="relative bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
        >
          <X className="w-6 h-6" />
        </button>
        
        <div className="relative h-96">
          <img 
            src={design.image} 
            alt={design.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="flex items-center gap-2 mb-4">
              <Tag className="w-5 h-5 text-white" />
              <span className="text-sm font-medium text-white bg-green-700/80 px-3 py-1 rounded-full">
                {design.category.charAt(0).toUpperCase() + design.category.slice(1)}
              </span>
              <span className="text-sm font-medium text-white bg-gray-700/80 px-3 py-1 rounded-full">
                {design.style.charAt(0).toUpperCase() + design.style.slice(1)}
              </span>
            </div>
            <h2 className="text-3xl font-bold text-white">{design.title}</h2>
          </div>
        </div>

        <div className="p-8">
          <p className="text-gray-600 mb-8">{design.description}</p>

          <h3 className="text-lg font-semibold text-gray-900 mb-4">Design Features</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {design.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2 text-gray-700">
                <CheckCircle className="w-5 h-5 text-green-700" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}