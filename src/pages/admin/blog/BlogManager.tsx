import React, { useState } from 'react';
import AdminLayout from '../layout/AdminLayout';
import BlogPostList from './components/BlogPostList';
import BlogPostEditor from './components/BlogPostEditor';
import { BlogPost } from '../../../components/blog/types';

export default function BlogManager() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <AdminLayout>
      <div className="w-full p-6 ">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Blog Management</h1>
          <button
            onClick={() => {
              setSelectedPost(null);
              setIsEditing(true);
            }}
            className="px-4 py-2 text-white bg-green-700 rounded-lg hover:bg-green-800"
          >
            New Post
          </button>
        </div>

        {isEditing ? (
          <BlogPostEditor
            post={selectedPost}
            onSave={() => {
              setIsEditing(false);
              setSelectedPost(null);
            }}
            onCancel={() => {
              setIsEditing(false);
              setSelectedPost(null);
            }}
          />
        ) : (
          <BlogPostList
            onEdit={(post) => {
              setSelectedPost(post);
              setIsEditing(true);
            }}
          />
        )}
      </div>
    </AdminLayout>
  );
}