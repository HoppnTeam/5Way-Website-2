import React, { useState } from 'react';
import Layout from '../components/Layout';
import BlogHero from '../components/blog/BlogHero';
import FeaturedPost from '../components/blog/FeaturedPost';
import BlogFilter from '../components/blog/BlogFilter';
import BlogGrid from '../components/blog/BlogGrid';
import { blogPosts } from '../components/blog/blogData';
import type { BlogCategory } from '../components/blog/types';

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState<BlogCategory | 'all'>('all');
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <Layout>
      <BlogHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {featuredPost && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Article</h2>
            <FeaturedPost post={featuredPost} />
          </div>
        )}
        <BlogFilter
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
        <BlogGrid
          posts={regularPosts}
          category={activeCategory}
        />
      </div>
    </Layout>
  );
}