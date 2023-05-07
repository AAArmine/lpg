import Facebook_GNIW from '../../public/assets/images/Facebook_GNIW.svg';
import Instagram_GNIW from '../../public/assets/images/Instagram_GNIW.svg';
import LinkedIn_GNIW from '../../public/assets/images/LinkedIn_GNIW.svg';

export const FooterSocialMedia = () => (
  <div className="footer-copyright md:text-center mx-4 flex flex-wrap justify-center items-center">
    <h3 className="text-lg leading-6 font-bold text-primary-500 mr-3 md:mb-0 mb-3">
      Besuchen Sie uns auch auf
    </h3>
    <ul className="navbar flex md:flex-row">
      <li className="px-1">
        <a
          href="https://www.facebook.com/gniw.deutschland/"
          rel="noopener noreferrer nofollow"
          target={'_blank'}
        >
          <img
            src={Facebook_GNIW.src}
            alt="hausverkauf mit wohnrecht"
            className="w-8 h-8"
          />
        </a>
      </li>
      <li className="px-1">
        <a
          href="https://www.instagram.com/gniw.de/"
          rel="noopener noreferrer nofollow"
          target={'_blank'}
        >
          <img
            src={Instagram_GNIW.src}
            alt="hausverkauf mit wohnrecht"
            className="w-8 h-8"
          />
        </a>
      </li>
      <li className="pl-1">
        <a
          href="https://de.linkedin.com/company/gniw"
          rel="noopener noreferrer nofollow"
          target={'_blank'}
        >
          <img
            src={LinkedIn_GNIW.src}
            alt="hausverkauf mit wohnrecht"
            className="w-8 h-8"
          />
        </a>
      </li>
    </ul>
  </div>
);
