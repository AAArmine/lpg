import React from 'react';
import Hero from '../../../public/assets/images/partSale/teilverkauf-im-alter.webp';
import HeroMob from '../../../public/assets/images/partSale/mob/teilverkauf-im-alter.webp';

const PartSaleBottom = () => {
  return (
    <div className="footer-sec-container">
      <picture>
        <source media="(min-width:768px)" srcSet={Hero.src} />
        <img src={HeroMob.src} alt="freude über erfolgreichen teilverkauf" />
      </picture>
    </div>
  );
};

export default PartSaleBottom;
