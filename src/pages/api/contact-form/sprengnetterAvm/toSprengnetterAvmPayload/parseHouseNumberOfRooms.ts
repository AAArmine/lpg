export const parseHouseNumberOfRooms = (
  value: Record<string, any>
): Record<string, any> => ({
  ...(value.elevator && { elevator: value.elevator === 'yes ' }),
  rooms: value.numberOfRooms,
  ...(value.toilets > 1 && { equipment: { bath_room: 'MEHR_ALS_EIN_BAD' } }),
});
