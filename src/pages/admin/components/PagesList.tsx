import React from 'react';
import { Link } from 'react-router-dom';
import { FileEdit, ExternalLink } from 'lucide-react';

interface Page {
  id: string;
  title: string;
  path: string;
}

interface PagesListProps {
  pages: Page[];
}

export default function PagesList({ pages }: PagesListProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="divide-y divide-gray-200">
        {pages.map((page) => (
          <div key={page.id} className="p-4 hover:bg-gray-50">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium text-gray-900">{page.title}</h3>
                <p className="text-sm text-gray-500">{page.path}</p>
              </div>
              <div className="flex items-center gap-3">
                <Link
                  to={`/admin/edit${page.path}`}
                  className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
                  title="Edit Page"
                >
                  <FileEdit className="w-5 h-5" />
                </Link>
                <Link
                  to={page.path}
                  target="_blank"
                  className="p-2 text-gray-400 hover:text-green-600 transition-colors"
                  title="View Page"
                >
                  <ExternalLink className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}