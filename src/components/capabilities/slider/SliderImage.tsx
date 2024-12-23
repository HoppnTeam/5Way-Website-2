import React, { ReactNode } from 'react';

interface SliderImageProps {
  src: string;
  alt: string;
  overlay?: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function SliderImage({ src, alt, overlay, className = '', style }: SliderImageProps) {
  return (
    <div className={`absolute inset-0 ${className}`} style={style}>
      <img 
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
      {overlay}
    </div>
  );
}