export const parseApartmentSpaceLiving = (
  value: Record<string, any>
): Record<string, any> | null => ({
  living_area: value.livingArea,
});
