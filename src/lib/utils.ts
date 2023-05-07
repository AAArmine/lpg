export const DATE_OPTIONS: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

export const toGermanDate = (dateString: string): string => {
  const newDate = new Date(dateString);
  return newDate.toLocaleDateString('de-DE', DATE_OPTIONS);
};

export const getWindowDimensions = () => {
  if (typeof window === 'undefined') {
    return { width: 0, height: 0 };
  }
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
};
