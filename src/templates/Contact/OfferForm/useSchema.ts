import { useState } from 'react';
import {
  Schema,
  getHouseTypeSchema,
  getApartmentTypeSchema,
  ContactInformationFormStep,
} from '../schema';
import { event as gTagEvent } from '../../../lib/gtag';
import {
  offerFormStepActionGtagEventName,
  getGtagEventLabel,
  GTAG_EVENT_CATEGORY,
} from '../utils/tracking';

interface UseSchemaReturnType {
  schema: Schema;
  activeStepIndex: number;
  canGoNext: boolean;
  isLastStep: boolean;
  numberOfSteps: number;
  progressPercentage: number;
  goToPrevStep: () => void;
  goToNextStep: () => void;
  onValueChange: (value: any) => void;
  reset: () => void;
}

const APARTMENT_TYPES = ['condominium'];

export const useSchema = (): UseSchemaReturnType => {
  const [schema, setSchema] = useState<Schema>(getHouseTypeSchema(null));
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const goToPrevStep = () => {
    if (activeStepIndex === 0) {
      throw Error('Cannot go back from the first step');
    }
    setActiveStepIndex(activeStepIndex - 1);
  };

  const goToNextStep = () => {
    if (activeStepIndex < schema.length - 1) {
      const errors = schema[activeStepIndex]!.validate();
      if (errors.length) {
        throw Error(errors.join('\n'));
      }
      gTagEvent({
        action: offerFormStepActionGtagEventName(
          schema,
          activeStepIndex + 1,
          'moved_to_next'
        ),
        category: GTAG_EVENT_CATEGORY,
        label: getGtagEventLabel('offer'),
      });
      setActiveStepIndex(activeStepIndex + 1);
    }
  };

  const onValueChange = (value: any) => {
    const currentFormStep = schema.find(
      ({ name }) => name === schema[activeStepIndex]!.name
    )!;
    const currentFormStepName = currentFormStep.name;
    const currentFormStepPreviousValue = currentFormStep.value;

    let newSchema: Schema = ([] as Schema).concat(...schema);
    newSchema[activeStepIndex]!.value = value;

    switch (currentFormStepName) {
      case 'houseType':
        if (APARTMENT_TYPES.includes(value)) {
          if (
            !currentFormStepPreviousValue ||
            !APARTMENT_TYPES.includes(currentFormStepPreviousValue as string)
          ) {
            newSchema = getApartmentTypeSchema(newSchema);
          }
        } else if (
          !currentFormStepPreviousValue ||
          APARTMENT_TYPES.includes(currentFormStepPreviousValue as string)
        ) {
          newSchema = getHouseTypeSchema(newSchema);
        }
        break;
      case 'contactInformation':
        {
          const contactInformation = newSchema.find(
            ({ name }) => name === 'contactInformation'
          )! as ContactInformationFormStep;
          if (
            contactInformation.value.maritalStatus === 'married' ||
            contactInformation.value.maritalStatus === 'partnership'
          ) {
            contactInformation.disabledOptions = [];
          } else {
            contactInformation.disabledOptions = ['partnerDateOfBirth'];
          }
        }
        break;
      case 'houseSpaceLiving':
        {
          const { livingArea } = value;
          const newSchemaStep = newSchema.find(
            ({ name }) => name === currentFormStepName
          );
          if (newSchemaStep) {
            newSchemaStep.setMaxValue!(livingArea || 0);
            if (!livingArea) {
              newSchemaStep.disabledOptions = ['rentedArea'];
            } else {
              newSchemaStep.disabledOptions = [];
            }
          }
        }
        break;
      default:
    }

    setSchema(newSchema);
  };

  const reset = () => {
    setSchema(getHouseTypeSchema(null));
    setActiveStepIndex(0);
  };

  return {
    schema,
    activeStepIndex,
    canGoNext: !schema[activeStepIndex]!.validate().length,
    isLastStep: activeStepIndex === schema.length - 1,
    numberOfSteps: schema.length,
    progressPercentage: ((activeStepIndex + 1) / schema.length) * 100,
    goToPrevStep,
    goToNextStep,
    onValueChange,
    reset,
  };
};
