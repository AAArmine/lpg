import React from 'react';
import { useTranslations } from '../../../locale';
import { FormStepBaseProps } from '../formStepBaseProps';
import { FormStepContainer } from '../FormStepContainer';
import { LivingAria } from './Icons/LivingAria';
import { ApartmentSpaceLivingValue, StepErrors } from '../schema';
import { FormItemSlider } from './FormItemSlider';
import { NumberRangeInput } from './NumberRangeInput';
import { AdditionalSpace } from './Icons/AdditionalSpace';

export const FormStepApartmentSpaceLiving: React.FC<
  FormStepBaseProps<ApartmentSpaceLivingValue>
> = ({ value, errors, onValueChange }) => {
  const t = useTranslations('contact-form');

  const getItemErrors = (itemName: string): StepErrors => {
    switch (itemName) {
      case 'livingArea':
        return errors.filter((e) => e.includes('livingArea'));
      case 'additionalArea':
        return errors.filter((e) => e.includes('additionalArea'));
      default:
    }

    return [];
  };

  return (
    <FormStepContainer>
      <FormItemSlider
        value={value.livingArea}
        valueIncrement={10}
        errors={getItemErrors('livingArea')}
        img={<LivingAria />}
        text={t('spaceLiving.livingArea.title')}
        infoText={t('spaceLiving.livingArea.infoText')}
        minRange={0}
        maxRange={1000}
        onValueChange={(newValue: number) => {
          onValueChange({ ...value, livingArea: newValue });
        }}
        renderValue={() => (
          <NumberRangeInput
            min={0}
            max={1000}
            value={value.livingArea}
            unit={t('m2')}
            onValueChange={(newValue) => {
              onValueChange({ ...value, livingArea: newValue });
            }}
          />
        )}
      />
      <FormItemSlider
        value={value.additionalArea}
        valueIncrement={10}
        errors={getItemErrors('additionalArea')}
        img={<AdditionalSpace />}
        text={t('spaceLiving.additionalArea.title')}
        infoText={t('spaceLiving.additionalArea.infoText')}
        minRange={0}
        maxRange={1000}
        onValueChange={(newValue: number) => {
          onValueChange({ ...value, additionalArea: newValue });
        }}
        renderValue={() => (
          <NumberRangeInput
            min={0}
            max={1000}
            value={value.additionalArea}
            unit={t('m2')}
            onValueChange={(newValue) => {
              onValueChange({ ...value, additionalArea: newValue });
            }}
          />
        )}
      />
    </FormStepContainer>
  );
};
