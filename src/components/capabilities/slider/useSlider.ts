import { useState, useRef, useCallback, useEffect } from 'react';
import type { SliderProps } from './types';

export function useSlider({ initialPosition = 50, onPositionChange }: SliderProps = {}) {
  const [position, setPosition] = useState(initialPosition);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const calculatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return null;

    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    return Math.max(0, Math.min(percentage, 100));
  }, []);

  const handleMove = useCallback((clientX: number) => {
    if (!isDragging.current) return;

    const newPosition = calculatePosition(clientX);
    if (newPosition !== null) {
      setPosition(newPosition);
      onPositionChange?.(newPosition);
    }
  }, [calculatePosition, onPositionChange]);

  const handleStart = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    isDragging.current = true;
    document.body.style.userSelect = 'none';
    
    // Update position immediately on start
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const newPosition = calculatePosition(clientX);
    if (newPosition !== null) {
      setPosition(newPosition);
      onPositionChange?.(newPosition);
    }
  }, [calculatePosition, onPositionChange]);

  const handleEnd = useCallback(() => {
    isDragging.current = false;
    document.body.style.userSelect = '';
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => handleMove(e.clientX);
    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      handleMove(e.touches[0].clientX);
    };

    if (isDragging.current) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('touchmove', handleTouchMove, { passive: false });
      window.addEventListener('mouseup', handleEnd);
      window.addEventListener('touchend', handleEnd);
      window.addEventListener('touchcancel', handleEnd);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('mouseup', handleEnd);
      window.removeEventListener('touchend', handleEnd);
      window.removeEventListener('touchcancel', handleEnd);
    };
  }, [handleMove, handleEnd]);

  return {
    position,
    containerRef,
    handleStart,
  };
}