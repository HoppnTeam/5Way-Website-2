export type MediaCategory = 'all' | 'projects' | 'services' | 'blog' | 'team' | 'hero';

export interface MediaItem {
  id: string;
  title: string;
  url: string;
  category: MediaCategory;
  uploadedAt: string;
  size: string;
}

export interface CategoryOption {
  value: MediaCategory;
  label: string;
}