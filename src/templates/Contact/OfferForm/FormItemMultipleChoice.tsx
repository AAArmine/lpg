import React from 'react';
import { useTranslations } from '../../../locale';
import { FormItemInfoBox } from './FormItemInfoBox';
import { StepErrors } from '../schema';

interface FormItemMultipleChoiceProps {
  value: number | null;
  items: Array<string>;
  disabled?: boolean;
  img: React.ReactNode;
  text: string;
  infoText?: string;
  onValueChange: (value: number | null) => void;
  errors: StepErrors;
  className?: string;
}

export const FormItemMultipleChoice: React.FC<FormItemMultipleChoiceProps> = ({
  value,
  items,
  disabled,
  img,
  text,
  infoText,
  onValueChange,
  errors,
  className,
}) => {
  const t = useTranslations('contact-form');

  return (
    <FormItemInfoBox
      infoText={infoText}
      error={!!errors.length}
      className={className}
      disabled={disabled}
    >
      <div className="form-item-body multiple-choice">
        <div className="img">
          <div className="svg-cnt">{img}</div>
          <h3>{text}</h3>
        </div>
        <div />
      </div>
      <label>
        <select
          disabled={disabled}
          value={value?.toString() || ''}
          className={value == null ? 'default' : ''}
          onChange={(e) =>
            onValueChange(
              e.target.value === '' ? null : parseInt(e.target.value, 10)
            )
          }
        >
          <option value="" disabled hidden>
            {t('pleaseSelect')}
          </option>
          {items.map((item, index) => (
            <option key={index} value={index.toString()}>
              {item}
            </option>
          ))}
        </select>
      </label>
    </FormItemInfoBox>
  );
};
