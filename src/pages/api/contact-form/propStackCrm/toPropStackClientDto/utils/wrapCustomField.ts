export const wrapCustomField = (
  value: Record<string, any>
): Record<string, any> => ({
  custom_fields: value,
});
