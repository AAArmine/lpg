import React from 'react';
import { useTranslations } from '../../../locale';
import { FormStepBaseProps } from '../formStepBaseProps';
import { FormStepContainer } from '../FormStepContainer';
import { LivingAria } from './Icons/LivingAria';
import { ApartmentNumberOfRoomsValue, StepErrors } from '../schema';
import { FormItemSlider } from './FormItemSlider';
import { Bathroom } from './Icons/Bathroom';
import { NumberRangeInput } from './NumberRangeInput';
import { Elevator } from './Icons/Elevator';
import { FormItemYesNo } from './FormItemYesNo';

export const FormStepApartmentNumberOfRooms: React.FC<
  FormStepBaseProps<ApartmentNumberOfRoomsValue>
> = ({ value, errors, onValueChange }) => {
  const t = useTranslations('contact-form');

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

  return (
    <FormStepContainer>
      <FormItemYesNo
        value={value.elevator}
        errors={[]}
        img={
          <div style={{ height: '10rem' }}>
            <Elevator />
          </div>
        }
        text={t('numberOfRooms.elevator.title')}
        infoText={t('numberOfRooms.elevator.infoText')}
        onValueChange={(newValue) => {
          onValueChange({ ...value, elevator: newValue });
        }}
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
            max={10}
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
