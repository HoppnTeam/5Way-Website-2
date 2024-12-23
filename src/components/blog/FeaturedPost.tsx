import React from 'react';
import { Clock, User } from 'lucide-react';
import { BlogPost } from './types';
import { formatDate } from './utils';

interface FeaturedPostProps {
  post: BlogPost;
}

export default function FeaturedPost({ post }: FeaturedPostProps) {
  return (
    <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl">
      <img 
        src={post.image} 
        alt={post.title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <span className="inline-block px-4 py-1 rounded-full bg-green-700 text-white text-sm font-medium mb-4">
          {post.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
        </span>
        <h2 className="text-3xl font-bold text-white mb-4">{post.title}</h2>
        <p className="text-gray-200 text-lg mb-6">{post.excerpt}</p>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <img 
              src={post.author.avatar} 
              alt={post.author.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="text-white font-medium">{post.author.name}</p>
              <p className="text-gray-300 text-sm">{post.author.role}</p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-gray-300">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{post.readingTime} min read</span>
            </div>
            <span>•</span>
            <span>{formatDate(post.publishedAt)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}