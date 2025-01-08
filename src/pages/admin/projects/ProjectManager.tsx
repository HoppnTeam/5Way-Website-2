import  { useState } from 'react';
import AdminLayout from '../layout/AdminLayout';
import ProjectList from './components/ProjectList';
import ProjectEditor from './components/ProjectEditor';
import { Project } from '../../../components/projects/types';

export default function ProjectManager() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <AdminLayout>
      <div className="w-full p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Portfolio Management</h1>
          <button
            onClick={() => {
              setSelectedProject(null);
              setIsEditing(true);
            }}
            className="px-4 py-2 text-white bg-green-700 rounded-lg hover:bg-green-800"
          >
            Add Project
          </button>
        </div>

        {isEditing ? (
          <ProjectEditor
            project={selectedProject}
            onSave={() => {
              setIsEditing(false);
              setSelectedProject(null);
            }}
            onCancel={() => {
              setIsEditing(false);
              setSelectedProject(null);
            }}
          />
        ) : (
          <ProjectList
            onEdit={(project) => {
              setSelectedProject(project);
              setIsEditing(true);
            }}
          />
        )}
      </div>
    </AdminLayout>
  );
}