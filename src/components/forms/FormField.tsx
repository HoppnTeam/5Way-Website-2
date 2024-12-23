import React from 'react';

interface FormFieldProps {
  label: string;
  id: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  required?: boolean;
  error?: string;
  children?: React.ReactNode;
}

export function FormField({
  label,
  id,
  type = 'text',
  value,
  onChange,
  required = false,
  error,
  children
}: FormFieldProps) {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      
      {children || (
        <input
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          className={`mt-1 block w-full rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm
            ${error ? 'border-red-300' : 'border-gray-300'}`}
          required={required}
        />
      )}
      
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
}