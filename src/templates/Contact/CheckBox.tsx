import React from 'react';
import { Check } from './Icons/Check';

interface CheckBoxProps {
  text: string;
  isChecked: boolean;
  radio?: boolean;
  onToggle: () => void;
}

export const CheckBox: React.FC<CheckBoxProps> = ({
  text,
  isChecked,
  radio,
  onToggle,
}) => (
  <div
    className={`check-box ${isChecked ? 'checked' : ''}`}
    onClick={() => (radio && isChecked ? undefined : onToggle())}
  >
    <i>
      <span className="check-icon">
        <Check />
      </span>
    </i>
    <span>{text}</span>
  </div>
);
