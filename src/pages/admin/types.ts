import { LucideIcon } from 'lucide-react';

export interface EditablePage {
  id: string;
  title: string;
  path: string;
}

export interface AdminRoute {
  path: string;
  component: React.ComponentType;
  label: string;
  icon: LucideIcon;
  editablePages?: EditablePage[];
}

export interface AdminPageProps {
  route?: AdminRoute;
}