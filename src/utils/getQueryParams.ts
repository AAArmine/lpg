export const getUrlSearchParams = (search?: string): Record<string, string> => {
  const params = new URLSearchParams(search || window.location.search);

  const res: Record<string, string> = {};
  params.forEach((value, key) => {
    res[key.toLowerCase()] = value;
  });

  return res;
};
