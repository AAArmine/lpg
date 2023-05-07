import React from 'react';
import { Infos } from '../../lib/cms/types';

interface InfoProps {
  info?: Infos;
}

const Functions: React.FC<InfoProps> = ({ info }) => {
  return (
    <div>
      <div className="functions-container sec-howFunctions-grid">
        <div className="w-full sec-howFunctions-img">
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
        <div className="sec-howFunctions-absContent max-w-xl">
          <h3>{info && info.title}</h3>
          <p className="text-lg text-gray-700 pt-2">
            {info && info.body.value.document.children[0].children[0].value}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Functions;
