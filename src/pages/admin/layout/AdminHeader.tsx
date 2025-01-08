import React from 'react';
import { Bell, User } from 'lucide-react';

export default function AdminHeader() {
  return (
    <header className="top-0 left-0 right-0 z-50 h-16 bg-white border-b border-gray-200 ">
      <div className="flex items-center justify-between h-full px-6">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-green-700">5Way</span>
          <span className="text-sm text-gray-500">Admin Panel</span>
        </div>

        <div className="flex items-center gap-4">
          <button className="relative p-2 text-gray-500 hover:text-gray-700">
            <Bell className="w-5 h-5" />
            <span className="absolute w-2 h-2 bg-red-500 rounded-full top-1 right-1" />
          </button>
          
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-700">Admin User</span>
            <button className="p-1.5 rounded-full bg-gray-100">
              <User className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}