import { YesNoValue } from './yesNoValue';
import { FormStep, DisabledFormStepOptions, StepErrors } from '../formStep';
import { getFormStepValueFromSchema } from './utils/getFormStepValueFromSchema';

export interface ApartmentNumberOfRoomsValue {
  elevator: YesNoValue;
  numberOfRooms: number;
  toilets: number;
}

export class ApartmentNumberOfRoomsFormStep
  implements FormStep<ApartmentNumberOfRoomsValue>
{
  public static fromSchema(
    schema: Array<any> | null
  ): ApartmentNumberOfRoomsFormStep {
    const apartmentNumberOfRoomsValue =
      getFormStepValueFromSchema<ApartmentNumberOfRoomsValue>(
        'apartmentNumberOfRooms',
        schema
      );
    if (apartmentNumberOfRoomsValue) {
      return new ApartmentNumberOfRoomsFormStep(apartmentNumberOfRoomsValue);
    }

    const houseNumberOfRoomsValue = getFormStepValueFromSchema<{
      numberOfRooms: number;
      toilets: number;
    }>('houseNumberOfRooms', schema);
    if (houseNumberOfRoomsValue) {
      return new ApartmentNumberOfRoomsFormStep({
        numberOfRooms: houseNumberOfRoomsValue.numberOfRooms,
        toilets: houseNumberOfRoomsValue.toilets,
        elevator: null,
      });
    }

    return new ApartmentNumberOfRoomsFormStep();
  }

  private constructor(value?: ApartmentNumberOfRoomsValue) {
    this.value = value || {
      elevator: null,
      numberOfRooms: 0,
      toilets: 0,
    };
    this.disabledOptions = [];
    this.name = 'apartmentNumberOfRooms';
  }

  public value: ApartmentNumberOfRoomsValue;

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
