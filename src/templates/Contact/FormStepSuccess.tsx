import React from 'react';
import { useTranslations } from '../../locale';
import { FormStepContainer } from './FormStepContainer';
import { Success } from './OfferForm/Icons/Success';

export const FormStepSuccess = () => {
  const t = useTranslations('contact-form');
  return (
    <FormStepContainer>
      <div className="success-container">
        <div className="success-icon">
          <Success />
        </div>
        <h3>{t('successMessage')}</h3>
      </div>
    </FormStepContainer>
  );
};
