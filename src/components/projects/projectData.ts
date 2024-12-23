import { Project } from './types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Luxury Villa Complex',
    category: 'residential',
    subCategory: 'new builds',
    location: 'Lekki, Lagos',
    completionDate: '2024',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80',
    description: 'Modern luxury villa with sustainable features and smart home integration.',
    features: ['Solar power system', 'Smart home automation', 'Infinity pool', 'Home theater']
  },
  {
    id: '2',
    title: 'Contemporary Apartment Renovation',
    category: 'residential',
    subCategory: 'renovations',
    location: 'Victoria Island, Lagos',
    completionDate: '2023',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80',
    description: 'Complete renovation of a high-rise apartment with modern amenities.',
    features: ['Open concept design', 'Custom cabinetry', 'Smart lighting', 'Premium finishes']
  },
  {
    id: '3',
    title: 'Modern Office Tower',
    category: 'commercial',
    subCategory: 'office spaces',
    location: 'Ikoyi, Lagos',
    completionDate: '2024',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80',
    description: 'State-of-the-art office complex with sustainable features.',
    features: ['Green building certification', 'Smart building systems', 'Collaborative spaces', 'Rooftop garden']
  },
  {
    id: '4',
    title: 'Shopping Mall Development',
    category: 'commercial',
    subCategory: 'retail',
    location: 'Port Harcourt',
    completionDate: '2023',
    image: 'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&q=80',
    description: 'Modern retail space with premium shopping experience.',
    features: ['Digital directories', 'Premium finishes', 'Food court', 'Underground parking']
  },
  {
    id: '5',
    title: 'Warehouse Complex',
    category: 'commercial',
    subCategory: 'industrial',
    location: 'Ogun State',
    completionDate: '2024',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80',
    description: 'Large-scale industrial facility with modern logistics capabilities.',
    features: ['Advanced security', 'Loading bays', 'Climate control', 'Office space']
  },
  {
    id: '6',
    title: 'Luxury Interior Design',
    category: 'residential',
    subCategory: 'interiors',
    location: 'Abuja',
    completionDate: '2023',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80',
    description: 'High-end interior design project for a penthouse apartment.',
    features: ['Custom furniture', 'Smart lighting', 'Home automation', 'Premium materials']
  }
];