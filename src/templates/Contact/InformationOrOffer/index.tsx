import React from 'react';
import { useTranslations } from '../../../locale';
import { FormItem } from './FormItem';
import { Information } from './Icons/Information';
import { Offer } from './Icons/Offer';

type FormItems = Array<{
  img: React.ReactNode;
  value: 'information' | 'offer';
  text: string;
}>;

// eslint-disable-next-line react-hooks/rules-of-hooks
const t = useTranslations('contact-form');

const items: FormItems = [
  {
    img: <Offer />,
    value: 'offer',
    text: t('offer'),
  },
  {
    img: <Information />,
    value: 'information',
    text: t('information'),
  },
];

interface InformationOrOfferProps {
  onValueChange: (value: 'information' | 'offer') => void;
}

const InformationOrOffer: React.FC<InformationOrOfferProps> = ({
  onValueChange,
}) => (
  <div className="info-or-offer">
    {items.map((item, index) => (
      <FormItem
        key={index}
        img={item.img}
        text={item.text}
        onSelect={() => {
          onValueChange(item.value);
        }}
      />
    ))}
  </div>
);

export default InformationOrOffer;
