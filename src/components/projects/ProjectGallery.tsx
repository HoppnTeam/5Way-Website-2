import React, { useState } from 'react';
import ProjectFilter from './ProjectFilter';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { projects } from './projectData';
import { FilterState, Project } from './types';

export default function ProjectGallery() {
  const [filters, setFilters] = useState<FilterState>({ 
    category: 'all', 
    subCategory: 'all' 
  });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter(project => {
    if (filters.category === 'all') return true;
    if (filters.category !== project.category) return false;
    if (filters.subCategory === 'all') return true;
    return filters.subCategory === project.subCategory;
  });

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProjectFilter
          filters={filters}
          onFilterChange={setFilters}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </div>
  );
}