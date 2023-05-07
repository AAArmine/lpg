import React from 'react';
import { RealEstateInfos } from '../../lib/cms/types';

interface InfoProps {
  realEstateInfo: RealEstateInfos[];
}
const RentalSales: React.FC<InfoProps> = ({ realEstateInfo }) => {
  return (
    <div className="sec-rentalSales-forth-container text-center sec-content-container max-w-7xl mx-auto px-4 sm:px-6 pb-24">
      <h2 className="sec-main-title">
        Immobilienverkauf mit Wohnrecht in 5 einfachen Schritten
      </h2>
      <ol className="rentalSales-grid">
        {realEstateInfo.map((item, index) => (
          <li className="rentalSales-grid-item rs-item" key={index}>
            <h3>{item.title}</h3>
            <div className="grid-item-abs">{index + 1}</div>
            <p className="text-gray-700">
              {item && item.body.value.document.children[0].children[0].value}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default RentalSales;
