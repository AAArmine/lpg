import { FormStep, DisabledFormStepOptions } from '../formStep';
import { getFormStepValueFromSchema } from './utils/getFormStepValueFromSchema';

export interface ApartmentHeatingValue {
  roof: number | null;
  heatingAge: number | null;
  window: number | null;
}

export class ApartmentHeatingFormStep
  implements FormStep<ApartmentHeatingValue>
{
  public static fromSchema(
    schema: Array<any> | null
  ): ApartmentHeatingFormStep {
    const apartmentHeatingValue =
      getFormStepValueFromSchema<ApartmentHeatingValue>(
        'apartmentHeating',
        schema
      );
    if (apartmentHeatingValue) {
      return new ApartmentHeatingFormStep(apartmentHeatingValue);
    }

    return new ApartmentHeatingFormStep();
  }

  private constructor(value?: ApartmentHeatingValue) {
    this.value = value || {
      roof: null,
      heatingAge: null,
      window: null,
    };
    this.disabledOptions = [];
    this.name = 'apartmentHeating';
  }

  public value: ApartmentHeatingValue;

  public name: string;

  public disabledOptions: DisabledFormStepOptions;

  validate() {
    return [];
  }
}
