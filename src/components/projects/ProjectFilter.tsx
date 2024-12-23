import React from 'react';
import { FilterState, ProjectCategory } from './types';

interface ProjectFilterProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
}

const categories: { value: ProjectCategory | 'all'; label: string }[] = [
  { value: 'all', label: 'All Projects' },
  { value: 'residential', label: 'Residential' },
  { value: 'commercial', label: 'Commercial' }
];

const subCategories = {
  residential: ['all', 'new builds', 'renovations', 'interiors'],
  commercial: ['all', 'office spaces', 'retail', 'industrial']
};

export default function ProjectFilter({ filters, onFilterChange }: ProjectFilterProps) {
  const currentSubCategories = filters.category === 'all' 
    ? ['all'] 
    : subCategories[filters.category];

  return (
    <div className="flex flex-col gap-6 mb-12">
      {/* Main Categories */}
      <div className="flex flex-wrap gap-4 justify-center">
        {categories.map(({ value, label }) => (
          <button
            key={value}
            onClick={() => onFilterChange({ category: value, subCategory: 'all' })}
            className={`px-6 py-2 rounded-full transition-all ${
              filters.category === value
                ? 'bg-green-700 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Sub Categories */}
      {filters.category !== 'all' && (
        <div className="flex flex-wrap gap-3 justify-center">
          {currentSubCategories.map((subCategory) => (
            <button
              key={subCategory}
              onClick={() => onFilterChange({ ...filters, subCategory })}
              className={`px-4 py-1 rounded-full text-sm transition-all ${
                filters.subCategory === subCategory
                  ? 'bg-green-100 text-green-700'
                  : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
              }`}
            >
              {subCategory === 'all' ? 'All' : subCategory}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}