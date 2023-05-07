import React from 'react';

interface NumberRangeInputProps {
  min: number;
  max: number;
  value: number;
  unit?: string;
  disabled?: boolean;
  onValueChange: (newValue: number) => void;
}

export const NumberRangeInput: React.FC<NumberRangeInputProps> = ({
  min,
  max,
  value,
  disabled,
  unit,
  onValueChange,
}) => {
  const [focused, setFocused] = React.useState(false);

  return (
    <div className={`range-chose ${disabled ? 'disabled' : ''}`}>
      <input
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        disabled={disabled}
        min={min}
        max={max}
        type="number"
        value={value === min ? min || (focused ? '' : 0) : value.toString()}
        onChange={(e) => {
          const intValue = e.target.value ? parseInt(e.target.value, 10) : 0;
          if (intValue >= min && intValue <= max) {
            onValueChange(intValue);
          } else if (intValue > max) {
            onValueChange(max);
          }
        }}
      />
      {unit && <span>{unit}</span>}
    </div>
  );
};
