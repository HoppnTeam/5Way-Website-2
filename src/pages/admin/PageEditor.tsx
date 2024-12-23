import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Save, Eye, X } from 'lucide-react';

export default function PageEditor() {
  const { pageId } = useParams();
  const [editMode, setEditMode] = useState(false);
  const [selectedElement, setSelectedElement] = useState<HTMLElement | null>(null);

  const handleElementClick = (e: React.MouseEvent) => {
    if (!editMode) return;
    e.preventDefault();
    e.stopPropagation();
    const element = e.target as HTMLElement;
    setSelectedElement(element);
  };

  const handleSave = () => {
    // Implement save logic
    console.log('Saving changes...');
  };

  return (
    <div className="min-h-screen">
      {/* Editor Toolbar */}
      <div className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <h1 className="text-lg font-semibold text-gray-900">
            Editing: {pageId}
          </h1>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setEditMode(!editMode)}
              className={`px-4 py-2 rounded-md ${
                editMode 
                  ? 'bg-blue-100 text-blue-700' 
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              <Eye className="w-5 h-5" />
            </button>
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 flex items-center gap-2"
            >
              <Save className="w-5 h-5" />
              Save Changes
            </button>
          </div>
        </div>
      </div>

      {/* Editor Content */}
      <div className="pt-16">
        {/* Render the actual page content here */}
        <div onClick={handleElementClick} className={editMode ? 'cursor-pointer' : ''}>
          {/* Page content will be rendered here */}
        </div>
      </div>

      {/* Element Editor Sidebar */}
      {selectedElement && (
        <div className="fixed right-0 top-16 bottom-0 w-80 bg-white border-l border-gray-200 p-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Edit Element</h2>
            <button
              onClick={() => setSelectedElement(null)}
              className="text-gray-400 hover:text-gray-500"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          {/* Add element-specific editing controls here */}
        </div>
      )}
    </div>
  );
}