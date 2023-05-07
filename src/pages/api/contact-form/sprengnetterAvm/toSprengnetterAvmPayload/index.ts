/* eslint-disable @typescript-eslint/no-use-before-define */
import merge from 'lodash.merge';
import { parseApartmentHeating } from './parseApartmentHeating';
import { parseApartmentSpaceLiving } from './parseApartmentSpaceLiving';
import { parseCarParking } from './parseCarParking';
import { parseContactInformation } from './parseContactInformation';
import { parseHouseCondition } from './parseHouseCondition';
import { parseHouseConstruction } from './parseHouseConstruction';
import { parseHouseFloors } from './parseHouseFloors';
import { parseHouseNumberOfRooms } from './parseHouseNumberOfRooms';
import { parseHouseProperty } from './parseHouseProperty';
import { parseHouseSpaceLiving } from './parseHouseSpaceLiving';
import { parseMisc } from './parseMisc';
import { parsePropertyType } from './parsePropertyType';

export const toSprengnetterAvmPayload = (
  schema: Array<Record<string, any>>
): Record<string, any> => merge({}, ...schema.map(parseSchemaValues));

const parseSchemaValues = (
  formStep: Record<string, any>
): Record<string, any> | null => {
  switch (formStep.name) {
    case 'houseType':
      return parsePropertyType(formStep.value);
    case 'houseConstruction':
      return parseHouseConstruction(formStep.value);
    case 'apartmentSpaceLiving':
      return parseApartmentSpaceLiving(formStep.value);
    case 'houseSpaceLiving':
      return parseHouseSpaceLiving(formStep.value);
    case 'houseCondition':
      return parseHouseCondition(formStep.value);
    case 'houseFloors':
      return parseHouseFloors(formStep.value);
    case 'apartmentFloors':
      return parseHouseFloors(formStep.value);
    case 'apartmentHeating':
      return parseApartmentHeating(formStep.value);
    case 'houseNumberOfRooms':
      return parseHouseNumberOfRooms(formStep.value);
    case 'apartmentNumberOfRooms':
      return parseHouseNumberOfRooms(formStep.value);
    case 'houseProperty':
      return parseHouseProperty(formStep.value);
    case 'carParking':
      return parseCarParking(formStep.value);
    case 'misc':
      return parseMisc(formStep.value);
    case 'contactInformation':
      return parseContactInformation(formStep.value);
    default:
  }
  return {};
};
