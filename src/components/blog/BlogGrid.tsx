import React from 'react';
import BlogCard from './BlogCard';
import { BlogPost, BlogCategory } from './types';

interface BlogGridProps {
  posts: BlogPost[];
  category: BlogCategory | 'all';
}

export default function BlogGrid({ posts, category }: BlogGridProps) {
  const filteredPosts = category === 'all' 
    ? posts 
    : posts.filter(post => post.category === category);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredPosts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
}