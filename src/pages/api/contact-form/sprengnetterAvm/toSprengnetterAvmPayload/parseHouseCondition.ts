/* eslint-disable @typescript-eslint/no-use-before-define */

export const parseHouseCondition = (
  value: Record<string, any>
): Record<string, any> => ({
  construction_year: value.yearOfConstruction,
  ...(value.objectState && {
    equipment: { value: parseObjectStateValue(value.objectState) },
  }),
});

const objectStateEinfach = 0;
const objectStateGehoben = 2;
const objectStateLuxuriös = 3;

const parseObjectStateValue = (value: number): string => {
  switch (value) {
    case objectStateEinfach:
      return 'EINFACH';
    case objectStateGehoben:
      return 'GEHOBEN';
    case objectStateLuxuriös:
      return 'STARK_GEHOBEN';
    default:
  }

  return 'MITTEL';
};
