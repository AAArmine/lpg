import React from 'react';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import TrustPilotSmallWidget from './TrustPilotSmallWidget';

type IImage = {
  name: string;
  logo: any;
};

type ILogoCloudProps = {
  title: string;
  images: IImage[];
  showTrust?: boolean;
};

const Cloud = (props: ILogoCloudProps) => {
  return (
    <div className="">
      <div className="max-w-7xl py-4 sm:px-6">
        <p className="text-center text-3xl font-bold text-white">
          {props.title}
        </p>
        <div className="mt-4 grid grid-cols-2 gap-2 md:grid-cols-3">
          {props.images.map((image) => (
            <div
              key={image.name}
              className="logoPartners max-w-16 max-h-24 col-span-1 flex justify-center py-4 px-12 bg-white rounded-lg filter grayscale hover:grayscale-0"
            >
              <img
                className="object-contain"
                src={image.logo.src}
                alt={image.name}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const LogoCloud = (props: ILogoCloudProps) => {
  return (
    <Background color="bg-primary-500">
      <Section yPadding="py-4 pb-8">
        {props.showTrust && <TrustPilotSmallWidget theme="dark" />}
        <Cloud {...props} />
      </Section>
    </Background>
  );
};

export default LogoCloud;
