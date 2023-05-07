import React from 'react';
import { FormItemInfoBox } from './FormItemInfoBox';
import { StepErrors } from '../schema';
import 'rc-slider/assets/index.css';
import { SliderFlex } from '../../SliderFlex';

interface FormItemSliderProps {
  disabled?: boolean;
  value: number;
  valueIncrement?: number;
  img: React.ReactNode;
  text: string;
  infoText?: string;
  onValueChange: (value: number) => void;
  minRange: number;
  maxRange: number;
  errors: StepErrors;
  className?: string;
  renderValue: (value: number) => React.ReactNode;
}

export const FormItemSlider: React.FC<FormItemSliderProps> = ({
  disabled,
  value,
  valueIncrement,
  img,
  text,
  infoText,
  minRange,
  maxRange,
  onValueChange,
  errors,
  className,
  renderValue,
}) => {
  return (
    <FormItemInfoBox
      infoText={infoText}
      disabled={disabled}
      error={!!errors.length}
      className={className}
    >
      <div className="form-item-body slider">
        <div className="img">
          <div className="svg-cnt">{img}</div>
          <h3>{text}</h3>
        </div>
        <SliderFlex
          disabled={disabled}
          valueIncrement={valueIncrement}
          min={minRange}
          max={maxRange}
          value={value}
          onValueChange={onValueChange}
        />
      </div>
      <label>{renderValue(value)}</label>
    </FormItemInfoBox>
  );
};
