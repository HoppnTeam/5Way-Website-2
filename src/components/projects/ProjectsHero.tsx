import React from 'react';
import { Building2 } from 'lucide-react';

export default function ProjectsHero() {
  return (
    <div className="relative h-[400px]">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 text-green-500 mb-4">
            <Building2 className="w-8 h-8" />
            <span className="text-xl font-semibold text-white">Our Projects</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Building Excellence Across Nigeria
          </h1>
          <p className="text-xl text-gray-200">
            Explore our portfolio of completed and ongoing construction projects
          </p>
        </div>
      </div>
    </div>
  );
}