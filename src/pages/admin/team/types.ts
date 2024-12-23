export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  image: string;
  bio: string;
  email: string;
  phone: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
  };
}

export type Department = 'management' | 'engineering' | 'architecture' | 'construction' | 'support';