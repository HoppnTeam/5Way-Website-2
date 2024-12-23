import React from 'react';

const officeHours = [
  'Monday - Friday: 8:00 AM - 6:00 PM',
  'Saturday: 9:00 AM - 2:00 PM',
  'Sunday: Closed'
];

export default function OfficeHours() {
  return (
    <ul className="space-y-2 text-gray-100">
      {officeHours.map((hours) => (
        <li key={hours}>{hours}</li>
      ))}
    </ul>
  );
}