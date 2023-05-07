import { FooterCopyright } from './FooterCopyright';
import { FooterSocialMedia } from './FooterSocialMedia';

const CenteredFooter = () => (
  <div className="md:text-center">
    <nav className="max-w-8xl flex flex-col md:flex-row flex-wrap items-center justify-between font-bold text-lg text-primary-900">
      <FooterCopyright />
      <FooterSocialMedia />
    </nav>

    <style jsx>
      {`
        .navbar :global(li) {
          @apply mx-4;
        }
      `}
    </style>
  </div>
);

export { CenteredFooter };
