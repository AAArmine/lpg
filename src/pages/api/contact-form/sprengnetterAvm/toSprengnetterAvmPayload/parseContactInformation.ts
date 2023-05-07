export const parseContactInformation = (
  value: Record<string, any>
): Record<string, any> => ({
  address: {
    nation: 'DE',
    street: value.street,
    house_number: value.houseNumber,
    zip: value.zipCode,
    town: value.city,
  },
});
