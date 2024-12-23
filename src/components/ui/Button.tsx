import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', children, className, ...props }: ButtonProps) {
  const baseStyles = "px-8 py-3 rounded-md flex items-center gap-2 group transition-all font-semibold";
  const variants = {
    primary: "bg-green-700 hover:bg-green-800 text-white",
    secondary: "bg-white hover:bg-gray-100 text-green-700"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}