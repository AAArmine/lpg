import React, { useCallback, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { useSchema } from './useSchema';
import { useTranslations } from '../../../locale';
import { submitContactFormRequest } from '../submitContactFormRequest';
import { FormStepHouseType } from './FormStepHouseType';
import { FormStepHouseSpaceLiving } from './FormStepHouseSpaceLiving';
import { FormStepApartmentSpaceLiving } from './FormStepApartmentSpaceLiving';
import { FormStepHouseCondition } from './FormStepHouseCondition';
import { FormStepHouseProperty } from './FormStepHouseProperty';
import { FormStepCarParking } from './FormStepCarParking';
import { FormStepContactInformation } from './FormStepContactInformation';
import { FormStepBaseProps } from '../formStepBaseProps';
import { FormStepHouseFloors } from './FormStepHouseFloors';
import { FormStepSuccess } from '../FormStepSuccess';
import { FormStepHouseConstruction } from './FormStepHouseConstruction';
import { FormStepHouseNumberOfRooms } from './FormStepHouseNumberOfRooms';
import { FormStepApartmentFloors } from './FormStepApartmentFloors';
import { FormStepApartmentHeating } from './FormStepApartmentHeating';
import { FormStepApartmentNumberOfRooms } from './FormStepApartmentNumberOfRooms';
import { FormStepMisc } from './FormStepMisc';

interface OfferFormProps {
  onlineSource: string | null;
  onClose: (isCancelled: boolean) => void;
  onStepChanged: () => void;
}

const formStepsMapping: Record<string, React.FC<FormStepBaseProps<any>>> = {
  houseType: FormStepHouseType,
  houseSpaceLiving: FormStepHouseSpaceLiving,
  apartmentSpaceLiving: FormStepApartmentSpaceLiving,
  houseCondition: FormStepHouseCondition,
  houseFloors: FormStepHouseFloors,
  apartmentFloors: FormStepApartmentFloors,
  apartmentHeating: FormStepApartmentHeating,
  houseNumberOfRooms: FormStepHouseNumberOfRooms,
  apartmentNumberOfRooms: FormStepApartmentNumberOfRooms,
  houseProperty: FormStepHouseProperty,
  carParking: FormStepCarParking,
  contactInformation: FormStepContactInformation,
  houseConstruction: FormStepHouseConstruction,
  misc: FormStepMisc,
};

export const OfferForm: React.FC<OfferFormProps> = ({
  onClose,
  onStepChanged,
  onlineSource,
}) => {
  const t = useTranslations('contact-form');

  const {
    schema,
    activeStepIndex,
    canGoNext,
    numberOfSteps,
    progressPercentage,
    goToPrevStep,
    goToNextStep,
    onValueChange,
    reset,
  } = useSchema();

  const isLastStep = activeStepIndex === numberOfSteps - 1;

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const closeForm = (isCancelled: boolean) => {
    setIsSubmitted(false);
    reset();
    onClose(isCancelled);
  };

  const submitForm = useCallback(async () => {
    setIsSubmitted(true);
    await submitContactFormRequest('offer', onlineSource, schema);
  }, [schema, onlineSource, setIsSubmitted]);

  return (
    <div className="offer-form rounded">
      <div className="progress">
        <div className="trail">
          <i style={{ width: `${progressPercentage}%` }} />
        </div>
        <div className="status">
          {t('progress', {
            page: activeStepIndex + 1,
            total: numberOfSteps,
          })}
        </div>
      </div>
      <Carousel
        showThumbs={false}
        autoPlay={false}
        showArrows={false}
        showIndicators={false}
        showStatus={false}
        swipeable={false}
        dynamicHeight={true}
        useKeyboardArrows={false}
        selectedItem={activeStepIndex + (isLastStep && isSubmitted ? 1 : 0)}
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
                onValueChange={(value, forceNextStep) => {
                  onValueChange(value);
                  if (forceNextStep) {
                    goToNextStep();
                    onStepChanged();
                  }
                }}
                getMinValue={formStep.getMinValue?.bind(formStep)}
                getMaxValue={formStep.getMaxValue?.bind(formStep)}
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
                if (activeStepIndex > 0) {
                  goToPrevStep();
                } else {
                  closeForm(true);
                }
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
                if (!isLastStep) {
                  goToNextStep();
                } else {
                  submitForm();
                }
                onStepChanged();
              }}
            >
              {t(!isLastStep ? 'next' : 'send')}
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
    </div>
  );
};
