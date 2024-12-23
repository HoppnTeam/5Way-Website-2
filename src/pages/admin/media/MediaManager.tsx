import React, { useState } from 'react';
import AdminLayout from '../layout/AdminLayout';
import MediaUploader from './components/MediaUploader';
import MediaGrid from './components/MediaGrid';
import MediaFilter from './components/MediaFilter';
import { MediaProvider } from './context/MediaContext';
import type { MediaCategory } from './types';

export default function MediaManager() {
  const [activeCategory, setActiveCategory] = useState<MediaCategory>('all');

  return (
    <AdminLayout>
      <MediaProvider>
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Media Library</h1>
            <MediaUploader />
          </div>

          <MediaFilter
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />

          <MediaGrid category={activeCategory} />
        </div>
      </MediaProvider>
    </AdminLayout>
  );
}