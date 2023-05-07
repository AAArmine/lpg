import { useTranslations } from '../../../locale';
import { FormStepBaseProps } from '../formStepBaseProps';
import { FormStepContainer } from '../FormStepContainer';
import { CarParkingValue, StepErrors } from '../schema';
import { FormItemSlider } from './FormItemSlider';
import { ParkingSlots } from './Icons/ParkingSlots';
import { UndergroundParking } from './Icons/UndergroundParking';
import { NumberRangeInput } from './NumberRangeInput';

export const FormStepCarParking: React.FC<FormStepBaseProps<CarParkingValue>> =
  ({ value, errors, onValueChange }) => {
    const t = useTranslations('contact-form');

    const getItemErrors = (itemName: string): StepErrors => {
      switch (itemName) {
        case 'numberOfUndergroundParkings':
          return errors.filter((e) =>
            e.includes('numberOfUndergroundParkings')
          );
        case 'numberOfParkingLots':
          return errors.filter((e) => e.includes('numberOfParkingLots'));
        default:
      }

      return [];
    };

    return (
      <FormStepContainer>
        <FormItemSlider
          value={value.numberOfUndergroundParkings}
          errors={getItemErrors('numberOfUndergroundParkings')}
          img={<UndergroundParking />}
          text={t('carParking.numberOfUndergroundParkings.title')}
          infoText={t('carParking.numberOfUndergroundParkings.infoText')}
          minRange={0}
          maxRange={10}
          onValueChange={(newValue: number) => {
            onValueChange({ ...value, numberOfUndergroundParkings: newValue });
          }}
          renderValue={() => (
            <NumberRangeInput
              min={0}
              max={10}
              value={value.numberOfUndergroundParkings}
              onValueChange={(newValue) => {
                onValueChange({
                  ...value,
                  numberOfUndergroundParkings: newValue,
                });
              }}
            />
          )}
        />
        <FormItemSlider
          value={value.numberOfParkingLots}
          errors={getItemErrors('numberOfParkingLots')}
          img={<ParkingSlots />}
          text={t('carParking.numberOfParkingLots.title')}
          infoText={t('carParking.numberOfParkingLots.infoText')}
          minRange={0}
          maxRange={10}
          onValueChange={(newValue: number) => {
            onValueChange({ ...value, numberOfParkingLots: newValue });
          }}
          renderValue={() => (
            <NumberRangeInput
              min={0}
              max={10}
              value={value.numberOfParkingLots}
              onValueChange={(newValue) => {
                onValueChange({
                  ...value,
                  numberOfParkingLots: newValue,
                });
              }}
            />
          )}
        />
      </FormStepContainer>
    );
  };
