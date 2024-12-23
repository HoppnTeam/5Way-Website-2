import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import { Button } from '../ui/Button';
import BookingModal from '../booking/BookingModal';

interface BookingCTAProps {
  className?: string;
}

export default function BookingCTA({ className = '' }: BookingCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setIsModalOpen(true)}
        className={`shadow-lg hover:shadow-xl ${className}`}
      >
        <Calendar className="w-5 h-5" />
        Book Consultation
      </Button>

      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}