import React from 'react';
import { mediaCategories } from '../data';
import { MediaCategory } from '../types';

interface MediaFilterProps {
  activeCategory: MediaCategory;
  onCategoryChange: (category: MediaCategory) => void;
}

export default function MediaFilter({ activeCategory, onCategoryChange }: MediaFilterProps) {
  return (
    <div className="flex flex-wrap gap-3 mb-8">
      {mediaCategories.map((category) => (
        <button
          key={category.value}
          onClick={() => onCategoryChange(category.value)}
          className={`px-4 py-2 rounded-full transition-all ${
            activeCategory === category.value
              ? 'bg-green-700 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
}