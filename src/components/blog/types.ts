export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: BlogCategory;
  image: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  readingTime: number;
  publishedAt: string;
  featured?: boolean;
}

export type BlogCategory = 'construction-tips' | 'project-updates' | 'industry-news' | 'design-trends';

export interface CategoryFilter {
  value: BlogCategory | 'all';
  label: string;
}