import { DisabledFormStepOptions, FormStep, StepErrors } from '../formStep';
import { getFormStepValueFromSchema } from './utils/getFormStepValueFromSchema';

export interface HouseSpaceLivingValue {
  livingArea: number;
  rentedArea: number;
  landArea: number;
}

export class HouseSpaceLivingFormStep
  implements FormStep<HouseSpaceLivingValue>
{
  public static fromSchema(
    schema: Array<any> | null
  ): HouseSpaceLivingFormStep {
    const houseValue = getFormStepValueFromSchema<HouseSpaceLivingValue>(
      'houseSpaceLiving',
      schema
    );
    if (houseValue) {
      return new HouseSpaceLivingFormStep(houseValue);
    }

    const apartmentValue = getFormStepValueFromSchema<{
      livingArea: number;
    }>('apartmentSpaceLiving', schema);
    if (apartmentValue) {
      return new HouseSpaceLivingFormStep({
        livingArea: apartmentValue.livingArea,
        rentedArea: 0,
        landArea: 0,
      });
    }

    return new HouseSpaceLivingFormStep();
  }

  constructor(value?: HouseSpaceLivingValue) {
    this.value = value || {
      livingArea: 0,
      rentedArea: 0,
      landArea: 0,
    };
    this.disabledOptions = value?.livingArea ? [] : ['rentedArea'];
    this.maxRentedArea = value?.livingArea || 0;
    this.name = 'houseSpaceLiving';
  }

  public value: HouseSpaceLivingValue;

  public name: string;

  public disabledOptions: DisabledFormStepOptions;

  private maxRentedArea: number = 0;

  setMaxValue(value: number | null) {
    this.maxRentedArea = value || 0;
    if (this.value.rentedArea > this.maxRentedArea) {
      this.value.rentedArea = this.maxRentedArea;
    }
  }

  getMaxValue() {
    return this.maxRentedArea;
  }

  validate() {
    const errors: StepErrors = [];

    if (this.value.livingArea === 0) {
      errors.push('required_livingArea');
    } else if (this.value.livingArea < 0 || this.value.livingArea > 1000) {
      errors.push('invalid_livingArea');
    }

    if (
      this.value.rentedArea < 0 ||
      this.value.rentedArea > this.maxRentedArea
    ) {
      errors.push('invalid_rentedArea');
    }

    if (this.value.landArea === 0) {
      errors.push('required_landArea');
    } else if (this.value.landArea < 0 || this.value.landArea > 5000) {
      errors.push('invalid_landArea');
    }

    return errors;
  }
}
