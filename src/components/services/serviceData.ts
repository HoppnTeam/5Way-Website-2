import { Brush, Building2, Leaf, SunMedium, ClipboardList } from 'lucide-react';

export const serviceCategories = [
  {
    icon: Brush, // Changed from Paint to Brush
    title: 'Finishes',
    description: 'Premium finishing services that bring elegance and durability to every surface.',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80',
    features: [
      'Interior and exterior painting',
      'Tiling and flooring',
      'Wall texturing and wallpapering',
      'Decorative finishes'
    ]
  },
  {
    icon: Building2,
    title: 'Concrete & Masonry',
    description: 'Expert concrete solutions and masonry work for lasting foundations and structures.',
    image: 'https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&q=80',
    features: [
      'Structural concrete work',
      'Decorative concrete',
      'Brick and block laying',
      'Stone masonry'
    ]
  },
  {
    icon: Leaf,
    title: 'Landscape & Environment',
    description: 'Creating sustainable and beautiful outdoor spaces that complement your property.',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80',
    features: [
      'Landscape design',
      'Hardscape installation',
      'Irrigation systems',
      'Sustainable gardens'
    ]
  },
  {
    icon: SunMedium,
    title: 'Smart Home & Solar',
    description: 'Modern solutions for energy-efficient and intelligent living spaces.',
    image: 'https://images.unsplash.com/photo-1592833159057-6fdc2e9a0d95?auto=format&fit=crop&q=80',
    features: [
      'Solar panel installation',
      'Home automation',
      'Energy monitoring',
      'Smart security systems'
    ]
  },
  {
    icon: ClipboardList,
    title: 'Construction Project Management',
    description: 'Comprehensive project management services ensuring timely and efficient delivery.',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80',
    features: [
      'Project planning',
      'Cost management',
      'Quality control',
      'Timeline optimization'
    ]
  }
];