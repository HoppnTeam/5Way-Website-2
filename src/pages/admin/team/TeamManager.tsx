import React, { useState } from 'react';
import AdminLayout from '../layout/AdminLayout';
import TeamList from './components/TeamList';
import TeamMemberEditor from './components/TeamMemberEditor';
import type { TeamMember } from './types';

export default function TeamManager() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <AdminLayout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Team Management</h1>
          <button
            onClick={() => {
              setSelectedMember(null);
              setIsEditing(true);
            }}
            className="px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800"
          >
            Add Team Member
          </button>
        </div>

        {isEditing ? (
          <TeamMemberEditor
            member={selectedMember}
            onSave={() => {
              setIsEditing(false);
              setSelectedMember(null);
            }}
            onCancel={() => {
              setIsEditing(false);
              setSelectedMember(null);
            }}
          />
        ) : (
          <TeamList
            onEdit={(member) => {
              setSelectedMember(member);
              setIsEditing(true);
            }}
          />
        )}
      </div>
    </AdminLayout>
  );
}