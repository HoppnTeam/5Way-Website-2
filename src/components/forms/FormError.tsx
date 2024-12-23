import React from 'react';

interface FormErrorProps {
  errors: string[];
}

export function FormError({ errors }: FormErrorProps) {
  if (errors.length === 0) return null;

  return (
    <div className="mt-2 text-sm text-red-600">
      {errors.map((error, index) => (
        <p key={index}>{error}</p>
      ))}
    </div>
  );
}