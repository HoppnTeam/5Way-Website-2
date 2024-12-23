import React from 'react';
import { X } from 'lucide-react';
import BookingForm from './BookingForm';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="fixed inset-0 bg-black/50 transition-opacity" onClick={onClose} />
        
        <div className="relative bg-white rounded-lg w-full max-w-md p-6">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-500"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Schedule a Consultation</h2>
            <p className="mt-2 text-gray-600">
              Book a free consultation with our experts to discuss your construction needs.
            </p>
          </div>
          
          <BookingForm />
        </div>
      </div>
    </div>
  );
}