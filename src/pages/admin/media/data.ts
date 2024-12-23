import { MediaItem, CategoryOption } from './types';

export const mediaCategories: CategoryOption[] = [
  { value: 'all', label: 'All Media' },
  { value: 'projects', label: 'Projects' },
  { value: 'services', label: 'Services' },
  { value: 'blog', label: 'Blog' },
  { value: 'team', label: 'Team' },
  { value: 'hero', label: 'Hero Sections' }
];

export const mediaItems: MediaItem[] = [
  {
    id: '1',
    title: 'Modern Villa Exterior',
    url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80',
    category: 'projects',
    uploadedAt: '2024-03-15',
    size: '2.4 MB'
  },
  {
    id: '2',
    title: 'Construction Site',
    url: 'https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&q=80',
    category: 'hero',
    uploadedAt: '2024-03-14',
    size: '1.8 MB'
  },
  {
    id: '3',
    title: 'Interior Design',
    url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80',
    category: 'services',
    uploadedAt: '2024-03-13',
    size: '3.1 MB'
  },
  {
    id: '4',
    title: 'Team Meeting',
    url: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80',
    category: 'team',
    uploadedAt: '2024-03-12',
    size: '1.5 MB'
  }
];