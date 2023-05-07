/* eslint-disable @typescript-eslint/no-use-before-define */
import { wrapCustomField } from './utils/wrapCustomField';

export const parseHouseFloors = (
  value: Record<string, any>
): Record<string, any> => {
  const basementValue =
    value.basement != null ? parseBasementValue(value.basement) : null;

  return {
    ...(basementValue &&
      wrapCustomField({
        keller: parseBasementValue(value.basement),
      })),
  };
};

const BASEMENT_FULL_FORM_VALUE = 0;
const BASEMENT_FULL_PROPSTACK_VALUE = 13170;
const BASEMENT_PARTIALLY_FORM_VALUE = 1;
const BASEMENT_PARTIALLY_PROPSTACK_VALUE = 13171;
const BASEMENT_NONE_FORM_VALUE = 3;
const BASEMENT_NONE_PROPSTACK_VALUE = 13172;

const parseBasementValue = (value: number): number | null => {
  switch (value) {
    case BASEMENT_FULL_FORM_VALUE:
      return BASEMENT_FULL_PROPSTACK_VALUE;
    case BASEMENT_PARTIALLY_FORM_VALUE:
      return BASEMENT_PARTIALLY_PROPSTACK_VALUE;
    case BASEMENT_NONE_FORM_VALUE:
      return BASEMENT_NONE_PROPSTACK_VALUE;
    default:
  }
  return null;
};
