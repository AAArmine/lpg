import { FormStep, DisabledFormStepOptions, StepErrors } from '../formStep';
import { getFormStepValueFromSchema } from './utils/getFormStepValueFromSchema';

const MAX_NUMBER_OF_FLOORS = 20;

export interface ApartmentFloorsFormStepValue {
  basement: number | null;
  location: number;
  numberOfFloors: number;
}

export class ApartmentFloorsFormStep
  implements FormStep<ApartmentFloorsFormStepValue>
{
  public static fromSchema(schema: Array<any> | null): ApartmentFloorsFormStep {
    const apartmentFloorsValue =
      getFormStepValueFromSchema<ApartmentFloorsFormStepValue>(
        'apartmentFloors',
        schema
      );
    if (apartmentFloorsValue) {
      return new ApartmentFloorsFormStep(apartmentFloorsValue);
    }

    const houseFloorsValue = getFormStepValueFromSchema<{
      basement: number | null;
      numberOfFloors: number;
    }>('houseFloors', schema);
    if (houseFloorsValue) {
      return new ApartmentFloorsFormStep({
        basement: houseFloorsValue.basement,
        numberOfFloors: Math.min(
          houseFloorsValue.numberOfFloors || 0,
          MAX_NUMBER_OF_FLOORS
        ),
        location: 0,
      });
    }

    return new ApartmentFloorsFormStep();
  }

  private constructor(value?: ApartmentFloorsFormStepValue) {
    this.value = value || {
      basement: null,
      location: 0,
      numberOfFloors: 0,
    };
    this.disabledOptions = [];
    this.name = 'apartmentFloors';
  }

  public value: ApartmentFloorsFormStepValue;

  public name: string;

  public disabledOptions: DisabledFormStepOptions;

  getMaxValue() {
    return MAX_NUMBER_OF_FLOORS;
  }

  validate() {
    const errors: StepErrors = [];

    if (this.value.location < 0 || this.value.location > MAX_NUMBER_OF_FLOORS) {
      errors.push('invalid_location');
    }

    if (
      this.value.numberOfFloors < 0 ||
      this.value.numberOfFloors > MAX_NUMBER_OF_FLOORS
    ) {
      errors.push('invalid_numberOfFloors');
    }

    return errors;
  }
}
