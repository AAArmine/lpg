import { wrapCustomField } from './utils/wrapCustomField';

export const parseQuestionnaireDate = (
  formType: 'offer' | 'information'
): Record<string, any> | null =>
  formType === 'offer' ? wrapCustomField({ questionnare: new Date() }) : null;
