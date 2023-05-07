import React from 'react';
import { trackPropertyValueUpdated } from './utils/tracking';

interface NumberRangeInputProps {
  min: number;
  max: number;
  value: number;
  unit?: string;
  onValueChange: (newValue: number) => void;
}

export const NumberRangeInput: React.FC<NumberRangeInputProps> = ({
  min,
  max,
  value,
  unit,
  onValueChange,
}) => {
  const [focused, setFocused] = React.useState(false);
  const inputRef = React.createRef<HTMLInputElement>();

  return (
    <div className="cnt">
      <input
        ref={inputRef}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        value={value === min ? min || (focused ? '' : 0) : value.toString()}
        onChange={(e) => {
          const intValue = e.target.value ? parseInt(e.target.value, 10) : 0;
          if (intValue >= min && intValue <= max) {
            onValueChange(intValue);
          } else if (intValue > max) {
            onValueChange(max);
          }
          trackPropertyValueUpdated('input');
        }}
      />
      {unit && <span>{unit}</span>}
    </div>
  );
};
