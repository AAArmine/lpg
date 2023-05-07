import { wrapCustomField } from './utils/wrapCustomField';

export const parseApartmentSpaceLiving = (
  value: Record<string, any>
): Record<string, any> | null =>
  value.livingArea
    ? wrapCustomField({
        wohnflache: value.livingArea,
      })
    : null;
