import React from 'react';
import { useTranslations } from '../../../locale';
import { FormStepBaseProps } from '../formStepBaseProps';
import { FormStepContainer } from '../FormStepContainer';
import { ConstructionYear } from './Icons/ConstructionYear';
import { Furnish } from './Icons/Furnish';
import { PropertyCondition } from './Icons/PropertyCondition';
import { HouseConditionValue, StepErrors } from '../schema';
import { FormItemSlider } from './FormItemSlider';

const OBJECT_STATE_MIN_VALUE = 0;
const OBJECT_STATE_MAX_VALUE = 4;
const FURNISHING_MIN_VALUE = 0;
const FURNISHING_MAX_VALUE = 3;

export const FormStepHouseCondition: React.FC<
  FormStepBaseProps<HouseConditionValue>
> = ({ value, errors, onValueChange, getMinValue, getMaxValue }) => {
  const t = useTranslations('contact-form');

  const getObjectStateValue = (objectStateValue: number): string =>
    t(`houseCondition.objectState.options.${objectStateValue}`);

  const getFurnishingValue = (furnishingValue: number): string =>
    t(`houseCondition.furnishing.options.${furnishingValue}`);

  const getItemErrors = (itemName: string): StepErrors => {
    switch (itemName) {
      case 'yearOfConstruction':
        return errors.filter((e) => e.includes('yearOfConstruction'));
      case 'objectState':
        return errors.filter((e) => e.includes('objectState'));
      case 'furnishing':
        return errors.filter((e) => e.includes('furnishing'));
      default:
    }

    return [];
  };

  return (
    <FormStepContainer>
      <FormItemSlider
        value={value.yearOfConstruction || getMinValue!() - 1}
        errors={getItemErrors('yearOfConstruction')}
        img={<ConstructionYear />}
        text={t('houseCondition.yearOfConstruction.title')}
        infoText={t('houseCondition.yearOfConstruction.infoText')}
        minRange={getMinValue!()}
        maxRange={getMaxValue!()}
        onValueChange={(newValue: number) => {
          onValueChange({ ...value, yearOfConstruction: newValue });
        }}
        renderValue={(newValue) => (
          <select
            value={newValue >= getMinValue!() ? newValue : ''}
            className={newValue < getMinValue!() ? 'default' : ''}
            onChange={(e) => {
              onValueChange({
                ...value,
                yearOfConstruction: parseInt(e.target.value, 10),
              });
            }}
          >
            <option value="" disabled hidden>
              {t('pleaseSelect')}
            </option>
            {new Array<number>(getMaxValue!() + 1 - getMinValue!())
              .fill(0)
              .map((_, index) => (
                <option
                  className="select-option"
                  value={getMinValue!() + index}
                  key={index}
                >
                  {getMinValue!() + index}
                </option>
              ))}
          </select>
        )}
      />
      <FormItemSlider
        value={value.objectState != null ? value.objectState : -1}
        errors={getItemErrors('objectState')}
        img={<PropertyCondition />}
        text={t('houseCondition.objectState.title')}
        infoText={t('houseCondition.objectState.infoText')}
        minRange={OBJECT_STATE_MIN_VALUE}
        maxRange={OBJECT_STATE_MAX_VALUE}
        onValueChange={(newValue: number) => {
          onValueChange({ ...value, objectState: newValue });
        }}
        renderValue={(newValue) => (
          <select
            value={newValue >= 0 ? newValue : ''}
            className={newValue < 0 ? 'default' : ''}
            onChange={(e) => {
              onValueChange({
                ...value,
                objectState: parseInt(e.target.value, 10),
              });
            }}
          >
            <option value="" disabled hidden>
              {t('pleaseSelect')}
            </option>
            {new Array<number>(OBJECT_STATE_MAX_VALUE + 1)
              .fill(0)
              .map((_, index) => (
                <option className="select-option" value={index} key={index}>
                  {getObjectStateValue(index)}
                </option>
              ))}
          </select>
        )}
      />
      <FormItemSlider
        value={value.furnishing != null ? value.furnishing : -1}
        errors={getItemErrors('furnishing')}
        img={<Furnish />}
        text={t('houseCondition.furnishing.title')}
        infoText={t('houseCondition.furnishing.infoText')}
        minRange={FURNISHING_MIN_VALUE}
        maxRange={FURNISHING_MAX_VALUE}
        onValueChange={(newValue: number) => {
          onValueChange({ ...value, furnishing: newValue });
        }}
        renderValue={(newValue) => (
          <select
            value={newValue >= 0 ? newValue : ''}
            className={newValue < 0 ? 'default' : ''}
            onChange={(e) => {
              onValueChange({
                ...value,
                furnishing: parseInt(e.target.value, 10),
              });
            }}
          >
            <option value="" disabled hidden>
              {t('pleaseSelect')}
            </option>
            {new Array<number>(FURNISHING_MAX_VALUE + 1)
              .fill(0)
              .map((_, index) => (
                <option className="select-option" value={index} key={index}>
                  {getFurnishingValue(index)}
                </option>
              ))}
          </select>
        )}
      />
    </FormStepContainer>
  );
};
