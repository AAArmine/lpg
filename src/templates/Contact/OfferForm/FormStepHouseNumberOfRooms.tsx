import React from 'react';
import { useTranslations } from '../../../locale';
import { FormStepBaseProps } from '../formStepBaseProps';
import { FormStepContainer } from '../FormStepContainer';
import { LivingAria } from './Icons/LivingAria';
import { HouseNumberOfRoomsValue, StepErrors } from '../schema';
import { FormItemSlider } from './FormItemSlider';
import { Bathroom } from './Icons/Bathroom';
import { NumberRangeInput } from './NumberRangeInput';
import { FormItemMultipleChoice } from './FormItemMultipleChoice';
import { Heating } from './Icons/Heating';

export const FormStepHouseNumberOfRooms: React.FC<
  FormStepBaseProps<HouseNumberOfRoomsValue>
> = ({ value, errors, onValueChange }) => {
  const getItemErrors = (itemName: string): StepErrors => {
    switch (itemName) {
      case 'numberOfRooms':
        return errors.filter((e) => e.includes('numberOfRooms'));
      case 'toilets':
        return errors.filter((e) => e.includes('toilets'));
      default:
    }

    return [];
  };

  const t = useTranslations('contact-form');

  return (
    <FormStepContainer>
      <FormItemMultipleChoice
        value={value.heatingAge}
        items={[0, 1, 2, 3].map((i) => t(`heating.heatingAge.options.${i}`))}
        img={<Heating />}
        text={t('heating.heatingAge.title')}
        infoText={t('heating.heatingAge.infoText')}
        errors={[]}
        onValueChange={(newValue) =>
          onValueChange({ ...value, heatingAge: newValue })
        }
      />
      <FormItemSlider
        value={value.numberOfRooms}
        errors={getItemErrors('numberOfRooms')}
        img={<LivingAria />}
        text={t('numberOfRooms.numberOfRooms.title')}
        infoText={t('numberOfRooms.numberOfRooms.infoText')}
        minRange={0}
        maxRange={20}
        onValueChange={(newValue: number) => {
          onValueChange({ ...value, numberOfRooms: newValue });
        }}
        renderValue={() => (
          <NumberRangeInput
            min={0}
            max={20}
            value={value.numberOfRooms}
            onValueChange={(newValue) => {
              onValueChange({ ...value, numberOfRooms: newValue });
            }}
          />
        )}
      />
      <FormItemSlider
        value={value.toilets}
        errors={getItemErrors('toilets')}
        img={<Bathroom />}
        text={t('numberOfRooms.toilets.title')}
        infoText={t('numberOfRooms.toilets.infoText')}
        minRange={0}
        maxRange={10}
        onValueChange={(newValue: number) => {
          onValueChange({ ...value, toilets: newValue });
        }}
        renderValue={() => (
          <NumberRangeInput
            min={0}
            max={20}
            value={value.toilets}
            onValueChange={(newValue) => {
              onValueChange({ ...value, toilets: newValue });
            }}
          />
        )}
      />
    </FormStepContainer>
  );
};
