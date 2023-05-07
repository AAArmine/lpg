import { FormStep, DisabledFormStepOptions, StepErrors } from '../formStep';
import { getFormStepValueFromSchema } from './utils/getFormStepValueFromSchema';

const MAX_NUMBER_OF_FLOORS = 5;

export interface HouseFloorsFormStepValue {
  numberOfFloors: number;
  basement: number | null;
  roof: number | null;
}

export class HouseFloorsFormStep implements FormStep<HouseFloorsFormStepValue> {
  public static fromSchema(schema: Array<any> | null): HouseFloorsFormStep {
    const houseFloorsValue =
      getFormStepValueFromSchema<HouseFloorsFormStepValue>(
        'houseFloors',
        schema
      );
    if (houseFloorsValue) {
      return new HouseFloorsFormStep(houseFloorsValue);
    }

    const apartmentFloorsValue = getFormStepValueFromSchema<{
      basement: number | null;
      numberOfFloors: number;
    }>('apartmentFloors', schema);
    if (apartmentFloorsValue) {
      return new HouseFloorsFormStep({
        basement: apartmentFloorsValue.basement,
        numberOfFloors: Math.min(
          apartmentFloorsValue.numberOfFloors || 0,
          MAX_NUMBER_OF_FLOORS
        ),
        roof: null,
      });
    }

    return new HouseFloorsFormStep();
  }

  private constructor(value?: HouseFloorsFormStepValue) {
    this.value = value || {
      numberOfFloors: 0,
      basement: null,
      roof: null,
    };
    this.disabledOptions = [];
    this.name = 'houseFloors';
  }

  public value: HouseFloorsFormStepValue;

  public name: string;

  public disabledOptions: DisabledFormStepOptions;

  getMaxValue() {
    return MAX_NUMBER_OF_FLOORS;
  }

  validate() {
    const errors: StepErrors = [];

    if (
      this.value.numberOfFloors < 0 ||
      this.value.numberOfFloors > MAX_NUMBER_OF_FLOORS
    ) {
      errors.push('invalid_numberOfFloors');
    }

    return errors;
  }
}
