import { FormStep, DisabledFormStepOptions, StepErrors } from '../formStep';
import { getFormStepValueFromSchema } from './utils/getFormStepValueFromSchema';

export type HouseNumberOfRoomsValue = {
  numberOfRooms: number;
  toilets: number;
  heatingAge: number | null;
};

export class HouseNumberOfRoomsFormStep
  implements FormStep<HouseNumberOfRoomsValue>
{
  public static fromSchema(
    schema: Array<any> | null
  ): HouseNumberOfRoomsFormStep {
    const houseNumberOfRoomsValue =
      getFormStepValueFromSchema<HouseNumberOfRoomsValue>(
        'houseNumberOfRooms',
        schema
      );
    if (houseNumberOfRoomsValue) {
      return new HouseNumberOfRoomsFormStep(houseNumberOfRoomsValue);
    }

    const apartmentNumberOfRoomsValue = getFormStepValueFromSchema<{
      numberOfRooms: number;
      toilets: number;
    }>('apartmentNumberOfRooms', schema);
    if (apartmentNumberOfRoomsValue) {
      return new HouseNumberOfRoomsFormStep({
        numberOfRooms: apartmentNumberOfRoomsValue.numberOfRooms,
        toilets: apartmentNumberOfRoomsValue.toilets,
        heatingAge: null,
      });
    }

    return new HouseNumberOfRoomsFormStep();
  }

  private constructor(value?: HouseNumberOfRoomsValue) {
    this.value = value || {
      numberOfRooms: 0,
      toilets: 0,
      heatingAge: null,
    };
    this.disabledOptions = [];
    this.name = 'houseNumberOfRooms';
  }

  public value: HouseNumberOfRoomsValue;

  public name: string;

  public disabledOptions: DisabledFormStepOptions;

  validate() {
    const errors: StepErrors = [];

    if (this.value.numberOfRooms === 0) {
      errors.push('required_numberOfRooms');
    } else if (this.value.numberOfRooms < 0 || this.value.numberOfRooms > 20) {
      errors.push('invalid_numberOfRooms');
    }

    if (this.value.toilets < 0 || this.value.toilets > 10) {
      errors.push('invalid_toilets');
    }

    return errors;
  }
}
