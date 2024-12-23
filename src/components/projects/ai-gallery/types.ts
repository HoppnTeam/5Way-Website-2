export interface DesignCategory {
  id: string;
  label: string;
}

export interface DesignStyle {
  id: string;
  label: string;
}

export interface AIDesign {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  style: string;
  features: string[];
}