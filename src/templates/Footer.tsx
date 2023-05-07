import { Background } from '../background/Background';
import { CenteredFooter } from '../footer/CenteredFooter';
import { Section } from '../layout/Section';
import Info from './Info';

const Footer = () => (
  <>
    <Info />
    <>
      <Background color="bg-primary-200">
        <Section yPadding="py-4">
          <CenteredFooter />
        </Section>
      </Background>
    </>
  </>
);

export default Footer;
