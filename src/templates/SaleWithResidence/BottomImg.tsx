import React from 'react';
import Hero from '../../../public/assets/images/saleWithResidence/hausverkauf.webp';
import HeroMob from '../../../public/assets/images/saleWithResidence/hausverkaufMob.webp';

const BottomImg = () => {
  return (
    <div className="footer-sec-container">
      <picture>
        <source media="(min-width:768px)" srcSet={Hero.src} />
        <img src={HeroMob.src} alt="hausverkauf mit wohnrecht" />
      </picture>
    </div>
  );
};

export default BottomImg;
