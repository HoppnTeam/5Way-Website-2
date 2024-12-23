import React from 'react';
import { Pencil, Trash2, ExternalLink } from 'lucide-react';
import MediaGridItem from './MediaGridItem';
import { useMediaContext } from '../context/MediaContext';
import type { MediaCategory } from '../types';

interface MediaGridProps {
  category: MediaCategory;
}

export default function MediaGrid({ category }: MediaGridProps) {
  const { mediaItems, handleEdit, handleDelete, handleView } = useMediaContext();
  
  const filteredMedia = category === 'all' 
    ? mediaItems 
    : mediaItems.filter(item => item.category === category);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {filteredMedia.map((item) => (
        <MediaGridItem
          key={item.id}
          item={item}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onView={handleView}
        />
      ))}
    </div>
  );
}