import { LayoutDashboard, FileText, Briefcase, Wrench, Image, Users, Settings } from 'lucide-react';
import type { AdminRoute } from '../types';

// Admin Pages
import AdminDashboard from '../AdminDashboard';
import BlogManager from '../blog/BlogManager';
import ProjectManager from '../projects/ProjectManager';
import ServiceManager from '../services/ServiceManager';
import MediaManager from '../media/MediaManager';
import TeamManager from '../team/TeamManager';
import SettingsManager from '../settings/SettingsManager';

export const adminRoutes: AdminRoute[] = [
  {
    path: '/admin',
    component: AdminDashboard,
    label: 'Dashboard',
    icon: LayoutDashboard
  },
  {
    path: '/admin/blog',
    component: BlogManager,
    label: 'Blog Management',
    icon: FileText,
    editablePages: [
      { id: 'blog-list', title: 'Blog List', path: '/blog' },
      { id: 'blog-post', title: 'Blog Post Template', path: '/blog/:id' }
    ]
  },
  {
    path: '/admin/projects',
    component: ProjectManager,
    label: 'Portfolio',
    icon: Briefcase,
    editablePages: [
      { id: 'projects-list', title: 'Projects Gallery', path: '/projects' },
      { id: 'project-detail', title: 'Project Detail Template', path: '/projects/:id' }
    ]
  },
  {
    path: '/admin/services',
    component: ServiceManager,
    label: 'Services',
    icon: Wrench,
    editablePages: [
      { id: 'services-list', title: 'Services Overview', path: '/services' },
      { id: 'service-detail', title: 'Service Detail Template', path: '/services/:id' }
    ]
  },
  {
    path: '/admin/media',
    component: MediaManager,
    label: 'Media Library',
    icon: Image
  },
  {
    path: '/admin/team',
    component: TeamManager,
    label: 'Team Members',
    icon: Users,
    editablePages: [
      { id: 'team-list', title: 'Team Overview', path: '/about#team' }
    ]
  },
  {
    path: '/admin/settings',
    component: SettingsManager,
    label: 'Settings',
    icon: Settings
  }
];