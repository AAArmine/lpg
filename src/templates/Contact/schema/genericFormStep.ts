/* eslint-disable no-underscore-dangle */
import { FormStep, DisabledFormStepOptions } from '../formStep';
import { getFormStepValueFromSchema } from './utils/getFormStepValueFromSchema';
import { YesNoValue } from './yesNoValue';

export type HouseTypeValue =
  | null
  | 'detachedHouse'
  | 'endOfTerraceHouse'
  | 'midTerraceHouse'
  | 'semiDetachedHouse'
  | 'multiApartmentHouse'
  | 'condominium';

export type HouseConstructionValue =
  | null
  | 'solidConstruction'
  | 'prefabricatedMassive'
  | 'prefabricatedWood';

export type HousePropertyValueNames = 'pool' | 'sauna' | 'solarPanel';

export type HousePropertiesValue = Record<HousePropertyValueNames, YesNoValue>;

type GenericFormStepValues =
  | HouseTypeValue
  | HousePropertiesValue
  | HouseConstructionValue;

export class GenericFormStep<T extends GenericFormStepValues>
  implements FormStep<T>
{
  public static fromSchema<T extends GenericFormStepValues>(
    stepName: string,
    schema: Array<any> | null,
    defaultValue: T,
    defaultOptional?: boolean
  ): GenericFormStep<T> {
    const value = getFormStepValueFromSchema<T>(stepName, schema);
    if (value) {
      return new GenericFormStep<T>(stepName, value, defaultOptional);
    }

    return new GenericFormStep<T>(stepName, defaultValue, defaultOptional);
  }

  private _optional: boolean = false;

  private constructor(name: string, value: T, optional?: boolean) {
    this.value = value;
    this.name = name;
    this.disabledOptions = [];
    if (optional) {
      this._optional = optional;
    }
  }

  public value: T;

  public name: string;

  public disabledOptions: DisabledFormStepOptions;

  public get optional(): boolean {
    return this._optional;
  }

  validate() {
    return this.value != null || this._optional ? [] : ['invalid_value'];
  }
}
