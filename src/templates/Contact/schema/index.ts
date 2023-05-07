import { FormStep } from '../formStep';
import {
  GenericFormStep,
  HousePropertiesValue,
  HouseTypeValue,
  HouseConstructionValue,
} from './genericFormStep';
import { CarParkingFormStep, CarParkingValue } from './carParkingFormStep';
import {
  HouseConditionFormStep,
  HouseConditionValue,
} from './houseConditionFormStep';
import {
  HouseSpaceLivingFormStep,
  HouseSpaceLivingValue,
} from './houseSpaceLivingFormStep';
import {
  ApartmentSpaceLivingFormStep,
  ApartmentSpaceLivingValue,
} from './apartmentSpaceLivingFormStep';
import {
  ContactInformationFormStep,
  ContactInformationValue,
} from './contactInformationFormStep';
import {
  HouseFloorsFormStep,
  HouseFloorsFormStepValue,
} from './houseFloorsFormStep';
import {
  HouseNumberOfRoomsFormStep,
  HouseNumberOfRoomsValue,
} from './houseNumberOfRoomsFormStep';
import {
  ApartmentFloorsFormStep,
  ApartmentFloorsFormStepValue,
} from './apartmentFloorsFormStep';
import {
  ApartmentHeatingFormStep,
  ApartmentHeatingValue,
} from './apartmentHeatingFormStep';
import {
  ApartmentNumberOfRoomsFormStep,
  ApartmentNumberOfRoomsValue,
} from './apartmentNumberOfRoomsFormStep';
import { MiscFormStep, MiscValue } from './miscFormStep';

export * from '../formStep';
export * from './yesNoValue';
export * from './genericFormStep';
export * from './houseConditionFormStep';
export * from './carParkingFormStep';
export * from './houseNumberOfRoomsFormStep';
export * from './apartmentNumberOfRoomsFormStep';
export * from './apartmentHeatingFormStep';
export * from './houseSpaceLivingFormStep';
export * from './contactInformationFormStep';
export * from './houseFloorsFormStep';
export * from './apartmentFloorsFormStep';
export * from './miscFormStep';
export * from './apartmentSpaceLivingFormStep';

export type FormStepValues =
  | HouseTypeValue
  | ApartmentSpaceLivingValue
  | HouseSpaceLivingValue
  | HouseConditionValue
  | HouseFloorsFormStepValue
  | ApartmentFloorsFormStepValue
  | HouseConstructionValue
  | HouseNumberOfRoomsValue
  | ApartmentNumberOfRoomsValue
  | ApartmentHeatingValue
  | HousePropertiesValue
  | CarParkingValue
  | MiscValue
  | ContactInformationValue;

export type Schema = Array<FormStep<FormStepValues>>;

export const getFormStepFromItem = <T extends FormStepValues>(
  name: string,
  schema: Schema | null
): FormStep<T> | null => {
  if (schema) {
    const formStep = schema.find((f) => f.name === name);
    if (formStep) {
      return formStep as FormStep<T>;
    }
  }
  return null;
};

export const getInformationSchema = (): Schema => [
  ContactInformationFormStep.fromSchema(null),
];

export const getHouseTypeSchema = (schema: Schema | null): Schema => [
  GenericFormStep.fromSchema<HouseTypeValue>('houseType', schema, null),
  HouseSpaceLivingFormStep.fromSchema(schema),
  HouseConditionFormStep.fromSchema(schema),
  HouseFloorsFormStep.fromSchema(schema),
  GenericFormStep.fromSchema<HouseConstructionValue>(
    'houseConstruction',
    schema,
    null,
    true
  ),
  HouseNumberOfRoomsFormStep.fromSchema(schema),
  GenericFormStep.fromSchema<HousePropertiesValue>('houseProperty', schema, {
    pool: null,
    sauna: null,
    solarPanel: null,
  }),
  CarParkingFormStep.fromSchema(schema),
  new MiscFormStep(),
  ContactInformationFormStep.fromSchema(schema),
];

export const getApartmentTypeSchema = (schema: Schema): Schema => {
  return [
    GenericFormStep.fromSchema<HouseTypeValue>('houseType', schema, null),
    ApartmentSpaceLivingFormStep.fromSchema(schema),
    HouseConditionFormStep.fromSchema(schema),
    ApartmentFloorsFormStep.fromSchema(schema),
    ApartmentHeatingFormStep.fromSchema(schema),
    ApartmentNumberOfRoomsFormStep.fromSchema(schema),
    CarParkingFormStep.fromSchema(schema),
    new MiscFormStep(),
    ContactInformationFormStep.fromSchema(schema),
  ];
};
