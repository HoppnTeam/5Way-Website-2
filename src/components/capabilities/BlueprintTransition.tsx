import React, { useCallback } from 'react';
import { HardHat, Ruler } from 'lucide-react';
import { useSlider } from './slider/useSlider';
import { SliderHandle } from './slider/SliderHandle';
import { SliderImage } from './slider/SliderImage';

export default function BlueprintTransition() {
  const { position, containerRef, handleStart } = useSlider({
    initialPosition: 50,
    onPositionChange: (pos) => console.log('Position:', pos)
  });

  const handleSliderStart = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    e.stopPropagation();
    handleStart(e);
  }, [handleStart]);

  const BlueprintOverlay = (
    <div className="absolute inset-0 pointer-events-none">
      <Ruler className="absolute top-8 left-8 w-8 h-8 text-blue-700 animate-pulse" />
      <div className="absolute top-12 left-12 w-24 h-24 border-2 border-blue-700 rounded-lg animate-[ping_3s_ease-in-out_infinite]" />
      <div className="absolute bottom-12 right-12 w-32 h-32 border-2 border-blue-700 rounded-full animate-[ping_4s_ease-in-out_infinite]" />
      <div className="absolute top-1/4 right-1/4 w-16 h-16 border border-blue-700 rotate-45 animate-[spin_8s_linear_infinite]" />
    </div>
  );

  const CompletedOverlay = (
    <div className="absolute inset-0 pointer-events-none">
      <HardHat className="absolute top-8 right-8 w-8 h-8 text-green-700 animate-bounce" />
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-green-500 rounded-full animate-ping" />
      <div className="absolute bottom-1/4 right-1/4 w-4 h-4 bg-green-500 rounded-full animate-ping delay-1000" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-4 border-green-700 rounded-full border-t-transparent animate-spin" />
    </div>
  );

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">From Blueprint to Reality</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Drag the slider to see how we transform architectural plans into finished projects
          </p>
        </div>

        <div 
          ref={containerRef}
          className="relative h-[600px] rounded-lg overflow-hidden shadow-xl touch-none select-none"
        >
          <SliderImage 
            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80"
            alt="Blueprint"
            className="bg-blue-50"
            overlay={BlueprintOverlay}
          />

          <SliderImage 
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80"
            alt="Completed Project"
            overlay={CompletedOverlay}
            style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
          />

          <SliderHandle position={position} onStart={handleSliderStart} />

          <div className="absolute top-4 left-4 bg-blue-700/80 text-white px-4 py-2 rounded-full text-sm font-medium">
            Blueprint
          </div>
          <div className="absolute top-4 right-4 bg-green-700/80 text-white px-4 py-2 rounded-full text-sm font-medium">
            Completed
          </div>
        </div>
      </div>
    </div>
  );
}