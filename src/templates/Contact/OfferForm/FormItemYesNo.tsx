import React from 'react';
import { useTranslations } from '../../../locale';
import { FormItemInfoBox } from './FormItemInfoBox';
import { StepErrors, YesNoValue } from '../schema';

interface FormItemYesNoProps {
  disabled?: boolean;
  value: YesNoValue;
  img: React.ReactNode;
  text: string;
  infoText?: string;
  errors: StepErrors;
  onValueChange: (value: YesNoValue) => void;
}

export const FormItemYesNo: React.FC<FormItemYesNoProps> = ({
  disabled,
  value,
  img,
  text,
  infoText,
  errors,
  onValueChange,
}) => {
  const t = useTranslations('contact-form');

  return (
    <FormItemInfoBox
      infoText={infoText}
      disabled={disabled}
      error={!!errors.length}
      className="yes-no"
    >
      <div className="form-item-body yes-no-body">
        <div className="img">
          <div className="svg-cnt">{img}</div>
          <h3>{text}</h3>
        </div>
      </div>
      <div className="yes-no">
        <label
          className={value === 'yes' ? 'active' : ''}
          onClick={() => onValueChange('yes')}
        >
          {t('yes')}
        </label>
        <label
          className={value === 'no' ? 'active' : ''}
          onClick={() => onValueChange('no')}
        >
          {t('no')}
        </label>
      </div>
    </FormItemInfoBox>
  );
};
