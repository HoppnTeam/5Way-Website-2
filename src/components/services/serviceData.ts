import { Brush, Building2, Leaf, SunMedium, ClipboardList } from 'lucide-react';

export const serviceCategories = [
  {
    icon: Brush, // Changed from Paint to Brush
    title: 'Finishes',
    description: 'Transforming Spaces with Precision and Style',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80',
    features: [
      'Interior and exterior painting',
      'Custom Tiling and Flooring',
      'Epoxy Coatings',
      'Roof Coatings',
      'Building Restoration & Renovation',
      'Pressure Washing & Cleaning',
    ]
  },
  {
    icon: Building2,
    title: 'Concrete & Masonry',
    description: 'Building Strong, Lasting Foundations',
    image: 'https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&q=80',
    features: [
      "Concrete Installation & Finishing",
      "Custom Building Blocks",
      "Retaining Walls and Foundations",
      "Decorative Concrete Floors",
      "Perimeter Fencing",
      "Driveways, Walkways, and Sitouts"
    ]
  },
  {
    icon: Leaf,
    title: 'Landscape & Environment',
    description: 'Enhancing Outdoor Living Spaces',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80',
    features: [
      "Landscaping Design & Installation",
      "Parks and Urban Garden Maintenance",
      "Water Features and Hardscaping",
      "Environmental Restoration and Erosion Control",
      "Flood Mitigation & Control ",
      "Recreation &  Leisure Spaces setup"
    ]
  },
  {
    icon: SunMedium,
    title: 'Smart Home & Solar Energy',
    description: 'Elevating Homes with Smart Technology and Renewable Energy',
    image: 'https://images.unsplash.com/photo-1592833159057-6fdc2e9a0d95?auto=format&fit=crop&q=80',
    features: [
      "Smart Home Automation",
      "Home Energy Storage Systems",
      "Solar Lighting and Power Installation",
      "Solar Street Lights and 4G Cameras",
      "Smart Monitoring Sensors",
      "Smart Security Solutions"

    ]
  },
  {
    icon: ClipboardList,
    title: 'Construction Project Management',
    description: 'Ensuring Seamless Project Execution',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80',
    features: [
      "Full Project Planning and Coordination",
      "Site Assessments and Surveys",
      "Budget and Timeline Management",
      "Quality Control and Safety Compliance",
      "Architectural & Engineering ( MEP) Designs",
      "Facilities Management"
    ]
  }
];