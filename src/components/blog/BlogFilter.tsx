import React from 'react';
import { categories } from './blogData';
import type { BlogCategory } from './types';

interface BlogFilterProps {
  activeCategory: BlogCategory | 'all';
  onCategoryChange: (category: BlogCategory | 'all') => void;
}

export default function BlogFilter({ activeCategory, onCategoryChange }: BlogFilterProps) {
  return (
    <div className="flex flex-wrap gap-4 justify-center mb-12">
      {categories.map(({ value, label }) => (
        <button
          key={value}
          onClick={() => onCategoryChange(value as BlogCategory | 'all')}
          className={`px-6 py-2 rounded-full transition-all ${
            activeCategory === value
              ? 'bg-green-700 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}