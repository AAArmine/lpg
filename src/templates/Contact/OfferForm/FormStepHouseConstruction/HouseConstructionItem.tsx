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

export const HouseConstructionItem: React.FC<FormItemProps> = ({
  isActive,
  isValid,
  img,
  text,
  infoText,
  onSelect,
}) => {
  return (
    <FormItemInfoBox
      active={isActive}
      error={!isValid}
      onClick={() => {
        onSelect();
      }}
      className="pointer hover"
      infoText={infoText}
    >
      <div className="form-item-body house-type">
        <div className="img">
          <div className="svg-cnt">{img}</div>
          <h3>{text}</h3>
        </div>
      </div>
    </FormItemInfoBox>
  );
};
