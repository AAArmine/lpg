import React from 'react';
import { Help } from './Icons/Help';
import { Check } from './Icons/Check';

interface FormItemInfoBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  infoText?: string;
  disabled?: boolean;
  active?: boolean;
  error?: boolean;
}

export const FormItemInfoBox: React.FC<FormItemInfoBoxProps> = ({
  infoText,
  active,
  error,
  disabled,
  children,
  className,
  ...props
}) => (
  <div className={`form-item-container ${className || ''}`} {...props}>
    <div
      className={`form-item ${disabled ? 'disabled' : ''} ${
        active ? 'active' : ''
      } ${error ? 'error' : ''}`}
    >
      {children}
      {infoText && (
        <>
          <div className="question-mark">
            <Help />
          </div>
          <div className="info-text">{infoText}</div>
        </>
      )}
      <div className="check-mark">
        <Check />
      </div>
    </div>
  </div>
);
