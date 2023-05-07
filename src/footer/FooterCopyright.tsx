const FooterCopyright = () => (
  <div className="footer-copyright text-center mx-4 text-lg leading-6 font-bold text-primary-500 md:mb-0 mb-3">
    © {new Date().getFullYear()} GNIW - Alle Rechte vorbehalten
    <style jsx>
      {`
        .footer-copyright :global(a) {
          @apply text-primary-400;
        }

        .footer-copyright :global(a:hover) {
          @apply underline;
        }
      `}
    </style>
  </div>
);

export { FooterCopyright };
