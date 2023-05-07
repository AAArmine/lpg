import { wrapCustomField } from './utils/wrapCustomField';

const QUESTIONNAIRE_RECEIVED_ONLINE_VALUE = 13173;

export const parseQuestionnaireReceivedOnlineOffline = (
  formType: 'offer' | 'information'
): Record<string, string> | null =>
  formType === 'offer'
    ? wrapCustomField({
        questionnaire_online_offline: QUESTIONNAIRE_RECEIVED_ONLINE_VALUE,
      })
    : null;
