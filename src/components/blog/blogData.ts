import { BlogPost } from './types';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Sustainable Building Practices in Modern Nigerian Construction',
    excerpt: 'Exploring eco-friendly construction methods and materials that are transforming the Nigerian building industry.',
    content: 'Full article content here...',
    category: 'industry-news',
    image: 'https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?auto=format&fit=crop&q=80',
    author: {
      name: 'Dr. Samuel Okonkwo',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80',
      role: 'Chief Architect'
    },
    readingTime: 5,
    publishedAt: '2024-03-15',
    featured: true
  },
  {
    id: '2',
    title: 'Essential Home Maintenance Tips for the Rainy Season',
    excerpt: 'Practical tips to protect your home during Nigeria\'s rainy season.',
    content: 'Full article content here...',
    category: 'construction-tips',
    image: 'https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&q=80',
    author: {
      name: 'Amina Ibrahim',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80',
      role: 'Maintenance Specialist'
    },
    readingTime: 4,
    publishedAt: '2024-03-12'
  },
  {
    id: '3',
    title: 'Latest Trends in Smart Home Technology',
    excerpt: 'Discover the newest smart home innovations transforming Nigerian homes.',
    content: 'Full article content here...',
    category: 'design-trends',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80',
    author: {
      name: 'David Adeyemi',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
      role: 'Tech Integration Specialist'
    },
    readingTime: 6,
    publishedAt: '2024-03-10'
  },
  {
    id: '4',
    title: 'Lekki Gardens Phase 2: Construction Update',
    excerpt: 'Progress report on our latest residential development project.',
    content: 'Full article content here...',
    category: 'project-updates',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80',
    author: {
      name: 'Grace Okafor',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80',
      role: 'Project Manager'
    },
    readingTime: 3,
    publishedAt: '2024-03-08'
  }
];

export const categories = [
  { value: 'all', label: 'All Posts' },
  { value: 'construction-tips', label: 'Construction Tips' },
  { value: 'project-updates', label: 'Project Updates' },
  { value: 'industry-news', label: 'Industry News' },
  { value: 'design-trends', label: 'Design Trends' }
];