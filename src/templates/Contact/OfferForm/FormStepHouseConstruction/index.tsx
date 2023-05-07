import React from 'react';
import { useTranslations } from '../../../../locale';
import { FormStepBaseProps } from '../../formStepBaseProps';
import { FormStepContainer } from '../../FormStepContainer';

import { PrefabricatedMassive } from '../Icons/PrefabricatedMassive';
import { PrefabricatedWood } from '../Icons/PrefabricatedWood';
import { SolidConstruction } from '../Icons/SolidConstruction';
import { HouseConstructionValue } from '../../schema';
import { HouseConstructionItem } from './HouseConstructionItem';

interface FormItem {
  img: React.ReactNode;
  text: string;
  infoText: string;
  value: HouseConstructionValue;
}

type FormItems = Array<FormItem>;

// eslint-disable-next-line react-hooks/rules-of-hooks
const t = useTranslations('contact-form');

const items: FormItems = [
  {
    img: <SolidConstruction />,
    text: t('houseConstruction.solidConstruction.title'),
    infoText: t('houseConstruction.solidConstruction.infoText'),
    value: 'solidConstruction',
  },
  {
    img: <PrefabricatedMassive />,
    text: t('houseConstruction.prefabricatedMassive.title'),
    infoText: t('houseConstruction.prefabricatedMassive.infoText'),
    value: 'prefabricatedMassive',
  },
  {
    img: <PrefabricatedWood />,
    text: t('houseConstruction.prefabricatedWood.title'),
    infoText: t('houseConstruction.prefabricatedWood.infoText'),
    value: 'prefabricatedWood',
  },
];

export const FormStepHouseConstruction: React.FC<
  FormStepBaseProps<HouseConstructionValue>
> = ({ value, errors, onValueChange }) => (
  <FormStepContainer className="full-height">
    <div className="construction-item">
      <h3>{t('houseConstruction.title')}</h3>
      <div className="construction-item-container">
        {items.map((item, index) => (
          <HouseConstructionItem
            key={index}
            img={item.img}
            text={item.text}
            infoText={item.infoText}
            isActive={item.value === value}
            isValid={errors.length === 0}
            onSelect={() => onValueChange(item.value)}
          />
        ))}
      </div>
    </div>
  </FormStepContainer>
);
