import React from 'react';
import { useTranslations } from '../../../locale';
import { FormStepBaseProps } from '../formStepBaseProps';
import { FormStepContainer } from '../FormStepContainer';
import { HousePropertiesValue, HousePropertyValueNames } from '../schema';
import { Pool } from './Icons/Pool';
import { Sauna } from './Icons/Sauna';
import { SolarPanel } from './Icons/SolarPanel';
import { FormItemYesNo } from './FormItemYesNo';

interface FormItem {
  img: React.ReactNode;
  name: HousePropertyValueNames;
  text: string;
  infoText: string;
}

type FormItems = Array<FormItem>;

// eslint-disable-next-line react-hooks/rules-of-hooks
const t = useTranslations('contact-form');

const items: FormItems = [
  {
    img: <Pool />,
    name: 'pool',
    text: t('houseProperties.pool.title'),
    infoText: t('houseProperties.pool.infoText'),
  },
  {
    img: <Sauna />,
    name: 'sauna',
    text: t('houseProperties.sauna.title'),
    infoText: t('houseProperties.sauna.infoText'),
  },
  {
    img: <SolarPanel />,
    name: 'solarPanel',
    text: t('houseProperties.solarPanel.title'),
    infoText: t('houseProperties.solarPanel.infoText'),
  },
];

export const FormStepHouseProperty: React.FC<
  FormStepBaseProps<HousePropertiesValue>
> = ({ value, errors, onValueChange }) => (
  <FormStepContainer>
    {items.map((item, index) => (
      <FormItemYesNo
        value={value[item.name]}
        errors={errors}
        key={index}
        img={item.img}
        text={item.text}
        infoText={item.infoText}
        onValueChange={(newValue) => {
          onValueChange({ ...value, [item.name]: newValue });
        }}
      />
    ))}
  </FormStepContainer>
);
