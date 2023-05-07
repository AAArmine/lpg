import type { NextApiRequest, NextApiResponse } from 'next';
import { ContactFormPostData } from './contactFormPostData';
import { saveContactToPropStack } from './propStackCrm';
import { sendAutoreplyEmail } from './sendAutoreplyEmail';
import { sendRequestEmail } from './sendRequestEmail';
import { saveContactToSprengnetterAvm } from './sprengnetterAvm';

const submitContactFormHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  if (req.method !== 'POST') {
    res.status(404).send('Method not allowed');
    return;
  }

  const postData: ContactFormPostData = req.body;

  try {
    const sprengnetterAvmEmailValues: Record<string, string> = {};
    if (postData.formType === 'offer') {
      try {
        const sprengnetterAvmValue = await saveContactToSprengnetterAvm(
          postData.request
        );

        sprengnetterAvmEmailValues.sprengnetterAvmValue =
          sprengnetterAvmValue.value.toLocaleString('de', {
            minimumFractionDigits: 0,
          });
        if (sprengnetterAvmValue.meta && sprengnetterAvmValue.meta.range) {
          sprengnetterAvmEmailValues.sprengnetterAvmMin =
            sprengnetterAvmValue.meta.range.min.toLocaleString('de', {
              minimumFractionDigits: 0,
            });
          sprengnetterAvmEmailValues.sprengnetterAvmMax =
            sprengnetterAvmValue.meta.range.max.toLocaleString('de', {
              minimumFractionDigits: 0,
            });
        }
      } catch {
        //
      }
    }
    const sentResults = await Promise.allSettled([
      sendRequestEmail(postData, sprengnetterAvmEmailValues),
      saveContactToPropStack(postData),
      sendAutoreplyEmail(postData),
    ]);
    res.status(200).send(JSON.stringify(sentResults, null, 2));
  } catch (ex: any) {
    res.status(500).send(ex.message || ex.toString());
  }
};

export default submitContactFormHandler;
