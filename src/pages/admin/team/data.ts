import type { TeamMember } from './types';

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Dr. Samuel Okonkwo',
    role: 'CEO & Founder',
    department: 'management',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80',
    bio: 'With over 20 years of experience in construction and project management...',
    email: 'samuel.okonkwo@5way.com.ng',
    phone: '+234 801 234 5678',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/samuel-okonkwo',
      twitter: 'https://twitter.com/samuel_okonkwo'
    }
  },
  {
    id: '2',
    name: 'Amina Ibrahim',
    role: 'Chief Operations Officer',
    department: 'management',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80',
    bio: 'Leading operations and ensuring project excellence across all our initiatives...',
    email: 'amina.ibrahim@5way.com.ng',
    phone: '+234 802 345 6789',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/amina-ibrahim'
    }
  },
  {
    id: '3',
    name: 'David Adeyemi',
    role: 'Head of Engineering',
    department: 'engineering',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
    bio: 'Spearheading innovative engineering solutions and technical excellence...',
    email: 'david.adeyemi@5way.com.ng',
    phone: '+234 803 456 7890',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/david-adeyemi',
      twitter: 'https://twitter.com/david_adeyemi'
    }
  }
];