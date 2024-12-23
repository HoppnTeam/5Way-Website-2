export interface Competency {
  title: string;
  description: string;
  icon: string;
  points: string[];
}

export interface Equipment {
  category: string;
  items: string[];
  icon: string;
}

export interface ProcessStep {
  title: string;
  description: string;
  duration: string;
  icon: string;
  tasks: string[];
}