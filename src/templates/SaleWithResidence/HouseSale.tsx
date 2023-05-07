import React from 'react';
import { Infos } from '../../lib/cms/types';

interface InfoProps {
  info?: Infos;
}

const HouseSale: React.FC<InfoProps> = ({ info }) => {
  return (
    <div className="houseSale-container pb-24 pt-24">
      <div className="sec-howFunctions-grid">
        <div className="sec-howFunctions-relContent ">
          <div className="houseSaleAbs sm:px-6">
            <h2>{info && info.title}</h2>
            <p className="text-lg text-gray-700 pt-2">
              {info && info.body.value.document.children[0].children[0].value}
            </p>
          </div>
        </div>
        <div className="w-full sec-houseSale-img">
          <picture>
            <source
              media="(min-width:768px)"
              srcSet={info?.image && info?.image.url}
            />
            <img
              className="obj-fit-img"
              src={info?.image && info?.image.url}
              alt={info?.image && info?.image.alt}
            />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default HouseSale;
