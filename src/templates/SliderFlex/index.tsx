import React from 'react';
import Slider from 'rc-slider';
import { Plus } from './Icons/Plus';
import { Minus } from './Icons/Minus';
import 'rc-slider/assets/index.css';

interface SliderProps {
  disabled?: boolean;
  min: number;
  max: number;
  value: number;
  valueIncrement?: number;
  onValueChange: (value: number) => void;
}

export const SliderFlex: React.FC<SliderProps> = ({
  disabled,
  value,
  valueIncrement,
  min,
  max,
  onValueChange,
}) => {
  const decrement = () => {
    if (value >= min + (valueIncrement || 1)) {
      onValueChange(value - (valueIncrement || 1));
    }
  };

  const increment = () => {
    if (value <= max - (valueIncrement || 1)) {
      onValueChange(value + (valueIncrement || 1));
    }
  };

  return (
    <div className="slider-flex">
      <button disabled={disabled} onClick={decrement}>
        <Minus />
      </button>
      <div className="slider-item">
        <Slider
          disabled={disabled}
          min={min}
          max={max}
          value={value}
          onChange={onValueChange}
        />
      </div>
      <button disabled={disabled} onClick={increment}>
        <Plus />
      </button>
    </div>
  );
};
