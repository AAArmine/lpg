export const parseCarParking = (
  value: Record<string, any>
): Record<string, any> => ({
  garages: value.numberOfUndergroundParkings > 0,
  outdoor_parking_space: value.numberOfParkingLots > 0,
});
