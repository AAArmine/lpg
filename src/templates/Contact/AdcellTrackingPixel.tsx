import { useState, useEffect } from 'react';
import Image from 'next/image';
import Script from 'next/script';

const projectId = process.env.NEXT_PUBLIC_ADCELL_PROJECT_ID;
const requestEventId = process.env.NEXT_PUBLIC_ADCELL_REQUEST_EVENT_ID;

const AdcellTrackingPixel =
  requestEventId && projectId
    ? () => {
        const [reference, setReference] = useState(undefined);
        useEffect(() => {
          const handleFormSubmit = (e: any) => {
            setReference(e.detail);
          };
          document.addEventListener('contact-form-submitted', handleFormSubmit);
          // remove pixel after 5 seconds
          const timer = setTimeout(() => setReference(undefined), 5000);
          return () => {
            document.removeEventListener(
              'contact-form-submitted',
              handleFormSubmit
            );
            clearTimeout(timer);
          };
        });
        if (!reference) {
          return null;
        }
        return (
          <>
            <Script
              src={`https://t.adcell.com/t/track.js?pid=${projectId}&eventid=${requestEventId}&referenz=${reference}`}
              strategy="lazyOnload"
            />
            <Image
              width="1"
              height="1"
              alt=""
              aria-hidden
              src={`https://t.adcell.com/t/track?pid=${projectId}&eventid=${requestEventId}&referenz=${reference}`}
            />
          </>
        );
      }
    : () => null;

export default AdcellTrackingPixel;
