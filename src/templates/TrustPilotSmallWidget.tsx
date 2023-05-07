import React, { useEffect, useRef } from 'react';

interface TrusProps {
  trustClasses?: string;
  theme?: string;
}
const TrustPilotSmallWidget = ({
  trustClasses = 'lg:hidden',
  theme = 'light',
}: TrusProps) => {
  const largeRef = useRef(null);
  useEffect(() => {
    // If window.Trustpilot is available it means that we need to load the TrustBox from our ref.
    // If it's not, it means the script you pasted into <head /> isn't loaded  just yet.
    // When it is, it will automatically load the TrustBox.
    if ((window as any).Trustpilot) {
      (window as any).Trustpilot.loadFromElement(largeRef.current, true);
    }
  }, []);
  return (
    <div className={`lg:bg-white ${trustClasses} sm:block pl-4 py-2`}>
      <div
        ref={largeRef}
        className="trustpilot-widget"
        data-locale="de-DE"
        data-template-id="53aa8807dec7e10d38f59f32"
        data-businessunit-id="6183fe7c30372a1e65069f84"
        data-style-height="120px"
        data-style-width="100%"
        data-theme={theme}
      >
        <a
          href="https://de.trustpilot.com/review/gniw.de"
          target={`_blank`}
          rel="noopener"
        >
          Trustpilot
        </a>
      </div>
    </div>
  );
};

export default TrustPilotSmallWidget;
