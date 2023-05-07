export type DomainInfo = {
  domainName: string;
  phoneNumber: string;
};

export type ObjWithUrl = {
  url: string;
};

export type Article = {
  date: string;
  title: string;
  pressLogo: ObjWithUrl;
  images: ObjWithUrl[];
  url: string;
};

export type FAQ = {
  question: string;
  answer: string;
};

export type SEO = {
  title: string;
  description: string;
};

export type Infos = {
  body?: any;
  title?: string;
  image?: {
    url?: string;
    alt?: string;
  };
};

export type RealEstateInfos = {
  body: any;
  title: string;
};

export type SalesFAQs = {
  answer: any;
  question: string;
};
