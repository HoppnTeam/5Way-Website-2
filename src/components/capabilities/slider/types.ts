export interface SliderProps {
  initialPosition?: number;
  onPositionChange?: (position: number) => void;
}

export interface SliderState {
  position: number;
  isDragging: boolean;
}