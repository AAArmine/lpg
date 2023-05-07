export const parseHouseSpaceLiving = (
  value: Record<string, any>
): Record<string, any> => ({
  living_area: value.livingArea,
  plot_area: value.landArea,
});
