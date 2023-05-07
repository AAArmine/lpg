import React from 'react';
import { useTranslations } from '../../../../locale';
import { FormStepBaseProps } from '../../formStepBaseProps';
import { FormStepContainer } from '../../FormStepContainer';
import { Condominium } from '../Icons/Condominium';
import { HouseSemiDetached } from '../Icons/HouseSemiDetached';
import { HouseSingle } from '../Icons/HouseSingle';
import { HouseTripleMiddle } from '../Icons/HouseTripleMiddle';
import { HouseTripleLeftSelected } from '../Icons/HouseTripleLeftSelected';
import { HouseTypeValue } from '../../schema';
import { HouseTypeItem } from './HouseTypeItem';
import { ApartmentBuilding } from '../Icons/ApartmentBuilding';

interface FormItem {
  img: React.ReactNode;
  text: string;
  infoText: string;
  value: HouseTypeValue;
}

type FormItems = Array<FormItem>;

// eslint-disable-next-line react-hooks/rules-of-hooks
const t = useTranslations('contact-form');

const items: FormItems = [
  {
    img: <HouseSingle />,
    text: t('houseTypes.detachedHouse.title'),
    infoText: t('houseTypes.detachedHouse.infoText'),
    value: 'detachedHouse',
  },
  {
    img: <HouseTripleLeftSelected />,
    text: t('houseTypes.endOfTerraceHouse.title'),
    infoText: t('houseTypes.endOfTerraceHouse.infoText'),
    value: 'endOfTerraceHouse',
  },
  {
    img: <HouseTripleMiddle />,
    text: t('houseTypes.midTerraceHouse.title'),
    infoText: t('houseTypes.midTerraceHouse.infoText'),
    value: 'midTerraceHouse',
  },
  {
    img: <HouseSemiDetached />,
    text: t('houseTypes.semiDetachedHouse.title'),
    infoText: t('houseTypes.semiDetachedHouse.infoText'),
    value: 'semiDetachedHouse',
  },
  {
    img: <ApartmentBuilding />,
    text: t('houseTypes.multiApartmentHouse.title'),
    infoText: t('houseTypes.multiApartmentHouse.infoText'),
    value: 'multiApartmentHouse',
  },
  {
    img: <Condominium />,
    text: t('houseTypes.condominium.title'),
    infoText: t('houseTypes.condominium.infoText'),
    value: 'condominium',
  },
];

export const FormStepHouseType: React.FC<FormStepBaseProps<HouseTypeValue>> = ({
  value,
  errors,
  onValueChange,
}) => (
  <FormStepContainer className="full-height">
    <div className="house-types-container">
      {items.map((item, index) => (
        <HouseTypeItem
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
  </FormStepContainer>
);
