import { AIDesign, DesignCategory, DesignStyle } from './types';

export const designCategories: DesignCategory[] = [
  { id: 'all', label: 'All Designs' },
  { id: 'exterior', label: 'Exterior' },
  { id: 'interior', label: 'Interior' },
  { id: 'kitchen', label: 'Kitchen' },
  { id: 'bathroom', label: 'Bathroom' },
  { id: 'landscape', label: 'Landscape' }
];

export const designStyles: DesignStyle[] = [
  { id: 'all', label: 'All Styles' },
  { id: 'contemporary', label: 'Contemporary' },
  { id: 'traditional', label: 'Traditional' },
  { id: 'modern', label: 'Modern' },
  { id: 'luxury', label: 'Luxury' }
];

export const aiDesigns: AIDesign[] = [
  {
    id: '1',
    title: 'Modern Minimalist Villa',
    description: 'AI-generated concept of a minimalist luxury villa with clean lines and natural materials.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80',
    category: 'exterior',
    style: 'contemporary',
    features: ['Open concept design', 'Floor-to-ceiling windows', 'Natural stone accents']
  },
  {
    id: '2',
    title: 'Traditional Living Space',
    description: 'AI visualization of a warm, traditional living room with modern amenities.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80',
    category: 'interior',
    style: 'traditional',
    features: ['Coffered ceilings', 'Built-in bookshelves', 'Classic fireplace']
  },
  {
    id: '3',
    title: 'Luxury Pool Design',
    description: 'AI-generated concept of an infinity pool with panoramic views.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80',
    category: 'landscape',
    style: 'luxury',
    features: ['Infinity edge', 'LED lighting', 'Outdoor kitchen']
  },
  {
    id: '4',
    title: 'Smart Home Interior',
    description: 'Modern interior design with integrated smart home technology.',
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&q=80',
    category: 'interior',
    style: 'modern',
    features: ['Voice controls', 'Automated lighting', 'Climate zones']
  },
  {
    id: '5',
    title: 'Luxury Kitchen Design',
    description: 'State-of-the-art kitchen with premium appliances and elegant finishes.',
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&q=80',
    category: 'kitchen',
    style: 'luxury',
    features: ['Island with waterfall countertop', 'Smart appliances', 'Custom cabinetry', 'Wine storage']
  },
  {
    id: '6',
    title: 'Modern Kitchen Concept',
    description: 'Contemporary kitchen design with clean lines and efficient workflow.',
    image: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&q=80',
    category: 'kitchen',
    style: 'modern',
    features: ['Minimalist hardware', 'Hidden storage', 'Integrated lighting', 'Breakfast bar']
  },
  {
    id: '7',
    title: 'Spa-Like Master Bathroom',
    description: 'Luxurious bathroom design inspired by high-end spa retreats.',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80',
    category: 'bathroom',
    style: 'luxury',
    features: ['Freestanding tub', 'Rain shower', 'Heated floors', 'Double vanity']
  },
  {
    id: '8',
    title: 'Contemporary Bathroom',
    description: 'Modern bathroom design with sleek fixtures and clean aesthetics.',
    image: 'https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&q=80',
    category: 'bathroom',
    style: 'contemporary',
    features: ['Floating vanity', 'LED mirrors', 'Glass shower', 'Hidden storage']
  }
];