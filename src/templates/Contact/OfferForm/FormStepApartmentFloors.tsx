import React from 'react';
import { useTranslations } from '../../../locale';
import { FormStepBaseProps } from '../formStepBaseProps';
import { FormStepContainer } from '../FormStepContainer';
import { ApartmentFloorsFormStepValue } from '../schema';
import { FormItemSlider } from './FormItemSlider';
import { NumberRangeInput } from './NumberRangeInput';
import { HouseWithFloors } from './Icons/HouseWithFloors';
import { HouseWithBasement } from './Icons/HouseWithBasement';
import { FormItemMultipleChoice } from './FormItemMultipleChoice';
import { HouseWithOneWindowSelected } from './Icons/HouseWithOneWindowSelected';

export const FormStepApartmentFloors: React.FC<
  FormStepBaseProps<ApartmentFloorsFormStepValue>
> = ({ value, errors, onValueChange, getMaxValue }) => {
  const t = useTranslations('contact-form');

  const numberOfFloorsMaxValue = getMaxValue ? getMaxValue() : 20;

  return (
    <FormStepContainer className="multiple-choice-container">
      <FormItemSlider
        value={value.numberOfFloors}
        errors={errors.filter((e) => e.includes('numberOfFloors'))}
        img={<HouseWithFloors />}
        text={t('houseFloors.numberOfFloors.title')}
        infoText={t('houseFloors.numberOfFloors.infoText')}
        minRange={0}
        maxRange={numberOfFloorsMaxValue}
        valueIncrement={1}
        onValueChange={(newValue: number) =>
          onValueChange({ ...value, numberOfFloors: newValue })
        }
        renderValue={() => (
          <NumberRangeInput
            min={0}
            max={numberOfFloorsMaxValue}
            value={value.numberOfFloors}
            onValueChange={(newValue) => {
              onValueChange({ ...value, numberOfFloors: newValue });
            }}
          />
        )}
      />
      <FormItemSlider
        value={value.location}
        errors={errors.filter((e) => e.includes('location'))}
        img={<HouseWithOneWindowSelected />}
        text={t('houseFloors.apartmentLocation.title')}
        minRange={0}
        maxRange={numberOfFloorsMaxValue}
        valueIncrement={1}
        onValueChange={(newValue: number) =>
          onValueChange({ ...value, location: newValue })
        }
        renderValue={() => (
          <NumberRangeInput
            min={0}
            max={numberOfFloorsMaxValue}
            value={value.location}
            onValueChange={(newValue) => {
              onValueChange({ ...value, location: newValue });
            }}
          />
        )}
      />
      <FormItemMultipleChoice
        value={value.basement}
        items={[0, 1, 2, 3].map((i) => t(`houseFloors.basement.options.${i}`))}
        img={<HouseWithBasement />}
        text={t('houseFloors.basement.title')}
        infoText={t('houseFloors.basement.infoText')}
        errors={[]}
        onValueChange={(newValue) =>
          onValueChange({ ...value, basement: newValue })
        }
      />
    </FormStepContainer>
  );
};
