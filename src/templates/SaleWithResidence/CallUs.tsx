import React from 'react';
import CallUsImg from '../../../public/assets/images/saleWithResidence/CallUsLp.webp';
import CallUsIcon from '../../../public/assets/images/saleWithResidence/callIconLp.png';

const CallUs = () => {
  return (
    <div className="sec-callUs-container">
      <div className="sec-content-container max-w-7xl mx-auto px-4 sm:px-6 pb-24">
        <div className="sec-callUs-grid">
          <div className="callUsItemOne px-10">
            <img src={CallUsImg.src} alt="callImg" />
          </div>
          <div className="callUsItemTwo text-grey">
            <h3 className="sec-main-title">Was können wir für Sie tun?</h3>
            <p>
              Ist nach der Durchsicht unserer Website eine Frage offengeblieben?
              Oder haben Sie ein anderes Anliegen? Rufen Sie uns gern an, wir
              sind für Sie da.
            </p>
            <div className="callUsSubGrid pt-5">
              <div>
                <img src={CallUsIcon.src} alt="Contact us" />
              </div>
              <div>
                <a href="tel:030/403-6579-10">
                  <div className="tellNumber">030/403-6579-10</div>
                </a>
                <div className="tellNumberText">Rund um die Uhr</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallUs;
