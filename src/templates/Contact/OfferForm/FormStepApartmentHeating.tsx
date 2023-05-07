import React from 'react';
import { useTranslations } from '../../../locale';
import { FormStepBaseProps } from '../formStepBaseProps';
import { FormStepContainer } from '../FormStepContainer';
import { FormItemMultipleChoice } from './FormItemMultipleChoice';
import { Heating } from './Icons/Heating';
import { HouseWithRoof } from './Icons/HouseWithRoof';
import { Window } from './Icons/Window';
import { ApartmentHeatingValue } from '../schema';

export const FormStepApartmentHeating: React.FC<
  FormStepBaseProps<ApartmentHeatingValue>
> = ({ value, onValueChange }) => {
  const t = useTranslations('contact-form');

  return (
    <FormStepContainer className="multiple-choice-container">
      <FormItemMultipleChoice
        value={value.roof}
        items={[0, 1, 2, 3].map((i) => t(`houseFloors.roof.options.${i}`))}
        img={<HouseWithRoof />}
        text={t('houseFloors.roof.title')}
        infoText={t('houseFloors.roof.infoText')}
        errors={[]}
        onValueChange={(newValue) =>
          onValueChange({ ...value, roof: newValue })
        }
      />
      <FormItemMultipleChoice
        value={value.heatingAge}
        items={[0, 1, 2, 3].map((i) => t(`heating.heatingAge.options.${i}`))}
        img={
          <div style={{ height: '9rem' }}>
            <Heating />
          </div>
        }
        text={t('heating.heatingAge.title')}
        infoText={t('heating.heatingAge.infoText')}
        errors={[]}
        onValueChange={(newValue) =>
          onValueChange({ ...value, heatingAge: newValue })
        }
      />
      <FormItemMultipleChoice
        value={value.window}
        items={[0, 1, 2, 3, 4, 5, 6].map((i) =>
          t(`heating.window.options.${i}`)
        )}
        img={<Window />}
        text={t('heating.window.title')}
        infoText={t('heating.window.infoText')}
        errors={[]}
        onValueChange={(newValue) =>
          onValueChange({ ...value, window: newValue })
        }
      />
    </FormStepContainer>
  );
};
