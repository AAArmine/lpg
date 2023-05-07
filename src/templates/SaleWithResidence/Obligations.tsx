import React from 'react';
import { Infos } from '../../lib/cms/types';

interface InfoProps {
  info?: Infos;
}

const Obligations: React.FC<InfoProps> = ({ info }) => {
  return (
    <div className="sec-obligations-third-container">
      <div className="sec-content-container max-w-7xl mx-auto px-4 sm:px-6 pb-24">
        <div className="sec-about-first-grid">
          <div className="sec-about-item-first-content">
            <h2>{info && info.title}</h2>
            <p className="mt-2 text-lg text-gray-700 pt-2">
              {info && info.body.value.document.children[0].children[0].value}
            </p>
          </div>

          <div className="sec-obligations-img">
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
    </div>
  );
};

export default Obligations;
