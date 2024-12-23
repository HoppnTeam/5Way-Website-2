import React from 'react';

interface SliderHandleProps {
  position: number;
  onStart: (e: React.MouseEvent | React.TouchEvent) => void;
}

export function SliderHandle({ position, onStart }: SliderHandleProps) {
  return (
    <div 
      className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize touch-none"
      style={{ left: `${position}%` }}
      onMouseDown={onStart}
      onTouchStart={onStart}
    >
      <div 
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center cursor-ew-resize"
        onDragStart={(e) => e.preventDefault()}
      >
        <div className="w-8 h-8 rounded-full bg-green-700 flex items-center justify-center">
          <div className="absolute w-4 h-0.5 bg-white rounded-full" />
          <div className="absolute w-4 h-0.5 bg-white rounded-full rotate-90" />
        </div>
      </div>
    </div>
  );
}