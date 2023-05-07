import React from 'react';
import { SalesFAQs } from '../../lib/cms/types';
import Faq from '../Faq';

interface InfoProps {
  salesFAQs: SalesFAQs[];
}

const FaqSecContainer: React.FC<InfoProps> = ({ salesFAQs }) => {
  const newFAQs = salesFAQs?.map((item) => ({
    question: item.question,
    answer: item.answer.value.document.children[0].children[0].value,
  }));

  return (
    <Faq
      faqs={newFAQs}
      title={
        <>
          Häufige gestellte Fragen
          <span className="secondary-title">zum Hausverkauf mit Wohnrecht</span>
        </>
      }
    />
  );
};

export default FaqSecContainer;
