import { FormStep, DisabledFormStepOptions, StepErrors } from '../formStep';
import { getFormStepValueFromSchema } from './utils/getFormStepValueFromSchema';

export interface HouseConditionValue {
  yearOfConstruction: number | null;
  objectState: number | null;
  furnishing: number | null;
}

const MIN_YEAR_OF_CONSTRUCTION = 1870;
const MAX_OBJECT_STATE_VALUE = 4;
const MAX_FURNISHING_VALUE = 3;

export class HouseConditionFormStep implements FormStep<HouseConditionValue> {
  public static fromSchema(schema: Array<any> | null): HouseConditionFormStep {
    const value = getFormStepValueFromSchema<HouseConditionValue>(
      'houseCondition',
      schema
    );
    if (value) {
      return new HouseConditionFormStep(value);
    }

    return new HouseConditionFormStep();
  }

  private constructor(value?: HouseConditionValue) {
    this.value = value || {
      yearOfConstruction: null,
      objectState: null,
      furnishing: null,
    };
    this.disabledOptions = [];
    this.name = 'houseCondition';
  }

  public value: HouseConditionValue;

  public name: string;

  public disabledOptions: DisabledFormStepOptions;

  private maxConstructionYear = new Date().getFullYear() + 1;

  getMinValue() {
    return MIN_YEAR_OF_CONSTRUCTION;
  }

  getMaxValue() {
    return this.maxConstructionYear;
  }

  validate() {
    const errors: StepErrors = [];

    if (!this.value.yearOfConstruction) {
      errors.push('required_yearOfConstruction');
    } else if (
      this.value.yearOfConstruction < MIN_YEAR_OF_CONSTRUCTION ||
      this.value.yearOfConstruction > this.maxConstructionYear
    ) {
      errors.push('invalid_yearOfConstruction');
    }

    if (
      this.value.objectState != null &&
      (this.value.objectState < 0 ||
        this.value.objectState > MAX_OBJECT_STATE_VALUE)
    ) {
      errors.push('invalid_objectState');
    }

    if (
      this.value.furnishing != null &&
      (this.value.furnishing < 0 ||
        this.value.furnishing > MAX_FURNISHING_VALUE)
    ) {
      errors.push('furnishing');
    }
    return errors;
  }
}
