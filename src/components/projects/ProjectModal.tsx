import React from 'react';
import { X, MapPin, Calendar, CheckCircle } from 'lucide-react';
import { Project } from './types';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
      <div className="relative bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
        >
          <X className="w-6 h-6" />
        </button>
        
        <div className="relative h-96">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
            <div className="flex items-center gap-4 text-gray-200">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {project.location}
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {project.completionDate}
              </div>
            </div>
          </div>
        </div>

        <div className="p-8">
          <div className="flex gap-4 mb-6">
            <span className="text-sm font-medium text-green-700 bg-green-50 px-3 py-1 rounded-full">
              {project.subCategory}
            </span>
            <span className="text-sm font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full capitalize">
              {project.category}
            </span>
          </div>

          <p className="text-gray-600 mb-8">{project.description}</p>

          <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Features</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {project.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2 text-gray-700">
                <CheckCircle className="w-5 h-5 text-green-700" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}