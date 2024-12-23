import React from 'react';
import { designCategories, designStyles } from './data';

interface FilterProps {
  activeCategory: string;
  activeStyle: string;
  onCategoryChange: (category: string) => void;
  onStyleChange: (style: string) => void;
}

export default function AIGalleryFilter({
  activeCategory,
  activeStyle,
  onCategoryChange,
  onStyleChange
}: FilterProps) {
  return (
    <div className="space-y-6 mb-12">
      {/* Categories */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Design Categories</h3>
        <div className="flex flex-wrap gap-3">
          {designCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`px-4 py-2 rounded-full transition-all ${
                activeCategory === category.id
                  ? 'bg-green-700 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      {/* Styles */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Design Styles</h3>
        <div className="flex flex-wrap gap-3">
          {designStyles.map((style) => (
            <button
              key={style.id}
              onClick={() => onStyleChange(style.id)}
              className={`px-4 py-2 rounded-full transition-all ${
                activeStyle === style.id
                  ? 'bg-green-100 text-green-700 border border-green-700'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              {style.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}