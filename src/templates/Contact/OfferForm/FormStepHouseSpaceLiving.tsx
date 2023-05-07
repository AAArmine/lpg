import React from 'react';
import { useTranslations } from '../../../locale';
import { FormStepBaseProps } from '../formStepBaseProps';
import { FormStepContainer } from '../FormStepContainer';
import { LivingAria } from './Icons/LivingAria';
import { HouseSpaceLivingValue, StepErrors } from '../schema';
import { FormItemSlider } from './FormItemSlider';
import { NumberRangeInput } from './NumberRangeInput';
import { LandArea } from './Icons/LandArea';
import { RentedArea } from './Icons/RentedArea';

export const FormStepHouseSpaceLiving: React.FC<
  FormStepBaseProps<HouseSpaceLivingValue>
> = ({ value, errors, disabledOptions, getMaxValue, onValueChange }) => {
  const t = useTranslations('contact-form');

  const maxRendedArea = getMaxValue ? getMaxValue() : 0;

  const getItemErrors = (itemName: string): StepErrors => {
    switch (itemName) {
      case 'livingArea':
        return errors.filter((e) => e.includes('livingArea'));
      case 'rentedArea':
        return errors.filter((e) => e.includes('rented'));
      case 'landArea':
        return errors.filter((e) => e.includes('landArea'));
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
        value={value.rentedArea}
        disabled={disabledOptions.includes('rentedArea')}
        errors={getItemErrors('rentedArea')}
        img={<RentedArea />}
        text={t('spaceLiving.rentedArea.title')}
        infoText={t('spaceLiving.rentedArea.infoText')}
        minRange={0}
        maxRange={maxRendedArea}
        valueIncrement={10}
        onValueChange={(newValue: number) =>
          onValueChange({ ...value, rentedArea: newValue })
        }
        renderValue={() => (
          <NumberRangeInput
            disabled={disabledOptions.includes('rentedArea')}
            min={0}
            max={maxRendedArea}
            value={value.rentedArea}
            unit={t('m2')}
            onValueChange={(newValue) => {
              onValueChange({ ...value, rentedArea: newValue });
            }}
          />
        )}
      />
      <FormItemSlider
        value={value.landArea}
        valueIncrement={10}
        errors={getItemErrors('landArea')}
        img={<LandArea />}
        text={t('spaceLiving.landArea.title')}
        infoText={t('spaceLiving.landArea.infoText')}
        minRange={0}
        maxRange={5000}
        onValueChange={(newValue: number) => {
          onValueChange({ ...value, landArea: newValue });
        }}
        renderValue={() => (
          <NumberRangeInput
            min={0}
            max={5000}
            value={value.landArea}
            unit={t('m2')}
            onValueChange={(newValue) => {
              onValueChange({ ...value, landArea: newValue });
            }}
          />
        )}
      />
    </FormStepContainer>
  );
};
