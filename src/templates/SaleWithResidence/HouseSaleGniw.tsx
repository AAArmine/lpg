import React from 'react';
import { Infos } from '../../lib/cms/types';

interface InfoProps {
  info?: Infos;
}

const HouseSaleGniw: React.FC<InfoProps> = ({ info }) => {
  return (
    <div className="HouseSaleWithGniw-container">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-24">
        <h3 className="text-center">{info && info.title}</h3>
        <p className="mt-2 text-lg text-gray-700 pt-2">
          {info && info.body.value.document.children[0].children[0].value}
        </p>
      </div>
    </div>
  );
};

export default HouseSaleGniw;
