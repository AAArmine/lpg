import React, { useEffect, useRef, useState } from 'react';
import { Background } from '../background/Background';
import { Section } from '../layout/Section';

const TrustPilotCarousel = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const ref = useRef(null);
  useEffect(() => {
    // If window.Trustpilot is available it means that we need to load the TrustBox from our ref.
    // If it's not, it means the script you pasted into <head /> isn't loaded  just yet.
    // When it is, it will automatically load the TrustBox.
    if ((window as any).Trustpilot) {
      (window as any).Trustpilot.loadFromElement(ref.current, true);
    }
  }, []);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowWidth]);

  return (
    <Background color="bg-primary-500">
      <h2
        className="text-center text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl py-8"
        id="kundenstimmen"
      >
        Einige unserer Kundenstimmen
      </h2>
      <Section yPadding="pt-16 pb-20" id="trust">
        <div
          ref={ref}
          className="trustpilot-widget"
          data-locale="de-CH"
          data-template-id="53aa8912dec7e10d38f59f36"
          data-businessunit-id="6183fe7c30372a1e65069f84"
          data-style-height={windowWidth < 768 ? '350px' : '150px'}
          data-style-width="100%"
          data-theme="dark"
          data-stars="1,2,3,4,5"
          data-review-languages="de"
        >
          <a
            href="https://ch.trustpilot.com/review/gniw.de"
            target="_blank"
            rel="noopener noreferrer"
          >
            Trustpilot
          </a>
        </div>
      </Section>
    </Background>
  );
};

export default TrustPilotCarousel;
