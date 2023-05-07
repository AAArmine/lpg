/* eslint-disable @typescript-eslint/no-use-before-define */
import { wrapCustomField } from './utils/wrapCustomField';

export const parsePropertyType = (
  value: string
): Record<string, any> | null => {
  const propertyTypeValue = parsePropertyTypeValue(value);
  if (propertyTypeValue) {
    return wrapCustomField({
      objektart: propertyTypeValue,
    });
  }

  return null;
};

const PROPERTY_TYPE_DETACHED_HOUSE_FORM_VALUE = 'detachedHouse';
const PROPERTY_TYPE_DETACHED_HOUSE_PROPSTACK_VALUE = 11000;
const PROPERTY_TYPE_END_OF_TERRACE_HOUSE_FORM_VALUE = 'endOfTerraceHouse';
const PROPERTY_TYPE_END_OF_TERRACE_HOUSE_PROPSTACK_VALUE = 12562;
const PROPERTY_TYPE_MID_TERRACE_HOUSE_FORM_VALUE = 'midTerraceHouse';
const PROPERTY_TYPE_MID_TERRACE_HOUSE_PROPSTACK_VALUE = 12563;
const PROPERTY_TYPE_SEMI_DETACHED_HOUSE_FORM_VALUE = 'semiDetachedHouse';
const PROPERTY_TYPE_SEMI_DETACHED_HOUSE_PROPSTACK_VALUE = 11004;
const PROPERTY_TYPE_MULTI_APARTMENT_HOUSE_FORM_VALUE = 'multiApartmentHouse';
const PROPERTY_TYPE_MULTI_APARTMENT_HOUSE_PROPSTACK_VALUE = 11003;
const PROPERTY_TYPE_CONDOMINIUM_FORM_VALUE = 'condominium';
const PROPERTY_TYPE_CONDOMINIUM_PROPSTACK_VALUE = 11005;

const parsePropertyTypeValue = (value: string): number | null => {
  switch (value) {
    case PROPERTY_TYPE_DETACHED_HOUSE_FORM_VALUE:
      return PROPERTY_TYPE_DETACHED_HOUSE_PROPSTACK_VALUE;
    case PROPERTY_TYPE_END_OF_TERRACE_HOUSE_FORM_VALUE:
      return PROPERTY_TYPE_END_OF_TERRACE_HOUSE_PROPSTACK_VALUE;
    case PROPERTY_TYPE_MID_TERRACE_HOUSE_FORM_VALUE:
      return PROPERTY_TYPE_MID_TERRACE_HOUSE_PROPSTACK_VALUE;
    case PROPERTY_TYPE_SEMI_DETACHED_HOUSE_FORM_VALUE:
      return PROPERTY_TYPE_SEMI_DETACHED_HOUSE_PROPSTACK_VALUE;
    case PROPERTY_TYPE_MULTI_APARTMENT_HOUSE_FORM_VALUE:
      return PROPERTY_TYPE_MULTI_APARTMENT_HOUSE_PROPSTACK_VALUE;
    case PROPERTY_TYPE_CONDOMINIUM_FORM_VALUE:
      return PROPERTY_TYPE_CONDOMINIUM_PROPSTACK_VALUE;
    default:
  }
  return null;
};
