/* eslint-disable @typescript-eslint/no-use-before-define */

export const parsePropertyType = (value: string): Record<string, any> => {
  const construction = parsePropertyConstructionValue(value);
  return {
    category: parsePropertyTypeValue(value),
    ...(construction && { construction }),
  };
};

const HOUSE_TYPE_CONDO = 'ETW';
const HOUSE_TYPE_PRIVATE = 'EFH';
const HOUSE_TYPE_MULTIAPARTMENT = 'MFH';

const parsePropertyTypeValue = (value: string): string => {
  switch (value) {
    case 'multiApartmentHouse':
      return HOUSE_TYPE_MULTIAPARTMENT;
    case 'condominium':
      return HOUSE_TYPE_CONDO;

    default:
  }
  return HOUSE_TYPE_PRIVATE;
};

const parsePropertyConstructionValue = (value: string): string | null => {
  switch (value) {
    case 'detachedHouse':
      return 'FREISTEHEND';
    case 'endOfTerraceHouse':
      return 'REIHEN_ENDHAUS';
    case 'midTerraceHouse':
      return 'REIHEN_MITTELHAUS';
    case 'semiDetachedHouse':
      return 'DOPPELHAUS';

    default:
  }

  return null;
};
