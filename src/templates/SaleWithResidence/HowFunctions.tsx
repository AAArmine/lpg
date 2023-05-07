import React from 'react';
import { Infos } from '../../lib/cms/types';

interface InfoProps {
  info?: Infos;
}
const HowFunctions: React.FC<InfoProps> = ({ info }) => {
  return (
    <div className="howFunctions-container pb-24">
      <div className="sec-howFunctions-grid">
        <div className="w-full sec-how-functions-img">
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
        <div className="sec-howFunctions-absContent max-w-xl px-4 sm:px-6">
          <h2>{info && info.title}</h2>
          <p className="text-lg text-gray-700 pt-2">
            {info && info.body.value.document.children[0].children[0].value}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowFunctions;
