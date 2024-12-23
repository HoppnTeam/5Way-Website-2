import React from 'react';
import { Eye, Tag, List } from 'lucide-react';
import { AIDesign } from './types';

interface AIDesignCardProps {
  design: AIDesign;
  onClick: () => void;
}

export default function AIDesignCard({ design, onClick }: AIDesignCardProps) {
  return (
    <div 
      className="group cursor-pointer bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all"
      onClick={onClick}
    >
      <div className="relative aspect-w-16 aspect-h-9">
        <img 
          src={design.image} 
          alt={design.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <Eye className="w-8 h-8 text-white" />
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <Tag className="w-4 h-4 text-green-700" />
          <span className="text-sm font-medium text-green-700 bg-green-50 px-2 py-1 rounded-full">
            {design.category.charAt(0).toUpperCase() + design.category.slice(1)}
          </span>
          <span className="text-sm font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded-full">
            {design.style.charAt(0).toUpperCase() + design.style.slice(1)}
          </span>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{design.title}</h3>
        <p className="text-gray-600 mb-4">{design.description}</p>
        <div className="flex items-center gap-2 text-gray-500">
          <List className="w-4 h-4" />
          <span className="text-sm">{design.features.length} Features</span>
        </div>
      </div>
    </div>
  );
}