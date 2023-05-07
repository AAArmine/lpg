import { useEffect } from 'react';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Script from 'next/script';
import CookieBanner from '../banner/CookieBanner';

import '@fontsource/rubik/400.css';
import '@fontsource/rubik/700.css';
import '../styles/main.css';
import '../styles/slider-flex.css';
import '../styles/contact.css';
import '../styles/calculator.css';
import '../styles/landingPages.css';
import '../styles/presse.css';
import { pageview } from '../lib/gtag';
import * as fbq from '../lib/fpixel';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  useEffect(() => {
    // This pageview only triggers the first time (it's important for Pixel to have real information)
    fbq.pageview();

    const handleRouteChange = (url: URL) => {
      fbq.pageview();
      pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  return (
    <>
      {/* Global Site Code Pixel - Facebook Pixel */}
      <Script
        strategy="afterInteractive"
        id="my-script"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', ${fbq.FB_PIXEL_ID});
          `,
        }}
      />
      <Component {...pageProps} />
      <CookieBanner />
    </>
  );
};

export default MyApp;
