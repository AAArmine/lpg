/* eslint-disable @typescript-eslint/no-use-before-define */

export const parseHouseFloors = (
  value: Record<string, any>
): Record<string, any> => ({
  ...(value.numberOfFloors && { floor_number: value.numberOfFloors }),
  ...(value.location && { floor: value.location }),
});
