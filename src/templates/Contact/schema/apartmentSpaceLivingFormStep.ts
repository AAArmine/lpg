import { DisabledFormStepOptions, FormStep, StepErrors } from '../formStep';
import { getFormStepValueFromSchema } from './utils/getFormStepValueFromSchema';

export interface ApartmentSpaceLivingValue {
  livingArea: number;
  additionalArea: number;
}

export class ApartmentSpaceLivingFormStep
  implements FormStep<ApartmentSpaceLivingValue>
{
  public static fromSchema(
    schema: Array<any> | null
  ): ApartmentSpaceLivingFormStep {
    const apartmentValue =
      getFormStepValueFromSchema<ApartmentSpaceLivingValue>(
        'apartmentSpaceLiving',
        schema
      );
    if (apartmentValue) {
      return new ApartmentSpaceLivingFormStep(apartmentValue);
    }

    const houseValue = getFormStepValueFromSchema<{
      livingArea: number;
    }>('houseSpaceLiving', schema);
    if (houseValue) {
      return new ApartmentSpaceLivingFormStep({
        livingArea: houseValue.livingArea,
        additionalArea: 0,
      });
    }

    return new ApartmentSpaceLivingFormStep();
  }

  constructor(value?: ApartmentSpaceLivingValue) {
    this.value = value || {
      livingArea: 0,
      additionalArea: 0,
    };
    this.disabledOptions = [];
    this.name = 'apartmentSpaceLiving';
  }

  public value: ApartmentSpaceLivingValue;

  public name: string;

  public disabledOptions: DisabledFormStepOptions;

  validate() {
    const errors: StepErrors = [];

    if (this.value.livingArea === 0) {
      errors.push('required_livingArea');
    } else if (this.value.livingArea < 0 || this.value.livingArea > 1000) {
      errors.push('invalid_livingArea');
    }

    if (this.value.additionalArea < 0 || this.value.additionalArea > 1000) {
      errors.push('invalid_landArea');
    }

    return errors;
  }
}
