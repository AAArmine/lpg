/* eslint-disable @typescript-eslint/no-use-before-define */

// TODO: add a custom field in propstack
export const parseHouseConstruction = (
  value: string
): Record<string, any> | null => {
  const houseConstructionValue = parseHouseConstructionValue(value);
  if (houseConstructionValue) {
    return {
      tbd: houseConstructionValue,
    };
  }

  return null;
};

const parseHouseConstructionValue = (value: string): number | null => {
  switch (value) {
    case 'solidConstruction':
      return 0;
    case 'prefabricatedMassive':
      return 0;
    case 'prefabricatedWood':
      return 0;
    default:
  }
  return null;
};
