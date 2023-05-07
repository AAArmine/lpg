const CLIENT_STATUS_INFORMATION_REQUEST = 13273;
const CLIENT_STATUS_OFFER_REQUEST = 13277;

export const parseClientStatus = (
  formType: 'offer' | 'information'
): Record<string, number> => ({
  client_status_id:
    formType === 'offer'
      ? CLIENT_STATUS_OFFER_REQUEST
      : CLIENT_STATUS_INFORMATION_REQUEST,
});
