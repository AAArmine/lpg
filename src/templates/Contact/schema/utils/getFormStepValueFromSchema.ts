export const getFormStepValueFromSchema = <T>(
  stepName: string,
  schema: Array<{ value: T; name: string }> | null
): T | null =>
  (schema || []).find(({ name }) => name === stepName)?.value || null;
