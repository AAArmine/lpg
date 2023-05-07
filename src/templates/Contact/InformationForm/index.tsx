import React, { useCallback, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { useTranslations } from '../../../locale';
import { submitContactFormRequest } from '../submitContactFormRequest';
import { FormStepContactInformation } from './FormStepContactInformation';
import { FormStepSuccess } from '../FormStepSuccess';
import {
  ContactInformationFormStep,
  getInformationSchema,
  Schema,
} from '../schema';
import { FormStepBaseProps } from '../formStepBaseProps';
import { DownloadBrochureModal } from './DownloadBrochureModal';

const formStepsMapping: Record<string, React.FC<FormStepBaseProps<any>>> = {
  contactInformation: FormStepContactInformation,
};

interface InformationFormProps {
  onlineSource: string | null;
  onClose: (isCancelled: boolean) => void;
  onStepChanged: () => void;
}

export const InformationForm: React.FC<InformationFormProps> = ({
  onClose,
  onStepChanged,
  onlineSource,
}) => {
  const [schema, setSchema] = useState<Schema>(getInformationSchema());

  const onValueChange = (value: any) => {
    const contactInformation = schema.find(
      ({ name }) => name === 'contactInformation'
    )! as ContactInformationFormStep;
    contactInformation.value = value;

    if (
      contactInformation.value.maritalStatus === 'married' ||
      contactInformation.value.maritalStatus === 'partnership'
    ) {
      contactInformation.disabledOptions = [];
    } else {
      contactInformation.disabledOptions = ['partnerDateOfBirth'];
    }

    setSchema([...schema]);
  };

  const t = useTranslations('contact-form');

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [showDownloadPdfModal, setShowDownloadPdfModal] =
    useState<boolean>(false);

  const closeForm = (isCancelled: boolean) => {
    setIsSubmitted(false);
    setShowDownloadPdfModal(false);
    setSchema(getInformationSchema());
    onClose(isCancelled);
  };

  const submitForm = useCallback(async () => {
    setIsSubmitted(true);
    await submitContactFormRequest('information', onlineSource, schema);
    window.setTimeout(() => setShowDownloadPdfModal(true), 400);
  }, [schema, onlineSource, setIsSubmitted]);

  const canGoNext = !schema.some((s) => s.validate().length);

  return (
    <>
      {showDownloadPdfModal ? (
        <DownloadBrochureModal
          onClose={() => {
            setShowDownloadPdfModal(false);
          }}
        />
      ) : null}
      <Carousel
        showThumbs={false}
        autoPlay={false}
        showArrows={false}
        showIndicators={false}
        showStatus={false}
        swipeable={false}
        dynamicHeight={true}
        useKeyboardArrows={false}
        selectedItem={isSubmitted ? 1 : 0}
      >
        {schema
          .map((formStep) => {
            const FormStepComponent = formStepsMapping[formStep.name]!;
            return (
              <FormStepComponent
                key={formStep.name}
                value={formStep.value}
                errors={formStep.validate()}
                disabledOptions={formStep.disabledOptions}
                onValueChange={onValueChange}
              />
            );
          })
          .concat(<FormStepSuccess key="success" />)}
      </Carousel>
      <nav>
        {!isSubmitted ? (
          <>
            <button
              className="prev"
              type="button"
              onClick={() => {
                closeForm(true);
                onStepChanged();
              }}
            >
              <span>{t('prev')}</span>
            </button>
            <button
              className={`next ${!canGoNext ? 'disabled' : ''}`}
              type="button"
              disabled={!canGoNext}
              onClick={() => {
                submitForm();
                onStepChanged();
              }}
            >
              {t('send')}
            </button>
          </>
        ) : (
          <>
            <span />
            <button type="button" onClick={() => closeForm(false)}>
              {t('close')}
            </button>
          </>
        )}
      </nav>
    </>
  );
};

export default InformationForm;
