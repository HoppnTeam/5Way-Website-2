import React from 'react';
import { ArrowRight } from 'lucide-react';

const posts = [
  {
    title: "Sustainable Building Practices in Nigeria",
    excerpt: "Exploring modern eco-friendly construction techniques...",
    image: "https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?auto=format&fit=crop&q=80",
    date: "Mar 15, 2024"
  },
  {
    title: "Smart Home Integration Guide",
    excerpt: "The future of residential construction is here...",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80",
    date: "Mar 10, 2024"
  },
  {
    title: "Commercial Construction Trends",
    excerpt: "Latest innovations in commercial building design...",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80",
    date: "Mar 5, 2024"
  }
];

export default function Blog() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Latest Insights</h2>
          <button className="text-green-700 flex items-center gap-2 hover:text-green-800">
            View All Posts <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <p className="text-sm text-green-700 mb-2">{post.date}</p>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <button className="text-green-700 flex items-center gap-2 hover:text-green-800">
                  Read More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}