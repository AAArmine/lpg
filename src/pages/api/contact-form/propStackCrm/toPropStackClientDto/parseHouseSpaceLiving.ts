import merge from 'lodash.merge';
import { wrapCustomField } from './utils/wrapCustomField';

export const parseHouseSpaceLiving = (
  value: Record<string, any>
): Record<string, any> =>
  merge(
    {},
    value.livingArea
      ? wrapCustomField({
          wohnflache: value.livingArea,
        })
      : null,
    value.landArea
      ? wrapCustomField({
          grundstucksflache: value.landArea,
        })
      : null,
    value.rentedArea
      ? wrapCustomField({
          davon_vermietete_flache: value.rentedArea,
        })
      : null
  );
