export const formatNumber = (value: number): string =>
  value.toLocaleString('de', { minimumFractionDigits: 0 });
