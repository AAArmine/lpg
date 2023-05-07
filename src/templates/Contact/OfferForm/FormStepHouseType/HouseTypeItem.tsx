import React from 'react';
import { FormItemInfoBox } from '../FormItemInfoBox';

interface FormItemProps {
  isActive: boolean;
  isValid: boolean;
  img: React.ReactNode;
  text: string;
  infoText: string;
  onSelect: () => void;
}

export const HouseTypeItem: React.FC<FormItemProps> = ({
  isActive,
  isValid,
  img,
  text,
  infoText,
  onSelect,
}) => {
  return (
    <FormItemInfoBox
      infoText={infoText}
      active={isActive}
      error={!isValid}
      onClick={() => {
        onSelect();
      }}
      className="pointer hover house-type-item"
    >
      <div className="svg-cnt">{img}</div>
      <h3>{text}</h3>
    </FormItemInfoBox>
  );
};
