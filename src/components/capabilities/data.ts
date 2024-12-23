import { 
  Cog, 
  Users, 
  ClipboardCheck,
  Wrench,
  HardHat,
  Building2,
  FileCheck,
  Truck,
  Workflow,
  CheckCircle2,
  Key
} from 'lucide-react';

import { Competency, Equipment, ProcessStep } from './types';

export const competencies: Competency[] = [
  {
    title: 'Technical Expertise',
    description: 'Industry-leading technical knowledge and implementation capabilities',
    icon: Cog,
    points: [
      'Advanced construction methodologies',
      'Sustainable building practices',
      'Smart home integration',
      'Energy-efficient solutions'
    ]
  },
  {
    title: 'Project Management',
    description: 'Comprehensive project management and coordination',
    icon: Users,
    points: [
      'Real-time project tracking',
      'Resource optimization',
      'Risk management',
      'Stakeholder communication'
    ]
  },
  {
    title: 'Quality Control',
    description: 'Rigorous quality assurance at every stage',
    icon: ClipboardCheck,
    points: [
      'Material testing',
      'Construction supervision',
      'Quality documentation',
      'Regular inspections'
    ]
  }
];

export const equipment: Equipment[] = [
  {
    category: 'Construction Equipment',
    icon: Wrench,
    items: [
      'Heavy machinery',
      'Specialized tools',
      'Safety equipment',
      'Testing instruments'
    ]
  },
  {
    category: 'Professional Team',
    icon: HardHat,
    items: [
      'Certified engineers',
      'Skilled craftsmen',
      'Project managers',
      'Safety officers'
    ]
  },
  {
    category: 'Industry Partners',
    icon: Building2,
    items: [
      'Material suppliers',
      'Technology providers',
      'Design consultants',
      'Quality certifiers'
    ]
  }
];

export const processSteps: ProcessStep[] = [
  {
    title: 'Planning Phase',
    description: 'Comprehensive project planning and preparation',
    duration: '2-4 weeks',
    icon: FileCheck,
    tasks: [
      'Requirements analysis',
      'Design development',
      'Cost estimation',
      'Timeline planning'
    ]
  },
  {
    title: 'Execution Phase',
    description: 'Systematic project implementation',
    duration: 'Project specific',
    icon: Truck,
    tasks: [
      'Site preparation',
      'Construction work',
      'Installation services',
      'Progress monitoring'
    ]
  },
  {
    title: 'Quality Control',
    description: 'Continuous quality assurance',
    duration: 'Ongoing',
    icon: Workflow,
    tasks: [
      'Regular inspections',
      'Testing procedures',
      'Documentation',
      'Issue resolution'
    ]
  },
  {
    title: 'Project Handover',
    description: 'Smooth transition and project completion',
    duration: '1-2 weeks',
    icon: Key,
    tasks: [
      'Final inspection',
      'Documentation handover',
      'Training sessions',
      'Warranty setup'
    ]
  }
];