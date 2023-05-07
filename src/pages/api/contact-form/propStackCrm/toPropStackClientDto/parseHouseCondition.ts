import { wrapCustomField } from './utils/wrapCustomField';

export const parseHouseCondition = (
  value: Record<string, any>
): Record<string, any> => ({
  ...(value.yearOfConstruction &&
    wrapCustomField({
      baujahr: value.yearOfConstruction,
    })),
});
