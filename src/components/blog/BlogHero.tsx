import React from 'react';
import { BookOpen } from 'lucide-react';

export default function BlogHero() {
  return (
    <div className="relative h-[400px]">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 text-green-500 mb-4">
            <BookOpen className="w-8 h-8" />
            <span className="text-xl font-semibold text-white">Our Blog</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Construction Insights & Updates
          </h1>
          <p className="text-xl text-gray-200">
            Stay informed with the latest construction trends, tips, and project updates
          </p>
        </div>
      </div>
    </div>
  );
}