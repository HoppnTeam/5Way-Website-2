import React from 'react';
import { Pencil, Trash2, ExternalLink } from 'lucide-react';
import type { MediaItem } from '../types';

interface MediaGridItemProps {
  item: MediaItem;
  onEdit: (item: MediaItem) => void;
  onDelete: (id: string) => void;
  onView: (url: string) => void;
}

export default function MediaGridItem({ item, onEdit, onDelete, onView }: MediaGridItemProps) {
  return (
    <div className="group relative">
      <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
        <img
          src={item.url}
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
        <button 
          onClick={() => onEdit(item)}
          className="p-2 bg-white rounded-full text-gray-700 hover:text-blue-600 transition-colors"
        >
          <Pencil className="w-4 h-4" />
        </button>
        <button 
          onClick={() => onDelete(item.id)}
          className="p-2 bg-white rounded-full text-gray-700 hover:text-red-600 transition-colors"
        >
          <Trash2 className="w-4 h-4" />
        </button>
        <button 
          onClick={() => onView(item.url)}
          className="p-2 bg-white rounded-full text-gray-700 hover:text-green-600 transition-colors"
        >
          <ExternalLink className="w-4 h-4" />
        </button>
      </div>

      <div className="mt-2">
        <h3 className="text-sm font-medium text-gray-900">{item.title}</h3>
        <p className="text-xs text-gray-500">{item.category}</p>
      </div>
    </div>
  );
}