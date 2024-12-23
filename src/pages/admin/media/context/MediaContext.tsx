import React, { createContext, useContext, useState, useCallback } from 'react';
import { mediaItems as initialMediaItems } from '../data';
import type { MediaItem } from '../types';

interface MediaContextType {
  mediaItems: MediaItem[];
  handleEdit: (item: MediaItem) => void;
  handleDelete: (id: string) => void;
  handleView: (url: string) => void;
  handleUpload: (files: File[], category: string) => Promise<void>;
}

const MediaContext = createContext<MediaContextType | undefined>(undefined);

export function MediaProvider({ children }: { children: React.ReactNode }) {
  const [mediaItems, setMediaItems] = useState(initialMediaItems);

  const handleEdit = useCallback((item: MediaItem) => {
    // Implement edit logic
    console.log('Edit item:', item);
  }, []);

  const handleDelete = useCallback((id: string) => {
    setMediaItems(prev => prev.filter(item => item.id !== id));
  }, []);

  const handleView = useCallback((url: string) => {
    window.open(url, '_blank');
  }, []);

  const handleUpload = useCallback(async (files: File[], category: string) => {
    // Implement upload logic
    console.log('Upload files:', files, 'to category:', category);
  }, []);

  const value = {
    mediaItems,
    handleEdit,
    handleDelete,
    handleView,
    handleUpload
  };

  return (
    <MediaContext.Provider value={value}>
      {children}
    </MediaContext.Provider>
  );
}

export function useMediaContext() {
  const context = useContext(MediaContext);
  if (context === undefined) {
    throw new Error('useMediaContext must be used within a MediaProvider');
  }
  return context;
}