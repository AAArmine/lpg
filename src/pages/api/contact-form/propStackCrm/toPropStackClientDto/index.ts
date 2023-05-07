/* eslint-disable @typescript-eslint/no-use-before-define */
import merge from 'lodash.merge';
import { parseApartmentFloors } from './parseApartmentFloors';
import { parseApartmentHeating } from './parseApartmentHeating';
import { parseApartmentNumberOfRooms } from './parseApartmentNumberOfRooms';
import { parseCarParking } from './parseCarParking';
import { parseClientSource } from './parseClientSource';
import { parseClientStatus } from './parseClientStatus';
import { parseContactInformation } from './parseContactInformation';
import { parseFirstContactOnlineOffline } from './parseFirstContactOnlineOffline';
import { parseHouseCondition } from './parseHouseCondition';
import { parseHouseConstruction } from './parseHouseConstruction';
import { parseHouseFloors } from './parseHouseFloors';
import { parseHouseNumberOfRooms } from './parseHouseNumberOfRooms';
import { parseHouseProperty } from './parseHouseProperty';
import { parsePropertyType } from './parsePropertyType';
import { parseReferenceNumber } from './parseReferenceNumber';
import { parseQuestionnaireReceivedOnlineOffline } from './parseQuestionnaireReceivedOnlineOffline';
import { parseFirstContactDate } from './parseFirstContactDate';
import { parseContactMethod } from './parseContactMethod';
import { parseQuestionnaireDate } from './parseQuestionnaireDate';
import { parseApartmentSpaceLiving } from './parseApartmentSpaceLiving';
import { parseHouseSpaceLiving } from './parseHouseSpaceLiving';
import { parseMisc } from './parseMisc';

export const toPropStackClientDto = (
  schema: Array<Record<string, any>>,
  formType: 'offer' | 'information',
  requestId: string,
  onlineSource: string | null
): Record<string, any> =>
  merge(
    {},
    parseContactMethod(),
    parseFirstContactDate(),
    parseFirstContactOnlineOffline(),
    parseQuestionnaireReceivedOnlineOffline(formType),
    parseClientSource(onlineSource),
    parseClientStatus(formType),
    parseQuestionnaireDate(formType),
    parseReferenceNumber(requestId),
    ...schema.map(parseFormStepValues)
  );

/*
Checkout https://api.propstack.de/v1/custom_field_groups
to see the IDs of values of the custom fields
*/

const parseFormStepValues = (
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
      return parseApartmentFloors(formStep.value);
    case 'apartmentHeating':
      return parseApartmentHeating(formStep.value);
    case 'houseNumberOfRooms':
      return parseHouseNumberOfRooms(formStep.value);
    case 'apartmentNumberOfRooms':
      return parseApartmentNumberOfRooms(formStep.value);
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
