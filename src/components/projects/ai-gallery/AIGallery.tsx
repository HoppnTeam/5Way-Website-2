import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import AIGalleryFilter from './AIGalleryFilter';
import AIDesignCard from './AIDesignCard';
import AIDesignModal from './AIDesignModal';
import { aiDesigns } from './data';
import { AIDesign } from './types';

export default function AIGallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeStyle, setActiveStyle] = useState('all');
  const [selectedDesign, setSelectedDesign] = useState<AIDesign | null>(null);

  const filteredDesigns = aiDesigns.filter(design => {
    const categoryMatch = activeCategory === 'all' || design.category === activeCategory;
    const styleMatch = activeStyle === 'all' || design.style === activeStyle;
    return categoryMatch && styleMatch;
  });

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 text-green-700 mb-4">
            <Sparkles className="w-8 h-8" />
            <span className="text-xl font-semibold">AI-Generated Designs</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Explore Future Possibilities
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover AI-generated architectural concepts and design inspirations for your next project
          </p>
        </div>

        <AIGalleryFilter
          activeCategory={activeCategory}
          activeStyle={activeStyle}
          onCategoryChange={setActiveCategory}
          onStyleChange={setActiveStyle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDesigns.map((design) => (
            <AIDesignCard
              key={design.id}
              design={design}
              onClick={() => setSelectedDesign(design)}
            />
          ))}
        </div>

        {selectedDesign && (
          <AIDesignModal
            design={selectedDesign}
            onClose={() => setSelectedDesign(null)}
          />
        )}
      </div>
    </div>
  );
}