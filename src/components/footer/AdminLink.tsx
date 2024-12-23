import React from 'react';
import { Link } from 'react-router-dom';
import { Lock } from 'lucide-react';

export default function AdminLink() {
  return (
    <Link 
      to="/admin" 
      className="flex items-center gap-2 text-gray-100 hover:text-white transition-colors"
      aria-label="Admin Login"
    >
      <Lock className="w-4 h-4" />
      <span>Admin Login</span>
    </Link>
  );
}