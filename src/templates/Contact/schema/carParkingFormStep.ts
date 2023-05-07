import { FormStep, DisabledFormStepOptions, StepErrors } from '../formStep';
import { getFormStepValueFromSchema } from './utils/getFormStepValueFromSchema';

export interface CarParkingValue {
  numberOfUndergroundParkings: number;
  numberOfParkingLots: number;
}

export class CarParkingFormStep implements FormStep<CarParkingValue> {
  public static fromSchema(schema: Array<any> | null): CarParkingFormStep {
    const carParkingValue = getFormStepValueFromSchema<CarParkingValue>(
      'carParking',
      schema
    );
    if (carParkingValue) {
      return new CarParkingFormStep(carParkingValue);
    }

    return new CarParkingFormStep();
  }

  private constructor(value?: CarParkingValue) {
    this.value = value || {
      numberOfUndergroundParkings: 0,
      numberOfParkingLots: 0,
    };
    this.disabledOptions = [];
    this.name = 'carParking';
  }

  public value: CarParkingValue;

  public name: string;

  public disabledOptions: DisabledFormStepOptions;

  validate() {
    const errors: StepErrors = [];

    if (
      this.value.numberOfUndergroundParkings < 0 ||
      this.value.numberOfUndergroundParkings > 10
    ) {
      errors.push('invalid_numberOfUndergroundParkings');
    }

    if (
      this.value.numberOfParkingLots < 0 ||
      this.value.numberOfParkingLots > 10
    ) {
      errors.push('invalid_numberOfParkingLots');
    }

    return errors;
  }
}
