export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  subCategory: string;
  location: string;
  completionDate: string;
  description: string;
  image: string;
  features: string[];
}

export type ProjectCategory = 'residential' | 'commercial';

export interface FilterState {
  category: ProjectCategory | 'all';
  subCategory: string | 'all';
}