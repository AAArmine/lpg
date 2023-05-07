/* eslint-disable @typescript-eslint/no-use-before-define */

export const parseApartmentHeating = (
  value: Record<string, any>
): Record<string, any> => ({
  ...(value.window && {
    equipment: { windows: parseWindowValue(value.window) },
  }),
});

const parseWindowValue = (value: number): string => {
  switch (value) {
    case 0:
      return 'EINFACH';
    case 1:
      return 'ZWEIFACHVERGLASUNG';
    case 2:
      return 'DREIFACHVERGLASUNG';
    case 3:
      return 'KASTENFENSTER';
    case 4:
      return 'RAUMHOHE_VERGLASUNG';
    case 5:
      return 'SPEZIALVERGLASUNG';
    default:
  }

  return 'SONSTIGE';
};
