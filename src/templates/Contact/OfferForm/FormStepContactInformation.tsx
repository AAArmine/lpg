import React from 'react';
import { useTranslations } from '../../../locale';
import { CheckBox } from '../CheckBox';
import { FormStepBaseProps } from '../formStepBaseProps';
import { FormStepContainer } from '../FormStepContainer';
import { ContactInformationValue } from '../schema';

export const FormStepContactInformation: React.FC<
  FormStepBaseProps<ContactInformationValue>
> = ({ value, errors, disabledOptions, onValueChange }) => {
  const t = useTranslations('contact-form');

  return (
    <FormStepContainer>
      <div className="contact-info-container">
        <h3>{t('contact-info.title.offer')}</h3>
        <div className="contact-container">
          <div className="input-container salutation">
            <select
              value={value.salutation || ''}
              className={!value.salutation ? 'default' : ''}
              placeholder={t('contact-info.salutation.title')}
              onChange={(e) => {
                onValueChange({ ...value, salutation: e.target.value });
              }}
            >
              <option value="" disabled hidden>
                {t('contact-info.salutation.title')}
              </option>
              <option value="mr">{t('contact-info.salutation.mr')}</option>
              <option value="ms">{t('contact-info.salutation.ms')}</option>
              <option value="mrms">{t('contact-info.salutation.mrms')}</option>
            </select>
          </div>
          <div className="input-container first-name">
            <input
              type="text"
              value={value.firstName || ''}
              placeholder={`${t('contact-info.firstName')}${t('required')}`}
              onChange={(e) =>
                onValueChange({ ...value, firstName: e.target.value })
              }
            />
          </div>
          <div className="input-container last-name">
            <input
              type="text"
              value={value.lastName || ''}
              placeholder={`${t('contact-info.lastName')}${t('required')}`}
              onChange={(e) =>
                onValueChange({ ...value, lastName: e.target.value })
              }
            />
          </div>
          <div className="input-container date-Of-birth">
            <input
              type="text"
              value={value.dateOfBirth || ''}
              placeholder={`${t('contact-info.dateOfBirth')}${t('required')}`}
              onChange={(e) =>
                onValueChange({ ...value, dateOfBirth: e.target.value })
              }
            />
          </div>
          <div className="input-container kids-number">
            <input
              type="text"
              value={value.numberOfChildren || ''}
              placeholder={t('contact-info.children')}
              onChange={(e) =>
                onValueChange({ ...value, numberOfChildren: e.target.value })
              }
            />
          </div>
          <div className="input-container marital-status">
            <select
              value={value.maritalStatus || ''}
              className={!value.maritalStatus ? 'default' : ''}
              placeholder={t('contact-info.maritalStatus.title')}
              onChange={(e) => {
                let { partnerDateOfBirth } = value;
                const maritalStatus = e.target.value;
                if (
                  maritalStatus !== 'married' &&
                  maritalStatus !== 'partnership'
                ) {
                  partnerDateOfBirth = null;
                }
                onValueChange({ ...value, maritalStatus, partnerDateOfBirth });
              }}
            >
              <option value="" disabled={true}>
                {t('contact-info.maritalStatus.title')}
              </option>
              <option value="single">
                {t('contact-info.maritalStatus.single')}
              </option>
              <option value="divorced">
                {t('contact-info.maritalStatus.divorced')}
              </option>
              <option value="married">
                {t('contact-info.maritalStatus.married')}
              </option>
              <option value="partnership">
                {t('contact-info.maritalStatus.partnership')}
              </option>
              <option value="widowed">
                {t('contact-info.maritalStatus.widowed')}
              </option>
            </select>
          </div>
          {!disabledOptions.includes('partnerDateOfBirth') && (
            <div className="input-container date-Of-birth-partner">
              <input
                type="text"
                value={value.partnerDateOfBirth || ''}
                placeholder={t('contact-info.partnerDateOfBirth')}
                onChange={(e) =>
                  onValueChange({
                    ...value,
                    partnerDateOfBirth: e.target.value,
                  })
                }
              />
            </div>
          )}
          <div className="input-container email">
            <input
              type="text"
              className={`contact-info-data ${
                !!value.email && errors.some((e) => e.includes('email'))
                  ? 'error'
                  : ''
              }`}
              value={value.email || ''}
              placeholder={`${t('contact-info.email')}${t('required')}`}
              onChange={(e) =>
                onValueChange({
                  ...value,
                  email: e.target.value,
                })
              }
            />
          </div>
          <div className="input-container phone">
            <input
              type="text"
              value={value.tel || ''}
              placeholder={`${t('contact-info.phone')}${t('required')}`}
              onChange={(e) =>
                onValueChange({
                  ...value,
                  tel: e.target.value,
                })
              }
            />
          </div>
          <div className="input-container street">
            <input
              type="text"
              value={value.street || ''}
              placeholder={`${t('contact-info.street')}${t('required')}`}
              onChange={(e) =>
                onValueChange({
                  ...value,
                  street: e.target.value,
                })
              }
            />
          </div>
          <div className="input-container building-number">
            <input
              type="text"
              value={value.houseNumber || ''}
              placeholder={`${t('contact-info.houseNumber')}${t('required')}`}
              onChange={(e) =>
                onValueChange({
                  ...value,
                  houseNumber: e.target.value,
                })
              }
            />
          </div>
          <div className="input-container zip-code">
            <input
              type="text"
              value={value.zipCode || ''}
              placeholder={`${t('contact-info.zipCode')}${t('required')}`}
              onChange={(e) =>
                onValueChange({
                  ...value,
                  zipCode: e.target.value,
                })
              }
            />
          </div>
          <div className="input-container city">
            <input
              type="text"
              value={value.city || ''}
              placeholder={`${t('contact-info.city')}${t('required')}`}
              onChange={(e) =>
                onValueChange({
                  ...value,
                  city: e.target.value,
                })
              }
            />
          </div>
          <div className="input-container viaEmailAndPost">
            <CheckBox
              radio
              isChecked={value.receiveInformationViaPostAndEmail}
              text={t('contact-info.receiveOfferViaPostAndEmail')}
              onToggle={() => {
                let {
                  receiveInformationViaPostAndEmail,
                  receiveInformationViaEmail,
                } = value;
                receiveInformationViaPostAndEmail =
                  !receiveInformationViaPostAndEmail;
                receiveInformationViaEmail = !receiveInformationViaEmail;

                onValueChange({
                  ...value,
                  receiveInformationViaEmail,
                  receiveInformationViaPostAndEmail,
                });
              }}
            />
          </div>
          <div className="input-container viaEmail">
            <CheckBox
              radio
              isChecked={value.receiveInformationViaEmail}
              text={t('contact-info.receiveOfferViaEmail')}
              onToggle={() => {
                let {
                  receiveInformationViaPostAndEmail,
                  receiveInformationViaEmail,
                } = value;
                receiveInformationViaPostAndEmail =
                  !receiveInformationViaPostAndEmail;
                receiveInformationViaEmail = !receiveInformationViaEmail;

                onValueChange({
                  ...value,
                  receiveInformationViaEmail,
                  receiveInformationViaPostAndEmail,
                });
              }}
            />
          </div>
          <div className="input-container comments">
            <textarea
              value={value.comment || ''}
              placeholder={t('contact-info.comments')}
              onChange={(e) =>
                onValueChange({ ...value, comment: e.target.value })
              }
            />
          </div>
          <div className="input-container subscribe">
            <CheckBox
              isChecked={value.subscribeToNewsLetter}
              text={t('contact-info.subscribeToNewsLetter')}
              onToggle={() =>
                onValueChange({
                  ...value,
                  subscribeToNewsLetter: !value.subscribeToNewsLetter,
                })
              }
            />
          </div>
        </div>
      </div>
    </FormStepContainer>
  );
};
