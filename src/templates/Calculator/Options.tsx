import React from 'react';
import { useTranslations } from '../../locale';
import { SliderFlex } from '../SliderFlex';
import { NumberRangeInput } from './NumberRangeInput';
import { formatNumber } from './utils/formatNumber';
import { trackPropertyValueUpdated } from './utils/tracking';
import { ButtonsBar } from './ButtonsBar';

interface OptionsProps {
  worthy: number;
  worthyIncrement: number;
  maxWorthy: number;
  minFee: number;
  maxFee: number;
  showTitle: boolean;
  onWorthyChange: (value: number) => void;
}

export const Options: React.FC<OptionsProps> = ({
  worthy,
  worthyIncrement,
  maxWorthy,
  minFee,
  maxFee,
  showTitle,
  onWorthyChange,
}) => {
  const t = useTranslations('calculator');

  const propertyValueChanged = (value: number) => {
    trackPropertyValueUpdated('slider');
    onWorthyChange(value);
  };

  return (
    <div className="options-cnt">
      {showTitle && <h4>{t('calculator.title')}</h4>}
      <div className="options">
        <div className="slider-item">
          <div className="option-label">
            <label>{t('calculator.propertyValue.title')}*</label>
          </div>
          <span className="value-label">
            {t('calculator.propertyValue.value', {
              worthy: formatNumber(worthy),
            })}
          </span>
          <div>
            <SliderFlex
              min={0}
              max={maxWorthy}
              value={worthy}
              onValueChange={propertyValueChanged}
              valueIncrement={worthyIncrement}
            />
            <div className="slider-input">
              <NumberRangeInput
                min={0}
                max={maxWorthy}
                value={worthy}
                unit={t('eurSign')}
                onValueChange={propertyValueChanged}
              />
            </div>
          </div>
        </div>
        <div className="slider-item">
          <div className="option-label">
            <label>{t('calculator.monthlyFee.title')}*</label>
          </div>
          <span className="value-label">
            {t('calculator.monthlyFee.value', {
              minFee: formatNumber(minFee),
              maxFee: formatNumber(maxFee),
            })}
          </span>
        </div>
      </div>
      <div className="dsk">
        <ButtonsBar />
      </div>
    </div>
  );
};
